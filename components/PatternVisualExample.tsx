"use client";

import { type ReactNode } from "react";
import type { Pattern } from "@/lib/types";
import type { Locale } from "@/lib/i18n";
import { SpecimenFrame, tx } from "./visual/Helpers";
import { FakeScarcityExample, CountdownResetExample, ScarcityLadderExample, DecoyPricingExample, DripPricingExample, ComparisonPreventionExample, FakeDiscountExample, AnchoredBundlingExample, BaitAndSwitchExample, DefaultBiasExample, PreselectedOptionsExample, SneakIntoBasketExample } from "./visual/UrgencyPricing";
import { RoachMotelExample, HiddenCancellationExample, ForcedContinuityExample, NegativeOptionBillingExample, ForcedRegistrationExample, AutoplayTrapExample, LoyaltyLockInExample } from "./visual/SubscriptionInterface";
import { LikeGateExample, ConfirmshamingExample, PrivacyZuckeringExample, SocialProofInflationExample, VisualHierarchyExample, CookieLabyrinthExample, TrickQuestionsExample, MisdirectionExample, PermissionPrimingExample, FakeActivityExample, FriendSpamExample, DisguisedAdsExample, ReviewGatingExample } from "./visual/PrivacySocial";
import { ValidationLoopExample, ReactionPressureExample, HardToCloseExample, LiveActivityExample, NotificationAddictionExample, NaggingExample, StreakPressureExample, PaywallTeaseExample, InfiniteScrollFeed } from "./visual/AttentionGamification";
import { AiAuthorityWashingExample, SurveyToSalesFunnelExample, VisualObstructionExample } from "./visual/TrustMobile";

type PatternVisualExampleProps = {
  pattern: Pattern;
  locale?: Locale;
};

