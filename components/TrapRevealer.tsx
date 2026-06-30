"use client";

import { useState, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n";

type TrapInfo = {
  label: { en: string; es: string };
  notes: { en: string; es: string }[];
};

const trapData: Record<string, TrapInfo> = {
  "fake-scarcity": {
    label: { en: "Fake countdown + upsell", es: "Contador falso + sobreventa" },
    notes: [
      { en: "The 'only X left' countdown is automated and resets", es: "El contador de 'solo X disponibles' es automático y se reinicia" },
      { en: "Viewer count is randomly generated", es: "El número de visitantes se genera aleatoriamente" },
      { en: "Booking failure leads to a more expensive upsell", es: "El error de reserva lleva a un upsell más caro" },
    ],
  },
  "countdown-reset": {
    label: { en: "Timer that never ends", es: "Temporizador infinito" },
    notes: [
      { en: "Timer resets when it reaches zero", es: "El temporizador se reinicia al llegar a cero" },
      { en: "The 'offer' never actually expires", es: "La 'oferta' nunca caduca realmente" },
    ],
  },
  confirmshaming: {
    label: { en: "Guilt-trip decline button", es: "Botón con culpa" },
    notes: [
      { en: "Decline option is worded to shame the user", es: "La opción de rechazo está redactada para avergonzar" },
      { en: "Emotion replaces rational choice", es: "La emoción reemplaza la elección racional" },
    ],
  },
  "roach-motel": {
    label: { en: "Easy in, hard to leave", es: "Fácil entrar, difícil salir" },
    notes: [
      { en: "Signup is one click, cancellation requires multiple steps", es: "El registro es inmediato, cancelar requiere múltiples pasos" },
      { en: "Cancel button is buried or absent", es: "El botón de cancelar está oculto o ausente" },
    ],
  },
  "decoy-pricing": {
    label: { en: "The decoy plan", es: "El plan señuelo" },
    notes: [
      { en: "Ultra plan exists only to make Pro look cheap", es: "El plan Ultra existe solo para que Pro parezca barato" },
      { en: "Basic plan is deliberately under-featured to push mid-tier", es: "El plan Básico está limitado a propósito para empujar al medio" },
    ],
  },
  "hidden-cancellation": {
    label: { en: "Cancel buried in menus", es: "Cancelar escondido" },
    notes: [
      { en: "Cancellation option is hidden deep in settings", es: "La opción de cancelación está escondida en ajustes" },
      { en: "Search function can't find it", es: "El buscador no lo encuentra" },
    ],
  },
  "forced-continuity": {
    label: { en: "Free trial → paid trap", es: "Prueba → pago automático" },
    notes: [
      { en: "Trial auto-converts to paid without clear warning", es: "La prueba se convierte en pago sin aviso claro" },
      { en: "Cancelling during trial requires the same hoops", es: "Cancelar durante la prueba requiere los mismos pasos" },
    ],
  },
  "privacy-zuckering": {
    label: { en: "Privacy by trickery", es: "Privacidad con trampa" },
    notes: [
      { en: "Privacy options are hidden behind multiple taps", es: "Las opciones de privacidad están ocultas tras múltiples clics" },
      { en: "Default settings share more data than necessary", es: "La configuración por defecto comparte más datos de lo necesario" },
    ],
  },
  "social-proof-inflation": {
    label: { en: "Inflated numbers", es: "Números inflados" },
    notes: [
      { en: "Customer count is artificially inflated", es: "El número de clientes está inflado artificialmente" },
      { en: "'X people bought' uses a static multiplier", es: "'X personas compraron' usa un multiplicador estático" },
    ],
  },
  "visual-hierarchy-manipulation": {
    label: { en: "Design that deceives", es: "Diseño engañoso" },
    notes: [
      { en: "The desired option is visually dominant", es: "La opción deseada es visualmente dominante" },
      { en: "The free choice is small, grey, or hidden", es: "La opción libre es pequeña, gris o está oculta" },
    ],
  },
  "cookie-labyrinth": {
    label: { en: "Cookie maze", es: "Laberinto de cookies" },
    notes: [
      { en: "Rejecting cookies takes 5× more clicks than accepting", es: "Rechazar cookies requiere 5× más clics que aceptar" },
      { en: "Legitimate interest is used to bypass consent", es: "El interés legítimo se usa para evitar el consentimiento" },
    ],
  },
  "infinite-scroll": {
    label: { en: "No finish line", es: "Sin línea de meta" },
    notes: [
      { en: "Content loads endlessly to prevent stopping", es: "El contenido carga sin fin para evitar que pares" },
      { en: "No 'you've seen everything' marker", es: "No hay marcador de 'has visto todo'" },
    ],
  },
  "notification-addiction": {
    label: { en: "Badge anxiety loop", es: "Bucle de ansiedad" },
    notes: [
      { en: "Badges auto-generate to trigger anxiety", es: "Las notificaciones se generan solas para provocar ansiedad" },
      { en: "Clearing notifications doesn't stop new ones", es: "Limpiar notificaciones no detiene las nuevas" },
    ],
  },
  "default-bias": {
    label: { en: "Pre-checked to profit", es: "Pre-seleccionado para ganar" },
    notes: [
      { en: "Most expensive option is pre-selected", es: "La opción más cara está preseleccionada" },
      { en: "Opting out requires extra clicks", es: "Desmarcar requiere clics extra" },
    ],
  },
  "preselected-options": {
    label: { en: "Add-ons by default", es: "Extras por defecto" },
    notes: [
      { en: "Unnecessary add-ons are checked by default", es: "Los extras innecesarios vienen marcados por defecto" },
      { en: "Removing them is tedious", es: "Quitarlos es tedioso" },
    ],
  },
  "drip-pricing": {
    label: { en: "Fees appear later", es: "Tasas que aparecen después" },
    notes: [
      { en: "Fees are revealed step by step during checkout", es: "Las tasas se revelan paso a paso durante el pago" },
      { en: "Final price is much higher than initial", es: "El precio final es mucho mayor que el inicial" },
    ],
  },
  "sneak-into-basket": {
    label: { en: "Item added without consent", es: "Artículo añadido sin permiso" },
    notes: [
      { en: "Items are added to cart without user action", es: "Se añaden artículos al carrito sin acción del usuario" },
      { en: "Removing them is confusing", es: "Eliminarlos es confuso" },
    ],
  },
  "bait-and-switch": {
    label: { en: "What you see is not what you get", es: "No es lo que parece" },
    notes: [
      { en: "The advertised option is unavailable", es: "La opción anunciada no está disponible" },
      { en: "A more expensive alternative is offered instead", es: "Se ofrece una alternativa más cara" },
    ],
  },
  "disguised-ads": {
    label: { en: "Ads in disguise", es: "Anuncios camuflados" },
    notes: [
      { en: "Ads are styled to look like organic content", es: "Los anuncios parecen contenido orgánico" },
      { en: "Only a tiny 'sponsored' label tells them apart", es: "Solo una etiqueta minúscula los diferencia" },
    ],
  },
  nagging: {
    label: { en: "Prompt that never gives up", es: "Aviso insistente" },
    notes: [
      { en: "The same prompt reappears after being dismissed", es: "El mismo aviso reaparece tras cerrarlo" },
      { en: "Saying 'no' multiple times is required", es: "Decir 'no' varias veces es necesario" },
    ],
  },
  "trick-questions": {
    label: { en: "Double-negative consent", es: "Consentimiento con doble negativa" },
    notes: [
      { en: "Questions are worded to confuse", es: "Las preguntas están redactadas para confundir" },
      { en: "'No, I don't want to opt out' means opting in", es: "'No quiero darme de baja' significa darse de alta" },
    ],
  },
  misdirection: {
    label: { en: "Hidden costs in small print", es: "Costes ocultos en letra pequeña" },
    notes: [
      { en: "Key pricing info is revealed step by step", es: "La información clave de precio se revela paso a paso" },
      { en: "Going back is deliberately hard", es: "Volver atrás es deliberadamente difícil" },
    ],
  },
  "comparison-prevention": {
    label: { en: "Hard to compare plans", es: "Planes difíciles de comparar" },
    notes: [
      { en: "Plans use different units, making comparison hard", es: "Los planes usan unidades diferentes para evitar comparar" },
      { en: "Per-unit price is hidden or missing", es: "El precio por unidad está oculto" },
    ],
  },
  "fake-discount": {
    label: { en: "Inflated original price", es: "Precio original inflado" },
    notes: [
      { en: "Reference price is artificially high", es: "El precio de referencia está artificialmente alto" },
      { en: "The 'discount' is calculated against a fake baseline", es: "El 'descuento' se calcula sobre una base falsa" },
    ],
  },
  "fake-activity": {
    label: { en: "Fake social proof", es: "Prueba social falsa" },
    notes: [
      { en: "User activity notifications are fabricated", es: "Las notificaciones de actividad son inventadas" },
      { en: "'X people viewing' is a random number", es: "'X personas viendo' es un número aleatorio" },
    ],
  },
  "friend-spam": {
    label: { en: "Invites without consent", es: "Invitaciones sin permiso" },
    notes: [
      { en: "Contacts are auto-selected during sending", es: "Los contactos se auto-seleccionan durante el envío" },
      { en: "Deselecting them is made tedious", es: "Desmarcarlos es tedioso" },
    ],
  },
  "permission-priming": {
    label: { en: "Ask twice for permission", es: "Pedir permiso dos veces" },
    notes: [
      { en: "Ask for a small permission first, then the real one", es: "Piden un permiso pequeño primero, luego el real" },
      { en: "First 'yes' makes the second more likely", es: "El primer 'sí' hace más probable el segundo" },
    ],
  },
  "forced-registration": {
    label: { en: "Account required to buy", es: "Cuenta obligatoria para comprar" },
    notes: [
      { en: "Guest checkout is hidden or absent", es: "El pago como invitado está oculto o ausente" },
      { en: "Registration fields are excessive", es: "Los campos de registro son excesivos" },
    ],
  },
  "autoplay-trap": {
    label: { en: "Never-ending queue", es: "Cola interminable" },
    notes: [
      { en: "Next video auto-plays before current ends", es: "El siguiente video se reproduce antes de que termine" },
      { en: "Turning autoplay off is buried in settings", es: "Apagar la reproducción automática está escondido" },
    ],
  },
  "streak-pressure": {
    label: { en: "Fear of losing progress", es: "Miedo a perder el progreso" },
    notes: [
      { en: "Streak resets if you miss a day", es: "La racha se reinicia si faltas un día" },
      { en: "You're pressured to engage daily", es: "Te presionan para participar a diario" },
    ],
  },
  "paywall-tease": {
    label: { en: "Preview trap", es: "Trampa de vista previa" },
    notes: [
      { en: "Content is teased but blocked after a few lines", es: "El contenido se muestra pero se bloquea tras unas líneas" },
      { en: "Limited previews reset to keep you trying", es: "Las vistas previas se reinician para que sigas intentando" },
    ],
  },
  "anchored-bundling": {
    label: { en: "Bundle anchor trick", es: "Anclaje de paquete" },
    notes: [
      { en: "Bundle price is compared to a higher standalone total", es: "El precio del lote se compara con un total individual más alto" },
      { en: "The anchor makes the bundle seem like a steal", es: "El anclaje hace que el lote parezca una ganga" },
    ],
  },
  "review-gating": {
    label: { en: "Only positive reviews", es: "Solo reseñas positivas" },
    notes: [
      { en: "Only happy customers are prompted to review", es: "Solo los clientes satisfechos son invitados a opinar" },
      { en: "Negative feedback is redirected to private form", es: "El feedback negativo se redirige a un formulario privado" },
    ],
  },
  "loyalty-lock-in": {
    label: { en: "Points you can't leave", es: "Puntos que te atan" },
    notes: [
      { en: "Losing points if you cancel creates lock-in", es: "Perder puntos al cancelar crea dependencia" },
      { en: "The value of points is vague", es: "El valor de los puntos es vago" },
    ],
  },
  "scarcity-ladder": {
    label: { en: "Escalating pressure", es: "Presión escalada" },
    notes: [
      { en: "Badges become more aggressive when dismissed", es: "Las insignias se vuelven más agresivas al cerrarlas" },
      { en: "Each level adds a new manipulation layer", es: "Cada nivel añade una nueva capa de manipulación" },
    ],
  },
  "ai-authority-washing": {
    label: { en: "False AI authority", es: "Autoridad IA falsa" },
    notes: [
      { en: "'AI recommended' is used to add false authority", es: "'Recomendado por IA' añade autoridad falsa" },
      { en: "The AI recommendation is just an upsell", es: "La recomendación IA es solo un upsell" },
    ],
  },
  "negative-option-billing": {
    label: { en: "Auto-renew by silence", es: "Renovación por silencio" },
    notes: [
      { en: "Subscription renews unless you explicitly cancel", es: "La suscripción se renueva a menos que canceles explícitamente" },
      { en: "Renewal notice is sent after the charge", es: "El aviso de renovación llega después del cobro" },
    ],
  },
  "survey-to-sales-funnel": {
    label: { en: "Quiz that sells", es: "Cuestionario que vende" },
    notes: [
      { en: "The survey always recommends the most expensive option", es: "La encuesta siempre recomienda la opción más cara" },
      { en: "Answers don't actually change the recommendation", es: "Las respuestas no cambian realmente la recomendación" },
    ],
  },
  "visual-obstruction": {
    label: { en: "Multi-layer blockers", es: "Bloqueo multicapa" },
    notes: [
      { en: "Multiple overlays appear one after another", es: "Múltiples capas aparecen una tras otra" },
      { en: "Each layer requires a separate dismissal", es: "Cada capa requiere un cierre por separado" },
    ],
  },
  "like-gating": {
    label: { en: "Like to unlock", es: "Like para desbloquear" },
    notes: [
      { en: "Content is locked behind a social action", es: "El contenido está bloqueado tras una acción social" },
      { en: "The like is public, the content is often trivial", es: "El like es público, el contenido suele ser trivial" },
    ],
  },
  "validation-loop": {
    label: { en: "Endless validation feed", es: "Feed de validación sin fin" },
    notes: [
      { en: "Each like triggers another notification", es: "Cada like genera otra notificación" },
      { en: "The loop keeps dopamine flowing", es: "El bucle mantiene el flujo de dopamina" },
    ],
  },
  "reaction-pressure": {
    label: { en: "Emotional engagement bait", es: "Señuelo emocional" },
    notes: [
      { en: "Reaction buttons are designed to elicit emotional response", es: "Los botones de reacción buscan provocar respuesta emocional" },
      { en: "The interface rewards quick, emotional clicks", es: "La interfaz premia los clics rápidos y emocionales" },
    ],
  },
  "hard-to-close": {
    label: { en: "Tiny close target", es: "Botón de cierre minúsculo" },
    notes: [
      { en: "The close button is deliberately tiny", es: "El botón de cerrar es deliberadamente pequeño" },
      { en: "Clicking outside doesn't dismiss the popup", es: "Hacer clic fuera no cierra la ventana" },
    ],
  },
  "live-activity-indicator": {
    label: { en: "Fake live activity", es: "Actividad en vivo falsa" },
    notes: [
      { en: "'X people are viewing' is a random or static number", es: "'X personas viendo' es un número aleatorio o estático" },
      { en: "Recent purchase notifications are fabricated", es: "Las notificaciones de compras recientes son inventadas" },
    ],
  },
  "social-cross-sell": {
    label: { en: "Social pressure cross-sell", es: "Cross-sell con presión social" },
    notes: [
      { en: "'Friends bought this too' adds social pressure to buy", es: "'Tus amigos también compraron' añade presión social" },
      { en: "The social proof is often fabricated or vague", es: "La prueba social suele ser inventada o vaga" },
    ],
  },
  "frequently-bought-together": {
    label: { en: "Pre-selected bundle", es: "Lote preseleccionado" },
    notes: [
      { en: "Add-ons are pre-selected in the bundle", es: "Los extras vienen preseleccionados en el lote" },
      { en: "Removing items is not obvious", es: "Eliminar artículos no es obvio" },
    ],
  },
};

const defaultTrap: TrapInfo = {
  label: { en: "Manipulative defaults", es: "Opciones manipulativas" },
  notes: [
    { en: "The interface is designed to steer you toward a specific choice", es: "La interfaz te empuja hacia una opción específica" },
    { en: "The user's best interest is not the default", es: "El interés del usuario no es la opción por defecto" },
  ],
};

export function TrapRevealer({
  slug,
  children,
  locale = "en",
}: {
  slug: string;
  children: ReactNode;
  locale?: Locale;
}) {
  const [revealed, setRevealed] = useState(false);
  const info = trapData[slug] || defaultTrap;
  const label = locale === "es" ? info.label.es : info.label.en;

  return (
    <div className="relative">
      <div className="relative">
        {revealed && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/40 p-4 animate-in">
            <div className="max-w-sm space-y-3 border border-accent/30 bg-[#0a0a0a] p-5 shadow-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-accent">
                {locale === "es" ? "¿Qué trampa es?" : "What's the trick?"}
              </p>
              <p className="text-sm font-bold text-accent">{label}</p>
              <ul className="space-y-2">
                {info.notes.map((note, i) => (
                  <li key={i} className="flex gap-2 text-xs text-muted">
                    <span className="shrink-0 text-accent">#{i + 1}</span>
                    <span>{locale === "es" ? note.es : note.en}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setRevealed(false)}
                className="w-full border border-white/10 py-2 text-xs text-muted transition hover:bg-white/5"
              >
                {locale === "es" ? "Cerrar" : "Close"}
              </button>
            </div>
          </div>
        )}
        <div className={revealed ? "pointer-events-none blur-sm" : ""}>
          {children}
        </div>
      </div>
      <button
        onClick={() => setRevealed(!revealed)}
        className={`absolute bottom-3 right-3 z-30 border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition ${
          revealed
            ? "border-accent/50 bg-accent/20 text-accent"
            : "border-white/10 bg-black/60 text-muted hover:border-accent/50 hover:text-accent"
        }`}
      >
        {revealed
          ? (locale === "es" ? "Cerrar" : "Close")
          : (locale === "es" ? `¿${label}?` : `"${label}"?`)}
      </button>
    </div>
  );
}
