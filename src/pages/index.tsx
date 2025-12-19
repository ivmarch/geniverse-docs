import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

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
        <p className="hero__subtitle" style={{ color: '#FFFFFF' }}>AI-Powered Immersive Learning Platform</p>
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
              <h3>AI-Powered</h3>
              <p>
                Advanced AI personalization adapts content, pacing, and delivery methods
                to each learner's unique needs and learning style.
              </p>
            </div>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <div className="text--center padding-horiz--md">
              <h3>Immersive XR</h3>
              <p>
                Virtual and augmented reality experiences create hands-on learning
                opportunities that transcend traditional educational boundaries.
              </p>
            </div>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <div className="text--center padding-horiz--md">
              <h3>Modular & Scalable</h3>
              <p>
                Flexible deployment options from cloud to edge computing enable
                institutions to scale from classrooms to enterprise deployments.
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

