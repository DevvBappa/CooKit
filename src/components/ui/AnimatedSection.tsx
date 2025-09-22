'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
  className?: string;
}

export default function AnimatedSection({ 
  children, 
  direction = 'up', 
  delay = 0,
  className = '' 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a slight delay for better UX, but cap it at reasonable values
          const actualDelay = Math.min(delay, 800);
          setTimeout(() => {
            setIsVisible(true);
          }, actualDelay);
        } else {
          // Reset animation when element goes out of view (optional)
          // setIsVisible(false);
        }
      },
      {
        threshold: 0.2, // Increased threshold for better triggering
        rootMargin: '0px 0px -50px 0px' // Trigger when element is closer to viewport
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out transform'; // Shorter duration for quicker feedback
    
    if (!isVisible) {
      switch (direction) {
        case 'left':
          return `${baseClasses} -translate-x-16 opacity-0`;
        case 'right':
          return `${baseClasses} translate-x-16 opacity-0`;
        case 'up':
          return `${baseClasses} translate-y-16 opacity-0`; // More pronounced movement
        case 'down':
          return `${baseClasses} -translate-y-16 opacity-0`;
        default:
          return `${baseClasses} translate-y-16 opacity-0`;
      }
    }
    
    return `${baseClasses} translate-x-0 translate-y-0 opacity-100`;
  };

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
}