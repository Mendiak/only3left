import type { ReactNode } from "react";

type FadeInViewProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  index?: number;
  stagger?: number;
};

/**
 * Entrance animation only.
 *
 * The previous version started at opacity:0 and flipped to visible through an
 * IntersectionObserver, setting aria-hidden={!visible}. Because Googlebot lays
 * the page out without scrolling, every section below the fold stayed invisible
 * and hidden from assistive tech. Here the content is always in the DOM, always
 * visible, and the animation is pure CSS so it still runs when JS is disabled.
 */
export function FadeInView({ children, delay = 0, className = "", index = 0, stagger = 0 }: FadeInViewProps) {
  const totalDelay = delay + index * stagger;

  return (
    <div
      className={["animate-fade-in-up", className].filter(Boolean).join(" ")}
      style={totalDelay > 0 ? { animationDelay: `${totalDelay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
