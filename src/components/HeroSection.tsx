'use client';

import React, { useEffect, useState } from 'react';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Skip animation for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setTimeout(() => setIsLoaded(true), 0);
      return;
    }
    // Slight delay so the entrance feels intentional, not instant
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      {/* Ambient glow orbs for depth */}
      <div className="hero-ambient">
        <div className="hero-orb hero-orb--blue"></div>
        <div className="hero-orb hero-orb--warm"></div>
      </div>

      <div className="hero-container">
        {/* Trust bar */}
        <div className={`hero-trust-bar ${isLoaded ? 'hero-entered' : ''}`} style={{ transitionDelay: '0ms' }}>
          <div className="hero-trust-dot"></div>
          <span>Trusted by 2,000+ growth-focused founders</span>
        </div>

        {/* The Dream Headline */}
        <h1 className={`hero-display ${isLoaded ? 'hero-entered' : ''}`} style={{ transitionDelay: '100ms' }}>
          <span className="hero-display-line">Your Revenue on</span>
          <span className="hero-display-line hero-display-line--accent">
            Autopilot<span className="hero-cursor">_</span>
          </span>
        </h1>

        {/* Dream Outcome Subtext */}
        <p className={`hero-promise ${isLoaded ? 'hero-entered' : ''}`} style={{ transitionDelay: '200ms' }}>
          Wake up to new deals in your pipeline, know exactly who to call today, and watch your close rate climb — without touching a spreadsheet.
        </p>

        {/* Primary CTA cluster */}
        <div className={`hero-cta-group ${isLoaded ? 'hero-entered' : ''}`} style={{ transitionDelay: '320ms' }}>
          <button className="hero-btn-primary" onClick={(e) => navigateTo(e, '#pricing')}>
            Start Growing — Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hero-btn-arrow">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
          <button className="hero-btn-secondary" onClick={(e) => navigateTo(e, '#how-it-works')}>
            See It In Action
          </button>
        </div>

        {/* Social proof metrics */}
        <div className={`hero-metrics ${isLoaded ? 'hero-entered' : ''}`} style={{ transitionDelay: '440ms' }}>
          <div className="hero-metric">
            <span className="hero-metric-value">3.2×</span>
            <span className="hero-metric-label">Avg. pipeline growth</span>
          </div>
          <div className="hero-metric-divider"></div>
          <div className="hero-metric">
            <span className="hero-metric-value">47%</span>
            <span className="hero-metric-label">Higher close rate</span>
          </div>
          <div className="hero-metric-divider"></div>
          <div className="hero-metric">
            <span className="hero-metric-value">&lt;2 min</span>
            <span className="hero-metric-label">Daily time investment</span>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className={`hero-visual ${isLoaded ? 'hero-entered' : ''}`} style={{ transitionDelay: '560ms' }}>
          <div className="hero-visual-glow"></div>
          <div className="hero-dashboard">
            {/* Simulated dashboard UI */}
            <div className="dash-topbar">
              <div className="dash-dots">
                <span className="dash-dot dash-dot--red"></span>
                <span className="dash-dot dash-dot--yellow"></span>
                <span className="dash-dot dash-dot--green"></span>
              </div>
              <span className="dash-title">GrowthGrid — Pipeline</span>
              <div className="dash-actions">
                <span className="dash-badge">Live</span>
              </div>
            </div>

            <div className="dash-body">
              {/* Stat Cards Row */}
              <div className="dash-stats">
                <div className="dash-stat-card">
                  <span className="dash-stat-label">Active Deals</span>
                  <span className="dash-stat-value">24</span>
                  <span className="dash-stat-change dash-stat-change--up">↑ 18%</span>
                </div>
                <div className="dash-stat-card">
                  <span className="dash-stat-label">Revenue (MTD)</span>
                  <span className="dash-stat-value">$48.2k</span>
                  <span className="dash-stat-change dash-stat-change--up">↑ 32%</span>
                </div>
                <div className="dash-stat-card">
                  <span className="dash-stat-label">Close Rate</span>
                  <span className="dash-stat-value">67%</span>
                  <span className="dash-stat-change dash-stat-change--up">↑ 12%</span>
                </div>
              </div>

              {/* Mini Chart */}
              <div className="dash-chart">
                <div className="dash-chart-header">
                  <span className="dash-chart-title">Revenue Trend</span>
                  <span className="dash-chart-period">Last 30 days</span>
                </div>
                <svg className="dash-chart-svg" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--brand-blue)" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="var(--brand-blue)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 85 Q30 80 60 75 T120 60 T180 55 T240 40 T300 30 T360 20 L400 15 L400 100 L0 100Z" fill="url(#chartGrad)" />
                  <path d="M0 85 Q30 80 60 75 T120 60 T180 55 T240 40 T300 30 T360 20 L400 15" fill="none" stroke="var(--brand-blue)" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="400" cy="15" r="4" fill="var(--brand-blue)" />
                </svg>
              </div>

              {/* Pipeline Deals */}
              <div className="dash-deals">
                <div className="dash-deal-row">
                  <div className="dash-deal-avatar dash-deal-avatar--a">SJ</div>
                  <div className="dash-deal-info">
                    <span className="dash-deal-name">Sarah Jenkins — Nexus Design</span>
                    <span className="dash-deal-stage">Negotiation</span>
                  </div>
                  <span className="dash-deal-amount">$12,400</span>
                </div>
                <div className="dash-deal-row">
                  <div className="dash-deal-avatar dash-deal-avatar--b">DC</div>
                  <div className="dash-deal-info">
                    <span className="dash-deal-name">David Chen — OptiScale</span>
                    <span className="dash-deal-stage">Proposal Sent</span>
                  </div>
                  <span className="dash-deal-amount">$8,750</span>
                </div>
                <div className="dash-deal-row">
                  <div className="dash-deal-avatar dash-deal-avatar--c">MR</div>
                  <div className="dash-deal-info">
                    <span className="dash-deal-name">Maria Rodriguez — Altura</span>
                    <span className="dash-deal-stage">Follow-up Today</span>
                  </div>
                  <span className="dash-deal-amount">$6,200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
