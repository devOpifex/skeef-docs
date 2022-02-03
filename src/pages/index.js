import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header id="particles" className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageBanner() {
  return (
    <header className={clsx('demo')}>
      <div className="container">
        <div>
          <h2 class="cntr">Demo</h2>
          <p class="cntr">A short demo of a Skeef stream running.</p>
          <video width="100%" height="auto" controls>
            <source src="videos/skeef.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Near real-time visualisation of Twitter networks">
      <HomepageHeader />
      <HomepageBanner />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
