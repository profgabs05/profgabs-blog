import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="Gabriel Olawoyin"
      description="AV Engineer. Cloud & Security. Documenting the journey.">

      <div className="hero-wrapper">
        <div className="hero-inner">

          {/* Tag */}
          <div className="hero-tag">
            Engineer · Writer · Builder
          </div>

          {/* Name */}
          <h1 className="hero-name">
            Gabriel<br />
            <span>Olawoyin</span>
          </h1>

          {/* Role */}
          <p className="hero-role">
            Post Production & Support Engineer — AV Systems · Cloud Infrastructure · IoT Security
          </p>

          {/* About */}
          <p className="hero-about">
            I'm a Post Production and Support Engineer with hands-on experience designing,
            installing, and troubleshooting AV and automation systems across real-world deployments.
            I hold certifications in Oracle Cloud Infrastructure and AVIXA's CTS-I, and I'm actively
            building toward a career at the intersection of IoT security and cloud engineering.
            This site is where I document what I'm learning, what I'm building, and what I'm
            figuring out — honestly and without the fluff.
          </p>

          {/* CTAs */}
          <div className="hero-cta">
            <Link className="btn-primary" to="/blog">
              Read the Blog
            </Link>
            <Link className="btn-secondary" to="/docs/intro">
              Browse Notes
            </Link>
          </div>

          {/* Divider */}
          <div className="hero-divider" />

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">4<span>+</span></div>
              <div className="stat-label">Cloud Certifications</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">CTS<span>-I</span></div>
              <div className="stat-label">AVIXA Certified</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3<span>+</span></div>
              <div className="stat-label">Years in AV Systems</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Still Learning</div>
            </div>
          </div>

        </div>
      </div>

    </Layout>
  );
}
