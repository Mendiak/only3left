"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { tx, photos, Badge, Button, Rating, Photo, PriceLine, BasketRow } from "./Helpers";

export function FakeScarcityExample({ locale = "en" }: { locale?: Locale }) {
  const [roomsLeft, setRoomsLeft] = useState(3);
  const [viewers, setViewers] = useState(22);
  const [toast, setToast] = useState<string | null>(null);
  const [stage, setStage] = useState<"idle" | "booking" | "error" | "upsell" | "success">("idle");
  const names = ["Marta", "Jon", "Lucia", "Carlos", "Emma", "James", "Sofia", "Lei"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoomsLeft((prev) => {
        if (prev <= 1) return 1;
        return prev - (Math.random() > 0.6 ? 1 : 0);
      });
      setViewers((prev) => Math.max(5, prev + Math.floor(Math.random() * 7) - 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const toastTimer = setInterval(() => {
      const name = names[Math.floor(Math.random() * names.length)];
      setToast(name);
      setTimeout(() => setToast(null), 2500);
    }, 5000);
    return () => clearInterval(toastTimer);
  }, []);

  const handleReserve = () => {
    setStage("booking");
    setTimeout(() => {
      setStage("error");
      setRoomsLeft((prev) => Math.max(0, prev - 1));
    }, 1500);
  };

  const handleUpsellAccept = () => {
    setStage("success");
  };

  const handleUpsellReject = () => {
    setRoomsLeft(1);
    setStage("idle");
  };

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.hotel} alt={tx(locale, "Hotel room", "Habitación de hotel")} />
      <div className="space-y-4 p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xl font-bold">Central Studio, Old Town</p>
            <p className="text-sm text-muted">{tx(locale, "Free cancellation", "Cancelación gratuita")} · {tx(locale, "Breakfast included", "Desayuno incluido")}</p>
          </div>
          <Rating value="8.9" label={tx(locale, "Excellent", "Excelente")} />
        </div>
        <div className="flex flex-wrap gap-2">
          {stage === "error" ? (
            <Badge tone="warning">{tx(locale, "Just booked!", "¡Acaba de reservarse!")}</Badge>
          ) : (
            <Badge tone="warning">{tx(locale, "Only", "Solo")} {roomsLeft} {tx(locale, "left", "disponibles")}</Badge>
          )}
          <Badge tone="neutral">{viewers} {tx(locale, "viewing", "viendo")}</Badge>
        </div>
        {toast && stage === "idle" && (
          <div className="animate-in flex items-center gap-2 border border-white/10 bg-ink px-3 py-2 text-sm text-muted">
            <span className="grid size-6 place-items-center rounded-full bg-accent text-[10px] font-black text-ink">{toast.charAt(0)}</span>
            {toast} {tx(locale, "just booked this room", "acaba de reservar esta habitación")}
          </div>
        )}

        {stage === "idle" && (
          <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-4">
            <div>
              <p className="text-xs text-muted">{tx(locale, "Tonight", "Esta noche")}</p>
              <p className="text-2xl font-black">142€</p>
            </div>
            <Button onClick={handleReserve}>{tx(locale, "Reserve", "Reservar")}</Button>
          </div>
        )}

        {stage === "booking" && (
          <div className="animate-in border-t border-white/10 pt-4 text-center">
            <p className="text-sm text-muted">{tx(locale, "Processing your reservation...", "Procesando tu reserva...")}</p>
            <div className="mx-auto mt-3 h-2 w-48 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full origin-left animate-progress rounded-full bg-accent" />
            </div>
          </div>
        )}

        {stage === "error" && (
          <div className="animate-in space-y-4 border-t border-white/10 pt-4">
            <div className="border border-red-500/20 bg-red-500/10 p-3 text-center">
              <p className="text-sm font-black text-red-400">{tx(locale, "Someone just booked this room!", "¡Alguien acaba de reservar esta habitación!")}</p>
              <p className="mt-1 text-xs text-muted">{tx(locale, "It happened while you were reviewing.", "Ocurrió mientras revisabas.")}</p>
            </div>
            <div className="border border-accent/20 bg-accent/5 p-4 text-center">
              <p className="text-lg font-black">{tx(locale, "But we have another option!", "¡Pero tenemos otra opción!")}</p>
              <p className="mt-2 text-3xl font-black">189€</p>
              <p className="text-xs text-muted">{tx(locale, "Premium studio with city view", "Estudio premium con vistas")}</p>
              <div className="mt-4 flex gap-3">
                <Button full onClick={handleUpsellAccept}>{tx(locale, "Book it", "Reservar")}</Button>
                <button onClick={handleUpsellReject} className="shrink-0 px-4 py-2 text-xs text-muted underline">{tx(locale, "No thanks", "No, gracias")}</button>
              </div>
            </div>
          </div>
        )}

        {stage === "success" && (
          <div className="animate-in border-t border-white/10 pt-4 text-center">
            <p className="text-xl font-black text-accent">✓ {tx(locale, "Reserved!", "¡Reservado!")}</p>
            <p className="mt-2 text-xs text-muted/30">{tx(locale, "You paid 47€ more than the original room.", "Pagaste 47€ más que la habitación original.")}</p>
          </div>
        )}

        <p className="text-[10px] text-center text-muted/30">{tx(locale, "Updated in real time", "Actualizado en tiempo real")}</p>
      </div>
    </div>
  );
}

