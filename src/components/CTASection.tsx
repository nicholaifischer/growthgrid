'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export function CTASection() {
  const navigateTo = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section section-cta text-center" id="pricing">
      <div className="container container-medium">
        <ScrollReveal>
          <h2 className="cta-headline">Ready to quietly scale your revenue?</h2>
          <p className="cta-subtext" style={{ maxWidth: '400px', margin: '0 auto var(--space-8)' }}>
            Join 2,000+ founders tracking their deals without the headache.
          </p>
          <button className="btn btn-primary btn-cta" onClick={(e) => navigateTo(e, '#home')}>Get Early Access</button>
        </ScrollReveal>
      </div>
    </section>
  );
}
