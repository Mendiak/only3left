"use client";

import { useState, useEffect } from "react";
import type { Locale } from "@/lib/i18n";
import { tx, photos, Badge, Button, Photo, PhoneShell } from "./Helpers";
import { DemoPauseButton, SpecimenCaption } from "./kit";
import { usePrefersReducedMotion } from "./useSpecimenDemo";

export function AiAuthorityWashingExample({ locale = "en" }: { locale?: Locale }) {
  const [revealed, setRevealed] = useState(false);
  const scores = [72, 85, 96, 63, 78, 91];
  const [score, setScore] = useState(96);
  useEffect(() => {
    if (revealed) {
      const timer = setInterval(() => setScore(scores[Math.floor(Math.random() * scores.length)]), 800);
      return () => clearInterval(timer);
    }
  }, [revealed]);
  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.ai} alt="" />
      <div className="space-y-4 p-5">
        <Badge tone="warning">{locale === "es" ? "Recomendado por IA" : "AI recommended"}</Badge>
        <p className="text-2xl font-black">{locale === "es" ? "Plan Pro Intelligence" : "Pro Intelligence Plan"}</p>
        <p className="text-sm leading-6 text-muted">{locale === "es" ? "Nuestro modelo predice que es tu plan ideal." : "Our model predicts this is your ideal plan."}</p>
        <div onClick={() => setRevealed(true)} className="cursor-pointer border border-accent/40 bg-accent/10 p-3 text-sm text-accent transition hover:bg-accent/20">
          {locale === "es" ? "Puntuación:" : "Fit score:"} {score}%
          {revealed && <span className="block text-[10px] text-accent/50">{locale === "es" ? "la puntuación es aleatoria" : "score is random"}</span>}
        </div>
        <Button full>{locale === "es" ? "Aceptar" : "Accept recommendation"}</Button>
      </div>
    </div>
  );
}

