import React from 'react';

interface ColorSwatchProps {
  name: string;
  color: string;
  description: string;
}

export function ColorSwatch({ name, color, description }: ColorSwatchProps): React.JSX.Element {
  const needsBorder = color === '#0B0D0C' || color === '#141716' || color === '#1F2321' || color === '#E8F9F0' || color === '#B8D4C5';
  
  return (
    <div style={{
      background: '#141716',
      border: '1px solid #1F2321',
      borderRadius: '8px',
      padding: '16px',
      color: '#E8F9F0'
    }}>
      <div style={{
        width: '100%',
        height: '80px',
        background: color,
        borderRadius: '4px',
        marginBottom: '8px',
        border: needsBorder ? '1px solid #1F2321' : 'none'
      }}></div>
      <strong>{name}</strong><br/>
      <code>{color}</code><br/>
      {description}
    </div>
  );
}

interface ColorGridProps {
  children: React.ReactNode;
}

export function ColorGrid({ children }: ColorGridProps): React.JSX.Element {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      margin: '24px 0'
    }}>
      {children}
    </div>
  );
}


