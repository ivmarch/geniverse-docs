import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Diagrams(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  useEffect(() => {
    // Wait for Docusaurus to load Mermaid and render diagrams
    const renderMermaid = async () => {
      if (typeof window === 'undefined') return;
      
      const maxRetries = 30;
      let retries = 0;
      
      const tryRender = async () => {
        // Check if Mermaid is loaded by Docusaurus
        const mermaidLib = (window as any).mermaid || (window as any).docusaurus?.mermaid;
        
        if (mermaidLib) {
          try {
            // Get all mermaid elements that haven't been rendered
            const mermaidElements = document.querySelectorAll('.mermaid:not([data-processed])');
            
            if (mermaidElements.length > 0) {
              // Initialize if not already done
              if (!mermaidLib.initialized) {
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
              }
              
              // Render each diagram
              for (const element of Array.from(mermaidElements)) {
                const htmlElement = element as HTMLElement;
                if (!htmlElement.querySelector('svg')) {
                  try {
                    const id = htmlElement.id || `mermaid-${Math.random().toString(36).substr(2, 9)}`;
                    if (!htmlElement.id) {
                      htmlElement.id = id;
                    }
                    
                    const definition = htmlElement.textContent || '';
                    if (definition.trim()) {
                      await mermaidLib.render(id, definition);
                      htmlElement.setAttribute('data-processed', 'true');
                    }
                  } catch (error) {
                    console.error('Error rendering Mermaid:', error);
                  }
                }
              }
            }
          } catch (error) {
            console.error('Mermaid initialization error:', error);
          }
        } else if (retries < maxRetries) {
          retries++;
          setTimeout(tryRender, 200);
        }
      };
      
      // Start after a delay to ensure DOM is ready
      setTimeout(tryRender, 500);
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
      title="Diagrams"
      description="Visual diagrams and system maps for GeniVerse">
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--12">
            <h1>GeniVerse Diagrams</h1>
            <p>
              This page aggregates all Mermaid diagrams from the GeniVerse documentation.
              Click the export button on any diagram to download it as an SVG file.
            </p>
          </div>
        </div>

        <div className="row margin-vert--lg">
          <div className="col col--12">
            <div className="card">
              <div className="card__header">
                <h2>System Architecture Map</h2>
                <button
                  className="button button--primary button--sm"
                  onClick={(e) => exportDiagram(e, 'System Architecture Map')}>
                  Export SVG
                </button>
              </div>
              <div className="card__body">
                <div className="mermaid">
                  {`graph TB
    subgraph "GeniVerse Platform"
        AI[AI Layer]
        XR[XR Engine]
        Core[Core Services]
        Auth[Auth & RBAC]
        Data[Data Layer]
    end
    
    subgraph "User Interfaces"
        Web[Web Client]
        Mobile[Mobile App]
        VR[VR Headset]
        AR[AR Device]
    end
    
    subgraph "External Services"
        LMS[LMS Integration]
        Cloud[Cloud Services]
        Edge[Edge Computing]
    end
    
    User[Users] --> Web
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
                <h2>Learning Loop</h2>
                <button
                  className="button button--primary button--sm"
                  onClick={(e) => exportDiagram(e, 'Learning Loop')}>
                  Export SVG
                </button>
              </div>
              <div className="card__body">
                <div className="mermaid">
                  {`graph LR
    A[Assess] --> B[Adapt]
    B --> C[Deliver]
    C --> D[Engage]
    D --> E[Measure]
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
                <h2>Roles & Permissions (RBAC)</h2>
                <button
                  className="button button--primary button--sm"
                  onClick={(e) => exportDiagram(e, 'Roles RBAC')}>
                  Export SVG
                </button>
              </div>
              <div className="card__body">
                <div className="mermaid">
                  {`graph TD
    A[Super Admin] --> B[Institution Admin]
    B --> C[Educator]
    B --> D[Content Creator]
    C --> E[Learner]
    C --> F[Teaching Assistant]
    D --> E
    G[Parent/Guardian] --> E
    H[Guest] --> E
    
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
                <h2>Content Personalization Flow</h2>
                <button
                  className="button button--primary button--sm"
                  onClick={(e) => exportDiagram(e, 'Content Personalization')}>
                  Export SVG
                </button>
              </div>
              <div className="card__body">
                <div id="personalization" className="mermaid">
                  {`graph LR
    A[Learner State] --> B[Content Analysis]
    B --> C[Recommendation Engine]
    C --> D[Adapted Content]
    
    E[Performance Data] --> C
    F[Learning Goals] --> C
    G[Context] --> C
    
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

