"use client";

import { type ReactNode, useState } from "react";
import type { Pattern } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { SpecimenFrame, tx } from "./visual/Helpers";
import { TrapRevealer } from "@/components/TrapRevealer";
import { FakeScarcityExample, CountdownResetExample, ScarcityLadderExample, DecoyPricingExample, DripPricingExample, ComparisonPreventionExample, FakeDiscountExample, AnchoredBundlingExample, BaitAndSwitchExample, DefaultBiasExample, PreselectedOptionsExample, SneakIntoBasketExample, FrequentlyBoughtTogetherExample } from "./visual/UrgencyPricing";
import { RoachMotelExample, HiddenCancellationExample, ForcedContinuityExample, NegativeOptionBillingExample, ForcedRegistrationExample, AutoplayTrapExample, LoyaltyLockInExample } from "./visual/SubscriptionInterface";
import { LikeGateExample, ConfirmshamingExample, PrivacyZuckeringExample, SocialProofInflationExample, VisualHierarchyExample, CookieLabyrinthExample, TrickQuestionsExample, MisdirectionExample, PermissionPrimingExample, FakeActivityExample, FriendSpamExample, DisguisedAdsExample, ReviewGatingExample, SocialCrossSellExample } from "./visual/PrivacySocial";
import { ValidationLoopExample, ReactionPressureExample, HardToCloseExample, LiveActivityExample, NotificationAddictionExample, NaggingExample, StreakPressureExample, PaywallTeaseExample, InfiniteScrollFeed } from "./visual/AttentionGamification";
import { AiAuthorityWashingExample, SurveyToSalesFunnelExample, VisualObstructionExample } from "./visual/TrustMobile";

type PatternVisualExampleProps = {
  pattern: Pattern;
  locale?: Locale;
};

const visualExamples: Record<string, (locale: Locale) => ReactNode> = {
  "fake-scarcity": (locale) => <FakeScarcityExample locale={locale} />,
  "countdown-reset": (locale) => <CountdownResetExample locale={locale} />,
  confirmshaming: (locale) => <ConfirmshamingExample locale={locale} />,
  "roach-motel": (locale) => <RoachMotelExample locale={locale} />,
  "decoy-pricing": (locale) => <DecoyPricingExample locale={locale} />,
  "hidden-cancellation": (locale) => <HiddenCancellationExample locale={locale} />,
  "forced-continuity": (locale) => <ForcedContinuityExample locale={locale} />,
  "privacy-zuckering": (locale) => <PrivacyZuckeringExample locale={locale} />,
  "social-proof-inflation": (locale) => <SocialProofInflationExample locale={locale} />,
  "visual-hierarchy-manipulation": (locale) => <VisualHierarchyExample locale={locale} />,
  "cookie-labyrinth": (locale) => <CookieLabyrinthExample locale={locale} />,
  "infinite-scroll": (locale) => <InfiniteScrollFeed locale={locale} />,
  "notification-addiction": (locale) => <NotificationAddictionExample locale={locale} />,
  "default-bias": (locale) => <DefaultBiasExample locale={locale} />,
  "preselected-options": (locale) => <PreselectedOptionsExample locale={locale} />,
  "drip-pricing": (locale) => <DripPricingExample locale={locale} />,
  "sneak-into-basket": (locale) => <SneakIntoBasketExample locale={locale} />,
  "bait-and-switch": (locale) => <BaitAndSwitchExample locale={locale} />,
  "disguised-ads": (locale) => <DisguisedAdsExample locale={locale} />,
  nagging: (locale) => <NaggingExample locale={locale} />,
  "trick-questions": (locale) => <TrickQuestionsExample locale={locale} />,
  misdirection: (locale) => <MisdirectionExample locale={locale} />,
  "comparison-prevention": (locale) => <ComparisonPreventionExample locale={locale} />,
  "fake-discount": (locale) => <FakeDiscountExample locale={locale} />,
  "fake-activity": (locale) => <FakeActivityExample locale={locale} />,
  "friend-spam": (locale) => <FriendSpamExample locale={locale} />,
  "permission-priming": (locale) => <PermissionPrimingExample locale={locale} />,
  "forced-registration": (locale) => <ForcedRegistrationExample locale={locale} />,
  "autoplay-trap": (locale) => <AutoplayTrapExample locale={locale} />,
  "streak-pressure": (locale) => <StreakPressureExample locale={locale} />,
  "paywall-tease": (locale) => <PaywallTeaseExample locale={locale} />,
  "anchored-bundling": (locale) => <AnchoredBundlingExample locale={locale} />,
  "review-gating": (locale) => <ReviewGatingExample locale={locale} />,
  "loyalty-lock-in": (locale) => <LoyaltyLockInExample locale={locale} />,
  "scarcity-ladder": (locale) => <ScarcityLadderExample locale={locale} />,
  "ai-authority-washing": (locale) => <AiAuthorityWashingExample locale={locale} />,
  "negative-option-billing": (locale) => <NegativeOptionBillingExample locale={locale} />,
  "survey-to-sales-funnel": (locale) => <SurveyToSalesFunnelExample locale={locale} />,
  "visual-obstruction": (locale) => <VisualObstructionExample locale={locale} />,
  "like-gating": (locale) => <LikeGateExample locale={locale} />,
  "validation-loop": (locale) => <ValidationLoopExample locale={locale} />,
  "reaction-pressure": (locale) => <ReactionPressureExample locale={locale} />,
  "hard-to-close": (locale) => <HardToCloseExample locale={locale} />,
  "live-activity-indicator": (locale) => <LiveActivityExample locale={locale} />,
  "social-cross-sell": (locale) => <SocialCrossSellExample locale={locale} />,
  "frequently-bought-together": (locale) => <FrequentlyBoughtTogetherExample locale={locale} />,
};

