'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  stagger?: boolean;
  className?: string;
}

export function ScrollReveal({ children, stagger = false, className = '' }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setTimeout(() => setIsVisible(true), 0);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  if (stagger) {
    return (
      <div 
        ref={domRef} 
        className={`reveal-stagger ${className}`}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement<{className?: string; style?: React.CSSProperties}>(child)) {
            return React.cloneElement(child, {
              className: `${child.props.className || ''} reveal ${isVisible ? 'is-visible' : ''}`,
              style: {
                ...child.props.style,
                transitionDelay: `${index * 80}ms`
              }
            });
          }
          return child;
        })}
      </div>
    );
  }

  return (
    <div 
      ref={domRef} 
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
