"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { Locale } from "@/lib/i18n";
import { tx, photos, Badge, Button, Photo, PhoneShell, Rating } from "./Helpers";

export function LikeGateExample({ locale = "en" }: { locale?: Locale }) {
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
          <Image src={photo} alt={tx(locale, "Content locked behind like", "Contenido bloqueado tras like")} fill sizes="50vw" className="object-cover" />
        </div>
        {!liked && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <button
              onClick={handleLike}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-3xl transition hover:scale-110"
            >
              ♥
            </button>
            <p className="text-sm font-semibold">{tx(locale, "Tap ♥ to reveal", "Toca ♥ para ver")}</p>
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-lg font-bold">{tx(locale, "The perfect summer glow", "El brillo veraniego perfecto")}</p>
        <p className="text-sm text-muted">{tx(locale, "A simple 3-step routine.", "Una rutina sencilla de 3 pasos.")}</p>
        {showGate && (
          <button className="mt-4 w-full border border-accent/50 bg-accent/10 py-3 text-sm font-semibold text-accent transition hover:bg-accent/20">
            {tx(locale, "Share with a friend to unlock the full guide →", "Comparte con un amigo para ver la guía completa →")}
          </button>
        )}
      </div>
    </div>
  );
}

export function ConfirmshamingExample({ locale = "en" }: { locale?: Locale }) {
  const [mode, setMode] = useState<"initial" | "shame1" | "shame2" | "shame3">("initial");
  const shames = [
    locale === "es" ? "No, gracias. Prefiero pagar más" : "No thanks, I hate saving money",
    locale === "es" ? "Sí, soy feliz perdiendo dinero" : "Yes, I'm happy losing money",
    locale === "es" ? "¡No me importa derrochar!" : "I love wasting cash!",
  ];
  return (
    <div className="mx-auto max-w-md border border-white/10 bg-[#101010] p-5 text-center shadow-2xl shadow-black/40">
      <Badge tone="warning">{locale === "es" ? "Antes de irte" : "Before you go"}</Badge>
      <p className="mt-4 text-3xl font-black">{locale === "es" ? "15% en tu primer pedido" : "Get 15% off your first order"}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{locale === "es" ? "Únete a 40.000 lectores." : "Join 40,000 readers."}</p>
      <div className="mt-5 space-y-3">
        <input className="w-full border border-white/10 bg-ink px-3 py-3 text-sm text-paper outline-none" placeholder="email@example.com" />
        <Button full>{locale === "es" ? "Sí, quiero el descuento" : "Yes, send my discount"}</Button>
        <button onClick={() => setMode((p) => p === "initial" ? "shame1" : p === "shame1" ? "shame2" : "shame3")} className="text-sm text-muted underline underline-offset-4 transition hover:text-red-400">
          {mode === "initial" ? shames[0] : mode === "shame1" ? shames[1] : shames[2]}
        </button>
        {mode !== "initial" && <p className="text-[10px] text-muted/30">{locale === "es" ? "Cada clic empeora" : "Each click gets worse"}</p>}
      </div>
    </div>
  );
}

export function PrivacyZuckeringExample({ locale = "en" }: { locale?: Locale }) {
  const [step, setStep] = useState<"onboarding" | "warning" | "done">("onboarding");
  return (
    <PhoneShell>
      {step === "onboarding" && (
        <div className="space-y-4 p-4">
          <Photo src={photos.app} alt="" small />
          <p className="text-2xl font-black">{locale === "es" ? "Encuentra conocidos" : "Find people you know"}</p>
          <p className="text-sm leading-6 text-muted">{locale === "es" ? "Sube contactos para conectar." : "Upload contacts to connect."}</p>
          <Button full onClick={() => setStep("done")}>{locale === "es" ? "Subir contactos" : "Continue with contacts"}</Button>
          <button onClick={() => setStep("warning")} className="w-full py-2 text-sm text-muted/40 transition hover:text-muted">{locale === "es" ? "Saltar" : "Skip"}</button>
        </div>
      )}
      {step === "warning" && (
        <div className="space-y-4 p-4 text-center">
          <p className="text-2xl font-black">{locale === "es" ? "¿Seguro?" : "Are you sure?"}</p>
          <p className="text-sm leading-6 text-muted">{locale === "es" ? "Perderás conexiones con amigos." : "You'll miss connections with friends."}</p>
          <Button full onClick={() => setStep("done")}>{locale === "es" ? "Sí, subir contactos" : "OK, upload contacts"}</Button>
          <button onClick={() => setStep("done")} className="text-sm text-muted/30">{locale === "es" ? "No, prefiero estar solo" : "No, I prefer being alone"}</button>
        </div>
      )}
      {step === "done" && (
        <div className="space-y-4 p-4 text-center">
          <p className="text-2xl font-black text-accent">{locale === "es" ? "284 contactos subidos" : "284 contacts uploaded"}</p>
          <p className="text-sm text-muted">{locale === "es" ? "Compartidos con 142 socios." : "Shared with 142 partners."}</p>
        </div>
      )}
    </PhoneShell>
  );
}

