import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '@site/src/pages/index.module.css';

function HomepageHeader() {
  const docsUrl = useBaseUrl('overview');
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroTitleWrapper}>
          <img src="/img/logo.svg" alt="GeniVerse Logo" className={styles.heroLogo} />
          <Heading as="h1" className="hero__title">
            GeniVerse
          </Heading>
        </div>
        <p className="hero__subtitle" style={{ color: '#FFFFFF' }}>Платформа для навчання з підтримкою ШІ та імерсивних технологій</p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--primary button--lg"
            to={docsUrl}>
            Документація
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4', styles.feature)}>
            <div className="text--center padding-horiz--md">
              <h3>На основі ШІ</h3>
              <p>
                Інтелектуальна персоналізація адаптує контент, темп і формат навчання відповідно до індивідуального прогресу, контексту та навчальних переваг кожного учня.
              </p>
            </div>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <div className="text--center padding-horiz--md">
              <h3>Імерсивний XR</h3>
              <p>
                Навчання відбувається через дію — взаємодію з об'єктами, простором і сценаріями у XR-середовищах.
              </p>
            </div>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <div className="text--center padding-horiz--md">
              <h3>Модульний та Масштабований</h3>
              <p>
                Гнучкі варіанти розгортання від хмари до периферійних обчислень дозволяють
                установам масштабувати від класних кімнат до корпоративних розгортань.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.JSX.Element {
  return (
    <Layout
      title="GeniVerse"
      description="Платформа для навчання з підтримкою ШІ та імерсивних технологій">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

