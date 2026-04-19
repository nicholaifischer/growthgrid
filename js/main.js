/**
 * GrowthGrid - Main Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('open');
    });
  }

  // Close mobile menu on link click
  const mobileLinks = mobileMenu.querySelectorAll('a, button');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('open');
    });
  });

  // Sticky Nav Shadow on scroll
  const nav = document.querySelector('.nav-container');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Scroll Reveal Animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Handle standard reveals
  document.querySelectorAll('.reveal').forEach(el => {
    // If element is not inside a stagger container, observe it normally
    if (!el.closest('.reveal-stagger')) {
      revealObserver.observe(el);
    }
  });

  // Handle staggered reveals
  const staggerContainers = document.querySelectorAll('.reveal-stagger');
  staggerContainers.forEach(container => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll('.reveal');
          children.forEach((child, index) => {
            // Apply stagger delay (80ms spacing)
            child.style.transitionDelay = `${index * 80}ms`;
            child.classList.add('is-visible');
          });
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    observer.observe(container);
  });
});

// Programmatic Navigation Utility
function navigateTo(targetId) {
  const target = document.querySelector(targetId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
