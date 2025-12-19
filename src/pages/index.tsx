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
        <Heading as="h1" className="hero__title">
          GeniVerse
        </Heading>
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
        <section className="padding-vert--xl">
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <div className="text--center margin-bottom--lg">
                  <Heading as="h2">Explore the Documentation</Heading>
                  <p className="margin-bottom--lg">
                    Learn about GeniVerse's architecture, capabilities, and implementation.
                  </p>
                </div>
                <div className="row">
                  <div className="col col--6 margin-bottom--md">
                    <div className="card">
                      <div className="card__header">
                        <Heading as="h3">Getting Started</Heading>
                      </div>
                      <div className="card__body">
                        <p>
                          Start with the overview to understand GeniVerse's core concepts
                          and architecture.
                        </p>
                        <Link to="/overview" className="button button--primary">
                          Read Overview
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

