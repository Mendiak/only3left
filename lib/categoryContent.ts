import type { Locale } from "@/lib/i18n";
import type { ReferenceId } from "@/lib/references";

export type CategoryFaq = { q: string; a: string };

export type CategoryContent = {
  heading: string;
  intro: string[];
  howToSpot: string[];
  legal: string;
  faq: CategoryFaq[];
};

export const categoryReferences: Record<string, ReferenceId[]> = {
  "urgency-and-scarcity": ["ucpd", "dsa", "ftc"],
  "pricing-manipulation": ["ucpd", "ftc"],
  "subscription-traps": ["ucpd", "ftc", "dsa"],
  "interface-manipulation": ["dsa", "wcag22"],
  "privacy-manipulation": ["gdpr", "edpb", "dma"],
  "social-engineering": ["ucpd", "ftc"],
  "attention-capture": ["dsa", "oecd"],
  "gamification-abuse": ["dsa", "oecd"],
  "mobile-addiction": ["dsa", "edpb"],
  "trust-and-authority-abuse": ["ucpd", "aiAct", "ftc"],
};

/**
 * Category landing pages. The catalogue page already lists every pattern, but
 * these URLs target the "what are X dark patterns" query shape, which no single
 * pattern page can rank for.
 */
export const categoryContent: Record<string, Record<Locale, CategoryContent>> = {
  "urgency-and-scarcity": {
    en: {
      heading: "Urgency and Scarcity Dark Patterns",
      intro: [
        "Urgency and scarcity dark patterns manufacture a deadline or a shortage so that deliberation feels expensive. The interface never says \"decide carefully\"; it says \"decide now, or lose something\". Sometimes the shortage is real. Very often it is a number generated per session, a timer that resets on refresh, or a stock counter that never reaches zero.",
        "These patterns work because losing something stings roughly twice as much as gaining the same thing feels good. A countdown converts a purchase decision into an avoidance decision, and avoidance is faster. That speed is the product: it prevents the comparison, the second tab, and the refund request.",
      ],
      howToSpot: [
        "Refresh the page: if the countdown returns to the same value, it is theatre.",
        "Compare the claimed stock with the product page, the sitemap, or the API response.",
        "Check whether the deadline carries a timezone, a source, and a stated consequence.",
      ],
      legal: "Under the EU Unfair Commercial Practices Directive, a falsely stated deadline or a fabricated scarcity claim is a misleading commercial practice. The Digital Services Act also bans dark patterns on large platforms outright, and the FTC has brought cases against fake countdown timers and invented demand.",
      faq: [
        {
          q: "Are countdown timers always dark patterns?",
          a: "No. A real sale with a real end date is legitimate disclosure. The pattern appears when the deadline is fabricated, silently extended, or reset for every visitor.",
        },
        {
          q: "Is \"only 3 left\" illegal?",
          a: "It is illegal when it is false or unverifiable in a context where a reasonable buyer would rely on it. A genuine inventory count with a clear timestamp is not a dark pattern.",
        },
        {
          q: "Why do scarcity warnings still work when people know they are fake?",
          a: "Because the effect is pre-reflective. The warning triggers loss aversion before the analytical mind gets a turn, and the resulting discomfort is resolved fastest by clicking.",
        },
      ],
    },
    es: {
      heading: "Patrones oscuros de urgencia y escasez",
      intro: [
        "Los patrones de urgencia y escasez fabrican una fecha límite o una carencia para que deliberar resulte caro. La interfaz nunca dice «decide con calma»; dice «decide ahora o pierdes algo». A veces la escasez es real. Muchas veces es un número generado por sesión, un contador que se reinicia al recargar o un stock que nunca llega a cero.",
        "Funcionan porque perder algo duele aproximadamente el doble de lo que satisface ganarlo. Una cuenta atrás convierte una decisión de compra en una decisión de evitación, y evitar es más rápido. Esa velocidad es el producto: impide la comparación, la segunda pestaña y la solicitud de reembolso.",
      ],
      howToSpot: [
        "Recarga la página: si el contador vuelve al mismo valor, es teatro.",
        "Compara el stock anunciado con la ficha del producto, el sitemap o la respuesta de la API.",
        "Comprueba si la fecha límite indica zona horaria, fuente y consecuencia declarada.",
      ],
      legal: "Según la Directiva europea sobre prácticas comerciales desleales, una fecha límite falsa o una escasez inventada son prácticas engañosas. El Reglamento de Servicios Digitales prohíbe los patrones oscuros en las grandes plataformas, y la FTC ha sancionado contadores falsos y demanda inventada.",
      faq: [
        {
          q: "¿Los contadores siempre son patrones oscuros?",
          a: "No. Una oferta real con fecha de fin real es información legítima. El patrón aparece cuando el plazo es inventado, se prorroga en silencio o se reinicia para cada visitante.",
        },
        {
          q: "¿Es ilegal decir «solo quedan 3»?",
          a: "Es ilegal cuando es falso o no verificable en un contexto en el que un comprador razonable confiaría en ello. Un inventario real con marca de tiempo no es un patrón oscuro.",
        },
        {
          q: "¿Por qué siguen funcionando los avisos de escasez si se sabe que son falsos?",
          a: "Porque el efecto es prerreflexivo. El aviso activa la aversión a la pérdida antes de que intervenga el análisis, y la incomodidad resultante se resuelve más rápido haciendo clic.",
        },
      ],
    },
  },
  "pricing-manipulation": {
    en: {
      heading: "Pricing Manipulation Dark Patterns",
      intro: [
        "Pricing manipulation is the art of making comparison expensive. The prices themselves may be legal; the arrangement is not. A decoy plan exists to make the target plan look reasonable. A drip-priced checkout reveals mandatory fees only once you have invested minutes in the form. A pre-checked add-on turns a considered purchase into a default one.",
        "The common thread is asymmetric effort. Each individual step is small enough to justify, but the cumulative effect moves money from the user to the vendor without a corresponding decision. Regulators increasingly treat the aggregate as the violation, not just the individual screen.",
      ],
      howToSpot: [
        "Write down every charge you will actually pay, not the headline price.",
        "Normalise plans to the same unit and period before comparing.",
        "Check which options are already selected when the checkout first loads.",
      ],
      legal: "In the EU, the total price including unavoidable fees must be shown before the consumer is bound. The FTC's 2024 rulemaking on junk fees targets exactly this gap between the advertised price and the final one.",
      faq: [
        {
          q: "What is drip pricing?",
          a: "Revealing mandatory charges gradually during checkout, so the advertised price is never the price paid. It is illegal in several jurisdictions when the added fees are unavoidable.",
        },
        {
          q: "Why do three-tier pricing tables use a decoy plan?",
          a: "A deliberately unattractive option anchors the comparison. Removing it changes which plan looks reasonable, even though nothing about the target plan changed.",
        },
        {
          q: "Is a pre-selected add-on always a dark pattern?",
          a: "It is a dark pattern when the add-on costs money or grants a permission and the user did not actively choose it. A genuinely free, reversible default is a different thing.",
        },
      ],
    },
    es: {
      heading: "Patrones oscuros de manipulación de precios",
      intro: [
        "La manipulación de precios es el arte de encarecer la comparación. Los precios pueden ser legales; la disposición no. Un plan señuelo existe para que el plan objetivo parezca razonable. Un checkout con precio por goteo revela tasas obligatorias solo cuando ya has invertido minutos en el formulario. Un extra preseleccionado convierte una compra meditada en una compra por defecto.",
        "El hilo común es la asimetría de esfuerzo. Cada paso aislado es lo bastante pequeño para justificarse, pero el efecto acumulado mueve dinero del usuario al vendedor sin una decisión equivalente. Los reguladores empiezan a tratar el conjunto como la infracción, no solo la pantalla concreta.",
      ],
      howToSpot: [
        "Apunta todos los cargos que vas a pagar de verdad, no el precio de titular.",
        "Normaliza los planes a la misma unidad y periodo antes de comparar.",
        "Revisa qué opciones vienen ya marcadas cuando se carga el checkout.",
      ],
      legal: "En la UE, el precio total con tasas inevitables debe mostrarse antes de que el consumidor quede vinculado. La normativa de la FTC sobre cargos basura ataca exactamente esa distancia entre el precio anunciado y el final.",
      faq: [
        {
          q: "¿Qué es el precio por goteo?",
          a: "Revelar cargos obligatorios de forma gradual durante el pago, de modo que el precio anunciado nunca es el pagado. Es ilegal en varias jurisdicciones cuando las tasas añadidas son inevitables.",
        },
        {
          q: "¿Por qué las tablas de tres planes usan un plan señuelo?",
          a: "Una opción deliberadamente poco atractiva ancla la comparación. Eliminarla cambia qué plan parece razonable, aunque el plan objetivo no haya cambiado en nada.",
        },
        {
          q: "¿Un extra preseleccionado es siempre un patrón oscuro?",
          a: "Lo es cuando cuesta dinero o concede un permiso y el usuario no lo eligió activamente. Un valor por defecto gratuito y reversible es otra cosa.",
        },
      ],
    },
  },
  "subscription-traps": {
    en: {
      heading: "Subscription Trap Dark Patterns",
      intro: [
        "Subscription traps exploit a simple asymmetry: signing up is a button, leaving is a process. The pattern family includes hidden cancellation, forced continuity after a trial, negative-option billing where silence counts as consent, and loyalty schemes that convert sunk points into exit costs.",
        "What makes these patterns durable is that they generate revenue without generating complaints at the same rate. People who cannot find the cancellation link do not usually write a review; they just keep paying, sometimes for years. That is why regulators now require cancellation to be as easy as sign-up.",
      ],
      howToSpot: [
        "Try to cancel before you subscribe, or read the cancellation path first.",
        "Look for a stated renewal date and a reminder email before the charge.",
        "Check whether a \"free trial\" requires a card and auto-converts.",
      ],
      legal: "The EU's 2023 distance-selling rules require a visible cancellation button and a confirmation. The FTC's click-to-cancel rule applies the same logic in the United States. In both cases, forcing a phone call to cancel is the violation, not the subscription itself.",
      faq: [
        {
          q: "What is the difference between a subscription and a subscription trap?",
          a: "A subscription is a disclosed recurring charge. A trap makes cancellation materially harder than sign-up, or converts a trial without clear consent.",
        },
        {
          q: "Is a free trial that requires a card a dark pattern?",
          a: "Not by itself. It becomes one when the conversion date is buried, reminders are absent, or canceling requires a channel the user cannot access.",
        },
        {
          q: "Can loyalty points count as a dark pattern?",
          a: "Yes, when expiry rules or redemption thresholds are designed so that leaving feels like forfeiting money. The points are the lock, not the reward.",
        },
      ],
    },
    es: {
      heading: "Patrones oscuros de trampas de suscripción",
      intro: [
        "Las trampas de suscripción explotan una asimetría simple: darse de alta es un botón, salir es un proceso. La familia incluye cancelación oculta, continuidad forzada tras una prueba, facturación por opción negativa en la que el silencio cuenta como consentimiento y programas de fidelización que convierten puntos acumulados en costes de salida.",
        "Lo que las hace duraderas es que generan ingresos sin generar quejas al mismo ritmo. Quien no encuentra el enlace de cancelación no suele escribir una reseña: simplemente sigue pagando, a veces durante años. Por eso los reguladores exigen ahora que cancelar sea tan fácil como suscribirse.",
      ],
      howToSpot: [
        "Intenta cancelar antes de suscribirte, o lee primero el recorrido de cancelación.",
        "Busca la fecha de renovación declarada y el correo de aviso previo al cargo.",
        "Comprueba si la «prueba gratis» exige tarjeta y se convierte automáticamente.",
      ],
      legal: "La normativa europea de 2023 exige un botón de cancelación visible y una confirmación. La regla click-to-cancel de la FTC aplica la misma lógica en Estados Unidos. En ambos casos, obligar a llamar para cancelar es la infracción, no la suscripción.",
      faq: [
        {
          q: "¿Cuál es la diferencia entre una suscripción y una trampa?",
          a: "Una suscripción es un cargo recurrente declarado. Una trampa hace que cancelar sea materialmente más difícil que suscribirse, o convierte una prueba sin consentimiento claro.",
        },
        {
          q: "¿Una prueba gratis con tarjeta es un patrón oscuro?",
          a: "No por sí sola. Lo es cuando la fecha de conversión está enterrada, faltan recordatorios o cancelar exige un canal inaccesible para el usuario.",
        },
        {
          q: "¿Los puntos de fidelización pueden ser un patrón oscuro?",
          a: "Sí, cuando las caducidades o los umbrales de canje están diseñados para que irse se sienta como perder dinero. Los puntos son la cerradura, no la recompensa.",
        },
      ],
    },
  },
  "interface-manipulation": {
    en: {
      heading: "Interface Manipulation Dark Patterns",
      intro: [
        "Interface manipulation sits in the pixels rather than the words. Size, contrast, position, motion and z-index decide which option feels like the obvious one. The copy may be perfectly accurate while the layout makes the honest choice functionally invisible.",
        "This category covers visual hierarchy manipulation, misdirection, obstruction, hard-to-close modals, disguised ads and bait-and-switch flows. The defining test is counterfactual: if both options were rendered with equal prominence, would the user's choice change? If yes, the design is doing persuasive work it does not disclose.",
      ],
      howToSpot: [
        "Cover the bright button and ask whether the alternative is still findable.",
        "Tab through the dialog with a keyboard: the reject action should be reachable and visible.",
        "Check the contrast ratio of the secondary action against its background.",
      ],
      legal: "Accessibility law intersects here: a close button that is too small or too low-contrast can breach WCAG 2.2 targets and the European Accessibility Act. The DSA additionally bans interface designs that distort or impair consumer choice on regulated platforms.",
      faq: [
        {
          q: "What is visual hierarchy manipulation?",
          a: "Using size, colour, contrast or placement so one option looks natural and the alternative is easy to miss, while both are presented as equally available.",
        },
        {
          q: "Is a large accept button always manipulative?",
          a: "Not always. Primary actions are legitimately prominent. It becomes manipulative when the reject option is deliberately reduced below readable or tappable thresholds.",
        },
        {
          q: "How do disguised ads differ from normal advertising?",
          a: "Normal advertising is labelled clearly. Disguised ads borrow the visual language of organic content or hide the label at low contrast.",
        },
      ],
    },
    es: {
      heading: "Patrones oscuros de manipulación de interfaz",
      intro: [
        "La manipulación de interfaz vive en los píxeles, no en las palabras. Tamaño, contraste, posición, movimiento y z-index deciden qué opción parece la obvia. El texto puede ser exacto mientras la maquetación vuelve funcionalmente invisible la elección honesta.",
        "Esta categoría incluye manipulación de jerarquía visual, desvío de atención, obstrucción, modales difíciles de cerrar, anuncios disfrazados y flujos de cebo y cambio. La prueba que la define es contrafactual: si ambas opciones se mostraran con la misma prominencia, ¿cambiaría la decisión del usuario? Si sí, el diseño está persuadiendo sin declararlo.",
      ],
      howToSpot: [
        "Tapa el botón brillante y pregúntate si la alternativa sigue siendo localizable.",
        "Recorre el diálogo con el teclado: la acción de rechazo debe ser alcanzable y visible.",
        "Comprueba el contraste de la acción secundaria contra su fondo.",
      ],
      legal: "Aquí se cruza la normativa de accesibilidad: un botón de cierre demasiado pequeño o con poco contraste puede incumplir WCAG 2.2 y la Ley Europea de Accesibilidad. El DSA prohíbe además diseños que distorsionen la elección del consumidor en plataformas reguladas.",
      faq: [
        {
          q: "¿Qué es la manipulación de jerarquía visual?",
          a: "Usar tamaño, color, contraste o posición para que una opción parezca natural y la alternativa pase desapercibida, presentando ambas como igualmente disponibles.",
        },
        {
          q: "¿Un botón de aceptar grande es siempre manipulador?",
          a: "No siempre. Las acciones primarias pueden ser prominentes. Es manipulador cuando la opción de rechazo se reduce deliberadamente por debajo de umbrales legibles o pulsables.",
        },
        {
          q: "¿En qué se diferencian los anuncios disfrazados de la publicidad normal?",
          a: "La publicidad normal se etiqueta con claridad. Los anuncios disfrazados toman el lenguaje visual del contenido orgánico u ocultan la etiqueta con bajo contraste.",
        },
      ],
    },
  },
  "privacy-manipulation": {
    en: {
      heading: "Privacy Manipulation Dark Patterns",
      intro: [
        "Privacy manipulation is consent theatre: the interface performs respect for your data while engineering the outcome it wants. Accepting is one click; refusing is a settings panel with seventeen toggles and a save button that scrolls off-screen. Permissions are requested before the user can understand what they unlock.",
        "The family includes cookie labyrinths, privacy zuckering, permission priming and default-bias in visibility settings. What they share is that the privacy-protective option exists in the code but not in the effort budget of an ordinary person.",
      ],
      howToSpot: [
        "Look for a \"reject all\" control at the same level as \"accept all\".",
        "Check whether toggles are off by default and whether saving is a separate step.",
        "Read which data the permission unlocks, not just the benefit it promises.",
      ],
      legal: "GDPR requires consent to be freely given, specific and as easy to withdraw as to give. The EDPB's 2023 guidance on dark patterns names asymmetric buttons, pre-ticked boxes and nagging as invalid consent. The DMA adds that refusing consent must not be harder than giving it.",
      faq: [
        {
          q: "What is a cookie labyrinth?",
          a: "A consent interface where accepting is immediate and refusing requires navigating nested categories, toggling each one, and confirming separately.",
        },
        {
          q: "Is a pre-ticked consent box valid under GDPR?",
          a: "No. Consent must be an affirmative act, so pre-ticked boxes and silence do not constitute valid consent.",
        },
        {
          q: "What is privacy zuckering?",
          a: "Designing the interface so users share more personal data than they intended, usually through confusing defaults and onboarding prompts.",
        },
      ],
    },
    es: {
      heading: "Patrones oscuros de manipulación de privacidad",
      intro: [
        "La manipulación de privacidad es teatro de consentimiento: la interfaz escenifica respeto por tus datos mientras diseña el resultado que quiere. Aceptar es un clic; rechazar es un panel de ajustes con diecisiete interruptores y un botón de guardar que se sale de pantalla. Los permisos se piden antes de que el usuario pueda entender qué desbloquean.",
        "La familia incluye laberintos de cookies, privacy zuckering, preparación de permisos y sesgo por defecto en la visibilidad del perfil. Comparten que la opción protectora existe en el código pero no en el presupuesto de esfuerzo de una persona normal.",
      ],
      howToSpot: [
        "Busca un control de «rechazar todo» al mismo nivel que «aceptar todo».",
        "Comprueba si los interruptores vienen apagados y si guardar es un paso aparte.",
        "Lee qué dato desbloquea el permiso, no solo el beneficio que promete.",
      ],
      legal: "El RGPD exige consentimiento libre, específico y tan fácil de retirar como de dar. Las guías del EDPB de 2023 sobre patrones oscuros señalan botones asimétricos, casillas premarcadas e insistencia como consentimiento inválido. El DMA añade que rechazar no puede ser más difícil que aceptar.",
      faq: [
        {
          q: "¿Qué es un laberinto de cookies?",
          a: "Una interfaz de consentimiento en la que aceptar es inmediato y rechazar exige recorrer categorías anidadas, desactivar cada una y confirmar por separado.",
        },
        {
          q: "¿Una casilla premarcada es consentimiento válido según el RGPD?",
          a: "No. El consentimiento debe ser un acto afirmativo, así que las casillas premarcadas y el silencio no lo constituyen.",
        },
        {
          q: "¿Qué es el privacy zuckering?",
          a: "Diseñar la interfaz para que el usuario comparta más datos personales de los que pretendía, normalmente mediante valores por defecto confusos y avisos de onboarding.",
        },
      ],
    },
  },
  "social-engineering": {
    en: {
      heading: "Social Engineering Dark Patterns",
      intro: [
        "Social engineering patterns borrow human trust and redirect it. A testimonial, a rating, a \"12 people bought this\" ticker, a guilt-tripping decline link: each is a social signal deployed without the evidence that would make it meaningful.",
        "The category includes confirmshaming, inflated social proof, fake activity, friend spam and review gating. The mechanism is not deception about the product so much as deception about other people: what they think, what they bought, and what they will think of you if you say no.",
      ],
      howToSpot: [
        "Ask for the source and the time window behind any popularity claim.",
        "Check whether reviews are gated by rating before publication.",
        "Notice whether the decline option describes your choice or insults it.",
      ],
      legal: "Fabricated testimonials and undisclosed paid endorsements are explicitly prohibited in the EU's unfair commercial practices annex and by the FTC's endorsement guides. Review gating additionally breaches several platform policies and consumer-protection rules on misleading omissions.",
      faq: [
        {
          q: "What is confirmshaming?",
          a: "Writing the decline option so it insults, guilts or belittles the user for choosing it, for example \"No thanks, I prefer paying full price\".",
        },
        {
          q: "How can I tell if social proof is inflated?",
          a: "Look for specificity. Real numbers usually have a source, a period and a denominator. Inflated ones are round, unverifiable and never decrease.",
        },
        {
          q: "What is review gating?",
          a: "Routing satisfied customers to public reviews and dissatisfied ones to a private form, so the public rating no longer represents the customer base.",
        },
      ],
    },
    es: {
      heading: "Patrones oscuros de ingeniería social",
      intro: [
        "Los patrones de ingeniería social toman prestada la confianza humana y la redirigen. Un testimonio, una valoración, un contador de «12 personas compraron esto», un enlace de rechazo que culpa: cada uno es una señal social desplegada sin la evidencia que la haría significativa.",
        "La categoría incluye confirmshaming, prueba social inflada, actividad falsa, spam a contactos y filtrado de reseñas. El mecanismo no es tanto engañar sobre el producto como engañar sobre los demás: qué piensan, qué compraron y qué pensarán de ti si dices que no.",
      ],
      howToSpot: [
        "Pide la fuente y la ventana temporal detrás de cualquier afirmación de popularidad.",
        "Comprueba si las reseñas se filtran por puntuación antes de publicarse.",
        "Fíjate si la opción de rechazo describe tu elección o la insulta.",
      ],
      legal: "Los testimonios inventados y las recomendaciones pagadas no declaradas están prohibidos expresamente en el anexo de prácticas desleales de la UE y en las guías de la FTC. El filtrado de reseñas incumple además políticas de plataforma y normas de omisión engañosa.",
      faq: [
        {
          q: "¿Qué es el confirmshaming?",
          a: "Redactar la opción de rechazo para insultar, culpabilizar o ridiculizar al usuario por elegirla, por ejemplo «No gracias, prefiero pagar el precio completo».",
        },
        {
          q: "¿Cómo sé si la prueba social está inflada?",
          a: "Busca especificidad. Los números reales suelen tener fuente, periodo y denominador. Los inflados son redondos, no verificables y nunca bajan.",
        },
        {
          q: "¿Qué es el filtrado de reseñas?",
          a: "Dirigir a los clientes satisfechos a reseñas públicas y a los insatisfechos a un formulario privado, de modo que la valoración pública deja de representar a la clientela.",
        },
      ],
    },
  },
  "attention-capture": {
    en: {
      heading: "Attention Capture Dark Patterns",
      intro: [
        "Attention capture patterns remove the moment where you would have decided to stop. Infinite scroll eliminates the end of the page. Autoplay eliminates the gap between episodes. Notification badges eliminate the silence in which you might have chosen not to check.",
        "None of these features is malicious in isolation. The pattern appears when the stop signal is removed while the start signal is amplified, so that continuation requires no decision and stopping requires an explicit act of will. That is a design choice, not an emergent property of technology.",
      ],
      howToSpot: [
        "Look for a natural end point: pagination, an episode boundary, a session summary.",
        "Check whether notifications can be batched or silenced without disabling the feature.",
        "Notice whether the app ever tells you that you have done enough.",
      ],
      legal: "The UK's Age Appropriate Design Code and the EU's DSA both require risk mitigation for compulsive use, particularly for minors. Autoplay defaults and infinite scroll are named in regulatory guidance as design choices that must be justified.",
      faq: [
        {
          q: "Is infinite scroll always a dark pattern?",
          a: "No. It becomes one when it replaces a deliberate stop point and the interface offers no equivalent way to end a session intentionally.",
        },
        {
          q: "Why is autoplay considered manipulative?",
          a: "Because it removes the decision to continue. The next item starts before the user has a chance to form an intention to stop.",
        },
        {
          q: "Do notification badges really change behaviour?",
          a: "Yes. A badge creates a small unresolved loop, and resolving it is faster than deciding whether it matters. Repeated thousands of times, that is the habit.",
        },
      ],
    },
    es: {
      heading: "Patrones oscuros de captura de atención",
      intro: [
        "Los patrones de captura de atención eliminan el momento en el que habrías decidido parar. El scroll infinito elimina el final de la página. El autoplay elimina el hueco entre episodios. Los badges de notificación eliminan el silencio en el que podrías haber elegido no mirar.",
        "Ninguna de estas funciones es maliciosa por sí sola. El patrón aparece cuando se retira la señal de parada mientras se amplifica la de arranque, de modo que continuar no exige decisión y parar exige un acto explícito de voluntad. Eso es una decisión de diseño, no una propiedad emergente de la tecnología.",
      ],
      howToSpot: [
        "Busca un punto final natural: paginación, frontera de episodio, resumen de sesión.",
        "Comprueba si las notificaciones pueden agruparse o silenciarse sin desactivar la función.",
        "Fíjate si la app alguna vez te dice que ya has hecho suficiente.",
      ],
      legal: "El código de diseño apropiado para la edad del Reino Unido y el DSA europeo exigen mitigar el riesgo de uso compulsivo, sobre todo en menores. Los valores por defecto de autoplay y el scroll infinito se citan en guías regulatorias como decisiones que deben justificarse.",
      faq: [
        {
          q: "¿El scroll infinito es siempre un patrón oscuro?",
          a: "No. Lo es cuando sustituye un punto de parada deliberado y la interfaz no ofrece una forma equivalente de terminar la sesión de manera intencional.",
        },
        {
          q: "¿Por qué se considera manipulador el autoplay?",
          a: "Porque elimina la decisión de continuar. El siguiente elemento empieza antes de que el usuario tenga ocasión de formar la intención de parar.",
        },
        {
          q: "¿Los badges de notificación cambian de verdad el comportamiento?",
          a: "Sí. Un badge crea un pequeño bucle sin resolver, y resolverlo es más rápido que decidir si importa. Repetido miles de veces, eso es el hábito.",
        },
      ],
    },
  },
  "gamification-abuse": {
    en: {
      heading: "Gamification Abuse Dark Patterns",
      intro: [
        "Gamification abuse happens when reward mechanics stop serving the user and start serving the retention chart. Streaks, levels, badges and points are neutral tools. They become manipulative when breaking a streak carries a penalty, when progress is deliberately made unrecoverable, or when the reward is only obtainable by spending.",
        "The tell is whether the mechanic respects absence. A healthy system lets you return after a month without punishment. An abusive one charges you to repair the gap, or makes the loss the entire point of coming back.",
      ],
      howToSpot: [
        "Ask what happens if you do not open the app for two weeks.",
        "Check whether paid repair or \"streak freeze\" exists alongside the streak itself.",
        "Compare the reward for returning with the penalty for leaving.",
      ],
      legal: "The DSA requires platforms to assess compulsive-use risks, and several EU consumer bodies have challenged paid streak repair and loot-box-adjacent mechanics as unfair commercial practices, particularly where minors are the target audience.",
      faq: [
        {
          q: "Are streaks inherently manipulative?",
          a: "No. A streak that tracks consistency is fine. It becomes manipulative when it penalises absence or monetises the repair.",
        },
        {
          q: "What is the difference between gamification and gamification abuse?",
          a: "Gamification supports the user's own goal. Abuse uses the mechanic to override that goal in favour of engagement metrics.",
        },
        {
          q: "Why are paid streak repairs a red flag?",
          a: "Because the penalty was designed first and the remedy sold second. The user pays to undo an emotion the product deliberately created.",
        },
      ],
    },
    es: {
      heading: "Patrones oscuros de abuso de gamificación",
      intro: [
        "El abuso de gamificación ocurre cuando las mecánicas de recompensa dejan de servir al usuario y empiezan a servir al gráfico de retención. Rachas, niveles, badges y puntos son herramientas neutras. Se vuelven manipuladoras cuando romper una racha conlleva castigo, cuando el progreso se hace irrecuperable a propósito o cuando la recompensa solo se obtiene pagando.",
        "La señal es si la mecánica respeta la ausencia. Un sistema sano te deja volver tras un mes sin castigo. Uno abusivo te cobra por reparar el hueco, o convierte la pérdida en todo el motivo para volver.",
      ],
      howToSpot: [
        "Pregúntate qué pasa si no abres la app durante dos semanas.",
        "Comprueba si existe reparación de pago o «congelar racha» junto a la racha misma.",
        "Compara la recompensa por volver con la penalización por irte.",
      ],
      legal: "El DSA exige evaluar riesgos de uso compulsivo, y varios organismos de consumo europeos han impugnado la reparación de rachas de pago y mecánicas cercanas a las loot boxes como prácticas desleales, sobre todo cuando el público objetivo son menores.",
      faq: [
        {
          q: "¿Las rachas son manipuladoras por naturaleza?",
          a: "No. Una racha que registra constancia está bien. Se vuelve manipuladora cuando penaliza la ausencia o monetiza la reparación.",
        },
        {
          q: "¿Cuál es la diferencia entre gamificación y abuso de gamificación?",
          a: "La gamificación apoya el objetivo del propio usuario. El abuso usa la mecánica para anular ese objetivo en favor de métricas de engagement.",
        },
        {
          q: "¿Por qué las reparaciones de racha de pago son una señal de alarma?",
          a: "Porque primero se diseñó el castigo y después se vendió el remedio. El usuario paga por deshacer una emoción que el producto creó deliberadamente.",
        },
      ],
    },
  },
  "mobile-addiction": {
    en: {
      heading: "Mobile Addiction Dark Patterns",
      intro: [
        "Mobile addiction patterns use the phone's native affordances against its owner. A badge on the icon, a permission prompt timed for emotional pressure, a haptic pull-to-refresh, a streak notification at 23:50: each is small, and together they turn checking into a reflex that happens before intention.",
        "This category is closely tied to permission design. The pattern is often not the notification itself but the priming screen that frames refusal as letting someone down, followed by the system dialog that the user has already been talked into accepting.",
      ],
      howToSpot: [
        "Notice whether a pre-permission prompt appears before the OS dialog.",
        "Check whether notifications are triggered by an event or by a schedule designed to re-engage you.",
        "Try to batch or mute notifications without losing the feature entirely.",
      ],
      legal: "Google Play and the App Store both restrict permission priming and misleading notification triggers. The EU's DSA and the UK's AADC treat compulsive design as a systemic risk requiring mitigation, with stronger duties where minors are likely users.",
      faq: [
        {
          q: "What is permission priming?",
          a: "A custom screen shown before the operating system dialog, framed to make granting the permission feel socially or functionally necessary.",
        },
        {
          q: "Are push notifications a dark pattern?",
          a: "Not inherently. They become one when they are engineered for re-engagement rather than for information the user asked for.",
        },
        {
          q: "Why does the phone make these patterns stronger?",
          a: "Because the device is always present, the feedback is immediate, and the interaction cost is a thumb movement. Frequency does the rest.",
        },
      ],
    },
    es: {
      heading: "Patrones oscuros de adicción móvil",
      intro: [
        "Los patrones de adicción móvil usan las capacidades nativas del teléfono contra su dueño. Un badge en el icono, un permiso cronometrado para presionar emocionalmente, un tirón háptico al refrescar, una notificación de racha a las 23:50: cada uno es pequeño, y juntos convierten mirar en un reflejo que ocurre antes de la intención.",
        "Esta categoría está muy ligada al diseño de permisos. A menudo el patrón no es la notificación, sino la pantalla previa que enmarca rechazar como decepcionar a alguien, seguida del diálogo del sistema que el usuario ya ha sido convencido de aceptar.",
      ],
      howToSpot: [
        "Fíjate si aparece un aviso previo propio antes del diálogo del sistema operativo.",
        "Comprueba si las notificaciones las dispara un evento o un calendario diseñado para reengancharte.",
        "Intenta agrupar o silenciar notificaciones sin perder la función por completo.",
      ],
      legal: "Google Play y la App Store restringen la preparación de permisos y los disparadores de notificación engañosos. El DSA europeo y el AADC británico tratan el diseño compulsivo como riesgo sistémico que debe mitigarse, con deberes reforzados cuando hay menores.",
      faq: [
        {
          q: "¿Qué es la preparación de permisos?",
          a: "Una pantalla propia mostrada antes del diálogo del sistema, redactada para que conceder el permiso parezca social o funcionalmente necesario.",
        },
        {
          q: "¿Las notificaciones push son un patrón oscuro?",
          a: "No por naturaleza. Lo son cuando se diseñan para reenganchar en lugar de para informar de algo que el usuario pidió.",
        },
        {
          q: "¿Por qué el móvil amplifica estos patrones?",
          a: "Porque el dispositivo siempre está presente, la respuesta es inmediata y el coste de interacción es mover el pulgar. La frecuencia hace el resto.",
        },
      ],
    },
  },
  "trust-and-authority-abuse": {
    en: {
      heading: "Trust and Authority Abuse Dark Patterns",
      intro: [
        "Trust and authority abuse dresses a commercial claim in institutional clothing. A badge that looks like a certification. A countdown attributed to \"high demand\" with no data behind it. A recommendation labelled \"AI-powered\" so that it inherits the neutrality people still grant to machines.",
        "The pattern is not necessarily a false statement. It is an unearned inference. The interface implies verification, expertise or consensus, and the implied source is never named, auditable, or accountable. That is why it is especially effective in categories where the buyer cannot evaluate the claim: health, finance, legal, hiring.",
      ],
      howToSpot: [
        "Ask who issued the badge and follow the link, if there is one.",
        "Check whether the \"AI recommendation\" discloses paid placement.",
        "See whether the authority is the vendor itself wearing a lab coat.",
      ],
      legal: "Unsubstantiated professional claims and misleading endorsement language fall under the EU unfair commercial practices rules and FTC deception standards. The EU AI Act adds transparency duties for AI-generated recommendations and synthetic content in consumer contexts.",
      faq: [
        {
          q: "What is authority washing?",
          a: "Borrowing the visual or verbal signals of expertise — badges, certificates, AI labels — to make a commercial suggestion appear independently verified.",
        },
        {
          q: "Is an AI recommendation a dark pattern?",
          a: "Only when the label is used to imply objectivity while the ranking is driven by commercial placement or undisclosed criteria.",
        },
        {
          q: "Why is this pattern common in health and finance?",
          a: "Because the buyer lacks the expertise to evaluate the claim, so authority signals substitute for evidence more effectively there than anywhere else.",
        },
      ],
    },
    es: {
      heading: "Patrones oscuros de abuso de confianza y autoridad",
      intro: [
        "El abuso de confianza y autoridad viste una afirmación comercial con ropa institucional. Un badge que parece una certificación. Una cuenta atrás atribuida a «alta demanda» sin datos detrás. Una recomendación etiquetada como «impulsada por IA» para heredar la neutralidad que todavía se concede a las máquinas.",
        "El patrón no es necesariamente una afirmación falsa. Es una inferencia no ganada. La interfaz implica verificación, pericia o consenso, y la fuente implícita nunca se nombra, no es auditable ni responde de nada. Por eso funciona especialmente en categorías donde el comprador no puede evaluar la afirmación: salud, finanzas, legal, selección de personal.",
      ],
      howToSpot: [
        "Pregunta quién emitió el badge y sigue el enlace, si existe.",
        "Comprueba si la «recomendación de IA» declara colocación pagada.",
        "Mira si la autoridad es el propio vendedor con bata de laboratorio.",
      ],
      legal: "Las afirmaciones profesionales no sustanciadas y el lenguaje de aval engañoso caen bajo las normas europeas de prácticas desleales y los estándares de engaño de la FTC. El Reglamento europeo de IA añade deberes de transparencia para recomendaciones generadas por IA y contenido sintético en contextos de consumo.",
      faq: [
        {
          q: "¿Qué es el lavado de autoridad?",
          a: "Tomar prestadas las señales visuales o verbales de la pericia —badges, certificados, etiquetas de IA— para que una sugerencia comercial parezca verificada de forma independiente.",
        },
        {
          q: "¿Una recomendación de IA es un patrón oscuro?",
          a: "Solo cuando la etiqueta se usa para implicar objetividad mientras el ranking lo determina la colocación comercial o criterios no declarados.",
        },
        {
          q: "¿Por qué es común en salud y finanzas?",
          a: "Porque el comprador carece de la pericia para evaluar la afirmación, así que las señales de autoridad sustituyen a la evidencia con más eficacia que en cualquier otro sitio.",
        },
      ],
    },
  },
};
