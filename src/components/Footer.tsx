'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="footer section-dark">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">GrowthGrid</div>
          <div className="footer-links">
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} GrowthGrid Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
