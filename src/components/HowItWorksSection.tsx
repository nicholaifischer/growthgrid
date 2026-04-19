'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export function HowItWorksSection() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-title text-center">
          <ScrollReveal>
            <h2>Simplicity at scale.</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', marginTop: 'var(--space-4)' }}>
              Built for operators who value their time. We took the traditional 10-step B2B sales cycle and condensed it into three.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal stagger className="steps-flow">
          <div className="step">
            <div className="step-number">01</div>
            <h3 className="step-title">Connect Source</h3>
            <p className="step-description">Link your inbox or LinkedIn. We pull in context without complex mapping.</p>
          </div>
          <div className="step-connector"></div>
          
          <div className="step">
            <div className="step-number">02</div>
            <h3 className="step-title">Review Pipeline</h3>
            <p className="step-description">See exactly who to follow up with today. No distractions.</p>
          </div>
          <div className="step-connector"></div>

          <div className="step">
            <div className="step-number">03</div>
            <h3 className="step-title">Close Confidently</h3>
            <p className="step-description">Access deal profitability stats right before the final pitch.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
