import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Diagrams(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

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
                  className="button button--secondary button--sm"
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
    
    style AI fill:#34E1A1,stroke:#2BC891,stroke-width:2px
    style XR fill:#34E1A1,stroke:#2BC891,stroke-width:2px
    style Core fill:#141716,stroke:#1F2321,stroke-width:2px`}
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
                  className="button button--secondary button--sm"
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
    
    style A fill:#34E1A1,stroke:#2BC891,stroke-width:2px
    style B fill:#34E1A1,stroke:#2BC891,stroke-width:2px
    style C fill:#34E1A1,stroke:#2BC891,stroke-width:2px
    style D fill:#34E1A1,stroke:#2BC891,stroke-width:2px
    style E fill:#34E1A1,stroke:#2BC891,stroke-width:2px`}
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
                  className="button button--secondary button--sm"
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
    
    style A fill:#34E1A1,stroke:#2BC891,stroke-width:2px
    style B fill:#34E1A1,stroke:#2BC891,stroke-width:2px
    style C fill:#34E1A1,stroke:#2BC891,stroke-width:2px
    style E fill:#141716,stroke:#1F2321,stroke-width:2px`}
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
                  className="button button--secondary button--sm"
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
    
    style C fill:#34E1A1,stroke:#2BC891,stroke-width:2px`}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