export function SocialProofInflationExample({ locale = "en" }: { locale?: Locale }) {
  const [count, setCount] = useState(4812);
  const [displayCount, setDisplayCount] = useState(4812);
  const [showBuyers, setShowBuyers] = useState(false);
  const fakeBuyers = ["Ana M.", "Carlos R.", "Emma W.", "Lucía G.", "Mark T.", "Sofia K.", "James P.", "Lei Z."];

  useEffect(() => {
    const timer = setInterval(() => setCount((p) => p + Math.floor(Math.random() * 3) + 1), 2000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const step = Math.ceil((count - displayCount) / 8);
    if (displayCount < count) {
      const t = setTimeout(() => setDisplayCount((p) => Math.min(p + Math.max(step, 1), count)), 40);
      return () => clearTimeout(t);
    }
  }, [count, displayCount]);

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.lamp} alt="" />
      <div className="space-y-4 p-4">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-xl font-bold">Arc table lamp</p><p className="text-sm text-muted">{locale === "es" ? "Luz cálida" : "Warm light"} · {locale === "es" ? "Negro mate" : "Matte black"}</p></div>
          <Rating value="4.9" label={locale === "es" ? "2.341 reseñas" : "2,341 reviews"} />
        </div>
        <div className="flex items-center gap-3">
          <Badge tone="warning">{displayCount.toLocaleString()} {locale === "es" ? "compraron hoy" : "bought today"}</Badge>
          <button onClick={() => setShowBuyers((p) => !p)} className="text-[10px] text-muted underline underline-offset-2 hover:text-accent">
            {showBuyers ? (locale === "es" ? "ocultar" : "hide") : (locale === "es" ? "ver quién" : "see who")}
          </button>
        </div>
        {showBuyers && (
          <div className="animate-in grid grid-cols-2 gap-1.5 border border-white/10 bg-ink p-3">
            {fakeBuyers.map((name, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-muted">
                <span className="grid size-5 place-items-center rounded-full bg-accent text-[8px] font-black text-ink">{name.charAt(0)}</span>
                <span>{name}</span>
              </div>
            ))}
            <p className="col-span-full text-[9px] text-muted/40">{tx(locale, "Names generated for illustration", "Nombres generados para ilustración")}</p>
          </div>
        )}
        <Button full>{locale === "es" ? "Añadir" : "Add to cart"}</Button>
      </div>
    </div>
  );
}

export function VisualHierarchyExample({ locale = "en" }: { locale?: Locale }) {
  const [mode, setMode] = useState<"initial" | "accepted" | "rejected">("initial");

  return (
    <div className="mx-auto max-w-lg border border-white/10 bg-[#101010] p-5">
      <p className="text-xl font-bold">{locale === "es" ? "Personaliza tu experiencia" : "Personalize your experience"}</p>
      <p className="mt-3 text-sm leading-6 text-muted">
        {locale === "es" ? "Usamos datos para mejorar recomendaciones." : "We use data to improve recommendations."}
      </p>
      <div className="mt-5 space-y-4">
        <Button full onClick={() => setMode("accepted")}>
          {locale === "es" ? "Aceptar todo" : "Accept all"}
        </Button>
        <div className="flex justify-center">
          <button onClick={() => setMode("rejected")} className="text-[9px] text-muted/40 transition hover:text-muted" style={{ fontSize: "9px", lineHeight: "1" }}>
            {locale === "es" ? "Rechazar rastreo no esencial" : "Reject non-essential tracking"}
          </button>
        </div>
      </div>
      {mode === "accepted" && (
        <p className="animate-in mt-4 text-center text-xs text-accent">
          {locale === "es" ? "¡Gracias! Ahora compartimos tus datos con 287 socios." : "Thanks! Now sharing your data with 287 partners."}
        </p>
      )}
      {mode === "rejected" && (
        <p className="animate-in mt-4 text-center text-xs text-red-400">
          {locale === "es" ? "Has elegido la opción de 9px. ¿Seguro?" : "You chose the 9px option. Are you sure?"}
          <br />
          <button onClick={() => setMode("accepted")} className="mt-2 text-accent underline underline-offset-2">
            {locale === "es" ? "Aceptar todo (recomendado)" : "Accept all (recommended)"}
          </button>
        </p>
      )}
    </div>
  );
}

