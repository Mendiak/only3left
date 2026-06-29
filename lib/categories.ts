import type { Category } from "@/lib/types";
import { slugify } from "@/lib/utils";

const categoryTitles = [
  "Urgency & Scarcity",
  "Pricing Manipulation",
  "Subscription Traps",
  "Interface Manipulation",
  "Privacy Manipulation",
  "Social Engineering",
  "Attention Capture",
  "Gamification Abuse",
  "Mobile Addiction",
  "Trust & Authority Abuse",
];

// Categories are centralized so navigation, filters, and future indexes share one taxonomy.
const descriptions: Record<string, string> = {
  "Urgency & Scarcity": "Pressure tactics that compress deliberation into a nervous click.",
  "Pricing Manipulation": "Plan grids, anchors, fees, and defaults arranged to make comparison harder.",
  "Subscription Traps": "Flows that make commitment feel light and cancellation feel administrative.",
  "Interface Manipulation": "Visual decisions that steer attention while pretending to stay neutral.",
  "Privacy Manipulation": "Consent experiences where privacy technically exists, somewhere underground.",
  "Social Engineering": "Borrowed credibility, crowd cues, and shame dressed as product copy.",
  "Attention Capture": "Loops designed to keep the next action just visible enough.",
  "Gamification Abuse": "Rewards, streaks, and progress mechanics used after they stop serving the user.",
  "Mobile Addiction": "Phone-native patterns that turn checking into a reflex.",
  "Trust & Authority Abuse": "Badges, reviews, and institutional signals deployed beyond their evidence.",
};

export const categories: Category[] = categoryTitles.map((title) => ({
  title,
  slug: slugify(title),
  description: descriptions[title],
}));

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
