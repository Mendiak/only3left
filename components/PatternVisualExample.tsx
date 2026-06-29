"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { Pattern } from "@/lib/types";

type PatternVisualExampleProps = {
  pattern: Pattern;
};

const photos = {
  hotel:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
  timer:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
  shopping:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
  lamp:
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
  phone:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
  workspace:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
  travel:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
  app:
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80",
  concert:
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1000&q=80",
  sneakers:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
  article:
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1000&q=80",
  course:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
  video:
    "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=80",
  fitness:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80",
  ai:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
  beauty:
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80",
};

const feedPhotos = [
  photos.shopping, photos.workspace, photos.travel, photos.phone,
  photos.sneakers, photos.concert, photos.hotel, photos.timer,
  photos.lamp, photos.app, photos.article, photos.course,
  photos.video, photos.fitness, photos.ai, photos.beauty,
  "https://images.unsplash.com/photo-1549388604-817d15aa0110?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
];

const visualExamples: Record<string, ReactNode> = {
  "fake-scarcity": (
    <SpecimenFrame title="Hotel booking result">
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.hotel} alt="Hotel room" />
        <div className="space-y-4 p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xl font-bold">Central Studio, Old Town</p>
              <p className="text-sm text-muted">Free cancellation · Breakfast included</p>
            </div>
            <Rating value="8.9" label="Excellent" />
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge tone="warning">Only 3 rooms left</Badge>
            <Badge tone="neutral">22 people viewed today</Badge>
          </div>
          <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-4">
            <div>
              <p className="text-xs text-muted">Tonight</p>
              <p className="text-2xl font-black">142€</p>
            </div>
            <Button>Reserve</Button>
          </div>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "countdown-reset": (
    <SpecimenFrame title="Flash sale checkout">
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.timer} alt="Vacation landscape" />
        <div className="space-y-4 p-4">
          <div className="flex items-center justify-between">
            <Badge tone="warning">Private deal</Badge>
            <p className="text-xs text-muted">Session offer</p>
          </div>
          <p className="text-2xl font-black">Mediterranean weekend</p>
          <div className="grid grid-cols-[1fr_auto] items-center gap-3 border border-accent/40 bg-accent/10 p-3">
            <span className="text-sm text-accent">Discount expires in</span>
            <span className="font-mono text-3xl font-black text-accent">00:04</span>
          </div>
          <Button full>Claim discount</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  confirmshaming: (
    <SpecimenFrame title="Exit-intent discount modal">
      <div className="mx-auto max-w-md border border-white/10 bg-[#101010] p-5 text-center shadow-2xl shadow-black/40">
        <Badge tone="warning">Before you go</Badge>
        <p className="mt-4 text-3xl font-black">Get 15% off your first order</p>
        <p className="mt-3 text-sm leading-6 text-muted">Join 40,000 readers receiving weekly product advice.</p>
        <div className="mt-5 space-y-3">
          <input className="w-full border border-white/10 bg-ink px-3 py-3 text-sm text-paper outline-none" placeholder="email@example.com" />
          <Button full>Yes, send my discount</Button>
          <button className="text-sm text-muted underline underline-offset-4">No thanks, I hate saving money</button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "roach-motel": (
    <SpecimenFrame title="Subscription account area">
      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="border border-white/10 bg-[#101010] p-4">
          {["Overview", "Billing", "Invoices", "Team", "Security", "Support"].map((item, index) => (
            <div key={item} className={`border-b border-white/10 py-3 text-sm ${index === 1 ? "text-accent" : "text-muted"}`}>
              {item}
            </div>
          ))}
        </aside>
        <div className="border border-white/10 bg-[#101010] p-5">
          <p className="text-2xl font-black">Premium Plan</p>
          <p className="mt-2 text-sm text-muted">Renews on July 29. Upgrade anytime.</p>
          <div className="mt-5 grid gap-3">
            <Button full>Upgrade instantly</Button>
            <button className="border border-white/20 py-3 font-semibold text-paper">Change payment method</button>
            <button className="text-left text-xs text-muted">Need to cancel? Contact retention support after reviewing available plan options.</button>
          </div>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "decoy-pricing": (
    <SpecimenFrame title="SaaS pricing table">
      <div className="grid gap-3 md:grid-cols-3">
        <Plan name="Basic" price="5€" description="Limited projects, community support." />
        <Plan name="Pro" price="19€" description="Unlimited projects, exports, support." badge="Most popular" featured />
        <Plan name="Ultra" price="199€" description="Everything in Pro, plus a ceremonial invoice." />
      </div>
    </SpecimenFrame>
  ),
  "hidden-cancellation": (
    <SpecimenFrame title="Settings navigation">
      <div className="border border-white/10 bg-[#101010] p-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xl font-bold">Account settings</p>
          <Badge tone="neutral">Active subscription</Badge>
        </div>
        <div className="grid gap-2">
          {["Profile", "Billing details", "Plan usage", "Invoices", "Notification preferences", "Help center"].map((item) => (
            <div key={item} className="flex items-center justify-between border border-white/10 bg-ink p-3">
              <span>{item}</span>
              <span className="text-muted">›</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">Cancellation requests are handled through account assistance.</p>
      </div>
    </SpecimenFrame>
  ),
  "forced-continuity": (
    <SpecimenFrame title="Trial signup panel">
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.workspace} alt="Workspace desk" />
        <div className="space-y-4 p-5">
          <Badge tone="warning">7 days free</Badge>
          <p className="text-3xl font-black">Start your Pro trial</p>
          <p className="text-sm leading-6 text-muted">0€ today. Annual plan begins automatically after trial unless cancelled.</p>
          <div className="border border-white/10 bg-ink p-3 text-sm text-muted">Card required to verify your account.</div>
          <Button full>Start free trial</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "privacy-zuckering": (
    <SpecimenFrame title="Mobile onboarding permission">
      <PhoneShell>
        <Photo src={photos.app} alt="Mobile app screen" small />
        <div className="space-y-4 p-4">
          <p className="text-2xl font-black">Find people you know</p>
          <p className="text-sm leading-6 text-muted">Upload contacts to personalize your experience and connect faster.</p>
          <Button full>Continue with contacts</Button>
          <button className="w-full py-2 text-sm text-muted">Skip for now</button>
        </div>
      </PhoneShell>
    </SpecimenFrame>
  ),
  "social-proof-inflation": (
    <SpecimenFrame title="Product page trust signals">
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.lamp} alt="Desk lamp" />
        <div className="space-y-4 p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xl font-bold">Arc table lamp</p>
              <p className="text-sm text-muted">Warm light · Matte black</p>
            </div>
            <Rating value="4.9" label="2,341 reviews" />
          </div>
          <Badge tone="warning">4,812 people bought this today</Badge>
          <Button full>Add to cart</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "visual-hierarchy-manipulation": (
    <SpecimenFrame title="Unequal consent controls">
      <div className="mx-auto max-w-lg border border-white/10 bg-[#101010] p-5">
        <p className="text-xl font-bold">Personalize your experience</p>
        <p className="mt-3 text-sm leading-6 text-muted">We use data to improve recommendations, ads, analytics, and product research.</p>
        <div className="mt-5 space-y-4">
          <Button full>Accept all</Button>
          <button className="mx-auto block text-xs text-muted">Reject non-essential tracking</button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "cookie-labyrinth": (
    <SpecimenFrame title="Cookie consent banner">
      <div className="border border-white/10 bg-[#101010] p-5">
        <p className="text-xl font-bold">We value your privacy</p>
        <p className="mt-2 text-sm leading-6 text-muted">We and our partners store and access information for measurement, ads, content personalization, and product improvement.</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_1fr_1.4fr]">
          <button className="border border-white/20 py-3 text-sm font-semibold">Reject all</button>
          <button className="border border-white/20 py-3 text-sm font-semibold">Manage options</button>
          <Button>Accept all partners</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "infinite-scroll": (
    <SpecimenFrame title="Instagram-like feed">
      <InfiniteScrollFeed />
    </SpecimenFrame>
  ),
  "notification-addiction": (
    <SpecimenFrame title="Mobile notification grid">
      <PhoneShell>
        <div className="grid grid-cols-3 gap-4 p-5">
          {["Mail", "Chat", "Shop", "Game", "News", "Bank", "Fit", "Cloud", "Notes"].map((item, index) => (
            <div key={item} className="relative aspect-square rounded-2xl border border-white/10 bg-white/[0.06] p-2 text-xs text-muted">
              {index < 6 && <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-red-500 text-xs font-black text-white">{index + 1}</span>}
              <span className="absolute bottom-2 left-2">{item}</span>
            </div>
          ))}
        </div>
      </PhoneShell>
    </SpecimenFrame>
  ),
  "default-bias": (
    <SpecimenFrame title="Checkout defaults">
      <div className="border border-white/10 bg-[#101010] p-5">
        <p className="text-2xl font-black">Complete checkout</p>
        <div className="mt-5 space-y-3">
          <CheckedRow label="Annual billing selected" />
          <CheckedRow label="Receive marketing emails" />
          <CheckedRow label="Share analytics data to improve service" />
        </div>
        <Button full className="mt-5">Continue</Button>
      </div>
    </SpecimenFrame>
  ),
  "preselected-options": (
    <SpecimenFrame title="Travel checkout extras">
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.travel} alt="Beach travel destination" />
        <div className="space-y-3 p-5">
          <CheckedRow label="Travel insurance +12€" />
          <CheckedRow label="Priority boarding +8€" />
          <CheckedRow label="Flexible ticket protection +19€" />
          <div className="flex justify-between border-t border-white/10 pt-4 text-xl font-black">
            <span>Total</span>
            <span>238€</span>
          </div>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "drip-pricing": (
    <SpecimenFrame title="Ticket checkout with late fees">
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.concert} alt="Concert crowd" />
        <div className="space-y-4 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-2xl font-black">North Hall Live</p>
              <p className="text-sm text-muted">General admission ticket</p>
            </div>
            <Badge tone="warning">From 39€</Badge>
          </div>
          <PriceLine label="Ticket" value="39€" />
          <PriceLine label="Service fee" value="8€" muted />
          <PriceLine label="Processing fee" value="5€" muted />
          <PriceLine label="Mobile delivery" value="4€" muted />
          <div className="flex justify-between border-t border-white/10 pt-4 text-2xl font-black">
            <span>Total</span>
            <span>56€</span>
          </div>
          <Button full>Pay now</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "sneak-into-basket": (
    <SpecimenFrame title="Cart with inserted add-on">
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.sneakers} alt="Sneakers" />
        <div className="space-y-3 p-5">
          <BasketRow title="Running shoes" price="89€" />
          <BasketRow title="Premium protection plan" price="14€" badge="Added for you" />
          <BasketRow title="Carbon offset contribution" price="3€" badge="Recommended" />
          <div className="flex justify-between border-t border-white/10 pt-4 text-xl font-black">
            <span>Total</span>
            <span>106€</span>
          </div>
          <Button full>Checkout</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "bait-and-switch": (
    <SpecimenFrame title="Download page switch">
      <div className="grid gap-4 md:grid-cols-[1fr_0.9fr]">
        <div className="border border-white/10 bg-[#101010] p-5">
          <Badge tone="neutral">Free resource</Badge>
          <p className="mt-4 text-3xl font-black">UX Audit Template</p>
          <p className="mt-3 text-sm leading-6 text-muted">A downloadable checklist for product teams.</p>
          <Button full className="mt-5">Download template</Button>
        </div>
        <div className="border border-accent/40 bg-accent/10 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-accent">Next step</p>
          <p className="mt-4 text-2xl font-black">Create an account to continue</p>
          <p className="mt-3 text-sm text-muted">The free template is available inside the trial workspace.</p>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "disguised-ads": (
    <SpecimenFrame title="Search results with native ad">
      <div className="space-y-3 border border-white/10 bg-[#101010] p-4">
        <SearchResult title="Best noise-cancelling headphones" label="Sponsored" mutedLabel />
        <SearchResult title="Independent headphone reviews 2026" />
        <SearchResult title="Top-rated wireless headphones compared" />
        <SearchResult title="Headphone buying guide" />
      </div>
    </SpecimenFrame>
  ),
  nagging: (
    <SpecimenFrame title="Repeated mobile prompt">
      <PhoneShell>
        <div className="space-y-5 p-5">
          <Badge tone="warning">One more thing</Badge>
          <p className="text-2xl font-black">Enable notifications?</p>
          <p className="text-sm leading-6 text-muted">Stay updated with reminders, offers, alerts, recommendations, and important updates.</p>
          <Button full>Allow notifications</Button>
          <button className="w-full py-2 text-sm text-muted">Maybe later</button>
          <p className="text-center text-xs text-muted">Prompt shown 6 times this week</p>
        </div>
      </PhoneShell>
    </SpecimenFrame>
  ),
  "trick-questions": (
    <SpecimenFrame title="Marketing consent form">
      <div className="border border-white/10 bg-[#101010] p-5">
        <p className="text-2xl font-black">Communication preferences</p>
        <div className="mt-5 space-y-3">
          <CheckedRow label="Do not untick this box if you want to avoid missing member offers" />
          <CheckedRow label="I do not wish to opt out of selected partner updates" />
          <CheckedRow label="Keep me informed unless I have not declined" />
        </div>
        <Button full className="mt-5">Save preferences</Button>
      </div>
    </SpecimenFrame>
  ),
  misdirection: (
    <SpecimenFrame title="Promotion with buried terms">
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.shopping} alt="Shopping bag" />
        <div className="p-5">
          <p className="text-5xl font-black text-accent">50% OFF</p>
          <p className="mt-2 text-xl font-bold">Today only on selected essentials</p>
          <Button className="mt-5">Shop the sale</Button>
          <p className="mt-5 text-[11px] leading-5 text-muted">
            Discount applies after membership activation. Membership renews monthly. Handling fee and selected exclusions apply.
          </p>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "comparison-prevention": (
    <SpecimenFrame title="Hard-to-compare plans">
      <div className="grid gap-3 md:grid-cols-3">
        <MetricPlan name="Starter" price="9€/mo" metric="2 projects" detail="100 credits per workspace" />
        <MetricPlan name="Growth" price="84€/yr" metric="10 seats" detail="1,200 credits billed annually" featured />
        <MetricPlan name="Scale" price="0.04€/task" metric="usage based" detail="minimum monthly platform fee applies" />
      </div>
    </SpecimenFrame>
  ),
  "fake-discount": (
    <SpecimenFrame title="Inflated reference price">
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.course} alt="Online course" />
        <div className="space-y-4 p-5">
          <Badge tone="warning">Ends tonight</Badge>
          <p className="text-2xl font-black">Advanced Product Psychology</p>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-black text-accent">59€</span>
            <span className="pb-1 text-xl text-muted line-through">299€</span>
            <span className="pb-1 text-sm font-bold text-accent">80% off</span>
          </div>
          <Button full>Enroll now</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "fake-activity": (
    <SpecimenFrame title="Live purchase notifications">
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.hotel} alt="Hotel lobby" />
        <div className="space-y-3 p-5">
          <p className="text-2xl font-black">City weekend package</p>
          <ActivityToast name="Marta from Lisbon" action="booked this 2 minutes ago" />
          <ActivityToast name="Jon from Bristol" action="is viewing this offer" />
          <ActivityToast name="17 people" action="are checking dates now" />
          <Button full>Reserve package</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "friend-spam": (
    <SpecimenFrame title="Contact import invitation">
      <PhoneShell>
        <div className="space-y-4 p-5">
          <p className="text-2xl font-black">Invite your contacts</p>
          <p className="text-sm leading-6 text-muted">We found 284 people who may want to join your workspace.</p>
          {["Ana", "Mark", "Lucia"].map((name) => (
            <CheckedRow key={name} label={`${name} selected for invitation`} />
          ))}
          <Button full>Send invites</Button>
          <button className="w-full text-xs text-muted">Review selected contacts</button>
        </div>
      </PhoneShell>
    </SpecimenFrame>
  ),
  "permission-priming": (
    <SpecimenFrame title="Pre-permission prompt">
      <PhoneShell>
        <div className="space-y-5 p-5 text-center">
          <Badge tone="warning">Recommended</Badge>
          <p className="text-2xl font-black">Allow location to protect your account</p>
          <p className="text-sm leading-6 text-muted">People who enable location get faster alerts and a safer community experience.</p>
          <Button full>Continue</Button>
          <button className="text-sm text-muted">Not now</button>
        </div>
      </PhoneShell>
    </SpecimenFrame>
  ),
  "forced-registration": (
    <SpecimenFrame title="Guest checkout blocked">
      <div className="grid gap-4 md:grid-cols-[1fr_0.9fr]">
        <div className="border border-white/10 bg-[#101010] p-5">
          <p className="text-2xl font-black">Your basket</p>
          <BasketRow title="Desk organizer" price="24€" />
          <BasketRow title="Notebook set" price="12€" />
          <div className="mt-4 flex justify-between border-t border-white/10 pt-4 font-black">
            <span>Total</span>
            <span>36€</span>
          </div>
        </div>
        <div className="border border-accent/40 bg-accent/10 p-5">
          <p className="text-2xl font-black">Create an account to continue</p>
          <p className="mt-3 text-sm leading-6 text-muted">Checkout, tracking, support, and receipts are available after registration.</p>
          <Button full className="mt-5">Create account</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "autoplay-trap": (
    <SpecimenFrame title="Video autoplay queue">
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.video} alt="Video player" />
        <div className="space-y-4 p-5">
          <div className="flex items-center justify-between">
            <p className="text-xl font-black">Episode complete</p>
            <Badge tone="warning">Next in 5</Badge>
          </div>
          <div className="h-2 overflow-hidden bg-white/10">
            <div className="h-full w-4/5 bg-accent" />
          </div>
          <Button full>Keep watching</Button>
          <button className="w-full text-sm text-muted">Cancel autoplay</button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "streak-pressure": (
    <SpecimenFrame title="Habit streak screen">
      <PhoneShell>
        <div className="space-y-5 p-5 text-center">
          <Photo src={photos.fitness} alt="Fitness training" small />
          <p className="text-5xl font-black text-accent">186</p>
          <p className="text-xl font-bold">day streak</p>
          <p className="text-sm text-muted">Do not lose your progress. Repair yesterday for 2.99€.</p>
          <Button full>Repair streak</Button>
          <button className="text-xs text-muted">Skip and lose streak</button>
        </div>
      </PhoneShell>
    </SpecimenFrame>
  ),
  "paywall-tease": (
    <SpecimenFrame title="Article paywall tease">
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.article} alt="Newspaper article" />
        <div className="relative p-5">
          <Badge tone="neutral">Analysis</Badge>
          <p className="mt-4 text-3xl font-black">The best privacy tools ranked</p>
          <p className="mt-3 text-sm leading-6 text-muted">
            We tested twelve products across security, usability, speed, and price. The clear winner surprised our reviewers after...
          </p>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101010] via-[#101010]/95 to-transparent p-5 pt-20">
            <Button full>Subscribe to reveal the winner</Button>
          </div>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "anchored-bundling": (
    <SpecimenFrame title="Bundle pricing anchor">
      <div className="grid gap-3 md:grid-cols-[1fr_1fr_1.25fr]">
        <MiniProduct name="Editor" price="18€" />
        <MiniProduct name="Planner" price="18€" />
        <div className="border border-accent bg-accent/10 p-5">
          <Badge tone="warning">Best value</Badge>
          <p className="mt-4 text-2xl font-black">Complete Suite</p>
          <p className="mt-2 text-sm text-muted">Editor, Planner, Analytics, Templates</p>
          <p className="mt-5 text-4xl font-black text-accent">29€</p>
          <p className="mt-2 text-xs uppercase tracking-[0.14em] text-accent">Save 51%</p>
          <Button full className="mt-5">Choose bundle</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "review-gating": (
    <SpecimenFrame title="Filtered review flow">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border border-white/10 bg-[#101010] p-5">
          <p className="text-xl font-black">How was your visit?</p>
          <div className="mt-4 flex gap-1 text-3xl text-accent">★★★★★</div>
          <Button full className="mt-5">Post on public reviews</Button>
        </div>
        <div className="border border-white/10 bg-[#101010] p-5">
          <p className="text-xl font-black">Something wrong?</p>
          <div className="mt-4 flex gap-1 text-3xl text-muted">★★☆☆☆</div>
          <button className="mt-5 w-full border border-white/20 py-3 text-sm font-semibold text-paper">Send private feedback</button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "loyalty-lock-in": (
    <SpecimenFrame title="Rewards balance">
      <PhoneShell>
        <div className="space-y-5 p-5 text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-muted">Reward balance</p>
          <p className="text-6xl font-black text-accent">940</p>
          <p className="text-sm text-muted">Only 60 points from a 10€ voucher.</p>
          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[94%] bg-accent" />
          </div>
          <Button full>Order again to unlock</Button>
          <p className="text-xs text-muted">Points expire in 5 days.</p>
        </div>
      </PhoneShell>
    </SpecimenFrame>
  ),
  "scarcity-ladder": (
    <SpecimenFrame title="Stacked pressure badges">
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.hotel} alt="Hotel suite" />
        <div className="space-y-4 p-5">
          <p className="text-2xl font-black">Suite with balcony</p>
          <div className="flex flex-wrap gap-2">
            <Badge tone="neutral">Popular choice</Badge>
            <Badge tone="warning">High demand</Badge>
            <Badge tone="warning">Only 1 left</Badge>
            <Badge tone="warning">Price may rise soon</Badge>
          </div>
          <Button full>Book now</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "ai-authority-washing": (
    <SpecimenFrame title="AI-recommended upsell">
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.ai} alt="Abstract AI interface" />
        <div className="space-y-4 p-5">
          <Badge tone="warning">AI recommended</Badge>
          <p className="text-2xl font-black">Pro Intelligence Plan</p>
          <p className="text-sm leading-6 text-muted">Our model predicts this plan best matches your growth profile.</p>
          <div className="border border-accent/40 bg-accent/10 p-3 text-sm text-accent">Fit score: 96%</div>
          <Button full>Accept recommendation</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "negative-option-billing": (
    <SpecimenFrame title="Renewal by default">
      <div className="border border-white/10 bg-[#101010] p-5">
        <p className="text-2xl font-black">Membership renewal</p>
        <p className="mt-3 text-sm leading-6 text-muted">Your annual plan renews automatically on July 29 unless cancelled at least 72 hours before renewal.</p>
        <div className="mt-5 space-y-3">
          <CheckedRow label="Keep membership active" />
          <PriceLine label="Next annual charge" value="149€" />
          <PriceLine label="Cancellation window" value="Closes soon" muted />
        </div>
        <Button full className="mt-5">Confirm settings</Button>
      </div>
    </SpecimenFrame>
  ),
  "survey-to-sales-funnel": (
    <SpecimenFrame title="Quiz result sales funnel">
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.beauty} alt="Cosmetic products" />
        <div className="space-y-4 p-5">
          <Badge tone="neutral">Personalized result</Badge>
          <p className="text-2xl font-black">Your skin profile: Dehydrated + stressed</p>
          <p className="text-sm leading-6 text-muted">Based on 9 answers, we recommend the complete recovery bundle.</p>
          <div className="border border-accent/40 bg-accent/10 p-3">
            <p className="font-black text-accent">Recommended bundle: 89€</p>
            <p className="text-sm text-muted">Cleanser, serum, cream, mask</p>
          </div>
          <Button full>Start recovery plan</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
    "visual-obstruction": (
    <SpecimenFrame title="Obstructed mobile page">
      <PhoneShell>
        <div className="relative min-h-[430px] p-5">
          <p className="text-2xl font-black">Cancel subscription</p>
          <p className="mt-3 text-sm leading-6 text-muted">Review your plan and choose how you want to proceed.</p>
          <button className="mt-40 text-sm text-muted underline">Continue to cancellation</button>
          <div className="absolute inset-x-0 bottom-0 border-t border-accent/40 bg-accent p-4 text-ink">
            <p className="font-black">Install the app for faster support</p>
            <p className="mt-1 text-sm">Get plan help, offers, and priority chat.</p>
            <button className="mt-3 w-full bg-ink py-2 text-sm font-black text-paper">Open app</button>
          </div>
        </div>
      </PhoneShell>
    </SpecimenFrame>
  ),
  "like-gating": (
    <SpecimenFrame title="Content locked behind a like">
      <LikeGateExample />
    </SpecimenFrame>
  ),
  "validation-loop": (
    <SpecimenFrame title="Like notification feed">
      <ValidationLoopExample />
    </SpecimenFrame>
  ),
  "reaction-pressure": (
    <SpecimenFrame title="Emotional engagement bait">
      <ReactionPressureExample />
    </SpecimenFrame>
  ),
  "hard-to-close": (
    <SpecimenFrame title="Newsletter popup with tiny close target">
      <HardToCloseExample />
    </SpecimenFrame>
  ),
};

export function PatternVisualExample({ pattern }: PatternVisualExampleProps) {
  return visualExamples[pattern.slug] ?? (
    <SpecimenFrame title="Interface specimen">
      <p className="text-muted">{pattern.summary}</p>
    </SpecimenFrame>
  );
}

function SpecimenFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border border-white/10 bg-surface p-4">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">{title}</p>
        <p className="text-xs text-muted">visual specimen</p>
      </div>
      {children}
    </div>
  );
}

function Photo({ src, alt, small = false }: { src: string; alt: string; small?: boolean }) {
  return (
    <div className={`relative w-full overflow-hidden bg-white/10 ${small ? "h-32" : "h-48"}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
    </div>
  );
}

function Badge({ children, tone }: { children: ReactNode; tone: "warning" | "neutral" }) {
  const className = tone === "warning" ? "border-accent/50 bg-accent/15 text-accent" : "border-white/10 bg-white/[0.04] text-muted";

  return <span className={`inline-flex border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${className}`}>{children}</span>;
}

function Button({ children, full = false, className = "" }: { children: ReactNode; full?: boolean; className?: string }) {
  return (
    <button className={`bg-accent px-4 py-3 text-sm font-black text-ink transition hover:bg-paper ${full ? "w-full" : ""} ${className}`}>
      {children}
    </button>
  );
}

function Rating({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-20 bg-accent p-2 text-center text-ink">
      <p className="text-lg font-black">{value}</p>
      <p className="text-[10px] font-bold uppercase">{label}</p>
    </div>
  );
}

function Plan({ name, price, description, badge, featured = false }: { name: string; price: string; description: string; badge?: string; featured?: boolean }) {
  return (
    <div className={`border p-5 ${featured ? "border-accent bg-accent/10" : "border-white/10 bg-[#101010]"}`}>
      <div className="h-7">{badge && <Badge tone="warning">{badge}</Badge>}</div>
      <p className="mt-3 text-xl font-bold">{name}</p>
      <p className="mt-3 text-4xl font-black">{price}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      <button className={`mt-5 w-full border py-3 text-sm font-bold ${featured ? "border-accent bg-accent text-ink" : "border-white/20 text-paper"}`}>
        Choose {name}
      </button>
    </div>
  );
}

function CheckedRow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 border border-white/10 bg-ink p-3 text-sm text-muted">
      <span className="grid h-5 w-5 shrink-0 place-items-center border border-accent bg-accent text-xs font-black text-ink">✓</span>
      <span>{label}</span>
    </div>
  );
}

function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[290px] rounded-[2rem] border border-white/15 bg-[#050505] p-3 shadow-2xl shadow-black/50">
      <div className="mx-auto mb-3 h-1.5 w-20 rounded-full bg-white/20" />
      <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#101010]">{children}</div>
    </div>
  );
}

function PriceLine({ label, value, muted = false }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className={`flex justify-between border-b border-white/10 pb-2 text-sm ${muted ? "text-muted" : "text-paper"}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function BasketRow({ title, price, badge }: { title: string; price: string; badge?: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border border-white/10 bg-ink p-3">
      <div>
        <p className="font-semibold">{title}</p>
        {badge && <p className="mt-1 text-xs uppercase tracking-[0.14em] text-accent">{badge}</p>}
      </div>
      <p className="font-black">{price}</p>
    </div>
  );
}

function SearchResult({ title, label, mutedLabel = false }: { title: string; label?: string; mutedLabel?: boolean }) {
  return (
    <article className="border border-white/10 bg-ink p-4">
      <div className="mb-2 flex items-center gap-2">
        {label && <span className={mutedLabel ? "text-[10px] uppercase tracking-[0.12em] text-muted" : "text-[10px] uppercase tracking-[0.12em] text-accent"}>{label}</span>}
        <span className="text-xs text-muted">example.com</span>
      </div>
      <p className="text-lg font-semibold">{title}</p>
      <p className="mt-1 text-sm text-muted">A carefully formatted result with familiar spacing and link styling.</p>
    </article>
  );
}

function MetricPlan({ name, price, metric, detail, featured = false }: { name: string; price: string; metric: string; detail: string; featured?: boolean }) {
  return (
    <div className={`border p-5 ${featured ? "border-accent bg-accent/10" : "border-white/10 bg-[#101010]"}`}>
      <p className="text-xl font-bold">{name}</p>
      <p className="mt-3 text-3xl font-black">{price}</p>
      <p className="mt-3 text-sm font-semibold text-accent">{metric}</p>
      <p className="mt-2 text-sm leading-6 text-muted">{detail}</p>
    </div>
  );
}

function ActivityToast({ name, action }: { name: string; action: string }) {
  return (
    <div className="flex items-center gap-3 border border-white/10 bg-ink p-3">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sm font-black text-ink">{name.charAt(0)}</span>
      <p className="text-sm text-muted">
        <span className="font-semibold text-paper">{name}</span> {action}
      </p>
    </div>
  );
}

function MiniProduct({ name, price }: { name: string; price: string }) {
  return (
    <div className="border border-white/10 bg-[#101010] p-5">
      <p className="text-xl font-bold">{name}</p>
      <p className="mt-5 text-4xl font-black">{price}</p>
      <p className="mt-2 text-sm text-muted">Standalone license</p>
      <button className="mt-5 w-full border border-white/20 py-3 text-sm font-bold text-paper">Choose</button>
    </div>
  );
}

function LikeGateExample() {
  const [liked, setLiked] = useState(false);
  const [showGate, setShowGate] = useState(false);
  const photo = photos.beauty;

  const handleLike = () => {
    setLiked(true);
    setTimeout(() => setShowGate(true), 1500);
  };

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <div className="relative">
        <div className={`relative h-64 w-full overflow-hidden bg-white/10 transition-all duration-700 ${liked ? "" : "blur-xl"}`}>
          <Image src={photo} alt="Content locked behind like" fill sizes="50vw" className="object-cover" />
        </div>
        {!liked && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <button
              onClick={handleLike}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-3xl transition hover:scale-110"
            >
              ♥
            </button>
            <p className="text-sm font-semibold">Tap ♥ to reveal</p>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-lg font-bold">The perfect summer glow</p>
        <p className="text-sm text-muted">A simple 3-step routine.</p>
        {showGate && (
          <button className="mt-4 w-full border border-accent/50 bg-accent/10 py-3 text-sm font-semibold text-accent transition hover:bg-accent/20">
            Share with a friend to unlock the full guide →
          </button>
        )}
      </div>
    </div>
  );
}

function ValidationLoopExample() {
  const names = ["Ana", "Mark", "Lucia", "Carlos", "Emma", "James"];
  const [visible, setVisible] = useState(0);
  const [badge, setBadge] = useState(3);

  useEffect(() => {
    if (visible >= names.length) return;
    const delays = [800, 600, 1200, 400, 2000, 700];
    const timer = setTimeout(() => {
      setVisible((v) => v + 1);
      setBadge((b) => b + 1);
    }, delays[visible]);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <PhoneShell>
      <div className="relative p-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-lg font-black">Notifications</p>
          <span className="grid h-6 w-6 place-items-center rounded-full bg-red-500 text-xs font-black text-white">
            {badge}
          </span>
        </div>
        <div className="space-y-3">
          {names.slice(0, visible + 1).map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-3 border border-white/10 bg-ink p-3 transition-all duration-500"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sm font-black text-ink">
                {name.charAt(0)}
              </span>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-semibold text-paper">{name}</span>{" "}
                  <span className="text-muted">liked your photo</span>
                </p>
                <p className="text-xs text-muted">
                  {i === visible ? "just now" : `${i + 1}m ago`}
                </p>
              </div>
              <span className="text-lg text-red-400">♥</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted">Pull to refresh</p>
      </div>
    </PhoneShell>
  );
}

function ReactionPressureExample() {
  const [likes, setLikes] = useState(142);
  const [liked, setLiked] = useState(false);
  const photo = photos.fitness;

  useEffect(() => {
    const timer = setInterval(() => {
      setLikes((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikes((prev) => prev + 1);
    }
  };

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <div className="relative h-48 w-full overflow-hidden bg-white/10">
        <Image src={photo} alt="Emotional campaign image" fill sizes="50vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="space-y-4 p-4">
        <p className="text-sm leading-6 text-paper">
          1 like = 1 meal for a child in need.{" "}
          <span className="text-muted">Show your support.</span>
        </p>
        <div className="flex items-center justify-between">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 border px-4 py-2 text-sm font-semibold transition ${
              liked
                ? "border-red-400 bg-red-400/10 text-red-400"
                : "border-white/20 text-paper hover:border-red-400/50"
            }`}
          >
            <span className={`text-lg ${liked ? "animate-pulse" : ""}`}>
              {liked ? "♥" : "♡"}
            </span>
            Like
          </button>
          <p className="text-sm text-muted">
            <span className="font-semibold text-accent">{likes.toLocaleString()}</span> likes
          </p>
        </div>
        <p className="text-[11px] leading-5 text-muted">
          &ldquo;Like if you believe every child deserves a future. Every share plants a tree.&rdquo;
        </p>
      </div>
    </div>
  );
}

function HardToCloseExample() {
  const [closed, setClosed] = useState(false);
  const [misses, setMisses] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = closeRef.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    const handleClick = (e: MouseEvent) => {
      if (closed) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        setClosed(true);
      } else {
        setMisses((p) => p + 1);
      }
    };

    parent.addEventListener("click", handleClick);
    return () => parent.removeEventListener("click", handleClick);
  }, [closed]);

  if (closed) {
    return (
      <div className="flex flex-col items-center justify-center border border-white/10 bg-[#101010] p-10">
        <p className="text-lg font-black">Closed!</p>
        <p className="mt-2 text-sm text-muted">It took you {misses + 1} click{misses > 0 ? "s" : ""} to hit a 4px target.</p>
      </div>
    );
  }

  return (
    <div className="relative select-none border border-white/10 bg-[#101010]">
      <div className="bg-ink p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">Before you go</p>
        <p className="mt-3 text-2xl font-black">Get 20% off your first order</p>
        <p className="mt-2 text-sm leading-6 text-muted">Join 15,000 subscribers and receive exclusive access to deals, trends, and premium content.</p>
        <div className="mt-5 space-y-3">
          <input className="w-full border border-white/10 bg-[#101010] px-3 py-3 text-sm text-paper outline-none" placeholder="your@email.com" readOnly />
          <button className="w-full bg-accent py-3 text-sm font-black text-ink transition hover:bg-paper">Subscribe</button>
        </div>
        <p className="mt-4 text-[11px] leading-5 text-muted">No spam. Unsubscribe anytime.</p>
      </div>

      <div className="absolute right-0 top-0">
        <div
          className="relative"
          onMouseEnter={() => setShowHint(true)}
          onMouseLeave={() => setShowHint(false)}
        >
          <button
            ref={closeRef}
            className="relative z-10 flex h-4 w-4 cursor-crosshair items-center justify-center text-[9px] text-white/15"
          >
            ✕
          </button>
          {showHint && (
            <div className="absolute right-0 top-0 z-20 border border-dashed border-red-400/60 bg-red-400/5" style={{ width: "44px", height: "44px", transform: "translate(calc(-50% + 8px), calc(-50% + 8px))" }}>
              <div className="flex h-full items-center justify-center">
                <span className="text-[8px] uppercase tracking-[0.12em] text-red-400/60">44×44</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-2 right-2 flex items-center gap-2">
        {misses > 0 && (
          <p className="animate-in text-[10px] text-red-400/70" style={{ animationDuration: "200ms" }}>
            {misses} miss{misses > 1 ? "es" : ""}
          </p>
        )}
        <p
          className="cursor-pointer text-[10px] text-muted/40 underline underline-offset-2 hover:text-muted/70"
          onClick={() => setShowHint((p) => !p)}
        >
          {showHint ? "hide" : "show"} target
        </p>
      </div>
    </div>
  );
}

function InfiniteScrollFeed() {
  const pageSize = 6;
  const [itemCount, setItemCount] = useState(pageSize);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const hasMore = itemCount < feedPhotos.length;

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          setLoading(true);
          setTimeout(() => {
            setItemCount((prev) => Math.min(prev + pageSize, feedPhotos.length));
            setLoading(false);
          }, 1000);
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loading, hasMore]);

  const items = feedPhotos.slice(0, itemCount);

  return (
    <div className="max-h-[500px] overflow-y-auto">
      <div className="grid grid-cols-3 gap-0.5">
        {items.map((src, i) => (
          <div key={i} className="relative aspect-square overflow-hidden bg-white/10">
            <Image src={src} alt={`Post ${i + 1}`} fill sizes="33vw" className="object-cover" />
          </div>
        ))}
        {loading &&
          Array.from({ length: 3 }).map((_, i) => (
            <div key={`skel-${i}`} className="aspect-square animate-pulse bg-white/10" />
          ))}
      </div>
      <div ref={sentinelRef} className="h-4" />
      {!hasMore && !loading && (
        <p className="py-4 text-center text-xs uppercase tracking-[0.22em] text-muted">
          You're all caught up
        </p>
      )}
    </div>
  );
}
