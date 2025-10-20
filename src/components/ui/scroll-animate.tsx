"use client";

import { useRef, useEffect, type ReactNode, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimateProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ScrollAnimate = ({ children, className, ...props }: ScrollAnimateProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div ref={ref} className={cn('scroll-reveal', className)} {...props}>
      {children}
    </div>
  );
};

export default ScrollAnimate;
