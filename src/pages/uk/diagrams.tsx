import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Diagrams(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    // Wait for Docusaurus Mermaid theme to load and render diagrams
    const renderMermaid = () => {
      if (typeof window === 'undefined') return;
      
      const tryRender = () => {
        const mermaidLib = (window as any).mermaid;
        
        if (mermaidLib && typeof mermaidLib.run === 'function') {
          try {
            // Initialize Mermaid with custom theme
            mermaidLib.initialize({
              startOnLoad: false,
              theme: 'dark',
              themeVariables: {
                primaryColor: '#7CECBF',
                primaryTextColor: '#0B0D0C',
                primaryBorderColor: '#58E6B2',
                lineColor: '#A0A0A0',
                secondaryColor: '#A0A0A0',
                tertiaryColor: '#808080',
                background: '#0B0D0C',
                mainBkg: '#A0A0A0',
                secondBkg: '#808080',
                textColor: '#E8F9F0',
              },
            });
            
            // Use run() method which is the correct way for Docusaurus
            mermaidLib.run();
          } catch (error) {
            console.error('Mermaid render error:', error);
          }
        } else {
          // Retry if Mermaid not loaded yet
          setTimeout(tryRender, 200);
        }
      };
      
      // Start after delay to ensure DOM and Mermaid are ready
      setTimeout(tryRender, 1000);
    };

    renderMermaid();
  }, []);

  const exportDiagram = (event: React.MouseEvent<HTMLButtonElement>, title: string) => {
    const button = event.currentTarget;
    const card = button.closest('.card');
    if (card) {
      const mermaidDiv = card.querySelector('.mermaid');
      if (mermaidDiv) {
        const svg = mermaidDiv.querySelector('svg');
        if (svg) {
          const svgData = new XMLSerializer().serializeToString(svg);
          const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});
          const svgUrl = URL.createObjectURL(svgBlob);
          const downloadLink = document.createElement('a');
          downloadLink.href = svgUrl;
          downloadLink.download = `${title.replace(/\s+/g, '-').toLowerCase()}.svg`;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
          URL.revokeObjectURL(svgUrl);
        }
      }
    }
  };

  return (
    <Layout
      title="Діаграми"
      description="Візуальні діаграми та карти системи для GeniVerse">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <h1>Діаграми GeniVerse</h1>
            <p>
              Ця сторінка збирає всі діаграми Mermaid з документації GeniVerse.
              Натисніть кнопку експорту на будь-якій діаграмі, щоб завантажити її як SVG файл.
            </p>
          </div>
        </div>

        <div className="row margin-vert--lg">
          <div className="col col--12">
            <div className="card">
              <div className="card__header">
                <h2>Карта Архітектури Системи</h2>
                <button
                  className="button button--primary button--sm"
                  onClick={(e) => exportDiagram(e, 'Карта Архітектури Системи')}>
                  Експортувати SVG
                </button>
              </div>
              <div className="card__body">
                <div className="mermaid">
                  {`graph TB
    subgraph "Платформа GeniVerse"
        AI[Шар ШІ]
        XR[XR Движок]
        Core[Основні Сервіси]
        Auth[Авторизація та RBAC]
        Data[Шар Даних]
    end
    
    subgraph "Користувацькі Інтерфейси"
        Web[Веб Клієнт]
        Mobile[Мобільний Додаток]
        VR[VR Шолом]
        AR[AR Пристрій]
    end
    
    subgraph "Зовнішні Сервіси"
        LMS[Інтеграція LMS]
        Cloud[Хмарні Сервіси]
        Edge[Периферійні Обчислення]
    end
    
    User[Користувачі] --> Web
    User --> Mobile
    User --> VR
    User --> AR
    
    Web --> Core
    Mobile --> Core
    VR --> XR
    AR --> XR
    
    XR --> Core
    Core --> AI
    Core --> Auth
    Core --> Data
    
    Core --> LMS
    Core --> Cloud
    Core --> Edge
    
    style AI fill:#7CECBF,stroke:#58E6B2,stroke-width:2px
    style XR fill:#7CECBF,stroke:#58E6B2,stroke-width:2px
    style Core fill:#A0A0A0,stroke:#808080,stroke-width:2px`}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row margin-vert--lg">
          <div className="col col--12">
            <div className="card">
              <div className="card__header">
                <h2>Навчальний Цикл</h2>
                <button
                  className="button button--primary button--sm"
                  onClick={(e) => exportDiagram(e, 'Навчальний Цикл')}>
                  Експортувати SVG
                </button>
              </div>
              <div className="card__body">
                <div className="mermaid">
                  {`graph LR
    A[Оцінити] --> B[Адаптувати]
    B --> C[Доставити]
    C --> D[Залучити]
    D --> E[Виміряти]
    E --> A
    
    style A fill:#7CECBF,stroke:#58E6B2,stroke-width:2px
    style B fill:#7CECBF,stroke:#58E6B2,stroke-width:2px
    style C fill:#7CECBF,stroke:#58E6B2,stroke-width:2px
    style D fill:#7CECBF,stroke:#58E6B2,stroke-width:2px
    style E fill:#7CECBF,stroke:#58E6B2,stroke-width:2px`}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row margin-vert--lg">
          <div className="col col--12">
            <div className="card">
              <div className="card__header">
                <h2>Ролі та Дозволи (RBAC)</h2>
                <button
                  className="button button--primary button--sm"
                  onClick={(e) => exportDiagram(e, 'Ролі RBAC')}>
                  Експортувати SVG
                </button>
              </div>
              <div className="card__body">
                <div className="mermaid">
                  {`graph TD
    A[Супер Адмін] --> B[Адмін Установи]
    B --> C[Освітянин]
    B --> D[Створювач Контенту]
    C --> E[Учень]
    C --> F[Асистент Викладача]
    D --> E
    G[Батько/Опікун] --> E
    H[Гість] --> E
    
    style A fill:#7CECBF,stroke:#58E6B2,stroke-width:2px
    style B fill:#7CECBF,stroke:#58E6B2,stroke-width:2px
    style C fill:#7CECBF,stroke:#58E6B2,stroke-width:2px
    style E fill:#A0A0A0,stroke:#808080,stroke-width:2px`}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row margin-vert--lg">
          <div className="col col--12">
            <div className="card">
              <div className="card__header">
                <h2>Потік Персоналізації Контенту</h2>
                <button
                  className="button button--primary button--sm"
                  onClick={(e) => exportDiagram(e, 'Персоналізація Контенту')}>
                  Експортувати SVG
                </button>
              </div>
              <div className="card__body">
                <div id="personalization" className="mermaid">
                  {`graph LR
    A[Стан Учня] --> B[Аналіз Контенту]
    B --> C[Рекомендаційний Движок]
    C --> D[Адаптований Контент]
    
    E[Дані Про Продуктивність] --> C
    F[Навчальні Цілі] --> C
    G[Контекст] --> C
    
    style C fill:#7CECBF,stroke:#58E6B2,stroke-width:2px`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

