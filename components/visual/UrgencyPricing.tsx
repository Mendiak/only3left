"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n";
import { tx, photos, Badge, Button, Rating, Photo, PriceLine, BasketRow } from "./Helpers";

export function FakeScarcityExample({ locale = "en" }: { locale?: Locale }) {
  const [roomsLeft, setRoomsLeft] = useState(3);
  const [viewers, setViewers] = useState(22);
  const [showSoldOut, setShowSoldOut] = useState(false);
  const names = ["Marta", "Jon", "Lucia", "Carlos", "Emma", "James", "Sofia", "Lei"];
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoomsLeft((prev) => {
        if (prev <= 1) {
          setShowSoldOut(true);
          setTimeout(() => {
            setShowSoldOut(false);
            setRoomsLeft(3);
          }, 1500);
          return 0;
        }
        return prev - 1;
      });
      setViewers((prev) => Math.max(5, prev + Math.floor(Math.random() * 7) - 3));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const toastTimer = setInterval(() => {
      if (Math.random() > 0.6) {
        const name = names[Math.floor(Math.random() * names.length)];
        setToast(name);
        setTimeout(() => setToast(null), 2500);
      }
    }, 4000);
    return () => clearInterval(toastTimer);
  }, []);

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
          {showSoldOut ? (
            <Badge tone="warning">{tx(locale, "Just sold out!", "¡Acaba de agotarse!")}</Badge>
          ) : (
            <Badge tone="warning">{tx(locale, "Only", "Solo")} {roomsLeft} {tx(locale, "left", "disponibles")}</Badge>
          )}
          <Badge tone="neutral">{viewers} {tx(locale, "viewing", "viendo")}</Badge>
        </div>
        {toast && (
          <div className="animate-in flex items-center gap-2 border border-white/10 bg-ink px-3 py-2 text-sm text-muted">
            <span className="grid size-6 place-items-center rounded-full bg-accent text-[10px] font-black text-ink">{toast.charAt(0)}</span>
            {toast} {tx(locale, "just booked this room", "acaba de reservar esta habitación")}
          </div>
        )}
        <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-4">
          <div>
            <p className="text-xs text-muted">{tx(locale, "Tonight", "Esta noche")}</p>
            <p className="text-2xl font-black">142€</p>
          </div>
          <Button>{tx(locale, "Reserve", "Reservar")}</Button>
        </div>
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
  const badges = [
    { text: locale === "es" ? "Elección popular" : "Popular choice", tone: "neutral" as const },
    { text: locale === "es" ? "Alta demanda" : "High demand", tone: "warning" as const },
    { text: locale === "es" ? "Solo queda 1" : "Only 1 left", tone: "warning" as const },
    { text: locale === "es" ? "El precio puede subir" : "Price may rise soon", tone: "warning" as const },
    { text: locale === "es" ? "3 personas lo ven" : "3 people viewing", tone: "neutral" as const },
  ];
  const [visibleCount, setVisibleCount] = useState(1);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= badges.length) {
          setCycle((c) => c + 1);
          return 1;
        }
        return prev + 1;
      });
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.hotel} alt={tx(locale, "Hotel suite", "Suite de hotel")} />
      <div className="space-y-4 p-5">
        <p className="text-2xl font-black">{tx(locale, "Suite with balcony", "Suite con balcón")}</p>
        <div className="flex min-h-[72px] flex-wrap gap-2">
          {badges.slice(0, visibleCount).map((badge, i) => (
            <div key={i} className="animate-in" style={{ animationDuration: "300ms" }}>
              <Badge tone={badge.tone}>{badge.text}</Badge>
            </div>
          ))}
        </div>
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
  const plans = [
    { name: locale === "es" ? "Básico" : "Basic", price: "5€", desc: locale === "es" ? "Proyectos limitados" : "Limited projects", slug: "basic" },
    { name: "Pro", price: "19€", desc: locale === "es" ? "Proyectos ilimitados" : "Unlimited projects", slug: "pro", badge: locale === "es" ? "Más popular" : "Most popular" },
    { name: locale === "es" ? "Ultra" : "Ultra", price: "199€", desc: locale === "es" ? "Todo lo de Pro + factura ceremonial" : "Everything in Pro + ceremonial invoice", slug: "ultra" },
  ];

  const decoyNote = (slug: string) => {
    if (slug === "basic" && selected === "basic") return locale === "es" ? "El 94% elige Pro" : "94% choose Pro";
    if (slug === "ultra") return locale === "es" ? "Hace que Pro parezca una ganga" : "Makes Pro look like a steal";
    return "";
  };

  return (
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
          <p className="mt-3 text-4xl font-black">{plan.price}</p>
          <p className="mt-3 text-sm leading-6 text-muted">{plan.desc}</p>
          {decoyNote(plan.slug) && (
            <p className="mt-2 animate-in text-[11px] italic text-accent/70">{decoyNote(plan.slug)}</p>
          )}
          <button className={`mt-5 w-full border py-3 text-sm font-bold transition ${
            plan.slug === "pro" ? "border-accent bg-accent text-ink" : "border-white/20 text-paper hover:border-accent/50"
          }`}>
            {locale === "es" ? `Elegir ${plan.name}` : `Choose ${plan.name}`}
          </button>
        </div>
      ))}
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
    { name: locale === "es" ? "Inicial" : "Starter", price: "9€/mo", metric: locale === "es" ? "2 proyectos" : "2 projects", detail: locale === "es" ? "100 créditos por espacio" : "100 credits per workspace" },
    { name: locale === "es" ? "Crecimiento" : "Growth", price: "84€/yr", metric: locale === "es" ? "10 asientos" : "10 seats", detail: locale === "es" ? "1.200 créditos/año" : "1,200 credits/year" },
    { name: locale === "es" ? "Escala" : "Scale", price: "0.04€/task", metric: locale === "es" ? "por uso" : "usage based", detail: locale === "es" ? "tarifa mínima mensual" : "monthly minimum fee" },
  ];

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {plans.map((plan, i) => (
        <div key={i} className={`border p-5 ${i === 1 ? "border-accent bg-accent/10" : "border-white/10 bg-[#101010]"}`}>
          <p className="text-xl font-bold">{plan.name}</p>
          <p className="mt-3 text-3xl font-black">{plan.price}</p>
          <p className="mt-3 text-sm font-semibold text-accent">{plan.metric}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{plan.detail}</p>
          <p className="mt-4 text-[10px] italic text-muted/30">
            {locale === "es" ? "* No comparable directamente" : "* Not directly comparable"}
          </p>
        </div>
      ))}
      <p className="col-span-full text-center text-[10px] text-muted/30">
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