export function CookieLabyrinthExample({ locale = "en" }: { locale?: Locale }) {
  const [step, setStep] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const steps = [
    {
      title: locale === "es" ? "Paso 1: Cookies esenciales" : "Step 1: Essential cookies",
      desc: locale === "es" ? "Necesitamos tu consentimiento para seguir." : "We need your consent to proceed.",
      accept: locale === "es" ? "Aceptar esenciales" : "Accept essentials",
      reject: locale === "es" ? "Quiero gestionar" : "I want to manage",
    },
    {
      title: locale === "es" ? "Paso 2: Cookies de rendimiento" : "Step 2: Performance cookies",
      desc: locale === "es" ? "Ayudan a mejorar nuestro servicio." : "They help improve our service.",
      accept: locale === "es" ? "Aceptar rendimiento" : "Accept performance",
      reject: locale === "es" ? "Solo esenciales" : "Essentials only",
    },
    {
      title: locale === "es" ? "Paso 3: Cookies de marketing (287 socios)" : "Step 3: Marketing cookies (287 partners)",
      desc: locale === "es" ? "Personalizan anuncios basados en tu perfil." : "Personalize ads based on your profile.",
      accept: locale === "es" ? "Aceptar todo" : "Accept all",
      reject: locale === "es" ? "Rechazar todo" : "Reject all",
    },
  ];

  const handleAccept = () => {
    if (step < steps.length - 1) {
      setStep((p) => p + 1);
    } else {
      setAccepted(true);
    }
  };

  if (accepted) {
    return (
      <div className="border border-accent/40 bg-accent/5 p-8 text-center">
        <p className="text-2xl font-black text-accent">{locale === "es" ? "¡Cookies configuradas!" : "Cookies configured!"}</p>
        <p className="mt-2 text-sm text-muted">{locale === "es" ? "Compartiendo datos con 287 socios. Gracias por tu confianza." : "Sharing data with 287 partners. Thanks for your trust."}</p>
      </div>
    );
  }

  return (
    <div className="border border-white/10 bg-[#101010] p-5">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs text-muted">{locale === "es" ? "Configuración de privacidad" : "Privacy settings"}</p>
        <p className="text-[10px] text-muted/30">{step + 1} / {steps.length}</p>
      </div>
      <p className="text-xl font-bold">{steps[step].title}</p>
      <p className="mt-2 text-sm leading-6 text-muted">{steps[step].desc}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_1.5fr]">
        <button onClick={() => step < steps.length - 1 ? setStep((p) => p + 1) : setAccepted(true)} className="border border-white/20 py-3 text-sm font-semibold text-paper transition hover:border-accent/50">
          {steps[step].reject}
        </button>
        <Button onClick={handleAccept}>{steps[step].accept}</Button>
      </div>
      <p className="mt-4 text-[10px] text-muted/20">{locale === "es" ? "Su privacidad es importante para nosotros (pero no tanto)" : "Your privacy matters to us (but not that much)"}</p>
    </div>
  );
}

