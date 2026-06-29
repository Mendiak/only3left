import type { Pattern } from "@/lib/types";
import { toxicityLabel } from "@/lib/utils";

type SeverityMeterProps = {
  severity: Pattern["severity"];
  compact?: boolean;
};

export function SeverityMeter({ severity, compact = false }: SeverityMeterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2" aria-label={`Toxicity ${severity} out of 5`}>
      <span className={compact ? "text-sm" : "text-lg"} aria-hidden="true">
        {"☠️".repeat(severity)}
        <span className="opacity-25">{"☠️".repeat(5 - severity)}</span>
      </span>
      <span className="text-xs uppercase tracking-[0.22em] text-muted">{toxicityLabel(severity)}</span>
    </div>
  );
}
