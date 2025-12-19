import React, {useRef, useEffect, useState, useCallback} from 'react';

const PythagoreanCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPoint, setDragPoint] = useState<string | null>(null);
  const [showParticles, setShowParticles] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [fillMode, setFillMode] = useState<'solid' | 'gradient' | 'pattern'>('gradient');
  const [animationMode, setAnimationMode] = useState<'none' | 'pulse' | 'rotate' | 'wave'>('none');
  const [showTrail, setShowTrail] = useState(false);

  // Кольори для квадратів та трикутника
  const [colors, setColors] = useState({
    square1: '#4ade80', // Квадрат катета 1
    square2: '#60a5fa', // Квадрат катета 2
    square3: '#fbbf24', // Квадрат гіпотенузи
    triangle: '#14b8a6', // Трикутник
  });

  // Розміри катетів (в пікселях)
  const [leg1Size, setLeg1Size] = useState(200);
  const [leg2Size, setLeg2Size] = useState(200);

  // Точки трикутника (обчислюються на основі розмірів катетів)
  const [points, setPoints] = useState({
    A: {x: 200, y: 400}, // Прямий кут
    B: {x: 200, y: 200}, // Верхня точка
    C: {x: 400, y: 400}, // Права точка
  });

  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
  }>>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const timeRef = useRef(0);

  // Оновлення точок при зміні розмірів катетів
  useEffect(() => {
    setPoints({
      A: {x: 200, y: 400},
      B: {x: 200, y: 400 - leg1Size},
      C: {x: 200 + leg2Size, y: 400},
    });
  }, [leg1Size, leg2Size]);

  // Обчислення довжин сторін
  const calcDistance = (p1: {x: number; y: number}, p2: {x: number; y: number}) => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  };

  const leg1 = calcDistance(points.A, points.B);
  const leg2 = calcDistance(points.A, points.C);
  const hypotenuse = calcDistance(points.B, points.C);

  // Генерація частинок
  const generateParticles = useCallback(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        x: Math.random() * 800,
        y: Math.random() * 600,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      });
    }
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    if (showParticles && particles.length === 0) {
      generateParticles();
    }
  }, [showParticles, particles.length, generateParticles]);

  // Основний рендер
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const render = () => {
      timeRef.current += 0.02;

      // Очищення з ефектом trails
      if (showTrail) {
        ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
        ctx.fillRect(0, 0, width, height);
      } else {
        ctx.fillStyle = '#0a0a14';
        ctx.fillRect(0, 0, width, height);
      }

      // Сітка
      if (showGrid) {
        drawGrid(ctx, width, height);
      }

      // Частинки
      if (showParticles) {
        updateAndDrawParticles(ctx);
      }

      // Квадрати та трикутник
      drawSquares(ctx);
      drawTriangle(ctx);

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [points, showParticles, showGrid, fillMode, animationMode, showTrail, particles, colors]);

  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.strokeStyle = 'rgba(100, 100, 150, 0.1)';
    ctx.lineWidth = 1;

    for (let x = 0; x < width; x += 50) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y < height; y += 50) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  };

  const updateAndDrawParticles = (ctx: CanvasRenderingContext2D) => {
    setParticles((prevParticles) => {
      return prevParticles.map((p) => {
        // Оновлення позиції
        let newX = p.x + p.vx;
        let newY = p.y + p.vy;

        // Відбивання від стінок
        if (newX < 0 || newX > 800) p.vx *= -1;
        if (newY < 0 || newY > 600) p.vy *= -1;

        newX = Math.max(0, Math.min(800, newX));
        newY = Math.max(0, Math.min(600, newY));

        // Малювання
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(newX, newY, p.size, 0, Math.PI * 2);
        ctx.fill();

        return {...p, x: newX, y: newY};
      });
    });
  };

  const drawSquares = (ctx: CanvasRenderingContext2D) => {
    const time = timeRef.current;

    // Квадрат катета 1 (вертикальний)
    const square1Size = leg1;
    const square1X = points.A.x - square1Size;
    const square1Y = points.A.y - square1Size;

    if (fillMode === 'gradient') {
      const grad1 = ctx.createLinearGradient(square1X, square1Y, square1X + square1Size, square1Y + square1Size);
      grad1.addColorStop(0, colors.square1 + '99');
      grad1.addColorStop(1, colors.square1 + '33');
      ctx.fillStyle = grad1;
      ctx.fillRect(square1X, square1Y, square1Size, square1Size);
    } else if (fillMode === 'pattern') {
      ctx.fillStyle = colors.square1 + '1A';
      ctx.fillRect(square1X, square1Y, square1Size, square1Size);
      // Патерн
      ctx.strokeStyle = colors.square1 + '4D';
      for (let i = 0; i < square1Size; i += 10) {
        ctx.beginPath();
        ctx.moveTo(square1X + i, square1Y);
        ctx.lineTo(square1X, square1Y + i);
        ctx.stroke();
      }
    } else {
      ctx.fillStyle = colors.square1 + '80';
      ctx.fillRect(square1X, square1Y, square1Size, square1Size);
    }

    // Stroke прибрано

    // Квадрат катета 2 (горизонтальний)
    const square2Size = leg2;
    const square2X = points.A.x;
    const square2Y = points.A.y;

    if (fillMode === 'gradient') {
      const grad2 = ctx.createLinearGradient(square2X, square2Y, square2X + square2Size, square2Y + square2Size);
      grad2.addColorStop(0, colors.square2 + '99');
      grad2.addColorStop(1, colors.square2 + '33');
      ctx.fillStyle = grad2;
      ctx.fillRect(square2X, square2Y, square2Size, square2Size);
    } else if (fillMode === 'pattern') {
      ctx.fillStyle = colors.square2 + '1A';
      ctx.fillRect(square2X, square2Y, square2Size, square2Size);
      // Патерн
      ctx.strokeStyle = colors.square2 + '4D';
      for (let i = 0; i < square2Size; i += 10) {
        ctx.beginPath();
        ctx.moveTo(square2X + i, square2Y);
        ctx.lineTo(square2X, square2Y + i);
        ctx.stroke();
      }
    } else {
      ctx.fillStyle = colors.square2 + '80';
      ctx.fillRect(square2X, square2Y, square2Size, square2Size);
    }

    // Stroke прибрано

    // Квадрат гіпотенузи (побудований на гіпотенузі як на одній зі сторін)
    const angle = Math.atan2(points.C.y - points.B.y, points.C.x - points.B.x);

    // Середина гіпотенузи
    const midBC = {
      x: (points.B.x + points.C.x) / 2,
      y: (points.B.y + points.C.y) / 2,
    };

    // Нормальний вектор до гіпотенузи (перпендикулярний, назовні від трикутника)
    const dx = points.C.x - points.B.x;
    const dy = points.C.y - points.B.y;
    const normalX = -dy;
    const normalY = dx;
    const normalLength = Math.sqrt(normalX * normalX + normalY * normalY);
    const normalizedNormalX = normalX / normalLength;
    const normalizedNormalY = normalY / normalLength;

    const toA = {
      x: points.A.x - midBC.x,
      y: points.A.y - midBC.y,
    };
    const dotProduct = toA.x * normalizedNormalX + toA.y * normalizedNormalY;

    const outwardNormalX = dotProduct > 0 ? -normalizedNormalX : normalizedNormalX;
    const outwardNormalY = dotProduct > 0 ? -normalizedNormalY : normalizedNormalY;

    const square3Size = hypotenuse;
    const halfSize = square3Size / 2;

    const square3Center = {
      x: midBC.x + outwardNormalX * halfSize,
      y: midBC.y + outwardNormalY * halfSize,
    };

    ctx.save();
    ctx.translate(square3Center.x, square3Center.y);

    const rotationOffset = animationMode === 'rotate' ? time * 0.5 : 0;
    ctx.rotate(angle + rotationOffset);

    if (fillMode === 'gradient') {
      const grad3 = ctx.createLinearGradient(-halfSize, -halfSize, halfSize, halfSize);
      grad3.addColorStop(0, colors.square3 + '99');
      grad3.addColorStop(1, colors.square3 + '33');
      ctx.fillStyle = grad3;
      ctx.fillRect(-halfSize, -halfSize, square3Size, square3Size);
    } else if (fillMode === 'pattern') {
      ctx.fillStyle = colors.square3 + '1A';
      ctx.fillRect(-halfSize, -halfSize, square3Size, square3Size);
      ctx.strokeStyle = colors.square3 + '4D';
      for (let i = 0; i < square3Size; i += 10) {
        ctx.beginPath();
        ctx.moveTo(-halfSize + i, -halfSize);
        ctx.lineTo(-halfSize, -halfSize + i);
        ctx.stroke();
      }
    } else {
      ctx.fillStyle = colors.square3 + '80';
      ctx.fillRect(-halfSize, -halfSize, square3Size, square3Size);
    }

    // Stroke прибрано

    ctx.restore();
  };

  const drawTriangle = (ctx: CanvasRenderingContext2D) => {
    const time = timeRef.current;

    // Заливка трикутника
    if (animationMode === 'wave') {
      const alpha = Math.floor(128 + Math.sin(time * 2) * 64);
      ctx.fillStyle = colors.triangle + alpha.toString(16).padStart(2, '0');
    } else {
      ctx.fillStyle = colors.triangle + '66';
    }

    ctx.beginPath();
    ctx.moveTo(points.A.x, points.A.y);
    ctx.lineTo(points.B.x, points.B.y);
    ctx.lineTo(points.C.x, points.C.y);
    ctx.closePath();
    ctx.fill();

    // Stroke та підписи прибрано
  };

  // drawPoint функція прибрана (не використовується)

  // Експорт SVG
  const exportToSVG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '800');
    svg.setAttribute('height', '600');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    // Фон прозорий (альфаканал)
    const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    bg.setAttribute('width', '800');
    bg.setAttribute('height', '600');
    bg.setAttribute('fill', 'none');
    svg.appendChild(bg);

    // Квадрат катета 1
    const square1Size = leg1;
    const square1X = points.A.x - square1Size;
    const square1Y = points.A.y - square1Size;
    const square1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    square1.setAttribute('x', square1X.toString());
    square1.setAttribute('y', square1Y.toString());
    square1.setAttribute('width', square1Size.toString());
    square1.setAttribute('height', square1Size.toString());
    square1.setAttribute('fill', colors.square1);
    svg.appendChild(square1);

    // Квадрат катета 2
    const square2Size = leg2;
    const square2X = points.A.x;
    const square2Y = points.A.y;
    const square2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    square2.setAttribute('x', square2X.toString());
    square2.setAttribute('y', square2Y.toString());
    square2.setAttribute('width', square2Size.toString());
    square2.setAttribute('height', square2Size.toString());
    square2.setAttribute('fill', colors.square2);
    svg.appendChild(square2);

    // Квадрат гіпотенузи
    const angle = Math.atan2(points.C.y - points.B.y, points.C.x - points.B.x);
    const midBC = {
      x: (points.B.x + points.C.x) / 2,
      y: (points.B.y + points.C.y) / 2,
    };
    const dx = points.C.x - points.B.x;
    const dy = points.C.y - points.B.y;
    const normalX = -dy;
    const normalY = dx;
    const normalLength = Math.sqrt(normalX * normalX + normalY * normalY);
    const normalizedNormalX = normalX / normalLength;
    const normalizedNormalY = normalY / normalLength;
    const toA = {
      x: points.A.x - midBC.x,
      y: points.A.y - midBC.y,
    };
    const dotProduct = toA.x * normalizedNormalX + toA.y * normalizedNormalY;
    const outwardNormalX = dotProduct > 0 ? -normalizedNormalX : normalizedNormalX;
    const outwardNormalY = dotProduct > 0 ? -normalizedNormalY : normalizedNormalY;
    const square3Size = hypotenuse;
    const halfSize = square3Size / 2;
    const square3Center = {
      x: midBC.x + outwardNormalX * halfSize,
      y: midBC.y + outwardNormalY * halfSize,
    };

    const square3 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    square3.setAttribute('x', (-halfSize).toString());
    square3.setAttribute('y', (-halfSize).toString());
    square3.setAttribute('width', square3Size.toString());
    square3.setAttribute('height', square3Size.toString());
    square3.setAttribute('fill', colors.square3);
    square3.setAttribute('transform', `translate(${square3Center.x}, ${square3Center.y}) rotate(${(angle * 180) / Math.PI})`);
    svg.appendChild(square3);

    // Трикутник
    const triangle = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    triangle.setAttribute('points', `${points.A.x},${points.A.y} ${points.B.x},${points.B.y} ${points.C.x},${points.C.y}`);
    triangle.setAttribute('fill', colors.triangle);
    svg.appendChild(triangle);

    // Конвертуємо SVG в рядок
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);

    // Створюємо blob та завантажуємо
    const blob = new Blob([svgString], {type: 'image/svg+xml'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'pythagorean-theorem.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    Object.keys(points).forEach((key) => {
      const point = points[key as keyof typeof points];
      const dist = Math.sqrt(Math.pow(x - point.x, 2) + Math.pow(y - point.y, 2));
      if (dist < 15) {
        setIsDragging(true);
        setDragPoint(key);
      }
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging || !dragPoint) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPoints((prev) => ({
      ...prev,
      [dragPoint]: {x, y},
    }));

    // Оновлюємо розміри катетів при перетягуванні
    if (dragPoint === 'B') {
      const newLeg1 = Math.abs(y - points.A.y);
      setLeg1Size(Math.max(50, Math.min(300, newLeg1)));
    } else if (dragPoint === 'C') {
      const newLeg2 = Math.abs(x - points.A.x);
      setLeg2Size(Math.max(50, Math.min(300, newLeg2)));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragPoint(null);
  };

  const resetTriangle = () => {
    setLeg1Size(200);
    setLeg2Size(200);
  };

  return (
    <div style={{width: '100%', padding: '2rem', backgroundColor: '#0B0D0C', color: '#E8F9F0'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h1 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center'}}>
          🎨 Інтерактивний Canvas - Теорема Піфагора
        </h1>

        {/* Панель керування */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem'}}>
          {/* Слайдери для катетів */}
          <div style={{backgroundColor: '#141716', borderRadius: '8px', padding: '1rem'}}>
            <h3 style={{fontWeight: 'bold', marginBottom: '0.75rem'}}>Розміри катетів</h3>
            <label style={{display: 'block', marginBottom: '0.5rem'}}>
              <span style={{display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem'}}>Катет 1: {leg1Size}px</span>
              <input
                type="range"
                min="50"
                max="300"
                value={leg1Size}
                onChange={(e) => setLeg1Size(Number(e.target.value))}
                style={{width: '100%'}}
              />
            </label>
            <label style={{display: 'block'}}>
              <span style={{display: 'block', marginBottom: '0.25rem', fontSize: '0.875rem'}}>Катет 2: {leg2Size}px</span>
              <input
                type="range"
                min="50"
                max="300"
                value={leg2Size}
                onChange={(e) => setLeg2Size(Number(e.target.value))}
                style={{width: '100%'}}
              />
            </label>
          </div>

          {/* Вибір кольорів */}
          <div style={{backgroundColor: '#141716', borderRadius: '8px', padding: '1rem'}}>
            <h3 style={{fontWeight: 'bold', marginBottom: '0.75rem'}}>Кольори</h3>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
              <span style={{fontSize: '0.875rem', minWidth: '80px'}}>Квадрат 1:</span>
              <input
                type="color"
                value={colors.square1}
                onChange={(e) => setColors({...colors, square1: e.target.value})}
                style={{width: '60px', height: '30px', border: '1px solid #34E1A1', borderRadius: '4px'}}
              />
            </label>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
              <span style={{fontSize: '0.875rem', minWidth: '80px'}}>Квадрат 2:</span>
              <input
                type="color"
                value={colors.square2}
                onChange={(e) => setColors({...colors, square2: e.target.value})}
                style={{width: '60px', height: '30px', border: '1px solid #34E1A1', borderRadius: '4px'}}
              />
            </label>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
              <span style={{fontSize: '0.875rem', minWidth: '80px'}}>Квадрат 3:</span>
              <input
                type="color"
                value={colors.square3}
                onChange={(e) => setColors({...colors, square3: e.target.value})}
                style={{width: '60px', height: '30px', border: '1px solid #34E1A1', borderRadius: '4px'}}
              />
            </label>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <span style={{fontSize: '0.875rem', minWidth: '80px'}}>Трикутник:</span>
              <input
                type="color"
                value={colors.triangle}
                onChange={(e) => setColors({...colors, triangle: e.target.value})}
                style={{width: '60px', height: '30px', border: '1px solid #34E1A1', borderRadius: '4px'}}
              />
            </label>
          </div>

          <div style={{backgroundColor: '#141716', borderRadius: '8px', padding: '1rem'}}>
            <h3 style={{fontWeight: 'bold', marginBottom: '0.75rem'}}>Режим анімації</h3>
            <select
              value={animationMode}
              onChange={(e) => setAnimationMode(e.target.value as typeof animationMode)}
              style={{width: '100%', backgroundColor: '#1a1d1c', color: '#E8F9F0', padding: '0.5rem', borderRadius: '4px', border: '1px solid #34E1A1'}}
            >
              <option value="none">Без анімації</option>
              <option value="pulse">Пульсація</option>
              <option value="rotate">Обертання</option>
              <option value="wave">Хвиля</option>
            </select>
          </div>

          <div style={{backgroundColor: '#141716', borderRadius: '8px', padding: '1rem'}}>
            <h3 style={{fontWeight: 'bold', marginBottom: '0.75rem'}}>Заливка</h3>
            <select
              value={fillMode}
              onChange={(e) => setFillMode(e.target.value as typeof fillMode)}
              style={{width: '100%', backgroundColor: '#1a1d1c', color: '#E8F9F0', padding: '0.5rem', borderRadius: '4px', border: '1px solid #34E1A1'}}
            >
              <option value="solid">Суцільна</option>
              <option value="gradient">Градієнт</option>
              <option value="pattern">Патерн</option>
            </select>
          </div>

          <div style={{backgroundColor: '#141716', borderRadius: '8px', padding: '1rem'}}>
            <h3 style={{fontWeight: 'bold', marginBottom: '0.75rem'}}>Ефекти</h3>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
              <input
                type="checkbox"
                checked={showParticles}
                onChange={(e) => setShowParticles(e.target.checked)}
                style={{width: '1rem', height: '1rem'}}
              />
              <span>Частинки</span>
            </label>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem'}}>
              <input
                type="checkbox"
                checked={showGrid}
                onChange={(e) => setShowGrid(e.target.checked)}
                style={{width: '1rem', height: '1rem'}}
              />
              <span>Сітка</span>
            </label>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <input
                type="checkbox"
                checked={showTrail}
                onChange={(e) => setShowTrail(e.target.checked)}
                style={{width: '1rem', height: '1rem'}}
              />
              <span>Слід</span>
            </label>
          </div>

          <div style={{backgroundColor: '#141716', borderRadius: '8px', padding: '1rem'}}>
            <h3 style={{fontWeight: 'bold', marginBottom: '0.75rem'}}>Керування</h3>
            <button
              onClick={resetTriangle}
              style={{
                width: '100%',
                backgroundColor: '#34E1A1',
                color: '#0B0D0C',
                padding: '0.5rem',
                borderRadius: '8px',
                marginBottom: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2BC891')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#34E1A1')}
            >
              🔄 Скинути
            </button>
            <button
              onClick={generateParticles}
              style={{
                width: '100%',
                backgroundColor: '#34E1A1',
                color: '#0B0D0C',
                padding: '0.5rem',
                borderRadius: '8px',
                marginBottom: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2BC891')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#34E1A1')}
            >
              ✨ Нові частинки
            </button>
            <button
              onClick={exportToSVG}
              style={{
                width: '100%',
                backgroundColor: '#34E1A1',
                color: '#0B0D0C',
                padding: '0.5rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2BC891')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#34E1A1')}
            >
              💾 Експорт SVG
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div style={{backgroundColor: '#000', borderRadius: '8px', padding: '1rem', overflow: 'hidden'}}>
          <canvas
            ref={canvasRef}
            width={800}
            height={600}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{
              display: 'block',
              margin: '0 auto',
              cursor: 'crosshair',
              border: '2px solid #34E1A1',
              borderRadius: '4px',
            }}
          />
        </div>

        <div style={{marginTop: '1rem', textAlign: 'center', color: '#B8D4C5', fontSize: '0.875rem'}}>
          🖱️ Клікайте та перетягуйте точки A, B, C для зміни трикутника
        </div>
      </div>
    </div>
  );
};

export default PythagoreanCanvas;
