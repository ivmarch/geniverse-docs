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

  // Точки трикутника
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

      // Інформація
      drawInfo(ctx);

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [points, showParticles, showGrid, fillMode, animationMode, showTrail, particles]);

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
      grad1.addColorStop(0, 'rgba(74, 222, 128, 0.6)');
      grad1.addColorStop(1, 'rgba(34, 197, 94, 0.2)');
      ctx.fillStyle = grad1;
      ctx.fillRect(square1X, square1Y, square1Size, square1Size);
    } else if (fillMode === 'pattern') {
      ctx.fillStyle = 'rgba(74, 222, 128, 0.1)';
      ctx.fillRect(square1X, square1Y, square1Size, square1Size);
      // Патерн
      ctx.strokeStyle = 'rgba(74, 222, 128, 0.3)';
      for (let i = 0; i < square1Size; i += 10) {
        ctx.beginPath();
        ctx.moveTo(square1X + i, square1Y);
        ctx.lineTo(square1X, square1Y + i);
        ctx.stroke();
      }
    }

    ctx.strokeStyle =
      animationMode === 'pulse' ? `rgba(74, 222, 128, ${0.5 + Math.sin(time * 2) * 0.5})` : '#4ade80';
    ctx.lineWidth = 3;
    ctx.strokeRect(square1X, square1Y, square1Size, square1Size);

    // Квадрат катета 2 (горизонтальний)
    const square2Size = leg2;
    const square2X = points.A.x;
    const square2Y = points.A.y;

    if (fillMode === 'gradient') {
      const grad2 = ctx.createLinearGradient(square2X, square2Y, square2X + square2Size, square2Y + square2Size);
      grad2.addColorStop(0, 'rgba(96, 165, 250, 0.6)');
      grad2.addColorStop(1, 'rgba(59, 130, 246, 0.2)');
      ctx.fillStyle = grad2;
      ctx.fillRect(square2X, square2Y, square2Size, square2Size);
    } else if (fillMode === 'pattern') {
      ctx.fillStyle = 'rgba(96, 165, 250, 0.1)';
      ctx.fillRect(square2X, square2Y, square2Size, square2Size);
      // Патерн
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.3)';
      for (let i = 0; i < square2Size; i += 10) {
        ctx.beginPath();
        ctx.moveTo(square2X + i, square2Y);
        ctx.lineTo(square2X, square2Y + i);
        ctx.stroke();
      }
    }

    ctx.strokeStyle =
      animationMode === 'pulse' ? `rgba(96, 165, 250, ${0.5 + Math.sin(time * 2 + 1) * 0.5})` : '#60a5fa';
    ctx.lineWidth = 3;
    ctx.strokeRect(square2X, square2Y, square2Size, square2Size);

    // Квадрат гіпотенузи (повернутий і зовні трикутника)
    const angle = Math.atan2(points.C.y - points.B.y, points.C.x - points.B.x);
    
    // Середина гіпотенузи
    const midBC = {
      x: (points.B.x + points.C.x) / 2,
      y: (points.B.y + points.C.y) / 2,
    };
    
    // Нормальний вектор до гіпотенузи (перпендикулярний, назовні від трикутника)
    // Вектор від B до C
    const dx = points.C.x - points.B.x;
    const dy = points.C.y - points.B.y;
    // Нормальний вектор (повернутий на 90 градусів проти годинникової стрілки)
    const normalX = -dy;
    const normalY = dx;
    const normalLength = Math.sqrt(normalX * normalX + normalY * normalY);
    const normalizedNormalX = normalX / normalLength;
    const normalizedNormalY = normalY / normalLength;
    
    // Визначаємо, чи нормальний вектор спрямований назовні від трикутника
    // Перевіряємо, чи точка A знаходиться з іншого боку від гіпотенузи
    const toA = {
      x: points.A.x - midBC.x,
      y: points.A.y - midBC.y,
    };
    const dotProduct = toA.x * normalizedNormalX + toA.y * normalizedNormalY;
    
    // Якщо скалярний добуток позитивний, нормаль спрямована до A, потрібно інвертувати
    const outwardNormalX = dotProduct > 0 ? -normalizedNormalX : normalizedNormalX;
    const outwardNormalY = dotProduct > 0 ? -normalizedNormalY : normalizedNormalY;
    
    // Відстань від середини гіпотенузи до центру квадрата (половина діагоналі)
    const square3Size = hypotenuse;
    const diagonalHalf = (square3Size * Math.sqrt(2)) / 2;
    
    // Центр квадрата (назовні від трикутника)
    const square3Center = {
      x: midBC.x + outwardNormalX * diagonalHalf,
      y: midBC.y + outwardNormalY * diagonalHalf,
    };

    ctx.save();
    ctx.translate(square3Center.x, square3Center.y);

    const rotationOffset = animationMode === 'rotate' ? time * 0.5 : 0;
    ctx.rotate(angle + Math.PI / 4 + rotationOffset); // + Math.PI / 4 для діагонального вирівнювання

    if (fillMode === 'gradient') {
      const grad3 = ctx.createLinearGradient(-square3Size / 2, -square3Size / 2, square3Size / 2, square3Size / 2);
      grad3.addColorStop(0, 'rgba(251, 191, 36, 0.6)');
      grad3.addColorStop(1, 'rgba(245, 158, 11, 0.2)');
      ctx.fillStyle = grad3;
      ctx.fillRect(-square3Size / 2, -square3Size / 2, square3Size, square3Size);
    } else if (fillMode === 'pattern') {
      ctx.fillStyle = 'rgba(251, 191, 36, 0.1)';
      ctx.fillRect(-square3Size / 2, -square3Size / 2, square3Size, square3Size);
      // Патерн
      ctx.strokeStyle = 'rgba(251, 191, 36, 0.3)';
      for (let i = 0; i < square3Size; i += 10) {
        ctx.beginPath();
        ctx.moveTo(-square3Size / 2 + i, -square3Size / 2);
        ctx.lineTo(-square3Size / 2, -square3Size / 2 + i);
        ctx.stroke();
      }
    }

    ctx.strokeStyle =
      animationMode === 'pulse' ? `rgba(251, 191, 36, ${0.5 + Math.sin(time * 2 + 2) * 0.5})` : '#fbbf24';
    ctx.lineWidth = 3;
    ctx.strokeRect(-square3Size / 2, -square3Size / 2, square3Size, square3Size);

    ctx.restore();
    
    // Текст на квадраті гіпотенузи
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`c² = ${Math.round(hypotenuse * hypotenuse)}`, square3Center.x, square3Center.y);

    // Текст на квадратах
    ctx.fillStyle = '#4ade80';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`a² = ${Math.round(leg1 * leg1)}`, square1X + square1Size / 2, square1Y + square1Size / 2);

    ctx.fillStyle = '#60a5fa';
    ctx.fillText(`b² = ${Math.round(leg2 * leg2)}`, square2X + square2Size / 2, square2Y + square2Size / 2);
    
    // Текст на квадраті гіпотенузи буде додано після малювання квадрата
  };

  const drawTriangle = (ctx: CanvasRenderingContext2D) => {
    const time = timeRef.current;

    // Заливка трикутника
    if (animationMode === 'wave') {
      ctx.fillStyle = `rgba(20, 184, 166, ${0.3 + Math.sin(time * 2) * 0.2})`;
    } else {
      ctx.fillStyle = 'rgba(20, 184, 166, 0.4)';
    }

    ctx.beginPath();
    ctx.moveTo(points.A.x, points.A.y);
    ctx.lineTo(points.B.x, points.B.y);
    ctx.lineTo(points.C.x, points.C.y);
    ctx.closePath();
    ctx.fill();

    // Обводка трикутника
    ctx.strokeStyle = '#14b8a6';
    ctx.lineWidth = 4;
    ctx.stroke();

    // Сторони з підписами
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;

    // Лінії
    ctx.beginPath();
    ctx.moveTo(points.A.x, points.A.y);
    ctx.lineTo(points.B.x, points.B.y);
    ctx.lineTo(points.C.x, points.C.y);
    ctx.closePath();
    ctx.stroke();

    // Підписи
    ctx.fillStyle = 'white';
    ctx.font = 'bold 14px Arial';

    const midAB = {x: (points.A.x + points.B.x) / 2 - 30, y: (points.A.y + points.B.y) / 2};
    ctx.fillText(`a = ${Math.round(leg1)}`, midAB.x, midAB.y);

    const midAC = {x: (points.A.x + points.C.x) / 2, y: (points.A.y + points.C.y) / 2 + 25};
    ctx.fillText(`b = ${Math.round(leg2)}`, midAC.x, midAC.y);

    const midBC = {x: (points.B.x + points.C.x) / 2 + 25, y: (points.B.y + points.C.y) / 2 - 15};
    ctx.fillText(`c = ${Math.round(hypotenuse)}`, midBC.x, midBC.y);

    // Точки (вершини трикутника)
    drawPoint(ctx, points.A, 'A', '#ff4444');
    drawPoint(ctx, points.B, 'B', '#44ff44');
    drawPoint(ctx, points.C, 'C', '#4444ff');

    // Прямий кут
    const rightAngleSize = 15;
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.strokeRect(points.A.x - rightAngleSize, points.A.y - rightAngleSize, rightAngleSize, rightAngleSize);
  };

  const drawPoint = (ctx: CanvasRenderingContext2D, point: {x: number; y: number}, label: string, color: string) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = 'white';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(label, point.x, point.y - 15);
  };

  const drawInfo = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = 'rgba(30, 30, 50, 0.8)';
    ctx.fillRect(10, 10, 250, 120);

    ctx.fillStyle = 'white';
    ctx.font = '14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Теорема Піфагора:', 20, 30);
    ctx.font = 'bold 16px Arial';
    ctx.fillStyle = '#4ade80';
    ctx.fillText(`${Math.round(leg1 * leg1)}`, 20, 55);
    ctx.fillStyle = 'white';
    ctx.fillText('+', 90, 55);
    ctx.fillStyle = '#60a5fa';
    ctx.fillText(`${Math.round(leg2 * leg2)}`, 120, 55);
    ctx.fillStyle = 'white';
    ctx.fillText('=', 190, 55);
    ctx.fillStyle = '#fbbf24';
    ctx.fillText(`${Math.round(hypotenuse * hypotenuse)}`, 215, 55);

    ctx.font = '12px Arial';
    ctx.fillStyle = 'lightgray';
    ctx.fillText('🖱️ Перетягуйте точки A, B, C', 20, 85);
    ctx.fillText(`Режим: ${animationMode}`, 20, 105);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Перевірка чи клікнули на точку
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
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragPoint(null);
  };

  const resetTriangle = () => {
    setPoints({
      A: {x: 200, y: 400},
      B: {x: 200, y: 200},
      C: {x: 400, y: 400},
    });
  };

  return (
    <div style={{width: '100%', padding: '2rem', backgroundColor: '#0B0D0C', color: '#E8F9F0'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <h1 style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center'}}>
          🎨 Інтерактивний Canvas - Теорема Піфагора
        </h1>

        {/* Панель керування */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem'}}>
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
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2BC891')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#34E1A1')}
            >
              ✨ Нові частинки
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