const specimenTitles: Record<string, Record<"en" | "es", string>> = {
  "fake-scarcity": { en: "Hotel booking result", es: "Resultado de reserva de hotel" },
  "countdown-reset": { en: "Flash sale checkout", es: "Compra flash" },
  confirmshaming: { en: "Exit-intent discount modal", es: "Modal de descuento al salir" },
  "roach-motel": { en: "Subscription account area", es: "Área de suscripción" },
  "decoy-pricing": { en: "SaaS pricing table", es: "Tabla de precios SaaS" },
  "hidden-cancellation": { en: "Settings navigation", es: "Navegación de ajustes" },
  "forced-continuity": { en: "Trial signup panel", es: "Panel de prueba gratuita" },
  "privacy-zuckering": { en: "Mobile onboarding permission", es: "Permiso de onboarding móvil" },
  "social-proof-inflation": { en: "Product page trust signals", es: "Señales de confianza en producto" },
  "visual-hierarchy-manipulation": { en: "Unequal consent controls", es: "Controles de consentimiento desiguales" },
  "cookie-labyrinth": { en: "Cookie consent banner", es: "Banner de cookies" },
  "infinite-scroll": { en: "Instagram-like feed", es: "Feed estilo Instagram" },
  "notification-addiction": { en: "Mobile notification grid", es: "Cuadrícula de notificaciones" },
  "default-bias": { en: "Checkout defaults", es: "Opciones por defecto en checkout" },
  "preselected-options": { en: "Travel checkout extras", es: "Extras en reserva de viaje" },
  "drip-pricing": { en: "Ticket checkout with late fees", es: "Compra de entradas con tasas ocultas" },
  "sneak-into-basket": { en: "Cart with inserted add-on", es: "Carrito con extra añadido" },
  "bait-and-switch": { en: "Download page switch", es: "Página de descarga con cambio" },
  "disguised-ads": { en: "Search results with native ad", es: "Resultados con anuncio nativo" },
  nagging: { en: "Repeated mobile prompt", es: "Notificación repetitiva" },
  "trick-questions": { en: "Marketing consent form", es: "Formulario de consentimiento" },
  misdirection: { en: "Promotion with buried terms", es: "Promoción con condiciones ocultas" },
  "comparison-prevention": { en: "Hard-to-compare plans", es: "Planes difíciles de comparar" },
  "fake-discount": { en: "Inflated reference price", es: "Precio de referencia inflado" },
  "fake-activity": { en: "Live purchase notifications", es: "Notificaciones de compras en vivo" },
  "friend-spam": { en: "Contact import invitation", es: "Invitación de importación de contactos" },
  "permission-priming": { en: "Pre-permission prompt", es: "Aviso previo al permiso" },
  "forced-registration": { en: "Guest checkout blocked", es: "Checkout de invitado bloqueado" },
  "autoplay-trap": { en: "Video autoplay queue", es: "Cola de reproducción automática" },
  "streak-pressure": { en: "Habit streak screen", es: "Pantalla de racha" },
  "paywall-tease": { en: "Article paywall tease", es: "Cebo de muro de pago" },
  "anchored-bundling": { en: "Bundle pricing anchor", es: "Anclaje de precio en bundle" },
  "review-gating": { en: "Filtered review flow", es: "Flujo de reseñas filtrado" },
  "loyalty-lock-in": { en: "Rewards balance", es: "Saldo de recompensas" },
  "scarcity-ladder": { en: "Stacked pressure badges", es: "Insignias de presión apiladas" },
  "ai-authority-washing": { en: "AI-recommended upsell", es: "Upsell recomendado por IA" },
  "negative-option-billing": { en: "Renewal by default", es: "Renovación automática" },
  "survey-to-sales-funnel": { en: "Quiz result sales funnel", es: "Embudo de venta por cuestionario" },
  "visual-obstruction": { en: "Obstructed mobile page", es: "Página móvil obstruida" },
  "like-gating": { en: "Content locked behind a like", es: "Contenido bloqueado tras un like" },
  "validation-loop": { en: "Like notification feed", es: "Feed de notificaciones de likes" },
  "reaction-pressure": { en: "Emotional engagement bait", es: "Señuelo emocional de engagement" },
  "hard-to-close": { en: "Newsletter popup with tiny close target", es: "Popup con botón de cierre minúsculo" },
  "live-activity-indicator": { en: "Live activity feed on a hotel listing", es: "Feed de actividad en vivo en hotel" },
  "social-cross-sell": { en: "Cross-sell with fake social proof", es: "Cross-sell con prueba social falsa" },
  "frequently-bought-together": { en: "Pre-selected bundle widget", es: "Widget de lote preseleccionado" },
};

