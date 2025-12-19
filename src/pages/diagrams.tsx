import React from 'react';
import Layout from '@theme/Layout';
import Mermaid from '@theme/Mermaid';

export default function Diagrams(): React.JSX.Element {

  const exportDiagram = (event: React.MouseEvent<HTMLButtonElement>, title: string) => {
    const button = event.currentTarget;
    const card = button.closest('.card');
    if (card) {
      // Try to find SVG in Mermaid container or directly in card
      const mermaidContainer = card.querySelector('.docusaurus-mermaid-container');
      const svg = mermaidContainer?.querySelector('svg') || card.querySelector('svg');
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
                <Mermaid value={`graph TB
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
    Core --> Edge`} />
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
                <Mermaid value={`graph LR
    A[Assess] --> B[Adapt]
    B --> C[Deliver]
    C --> D[Engage]
    D --> E[Measure]
    E --> A`} />
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
                <Mermaid value={`graph TD
    A[Super Admin] --> B[Institution Admin]
    B --> C[Educator]
    B --> D[Content Creator]
    C --> E[Learner]
    C --> F[Teaching Assistant]
    D --> E
    G[Parent/Guardian] --> E
    H[Guest] --> E`} />
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
                <Mermaid value={`graph LR
    A[Learner State] --> B[Content Analysis]
    B --> C[Recommendation Engine]
    C --> D[Adapted Content]

    E[Performance Data] --> C
    F[Learning Goals] --> C
    G[Context] --> C`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

