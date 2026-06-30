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
  useEffect(() => {
    const timer = setInterval(() => setCount((p) => p + Math.floor(Math.random() * 3) + 1), 2000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.lamp} alt="" />
      <div className="space-y-4 p-4">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-xl font-bold">Arc table lamp</p><p className="text-sm text-muted">{locale === "es" ? "Luz cálida" : "Warm light"} · {locale === "es" ? "Negro mate" : "Matte black"}</p></div>
          <Rating value="4.9" label={locale === "es" ? "2.341 reseñas" : "2,341 reviews"} />
        </div>
        <Badge tone="warning">{count.toLocaleString()} {locale === "es" ? "personas compraron hoy" : "bought this today"}</Badge>
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
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.shopping} alt={locale === "es" ? "Compras" : "Shopping"} />
      <div className="p-5">
        <p className="text-5xl font-black text-accent">50% OFF</p>
        <p className="mt-2 text-xl font-bold">{locale === "es" ? "Hoy solo" : "Today only"}</p>
        <Button className="mt-5">{locale === "es" ? "Comprar" : "Shop now"}</Button>
        <div className="mt-5">
          <button onClick={() => setShowTerms(!showTerms)} className="text-[10px] text-muted/30 underline underline-offset-2 hover:text-muted/60">
            {showTerms ? (locale === "es" ? "Ocultar términos" : "Hide terms") : locale === "es" ? "Ver términos y condiciones" : "View terms & conditions"}
          </button>
          {showTerms && (
            <div className="animate-in mt-3 max-h-24 overflow-y-scroll border border-white/5 bg-ink p-3 text-[8px] leading-4 text-muted/40">
              {locale === "es"
                ? "El descuento del 50% se aplica al primer mes tras activar la membresía Premium (49.99€/mes). Membresía se renueva automáticamente. Se aplican gastos de gestión de 12.99€. Oferta válida solo para nuevos usuarios en los primeros 15 minutos tras el registro. No acumulable con otras promociones. Productos seleccionados según disponibilidad. El reembolso se realiza en créditos de tienda no reembolsables. Términos completos disponibles en nuestra oficina (visita con cita previa)."
                : "50% discount applies to first month after Premium membership activation (49.99€/mo). Membership auto-renews. 12.99€ handling fee applies. Offer valid only for new users within 15 minutes of registration. Cannot be combined with other promotions. Selected items based on availability. Refunds issued as non-refundable store credit. Full terms available at our office (by appointment only)."}
            </div>
          )}
        </div>
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
  const names = [locale === "es" ? "Marta" : "Marta", locale === "es" ? "Jon" : "Jon", locale === "es" ? "Lucía" : "Lucia", locale === "es" ? "Carlos" : "Carlos", locale === "es" ? "Emma" : "Emma"];
  const [toasts, setToasts] = useState<{ name: string; action: string }[]>([]);
  useEffect(() => {
    const timer = setInterval(() => {
      const name = names[Math.floor(Math.random() * names.length)];
      const action = Math.random() > 0.5
        ? (locale === "es" ? "acaba de reservar" : "just booked this")
        : (locale === "es" ? "está viendo esto" : "is viewing this");
      setToasts((prev) => [...prev.slice(-2), { name, action }]);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.hotel} alt="" />
      <div className="space-y-3 p-5">
        <p className="text-2xl font-black">{locale === "es" ? "Paquete fin de semana" : "City weekend package"}</p>
        {toasts.map((t, i) => (
          <div key={i} className="animate-in flex items-center gap-3 border border-white/10 bg-ink p-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sm font-black text-ink">{t.name.charAt(0)}</span>
            <p className="text-sm text-muted"><span className="font-semibold text-paper">{t.name}</span> {t.action}</p>
          </div>
        ))}
        <Button full>{locale === "es" ? "Reservar" : "Reserve"}</Button>
      </div>
    </div>
  );
}

export function FriendSpamExample({ locale = "en" }: { locale?: Locale }) {
  const contacts = ["Ana", "Mark", "Lucia", "Carlos", "Emma"];
  const [selected, setSelected] = useState(contacts.map(() => true));
  const [sent, setSent] = useState(false);
  const toggle = (i: number) => setSelected((p) => { const n = [...p]; n[i] = !n[i]; return n; });
  const allSelected = selected.every(Boolean);
  if (sent) return <PhoneShell><div className="p-8 text-center"><p className="text-xl font-black text-accent">{locale === "es" ? "¡Invitaciones enviadas!" : "Invites sent!"}</p></div></PhoneShell>;
  return (
    <PhoneShell>
      <div className="space-y-4 p-5">
        <p className="text-2xl font-black">{locale === "es" ? "Invita contactos" : "Invite contacts"}</p>
        <p className="text-sm text-muted">{locale === "es" ? `Encontramos ${contacts.length} contactos.` : `Found ${contacts.length} contacts.`}</p>
        {contacts.map((name, i) => (
          <div key={i} onClick={() => toggle(i)} className="flex cursor-pointer items-center gap-3 border border-white/10 bg-ink p-3 text-sm text-muted">
            <span className={`grid h-5 w-5 shrink-0 place-items-center border text-xs font-black transition ${selected[i] ? "border-accent bg-accent text-ink" : "border-white/10"}`}>{selected[i] ? "✓" : ""}</span>
            <span>{name}</span>
          </div>
        ))}
        <Button full onClick={() => setSent(true)}>{locale === "es" ? "Enviar" : "Send invites"}</Button>
        <button onClick={() => setSelected(contacts.map(() => !allSelected))} className="w-full text-xs text-muted">
          {allSelected ? (locale === "es" ? "Deseleccionar todos" : "Deselect all") : (locale === "es" ? "Seleccionar todos" : "Select all")}
        </button>
      </div>
    </PhoneShell>
  );
}

export function DisguisedAdsExample({ locale = "en" }: { locale?: Locale }) {
  const [showAd, setShowAd] = useState(false);
  return (
    <div className="space-y-3 border border-white/10 bg-[#101010] p-4">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} onMouseEnter={() => i === 0 && setShowAd(true)} onMouseLeave={() => i === 0 && setShowAd(false)} className="border border-white/10 bg-ink p-4">
          <div className="mb-2 flex items-center gap-2">
            {i === 0 && <span className={`text-[10px] uppercase tracking-[0.12em] ${showAd ? "text-accent" : "text-muted/20"}`}>{locale === "es" ? "Patrocinado" : "Sponsored"}</span>}
            <span className="text-xs text-muted">{i === 0 ? "ad.example.com" : "example.com"}</span>
          </div>
          <p className="text-lg font-semibold">
            {i === 0
              ? (locale === "es" ? "Cascos NoiseBlast Pro — ¡50% off!" : "NoiseBlast Pro headphones — 50% off!")
              : i === 1 ? (locale === "es" ? "Mejores cascos 2026" : "Best noise-cancelling headphones 2026")
              : i === 2 ? (locale === "es" ? "Cascos inalámbricos top" : "Top wireless headphones compared")
              : (locale === "es" ? "Guía de compra cascos" : "Headphone buying guide")}
          </p>
        </div>
      ))}
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
