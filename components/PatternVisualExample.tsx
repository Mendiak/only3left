"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { Pattern } from "@/lib/types";
import type { Locale } from "@/lib/i18n";

type PatternVisualExampleProps = {
  pattern: Pattern;
  locale?: Locale;
};

function tx(locale: Locale, en: string, es: string) {
  return locale === "es" ? es : en;
}

const photos = {
  hotel:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
  timer:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
  shopping:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
  lamp:
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=80",
  phone:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
  workspace:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
  travel:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
  app:
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80",
  concert:
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=1000&q=80",
  sneakers:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
  article:
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1000&q=80",
  course:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
  video:
    "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=80",
  fitness:
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=80",
  ai:
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80",
  beauty:
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80",
};

const feedPhotos = [
  photos.shopping, photos.workspace, photos.travel, photos.phone,
  photos.sneakers, photos.concert, photos.hotel, photos.timer,
  photos.lamp, photos.app, photos.article, photos.course,
  photos.video, photos.fitness, photos.ai, photos.beauty,
  "https://images.unsplash.com/photo-1549388604-817d15aa0110?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
];

const visualExamples: Record<string, (locale: Locale) => ReactNode> = {
  "fake-scarcity": (locale) => (
    <SpecimenFrame title={tx(locale, "Hotel booking result", "Resultado de reserva de hotel")}>
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
            <Badge tone="warning">{tx(locale, "Only 3 rooms left", "Solo quedan 3 habitaciones")}</Badge>
            <Badge tone="neutral">{tx(locale, "22 people viewed today", "22 personas lo vieron hoy")}</Badge>
          </div>
          <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-4">
            <div>
              <p className="text-xs text-muted">{tx(locale, "Tonight", "Esta noche")}</p>
              <p className="text-2xl font-black">142€</p>
            </div>
            <Button>{tx(locale, "Reserve", "Reservar")}</Button>
          </div>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "countdown-reset": (locale) => (
    <SpecimenFrame title={tx(locale, "Flash sale checkout", "Compra flash")}>
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.timer} alt={tx(locale, "Vacation landscape", "Paisaje de vacaciones")} />
        <div className="space-y-4 p-4">
          <div className="flex items-center justify-between">
            <Badge tone="warning">{tx(locale, "Private deal", "Oferta privada")}</Badge>
            <p className="text-xs text-muted">{tx(locale, "Session offer", "Oferta de sesión")}</p>
          </div>
          <p className="text-2xl font-black">{tx(locale, "Mediterranean weekend", "Fin de semana mediterráneo")}</p>
          <div className="grid grid-cols-[1fr_auto] items-center gap-3 border border-accent/40 bg-accent/10 p-3">
            <span className="text-sm text-accent">{tx(locale, "Discount expires in", "El descuento expira en")}</span>
            <span className="font-mono text-3xl font-black text-accent">00:04</span>
          </div>
          <Button full>{tx(locale, "Claim discount", "Consigue el descuento")}</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  confirmshaming: (locale) => (
    <SpecimenFrame title={tx(locale, "Exit-intent discount modal", "Modal de descuento al salir")}>
      <div className="mx-auto max-w-md border border-white/10 bg-[#101010] p-5 text-center shadow-2xl shadow-black/40">
        <Badge tone="warning">{tx(locale, "Before you go", "Antes de irte")}</Badge>
        <p className="mt-4 text-3xl font-black">{tx(locale, "Get 15% off your first order", "Consigue un 15% en tu primer pedido")}</p>
        <p className="mt-3 text-sm leading-6 text-muted">{tx(locale, "Join 40,000 readers receiving weekly product advice.", "Únete a 40.000 lectores que reciben consejos semanales.")}</p>
        <div className="mt-5 space-y-3">
          <input className="w-full border border-white/10 bg-ink px-3 py-3 text-sm text-paper outline-none" placeholder="email@example.com" />
          <Button full>{tx(locale, "Yes, send my discount", "Sí, enviadme el descuento")}</Button>
          <button className="text-sm text-muted underline underline-offset-4">{tx(locale, "No thanks, I hate saving money", "No, gracias. Prefiero pagar más")}</button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "roach-motel": (locale) => (
    <SpecimenFrame title={tx(locale, "Subscription account area", "Área de suscripción")}>
      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="border border-white/10 bg-[#101010] p-4">
          {(locale === "es"
            ? ["Resumen", "Facturación", "Facturas", "Equipo", "Seguridad", "Soporte"]
            : ["Overview", "Billing", "Invoices", "Team", "Security", "Support"]
          ).map((item, index) => (
            <div key={item} className={`border-b border-white/10 py-3 text-sm ${index === 1 ? "text-accent" : "text-muted"}`}>
              {item}
            </div>
          ))}
        </aside>
        <div className="border border-white/10 bg-[#101010] p-5">
          <p className="text-2xl font-black">{tx(locale, "Premium Plan", "Plan Premium")}</p>
          <p className="mt-2 text-sm text-muted">{tx(locale, "Renews on July 29. Upgrade anytime.", "Se renueva el 29 de julio. Mejora cuando quieras.")}</p>
          <div className="mt-5 grid gap-3">
            <Button full>{tx(locale, "Upgrade instantly", "Mejorar ahora")}</Button>
            <button className="border border-white/20 py-3 font-semibold text-paper">{tx(locale, "Change payment method", "Cambiar método de pago")}</button>
            <button className="text-left text-xs text-muted">{tx(locale, "Need to cancel? Contact retention support after reviewing available plan options.", "¿Cancelar? Contacta con soporte de retención tras revisar las opciones disponibles.")}</button>
          </div>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "decoy-pricing": (locale) => (
    <SpecimenFrame title={tx(locale, "SaaS pricing table", "Tabla de precios SaaS")}>
      <div className="grid gap-3 md:grid-cols-3">
        <Plan name={tx(locale, "Basic", "Básico")} price="5€" description={tx(locale, "Limited projects, community support.", "Proyectos limitados, soporte comunitario.")} locale={locale} />
        <Plan name="Pro" price="19€" description={tx(locale, "Unlimited projects, exports, support.", "Proyectos ilimitados, exportaciones, soporte.")} badge={tx(locale, "Most popular", "Más popular")} featured locale={locale} />
        <Plan name={tx(locale, "Ultra", "Ultra")} price="199€" description={tx(locale, "Everything in Pro, plus a ceremonial invoice.", "Todo lo de Pro, más una factura ceremonial.")} locale={locale} />
      </div>
    </SpecimenFrame>
  ),
  "hidden-cancellation": (locale) => (
    <SpecimenFrame title={tx(locale, "Settings navigation", "Navegación de ajustes")}>
      <div className="border border-white/10 bg-[#101010] p-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xl font-bold">{tx(locale, "Account settings", "Ajustes de cuenta")}</p>
          <Badge tone="neutral">{tx(locale, "Active subscription", "Suscripción activa")}</Badge>
        </div>
        <div className="grid gap-2">
          {(locale === "es"
            ? ["Perfil", "Datos de facturación", "Uso del plan", "Facturas", "Preferencias", "Centro de ayuda"]
            : ["Profile", "Billing details", "Plan usage", "Invoices", "Notification preferences", "Help center"]
          ).map((item) => (
            <div key={item} className="flex items-center justify-between border border-white/10 bg-ink p-3">
              <span>{item}</span>
              <span className="text-muted">›</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted">{tx(locale, "Cancellation requests are handled through account assistance.", "Las solicitudes de cancelación se gestionan a través de asistencia de cuenta.")}</p>
      </div>
    </SpecimenFrame>
  ),
  "forced-continuity": (locale) => (
    <SpecimenFrame title={tx(locale, "Trial signup panel", "Panel de prueba gratuita")}>
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.workspace} alt={tx(locale, "Workspace desk", "Escritorio de trabajo")} />
        <div className="space-y-4 p-5">
          <Badge tone="warning">{tx(locale, "7 days free", "7 días gratis")}</Badge>
          <p className="text-3xl font-black">{tx(locale, "Start your Pro trial", "Prueba Pro gratis")}</p>
          <p className="text-sm leading-6 text-muted">{tx(locale, "0€ today. Annual plan begins automatically after trial unless cancelled.", "0€ hoy. El plan anual comienza automáticamente tras la prueba si no se cancela.")}</p>
          <div className="border border-white/10 bg-ink p-3 text-sm text-muted">{tx(locale, "Card required to verify your account.", "Tarjeta necesaria para verificar tu cuenta.")}</div>
          <Button full>{tx(locale, "Start free trial", "Iniciar prueba gratis")}</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "privacy-zuckering": (locale) => (
    <SpecimenFrame title={tx(locale, "Mobile onboarding permission", "Permiso de onboarding móvil")}>
      <PhoneShell>
        <Photo src={photos.app} alt={tx(locale, "Mobile app screen", "Pantalla de app móvil")} small />
        <div className="space-y-4 p-4">
          <p className="text-2xl font-black">{tx(locale, "Find people you know", "Encuentra a personas conocidas")}</p>
          <p className="text-sm leading-6 text-muted">{tx(locale, "Upload contacts to personalize your experience and connect faster.", "Sube contactos para personalizar tu experiencia y conectar más rápido.")}</p>
          <Button full>{tx(locale, "Continue with contacts", "Continuar con contactos")}</Button>
          <button className="w-full py-2 text-sm text-muted">{tx(locale, "Skip for now", "Saltar por ahora")}</button>
        </div>
      </PhoneShell>
    </SpecimenFrame>
  ),
  "social-proof-inflation": (locale) => (
    <SpecimenFrame title={tx(locale, "Product page trust signals", "Señales de confianza en producto")}>
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.lamp} alt={tx(locale, "Desk lamp", "Lámpara de escritorio")} />
        <div className="space-y-4 p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xl font-bold">Arc table lamp</p>
              <p className="text-sm text-muted">{tx(locale, "Warm light", "Luz cálida")} · {tx(locale, "Matte black", "Negro mate")}</p>
            </div>
            <Rating value="4.9" label={tx(locale, "2,341 reviews", "2.341 reseñas")} />
          </div>
          <Badge tone="warning">{tx(locale, "4,812 people bought this today", "4.812 personas compraron esto hoy")}</Badge>
          <Button full>{tx(locale, "Add to cart", "Añadir al carrito")}</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "visual-hierarchy-manipulation": (locale) => (
    <SpecimenFrame title={tx(locale, "Unequal consent controls", "Controles de consentimiento desiguales")}>
      <div className="mx-auto max-w-lg border border-white/10 bg-[#101010] p-5">
        <p className="text-xl font-bold">{tx(locale, "Personalize your experience", "Personaliza tu experiencia")}</p>
        <p className="mt-3 text-sm leading-6 text-muted">{tx(locale, "We use data to improve recommendations, ads, analytics, and product research.", "Usamos datos para mejorar recomendaciones, anuncios, análisis e investigación de producto.")}</p>
        <div className="mt-5 space-y-4">
          <Button full>{tx(locale, "Accept all", "Aceptar todo")}</Button>
          <button className="mx-auto block text-xs text-muted">{tx(locale, "Reject non-essential tracking", "Rechazar el rastreo no esencial")}</button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "cookie-labyrinth": (locale) => (
    <SpecimenFrame title={tx(locale, "Cookie consent banner", "Banner de cookies")}>
      <div className="border border-white/10 bg-[#101010] p-5">
        <p className="text-xl font-bold">{tx(locale, "We value your privacy", "Valoramos tu privacidad")}</p>
        <p className="mt-2 text-sm leading-6 text-muted">{tx(locale, "We and our partners store and access information for measurement, ads, content personalization, and product improvement.", "Nosotros y nuestros socios almacenamos y accedemos a información para medición, anuncios, personalización y mejora del producto.")}</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_1fr_1.4fr]">
          <button className="border border-white/20 py-3 text-sm font-semibold">{tx(locale, "Reject all", "Rechazar todo")}</button>
          <button className="border border-white/20 py-3 text-sm font-semibold">{tx(locale, "Manage options", "Gestionar opciones")}</button>
          <Button>{tx(locale, "Accept all partners", "Aceptar todos los socios")}</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "infinite-scroll": (locale) => (
    <SpecimenFrame title={tx(locale, "Instagram-like feed", "Feed estilo Instagram")}>
      <InfiniteScrollFeed locale={locale} />
    </SpecimenFrame>
  ),
  "notification-addiction": (locale) => (
    <SpecimenFrame title={tx(locale, "Mobile notification grid", "Cuadrícula de notificaciones")}>
      <PhoneShell>
        <div className="grid grid-cols-3 gap-4 p-5">
          {(locale === "es"
            ? ["Correo", "Chat", "Tienda", "Juego", "Noticias", "Banco", "Fit", "Nube", "Notas"]
            : ["Mail", "Chat", "Shop", "Game", "News", "Bank", "Fit", "Cloud", "Notes"]
          ).map((item, index) => (
            <div key={item} className="relative aspect-square rounded-2xl border border-white/10 bg-white/[0.06] p-2 text-xs text-muted">
              {index < 6 && <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-red-500 text-xs font-black text-white">{index + 1}</span>}
              <span className="absolute bottom-2 left-2">{item}</span>
            </div>
          ))}
        </div>
      </PhoneShell>
    </SpecimenFrame>
  ),
  "default-bias": (locale) => (
    <SpecimenFrame title={tx(locale, "Checkout defaults", "Opciones por defecto en checkout")}>
      <div className="border border-white/10 bg-[#101010] p-5">
        <p className="text-2xl font-black">{tx(locale, "Complete checkout", "Completar compra")}</p>
        <div className="mt-5 space-y-3">
          <CheckedRow label={tx(locale, "Annual billing selected", "Facturación anual seleccionada")} />
          <CheckedRow label={tx(locale, "Receive marketing emails", "Recibir correos promocionales")} />
          <CheckedRow label={tx(locale, "Share analytics data to improve service", "Compartir datos analíticos para mejorar el servicio")} />
        </div>
        <Button full className="mt-5">{tx(locale, "Continue", "Continuar")}</Button>
      </div>
    </SpecimenFrame>
  ),
  "preselected-options": (locale) => (
    <SpecimenFrame title={tx(locale, "Travel checkout extras", "Extras en reserva de viaje")}>
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.travel} alt={tx(locale, "Beach travel destination", "Destino de playa")} />
        <div className="space-y-3 p-5">
          <CheckedRow label={tx(locale, "Travel insurance +12€", "Seguro de viaje +12€")} />
          <CheckedRow label={tx(locale, "Priority boarding +8€", "Embarque prioritario +8€")} />
          <CheckedRow label={tx(locale, "Flexible ticket protection +19€", "Protección de billete flexible +19€")} />
          <div className="flex justify-between border-t border-white/10 pt-4 text-xl font-black">
            <span>{tx(locale, "Total", "Total")}</span>
            <span>238€</span>
          </div>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "drip-pricing": (locale) => (
    <SpecimenFrame title={tx(locale, "Ticket checkout with late fees", "Compra de entradas con tasas ocultas")}>
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.concert} alt={tx(locale, "Concert crowd", "Concierto multitudinario")} />
        <div className="space-y-4 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-2xl font-black">North Hall Live</p>
              <p className="text-sm text-muted">{tx(locale, "General admission ticket", "Entrada general")}</p>
            </div>
            <Badge tone="warning">{tx(locale, "From 39€", "Desde 39€")}</Badge>
          </div>
          <PriceLine label={tx(locale, "Ticket", "Entrada")} value="39€" />
          <PriceLine label={tx(locale, "Service fee", "Tasa de servicio")} value="8€" muted />
          <PriceLine label={tx(locale, "Processing fee", "Tasa de gestión")} value="5€" muted />
          <PriceLine label={tx(locale, "Mobile delivery", "Entrega móvil")} value="4€" muted />
          <div className="flex justify-between border-t border-white/10 pt-4 text-2xl font-black">
            <span>{tx(locale, "Total", "Total")}</span>
            <span>56€</span>
          </div>
          <Button full>{tx(locale, "Pay now", "Pagar ahora")}</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "sneak-into-basket": (locale) => (
    <SpecimenFrame title={tx(locale, "Cart with inserted add-on", "Carrito con extra añadido")}>
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.sneakers} alt={tx(locale, "Sneakers", "Zapatillas")} />
        <div className="space-y-3 p-5">
          <BasketRow title={tx(locale, "Running shoes", "Zapatillas de running")} price="89€" />
          <BasketRow title={tx(locale, "Premium protection plan", "Plan de protección premium")} price="14€" badge={tx(locale, "Added for you", "Añadido para ti")} />
          <BasketRow title={tx(locale, "Carbon offset contribution", "Contribución de compensación de carbono")} price="3€" badge={tx(locale, "Recommended", "Recomendado")} />
          <div className="flex justify-between border-t border-white/10 pt-4 text-xl font-black">
            <span>{tx(locale, "Total", "Total")}</span>
            <span>106€</span>
          </div>
          <Button full>{tx(locale, "Checkout", "Pagar")}</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "bait-and-switch": (locale) => (
    <SpecimenFrame title={tx(locale, "Download page switch", "Página de descarga con cambio")}>
      <div className="grid gap-4 md:grid-cols-[1fr_0.9fr]">
        <div className="border border-white/10 bg-[#101010] p-5">
          <Badge tone="neutral">{tx(locale, "Free resource", "Recurso gratuito")}</Badge>
          <p className="mt-4 text-3xl font-black">UX Audit Template</p>
          <p className="mt-3 text-sm leading-6 text-muted">{tx(locale, "A downloadable checklist for product teams.", "Una lista descargable para equipos de producto.")}</p>
          <Button full className="mt-5">{tx(locale, "Download template", "Descargar plantilla")}</Button>
        </div>
        <div className="border border-accent/40 bg-accent/10 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-accent">{tx(locale, "Next step", "Siguiente paso")}</p>
          <p className="mt-4 text-2xl font-black">{tx(locale, "Create an account to continue", "Crea una cuenta para continuar")}</p>
          <p className="mt-3 text-sm text-muted">{tx(locale, "The free template is available inside the trial workspace.", "La plantilla gratuita está disponible dentro del espacio de prueba.")}</p>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "disguised-ads": (locale) => (
    <SpecimenFrame title={tx(locale, "Search results with native ad", "Resultados con anuncio nativo")}>
      <div className="space-y-3 border border-white/10 bg-[#101010] p-4">
        <SearchResult title={tx(locale, "Best noise-cancelling headphones", "Mejores cascos con cancelación de ruido")} label={tx(locale, "Sponsored", "Patrocinado")} mutedLabel locale={locale} />
        <SearchResult title={tx(locale, "Independent headphone reviews 2026", "Reseñas independientes de cascos 2026")} locale={locale} />
        <SearchResult title={tx(locale, "Top-rated wireless headphones compared", "Cascos inalámbricos mejor valorados")} locale={locale} />
        <SearchResult title={tx(locale, "Headphone buying guide", "Guía de compra de cascos")} locale={locale} />
      </div>
    </SpecimenFrame>
  ),
  nagging: (locale) => (
    <SpecimenFrame title={tx(locale, "Repeated mobile prompt", "Notificación repetitiva")}>
      <PhoneShell>
        <div className="space-y-5 p-5">
          <Badge tone="warning">{tx(locale, "One more thing", "Una cosa más")}</Badge>
          <p className="text-2xl font-black">{tx(locale, "Enable notifications?", "¿Activar notificaciones?")}</p>
          <p className="text-sm leading-6 text-muted">{tx(locale, "Stay updated with reminders, offers, alerts, recommendations, and important updates.", "Mantente al día con recordatorios, ofertas, alertas, recomendaciones y avisos importantes.")}</p>
          <Button full>{tx(locale, "Allow notifications", "Permitir notificaciones")}</Button>
          <button className="w-full py-2 text-sm text-muted">{tx(locale, "Maybe later", "Quizá más tarde")}</button>
          <p className="text-center text-xs text-muted">{tx(locale, "Prompt shown 6 times this week", "Aviso mostrado 6 veces esta semana")}</p>
        </div>
      </PhoneShell>
    </SpecimenFrame>
  ),
  "trick-questions": (locale) => (
    <SpecimenFrame title={tx(locale, "Marketing consent form", "Formulario de consentimiento")}>
      <div className="border border-white/10 bg-[#101010] p-5">
        <p className="text-2xl font-black">{tx(locale, "Communication preferences", "Preferencias de comunicación")}</p>
        <div className="mt-5 space-y-3">
          <CheckedRow label={tx(locale, "Do not untick this box if you want to avoid missing member offers", "No desmarque esta casilla si no quiere perderse ofertas de socios")} />
          <CheckedRow label={tx(locale, "I do not wish to opt out of selected partner updates", "No deseo renunciar a comunicaciones de socios seleccionados")} />
          <CheckedRow label={tx(locale, "Keep me informed unless I have not declined", "Mantenerme informado a menos que no haya rechazado")} />
        </div>
        <Button full className="mt-5">{tx(locale, "Save preferences", "Guardar preferencias")}</Button>
      </div>
    </SpecimenFrame>
  ),
  misdirection: (locale) => (
    <SpecimenFrame title={tx(locale, "Promotion with buried terms", "Promoción con condiciones ocultas")}>
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.shopping} alt={tx(locale, "Shopping bag", "Bolsa de compras")} />
        <div className="p-5">
          <p className="text-5xl font-black text-accent">50% OFF</p>
          <p className="mt-2 text-xl font-bold">{tx(locale, "Today only on selected essentials", "Hoy solo en productos seleccionados")}</p>
          <Button className="mt-5">{tx(locale, "Shop the sale", "Comprar en oferta")}</Button>
          <p className="mt-5 text-[11px] leading-5 text-muted">
            {tx(locale, "Discount applies after membership activation. Membership renews monthly. Handling fee and selected exclusions apply.", "El descuento se aplica tras activar la membresía. La membresía se renueva mensualmente. Se aplican gastos de gestión y exclusiones.")}
          </p>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "comparison-prevention": (locale) => (
    <SpecimenFrame title={tx(locale, "Hard-to-compare plans", "Planes difíciles de comparar")}>
      <div className="grid gap-3 md:grid-cols-3">
        <MetricPlan name={tx(locale, "Starter", "Inicial")} price="9€/mo" metric={tx(locale, "2 projects", "2 proyectos")} detail={tx(locale, "100 credits per workspace", "100 créditos por espacio")} />
        <MetricPlan name={tx(locale, "Growth", "Crecimiento")} price="84€/yr" metric={tx(locale, "10 seats", "10 asientos")} detail={tx(locale, "1,200 credits billed annually", "1.200 créditos facturados al año")} featured />
        <MetricPlan name={tx(locale, "Scale", "Escala")} price="0.04€/task" metric={tx(locale, "usage based", "por uso")} detail={tx(locale, "minimum monthly platform fee applies", "se aplica tarifa mínima mensual")} />
      </div>
    </SpecimenFrame>
  ),
  "fake-discount": (locale) => (
    <SpecimenFrame title={tx(locale, "Inflated reference price", "Precio de referencia inflado")}>
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.course} alt={tx(locale, "Online course", "Curso online")} />
        <div className="space-y-4 p-5">
          <Badge tone="warning">{tx(locale, "Ends tonight", "Termina esta noche")}</Badge>
          <p className="text-2xl font-black">{tx(locale, "Advanced Product Psychology", "Psicología de Producto Avanzada")}</p>
          <div className="flex items-end gap-3">
            <span className="text-4xl font-black text-accent">59€</span>
            <span className="pb-1 text-xl text-muted line-through">299€</span>
            <span className="pb-1 text-sm font-bold text-accent">{tx(locale, "80% off", "80% descuento")}</span>
          </div>
          <Button full>{tx(locale, "Enroll now", "Inscribirme ahora")}</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "fake-activity": (locale) => (
    <SpecimenFrame title={tx(locale, "Live purchase notifications", "Notificaciones de compras en vivo")}>
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.hotel} alt={tx(locale, "Hotel lobby", "Vestíbulo de hotel")} />
        <div className="space-y-3 p-5">
          <p className="text-2xl font-black">{tx(locale, "City weekend package", "Paquete de fin de semana")}</p>
          <ActivityToast name={tx(locale, "Marta from Lisbon", "Marta de Lisboa")} action={tx(locale, "booked this 2 minutes ago", "reservó esto hace 2 minutos")} />
          <ActivityToast name={tx(locale, "Jon from Bristol", "Jon de Bristol")} action={tx(locale, "is viewing this offer", "está viendo esta oferta")} />
          <ActivityToast name={tx(locale, "17 people", "17 personas")} action={tx(locale, "are checking dates now", "están consultando fechas ahora")} />
          <Button full>{tx(locale, "Reserve package", "Reservar paquete")}</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "friend-spam": (locale) => (
    <SpecimenFrame title={tx(locale, "Contact import invitation", "Invitación de importación de contactos")}>
      <PhoneShell>
        <div className="space-y-4 p-5">
          <p className="text-2xl font-black">{tx(locale, "Invite your contacts", "Invita a tus contactos")}</p>
          <p className="text-sm leading-6 text-muted">{tx(locale, "We found 284 people who may want to join your workspace.", "Encontramos 284 personas que querrían unirse a tu espacio.")}</p>
          {["Ana", "Mark", "Lucia"].map((name) => (
            <CheckedRow key={name} label={`${name} ${tx(locale, "selected for invitation", "seleccionado para invitación")}`} />
          ))}
          <Button full>{tx(locale, "Send invites", "Enviar invitaciones")}</Button>
          <button className="w-full text-xs text-muted">{tx(locale, "Review selected contacts", "Revisar contactos seleccionados")}</button>
        </div>
      </PhoneShell>
    </SpecimenFrame>
  ),
  "permission-priming": (locale) => (
    <SpecimenFrame title={tx(locale, "Pre-permission prompt", "Aviso previo al permiso")}>
      <PhoneShell>
        <div className="space-y-5 p-5 text-center">
          <Badge tone="warning">{tx(locale, "Recommended", "Recomendado")}</Badge>
          <p className="text-2xl font-black">{tx(locale, "Allow location to protect your account", "Permite la ubicación para proteger tu cuenta")}</p>
          <p className="text-sm leading-6 text-muted">{tx(locale, "People who enable location get faster alerts and a safer community experience.", "Quienes activan la ubicación reciben alertas más rápidas y una experiencia más segura.")}</p>
          <Button full>{tx(locale, "Continue", "Continuar")}</Button>
          <button className="text-sm text-muted">{tx(locale, "Not now", "Ahora no")}</button>
        </div>
      </PhoneShell>
    </SpecimenFrame>
  ),
  "forced-registration": (locale) => (
    <SpecimenFrame title={tx(locale, "Guest checkout blocked", "Checkout de invitado bloqueado")}>
      <div className="grid gap-4 md:grid-cols-[1fr_0.9fr]">
        <div className="border border-white/10 bg-[#101010] p-5">
          <p className="text-2xl font-black">{tx(locale, "Your basket", "Tu cesta")}</p>
          <BasketRow title={tx(locale, "Desk organizer", "Organizador de escritorio")} price="24€" />
          <BasketRow title={tx(locale, "Notebook set", "Set de libretas")} price="12€" />
          <div className="mt-4 flex justify-between border-t border-white/10 pt-4 font-black">
            <span>{tx(locale, "Total", "Total")}</span>
            <span>36€</span>
          </div>
        </div>
        <div className="border border-accent/40 bg-accent/10 p-5">
          <p className="text-2xl font-black">{tx(locale, "Create an account to continue", "Crea una cuenta para continuar")}</p>
          <p className="mt-3 text-sm leading-6 text-muted">{tx(locale, "Checkout, tracking, support, and receipts are available after registration.", "El pago, seguimiento, soporte y recibos están disponibles tras el registro.")}</p>
          <Button full className="mt-5">{tx(locale, "Create account", "Crear cuenta")}</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "autoplay-trap": (locale) => (
    <SpecimenFrame title={tx(locale, "Video autoplay queue", "Cola de reproducción automática")}>
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.video} alt={tx(locale, "Video player", "Reproductor de vídeo")} />
        <div className="space-y-4 p-5">
          <div className="flex items-center justify-between">
            <p className="text-xl font-black">{tx(locale, "Episode complete", "Episodio completado")}</p>
            <Badge tone="warning">{tx(locale, "Next in 5", "Siguiente en 5")}</Badge>
          </div>
          <div className="h-2 overflow-hidden bg-white/10">
            <div className="h-full w-4/5 bg-accent" />
          </div>
          <Button full>{tx(locale, "Keep watching", "Seguir viendo")}</Button>
          <button className="w-full text-sm text-muted">{tx(locale, "Cancel autoplay", "Cancelar autoplay")}</button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "streak-pressure": (locale) => (
    <SpecimenFrame title={tx(locale, "Habit streak screen", "Pantalla de racha")}>
      <PhoneShell>
        <div className="space-y-5 p-5 text-center">
          <Photo src={photos.fitness} alt={tx(locale, "Fitness training", "Entrenamiento")} small />
          <p className="text-5xl font-black text-accent">186</p>
          <p className="text-xl font-bold">{tx(locale, "day streak", "días de racha")}</p>
          <p className="text-sm text-muted">{tx(locale, "Do not lose your progress. Repair yesterday for 2.99€.", "No pierdas tu progreso. Recupera ayer por 2.99€.")}</p>
          <Button full>{tx(locale, "Repair streak", "Reparar racha")}</Button>
          <button className="text-xs text-muted">{tx(locale, "Skip and lose streak", "Saltar y perder racha")}</button>
        </div>
      </PhoneShell>
    </SpecimenFrame>
  ),
  "paywall-tease": (locale) => (
    <SpecimenFrame title={tx(locale, "Article paywall tease", "Cebo de muro de pago")}>
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.article} alt={tx(locale, "Newspaper article", "Artículo de periódico")} />
        <div className="relative p-5">
          <Badge tone="neutral">{tx(locale, "Analysis", "Análisis")}</Badge>
          <p className="mt-4 text-3xl font-black">{tx(locale, "The best privacy tools ranked", "Las mejores herramientas de privacidad")}</p>
          <p className="mt-3 text-sm leading-6 text-muted">
            {tx(locale, "We tested twelve products across security, usability, speed, and price. The clear winner surprised our reviewers after...", "Probamos doce productos en seguridad, usabilidad, velocidad y precio. El ganador nos sorprendió...")}
          </p>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101010] via-[#101010]/95 to-transparent p-5 pt-20">
            <Button full>{tx(locale, "Subscribe to reveal the winner", "Suscríbete para descubrir el ganador")}</Button>
          </div>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "anchored-bundling": (locale) => (
    <SpecimenFrame title={tx(locale, "Bundle pricing anchor", "Anclaje de precio en bundle")}>
      <div className="grid gap-3 md:grid-cols-[1fr_1fr_1.25fr]">
        <MiniProduct name={tx(locale, "Editor", "Editor")} price="18€" locale={locale} />
        <MiniProduct name={tx(locale, "Planner", "Planificador")} price="18€" locale={locale} />
        <div className="border border-accent bg-accent/10 p-5">
          <Badge tone="warning">{tx(locale, "Best value", "Mejor valor")}</Badge>
          <p className="mt-4 text-2xl font-black">{tx(locale, "Complete Suite", "Suite Completa")}</p>
          <p className="mt-2 text-sm text-muted">{tx(locale, "Editor, Planner, Analytics, Templates", "Editor, Planificador, Analíticas, Plantillas")}</p>
          <p className="mt-5 text-4xl font-black text-accent">29€</p>
          <p className="mt-2 text-xs uppercase tracking-[0.14em] text-accent">{tx(locale, "Save 51%", "Ahorra 51%")}</p>
          <Button full className="mt-5">{tx(locale, "Choose bundle", "Elegir bundle")}</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "review-gating": (locale) => (
    <SpecimenFrame title={tx(locale, "Filtered review flow", "Flujo de reseñas filtrado")}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="border border-white/10 bg-[#101010] p-5">
          <p className="text-xl font-black">{tx(locale, "How was your visit?", "¿Cómo fue tu visita?")}</p>
          <div className="mt-4 flex gap-1 text-3xl text-accent">★★★★★</div>
          <Button full className="mt-5">{tx(locale, "Post on public reviews", "Publicar en reseñas públicas")}</Button>
        </div>
        <div className="border border-white/10 bg-[#101010] p-5">
          <p className="text-xl font-black">{tx(locale, "Something wrong?", "¿Algo fue mal?")}</p>
          <div className="mt-4 flex gap-1 text-3xl text-muted">★★☆☆☆</div>
          <button className="mt-5 w-full border border-white/20 py-3 text-sm font-semibold text-paper">{tx(locale, "Send private feedback", "Enviar comentario privado")}</button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "loyalty-lock-in": (locale) => (
    <SpecimenFrame title={tx(locale, "Rewards balance", "Saldo de recompensas")}>
      <PhoneShell>
        <div className="space-y-5 p-5 text-center">
          <p className="text-sm uppercase tracking-[0.18em] text-muted">{tx(locale, "Reward balance", "Saldo de puntos")}</p>
          <p className="text-6xl font-black text-accent">940</p>
          <p className="text-sm text-muted">{tx(locale, "Only 60 points from a 10€ voucher.", "A solo 60 puntos de un vale de 10€.")}</p>
          <div className="h-3 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[94%] bg-accent" />
          </div>
          <Button full>{tx(locale, "Order again to unlock", "Pide de nuevo para desbloquear")}</Button>
          <p className="text-xs text-muted">{tx(locale, "Points expire in 5 days.", "Los puntos caducan en 5 días.")}</p>
        </div>
      </PhoneShell>
    </SpecimenFrame>
  ),
  "scarcity-ladder": (locale) => (
    <SpecimenFrame title={tx(locale, "Stacked pressure badges", "Insignias de presión apiladas")}>
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.hotel} alt={tx(locale, "Hotel suite", "Suite de hotel")} />
        <div className="space-y-4 p-5">
          <p className="text-2xl font-black">{tx(locale, "Suite with balcony", "Suite con balcón")}</p>
          <div className="flex flex-wrap gap-2">
            <Badge tone="neutral">{tx(locale, "Popular choice", "Elección popular")}</Badge>
            <Badge tone="warning">{tx(locale, "High demand", "Alta demanda")}</Badge>
            <Badge tone="warning">{tx(locale, "Only 1 left", "Solo queda 1")}</Badge>
            <Badge tone="warning">{tx(locale, "Price may rise soon", "El precio puede subir pronto")}</Badge>
          </div>
          <Button full>{tx(locale, "Book now", "Reservar ahora")}</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "ai-authority-washing": (locale) => (
    <SpecimenFrame title={tx(locale, "AI-recommended upsell", "Upsell recomendado por IA")}>
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.ai} alt={tx(locale, "Abstract AI interface", "Interfaz de IA abstracta")} />
        <div className="space-y-4 p-5">
          <Badge tone="warning">{tx(locale, "AI recommended", "Recomendado por IA")}</Badge>
          <p className="text-2xl font-black">{tx(locale, "Pro Intelligence Plan", "Plan Pro Intelligence")}</p>
          <p className="text-sm leading-6 text-muted">{tx(locale, "Our model predicts this plan best matches your growth profile.", "Nuestro modelo predice que este plan se ajusta a tu perfil de crecimiento.")}</p>
          <div className="border border-accent/40 bg-accent/10 p-3 text-sm text-accent">{tx(locale, "Fit score:", "Puntuación:")} 96%</div>
          <Button full>{tx(locale, "Accept recommendation", "Aceptar recomendación")}</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
  "negative-option-billing": (locale) => (
    <SpecimenFrame title={tx(locale, "Renewal by default", "Renovación automática")}>
      <div className="border border-white/10 bg-[#101010] p-5">
        <p className="text-2xl font-black">{tx(locale, "Membership renewal", "Renovación de membresía")}</p>
        <p className="mt-3 text-sm leading-6 text-muted">{tx(locale, "Your annual plan renews automatically on July 29 unless cancelled at least 72 hours before renewal.", "Tu plan anual se renueva automáticamente el 29 de julio a menos que lo canceles 72 horas antes.")}</p>
        <div className="mt-5 space-y-3">
          <CheckedRow label={tx(locale, "Keep membership active", "Mantener membresía activa")} />
          <PriceLine label={tx(locale, "Next annual charge", "Próximo cargo anual")} value="149€" />
          <PriceLine label={tx(locale, "Cancellation window", "Plazo de cancelación")} value={tx(locale, "Closes soon", "Cierra pronto")} muted />
        </div>
        <Button full className="mt-5">{tx(locale, "Confirm settings", "Confirmar ajustes")}</Button>
      </div>
    </SpecimenFrame>
  ),
  "survey-to-sales-funnel": (locale) => (
    <SpecimenFrame title={tx(locale, "Quiz result sales funnel", "Embudo de venta por cuestionario")}>
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <Photo src={photos.beauty} alt={tx(locale, "Cosmetic products", "Productos cosméticos")} />
        <div className="space-y-4 p-5">
          <Badge tone="neutral">{tx(locale, "Personalized result", "Resultado personalizado")}</Badge>
          <p className="text-2xl font-black">{tx(locale, "Your skin profile: Dehydrated + stressed", "Tu perfil: Piel deshidratada y estresada")}</p>
          <p className="text-sm leading-6 text-muted">{tx(locale, "Based on 9 answers, we recommend the complete recovery bundle.", "Basado en 9 respuestas, recomendamos el pack recuperación completa.")}</p>
          <div className="border border-accent/40 bg-accent/10 p-3">
            <p className="font-black text-accent">{tx(locale, "Recommended bundle:", "Pack recomendado:")} 89€</p>
            <p className="text-sm text-muted">{tx(locale, "Cleanser, serum, cream, mask", "Limpiador, sérum, crema, mascarilla")}</p>
          </div>
          <Button full>{tx(locale, "Start recovery plan", "Iniciar plan de recuperación")}</Button>
        </div>
      </div>
    </SpecimenFrame>
  ),
    "visual-obstruction": (locale) => (
    <SpecimenFrame title={tx(locale, "Obstructed mobile page", "Página móvil obstruida")}>
      <PhoneShell>
        <div className="relative min-h-[430px] p-5">
          <p className="text-2xl font-black">{tx(locale, "Cancel subscription", "Cancelar suscripción")}</p>
          <p className="mt-3 text-sm leading-6 text-muted">{tx(locale, "Review your plan and choose how you want to proceed.", "Revisa tu plan y elige cómo proceder.")}</p>
          <button className="mt-40 text-sm text-muted underline">{tx(locale, "Continue to cancellation", "Continuar a cancelación")}</button>
          <div className="absolute inset-x-0 bottom-0 border-t border-accent/40 bg-accent p-4 text-ink">
            <p className="font-black">{tx(locale, "Install the app for faster support", "Instala la app para soporte más rápido")}</p>
            <p className="mt-1 text-sm">{tx(locale, "Get plan help, offers, and priority chat.", "Obtén ayuda, ofertas y chat prioritario.")}</p>
            <button className="mt-3 w-full bg-ink py-2 text-sm font-black text-paper">{tx(locale, "Open app", "Abrir app")}</button>
          </div>
        </div>
      </PhoneShell>
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

function SpecimenFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border border-white/10 bg-surface p-4">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <p className="text-xs uppercase tracking-[0.22em] text-accent">{title}</p>
        <p className="text-xs text-muted">visual specimen</p>
      </div>
      {children}
    </div>
  );
}

function Photo({ src, alt, small = false }: { src: string; alt: string; small?: boolean }) {
  return (
    <div className={`relative w-full overflow-hidden bg-white/10 ${small ? "h-32" : "h-48"}`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
    </div>
  );
}

function Badge({ children, tone }: { children: ReactNode; tone: "warning" | "neutral" }) {
  const className = tone === "warning" ? "border-accent/50 bg-accent/15 text-accent" : "border-white/10 bg-white/[0.04] text-muted";

  return <span className={`inline-flex border px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.14em] ${className}`}>{children}</span>;
}

function Button({ children, full = false, className = "" }: { children: ReactNode; full?: boolean; className?: string }) {
  return (
    <button className={`bg-accent px-4 py-3 text-sm font-black text-ink transition hover:bg-paper ${full ? "w-full" : ""} ${className}`}>
      {children}
    </button>
  );
}

function Rating({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-20 bg-accent p-2 text-center text-ink">
      <p className="text-lg font-black">{value}</p>
      <p className="text-[10px] font-bold uppercase">{label}</p>
    </div>
  );
}

function Plan({ name, price, description, badge, featured = false, locale = "en" }: { name: string; price: string; description: string; badge?: string; featured?: boolean; locale?: Locale }) {
  return (
    <div className={`border p-5 ${featured ? "border-accent bg-accent/10" : "border-white/10 bg-[#101010]"}`}>
      <div className="h-7">{badge && <Badge tone="warning">{badge}</Badge>}</div>
      <p className="mt-3 text-xl font-bold">{name}</p>
      <p className="mt-3 text-4xl font-black">{price}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
      <button className={`mt-5 w-full border py-3 text-sm font-bold ${featured ? "border-accent bg-accent text-ink" : "border-white/20 text-paper"}`}>
        {locale === "es" ? "Elegir" : "Choose"} {name}
      </button>
    </div>
  );
}

function CheckedRow({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 border border-white/10 bg-ink p-3 text-sm text-muted">
      <span className="grid h-5 w-5 shrink-0 place-items-center border border-accent bg-accent text-xs font-black text-ink">✓</span>
      <span>{label}</span>
    </div>
  );
}

function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[290px] rounded-[2rem] border border-white/15 bg-[#050505] p-3 shadow-2xl shadow-black/50">
      <div className="mx-auto mb-3 h-1.5 w-20 rounded-full bg-white/20" />
      <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#101010]">{children}</div>
    </div>
  );
}

function PriceLine({ label, value, muted = false }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className={`flex justify-between border-b border-white/10 pb-2 text-sm ${muted ? "text-muted" : "text-paper"}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function BasketRow({ title, price, badge }: { title: string; price: string; badge?: string }) {
  return (
    <div className="flex items-center justify-between gap-3 border border-white/10 bg-ink p-3">
      <div>
        <p className="font-semibold">{title}</p>
        {badge && <p className="mt-1 text-xs uppercase tracking-[0.14em] text-accent">{badge}</p>}
      </div>
      <p className="font-black">{price}</p>
    </div>
  );
}

function SearchResult({ title, label, mutedLabel = false, locale = "en" }: { title: string; label?: string; mutedLabel?: boolean; locale?: Locale }) {
  return (
    <article className="border border-white/10 bg-ink p-4">
      <div className="mb-2 flex items-center gap-2">
        {label && <span className={mutedLabel ? "text-[10px] uppercase tracking-[0.12em] text-muted" : "text-[10px] uppercase tracking-[0.12em] text-accent"}>{label}</span>}
        <span className="text-xs text-muted">example.com</span>
      </div>
      <p className="text-lg font-semibold">{title}</p>
      <p className="mt-1 text-sm text-muted">{tx(locale, "A carefully formatted result with familiar spacing and link styling.", "Un resultado con formato cuidado y estilo familiar.")}</p>
    </article>
  );
}

function MetricPlan({ name, price, metric, detail, featured = false }: { name: string; price: string; metric: string; detail: string; featured?: boolean }) {
  return (
    <div className={`border p-5 ${featured ? "border-accent bg-accent/10" : "border-white/10 bg-[#101010]"}`}>
      <p className="text-xl font-bold">{name}</p>
      <p className="mt-3 text-3xl font-black">{price}</p>
      <p className="mt-3 text-sm font-semibold text-accent">{metric}</p>
      <p className="mt-2 text-sm leading-6 text-muted">{detail}</p>
    </div>
  );
}

function ActivityToast({ name, action }: { name: string; action: string }) {
  return (
    <div className="flex items-center gap-3 border border-white/10 bg-ink p-3">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-sm font-black text-ink">{name.charAt(0)}</span>
      <p className="text-sm text-muted">
        <span className="font-semibold text-paper">{name}</span> {action}
      </p>
    </div>
  );
}

function MiniProduct({ name, price, locale = "en" }: { name: string; price: string; locale?: Locale }) {
  return (
    <div className="border border-white/10 bg-[#101010] p-5">
      <p className="text-xl font-bold">{name}</p>
      <p className="mt-5 text-4xl font-black">{price}</p>
      <p className="mt-2 text-sm text-muted">{tx(locale, "Standalone license", "Licencia independiente")}</p>
      <button className="mt-5 w-full border border-white/20 py-3 text-sm font-bold text-paper">{tx(locale, "Choose", "Elegir")}</button>
    </div>
  );
}

function LikeGateExample({ locale = "en" }: { locale?: Locale }) {
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

function ValidationLoopExample({ locale = "en" }: { locale?: Locale }) {
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

function ReactionPressureExample({ locale = "en" }: { locale?: Locale }) {
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

function HardToCloseExample({ locale = "en" }: { locale?: Locale }) {
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

function LiveActivityExample({ locale = "en" }: { locale?: Locale }) {
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

function InfiniteScrollFeed({ locale = "en" }: { locale?: Locale }) {
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
