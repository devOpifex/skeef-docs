import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/real-time.svg').default,
    description: (
      <>
        As simple as running a binary.
      </>
    ),
  },
  {
    title: 'Shareable',
    Svg: require('../../static/img/share.svg').default,
    description: (
      <>
        Works locally as well as on a server.
      </>
    ),
  },
  {
    title: 'Free & Open source',
    Svg: require('../../static/img/oss.svg').default,
    description: (
      <>
        Entirely free and open-source.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
