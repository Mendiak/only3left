import type { Pattern } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { localizeToxicity } from "@/lib/i18n";
import { toxicityLabel } from "@/lib/utils";

type SeverityMeterProps = {
  severity: Pattern["severity"];
  compact?: boolean;
  locale?: Locale;
};

export function SeverityMeter({ severity, compact = false, locale = "en" }: SeverityMeterProps) {
  const label = localizeToxicity(severity, locale) ?? toxicityLabel(severity);

  return (
    <div className="flex flex-wrap items-center gap-2" aria-label={locale === "es" ? `Toxicidad ${severity} de 5` : `Toxicity ${severity} out of 5`}>
      <span className={compact ? "text-sm" : "text-lg"} aria-hidden="true">
        {"☠️".repeat(severity)}
        <span className="opacity-25">{"☠️".repeat(5 - severity)}</span>
      </span>
      <span className="text-xs uppercase tracking-[0.22em] text-muted">{label}</span>
    </div>
  );
}
