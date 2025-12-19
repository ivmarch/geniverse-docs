import React from 'react';
import Layout from '@theme/Layout';
import PythagoreanCanvas from '@site/src/components/PythagoreanCanvas';

export default function Pythagorean(): JSX.Element {
  return (
    <Layout title="Інтерактивна Теорема Піфагора" description="Інтерактивна демонстрація теореми Піфагора">
      <PythagoreanCanvas />
    </Layout>
  );
}

