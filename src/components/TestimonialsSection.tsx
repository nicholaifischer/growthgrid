'use client';

import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export function TestimonialsSection() {
  return (
    <section className="section section-alt" id="testimonials">
      <div className="container container-medium">
        <ScrollReveal stagger className="testimonials-grid">
          <div className="testimonial">
            <p className="testimonial-quote">&quot;Finally, a CRM that doesn&apos;t feel like a spreadsheet. GrowthGrid gave us our afternoons back while our close rate went up 30%.&quot;</p>
            <p className="author-name">Sarah Jenkins</p>
            <p className="author-role">Founder, Nexus Design</p>
          </div>
          <div className="testimonial-separator"></div>
          <div className="testimonial">
            <p className="testimonial-quote">&quot;It&apos;s quiet. I don&apos;t get bombarded with 50 notifications a day. It just tells me exactly who to email, and how much the deal is worth.&quot;</p>
            <p className="author-name">David Chen</p>
            <p className="author-role">Head of Sales, OptiScale</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
