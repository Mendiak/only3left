"use client";

import { useState, useEffect, useRef } from "react";
import type { Locale } from "@/lib/i18n";
import { tx, photos, Badge, Button, Photo, PriceLine, PhoneShell, BasketRow } from "./Helpers";

export function RoachMotelExample({ locale = "en" }: { locale?: Locale }) {
  const [step, setStep] = useState<"overview" | "retention1" | "retention2" | "retention3" | "cancel">("overview");
  const [attempts, setAttempts] = useState(0);

  const retentionMessages = [
    { title: locale === "es" ? "¿Estás seguro?" : "Are you sure?", desc: locale === "es" ? "Te ofrecemos 50% de descuento por 3 meses" : "We'll give you 50% off for 3 months", button: locale === "es" ? "Aceptar oferta" : "Accept offer" },
    { title: locale === "es" ? "¡Última oportunidad!" : "Last chance!", desc: locale === "es" ? "Plan vitalicio por solo 99€" : "Lifetime plan for only 99€", button: locale === "es" ? "Aceptar plan vitalicio" : "Accept lifetime" },
    { title: locale === "es" ? "¿Nos dejas?" : "Leaving us?", desc: locale === "es" ? "2 meses gratis + soporte VIP" : "2 months free + VIP support", button: locale === "es" ? "Aceptar y quedarme" : "Accept & stay" },
  ];

  const handleCancelClick = () => {
    setAttempts((p) => p + 1);
    if (step === "overview") setStep("retention1");
    else if (step === "retention1") setStep("retention2");
    else if (step === "retention2") setStep("retention3");
    else if (step === "retention3") setStep("cancel");
  };

  const handleAccept = () => {
    setStep("overview");
    setAttempts(0);
  };

  if (step === "cancel") {
    return (
      <div className="border border-white/10 bg-[#101010] p-8 text-center">
        <p className="text-3xl font-black text-red-400">{locale === "es" ? "Cancelado (creemos)" : "Cancelled (we think)"}</p>
        <p className="mt-3 text-sm text-muted">{locale === "es" ? "Te enviaremos un email en 3-5 días hábiles para confirmar. Mientras tanto, disfruta de tu cuenta." : "We'll send a confirmation email in 3-5 business days. Enjoy your account in the meantime."}</p>
        <p className="mt-6 text-[10px] text-muted/30">{locale === "es" ? "5 pantallas de retención superadas" : "5 retention screens bypassed"}</p>
      </div>
    );
  }

  const currentStep = step === "overview" ? null : step === "retention1" ? retentionMessages[0] : step === "retention2" ? retentionMessages[1] : retentionMessages[2];

  return (
    <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
      <aside className="border border-white/10 bg-[#101010] p-4">
        {(locale === "es" ? ["Resumen", "Facturación", "Facturas", "Equipo", "Seguridad", "Soporte"] : ["Overview", "Billing", "Invoices", "Team", "Security", "Support"]).map((item, index) => (
          <div key={item} className={`border-b border-white/10 py-3 text-sm ${index === 1 ? "text-accent" : "text-muted"}`}>{item}</div>
        ))}
      </aside>
      <div className="border border-white/10 bg-[#101010] p-5">
        {currentStep ? (
          <div className="animate-in space-y-4">
            <p className="text-2xl font-black">{currentStep.title}</p>
            <p className="text-sm leading-6 text-muted">{currentStep.desc}</p>
            <div className="grid gap-3">
              <Button full onClick={handleAccept}>{currentStep.button}</Button>
              <button onClick={handleCancelClick} className="border border-white/20 py-3 text-sm font-semibold text-paper transition hover:border-red-400/50">
                {locale === "es" ? "Sigo queriendo cancelar" : "I still want to cancel"}
              </button>
            </div>
            <p className="text-[10px] text-muted/30">{locale === "es" ? `Intento ${attempts} de cancelación` : `Cancellation attempt ${attempts}`}</p>
          </div>
        ) : (
          <>
            <p className="text-2xl font-black">{locale === "es" ? "Plan Premium" : "Premium Plan"}</p>
            <p className="mt-2 text-sm text-muted">{locale === "es" ? "Se renueva mañana" : "Renews tomorrow"}</p>
            <div className="mt-5 grid gap-3">
              <Button full>{locale === "es" ? "Mejorar ahora" : "Upgrade instantly"}</Button>
              <button className="border border-white/20 py-3 font-semibold text-paper">{locale === "es" ? "Cambiar método de pago" : "Change payment method"}</button>
              <button onClick={handleCancelClick} className="text-left text-xs text-muted transition hover:text-red-400">
                {locale === "es" ? "Cancelar suscripción" : "Cancel subscription"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function HiddenCancellationExample({ locale = "en" }: { locale?: Locale }) {
  const menuItems = locale === "es"
    ? ["Perfil", "Facturación", "Uso del plan", "Facturas", "Preferencias", "Seguridad", "Métodos de pago", "Historial", "Notificaciones", "Centro de ayuda", "Legal", "Cookies", "Datos", "Accesibilidad", "Idioma", "Temas", "Atajos", "API", "Registro de actividad", "Cancelar suscripción"]
    : ["Profile", "Billing", "Plan usage", "Invoices", "Preferences", "Security", "Payment methods", "History", "Notifications", "Help center", "Legal", "Cookies", "Data", "Accessibility", "Language", "Themes", "Shortcuts", "API", "Activity log", "Cancel subscription"];

  const [scrollY, setScrollY] = useState(0);
  const [found, setFound] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const scrollToCancel = () => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const handleScroll = () => {
      setScrollY(el.scrollTop);
      const maxScroll = el.scrollHeight - el.clientHeight;
      if (el.scrollTop >= maxScroll - 10) setFound(true);
    };
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="border border-white/10 bg-[#101010] p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-xl font-bold">{locale === "es" ? "Ajustes" : "Settings"}</p>
        <Badge tone="neutral">{locale === "es" ? "Suscripción activa" : "Active subscription"}</Badge>
      </div>
      <div ref={listRef} className="grid max-h-[260px] gap-2 overflow-y-auto">
        {menuItems.map((item, i) => (
          <div key={item} className={`flex items-center justify-between border border-white/10 bg-ink p-3 text-sm transition ${
            item === "Cancel subscription" || item === "Cancelar suscripción"
              ? found ? "border-accent/50 bg-accent/10 text-accent" : "text-muted/30"
              : "text-paper"
          }`}>
            <span>{item}</span>
            <span className="text-muted">{i + 1}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <button onClick={scrollToCancel} className="text-xs text-accent underline underline-offset-4 transition hover:text-paper">
          {locale === "es" ? "Buscar 'cancelar'" : "Find 'cancel'"}
        </button>
        <p className="text-[10px] text-muted/30">
          {found
            ? locale === "es" ? "¡Encontrado! (ítem 20 de 20)" : "Found! (item 20 of 20)"
            : locale === "es" ? `Scroll: ${Math.round(scrollY / 10)}%` : `Scroll: ${Math.round(scrollY / 10)}%`}
        </p>
      </div>
    </div>
  );
}

export function ForcedContinuityExample({ locale = "en" }: { locale?: Locale }) {
  const [step, setStep] = useState<"signup" | "warning" | "charged">("signup");

  const handleStartTrial = () => {
    setStep("warning");
    setTimeout(() => setStep("charged"), 2500);
  };

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.workspace} alt={locale === "es" ? "Escritorio" : "Workspace"} />
      <div className="space-y-4 p-5">
        {step === "signup" && (
          <>
            <Badge tone="warning">{locale === "es" ? "7 días gratis" : "7 days free"}</Badge>
            <p className="text-3xl font-black">{locale === "es" ? "Prueba Pro" : "Start your Pro trial"}</p>
            <p className="text-sm leading-6 text-muted">{locale === "es" ? "0€ hoy. Plan anual tras la prueba si no cancelas." : "0€ today. Annual plan begins automatically after trial."}</p>
            <div className="border border-white/10 bg-ink p-3 text-sm text-muted">{locale === "es" ? "Tarjeta requerida" : "Card required"}</div>
            <Button full onClick={handleStartTrial}>{locale === "es" ? "Empezar prueba" : "Start free trial"}</Button>
          </>
        )}
        {step === "warning" && (
          <div className="animate-in space-y-4">
            <p className="text-3xl font-black">{locale === "es" ? "Revisa los términos" : "Review the terms"}</p>
            <p className="text-sm leading-6 text-muted">{locale === "es" ? "Al hacer clic aceptas que... bueno, los leerás en la factura." : "By clicking you agree to... well, you'll read it on the invoice."}</p>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full animate-pulse rounded-full bg-accent" style={{ animationDuration: "2.5s" }} />
            </div>
          </div>
        )}
        {step === "charged" && (
          <div className="animate-in space-y-4">
            <p className="text-3xl font-black text-red-400">{locale === "es" ? "¡Cobro realizado!" : "Charged!"}</p>
            <p className="text-sm leading-6 text-muted">{locale === "es" ? "249€ — facturación anual. ¡Que disfrutes del plan!" : "249€ — annual billing. Enjoy the plan!"}</p>
            <div className="border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-400">
              {locale === "es" ? "Cancelación: 72h antes de cada renovación (aviso con 24h de antelación)" : "Cancellation: 72h before renewal (notified 24h in advance)"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function NegativeOptionBillingExample({ locale = "en" }: { locale?: Locale }) {
  const [optedOut, setOptedOut] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleToggle = () => {
    if (!optedOut) {
      setWarning(true);
    } else {
      setOptedOut(false);
      setWarning(false);
    }
  };

  const handleConfirmOptOut = () => {
    setOptedOut(true);
    setWarning(false);
  };

  return (
    <div className="border border-white/10 bg-[#101010] p-5">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-black">{locale === "es" ? "Renovación" : "Renewal"}</p>
        {optedOut ? (
          <Badge tone="neutral">{locale === "es" ? "Cancelado" : "Cancelled"}</Badge>
        ) : (
          <Badge tone="warning">{locale === "es" ? "Auto-renovación" : "Auto-renewal"}</Badge>
        )}
      </div>
      <p className="mt-3 text-sm leading-6 text-muted">
        {locale === "es"
          ? "Tu plan se renueva automáticamente cada año."
          : "Your plan renews automatically every year."}
      </p>
      <div className="mt-5 space-y-3">
        <div
          onClick={handleToggle}
          className={`flex cursor-pointer items-center gap-3 border p-3 text-sm transition ${
            optedOut ? "border-white/10 bg-ink text-muted" : "border-accent/30 bg-accent/5 text-paper"
          }`}
        >
          <span className={`grid h-5 w-5 shrink-0 place-items-center border text-xs font-black transition ${
            optedOut ? "border-white/10 bg-transparent text-transparent" : "border-accent bg-accent text-ink"
          }`}>
            {optedOut ? "" : "✓"}
          </span>
          <span>{locale === "es" ? "Mantener suscripción activa" : "Keep membership active"}</span>
        </div>
        <PriceLine label={locale === "es" ? "Próximo cargo" : "Next charge"} value="149€" />
        <PriceLine label={locale === "es" ? "Estado" : "Status"} value={optedOut ? locale === "es" ? "No renovará" : "Will not renew" : locale === "es" ? "Renovación activa" : "Active renewal"} muted />
      </div>

      {warning && (
        <div className="animate-in mt-4 space-y-3 border border-red-400/20 bg-red-400/5 p-4">
          <p className="font-bold text-red-400">{locale === "es" ? "¿Cancelar renovación?" : "Cancel renewal?"}</p>
          <p className="text-sm text-muted">{locale === "es" ? "Perderás acceso inmediato a funciones premium." : "You'll lose access to premium features immediately."}</p>
          <div className="flex gap-3">
            <button onClick={handleConfirmOptOut} className="bg-red-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-600">
              {locale === "es" ? "Sí, cancelar" : "Yes, cancel"}
            </button>
            <button onClick={() => setWarning(false)} className="border border-white/20 px-4 py-2 text-sm text-paper">
              {locale === "es" ? "No, mejor no" : "No, keep it"}
            </button>
          </div>
        </div>
      )}

      <Button full className="mt-5">{locale === "es" ? "Guardar" : "Save settings"}</Button>
    </div>
  );
}

export function ForcedRegistrationExample({ locale = "en" }: { locale?: Locale }) {
  const [step, setStep] = useState<"initial" | "form" | "done">("initial");
  const [form, setForm] = useState({ name: "", email: "", password: "", phone: "" });
  const [errorField, setErrorField] = useState("");

  const handleSubmit = () => {
    if (!form.name) { setErrorField("name"); return; }
    if (!form.email) { setErrorField("email"); return; }
    if (!form.password) { setErrorField("password"); return; }
    if (!form.phone) { setErrorField("phone"); return; }
    setStep("done");
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrorField("");
  };

  return (
    <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
      <div className="border border-white/10 bg-[#101010] p-5">
        <p className="text-2xl font-black">{locale === "es" ? "Tu cesta" : "Your basket"}</p>
        <div className="mt-4 space-y-3">
          <BasketRow title={locale === "es" ? "Organizador" : "Desk organizer"} price="24€" />
          <BasketRow title={locale === "es" ? "Libretas" : "Notebook set"} price="12€" />
        </div>
        <div className="mt-4 flex justify-between border-t border-white/10 pt-4 font-black"><span>{locale === "es" ? "Total" : "Total"}</span><span>36€</span></div>
      </div>

      <div className="border border-white/10 bg-[#101010] p-5">
        {step === "initial" && (
          <div className="space-y-4">
            <p className="text-2xl font-black">{locale === "es" ? "¿Listo para pagar?" : "Ready to pay?"}</p>
            <p className="text-sm text-muted">{locale === "es" ? "Casi... pero necesitas registrarte." : "Almost... but you need to register."}</p>
            <Button full onClick={() => setStep("form")}>{locale === "es" ? "Pagar como invitado" : "Checkout as guest"}</Button>
          </div>
        )}

        {step === "form" && (
          <div className="space-y-4">
            <p className="text-2xl font-black">{locale === "es" ? "Crear cuenta" : "Create account"}</p>
            <p className="text-xs text-muted">{locale === "es" ? "No hay opción de invitado." : "No guest checkout available."}</p>
            {["name", "email", "password", "phone"].map((field) => (
              <div key={field}>
                <input
                  value={form[field as keyof typeof form]}
                  onChange={(e) => update(field, e.target.value)}
                  placeholder={field === "name" ? (locale === "es" ? "Nombre completo" : "Full name") : field === "email" ? "Email" : field === "password" ? (locale === "es" ? "Contraseña" : "Password") : (locale === "es" ? "Teléfono" : "Phone")}
                  type={field === "password" ? "password" : field === "phone" ? "tel" : "text"}
                  className={`w-full border bg-ink px-3 py-3 text-sm text-paper outline-none transition ${
                    errorField === field ? "border-red-500/50 bg-red-500/5" : "border-white/10"
                  }`}
                />
              </div>
            ))}
            {errorField && (
              <p className="animate-in text-xs text-red-400">{locale === "es" ? "El teléfono es obligatorio para el envío." : "Phone is required for delivery."}</p>
            )}
            <Button full onClick={handleSubmit}>{locale === "es" ? "Crear cuenta y pagar" : "Create account & pay"}</Button>
          </div>
        )}

        {step === "done" && (
          <div className="space-y-4 text-center">
            <p className="text-2xl font-black text-accent">{locale === "es" ? "¡Cuenta creada!" : "Account created!"}</p>
            <p className="text-sm text-muted">{locale === "es" ? "Ahora estás registrado. No había opción invitado." : "You're now registered. There was no guest option."}</p>
            <p className="text-[10px] text-muted/30">{locale === "es" ? "Bienvenido a nuestra base de datos." : "Welcome to our database."}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function AutoplayTrapExample({ locale = "en" }: { locale?: Locale }) {
  const [progress, setProgress] = useState(20);
  const [cancelling, setCancelling] = useState(false);
  useEffect(() => {
    if (cancelling) return;
    const timer = setInterval(() => setProgress((p) => (p >= 100 ? 0 : p + 2)), 150);
    return () => clearInterval(timer);
  }, [cancelling]);
  const handleCancel = () => {
    setCancelling(true);
    setTimeout(() => { setProgress(0); setCancelling(false); }, 2000);
  };
  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.video} alt="" />
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <p className="text-xl font-black">{locale === "es" ? "Episodio completo" : "Episode complete"}</p>
          <Badge tone="warning">{cancelling ? (locale === "es" ? "Cancelando..." : "Cancelling...") : (locale === "es" ? "Siguiente en..." : "Next in...")}</Badge>
        </div>
        <div className="h-2 overflow-hidden bg-white/10"><div className={`h-full transition-all ${cancelling ? "bg-red-500" : "bg-accent"}`} style={{ width: `${cancelling ? 100 : progress}%` }} /></div>
        <Button full onClick={() => { setProgress(0); setCancelling(false); }}>{locale === "es" ? "Seguir viendo" : "Keep watching"}</Button>
        <button onClick={handleCancel} className="w-full text-sm text-muted transition hover:text-red-400">{locale === "es" ? "Cancelar autoplay" : "Cancel autoplay"}</button>
      </div>
    </div>
  );
}

export function LoyaltyLockInExample({ locale = "en" }: { locale?: Locale }) {
  const [points, setPoints] = useState(940);
  const [clickCount, setClickCount] = useState(0);
  const handleOrder = () => {
    setClickCount((p) => p + 1);
    setPoints((p) => {
      const deduction = 5 + clickCount * 3;
      return Math.max(800, p - deduction);
    });
  };
  return (
    <PhoneShell>
      <div className="space-y-5 p-5 text-center">
        <p className="text-sm uppercase tracking-[0.18em] text-muted">{locale === "es" ? "Saldo" : "Reward balance"}</p>
        <p className="text-6xl font-black text-accent">{points}</p>
        <p className="text-sm text-muted">{locale === "es" ? `A ${1000 - points} puntos del vale.` : `Only ${1000 - points} points from a voucher.`}</p>
        <div className="h-3 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-accent transition-all" style={{ width: `${points / 10}%` }} /></div>
        <Button full onClick={handleOrder}>{locale === "es" ? "Pedir para canjear" : "Order to unlock"}</Button>
        <p className="text-xs text-muted">{locale === "es" ? `Puntos tras pedido #${clickCount + 1}: ${points - (5 + clickCount * 3)}` : `Points after order #${clickCount + 1}: ${points - (5 + clickCount * 3)}`}</p>
      </div>
    </PhoneShell>
  );
}
