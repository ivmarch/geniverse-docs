import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '@site/src/pages/index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroTitleWrapper}>
          <img src="/img/logo.svg" alt="GeniVerse Logo" className={styles.heroLogo} />
          <Heading as="h1" className="hero__title">
            GeniVerse
          </Heading>
        </div>
        <p className="hero__subtitle">Платформа для навчання з підтримкою ШІ та імерсивних технологій</p>
      </div>
    </header>
  );
}

function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4', styles.feature)}>
            <div className="text--center padding-horiz--md">
              <h3>На основі ШІ</h3>
              <p>
                Розвинена персоналізація ШІ адаптує контент, темп та методи доставки
                до унікальних потреб та стилю навчання кожного учня.
              </p>
            </div>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <div className="text--center padding-horiz--md">
              <h3>Імерсивний XR</h3>
              <p>
                Віртуальні та доповнені реальні досвіди створюють практичні можливості навчання,
                які переступають традиційні освітні межі.
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

export default function Home(): JSX.Element {
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

