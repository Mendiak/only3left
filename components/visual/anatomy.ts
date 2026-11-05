/**
 * Position of each numbered callout, expressed as a percentage of the
 * specimen frame. The order must match the notes in `TrapRevealer.trapData`
 * for the same slug.
 */
export type SpecimenCallout = {
  top: string;
  left: string;
};

export const specimenCallouts: Record<string, SpecimenCallout[]> = {
  "fake-scarcity": [
    { top: "76%", left: "8%" },
    { top: "76%", left: "30%" },
    { top: "76%", left: "85%" },
  ],
  "hard-to-close": [
    { top: "17%", left: "88%" },
    { top: "86%", left: "46%" },
  ],
  "visual-obstruction": [
    { top: "72%", left: "60%" },
    { top: "88%", left: "50%" },
  ],
};
