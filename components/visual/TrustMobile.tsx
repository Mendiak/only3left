"use client";

import { useState, useEffect } from "react";
import type { Locale } from "@/lib/i18n";
import { tx, photos, Badge, Button, Photo, PhoneShell } from "./Helpers";

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

export function VisualObstructionExample({ locale = "en" }: { locale?: Locale }) {
  const [layer, setLayer] = useState(0);
  const [cancelled, setCancelled] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const nextLayer = () => {
    setLayer((l) => Math.min(l + 1, 4));
    if (layer < 3) setCountdown(5);
  };

  useEffect(() => {
    if (layer === 3 && countdown > 0) {
      const t = setInterval(() => setCountdown((c) => c - 1), 1000);
      return () => clearInterval(t);
    }
  }, [layer, countdown]);

  if (cancelled) return (
    <PhoneShell>
      <div className="p-8 text-center space-y-4">
        <p className="text-2xl font-black">{locale === "es" ? "Cancelado" : "Cancelled"}</p>
        <p className="text-xs text-muted">
          {locale === "es" ? "(Tras 4 pantallas de obstrucción)" : "(After 4 obstruction screens)"}
        </p>
      </div>
    </PhoneShell>
  );

  return (
    <PhoneShell>
      <div className="relative min-h-[430px] p-5">
        <p className="text-2xl font-black">{locale === "es" ? "Cancelar suscripción" : "Cancel subscription"}</p>
        <p className="mt-3 text-sm text-muted">{locale === "es" ? "Revisa los detalles de tu plan." : "Review your plan details."}</p>

        <div className="mt-6 space-y-3 border border-white/10 bg-ink p-4">
          <div className="flex justify-between text-sm"><span>{locale === "es" ? "Plan actual" : "Current plan"}</span><span className="font-black text-accent">{locale === "es" ? "Premium" : "Premium"}</span></div>
          <div className="flex justify-between text-sm"><span>{locale === "es" ? "Precio" : "Price"}</span><span className="text-muted">19.99€/{locale === "es" ? "mes" : "mo"}</span></div>
          <div className="flex justify-between text-sm"><span>{locale === "es" ? "Próximo cobro" : "Next charge"}</span><span className="text-muted">14 {locale === "es" ? "jul" : "Jul"} 2026</span></div>
        </div>

        <button
          onClick={() => setCancelled(true)}
          disabled={layer < 4}
          className={`mt-6 w-full py-3 text-sm font-black transition ${
            layer >= 4 ? "bg-red-500/20 text-red-400 hover:bg-red-500/30" : "cursor-not-allowed text-muted/30"
          }`}
        >
          {locale === "es" ? "Cancelar suscripción" : "Cancel subscription"}
        </button>

        {layer >= 0 && layer < 4 && (
          <>
            {/* Layer 0: Bottom banner */}
            {layer === 0 && (
              <div className="absolute inset-x-0 bottom-0 animate-in border-t border-accent/40 bg-accent p-4 text-ink">
                <p className="font-black">{locale === "es" ? "📱 Descarga nuestra app" : "📱 Download our app"}</p>
                <p className="mt-1 text-sm">{locale === "es" ? "Soporte más rápido y notificaciones." : "Faster support & notifications."}</p>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 bg-ink py-2 text-sm font-black text-paper">{locale === "es" ? "Abrir" : "Open app"}</button>
                  <button onClick={nextLayer} className="border border-ink/20 px-3 py-2 text-sm text-ink">✕</button>
                </div>
              </div>
            )}

            {/* Layer 1: Modal overlay */}
            {layer === 1 && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 animate-in">
                <div className="mx-4 w-full max-w-[260px] bg-[#101010] border border-accent/30 p-6 text-center space-y-4">
                  <p className="text-2xl">🔥</p>
                  <p className="font-black text-accent">{locale === "es" ? "¡Descuento especial!" : "Special discount!"}</p>
                  <p className="text-sm text-muted">{locale === "es" ? "50% off en tu próximo mes." : "50% off your next month."}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-accent py-2 text-sm font-black text-ink">{locale === "es" ? "Reclamar" : "Claim"}</button>
                    <button onClick={nextLayer} className="border border-white/10 px-3 py-2 text-sm text-muted">{locale === "es" ? "No" : "No"}</button>
                  </div>
                </div>
              </div>
            )}

            {/* Layer 2: Interstitial blocking cancel */}
            {layer === 2 && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#101010] animate-in p-8 text-center space-y-4">
                <p className="text-3xl">😢</p>
                <p className="text-xl font-black">{locale === "es" ? "¿Seguro que quieres irte?" : "Sure you want to leave?"}</p>
                <p className="text-sm text-muted">{locale === "es" ? "Perderás tu perfil, historial y ventajas." : "You'll lose your profile, history & perks."}</p>
                <button className="w-full bg-accent py-3 text-sm font-black text-ink">{locale === "es" ? "Quedarme" : "Keep my plan"}</button>
                <button onClick={nextLayer} className="w-full border border-white/10 py-3 text-sm text-muted">{locale === "es" ? "Seguir cancelando" : "Continue cancellation"}</button>
              </div>
            )}

            {/* Layer 3: Almost there — countdown + tiny skip */}
            {layer === 3 && (
              <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-[#101010] animate-in p-8 text-center space-y-4">
                <p className="text-4xl">⏳</p>
                <p className="text-lg font-black">{locale === "es" ? "Procesando tu solicitud..." : "Processing your request..."}</p>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-accent transition-all duration-1000" style={{ width: `${(1 - countdown / 5) * 100}%` }} />
                </div>
                <p className="text-xs text-muted/50">{locale === "es" ? `Espera ${countdown}s...` : `Wait ${countdown}s...`}</p>
                {countdown <= 0 && (
                  <button onClick={nextLayer} className="text-[10px] text-muted/30 underline transition hover:text-muted">
                    {locale === "es" ? "Continuar igual" : "Continue anyway"}
                  </button>
                )}
              </div>
            )}
          </>
        )}

        <p className="absolute bottom-2 left-0 right-0 text-center text-[9px] text-muted/10">
          {locale === "es" ? "Capa de obstrucción" : "Obstruction layer"}: {layer + 1}/4
        </p>
      </div>
    </PhoneShell>
  );
}
