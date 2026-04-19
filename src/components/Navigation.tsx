'use client';

import React, { useState, useEffect } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigateTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      setIsMenuOpen(false);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-content">
        <div className="brand-logo">GrowthGrid</div>
        
        <div className="nav-links">
          <a href="#features" onClick={(e) => navigateTo(e, '#features')} className="nav-link">Features</a>
          <a href="#how-it-works" onClick={(e) => navigateTo(e, '#how-it-works')} className="nav-link">How It Works</a>
          <a href="#testimonials" onClick={(e) => navigateTo(e, '#testimonials')} className="nav-link">Testimonials</a>
          <a href="#pricing" onClick={(e) => navigateTo(e, '#pricing')} className="nav-link">Pricing</a>
        </div>
        
        <div className="nav-actions">
          <button className="btn btn-primary" onClick={(e) => navigateTo(e, '#pricing')}>Get Started</button>
          
          <button 
            className="hamburger" 
            aria-label="Menu" 
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="#features" onClick={(e) => navigateTo(e, '#features')} className="nav-link">Features</a>
        <a href="#how-it-works" onClick={(e) => navigateTo(e, '#how-it-works')} className="nav-link">How It Works</a>
        <a href="#testimonials" onClick={(e) => navigateTo(e, '#testimonials')} className="nav-link">Testimonials</a>
        <a href="#pricing" onClick={(e) => navigateTo(e, '#pricing')} className="nav-link">Pricing</a>
        <button className="btn btn-primary w-full mt-4" onClick={(e) => navigateTo(e, '#pricing')}>Get Started</button>
      </div>
    </nav>
  );
}
