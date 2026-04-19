'use client';

import React, { useState } from 'react';

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="pricing-section">
      <div className="container">
        
        <div className="pricing-header">
          <h1 className="pricing-headline font-display">
            Simple pricing,<br />
            <em className="pricing-headline-em">serious growth.</em>
          </h1>
          
          <div className="pricing-toggle-wrapper">
            <span className={`pricing-toggle-label ${!isYearly ? 'active' : ''}`}>Monthly</span>
            <button 
              className="pricing-toggle" 
              onClick={() => setIsYearly(!isYearly)}
              aria-label="Toggle billing period"
            >
              <div className={`pricing-toggle-indicator ${isYearly ? 'yearly' : 'monthly'}`} />
            </button>
            <span className={`pricing-toggle-label ${isYearly ? 'active' : ''}`}>
              Yearly <span className="pricing-badge-save">Save 40%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          
          {/* Free Tier */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="pricing-tier-name font-display">Free</h3>
              <p className="pricing-tier-desc">The perfect way to get started and explore GrowthGrid.</p>
              <div className="pricing-price-container">
                <span className="pricing-price font-display">$0</span>
              </div>
            </div>
            
            <div className="pricing-card-body">
              <button className="btn btn-ghost w-full">Get Started</button>
              <ul className="pricing-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pricing-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Up to 50 tracked leads
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pricing-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Basic analytics dashboard
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pricing-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Community support
                </li>
              </ul>
            </div>
          </div>

          {/* Beginner Tier */}
          <div className="pricing-card pricing-card--featured">
            <div className="pricing-badge-popular">Most Popular</div>
            <div className="pricing-card-header">
              <h3 className="pricing-tier-name font-display">Beginner</h3>
              <p className="pricing-tier-desc">Everything you need to find more sales and start scaling.</p>
              <div className="pricing-price-container">
                <span className="pricing-price font-display">${isYearly ? '12' : '20'}</span>
                <span className="pricing-period">/mo</span>
              </div>
              {isYearly && <p className="pricing-billed-text">Billed $144 annually</p>}
            </div>
            
            <div className="pricing-card-body">
              <button className="btn btn-primary w-full">Start Free Trial</button>
              <ul className="pricing-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pricing-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Unlimited tracked leads
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pricing-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Advanced sales analytics
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pricing-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Email &amp; calendar integrations
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pricing-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Priority email support
                </li>
              </ul>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <h3 className="pricing-tier-name font-display">Pro</h3>
              <p className="pricing-tier-desc">Maximum intelligence and optimization for your entire pipeline.</p>
              <div className="pricing-price-container">
                <span className="pricing-price font-display">${isYearly ? '60' : '100'}</span>
                <span className="pricing-period">/mo</span>
              </div>
              {isYearly && <p className="pricing-billed-text">Billed $720 annually</p>}
            </div>
            
            <div className="pricing-card-body">
              <button className="btn btn-primary w-full">Start Free Trial</button>
              <ul className="pricing-features">
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pricing-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Everything in Beginner
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pricing-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  AI-powered deal intelligence
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pricing-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Custom reporting dashboards
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pricing-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  API access &amp; webhooks
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pricing-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  1-on-1 onboarding
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
