"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type FadeInViewProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  index?: number;
  stagger?: number;
};

export function FadeInView({ children, delay = 0, className = "", index = 0, stagger = 0 }: FadeInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const totalDelay = delay + index * stagger;

  return (
    <div
      ref={ref}
      className={className}
      role="region"
      aria-hidden={!visible}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease-out ${totalDelay}ms, transform 0.5s ease-out ${totalDelay}ms`,
      }}
    >
      {children}
    </div>
  );
}
