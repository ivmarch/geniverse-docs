import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/uk/overview">
            Почати
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/uk/diagrams">
            Переглянути Діаграми
          </Link>
        </div>
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
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Платформа для навчання з підтримкою ШІ та імерсивних технологій">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className="padding-vert--xl">
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <div className="text--center margin-bottom--lg">
                  <Heading as="h2">Дослідіть Документацію</Heading>
                  <p className="margin-bottom--lg">
                    Дізнайтеся про архітектуру, можливості та реалізацію GeniVerse.
                  </p>
                </div>
                <div className="row">
                  <div className="col col--6 margin-bottom--md">
                    <div className="card">
                      <div className="card__header">
                        <Heading as="h3">Початок Роботи</Heading>
                      </div>
                      <div className="card__body">
                        <p>
                          Почніть з огляду, щоб зрозуміти основні концепції
                          та архітектуру GeniVerse.
                        </p>
                        <Link to="/uk/overview" className="button button--primary">
                          Читати Огляд
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col col--6 margin-bottom--md">
                    <div className="card">
                      <div className="card__header">
                        <Heading as="h3">Візуальні Посібники</Heading>
                      </div>
                      <div className="card__body">
                        <p>
                          Дослідіть системні діаграми, навчальні цикли та карти архітектури
                          в нашому розділі діаграм.
                        </p>
                        <Link to="/uk/diagrams" className="button button--primary">
                          Переглянути Діаграми
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

