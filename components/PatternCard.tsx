import Link from "next/link";
import { SeverityMeter } from "@/components/SeverityMeter";
import type { Pattern } from "@/lib/types";

type PatternCardProps = {
  pattern: Pattern;
};

const icons: Record<string, string> = {
  "Urgency & Scarcity": "⚠️",
  "Pricing Manipulation": "€",
  "Subscription Traps": "↺",
  "Interface Manipulation": "◐",
  "Privacy Manipulation": "◼",
  "Social Engineering": "!",
  "Attention Capture": "∞",
  "Mobile Addiction": "●",
  "Trust & Authority Abuse": "★",
};

export function PatternCard({ pattern }: PatternCardProps) {
  return (
    <Link href={`/patterns/${pattern.slug}`} className="group flex min-h-64 flex-col justify-between border border-white/10 bg-surface p-5 transition hover:border-accent">
      <div>
        <div className="mb-5 flex items-start justify-between gap-4">
          <span className="text-3xl" aria-hidden="true">
            {icons[pattern.category] ?? "!"}
          </span>
          <span className="text-right text-xs uppercase tracking-[0.2em] text-muted">{pattern.category}</span>
        </div>
        <h3 className="text-2xl font-semibold group-hover:text-accent">{pattern.title}</h3>
        <p className="mt-3 leading-7 text-muted">{pattern.summary}</p>
      </div>
      <div className="mt-6">
        <p className="mb-2 text-xs uppercase tracking-[0.22em] text-muted">Toxicity</p>
        <SeverityMeter severity={pattern.severity} compact />
      </div>
    </Link>
  );
}