export function CountdownResetExample({ locale = "en" }: { locale?: Locale }) {
  const [display, setDisplay] = useState(12);
  const [expired, setExpired] = useState(false);
  const [resets, setResets] = useState(0);

  useEffect(() => {
    if (expired) {
      const t = setTimeout(() => {
        setExpired(false);
        setDisplay(12);
        setResets((p) => p + 1);
      }, 1800);
      return () => clearTimeout(t);
    }
    const timer = setInterval(() => {
      setDisplay((prev) => {
        if (prev <= 1) {
          setExpired(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [expired]);

  const handleClaim = () => {
    setExpired(false);
    setDisplay(12);
    setResets((p) => p + 1);
  };

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.timer} alt={tx(locale, "Vacation landscape", "Paisaje de vacaciones")} />
      <div className="space-y-4 p-4">
        <div className="flex items-center justify-between">
          <Badge tone="warning">{tx(locale, "Private deal", "Oferta privada")}</Badge>
          <p className="text-xs text-muted">{tx(locale, "Session offer", "Oferta de sesión")}</p>
        </div>
        <p className="text-2xl font-black">{tx(locale, "Mediterranean weekend", "Fin de semana mediterráneo")}</p>
        <div className={`grid grid-cols-[1fr_auto] items-center gap-3 border p-3 transition-colors ${expired ? "border-red-500/40 bg-red-500/10" : "border-accent/40 bg-accent/10"}`}>
          <span className="text-sm">{tx(locale, "Discount expires in", "El descuento expira en")}</span>
          <span className={`font-mono text-3xl font-black transition-colors ${expired ? "text-red-500" : "text-accent"}`}>
            {locale === "es" ? `00:${display.toString().padStart(2, "0")}` : `00:${display.toString().padStart(2, "0")}`}
          </span>
        </div>
        {expired && (
          <p className="animate-in text-xs text-red-400">{tx(locale, "Renewing your discount...", "Renovando tu descuento...")}</p>
        )}
        <Button full onClick={handleClaim}>{tx(locale, "Claim discount", "Consigue el descuento")}</Button>
        <p className="text-[10px] text-center text-muted/30">
          {resets > 0 ? tx(locale, `Reset ${resets} time(s)`, `Reiniciado ${resets} vez/veces`) : tx(locale, "This offer never actually expires", "Esta oferta nunca caduca realmente")}
        </p>
      </div>
    </div>
  );
}

export function ScarcityLadderExample({ locale = "en" }: { locale?: Locale }) {
  const allBadges = [
    { text: locale === "es" ? "Elección popular" : "Popular choice", tone: "neutral" as const },
    { text: locale === "es" ? "Alta demanda" : "High demand", tone: "warning" as const },
    { text: locale === "es" ? "Solo queda 1" : "Only 1 left", tone: "warning" as const },
    { text: locale === "es" ? "El precio puede subir" : "Price may rise soon", tone: "warning" as const },
    { text: locale === "es" ? "3 personas lo ven" : "3 people viewing", tone: "neutral" as const },
  ];
  const [visible, setVisible] = useState([0]);
  const [cycle, setCycle] = useState(0);
  const [dismissals, setDismissals] = useState(0);

  useEffect(() => {
    if (visible.length >= allBadges.length) {
      const t = setTimeout(() => {
        setVisible([0]);
        setCycle((c) => c + 1);
      }, 2000);
      return () => clearTimeout(t);
    }
    const timer = setInterval(() => {
      setVisible((prev) => {
        const nextId = prev[prev.length - 1] + 1;
        if (nextId >= allBadges.length) return prev;
        return [...prev, nextId];
      });
    }, 1400);
    return () => clearInterval(timer);
  }, [visible.length]);

  const dismiss = (id: number) => {
    setVisible((prev) => prev.filter((v) => v !== id));
    setDismissals((p) => p + 1);
    if (visible.length <= 1) {
      setTimeout(() => setVisible([Math.floor(Math.random() * allBadges.length)]), 500);
    }
  };

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.hotel} alt={tx(locale, "Hotel suite", "Suite de hotel")} />
      <div className="space-y-4 p-5">
        <p className="text-2xl font-black">{tx(locale, "Suite with balcony", "Suite con balcón")}</p>
        <div className="flex min-h-[72px] flex-wrap gap-2">
          {visible.map((id) => (
            <div key={id} className="animate-in cursor-pointer transition hover:scale-105" style={{ animationDuration: "300ms" }} onClick={() => dismiss(id)}>
              <Badge tone={allBadges[id].tone}>{allBadges[id].text}</Badge>
            </div>
          ))}
        </div>
        {dismissals > 0 && (
          <p className="text-[10px] text-muted/30">
            {locale === "es" ? `Descartados: ${dismissals}` : `Dismissed: ${dismissals}`}
          </p>
        )}
        <Button full>{tx(locale, "Book now", "Reservar ahora")}</Button>
        {cycle > 0 && (
          <p className="text-[10px] text-center text-muted/30">
            {locale === "es" ? `Oleada de presión #${cycle + 1}` : `Pressure wave #${cycle + 1}`}
          </p>
        )}
      </div>
    </div>
  );
}

export function DecoyPricingExample({ locale = "en" }: { locale?: Locale }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [showTrick, setShowTrick] = useState(false);
  const plans = [
    { name: locale === "es" ? "Básico" : "Basic", price: 5, desc: locale === "es" ? "1 proyecto, 10MB almacenamiento" : "1 project, 10MB storage", slug: "basic", value: 5 },
    { name: "Pro", price: 19, desc: locale === "es" ? "Proyectos ilimitados, 1GB" : "Unlimited projects, 1GB", slug: "pro", badge: locale === "es" ? "Más popular" : "Most popular", value: 19 },
    { name: locale === "es" ? "Ultra" : "Ultra", price: 199, desc: locale === "es" ? "100GB + asistente dedicado" : "100GB + dedicated assistant", slug: "ultra", value: 199 },
  ];
  const maxPrice = Math.max(...plans.map(p => p.price));
  const displayPrices = showTrick
    ? plans.map(p => ({ ...p, display: p.price }))
    : plans.map(p => ({ ...p, display: p.price }));

  const decoyNote = (slug: string) => {
    if (slug === "basic" && selected === "basic") return locale === "es" ? "El 94% elige Pro" : "94% choose Pro";
    if (slug === "ultra") return locale === "es" ? "Hace que Pro parezca una ganga" : "Makes Pro look like a steal";
    return "";
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-3 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.slug}
            onClick={() => setSelected(plan.slug)}
            className={`relative cursor-pointer border p-5 transition-all ${
              plan.slug === "pro" ? "border-accent bg-accent/10" : selected === plan.slug ? "border-accent/60 bg-white/[0.04]" : "border-white/10 bg-[#101010]"
            } ${selected === plan.slug ? "scale-[1.02]" : "hover:scale-[1.01]"}`}
          >
            <div className="h-7">{plan.badge && <Badge tone="warning">{plan.badge}</Badge>}</div>
            <p className="mt-3 text-xl font-bold">{plan.name}</p>
            <p className="mt-3 text-4xl font-black">{plan.price}€</p>
            <p className="mt-3 text-sm leading-6 text-muted">{plan.desc}</p>
            {decoyNote(plan.slug) && (
              <p className="mt-2 animate-in text-[11px] italic text-accent/70">{decoyNote(plan.slug)}</p>
            )}
            {showTrick && (
              <div className="mt-3 space-y-1">
                <div className="flex items-center justify-between text-[10px] text-muted/30">
                  <span>{locale === "es" ? "Precio" : "Price"}</span>
                  <span>{plan.price}€</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${(plan.price / maxPrice) * 100}%`,
                      background: plan.slug === "pro" ? "#ffe44d" : plan.slug === "ultra" ? "#ff4444" : "#ffffff20",
                    }}
                  />
                </div>
              </div>
            )}
            <button className={`mt-5 w-full border py-3 text-sm font-bold transition ${
              plan.slug === "pro" ? "border-accent bg-accent text-ink" : "border-white/20 text-paper hover:border-accent/50"
            }`}>
              {locale === "es" ? `Elegir ${plan.name}` : `Choose ${plan.name}`}
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border border-white/10 bg-ink p-4">
        <p className="text-xs text-muted">
          {showTrick
            ? locale === "es"
              ? "Ultra existe solo para que Pro parezca razonable."
              : "Ultra exists only to make Pro look reasonable."
            : locale === "es"
              ? "¿Notas algo raro en los precios?"
              : "Notice something odd about the pricing?"}
        </p>
        <button onClick={() => setShowTrick(!showTrick)} className="text-xs text-accent underline transition hover:text-accent/80">
          {showTrick
            ? (locale === "es" ? "Ocultar" : "Hide")
            : (locale === "es" ? "Mostrar el truco" : "Show the trick")}
        </button>
      </div>
    </div>
  );
}

export function DripPricingExample({ locale = "en" }: { locale?: Locale }) {
  const [revealed, setRevealed] = useState(0);
  const [totalRevealed, setTotalRevealed] = useState(0);
  const fees = [
    { label: locale === "es" ? "Entrada" : "Ticket", value: "39€" },
    { label: locale === "es" ? "Tasa de servicio" : "Service fee", value: "8€" },
    { label: locale === "es" ? "Tasa de gestión" : "Processing fee", value: "5€" },
    { label: locale === "es" ? "Entrega" : "Mobile delivery", value: "4€" },
    { label: locale === "es" ? "Tasa de conveniencia" : "Convenience fee", value: "3€" },
  ];
  const total = fees.reduce((sum, f) => sum + parseInt(f.value), 0);

  useEffect(() => {
    if (revealed >= fees.length) return;
    const timer = setTimeout(() => setRevealed((p) => p + 1), 1200);
    return () => clearTimeout(timer);
  }, [revealed]);

  const handlePay = () => {
    if (revealed < fees.length) {
      setRevealed(fees.length);
    } else {
      setTotalRevealed((p) => p + 1);
    }
  };

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.concert} alt={tx(locale, "Concert crowd", "Concierto multitudinario")} />
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-2xl font-black">North Hall Live</p>
            <p className="text-sm text-muted">{tx(locale, "General admission", "Entrada general")}</p>
          </div>
          <Badge tone="warning">{tx(locale, "From 39€", "Desde 39€")}</Badge>
        </div>
        {fees.slice(0, revealed + 1).map((fee, i) => (
          <div key={i} className="animate-in flex justify-between border-b border-white/10 pb-2 text-sm" style={{ animationDuration: "300ms" }}>
            <span className={i === 0 ? "text-paper" : "text-muted"}>{fee.label}</span>
            <span className={i === 0 ? "font-bold" : "text-muted"}>{fee.value}</span>
          </div>
        ))}
        {revealed < fees.length - 1 && (
          <p className="animate-in text-xs text-muted/50">{locale === "es" ? "Calculando costes adicionales..." : "Calculating additional costs..."}</p>
        )}
        {revealed >= fees.length - 1 && (
          <div className="flex justify-between border-t border-white/10 pt-4 text-2xl font-black">
            <span>{tx(locale, "Total", "Total")}</span>
            <span className="text-accent">{total}€</span>
          </div>
        )}
        <Button full onClick={handlePay}>
          {revealed < fees.length ? tx(locale, "Continue to payment", "Continuar al pago") : tx(locale, "Pay now", "Pagar ahora")}
        </Button>
        {totalRevealed > 0 && (
          <p className="text-[10px] text-center text-muted/30">
            {locale === "es" ? `Total real con tasas: ${total + 2}€` : `Actual total with late fees: ${total + 2}€`}
          </p>
        )}
      </div>
    </div>
  );
}

export function ComparisonPreventionExample({ locale = "en" }: { locale?: Locale }) {
  const plans = [
    { name: locale === "es" ? "Inicial" : "Starter", price: "9€/mo", monthly: 9, unit: "mo", metric: locale === "es" ? "2 proyectos" : "2 projects", detail: locale === "es" ? "100 créditos por espacio" : "100 credits per workspace" },
    { name: locale === "es" ? "Crecimiento" : "Growth", price: "84€/yr", monthly: 7, unit: "yr", metric: locale === "es" ? "10 asientos" : "10 seats", detail: locale === "es" ? "1.200 créditos/año" : "1,200 credits/year" },
    { name: locale === "es" ? "Escala" : "Scale", price: "0.04€/task", monthly: 12, unit: "task", metric: locale === "es" ? "por uso" : "usage based", detail: locale === "es" ? "tarifa mínima mensual*" : "monthly minimum fee*" },
  ];
  const [normalize, setNormalize] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);

  const displayPrice = (plan: typeof plans[0]) => {
    if (!normalize) return plan.price;
    return `${plan.monthly}€/mo`;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setNormalize(!normalize)}
          className={`border px-3 py-1.5 text-xs font-semibold transition ${normalize ? "border-accent bg-accent text-ink" : "border-white/10 text-muted hover:border-accent/50"}`}
        >
          {normalize
            ? (locale === "es" ? "Ver precios originales" : "Show original prices")
            : (locale === "es" ? "Normalizar a €/mes" : "Normalize to €/mo")}
        </button>
        <span className="text-[10px] text-muted/30">
          {selected !== null ? plans[selected].name : tx(locale, "Click a plan", "Toca un plan")}
        </span>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {plans.map((plan, i) => (
          <div
            key={i}
            onClick={() => setSelected(i)}
            className={`cursor-pointer border p-5 transition-all ${
              selected === i ? "border-accent bg-accent/10 scale-[1.03]" : i === 1 && selected === null ? "border-accent/40 bg-accent/5" : "border-white/10 bg-[#101010]"
            } hover:scale-[1.02]`}
          >
            <p className="text-xl font-bold">{plan.name}</p>
            <p className={`mt-3 text-3xl font-black transition-all ${normalize ? "text-accent" : ""}`}>
              {displayPrice(plan)}
            </p>
            <p className="mt-3 text-sm font-semibold text-accent">{plan.metric}</p>
            <p className="mt-2 text-sm leading-6 text-muted">{plan.detail}</p>
            {normalize && (
              <div className="mt-3 border-t border-white/10 pt-3 text-[10px] text-muted/40">
                {plan.unit === "mo" && locale === "es" ? "Sin cambios" : ""}
                {plan.unit === "mo" && locale !== "es" ? "No change" : ""}
                {plan.unit === "yr" && (locale === "es" ? "84€/año = 7€/mes" : "84€/yr = 7€/mo")}
                {plan.unit === "task" && (locale === "es" ? "Estimado: 300 tareas/mes" : "Est.: 300 tasks/mo")}
              </div>
            )}
            {!normalize && (
              <p className="mt-4 text-[10px] italic text-muted/30">
                {locale === "es" ? "* No comparable directamente" : "* Not directly comparable"}
              </p>
            )}
          </div>
        ))}
      </div>
      {normalize && (
        <div className="border border-accent/20 bg-accent/5 p-3 text-center text-xs text-accent">
          {locale === "es"
            ? "Con precios normalizados: Growth es 7€/mes — más barato que Starter (9€/mes)"
            : "With normalized pricing: Growth is 7€/mo — cheaper than Starter (9€/mo)"}
        </div>
      )}
      <p className="text-center text-[10px] text-muted/30">
        {locale === "es" ? "Transparencia de precios™" : "Pricing Transparency™"}
      </p>
    </div>
  );
}

export function FakeDiscountExample({ locale = "en" }: { locale?: Locale }) {
  const [fakePrice, setFakePrice] = useState(299);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFakePrice((prev) => {
        const next = prev - Math.floor(Math.random() * 50) - 10;
        if (next <= 150) {
          setTimeout(() => setFakePrice(349), 300);
          return 299;
        }
        return next;
      });
      setPulse(true);
      setTimeout(() => setPulse(false), 300);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.course} alt={tx(locale, "Online course", "Curso online")} />
      <div className="space-y-4 p-5">
        <Badge tone="warning">{tx(locale, "Ends tonight", "Termina esta noche")}</Badge>
        <p className="text-2xl font-black">{tx(locale, "Advanced Product Psychology", "Psicología de Producto Avanzada")}</p>
        <div className="flex items-end gap-3">
          <span className="text-4xl font-black text-accent">59€</span>
          <span className={`pb-1 text-xl text-muted line-through transition-all ${pulse ? "text-red-400/60 scale-110" : ""}`}>{fakePrice}€</span>
          <span className="pb-1 text-sm font-bold text-accent">{tx(locale, "80% off", "80% descuento")}</span>
        </div>
        <p className="text-[10px] text-muted/30">
          {locale === "es" ? `Precio de referencia: ${fakePrice}€ (la cifra sube sola)` : `Reference price: ${fakePrice}€ (it fluctuates magically)`}
        </p>
        <Button full>{tx(locale, "Enroll now", "Inscribirme ahora")}</Button>
      </div>
    </div>
  );
}

export function AnchoredBundlingExample({ locale = "en" }: { locale?: Locale }) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const standaloneTotal = 2 * 18;

  return (
    <div className="grid gap-3 md:grid-cols-[1fr_1fr_1.25fr]">
      {[locale === "es" ? "Editor" : "Editor", locale === "es" ? "Planificador" : "Planner"].map((name, i) => (
        <div
          key={i}
          onMouseEnter={() => setHoveredItem(name)}
          onMouseLeave={() => setHoveredItem(null)}
          className={`relative border p-5 transition-all ${hoveredItem === name ? "border-accent/40" : "border-white/10 bg-[#101010]"}`}
        >
          <p className="text-xl font-bold">{name}</p>
          <p className="mt-5 text-4xl font-black">18€</p>
          <p className="mt-2 text-sm text-muted">{locale === "es" ? "Licencia individual" : "Individual license"}</p>
          <button className="mt-5 w-full border border-white/20 py-3 text-sm font-bold text-paper">{locale === "es" ? "Elegir" : "Choose"}</button>
          {hoveredItem === name && (
            <p className="absolute -right-2 -top-2 animate-in rounded bg-accent px-2 py-0.5 text-[10px] font-bold text-ink">
              {locale === "es" ? "O bundle 29€" : "Or bundle 29€"}
            </p>
          )}
        </div>
      ))}
      <div className="border border-accent bg-accent/10 p-5">
        <Badge tone="warning">{tx(locale, "Best value", "Mejor valor")}</Badge>
        <p className="mt-4 text-2xl font-black">{locale === "es" ? "Suite Completa" : "Complete Suite"}</p>
        <p className="mt-2 text-sm text-muted">{locale === "es" ? "Editor + Planificador + Analíticas" : "Editor + Planner + Analytics"}</p>
        <p className="mt-5 text-4xl font-black text-accent">29€</p>
        <p className="mt-2 text-xs uppercase tracking-[0.14em] text-accent">{locale === "es" ? "Ahorra 51%" : "Save 51%"}</p>
        <Button full className="mt-5">{locale === "es" ? "Elegir bundle" : "Choose bundle"}</Button>
        <p className="mt-3 text-[10px] text-accent/40">
          {locale === "es"
            ? `(vs. ${standaloneTotal}€ por separado — si necesitas ambos)`
            : `(vs. ${standaloneTotal}€ separately — if you need both)`}
        </p>
      </div>
    </div>
  );
}

export function BaitAndSwitchExample({ locale = "en" }: { locale?: Locale }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="grid gap-4 md:grid-cols-[1fr_0.9fr]">
      <div className="border border-white/10 bg-[#101010] p-5">
        <Badge tone="neutral">{locale === "es" ? "Recurso gratuito" : "Free resource"}</Badge>
        <p className="mt-4 text-3xl font-black">UX Audit Template</p>
        <p className="mt-3 text-sm leading-6 text-muted">
          {locale === "es" ? "Una checklist descargable." : "A downloadable checklist."}
        </p>
        {!clicked ? (
          <Button full className="mt-5" onClick={() => setClicked(true)}>
            {locale === "es" ? "Descargar plantilla" : "Download template"}
          </Button>
        ) : (
          <Button full className="mt-5" onClick={() => setClicked(false)}>
            {locale === "es" ? "¡Ja! Necesitas registrarte" : "Just kidding! You need to register"}
          </Button>
        )}
      </div>
      <div className={`border p-5 transition-all ${clicked ? "border-accent/40 bg-accent/10" : "border-white/10 bg-[#101010]"}`}>
        <p className={`text-xs uppercase tracking-[0.18em] ${clicked ? "text-accent" : "text-muted"}`}>
          {clicked ? (locale === "es" ? "Siguiente paso" : "Next step") : locale === "es" ? "Lo que realmente pasa" : "What actually happens"}
        </p>
        <p className="mt-4 text-2xl font-black">
          {clicked
            ? (locale === "es" ? "Crea una cuenta" : "Create an account")
            : (locale === "es" ? "Parecía fácil, ¿verdad?" : "Looked easy, right?")}
        </p>
        <p className="mt-3 text-sm text-muted">
          {clicked
            ? (locale === "es" ? "La plantilla está en el espacio de prueba." : "The template is inside the trial workspace.")
            : (locale === "es" ? "El botón de descarga abre un registro." : "The download button opens a registration.")}
        </p>
      </div>
    </div>
  );
}

export function DefaultBiasExample({ locale = "en" }: { locale?: Locale }) {
  const [checks, setChecks] = useState([true, true, true]);
  const [warning, setWarning] = useState(false);
  const items = [
    locale === "es" ? "Facturación anual" : "Annual billing",
    locale === "es" ? "Emails marketing" : "Marketing emails",
    locale === "es" ? "Compartir datos" : "Share analytics data",
  ];
  const toggle = (i: number) => {
    setChecks((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      if (!next[i]) setWarning(true);
      return next;
    });
  };
  return (
    <div className="border border-white/10 bg-[#101010] p-5">
      <p className="text-2xl font-black">{locale === "es" ? "Completar compra" : "Complete checkout"}</p>
      <div className="mt-5 space-y-3">
        {items.map((label, i) => (
          <div key={i} onClick={() => toggle(i)} className="flex cursor-pointer items-center gap-3 border border-white/10 bg-ink p-3 text-sm text-muted transition hover:border-accent/30">
            <span className={`grid h-5 w-5 shrink-0 place-items-center border text-xs font-black transition ${checks[i] ? "border-accent bg-accent text-ink" : "border-white/10"}`}>{checks[i] ? "✓" : ""}</span>
            <span>{label}</span>
          </div>
        ))}
        {warning && (
          <p className="animate-in text-xs text-red-400">{locale === "es" ? "Desmarcar puede afectar tu experiencia" : "Unchecking may affect your experience"}</p>
        )}
      </div>
      <Button full className="mt-5">{locale === "es" ? "Continuar" : "Continue"}</Button>
    </div>
  );
}

export function PreselectedOptionsExample({ locale = "en" }: { locale?: Locale }) {
  const [extras, setExtras] = useState([true, true, true]);
  const [total, setTotal] = useState(238);
  const items = [
    { label: locale === "es" ? "Seguro viaje +12€" : "Travel insurance +12€", price: 12 },
    { label: locale === "es" ? "Embarque +8€" : "Priority boarding +8€", price: 8 },
    { label: locale === "es" ? "Protección flexible +19€" : "Flexible ticket +19€", price: 19 },
  ];
  const toggle = (i: number) => {
    setExtras((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      setTimeout(() => {
        setExtras((p) => {
          const restored = [...p];
          restored[i] = true;
          return restored;
        });
      }, 800);
      return next;
    });
  };
  useEffect(() => {
    setTotal(199 + extras.filter(Boolean).reduce((s, e, i) => s + (e ? items[i].price : 0), 0));
  }, [extras]);
  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.travel} alt="" />
      <div className="space-y-3 p-5">
        {items.map((item, i) => (
          <div key={i} onClick={() => toggle(i)} className="flex cursor-pointer items-center gap-3 border border-white/10 bg-ink p-3 text-sm text-muted">
            <span className={`grid h-5 w-5 shrink-0 place-items-center border text-xs font-black transition ${extras[i] ? "border-accent bg-accent text-ink" : "border-white/10"}`}>{extras[i] ? "✓" : ""}</span>
            <span>{item.label}</span>
          </div>
        ))}
        <div className="flex justify-between border-t border-white/10 pt-4 text-xl font-black"><span>{locale === "es" ? "Total" : "Total"}</span><span>{total}€</span></div>
        <p className="text-[10px] text-muted/30">{locale === "es" ? "Las opciones se reactivan solas" : "Options re-enable themselves"}</p>
      </div>
    </div>
  );
}

export function SneakIntoBasketExample({ locale = "en" }: { locale?: Locale }) {
  const [items, setItems] = useState([
    { title: locale === "es" ? "Zapatillas running" : "Running shoes", price: "89€" },
  ]);
  useEffect(() => {
    const t1 = setTimeout(() => setItems((p) => [...p, { title: locale === "es" ? "Protección premium" : "Premium protection", price: "14€" }]), 2000);
    const t2 = setTimeout(() => setItems((p) => [...p, { title: locale === "es" ? "Compensación carbono" : "Carbon offset", price: "3€" }]), 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  const total = items.length === 1 ? 89 : items.length === 2 ? 103 : 106;
  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.sneakers} alt="" />
      <div className="space-y-3 p-5">
        {items.map((item, i) => (
          <div key={i} className="animate-in flex items-center justify-between gap-3 border border-white/10 bg-ink p-3" style={{ animationDuration: "400ms" }}>
            <div><p className="font-semibold">{item.title}</p>{i > 0 && <p className="mt-1 text-xs uppercase tracking-[0.14em] text-accent">{locale === "es" ? "Añadido para ti" : "Added for you"}</p>}</div>
            <p className="font-black">{item.price}</p>
          </div>
        ))}
        <div className="flex justify-between border-t border-white/10 pt-4 text-xl font-black"><span>{locale === "es" ? "Total" : "Total"}</span><span>{total}€</span></div>
        <Button full>{locale === "es" ? "Pagar" : "Checkout"}</Button>
        <p className="text-[10px] text-center text-muted/30">{locale === "es" ? "Los extras aparecen solos..." : "Extras appear by themselves..."}</p>
      </div>
    </div>
  );
}

export function FrequentlyBoughtTogetherExample({ locale = "en" }: { locale?: Locale }) {
  const products = [
    { name: locale === "es" ? "Cámara Mirrorless 24MP" : "Mirrorless Camera 24MP", price: "499€", main: true },
    { name: locale === "es" ? "Tarjeta SD 128GB" : "SD Card 128GB", price: "29€", main: false },
    { name: locale === "es" ? "Funda protectora" : "Protective Case", price: "39€", main: false },
    { name: locale === "es" ? "Kit de limpieza" : "Lens Cleaning Kit", price: "19€", main: false },
  ];
  const alwaysChecked = [true, true, true, false];
  const [checked, setChecked] = useState(alwaysChecked);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    checked.forEach((c, i) => {
      if (!c && alwaysChecked[i]) {
        const t = setTimeout(() => {
          setChecked((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, 1200);
        timers.push(t);
      }
    });
    return () => timers.forEach(clearTimeout);
  }, [checked]);

  const bundleTotal = checked.reduce((s, c, i) => s + (c ? parseInt(products[i].price) : 0), 0);
  const standaloneTotal = products.reduce((s, p) => s + parseInt(p.price), 0);
  const savings = standaloneTotal - bundleTotal;

  const toggle = (i: number) => {
    if (i === 0) return;
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
    setSaved(false);
  };

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.shopping} alt="" />
      <div className="space-y-4 p-5">
        <div className="border border-accent/30 bg-accent/5 p-4">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">
            {tx(locale, "Frequently bought together", "Comprados juntos con frecuencia")}
          </p>
          <div className="mt-3 space-y-2">
            {products.map((product, i) => (
              <div
                key={i}
                onClick={() => toggle(i)}
                className={`flex cursor-pointer items-center justify-between gap-3 border p-3 text-sm transition ${
                  i === 0
                    ? "border-accent/20 bg-accent/5 text-paper"
                    : checked[i]
                      ? "border-white/10 bg-ink text-paper"
                      : "border-white/5 bg-white/[0.02] text-muted/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  {i === 0 ? (
                    <span className="grid h-5 w-5 shrink-0 place-items-center border border-accent bg-accent text-xs font-black text-ink">✓</span>
                  ) : (
                    <span className={`grid h-5 w-5 shrink-0 place-items-center border text-xs font-black transition ${checked[i] ? "border-accent bg-accent text-ink" : "border-white/10"}`}>
                      {checked[i] ? "✓" : ""}
                    </span>
                  )}
                  <div>
                    <span className={i === 0 ? "font-bold" : ""}>{product.name}</span>
                    {i === 0 && <span className="ml-2 text-[10px] text-accent">{tx(locale, "Main item", "Principal")}</span>}
                  </div>
                </div>
                <span className="font-semibold">{product.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-muted">{tx(locale, "Bundle total", "Total en lote")}</p>
            <p className="text-2xl font-black text-accent">{bundleTotal}€</p>
            <p className="text-xs text-muted line-through">{standaloneTotal}€</p>
          </div>
          <div className="text-right">
            <Badge tone="warning">{tx(locale, "Save", "Ahorra")} {savings}€</Badge>
          </div>
        </div>

        <Button full onClick={() => setSaved(true)}>
          {tx(locale, "Add bundle to cart", "Añadir lote al carrito")}
        </Button>

        {saved && (
          <p className="animate-in text-center text-xs text-accent">
            {locale === "es"
              ? `¡Añadido! ${checked.filter(Boolean).length} artículo${checked.filter(Boolean).length > 1 ? "s" : ""} en el carrito`
              : `Added! ${checked.filter(Boolean).length} item${checked.filter(Boolean).length > 1 ? "s" : ""} in cart`}
          </p>
        )}

        {checked.filter(Boolean).length < 3 && (
          <p className="text-center text-[10px] text-muted/30">
            {locale === "es" ? "Los complementos se reactivan solos..." : "Add-ons re-enable themselves..."}
          </p>
        )}
      </div>
    </div>
  );
}
