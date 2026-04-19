'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-top">
          <h2 className="footer-headline">
            Less effort,<br />
            <em className="footer-headline-em">more revenue.</em>
          </h2>
          
          <div className="footer-nav-grid">
            <div className="footer-col">
              <h3 className="footer-col-title">Product</h3>
              <ul className="footer-col-links">
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">Browser extension</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="footer-col-title">Resources</h3>
              <ul className="footer-col-links">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Docs</a></li>
                <li><a href="#">Help center</a></li>
                <li><a href="#">Playbook</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="footer-col-title">Community</h3>
              <ul className="footer-col-links">
                <li><a href="#">Events</a></li>
                <li><a href="#">Fellows</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="footer-col-title">Compare</h3>
              <ul className="footer-col-links">
                <li><a href="#">VS Salesforce</a></li>
                <li><a href="#">VS HubSpot</a></li>
                <li><a href="#">VS Pipedrive</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="footer-col-title">Download</h3>
              <ul className="footer-col-links">
                <li><a href="#">Mobile app</a></li>
                <li><a href="#">Desktop app</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="footer-col-title">Business</h3>
              <ul className="footer-col-links">
                <li><a href="#">Team plan</a></li>
                <li><a href="#">SSO</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3 className="footer-col-title">Company</h3>
              <ul className="footer-col-links">
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="YouTube">YT</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
          <button className="footer-lang">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            English
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        </div>

        <div className="footer-bottom">
          <div className="footer-from">
            <span>from</span> <span className="font-display">GrowthGrid</span>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} GrowthGrid Inc.
          </div>
        </div>

      </div>
    </footer>
  );
}
