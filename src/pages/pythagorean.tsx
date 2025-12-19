import React from 'react';
import Layout from '@theme/Layout';
import PythagoreanCanvas from '@site/src/components/PythagoreanCanvas';

export default function Pythagorean(): JSX.Element {
  return (
    <Layout title="Pythagorean Theorem Interactive" description="Interactive demonstration of the Pythagorean theorem">
      <PythagoreanCanvas />
    </Layout>
  );
}