export function TrickQuestionsExample({ locale = "en" }: { locale?: Locale }) {
  const checkboxLabels = [
    locale === "es" ? "No desmarque esta casilla si no quiere perderse ofertas" : "Do not untick this box if you want to avoid missing offers",
    locale === "es" ? "No deseo renunciar a comunicaciones de socios" : "I do not wish to opt out of partner communications",
    locale === "es" ? "Mantenerme informado a menos que no haya rechazado" : "Keep me informed unless I have not declined",
  ];
  const [checked, setChecked] = useState([true, true, true]);
  const [saved, setSaved] = useState(false);

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
  };

  const checkedCount = checked.filter(Boolean).length;

  return (
    <div className="border border-white/10 bg-[#101010] p-5">
      <p className="text-2xl font-black">{locale === "es" ? "Preferencias" : "Preferences"}</p>
      <p className="mt-3 text-xs text-muted">
        {locale === "es"
          ? "Seleccione las opciones que NO desea rechazar para no excluirse"
          : "Select options you do NOT wish to decline to avoid being excluded"}
      </p>
      <div className="mt-5 space-y-3">
        {checkboxLabels.map((label, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            className="flex cursor-pointer items-center gap-3 border border-white/10 bg-ink p-3 text-sm text-muted transition hover:border-accent/30"
          >
            <span className={`grid h-5 w-5 shrink-0 place-items-center border text-xs font-black transition ${checked[i] ? "border-accent bg-accent text-ink" : "border-white/10"}`}>
              {checked[i] ? "✓" : ""}
            </span>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <Button full className="mt-5" onClick={handleSave}>
        {locale === "es" ? "Guardar preferencias" : "Save preferences"}
      </Button>
      {saved && (
        <p className="animate-in mt-4 text-center text-xs text-accent">
          {locale === "es"
            ? `Configuración guardada. ${checkedCount}/3 marcados = ${checkedCount === 3 ? "todo aceptado" : "parcialmente aceptado"}`
            : `Saved. ${checkedCount}/3 checked = ${checkedCount === 3 ? "all accepted" : "partially accepted"}`}
        </p>
      )}
    </div>
  );
}

export function MisdirectionExample({ locale = "en" }: { locale?: Locale }) {
  const [stage, setStage] = useState<"landing" | "checkout" | "fees" | "total">("landing");
  const [revealedFees, setRevealedFees] = useState(0);
  const fees = [
    { label: locale === "es" ? "Gastos de gestión" : "Handling fee", value: "12.99€" },
    { label: locale === "es" ? "Membresía Premium (1er mes)" : "Premium membership (1st mo)", value: "49.99€" },
    { label: locale === "es" ? "Envío express" : "Express shipping", value: "9.99€" },
    { label: locale === "es" ? "Seguro de producto" : "Product insurance", value: "5.99€" },
  ];

  useEffect(() => {
    if (stage !== "fees") return;
    if (revealedFees >= fees.length) {
      const t = setTimeout(() => setStage("total"), 600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setRevealedFees((p) => p + 1), 800);
    return () => clearTimeout(t);
  }, [stage, revealedFees]);

  const productPrice = 79.99;
  const total = productPrice + fees.reduce((s, f) => s + parseFloat(f.value), 0);

  if (stage === "landing") {
    return (
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.shopping} alt="" />
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-5xl font-black text-accent">50% OFF</p>
              <p className="text-sm text-muted">{locale === "es" ? "Hoy solo" : "Today only"}</p>
            </div>
            <Badge tone="warning">{locale === "es" ? "Oferta relámpago" : "Flash deal"}</Badge>
          </div>
          <p className="mt-3 text-2xl font-bold">{locale === "es" ? "Auriculares NoiseBlast Pro" : "NoiseBlast Pro Headphones"}</p>
          <div className="mt-1 flex items-center gap-3">
            <span className="text-3xl font-black">{productPrice.toFixed(2)}€</span>
            <span className="text-sm text-muted line-through">159.99€</span>
          </div>
          <Button className="mt-5" full onClick={() => setStage("checkout")}>
            {locale === "es" ? "Comprar ahora" : "Shop now"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <div className="space-y-4 p-5">
        <div className="flex items-center gap-2 text-sm text-muted">
          <span>{locale === "es" ? "Resumen del pedido" : "Order summary"}</span>
          <Badge tone="neutral">{locale === "es" ? "Paso 2 de 2" : "Step 2 of 2"}</Badge>
        </div>

        {stage === "checkout" && (
          <div className="animate-in space-y-4">
            <p className="text-2xl font-black">{locale === "es" ? "Casi listo..." : "Almost there..."}</p>
            <div className="border border-white/10 bg-ink p-4">
              <div className="flex justify-between text-sm">
                <span>{locale === "es" ? "Auriculares (50% OFF)" : "Headphones (50% OFF)"}</span>
                <span className="font-bold">{productPrice.toFixed(2)}€</span>
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-3/5 animate-pulse rounded-full bg-accent" />
              </div>
              <p className="mt-2 text-xs text-muted">{locale === "es" ? "Calculando opciones de envío..." : "Calculating shipping options..."}</p>
            </div>
            <Button full onClick={() => setStage("fees")}>
              {locale === "es" ? "Continuar al pago" : "Continue to payment"}
            </Button>
          </div>
        )}

        {stage === "fees" && (
          <div className="animate-in space-y-3">
            <p className="text-lg font-bold">{locale === "es" ? "Tasas adicionales" : "Additional fees"}</p>
            {fees.slice(0, revealedFees).map((fee, i) => (
              <div key={i} className="animate-in flex justify-between border-b border-white/10 pb-2 text-sm" style={{ animationDuration: "300ms" }}>
                <span className="text-muted">{fee.label}</span>
                <span className="text-muted">{fee.value}</span>
              </div>
            ))}
            {revealedFees < fees.length && (
              <p className="text-xs text-muted/50">{locale === "es" ? "Aplicando cargos..." : "Applying charges..."}</p>
            )}
          </div>
        )}

        {stage === "total" && (
          <div className="animate-in space-y-3">
            <p className="text-2xl font-black text-red-400">{locale === "es" ? "Total final" : "Final total"}</p>
            <div className="border border-white/10 bg-ink p-4 space-y-2">
              <div className="flex justify-between text-sm"><span>{locale === "es" ? "Producto" : "Product"}</span><span>{productPrice.toFixed(2)}€</span></div>
              {fees.map((fee, i) => (
                <div key={i} className="flex justify-between text-sm"><span className="text-muted">{fee.label}</span><span className="text-muted">{fee.value}</span></div>
              ))}
              <div className="flex justify-between border-t border-white/10 pt-2 font-bold"><span>{locale === "es" ? "Total" : "Total"}</span><span className="text-accent">{total.toFixed(2)}€</span></div>
            </div>
            <p className="text-xs text-muted">
              {locale === "es"
                ? `El "50% OFF" era sobre 159.99€. Pagas ${total.toFixed(2)}€ — más que el precio original.`
                : `The "50% OFF" was on 159.99€. You pay ${total.toFixed(2)}€ — more than the original price.`}
            </p>
            <button onClick={() => setStage("landing")} className="w-full border border-white/20 py-3 text-sm text-muted transition hover:border-accent/50">
              {locale === "es" ? "Empezar de nuevo" : "Start over"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function PermissionPrimingExample({ locale = "en" }: { locale?: Locale }) {
  const [step, setStep] = useState<"prime" | "guilt" | "done">("prime");
  return (
    <PhoneShell>
      {step === "prime" && (
        <div className="space-y-5 p-5 text-center">
          <Badge tone="warning">{locale === "es" ? "Recomendado" : "Recommended"}</Badge>
          <p className="text-2xl font-black">{locale === "es" ? "Activa ubicación para proteger tu cuenta" : "Allow location to protect your account"}</p>
          <p className="text-sm text-muted">{locale === "es" ? "Alertas más rápidas y experiencia segura." : "Faster alerts, safer experience."}</p>
          <Button full onClick={() => setStep("done")}>{locale === "es" ? "Activar" : "Continue"}</Button>
          <button onClick={() => setStep("guilt")} className="text-sm text-muted">{locale === "es" ? "Ahora no" : "Not now"}</button>
        </div>
      )}
      {step === "guilt" && (
        <div className="space-y-5 p-5 text-center">
          <p className="text-2xl font-black text-red-400">{locale === "es" ? "Tu cuenta podría estar en riesgo" : "Your account may be at risk"}</p>
          <p className="text-sm text-muted">{locale === "es" ? "Sin ubicación, no podemos protegerte." : "Without location, we can't protect you."}</p>
          <Button full onClick={() => setStep("done")}>{locale === "es" ? "Activar ubicación" : "Enable location"}</Button>
          <button onClick={() => setStep("done")} className="text-sm text-muted/40">{locale === "es" ? "Aceptar el riesgo" : "Accept the risk"}</button>
        </div>
      )}
      {step === "done" && (
        <div className="p-8 text-center">
          <p className="text-xl font-black">{locale === "es" ? "Preferencia guardada" : "Preference saved"}</p>
        </div>
      )}
    </PhoneShell>
  );
}

export function FakeActivityExample({ locale = "en" }: { locale?: Locale }) {
  const profiles = [
    { name: "Marta", city: locale === "es" ? "Madrid" : "Madrid" },
    { name: "Jon", city: locale === "es" ? "Bilbao" : "Bilbao" },
    { name: "Lucia", city: locale === "es" ? "Valencia" : "Valencia" },
    { name: "Carlos", city: locale === "es" ? "Barcelona" : "Barcelona" },
    { name: "Emma", city: locale === "es" ? "Londres" : "London" },
    { name: "James", city: locale === "es" ? "Dublín" : "Dublin" },
    { name: "Sofia", city: locale === "es" ? "Roma" : "Rome" },
  ];
  const actions = [
    { en: "just booked this", es: "acaba de reservar" },
    { en: "is viewing this", es: "está viendo esto" },
    { en: "added to wishlist", es: "lo añadió a favoritos" },
    { en: "checked availability", es: "consultó disponibilidad" },
  ];
  const [toasts, setToasts] = useState<{ name: string; city: string; action: string; time: string }[]>([]);
  const [viewers, setViewers] = useState(18);
  const [selectedProfile, setSelectedProfile] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const profile = profiles[Math.floor(Math.random() * profiles.length)];
      const action = actions[Math.floor(Math.random() * actions.length)];
      setToasts((prev) => [...prev.slice(-4), {
        name: profile.name,
        city: profile.city,
        action: locale === "es" ? action.es : action.en,
        time: `${Math.floor(Math.random() * 5) + 1}m`,
      }]);
      setViewers((prev) => Math.max(3, prev + Math.floor(Math.random() * 5) - 2));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.hotel} alt="" />
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-2xl font-black">{locale === "es" ? "Paquete fin de semana" : "City weekend package"}</p>
            <p className="text-sm text-muted">{locale === "es" ? "2 noches, desayuno incluido" : "2 nights, breakfast included"}</p>
          </div>
          <Badge tone="neutral">{viewers} {locale === "es" ? "viendo" : "viewing"}</Badge>
        </div>

        {selectedProfile !== null ? (
          <div className="animate-in border border-accent/20 bg-accent/5 p-4 space-y-2">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-accent text-lg font-black text-ink">
                {toasts[selectedProfile]?.name.charAt(0) || "?"}
              </span>
              <div>
                <p className="text-sm font-bold">{toasts[selectedProfile]?.name}</p>
                <p className="text-xs text-muted">{toasts[selectedProfile]?.city}</p>
              </div>
            </div>
            <p className="text-xs text-muted">
              {locale === "es"
                ? `${toasts[selectedProfile]?.name} ${toasts[selectedProfile]?.action} hace ${toasts[selectedProfile]?.time}`
                : `${toasts[selectedProfile]?.name} ${toasts[selectedProfile]?.action} ${toasts[selectedProfile]?.time} ago`}
            </p>
            <p className="text-[10px] text-muted/20">{locale === "es" ? "Perfil público mostrado" : "Public profile shown"}</p>
            <button onClick={() => setSelectedProfile(null)} className="text-[11px] text-accent underline">
              ← {locale === "es" ? "Volver a actividad" : "Back to activity"}
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            {toasts.map((t, i) => (
              <div
                key={i}
                onClick={() => setSelectedProfile(i)}
                className="animate-in flex cursor-pointer items-center gap-3 border border-white/10 bg-ink p-3 transition hover:border-accent/30"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent text-sm font-black text-ink">{t.name.charAt(0)}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted truncate">
                    <span className="font-semibold text-paper">{t.name}</span> {t.action}
                  </p>
                </div>
                <span className="text-[10px] text-muted/20">{t.time}</span>
              </div>
            ))}
          </div>
        )}

        {toasts.length === 0 && (
          <p className="text-xs text-muted/30">{locale === "es" ? "Esperando actividad..." : "Waiting for activity..."}</p>
        )}

        <Button full>{locale === "es" ? "Reservar ahora" : "Reserve now"}</Button>
        <p className="text-[10px] text-center text-muted/20">{locale === "es" ? "Actividad en tiempo real" : "Real-time activity"}</p>
      </div>
    </div>
  );
}

export function FriendSpamExample({ locale = "en" }: { locale?: Locale }) {
  const contacts = ["Ana", "Mark", "Lucia", "Carlos", "Emma", "Sofia", "James", "Lei"];
  const initialSelected = [true, true, true, true, true, false, false, false];
  const [selected, setSelected] = useState(initialSelected);
  const [progress, setProgress] = useState(0);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const hiddenContacts = contacts.filter((_, i) => !initialSelected[i]);

  const toggle = (i: number) => {
    if (sending || sent) return;
    setSelected((p) => { const n = [...p]; n[i] = !n[i]; return n; });
  };

  const handleSend = () => {
    setSending(true);
    const total = 100;
    const steps = 20;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      setProgress(Math.min(Math.round((step / steps) * total), 100));
      if (step % 3 === 0 && step < steps) {
        const unselectedHidden = hiddenContacts.filter((_, i) => !selected[initialSelected.indexOf(false, i)]);
        if (unselectedHidden.length > 0) {
          const idx = contacts.indexOf(unselectedHidden[0]);
          setSelected((p) => { const n = [...p]; n[idx] = true; return n; });
        }
      }
      if (step >= steps) {
        clearInterval(interval);
        setSending(false);
        setSent(true);
      }
    }, 250);
  };

  const allSelected = selected.every(Boolean);

  if (sent) return (
    <PhoneShell>
      <div className="p-8 text-center">
        <p className="text-xl font-black text-accent">{locale === "es" ? "¡Invitaciones enviadas!" : "Invites sent!"}</p>
        <p className="mt-3 text-sm text-muted">{locale === "es" ? `Enviadas a ${selected.filter(Boolean).length} contactos.` : `Sent to ${selected.filter(Boolean).length} contacts.`}</p>
        <p className="mt-2 text-[10px] text-muted/30">{locale === "es" ? "Algunos se añadieron durante el envío." : "Some were added during sending."}</p>
      </div>
    </PhoneShell>
  );

  return (
    <PhoneShell>
      <div className="space-y-4 p-5">
        <p className="text-2xl font-black">{locale === "es" ? "Invita contactos" : "Invite contacts"}</p>
        <p className="text-sm text-muted">{locale === "es" ? `Encontramos ${contacts.length} contactos.` : `Found ${contacts.length} contacts.`}</p>
        <div className="space-y-2">
          {contacts.map((name, i) => (
            <div key={i} onClick={() => toggle(i)} className={`flex cursor-pointer items-center gap-3 border bg-ink p-3 text-sm transition ${
              sending ? "border-white/5 opacity-50" : "border-white/10 hover:border-accent/30"
            } ${selected[i] ? "text-paper" : "text-muted/40"}`}>
              <span className={`grid h-5 w-5 shrink-0 place-items-center border text-xs font-black transition ${selected[i] ? "border-accent bg-accent text-ink" : "border-white/10"}`}>
                {selected[i] ? "✓" : ""}
              </span>
              <span>{name}</span>
              {!initialSelected[i] && selected[i] && !sending && (
                <span className="ml-auto text-[9px] text-muted/30">{locale === "es" ? "detectado" : "detected"}</span>
              )}
            </div>
          ))}
        </div>

        {sending && (
          <div className="space-y-2">
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-center text-xs text-muted">{locale === "es" ? "Enviando invitaciones..." : "Sending invites..."}</p>
          </div>
        )}

        <Button full onClick={handleSend} disabled={sending}>
          {sending ? (locale === "es" ? "Enviando..." : "Sending...") : (locale === "es" ? "Enviar invitaciones" : "Send invites")}
        </Button>

        {!sending && !sent && (
          <button onClick={() => setSelected(contacts.map(() => !allSelected))} className="w-full text-xs text-muted">
            {allSelected ? (locale === "es" ? "Deseleccionar todos" : "Deselect all") : (locale === "es" ? "Seleccionar todos" : "Select all")}
          </button>
        )}
      </div>
    </PhoneShell>
  );
}

export function DisguisedAdsExample({ locale = "en" }: { locale?: Locale }) {
  const [page, setPage] = useState<"results" | "article" | "reveal">("results");
  const [spotted, setSpotted] = useState(0);
  const totalDisguised = 3;

  const results = [
    { title: locale === "es" ? "Las 10 mejores cremas faciales 2026" : "Top 10 face creams 2026", url: "beauty-lab.com/mejores-cremas", sponsored: true },
    { title: locale === "es" ? "Guía completa de skincare" : "Complete skincare guide", url: "dermablog.com/guia", sponsored: false },
    { title: locale === "es" ? "Rutina facial para principiantes" : "Beginner facial routine", url: "skinwise.com/rutina", sponsored: false },
    { title: locale === "es" ? "Tratamientos caseros para el acné" : "Home treatments for acne", url: "natural-care.com/acne", sponsored: false },
  ];

  if (page === "results") return (
    <div className="bg-[#101010]">
      <div className="border-b border-white/10 bg-ink p-4">
        <div className="flex items-center gap-2">
          <span className="text-lg">🔍</span>
          <span className="text-sm font-black">{locale === "es" ? "Resultados de búsqueda" : "Search results"}</span>
        </div>
        <p className="mt-1 text-xs text-muted">{locale === "es" ? "4 resultados para" : "4 results for"} "{locale === "es" ? "mejor crema facial" : "best face cream"}"</p>
      </div>
      <div className="divide-y divide-white/5">
        {results.map((r, i) => (
          <div
            key={i}
            onClick={() => r.sponsored && setPage("article")}
            className={`block p-4 transition ${r.sponsored ? "cursor-pointer hover:bg-accent/5" : ""}`}
          >
            <div className="flex items-start gap-2">
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold truncate ${r.sponsored ? "text-accent" : "text-paper"}`}>{r.title}</p>
                <p className="mt-0.5 text-xs text-muted truncate">{r.url}</p>
                {r.sponsored && (
                  <p className="mt-1 text-[9px] uppercase tracking-widest text-accent/30">
                    {locale === "es" ? "Patrocinado" : "Sponsored"}
                  </p>
                )}
              </div>
              <span className="text-xs text-muted/20 shrink-0">{locale === "es" ? "Anuncio" : "Ad"} {i + 1}/{totalDisguised}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (page === "article") return (
    <div className="bg-[#101010]">
      <div className="border-b border-white/10 bg-ink p-4">
        <p className="text-sm font-black">{locale === "es" ? "Beauty Lab" : "Beauty Lab"}</p>
        <p className="text-xs text-muted">beauty-lab.com/mejores-cremas</p>
      </div>
      <div className="p-5 space-y-5">
        <p className="text-xl font-black">{locale === "es" ? "Las 10 mejores cremas faciales 2026" : "Top 10 face creams 2026"}</p>
        <p className="text-sm text-muted">{locale === "es" ? "Hemos probado 47 cremas para traerte esta lista." : "We tested 47 creams to bring you this list."}</p>

        {/* Disguised ad 2: in-content product placement */}
        <div onClick={() => { setSpotted(s => s + 1); }} className="cursor-pointer border border-accent/20 bg-accent/5 p-4 transition hover:bg-accent/10">
          <p className="text-sm font-black text-accent">{locale === "es" ? "GloShield Pro — 39.99€" : "GloShield Pro — $39.99"}</p>
          <p className="text-xs text-muted mt-1">{locale === "es" ? "Nuestra #1. Enlace de afiliado." : "Our #1 pick. Affiliate link."}</p>
          <p className="mt-2 text-[9px] text-accent/30 uppercase tracking-widest">{locale === "es" ? "PUBLICIDAD" : "ADVERTISEMENT"}</p>
        </div>

        <p className="text-sm text-muted">{locale === "es" ? "En segundo lugar recomendamos..." : "In second place we recommend..."}</p>

        {/* Disguised ad 3: "You might also like" */}
        <div className="border border-white/10 bg-ink p-4">
          <p className="text-[10px] uppercase tracking-widest text-muted/30">{locale === "es" ? "También te puede interesar" : "You might also like"}</p>
          <div onClick={() => { setSpotted(s => s + 1); }} className="mt-2 cursor-pointer flex items-center gap-3 transition hover:bg-accent/5 p-2 -mx-2 rounded">
            <span className="text-2xl">🧴</span>
            <div className="flex-1">
              <p className="text-sm font-semibold">{locale === "es" ? "Sérum Revitalift Plus" : "Revitalift Plus Serum"}</p>
              <p className="text-xs text-muted">{locale === "es" ? "Opiniones reales de usuarios" : "Real user reviews"}</p>
            </div>
            <span className="text-xs text-accent">{locale === "es" ? "Ver →" : "See →"}</span>
          </div>
          <p className="mt-1 text-[9px] text-muted/10 uppercase tracking-widest">{locale === "es" ? "Enlace patrocinado" : "Sponsored link"}</p>
        </div>

        <Button full onClick={() => setPage("reveal")}>
          {locale === "es" ? `Mostrar anuncios ocultos (${spotted}/${totalDisguised - 1})` : `Show hidden ads (${spotted}/${totalDisguised - 1})`}
        </Button>
      </div>
    </div>
  );

  return (
    <div className="bg-[#101010] p-5 space-y-4">
      <p className="font-black text-xl">{locale === "es" ? "🔍 Anuncios localizados" : "🔍 Ads localized"}</p>
      {results.slice(0, totalDisguised - 1).map((_, i) => (
        <div key={i} className="flex items-center gap-3 border border-red-500/20 bg-red-500/5 p-3">
          <span className="text-red-400 font-black">{i + 1}</span>
          <p className="text-sm text-muted">
            {i === 0 ? (locale === "es" ? "Resultado de búsqueda patrocinado" : "Sponsored search result")
            : i === 1 ? (locale === "es" ? "Artículo con enlace de afiliado" : "Article with affiliate link")
            : (locale === "es" ? "Widget de contenido patrocinado" : "Sponsored content widget")}
          </p>
        </div>
      ))}
      <p className="text-xs text-muted/30">{locale === "es" ? "3 anuncios camuflados en una sola página." : "3 camouflaged ads on a single page."}</p>
    </div>
  );
}

export function ReviewGatingExample({ locale = "en" }: { locale?: Locale }) {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  if (submitted) return <div className="border border-white/10 bg-[#101010] p-8 text-center"><p className="text-2xl font-black text-accent">{locale === "es" ? "¡Gracias!" : "Thanks!"}</p></div>;
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="border border-white/10 bg-[#101010] p-5">
        <p className="text-xl font-black">{locale === "es" ? "¿Tu visita?" : "How was your visit?"}</p>
        <div className="mt-4 flex gap-1 text-3xl">
          {[1, 2, 3, 4, 5].map((star) => (
            <button key={star} onClick={() => { setRating(star); if (star >= 4) setSubmitted(true); }} className={`transition hover:scale-110 ${star <= (rating || 5) ? "text-accent" : "text-muted/20"}`}>★</button>
          ))}
        </div>
        {rating > 0 && rating < 4 && (
          <button onClick={() => setSubmitted(true)} className="mt-5 w-full border border-white/20 py-3 text-sm font-semibold text-paper">
            {locale === "es" ? "Enviar feedback privado" : "Send private feedback"}
          </button>
        )}
        {rating >= 4 && <Button full className="mt-5">{locale === "es" ? "Publicar reseña" : "Post public review"}</Button>}
      </div>
      <div className="border border-white/10 bg-[#101010] p-5">
        <p className="text-xl font-black">{locale === "es" ? "Algo fue mal?" : "Something wrong?"}</p>
        <div className="mt-4 flex gap-1 text-3xl text-muted">★★☆☆☆</div>
        <button className="mt-5 w-full border border-white/20 py-3 text-sm font-semibold text-paper">{locale === "es" ? "Feedback privado" : "Private feedback"}</button>
      </div>
    </div>
  );
}

export function SocialCrossSellExample({ locale = "en" }: { locale?: Locale }) {
  const items = [
    { name: locale === "es" ? "Inserts de ruido premium" : "Premium Noise Inserts", price: "19€" },
    { name: locale === "es" ? "Estuche de transporte" : "Carrying Case", price: "29€" },
    { name: locale === "es" ? "Garantía Plus 2 años" : "Warranty Plus 2yr", price: "14€" },
  ];
  const [added, setAdded] = useState(items.map(() => false));
  const [toasts, setToasts] = useState<string[]>([]);
  const names = ["Ana", "Mark", "Lucia", "Carlos"];

  useEffect(() => {
    const timer = setInterval(() => {
      if (Math.random() > 0.5) {
        const name = names[Math.floor(Math.random() * names.length)];
        const item = items[Math.floor(Math.random() * items.length)];
        setToasts((prev) => [...prev.slice(-2), `${name} ${locale === "es" ? "compró" : "bought"} ${item.name}`]);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const addedCount = added.filter(Boolean).length;
  const total = 89 + (added[0] ? 19 : 0) + (added[1] ? 29 : 0) + (added[2] ? 14 : 0);

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.shopping} alt="" />
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-2xl font-black">{locale === "es" ? "NoiseBlast Pro Inalámbricos" : "NoiseBlast Pro Wireless"}</p>
            <p className="text-lg font-bold text-accent">89€</p>
          </div>
          <Badge tone="warning">{tx(locale, "Best seller", "Más vendido")}</Badge>
        </div>

        <div className="border border-white/10 bg-ink p-4">
          <p className="mb-3 text-xs uppercase tracking-[0.16em] text-muted">
            {tx(locale, "Customers also bought", "Clientes también compraron")}
          </p>
          <div className="space-y-2">
            {items.map((item, i) => (
              <div
                key={i}
                onClick={() => setAdded((prev) => { const n = [...prev]; n[i] = !n[i]; return n; })}
                className="flex cursor-pointer items-center justify-between border border-white/10 bg-[#101010] p-3 text-sm transition hover:border-accent/30"
              >
                <div className="flex items-center gap-3">
                  <span className={`grid h-5 w-5 shrink-0 place-items-center border text-xs font-black transition ${added[i] ? "border-accent bg-accent text-ink" : "border-white/10"}`}>
                    {added[i] ? "✓" : ""}
                  </span>
                  <span className="text-muted">{item.name}</span>
                </div>
                <span className="font-semibold">{item.price}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[10px] text-muted/30">
            {locale === "es"
              ? `${addedCount} de ${items.length} añadido${addedCount > 1 ? "s" : ""}`
              : `${addedCount} of ${items.length} added`}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-sm text-muted">{tx(locale, "Total", "Total")}</span>
          <span className="text-2xl font-black">{total}€</span>
        </div>

        <Button full>{tx(locale, "Add to cart", "Añadir al carrito")}</Button>

        <div className="space-y-1.5">
          {toasts.map((t, i) => (
            <div key={i} className="animate-in flex items-center gap-2 border border-white/10 bg-ink px-3 py-2 text-xs text-muted" style={{ animationDuration: "300ms" }}>
              <span className="shrink-0">🛒</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