export function SurveyToSalesFunnelExample({ locale = "en" }: { locale?: Locale }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const products = [
    { name: locale === "es" ? "Hidratante Esencial" : "Essential Hydration", price: 39, desc: locale === "es" ? "Cremas hidratantes ligeras." : "Light hydrating creams.", img: "🧴" },
    { name: locale === "es" ? "Equilibrio Natural" : "Natural Balance", price: 59, desc: locale === "es" ? "Tónico y sérum equilibrantes." : "Balancing toner & serum.", img: "⚖️" },
    { name: locale === "es" ? "Premium Derm" : "Premium Derm", price: 129, desc: locale === "es" ? "Kit completo con retinol." : "Full retinol kit.", img: "💎" },
  ];

  const questions = [
    {
      q: locale === "es" ? "¿Tu tipo de piel?" : "Your skin type?",
      a: [
        { label: locale === "es" ? "Seca" : "Dry", value: 0 },
        { label: locale === "es" ? "Grasa" : "Oily", value: 1 },
        { label: locale === "es" ? "Mixta" : "Combination", value: 2 },
      ],
    },
    {
      q: locale === "es" ? "¿Tu principal preocupación?" : "Main concern?",
      a: [
        { label: locale === "es" ? "Arrugas" : "Wrinkles", value: 2 },
        { label: locale === "es" ? "Acné" : "Acne", value: 1 },
        { label: locale === "es" ? "Manchas" : "Spots", value: 0 },
      ],
    },
    {
      q: locale === "es" ? "¿Tu presupuesto mensual?" : "Monthly budget?",
      a: [
        { label: "25–50€", value: 0 },
        { label: "50–100€", value: 1 },
        { label: "100€+", value: 2 },
      ],
    },
  ];

  const answer = (value: number) => {
    const next = [...answers, value];
    setAnswers(next);
    setStep(step + 1);
  };

  const back = () => {
    setAnswers(answers.slice(0, -1));
    setStep(step - 1);
  };

  const score = answers.length === 3
    ? answers[0] + answers[1] + (answers[2] * 3)
    : 0;

  const productIndex = score >= 8 ? 2 : score >= 4 ? 1 : 0;
  const product = products[productIndex];

  if (step < questions.length) {
    const q = questions[step];
    return (
      <div className="bg-[#101010]">
        <div className="border-b border-white/10 bg-ink p-4">
          <div className="flex items-center justify-between text-xs text-muted">
            <span>{locale === "es" ? "Cuestionario" : "Skin Quiz"}</span>
            <span>{locale === "es" ? `Paso ${step + 1} de ${questions.length}` : `Step ${step + 1} of ${questions.length}`}</span>
          </div>
          <div className="mt-3 flex gap-1">
            {questions.map((_, i) => (
              <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i < step ? "bg-accent" : i === step ? "bg-accent/50" : "bg-white/10"}`} />
            ))}
          </div>
        </div>
        <div className="p-5 space-y-5">
          <div>
            <p className="text-xs text-muted">{locale === "es" ? "Pregunta" : "Question"} {step + 1}</p>
            <p className="mt-1 text-xl font-black">{q.q}</p>
          </div>
          <div className="grid gap-3">
            {q.a.map((opt, i) => (
              <button
                key={i}
                onClick={() => answer(opt.value)}
                className="flex items-center justify-between border border-white/10 bg-ink p-4 text-left transition hover:border-accent/40 hover:bg-accent/5"
              >
                <span className="text-sm text-paper">{opt.label}</span>
                <span className="text-xs text-muted/30">→</span>
              </button>
            ))}
          </div>
          {step > 0 && (
            <button onClick={back} className="text-xs text-muted/50 transition hover:text-muted">
              ← {locale === "es" ? "Atrás" : "Back"}
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-[#101010]">
      <div className="relative flex items-center justify-center bg-gradient-to-b from-accent/20 to-transparent p-8 text-center">
        <span className="text-5xl">{product.img}</span>
      </div>
      <div className="space-y-4 p-5">
        <Badge tone="neutral">{locale === "es" ? "Resultado personalizado" : "Personalized result"}</Badge>
        <p className="text-2xl font-black">{product.name}</p>
        <p className="text-sm text-muted">{product.desc}</p>
        <p className="text-xs text-muted/30">
          {locale === "es" ? "Basado en tus respuestas únicas" : "Based on your unique answers"}
        </p>
        <div className="border border-accent/40 bg-accent/10 p-4 text-center">
          <p className="text-lg font-black text-accent">{product.price}€</p>
          <p className="text-xs text-muted">{locale === "es" ? "Envío gratis" : "Free shipping"}</p>
        </div>
        <Button full>{locale === "es" ? "Añadir al carrito" : "Add to cart"}</Button>
        {answers[2] < 2 && (
          <p className="text-[10px] text-muted/20 text-center">
            {locale === "es" ? "💡 Los usuarios que eligen 100€+ ahorran 40€." : "💡 Users who choose 100€+ save 40€."}
          </p>
        )}
      </div>
    </div>
  );
}

type ObstructionOutcome = "app" | "discount" | "plan";

export function VisualObstructionExample({ locale = "en" }: { locale?: Locale }) {
  const [layer, setLayer] = useState(0);
  const [cancelled, setCancelled] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [outcome, setOutcome] = useState<ObstructionOutcome | null>(null);
  const [paused, setPaused] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const visibleCountdown = reducedMotion ? 0 : countdown;

  const nextLayer = () => {
    if (layer === 2) setCountdown(5);
    setLayer(Math.min(layer + 1, 4));
  };

  useEffect(() => {
    if (layer !== 3 || countdown <= 0 || paused || reducedMotion) return;
    const timer = setTimeout(() => setCountdown((value) => value - 1), 1000);
    return () => clearTimeout(timer);
  }, [layer, countdown, paused, reducedMotion]);

  const reset = () => {
    setLayer(0);
    setCancelled(false);
    setCountdown(5);
    setOutcome(null);
    setPaused(false);
  };

  if (outcome) {
    return (
      <div className="space-y-2">
        <PhoneShell>
          <div className="flex min-h-[430px] flex-col items-center justify-center p-8 text-center">
            <p className="text-3xl">✓</p>
            <p className="mt-3 text-2xl font-black">{tx(locale, "Plan kept", "Plan mantenido")}</p>
            <p className="mt-2 max-w-[220px] text-sm leading-6 text-muted">
              {outcome === "app" &&
                tx(locale, "Opening the support app... Your plan stays active.", "Abriendo la app de soporte... Tu plan sigue activo.")}
              {outcome === "discount" &&
                tx(locale, "50% discount applied. Your plan stays active.", "50% de descuento aplicado. Tu plan sigue activo.")}
              {outcome === "plan" && tx(locale, "Your Premium plan stays active.", "Tu plan Premium sigue activo.")}
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-5 border border-white/15 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-muted transition hover:border-accent/50 hover:text-accent"
            >
              {tx(locale, "Try again", "Probar de nuevo")}
            </button>
          </div>
        </PhoneShell>
        <SpecimenCaption>
          {tx(
            locale,
            "The commercial action is always one tap away.",
            "La acción comercial siempre está a un toque."
          )}
        </SpecimenCaption>
      </div>
    );
  }

  if (cancelled) {
    return (
      <div className="space-y-2">
        <PhoneShell>
          <div className="flex min-h-[430px] flex-col items-center justify-center p-8 text-center">
            <p className="text-2xl font-black">{tx(locale, "Cancelled", "Cancelado")}</p>
            <p className="mt-2 text-xs text-muted">
              {tx(locale, "(After 4 obstruction screens)", "(Tras 4 pantallas de obstrucción)")}
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-5 border border-white/15 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-muted transition hover:border-accent/50 hover:text-accent"
            >
              {tx(locale, "Try again", "Probar de nuevo")}
            </button>
          </div>
        </PhoneShell>
        <SpecimenCaption>
          {tx(locale, "Cancellation was possible, but only after every detour.", "La cancelación era posible, pero solo tras cada desvío.")}
        </SpecimenCaption>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <PhoneShell>
        <div className="relative flex min-h-[430px] flex-col p-5">
          <p className="text-2xl font-black">{tx(locale, "Cancel subscription", "Cancelar suscripción")}</p>
          <p className="mt-3 text-sm text-muted">{tx(locale, "Review your plan details.", "Revisa los detalles de tu plan.")}</p>

          <div className="mt-6 space-y-3 border border-white/10 bg-ink p-4">
            <div className="flex justify-between text-sm">
              <span>{tx(locale, "Current plan", "Plan actual")}</span>
              <span className="font-black text-accent">Premium</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>{tx(locale, "Price", "Precio")}</span>
              <span className="text-muted">19.99€/{tx(locale, "mo", "mes")}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>{tx(locale, "Next charge", "Próximo cobro")}</span>
              <span className="text-muted">{locale === "es" ? "14 dic 2026" : "14 Dec 2026"}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setCancelled(true)}
            disabled={layer < 4}
            className={`mt-auto w-full py-3 text-sm font-black transition ${
              layer >= 4
                ? "bg-red-500/20 text-red-400 hover:bg-red-500/30"
                : "cursor-not-allowed text-muted/40"
            }`}
          >
            {tx(locale, "Cancel subscription", "Cancelar suscripción")}
          </button>

          {layer < 4 && (
            <>
              {/* Layer 0: bottom banner covering the cancel action */}
              {layer === 0 && (
                <div className="absolute inset-x-0 bottom-0 z-10 animate-in border-t border-accent/40 bg-accent p-4 text-ink">
                  <p className="font-black">{tx(locale, "📱 Download our app", "📱 Descarga nuestra app")}</p>
                  <p className="mt-1 text-sm">{tx(locale, "Faster support & notifications.", "Soporte más rápido y notificaciones.")}</p>
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setOutcome("app")}
                      className="flex-1 bg-ink py-2 text-sm font-black text-paper transition hover:bg-ink/80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-ink"
                    >
                      {tx(locale, "Open app", "Abrir app")}
                    </button>
                    <button
                      type="button"
                      onClick={nextLayer}
                      aria-label={tx(locale, "Dismiss app banner", "Cerrar banner de la app")}
                      className="border border-ink/20 px-3 py-2 text-sm text-ink transition hover:bg-ink/10 focus-visible:outline focus-visible:outline-1 focus-visible:outline-ink"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}

              {/* Layer 1: discount modal */}
              {layer === 1 && (
                <div className="absolute inset-0 z-20 flex animate-in items-center justify-center bg-black/60">
                  <div className="mx-4 w-full max-w-[260px] space-y-4 border border-accent/30 bg-[#101010] p-6 text-center">
                    <p className="text-2xl">🔥</p>
                    <p className="font-black text-accent">{tx(locale, "Special discount!", "¡Descuento especial!")}</p>
                    <p className="text-sm text-muted">
                      {tx(locale, "50% off your next month.", "50% de descuento en tu próximo mes.")}
                    </p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setOutcome("discount")}
                        className="flex-1 bg-accent py-2 text-sm font-black text-ink transition hover:bg-paper focus-visible:outline focus-visible:outline-1 focus-visible:outline-ink"
                      >
                        {tx(locale, "Claim", "Reclamar")}
                      </button>
                      <button
                        type="button"
                        onClick={nextLayer}
                        className="border border-white/10 px-3 py-2 text-sm text-muted transition hover:text-paper"
                      >
                        {tx(locale, "No", "No")}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Layer 2: retention interstitial */}
              {layer === 2 && (
                <div className="absolute inset-0 z-30 flex animate-in flex-col items-center justify-center space-y-4 bg-[#101010] p-8 text-center">
                  <p className="text-3xl">😢</p>
                  <p className="text-xl font-black">{tx(locale, "Sure you want to leave?", "¿Seguro que quieres irte?")}</p>
                  <p className="text-sm text-muted">
                    {tx(locale, "You'll lose your profile, history & perks.", "Perderás tu perfil, historial y ventajas.")}
                  </p>
                  <button
                    type="button"
                    onClick={() => setOutcome("plan")}
                    className="w-full bg-accent py-3 text-sm font-black text-ink transition hover:bg-paper focus-visible:outline focus-visible:outline-1 focus-visible:outline-ink"
                  >
                    {tx(locale, "Keep my plan", "Quedarme")}
                  </button>
                  <button
                    type="button"
                    onClick={nextLayer}
                    className="w-full border border-white/10 py-3 text-sm text-muted transition hover:text-paper"
                  >
                    {tx(locale, "Continue cancellation", "Seguir cancelando")}
                  </button>
                </div>
              )}

              {/* Layer 3: countdown, then a tiny escape link */}
              {layer === 3 && (
                <div className="absolute inset-0 z-40 flex animate-in flex-col items-center justify-center space-y-4 bg-[#101010] p-8 text-center">
                  <p className="text-4xl">⏳</p>
                  <p className="text-lg font-black">
                    {tx(locale, "Processing your request...", "Procesando tu solicitud...")}
                  </p>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-1000"
                      style={{ width: `${(1 - visibleCountdown / 5) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted/70">
                    {locale === "es" ? `Espera ${visibleCountdown}s...` : `Wait ${visibleCountdown}s...`}
                  </p>
                  {visibleCountdown <= 0 && (
                    <button
                      type="button"
                      onClick={nextLayer}
                      className="text-[10px] text-muted/70 underline transition hover:text-paper"
                    >
                      {tx(locale, "Continue anyway", "Continuar igual")}
                    </button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </PhoneShell>
      <div className="flex items-center justify-between gap-3 px-1">
        <SpecimenCaption>
          {tx(locale, "Obstruction layer", "Capa de obstrucción")}: {Math.min(layer + 1, 4)}/4
        </SpecimenCaption>
        {layer === 3 && (
          <DemoPauseButton paused={paused} onToggle={() => setPaused((value) => !value)} locale={locale} />
        )}
      </div>
    </div>
  );
}

export function VisualObstructionEthical({ locale = "en" }: { locale?: Locale }) {
  const [step, setStep] = useState<"overview" | "confirm" | "cancelled">("overview");

  return (
    <div className="space-y-2">
      <PhoneShell>
        <div className="flex min-h-[430px] flex-col p-5">
          {step === "overview" && (
            <>
              <p className="text-2xl font-black">{tx(locale, "Cancel subscription", "Cancelar suscripción")}</p>
              <p className="mt-3 text-sm text-muted">{tx(locale, "Review your plan details.", "Revisa los detalles de tu plan.")}</p>

              <div className="mt-6 space-y-3 border border-emerald-400/20 bg-ink p-4">
                <div className="flex justify-between text-sm">
                  <span>{tx(locale, "Current plan", "Plan actual")}</span>
                  <span className="font-black text-emerald-400">Premium</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{tx(locale, "Price", "Precio")}</span>
                  <span className="text-muted">19.99€/{tx(locale, "mo", "mes")}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{tx(locale, "Access until", "Acceso hasta")}</span>
                  <span className="text-muted">{locale === "es" ? "14 dic 2026" : "14 Dec 2026"}</span>
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-muted">
                {tx(locale, "One clear action. No overlays, no extra screens.", "Una acción clara. Sin capas ni pantallas extra.")}
              </p>

              <button
                type="button"
                onClick={() => setStep("confirm")}
                className="mt-auto w-full border border-emerald-400/50 py-3 text-sm font-black text-emerald-300 transition hover:bg-emerald-400/10 focus-visible:outline focus-visible:outline-1 focus-visible:outline-emerald-400"
              >
                {tx(locale, "Cancel subscription", "Cancelar suscripción")}
              </button>
            </>
          )}

          {step === "confirm" && (
            <>
              <p className="text-2xl font-black">{tx(locale, "Cancel subscription?", "¿Cancelar suscripción?")}</p>
              <p className="mt-3 text-sm leading-6 text-muted">
                {tx(
                  locale,
                  "You'll keep access until 14 Dec 2026. No further charges.",
                  "Mantendrás el acceso hasta el 14 dic 2026. No habrá más cobros."
                )}
              </p>
              <div className="mt-auto space-y-2">
                <button
                  type="button"
                  onClick={() => setStep("cancelled")}
                  className="w-full bg-emerald-500 py-3 text-sm font-black text-ink transition hover:bg-emerald-400 focus-visible:outline focus-visible:outline-1 focus-visible:outline-ink"
                >
                  {tx(locale, "Yes, cancel", "Sí, cancelar")}
                </button>
                <button
                  type="button"
                  onClick={() => setStep("overview")}
                  className="w-full border border-white/10 py-3 text-sm text-muted transition hover:text-paper"
                >
                  {tx(locale, "Keep my plan", "Mantener mi plan")}
                </button>
              </div>
            </>
          )}

          {step === "cancelled" && (
            <>
              <p className="text-2xl font-black text-emerald-400">{tx(locale, "Subscription cancelled", "Suscripción cancelada")}</p>
              <p className="mt-3 text-sm leading-6 text-muted">
                {tx(locale, "You keep access until 14 Dec 2026.", "Mantienes el acceso hasta el 14 dic 2026.")}
              </p>
              <button
                type="button"
                onClick={() => setStep("overview")}
                className="mt-auto w-full border border-white/10 py-3 text-sm text-muted transition hover:text-paper"
              >
                {tx(locale, "Back", "Volver")}
              </button>
            </>
          )}
        </div>
      </PhoneShell>
      <SpecimenCaption>
        {tx(
          locale,
          "Same account screen: one cancellation path, no obstruction.",
          "Misma pantalla de cuenta: un único camino de cancelación, sin obstrucción."
        )}
      </SpecimenCaption>
    </div>
  );
}
