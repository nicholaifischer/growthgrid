'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export function FeaturesSection() {
  return (
    <section className="section section-alt" id="features">
      <div className="container">
        <ScrollReveal stagger className="features-grid">
          <div className="card card-interactive">
            <div className="card-icon" style={{ background: 'none' }}>
              <img src="/assets/images/feature_find.png" alt="Magnifying glass icon" width="48" height="48" style={{ borderRadius: 'var(--radius-md)' }} />
            </div>
            <h2 className="card-title">Find Your Next Customer</h2>
            <p className="card-description">
              Stop guessing who to contact. Our AI-driven targeting surface prospects that actually need your services right now, eliminating cold outreach fatigue.
            </p>
          </div>
          
          <div className="card card-interactive">
            <div className="card-icon" style={{ background: 'none' }}>
              <img src="/assets/images/feature_track.png" alt="Kanban tracker icon" width="48" height="48" style={{ borderRadius: 'var(--radius-md)' }} />
            </div>
            <h2 className="card-title">Track Every Deal</h2>
            <p className="card-description">
              A minimalist pipeline viewer that stays out of your way. Know exactly where every prospect is without clicking through five messy panels.
            </p>
          </div>

          <div className="card card-interactive">
            <div className="card-icon" style={{ background: 'none' }}>
              <img src="/assets/images/feature_profit.png" alt="Optimization chart icon" width="48" height="48" style={{ borderRadius: 'var(--radius-md)' }} />
            </div>
            <h2 className="card-title">Optimize for Profit</h2>
            <p className="card-description">
              Don&apos;t just track revenue. GrowthGrid actively analyzes velocity and profit margins to recommend which deals to prioritize.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