export function PatternVisualExample({ pattern, locale = "en" }: PatternVisualExampleProps) {
  const [showEthical, setShowEthical] = useState(false);
  const render = visualExamples[pattern.slug];
  const title = specimenTitles[pattern.slug] || { en: "Interface specimen", es: "Espécimen de interfaz" };

  if (!render) {
    return (
      <SpecimenFrame title={locale === "en" ? title.en : title.es}>
        <p className="text-muted">{pattern.summary}</p>
      </SpecimenFrame>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <button
          onClick={() => setShowEthical(false)}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
            !showEthical ? "bg-accent text-ink" : "border border-white/10 text-muted hover:border-accent/50"
          }`}
        >
          {locale === "es" ? "Patrón oscuro" : "Dark pattern"}
        </button>
        <button
          onClick={() => setShowEthical(true)}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
            showEthical ? "bg-emerald-500 text-ink" : "border border-white/10 text-muted hover:border-emerald-500/50"
          }`}
        >
          {locale === "es" ? "Alternativa ética" : "Ethical alternative"}
        </button>
      </div>

      {showEthical ? (
        <div className="border border-emerald-400/30 bg-emerald-400/5 p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-emerald-400">
            {locale === "es" ? "Alternativa ética" : "Ethical alternative"}
          </p>
          <p className="mt-3 text-sm leading-7 text-emerald-100/80">{pattern.ethicalAlternative}</p>
          <p className="mt-4 text-[10px] text-emerald-400/30">
            {locale === "es"
              ? "El diseño ético prioriza la autonomía del usuario sobre la conversión."
              : "Ethical design prioritises user autonomy over conversion."}
          </p>
        </div>
      ) : (
        <TrapRevealer slug={pattern.slug} locale={locale} title={locale === "en" ? title.en : title.es}>
          <SpecimenFrame title={locale === "en" ? title.en : title.es}>
            {render(locale)}
          </SpecimenFrame>
        </TrapRevealer>
      )}
    </div>
  );
}