const visualExamples: Record<string, (locale: Locale) => ReactNode> = {
  "fake-scarcity": (locale) => (
    <SpecimenFrame title={tx(locale, "Hotel booking result", "Resultado de reserva de hotel")}>
      <FakeScarcityExample locale={locale} />
    </SpecimenFrame>
  ),
  "countdown-reset": (locale) => (
    <SpecimenFrame title={tx(locale, "Flash sale checkout", "Compra flash")}>
      <CountdownResetExample locale={locale} />
    </SpecimenFrame>
  ),
  confirmshaming: (locale) => (
    <SpecimenFrame title={tx(locale, "Exit-intent discount modal", "Modal de descuento al salir")}>
      <ConfirmshamingExample locale={locale} />
    </SpecimenFrame>
  ),
  "roach-motel": (locale) => (
    <SpecimenFrame title={tx(locale, "Subscription account area", "Área de suscripción")}>
      <RoachMotelExample locale={locale} />
    </SpecimenFrame>
  ),
  "decoy-pricing": (locale) => (
    <SpecimenFrame title={tx(locale, "SaaS pricing table", "Tabla de precios SaaS")}>
      <DecoyPricingExample locale={locale} />
    </SpecimenFrame>
  ),
  "hidden-cancellation": (locale) => (
    <SpecimenFrame title={tx(locale, "Settings navigation", "Navegación de ajustes")}>
      <HiddenCancellationExample locale={locale} />
    </SpecimenFrame>
  ),
  "forced-continuity": (locale) => (
    <SpecimenFrame title={tx(locale, "Trial signup panel", "Panel de prueba gratuita")}>
      <ForcedContinuityExample locale={locale} />
    </SpecimenFrame>
  ),
  "privacy-zuckering": (locale) => (
    <SpecimenFrame title={tx(locale, "Mobile onboarding permission", "Permiso de onboarding móvil")}>
      <PrivacyZuckeringExample locale={locale} />
    </SpecimenFrame>
  ),
  "social-proof-inflation": (locale) => (
    <SpecimenFrame title={tx(locale, "Product page trust signals", "Señales de confianza en producto")}>
      <SocialProofInflationExample locale={locale} />
    </SpecimenFrame>
  ),
  "visual-hierarchy-manipulation": (locale) => (
    <SpecimenFrame title={tx(locale, "Unequal consent controls", "Controles de consentimiento desiguales")}>
      <VisualHierarchyExample locale={locale} />
    </SpecimenFrame>
  ),
  "cookie-labyrinth": (locale) => (
    <SpecimenFrame title={tx(locale, "Cookie consent banner", "Banner de cookies")}>
      <CookieLabyrinthExample locale={locale} />
    </SpecimenFrame>
  ),
  "infinite-scroll": (locale) => (
    <SpecimenFrame title={tx(locale, "Instagram-like feed", "Feed estilo Instagram")}>
      <InfiniteScrollFeed locale={locale} />
    </SpecimenFrame>
  ),
  "notification-addiction": (locale) => (
    <SpecimenFrame title={tx(locale, "Mobile notification grid", "Cuadrícula de notificaciones")}>
      <NotificationAddictionExample locale={locale} />
    </SpecimenFrame>
  ),
  "default-bias": (locale) => (
    <SpecimenFrame title={tx(locale, "Checkout defaults", "Opciones por defecto en checkout")}>
      <DefaultBiasExample locale={locale} />
    </SpecimenFrame>
  ),
  "preselected-options": (locale) => (
    <SpecimenFrame title={tx(locale, "Travel checkout extras", "Extras en reserva de viaje")}>
      <PreselectedOptionsExample locale={locale} />
    </SpecimenFrame>
  ),
  "drip-pricing": (locale) => (
    <SpecimenFrame title={tx(locale, "Ticket checkout with late fees", "Compra de entradas con tasas ocultas")}>
      <DripPricingExample locale={locale} />
    </SpecimenFrame>
  ),
  "sneak-into-basket": (locale) => (
    <SpecimenFrame title={tx(locale, "Cart with inserted add-on", "Carrito con extra añadido")}>
      <SneakIntoBasketExample locale={locale} />
    </SpecimenFrame>
  ),
  "bait-and-switch": (locale) => (
    <SpecimenFrame title={tx(locale, "Download page switch", "Página de descarga con cambio")}>
      <BaitAndSwitchExample locale={locale} />
    </SpecimenFrame>
  ),
  "disguised-ads": (locale) => (
    <SpecimenFrame title={tx(locale, "Search results with native ad", "Resultados con anuncio nativo")}>
      <DisguisedAdsExample locale={locale} />
    </SpecimenFrame>
  ),
  nagging: (locale) => (
    <SpecimenFrame title={tx(locale, "Repeated mobile prompt", "Notificación repetitiva")}>
      <NaggingExample locale={locale} />
    </SpecimenFrame>
  ),
  "trick-questions": (locale) => (
    <SpecimenFrame title={tx(locale, "Marketing consent form", "Formulario de consentimiento")}>
      <TrickQuestionsExample locale={locale} />
    </SpecimenFrame>
  ),
  misdirection: (locale) => (
    <SpecimenFrame title={tx(locale, "Promotion with buried terms", "Promoción con condiciones ocultas")}>
      <MisdirectionExample locale={locale} />
    </SpecimenFrame>
  ),
  "comparison-prevention": (locale) => (
    <SpecimenFrame title={tx(locale, "Hard-to-compare plans", "Planes difíciles de comparar")}>
      <ComparisonPreventionExample locale={locale} />
    </SpecimenFrame>
  ),
  "fake-discount": (locale) => (
    <SpecimenFrame title={tx(locale, "Inflated reference price", "Precio de referencia inflado")}>
      <FakeDiscountExample locale={locale} />
    </SpecimenFrame>
  ),
  "fake-activity": (locale) => (
    <SpecimenFrame title={tx(locale, "Live purchase notifications", "Notificaciones de compras en vivo")}>
      <FakeActivityExample locale={locale} />
    </SpecimenFrame>
  ),
  "friend-spam": (locale) => (
    <SpecimenFrame title={tx(locale, "Contact import invitation", "Invitación de importación de contactos")}>
      <FriendSpamExample locale={locale} />
    </SpecimenFrame>
  ),
  "permission-priming": (locale) => (
    <SpecimenFrame title={tx(locale, "Pre-permission prompt", "Aviso previo al permiso")}>
      <PermissionPrimingExample locale={locale} />
    </SpecimenFrame>
  ),
  "forced-registration": (locale) => (
    <SpecimenFrame title={tx(locale, "Guest checkout blocked", "Checkout de invitado bloqueado")}>
      <ForcedRegistrationExample locale={locale} />
    </SpecimenFrame>
  ),
  "autoplay-trap": (locale) => (
    <SpecimenFrame title={tx(locale, "Video autoplay queue", "Cola de reproducción automática")}>
      <AutoplayTrapExample locale={locale} />
    </SpecimenFrame>
  ),
  "streak-pressure": (locale) => (
    <SpecimenFrame title={tx(locale, "Habit streak screen", "Pantalla de racha")}>
      <StreakPressureExample locale={locale} />
    </SpecimenFrame>
  ),
  "paywall-tease": (locale) => (
    <SpecimenFrame title={tx(locale, "Article paywall tease", "Cebo de muro de pago")}>
      <PaywallTeaseExample locale={locale} />
    </SpecimenFrame>
  ),
  "anchored-bundling": (locale) => (
    <SpecimenFrame title={tx(locale, "Bundle pricing anchor", "Anclaje de precio en bundle")}>
      <AnchoredBundlingExample locale={locale} />
    </SpecimenFrame>
  ),
  "review-gating": (locale) => (
    <SpecimenFrame title={tx(locale, "Filtered review flow", "Flujo de reseñas filtrado")}>
      <ReviewGatingExample locale={locale} />
    </SpecimenFrame>
  ),
  "loyalty-lock-in": (locale) => (
    <SpecimenFrame title={tx(locale, "Rewards balance", "Saldo de recompensas")}>
      <LoyaltyLockInExample locale={locale} />
    </SpecimenFrame>
  ),
  "scarcity-ladder": (locale) => (
    <SpecimenFrame title={tx(locale, "Stacked pressure badges", "Insignias de presión apiladas")}>
      <ScarcityLadderExample locale={locale} />
    </SpecimenFrame>
  ),
  "ai-authority-washing": (locale) => (
    <SpecimenFrame title={tx(locale, "AI-recommended upsell", "Upsell recomendado por IA")}>
      <AiAuthorityWashingExample locale={locale} />
    </SpecimenFrame>
  ),
  "negative-option-billing": (locale) => (
    <SpecimenFrame title={tx(locale, "Renewal by default", "Renovación automática")}>
      <NegativeOptionBillingExample locale={locale} />
    </SpecimenFrame>
  ),
  "survey-to-sales-funnel": (locale) => (
    <SpecimenFrame title={tx(locale, "Quiz result sales funnel", "Embudo de venta por cuestionario")}>
      <SurveyToSalesFunnelExample locale={locale} />
    </SpecimenFrame>
  ),
  "visual-obstruction": (locale) => (
    <SpecimenFrame title={tx(locale, "Obstructed mobile page", "Página móvil obstruida")}>
      <VisualObstructionExample locale={locale} />
    </SpecimenFrame>
  ),
  "like-gating": (locale) => (
    <SpecimenFrame title={tx(locale, "Content locked behind a like", "Contenido bloqueado tras un like")}>
      <LikeGateExample locale={locale} />
    </SpecimenFrame>
  ),
  "validation-loop": (locale) => (
    <SpecimenFrame title={tx(locale, "Like notification feed", "Feed de notificaciones de likes")}>
      <ValidationLoopExample locale={locale} />
    </SpecimenFrame>
  ),
  "reaction-pressure": (locale) => (
    <SpecimenFrame title={tx(locale, "Emotional engagement bait", "Señuelo emocional de engagement")}>
      <ReactionPressureExample locale={locale} />
    </SpecimenFrame>
  ),
  "hard-to-close": (locale) => (
    <SpecimenFrame title={tx(locale, "Newsletter popup with tiny close target", "Popup con botón de cierre minúsculo")}>
      <HardToCloseExample locale={locale} />
    </SpecimenFrame>
  ),
  "live-activity-indicator": (locale) => (
    <SpecimenFrame title={tx(locale, "Live activity feed on a hotel listing", "Feed de actividad en vivo en hotel")}>
      <LiveActivityExample locale={locale} />
    </SpecimenFrame>
  ),
};

export function PatternVisualExample({ pattern, locale = "en" }: PatternVisualExampleProps) {
  const render = visualExamples[pattern.slug];
  return render ? render(locale) : (
    <SpecimenFrame title={tx(locale, "Interface specimen", "Espécimen de interfaz")}>
      <p className="text-muted">{pattern.summary}</p>
    </SpecimenFrame>
  );
}
