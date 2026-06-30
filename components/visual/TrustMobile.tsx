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
  const questions = [
    { q: locale === "es" ? "¿Tu tipo de piel?" : "Your skin type?", a: [locale === "es" ? "Seca" : "Dry", locale === "es" ? "Grasa" : "Oily", locale === "es" ? "Mixta" : "Combination"] },
    { q: locale === "es" ? "¿Tu principal preocupación?" : "Main concern?", a: [locale === "es" ? "Arrugas" : "Wrinkles", locale === "es" ? "Acné" : "Acne", locale === "es" ? "Manchas" : "Spots"] },
    { q: locale === "es" ? "¿Tu presupuesto?" : "Your budget?", a: ["25-50€", "50-100€", "100€+"] },
  ];
  if (step < questions.length) {
    return (
      <div className="border border-white/10 bg-[#101010] p-5">
        <p className="mb-1 text-xs text-muted">{locale === "es" ? `Pregunta ${step + 1} de ${questions.length}` : `Question ${step + 1} of ${questions.length}`}</p>
        <p className="text-2xl font-black">{questions[step].q}</p>
        <div className="mt-5 grid gap-3">
          {questions[step].a.map((answer, i) => (
            <button key={i} onClick={() => setStep(step + 1)} className="border border-white/10 bg-ink p-3 text-left text-sm text-paper transition hover:border-accent/50">{answer}</button>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.beauty} alt="" />
      <div className="space-y-4 p-5">
        <Badge tone="neutral">{locale === "es" ? "Resultado" : "Personalized result"}</Badge>
        <p className="text-2xl font-black">{locale === "es" ? "Tu perfil: Piel deshidratada" : "Your profile: Dehydrated skin"}</p>
        <p className="text-sm text-muted">{locale === "es" ? "Recomendamos el pack recuperación." : "We recommend the recovery bundle."}</p>
        <div className="border border-accent/40 bg-accent/10 p-3"><p className="font-black text-accent">{locale === "es" ? "Pack: 89€" : "Bundle: 89€"}</p></div>
        <Button full>{locale === "es" ? "Empezar plan" : "Start recovery plan"}</Button>
      </div>
    </div>
  );
}

export function VisualObstructionExample({ locale = "en" }: { locale?: Locale }) {
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  useEffect(() => {
    if (bannerDismissed) {
      const t = setTimeout(() => setBannerDismissed(false), 4000);
      return () => clearTimeout(t);
    }
  }, [bannerDismissed]);
  if (cancelled) return <PhoneShell><div className="p-8 text-center"><p className="text-2xl font-black">{locale === "es" ? "Cancelado (creemos)" : "Cancelled (we think)"}</p></div></PhoneShell>;
  return (
    <PhoneShell>
      <div className="relative min-h-[430px] p-5">
        <p className="text-2xl font-black">{locale === "es" ? "Cancelar suscripción" : "Cancel subscription"}</p>
        <p className="mt-3 text-sm text-muted">{locale === "es" ? "Revisa tu plan." : "Review your plan."}</p>
        <button onClick={() => setCancelled(true)} className="mt-40 text-sm text-muted underline">{locale === "es" ? "Continuar" : "Continue to cancellation"}</button>
        {!bannerDismissed && (
          <div className="absolute inset-x-0 bottom-0 animate-in border-t border-accent/40 bg-accent p-4 text-ink">
            <p className="font-black">{locale === "es" ? "Instala la app" : "Install the app"}</p>
            <p className="mt-1 text-sm">{locale === "es" ? "Soporte más rápido." : "Faster support."}</p>
            <div className="mt-3 flex gap-2">
              <button className="flex-1 bg-ink py-2 text-sm font-black text-paper">{locale === "es" ? "Abrir" : "Open app"}</button>
              <button onClick={() => setBannerDismissed(true)} className="border border-ink/20 px-3 py-2 text-sm text-ink">✕</button>
            </div>
          </div>
        )}
      </div>
    </PhoneShell>
  );
}
