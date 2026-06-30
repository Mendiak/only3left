"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import type { Locale } from "@/lib/i18n";
import { tx, photos, feedPhotos, Badge, Button, Photo, PhoneShell } from "./Helpers";

export function ValidationLoopExample({ locale = "en" }: { locale?: Locale }) {
  const names = ["Ana", "Mark", "Lucia", "Carlos", "Emma", "James"];
  const [visible, setVisible] = useState(0);
  const [badge, setBadge] = useState(3);

  useEffect(() => {
    if (visible >= names.length) return;
    const delays = [800, 600, 1200, 400, 2000, 700];
    const timer = setTimeout(() => {
      setVisible((v) => v + 1);
      setBadge((b) => b + 1);
    }, delays[visible]);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <PhoneShell>
      <div className="relative p-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-lg font-black">{tx(locale, "Notifications", "Notificaciones")}</p>
          <span className="grid h-6 w-6 place-items-center rounded-full bg-red-500 text-xs font-black text-white">
            {badge}
          </span>
        </div>
        <div className="space-y-3">
          {names.slice(0, visible + 1).map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-3 border border-white/10 bg-ink p-3 transition-all duration-500"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sm font-black text-ink">
                {name.charAt(0)}
              </span>
              <div className="flex-1">
                <p className="text-sm">
                  <span className="font-semibold text-paper">{name}</span>{" "}
                  <span className="text-muted">{tx(locale, "liked your photo", "le gusta tu foto")}</span>
                </p>
                <p className="text-xs text-muted">
                  {i === visible
                    ? tx(locale, "just now", "ahora mismo")
                    : locale === "es"
                      ? `hace ${i + 1}m`
                      : `${i + 1}m ago`}
                </p>
              </div>
              <span className="text-lg text-red-400">♥</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted">{tx(locale, "Pull to refresh", "Desliza para actualizar")}</p>
      </div>
    </PhoneShell>
  );
}

export function ReactionPressureExample({ locale = "en" }: { locale?: Locale }) {
  const [likes, setLikes] = useState(142);
  const [liked, setLiked] = useState(false);
  const photo = photos.fitness;

  useEffect(() => {
    const timer = setInterval(() => {
      setLikes((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikes((prev) => prev + 1);
    }
  };

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <div className="relative h-48 w-full overflow-hidden bg-white/10">
        <Image src={photo} alt={tx(locale, "Emotional campaign image", "Imagen de campaña emocional")} fill sizes="50vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="space-y-4 p-4">
        <p className="text-sm leading-6 text-paper">
          {locale === "es" ? "1 like = 1 comida para un niño." : "1 like = 1 meal for a child in need."}{" "}
          <span className="text-muted">{tx(locale, "Show your support.", "Muestra tu apoyo.")}</span>
        </p>
        <div className="flex items-center justify-between">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 border px-4 py-2 text-sm font-semibold transition ${
              liked
                ? "border-red-400 bg-red-400/10 text-red-400"
                : "border-white/20 text-paper hover:border-red-400/50"
            }`}
          >
            <span className={`text-lg ${liked ? "animate-pulse" : ""}`}>
              {liked ? "♥" : "♡"}
            </span>
            {tx(locale, "Like", "Me gusta")}
          </button>
          <p className="text-sm text-muted">
            <span className="font-semibold text-accent">{likes.toLocaleString()}</span>{" "}
            {tx(locale, "likes", "Me gusta")}
          </p>
        </div>
        <p className="text-[11px] leading-5 text-muted">
          {locale === "es"
            ? "&ldquo;Dale like si crees que todo niño merece un futuro. Cada compartir planta un árbol.&rdquo;"
            : "&ldquo;Like if you believe every child deserves a future. Every share plants a tree.&rdquo;"}
        </p>
      </div>
    </div>
  );
}

export function HardToCloseExample({ locale = "en" }: { locale?: Locale }) {
  const [closed, setClosed] = useState(false);
  const [misses, setMisses] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = closeRef.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    const handleClick = (e: MouseEvent) => {
      if (closed) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;
      if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
        setClosed(true);
      } else {
        setMisses((p) => p + 1);
      }
    };

    parent.addEventListener("click", handleClick);
    return () => parent.removeEventListener("click", handleClick);
  }, [closed]);

  if (closed) {
    return (
      <div className="flex flex-col items-center justify-center border border-white/10 bg-[#101010] p-10">
        <p className="text-lg font-black">{tx(locale, "Closed!", "¡Cerrado!")}</p>
        <p className="mt-2 text-sm text-muted">
          {locale === "es"
            ? `Te ha costado ${misses + 1} clic${misses > 0 ? "s" : ""} acertar un objetivo de 4 píxeles.`
            : `It took you ${misses + 1} click${misses > 0 ? "s" : ""} to hit a 4px target.`}
        </p>
      </div>
    );
  }

  return (
    <div className="relative select-none border border-white/10 bg-[#101010]">
      <div className="bg-ink p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">{tx(locale, "Before you go", "Antes de irte")}</p>
        <p className="mt-3 text-2xl font-black">{tx(locale, "Get 20% off your first order", "Consigue un 20% en tu primer pedido")}</p>
        <p className="mt-2 text-sm leading-6 text-muted">{tx(locale, "Join 15,000 subscribers and receive exclusive access to deals, trends, and premium content.", "Únete a 15.000 suscriptores y recibe acceso exclusivo a ofertas, tendencias y contenido premium.")}</p>
        <div className="mt-5 space-y-3">
          <input className="w-full border border-white/10 bg-[#101010] px-3 py-3 text-sm text-paper outline-none" placeholder="email@ejemplo.com" readOnly />
          <button className="w-full bg-accent py-3 text-sm font-black text-ink transition hover:bg-paper">{tx(locale, "Subscribe", "Suscribirse")}</button>
        </div>
        <p className="mt-4 text-[11px] leading-5 text-muted">{tx(locale, "No spam. Unsubscribe anytime.", "Sin spam. Cancela cuando quieras.")}</p>
      </div>

      <div className="absolute right-0 top-0">
        <div
          className="relative"
          onMouseEnter={() => setShowHint(true)}
          onMouseLeave={() => setShowHint(false)}
        >
          <button
            ref={closeRef}
            className="relative z-10 flex h-4 w-4 cursor-crosshair items-center justify-center text-[9px] text-white/15"
          >
            ✕
          </button>
          {showHint && (
            <div className="absolute right-0 top-0 z-20 border border-dashed border-red-400/60 bg-red-400/5" style={{ width: "44px", height: "44px", transform: "translate(calc(-50% + 8px), calc(-50% + 8px))" }}>
              <div className="flex h-full items-center justify-center">
                <span className="text-[8px] uppercase tracking-[0.12em] text-red-400/60">44×44</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-2 right-2 flex items-center gap-2">
        {misses > 0 && (
          <p className="animate-in text-[10px] text-red-400/70" style={{ animationDuration: "200ms" }}>
            {misses} {locale === "es" ? (misses > 1 ? "fallos" : "fallo") : misses > 1 ? "misses" : "miss"}
          </p>
        )}
        <p
          className="cursor-pointer text-[10px] text-muted/40 underline underline-offset-2 hover:text-muted/70"
          onClick={() => setShowHint((p) => !p)}
        >
          {showHint ? tx(locale, "hide", "ocultar") : tx(locale, "show", "mostrar")} {tx(locale, "target", "objetivo")}
        </p>
      </div>
    </div>
  );
}

export function LiveActivityExample({ locale = "en" }: { locale?: Locale }) {
  const [viewers, setViewers] = useState(14);
  const [buyers, setBuyers] = useState(3);
  const [showFakeToast, setShowFakeToast] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(10, prev + delta);
      });
      const shouldBuy = Math.random() > 0.6;
      if (shouldBuy) {
        setBuyers((prev) => prev + 1);
        setShowFakeToast(true);
        setTimeout(() => setShowFakeToast(false), 2500);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const names = ["Ana", "Mark", "Lucia", "Carlos", "Emma"];
  const [toastName, setToastName] = useState("Ana");

  useEffect(() => {
    if (showFakeToast) {
      setToastName(names[Math.floor(Math.random() * names.length)]);
    }
  }, [showFakeToast]);

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <div className="relative h-44 w-full overflow-hidden bg-white/10">
        <Image src={photos.hotel} alt={tx(locale, "Hotel", "Hotel")} fill sizes="50vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="space-y-4 p-4">
        <div>
          <p className="text-lg font-bold">{tx(locale, "Grand Palace Hotel", "Gran Hotel Palace")}</p>
          <p className="text-sm text-muted">{tx(locale, "City center", "Centro ciudad")} · 4.2 ⭐ ({tx(locale, "312 reviews", "312 reseñas")})</p>
        </div>

        <div className="flex items-center gap-2 border border-accent/30 bg-accent/10 px-3 py-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-green-500" />
          </span>
          <span className="text-sm font-semibold text-accent">
            {viewers} {tx(locale, "people viewing this", "personas viendo esto")}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg text-muted line-through">€249</span>
            <span className="ml-2 text-2xl font-bold text-paper">€119</span>
          </div>
          <span className="rounded bg-red-500/20 px-2 py-1 text-xs font-semibold text-red-400">-52%</span>
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[12%] rounded-full bg-accent" />
        </div>
        <p className="text-xs text-muted">
          {buyers > 0
            ? `${buyers} ${tx(locale, "people booked in the last 24h", "personas reservaron en las últimas 24h")}`
            : tx(locale, "Only 3 rooms left", "Solo quedan 3 habitaciones")}
        </p>

        <button className="w-full bg-accent py-3 text-sm font-black text-ink transition hover:bg-paper">
          {tx(locale, "Book now", "Reservar ahora")}
        </button>

        {showFakeToast && (
          <div className="animate-in flex items-center gap-2 border border-white/10 bg-ink px-3 py-2">
            <span className="grid size-7 place-items-center rounded-full bg-accent text-xs font-black text-ink">
              {toastName.charAt(0)}
            </span>
            <p className="text-sm text-muted">
              <span className="font-semibold text-paper">{toastName}</span>{" "}
              {locale === "es" ? "acaba de reservar este hotel" : "just booked this hotel"}
            </p>
          </div>
        )}

        <div className="grid grid-cols-3 gap-1 text-center text-[10px] uppercase tracking-[0.16em] text-muted">
          <span className="border border-white/10 py-1.5">{tx(locale, "Social Proof", "Prueba social")}</span>
          <span className="border border-white/10 py-1.5">FOMO</span>
          <span className="border border-white/10 py-1.5">{tx(locale, "Urgency", "Urgencia")}</span>
        </div>
      </div>
    </div>
  );
}

export function NotificationAddictionExample({ locale = "en" }: { locale?: Locale }) {
  const appIcons = ["📧", "💬", "🛒", "🎮", "📰", "🏦", "🏋️", "☁️", "📝"];
  const appNames = locale === "es"
    ? ["Correo", "Chat", "Tienda", "Juego", "Noticias", "Banco", "Fit", "Nube", "Notas"]
    : ["Mail", "Chat", "Shop", "Game", "News", "Bank", "Fit", "Cloud", "Notes"];
  const msgs = locale === "es"
    ? ["Nueva oferta", "Mensaje recibido", "Alguien te escribió", "Actualización disponible", "Tu pedido fue enviado", "Tienes un nuevo seguidor", "Recordatorio: cita mañana", "Pago confirmado", "Actividad reciente", "Alerta de seguridad"]
    : ["New offer", "Message received", "Someone messaged you", "Update available", "Your order was shipped", "New follower", "Reminder: appointment tomorrow", "Payment confirmed", "Recent activity", "Security alert"];
  const [feed, setFeed] = useState<{ app: number; msg: string; time: string }[]>([]);
  const [totalCleared, setTotalCleared] = useState(0);
  const [badgeCounts, setBadgeCounts] = useState<number[]>([3, 2, 1, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBadgeCounts((prev) => {
        const next = [...prev];
        next[Math.floor(Math.random() * next.length)] += Math.floor(Math.random() * 3) + 1;
        return next;
      });
      if (feed.length === 0) {
        const app = Math.floor(Math.random() * appNames.length);
        setFeed((prev) => [...prev, { app, msg: msgs[Math.floor(Math.random() * msgs.length)], time: `${Math.floor(Math.random() * 10) + 1}m` }]);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [feed.length]);

  const openFeed = (appIdx: number) => {
    const count = badgeCounts[appIdx];
    const newNotifications: { app: number; msg: string; time: string }[] = [];
    for (let i = 0; i < Math.min(count, 5); i++) {
      newNotifications.push({
        app: appIdx,
        msg: msgs[Math.floor(Math.random() * msgs.length)],
        time: `${Math.floor(Math.random() * 10) + 1}m`,
      });
    }
    setFeed((prev) => [...newNotifications, ...prev]);
    setBadgeCounts((prev) => { const n = [...prev]; n[appIdx] = 0; return n; });
  };

  if (feed.length > 0) {
    return (
      <PhoneShell>
        <div className="flex items-center justify-between border-b border-white/10 bg-ink p-4">
          <button onClick={() => { setFeed([]); setTotalCleared((c) => c + feed.length); }} className="text-xs text-muted transition hover:text-paper">
            ← {locale === "es" ? "Volver" : "Back"}
          </button>
          <p className="text-xs text-muted">{feed.length} {locale === "es" ? "notifs" : "notifs"}</p>
          <button onClick={() => { setFeed([]); setTotalCleared((c) => c + feed.length); }} className="text-xs text-accent">{locale === "es" ? "Limpiar" : "Clear all"}</button>
        </div>
        <div className="max-h-[340px] space-y-0 overflow-y-auto">
          {feed.map((n, i) => (
            <div key={i} className="flex items-start gap-3 border-b border-white/5 px-4 py-3 transition hover:bg-accent/5">
              <span className="mt-0.5 text-lg">{appIcons[n.app]}</span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-paper">{appNames[n.app]}</p>
                <p className="mt-0.5 truncate text-xs text-muted">{n.msg}</p>
                <p className="mt-0.5 text-[9px] text-muted/20">{n.time}</p>
              </div>
            </div>
          ))}
          <div className="p-4 text-center">
            <p className="text-[9px] text-muted/20">{locale === "es" ? "Más notificaciones al bajar..." : "More notifications on scroll..."}</p>
          </div>
        </div>
        <div className="border-t border-white/10 bg-ink p-2 text-center text-[9px] text-muted/20">
          {locale === "es" ? `Eliminadas: ${totalCleared}` : `Cleared: ${totalCleared}`}
        </div>
      </PhoneShell>
    );
  }

  return (
    <PhoneShell>
      <div className="border-b border-white/10 bg-ink px-4 py-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-black">{locale === "es" ? "Notificaciones" : "Notifications"}</p>
          <p className="text-xs text-accent">{badgeCounts.reduce((a, b) => a + b, 0)} {locale === "es" ? "nuevas" : "new"}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-5">
        {appNames.map((name, i) => (
          <div
            key={i}
            onClick={() => badgeCounts[i] > 0 && openFeed(i)}
            className={`relative flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-2xl border transition ${
              badgeCounts[i] > 0 ? "border-accent/30 bg-accent/5 hover:bg-accent/10" : "border-white/10 bg-white/[0.06]"
            }`}
          >
            <span className="text-2xl">{appIcons[i]}</span>
            <span className="text-[10px] text-muted">{name}</span>
            {badgeCounts[i] > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-5 animate-in place-items-center rounded-full bg-red-500 px-1 text-[10px] font-black text-white">
                {badgeCounts[i] > 9 ? "9+" : badgeCounts[i]}
              </span>
            )}
          </div>
        ))}
      </div>
      <p className="pb-3 text-center text-[9px] text-muted/20">
        {locale === "es" ? "Toque una app con badge → feed infinito" : "Tap a badged app → infinite feed"}
      </p>
    </PhoneShell>
  );
}

export function NaggingExample({ locale = "en" }: { locale?: Locale }) {
  const [dismissals, setDismissals] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!visible && dismissals < 5) {
      const t = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(t);
    }
  }, [visible, dismissals]);
  if (!visible) return <div className="flex items-center justify-center border border-white/10 bg-[#101010] p-10 text-sm text-muted">{locale === "es" ? "Vuelve en 3 segundos..." : "Back in 3 seconds..."}</div>;
  return (
    <PhoneShell>
      <div className="space-y-5 p-5">
        <Badge tone="warning">{locale === "es" ? "Una cosa más" : "One more thing"}</Badge>
        <p className="text-2xl font-black">{locale === "es" ? "¿Notificaciones?" : "Enable notifications?"}</p>
        <p className="text-sm leading-6 text-muted">{locale === "es" ? "Ofertas, alertas, novedades..." : "Offers, alerts, updates..."}</p>
        <Button full>{locale === "es" ? "Permitir" : "Allow notifications"}</Button>
        <button onClick={() => { setVisible(false); setDismissals((p) => p + 1); }} className="w-full py-2 text-sm text-muted">{locale === "es" ? "Más tarde" : "Maybe later"}</button>
        <p className="text-center text-xs text-muted">{locale === "es" ? `Mostrado ${dismissals + 1} veces` : `Shown ${dismissals + 1} times`}</p>
      </div>
    </PhoneShell>
  );
}

export function StreakPressureExample({ locale = "en" }: { locale?: Locale }) {
  const [streak, setStreak] = useState(186);
  const [lost, setLost] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const handleSkip = () => { setShowWarning(true); };
  const confirmSkip = () => { setLost(true); };
  if (lost) return (<PhoneShell><div className="p-8 text-center"><p className="text-2xl font-black text-red-400">{locale === "es" ? "Racha perdida" : "Streak lost"}</p><p className="mt-3 text-sm text-muted">{locale === "es" ? "Vuelve a empezar." : "Start over."}</p></div></PhoneShell>);
  return (
    <PhoneShell>
      <div className="space-y-5 p-5 text-center">
        <Photo src={photos.fitness} alt="" small />
        <p className="text-5xl font-black text-accent">{streak}</p>
        <p className="text-xl font-bold">{locale === "es" ? "días de racha" : "day streak"}</p>
        {showWarning ? (
          <div className="animate-in space-y-3 border border-red-400/20 bg-red-400/5 p-4">
            <p className="text-sm font-bold text-red-400">{locale === "es" ? `¡${streak} días perdidos!` : `${streak} days lost!`}</p>
            <div className="flex gap-3">
              <Button onClick={confirmSkip} full>{locale === "es" ? "Perder racha" : "Lose streak"}</Button>
            </div>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted">{locale === "es" ? "Repara ayer por 2.99€." : "Repair yesterday for 2.99€."}</p>
            <Button full>{locale === "es" ? "Reparar racha" : "Repair streak"}</Button>
            <button onClick={handleSkip} className="text-xs text-muted transition hover:text-red-400">{locale === "es" ? "Saltar y perder racha" : "Skip and lose streak"}</button>
          </>
        )}
      </div>
    </PhoneShell>
  );
}

export function PaywallTeaseExample({ locale = "en" }: { locale?: Locale }) {
  const [stage, setStage] = useState<"reading" | "blocked" | "preview" | "reblocked">("reading");
  const [countdown, setCountdown] = useState(30);
  const [previewClicks, setPreviewClicks] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const handleScroll = () => {
      if (el.scrollTop > 60 && stage === "reading") setStage("blocked");
    };
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, [stage]);

  useEffect(() => {
    if (stage !== "blocked" && stage !== "reblocked") return;
    if (countdown <= 0) return;
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [stage, countdown]);

  const handlePreview = () => {
    if (previewClicks >= 3) {
      setStage("reblocked");
      setCountdown(30);
      return;
    }
    setStage("preview");
    setPreviewClicks((c) => c + 1);
    setTimeout(() => {
      setStage("blocked");
      setCountdown(30);
    }, 2000);
  };

  return (
    <div className="overflow-hidden border border-white/10 bg-[#101010]">
      <Photo src={photos.article} alt="" />
      <div ref={contentRef} className="relative max-h-[300px] overflow-y-auto">
        <div className="p-5 space-y-4">
          <Badge tone="neutral">{locale === "es" ? "Análisis" : "Analysis"}</Badge>
          <p className="text-3xl font-black">{locale === "es" ? "Mejores herramientas privacidad" : "Best privacy tools ranked"}</p>
          <p className="text-sm leading-6 text-muted">
            {locale === "es"
              ? "Probamos doce productos. El ganador nos sorprendió por su relación calidad-precio..."
              : "We tested twelve products. The winner surprised us with value for money..."}
          </p>
          <p className="text-sm leading-6 text-muted">
            {locale === "es"
              ? "Analizamos seguridad, usabilidad, velocidad y precio durante tres meses."
              : "We analyzed security, usability, speed, and price over three months."}
          </p>
        </div>

        {(stage === "blocked" || stage === "reblocked") && (
          <div className="sticky bottom-0 left-0 right-0 bg-gradient-to-t from-[#101010] via-[#101010]/95 to-transparent p-4 pt-12 space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs text-muted/40">
              <span>⏱</span>
              <span>{locale === "es" ? "Acceso gratuito en" : "Free access in"} {countdown}s</span>
            </div>
            <Button full onClick={handlePreview}>
              {previewClicks >= 3
                ? (locale === "es" ? "Suscríbete para leer más" : "Subscribe to read more")
                : (locale === "es" ? `Vista previa (${3 - previewClicks} restantes)` : `Preview (${3 - previewClicks} left)`)}
            </Button>
            {previewClicks < 3 && (
              <p className="text-center text-[9px] text-muted/20">
                {locale === "es" ? "O espera a que termine el contador (se reinicia)" : "Or wait for the counter (it resets)"}
              </p>
            )}
          </div>
        )}

        {stage === "preview" && (
          <div className="animate-in border-t border-accent/20 bg-accent/5 p-5 space-y-3">
            <p className="text-xs text-accent font-black uppercase tracking-widest">
              {locale === "es" ? "Vista previa" : "Preview"}
            </p>
            <p className="text-sm leading-6 text-muted">
              {locale === "es"
                ? "El producto número uno cuesta 3.99€/mes y ofrece cifrado de extremo a extremo..."
                : "The number one product costs $3.99/mo and offers end-to-end encryption..."}
            </p>
            <p className="text-[10px] text-muted/20">
              {locale === "es"
                ? `Vista previa ${previewClicks}/3 — se cerrará en 2 segundos`
                : `Preview ${previewClicks}/3 — closing in 2 seconds`}
            </p>
          </div>
        )}

        {stage === "reblocked" && (
          <div className="border-t border-red-500/20 bg-red-500/5 p-3 text-center">
            <p className="text-xs text-red-400/70">
              {locale === "es"
                ? "Vistas previas agotadas. Pero el contador se ha reiniciado. 😉"
                : "Previews exhausted. But the counter has reset. 😉"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function InfiniteScrollFeed({ locale = "en" }: { locale?: Locale }) {
  const pageSize = 6;
  const [itemCount, setItemCount] = useState(pageSize);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const hasMore = itemCount < feedPhotos.length;

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          setLoading(true);
          setTimeout(() => {
            setItemCount((prev) => Math.min(prev + pageSize, feedPhotos.length));
            setLoading(false);
          }, 1000);
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [loading, hasMore]);

  const items = feedPhotos.slice(0, itemCount);

  return (
    <div className="max-h-[500px] overflow-y-auto">
      <div className="grid grid-cols-3 gap-0.5">
        {items.map((src, i) => (
          <div key={i} className="relative aspect-square overflow-hidden bg-white/10">
            <Image src={src} alt={tx(locale, `Post ${i + 1}`, `Publicación ${i + 1}`)} fill sizes="33vw" className="object-cover" />
          </div>
        ))}
        {loading &&
          Array.from({ length: 3 }).map((_, i) => (
            <div key={`skel-${i}`} className="aspect-square animate-pulse bg-white/10" />
          ))}
      </div>
      <div ref={sentinelRef} className="h-4" />
      {!hasMore && !loading && (
        <p className="py-4 text-center text-xs uppercase tracking-[0.22em] text-muted">
          {tx(locale, "You're all caught up", "No hay más contenido")}
        </p>
      )}
    </div>
  );
}
