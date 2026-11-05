import type { ReactNode } from "react";
import { getReference, type ReferenceId } from "@/lib/references";

/**
 * Editorial outbound link. No rel="nofollow": these are citations to primary
 * sources, not paid or untrusted placements.
 */
export function ExternalLink({
  refId,
  children,
  className = "",
}: {
  refId: ReferenceId;
  children?: ReactNode;
  className?: string;
}) {
  const reference = getReference(refId);

  return (
    <a
      href={reference.url}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ||
        "text-paper underline decoration-accent/40 underline-offset-4 transition hover:text-accent hover:decoration-accent"
      }
    >
      {children ?? reference.label}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
