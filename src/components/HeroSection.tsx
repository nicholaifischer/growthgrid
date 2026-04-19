'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export function HeroSection() {
  const navigateTo = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section section-hero" id="home">
      <div className="container container-narrow">
        <ScrollReveal stagger className="hero-content">
          <p className="hero-eyebrow">THE ALL-IN-ONE GROWTH ENGINE</p>
          <h1 className="hero-headline">Find, Track, and Close More Sales</h1>
          <p className="hero-subtext">
            We stripped away the clutter of traditional marketing tools to focus on what actually matters: Scaling, Profit, and Optimization.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={(e) => navigateTo(e, '#pricing')}>Start Growing Free</button>
            <button className="btn btn-ghost btn-lg" onClick={(e) => navigateTo(e, '#how-it-works')}>See How It Works</button>
          </div>
          
          <div className="suggestion-pills">
            <span className="pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pill-icon"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              Scaling
            </span>
            <span className="pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pill-icon"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              Profit
            </span>
            <span className="pill">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pill-icon"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
              Optimization
            </span>
          </div>

          <div className="hero-image reveal" style={{ marginTop: 'var(--space-12)' }}>
            <img src="/assets/images/hero.png" alt="GrowthGrid abstract illustration" style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-raised)' }} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
