import type { Pattern } from "@/lib/types";

// Local typed data keeps the MVP backend-free and makes a future MDX migration explicit.
export const patterns: Pattern[] = [
  {
    slug: "fake-scarcity",
    title: "Fake Scarcity",
    category: "Urgency & Scarcity",
    summary: "Only 3 rooms left. Allegedly. Conveniently. Forever.",
    description:
      "Fake scarcity claims that a product, seat, room, or offer is almost gone without making the constraint verifiable or meaningful.",
    severity: 5,
    psychology: ["Loss Aversion", "FOMO", "Cognitive Load"],
    examples: ["Only 3 left at this price.", "14 people are viewing this item right now."],
    ethicalAlternative:
      "Show real inventory, explain why it is limited, and remove pressure copy when the number is not actionable.",
    origin: "Travel booking, ecommerce, ticketing, and flash-sale interfaces.",
  },
  {
    slug: "countdown-reset",
    title: "Countdown Reset",
    category: "Urgency & Scarcity",
    summary: "The timer reaches zero, takes a small bow, and starts again.",
    description:
      "A deadline is presented as decisive, but the same offer remains available after the countdown ends or reappears on refresh.",
    severity: 5,
    psychology: ["Loss Aversion", "FOMO", "Cognitive Load"],
    examples: ["Offer expires in 04:59.", "Refresh the page and the same exclusive deadline returns."],
    ethicalAlternative: "Use real deadlines, disclose timezone and terms, and let expired promotions actually expire.",
    origin: "Limited-time deal pages, webinar funnels, and checkout overlays.",
  },
  {
    slug: "confirmshaming",
    title: "Confirmshaming",
    category: "Social Engineering",
    summary: "No thanks, I hate saving money.",
    description:
      "A refusal action is written to insult, guilt, or belittle the user for making a legitimate choice.",
    severity: 3,
    psychology: ["Social Proof", "Commitment Bias"],
    examples: ["No, I prefer paying full price.", "I do not care about my health."],
    ethicalAlternative: "Label decline actions neutrally and respect the user's decision without editorial commentary.",
    origin: "Newsletter modals, ecommerce coupons, and lead-capture popups.",
  },
  {
    slug: "roach-motel",
    title: "Roach Motel",
    category: "Subscription Traps",
    summary: "Easy to enter. Curiously ceremonial to leave.",
    description:
      "A product makes signup, purchase, or subscription simple while cancellation requires hidden paths, calls, delays, or repeated persuasion.",
    severity: 5,
    psychology: ["Commitment Bias", "Cognitive Load", "Loss Aversion"],
    examples: ["Subscribe in one click, cancel through a phone queue.", "The cancellation link is buried behind retention screens."],
    ethicalAlternative: "Make cancellation as easy as signup and confirm outcomes immediately in plain language.",
    origin: "Subscription software, gyms, media services, and membership programs.",
  },
  {
    slug: "decoy-pricing",
    title: "Decoy Pricing",
    category: "Pricing Manipulation",
    summary: "One plan exists mostly to make another plan look reasonable.",
    description:
      "A deliberately unattractive option anchors the user's comparison so the intended plan feels like the sensible middle.",
    severity: 3,
    psychology: ["Anchoring", "Cognitive Load"],
    examples: ["Basic for 5, Pro for 19, Ultra for 199.", "A print-only plan nudges users toward a bundle."],
    ethicalAlternative: "Design plans around distinct user needs and make tradeoffs clear without artificial anchors.",
    origin: "SaaS plan tables, media subscriptions, and product bundles.",
  },
  {
    slug: "hidden-cancellation",
    title: "Hidden Cancellation",
    category: "Subscription Traps",
    summary: "Cancellation exists, in the same sense that a secret door exists.",
    description:
      "The user can cancel, but the path is obscured through vague labels, nested settings, or support-only workflows.",
    severity: 4,
    psychology: ["Cognitive Load", "Commitment Bias"],
    examples: ["Manage plan hides the cancel action three screens deep.", "The help article names a button that does not exist."],
    ethicalAlternative: "Put cancellation in account settings with direct labels, clear consequences, and immediate confirmation.",
    origin: "Consumer subscriptions, trials, and account dashboards.",
  },
  {
    slug: "forced-continuity",
    title: "Forced Continuity",
    category: "Subscription Traps",
    summary: "The free trial ends quietly; the invoice speaks clearly.",
    description:
      "A trial converts into a paid subscription without timely reminders, clear billing expectations, or simple opt-out.",
    severity: 4,
    psychology: ["Default Bias", "Commitment Bias"],
    examples: ["Start free, billed annually after seven days.", "Reminder emails are absent or written like promotional mail."],
    ethicalAlternative: "Send clear reminders, disclose billing dates upfront, and offer no-card trials when practical.",
    origin: "Streaming, software trials, education platforms, and consumer apps.",
  },
  {
    slug: "privacy-zuckering",
    title: "Privacy Zuckering",
    category: "Privacy Manipulation",
    summary: "Sharing more than intended, with excellent onboarding confetti.",
    description:
      "The interface nudges users into disclosing personal information or granting permissions they did not clearly understand.",
    severity: 5,
    psychology: ["Default Bias", "Cognitive Load", "Social Proof"],
    examples: ["Find friends requires broad contact access.", "Profile visibility defaults to public after setup."],
    ethicalAlternative: "Ask for data at the moment of need, explain the benefit, and default to the most private reasonable option.",
    origin: "Social products, mobile onboarding, and data-heavy consumer apps.",
  },
  {
    slug: "social-proof-inflation",
    title: "Social Proof Inflation",
    category: "Trust & Authority Abuse",
    summary: "Everyone is buying this. Everyone, apparently, has a busy afternoon.",
    description:
      "Popularity claims are exaggerated, outdated, vague, or simulated to imply confidence that the evidence does not support.",
    severity: 4,
    psychology: ["Social Proof", "FOMO"],
    examples: ["4,812 people bought this today.", "Trending in your area, with no source or timeframe."],
    ethicalAlternative: "Use specific, recent, auditable signals and avoid popularity claims when the data is weak.",
    origin: "Marketplaces, travel sites, crowdfunding, and ecommerce.",
  },
  {
    slug: "visual-hierarchy-manipulation",
    title: "Visual Hierarchy Manipulation",
    category: "Interface Manipulation",
    summary: "The preferred button is a cathedral; the alternative is a footnote.",
    description:
      "Color, scale, contrast, and placement make one choice feel like the natural action while making alternatives hard to notice.",
    severity: 3,
    psychology: ["Default Bias", "Cognitive Load"],
    examples: ["Accept all is bright and large; reject is a low-contrast text link.", "The paid option is visually framed as progress."],
    ethicalAlternative: "Give materially different choices comparable visibility and plain labels.",
    origin: "Consent dialogs, upgrade screens, checkout flows, and onboarding.",
  },
  {
    slug: "cookie-labyrinth",
    title: "Cookie Labyrinth",
    category: "Privacy Manipulation",
    summary: "Accept is one button. Refuse is a regional governance exercise.",
    description:
      "Cookie controls make consent withdrawal or granular privacy choices much harder than accepting tracking.",
    severity: 5,
    psychology: ["Cognitive Load", "Default Bias"],
    examples: ["Accept all is immediate; manage opens seventeen toggles.", "Reject all is hidden below scroll or behind categories."],
    ethicalAlternative: "Offer equal-weight accept and reject controls, with optional granular settings for users who want them.",
    origin: "Cookie banners, consent management platforms, and ad-funded sites.",
  },
  {
    slug: "infinite-scroll",
    title: "Infinite Scroll",
    category: "Attention Capture",
    summary: "A bottomless page, now with plausible deniability.",
    description:
      "Content loads continuously so stopping requires more self-control than continuing.",
    severity: 3,
    psychology: ["Commitment Bias", "Cognitive Load"],
    examples: ["Feeds append new posts as the user approaches the end.", "Stopping points are removed from browsing sessions."],
    ethicalAlternative: "Add natural stopping cues, session controls, and ways to resume intentionally.",
    origin: "Social feeds, video platforms, shopping grids, and news apps.",
  },
  {
    slug: "notification-addiction",
    title: "Notification Addiction",
    category: "Mobile Addiction",
    summary: "A red dot, the smallest possible emergency.",
    description:
      "Badges, alerts, and push prompts are tuned to create habitual checking rather than meaningful interruption.",
    severity: 4,
    psychology: ["FOMO", "Commitment Bias"],
    examples: ["A badge appears for low-value updates.", "Push prompts frame refusal as missing out."],
    ethicalAlternative: "Bundle low-priority updates, let users set notification intent, and avoid urgency styling for routine events.",
    origin: "Mobile apps, messaging products, marketplaces, and games.",
  },
  {
    slug: "default-bias",
    title: "Default Bias",
    category: "Interface Manipulation",
    summary: "The default is not neutral. It is a decision wearing a cardigan.",
    description:
      "Users are nudged toward a selected option because changing defaults requires attention, effort, or confidence.",
    severity: 3,
    psychology: ["Default Bias", "Cognitive Load"],
    examples: ["Marketing emails are opted in by default.", "Annual billing is preselected in a pricing toggle."],
    ethicalAlternative: "Use defaults that protect users, disclose implications, and require active choice for sensitive decisions.",
    origin: "Forms, checkout pages, onboarding, privacy settings, and plan selectors.",
  },
  {
    slug: "preselected-options",
    title: "Preselected Options",
    category: "Pricing Manipulation",
    summary: "The box was checked before you arrived. Hospitality, perhaps.",
    description:
      "Optional add-ons, permissions, upgrades, or commitments are selected before the user makes an active choice.",
    severity: 4,
    psychology: ["Default Bias", "Anchoring"],
    examples: ["Insurance is added to the basket automatically.", "A donation or tip is preselected during checkout."],
    ethicalAlternative: "Make optional costs and permissions opt-in, especially when they affect billing or privacy.",
    origin: "Ticketing, travel, checkout, donation flows, and mobile setup.",
  },
];

export function getFeaturedPatterns() {
  return patterns.slice(0, 6);
}

export function getPattern(slug: string) {
  return patterns.find((pattern) => pattern.slug === slug);
}

export function getPatternsByCategory(category: string) {
  return patterns.filter((pattern) => pattern.category === category);
}
