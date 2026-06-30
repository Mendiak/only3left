import type { Category, Pattern } from "@/lib/types";

export type Locale = "en" | "es";

export const ui = {
  en: {
    patterns: "Patterns",
    categories: "Categories",
    about: "About",
    random: "Random",
    explorePatterns: "Explore Patterns",
    randomManipulation: "Random Manipulation",
    featuredPatterns: "Featured Patterns",
    visualExample: "Visual Example",
    visualExampleIntro: "A simplified specimen designed to make the pattern recognizable at a glance.",
    whatIsIt: "What is it?",
    howItWorks: "How it works",
    psychology: "Psychology",
    realWorldExample: "Real World Example",
    ethicalAlternative: "Ethical Alternative",
    toxicityMeter: "Toxicity Meter",
    origin: "Origin",
    built: "Built for educational purposes.",
    heroSubtitle: "A field guide to deceptive UX.",
    heroText: "An interactive catalogue of techniques used to influence user decisions online.",
    catalogueIntro: "A working archive of interface tactics that pressure, obscure, distract, or quietly preselect.",
    heroTagline: "Digital museum of regrettable persuasion",
    specimenLabel: "Live specimen",
    specimenCaption: "ethically contained",
    specimenTitle: "Only 3 left",
    specimenDesc: "This warning has been preserved in its natural habitat.",
    specimenUrgency: "Urgency",
    specimenFomo: "FOMO",
    specimenDoubt: "Doubt",
    peopleViewing: "people viewing this",
    roomsLeft: "Only 3 rooms left",
    bookNow: "Book now",
  },
  es: {
    patterns: "Patrones",
    categories: "Categorías",
    about: "Acerca",
    random: "Aleatorio",
    explorePatterns: "Explorar patrones",
    randomManipulation: "Manipulación aleatoria",
    featuredPatterns: "Patrones destacados",
    visualExample: "Ejemplo visual",
    visualExampleIntro: "Un espécimen simplificado diseñado para reconocer el patrón de un vistazo.",
    whatIsIt: "¿Qué es?",
    howItWorks: "Cómo funciona",
    psychology: "Psicología",
    realWorldExample: "Ejemplo real",
    ethicalAlternative: "Alternativa ética",
    toxicityMeter: "Medidor de toxicidad",
    origin: "Origen",
    built: "Creado con fines educativos.",
    heroSubtitle: "Una guía de campo sobre UX engañosa.",
    heroText: "Un catálogo interactivo de técnicas usadas para influir en las decisiones de usuarios online.",
    catalogueIntro: "Un archivo de tácticas de interfaz que presionan, ocultan, distraen o preseleccionan en silencio.",
    heroTagline: "Museo digital de persuasión cuestionable",
    specimenLabel: "Espécimen vivo",
    specimenCaption: "éticamente contenido",
    specimenTitle: "Solo quedan 3",
    specimenDesc: "Este aviso se ha conservado en su hábitat natural.",
    specimenUrgency: "Urgencia",
    specimenFomo: "FOMO",
    specimenDoubt: "Duda",
    peopleViewing: "personas viendo esto",
    roomsLeft: "Solo quedan 3 habitaciones",
    bookNow: "Reservar ahora",
  },
} as const;

const categoryEs: Record<string, string> = {
  "Urgency & Scarcity": "Urgencia y escasez",
  "Pricing Manipulation": "Manipulación de precios",
  "Subscription Traps": "Trampas de suscripción",
  "Interface Manipulation": "Manipulación de interfaz",
  "Privacy Manipulation": "Manipulación de privacidad",
  "Social Engineering": "Ingeniería social",
  "Attention Capture": "Captura de atención",
  "Gamification Abuse": "Abuso de gamificación",
  "Mobile Addiction": "Adicción móvil",
  "Trust & Authority Abuse": "Abuso de confianza y autoridad",
};

const categoryDescriptionEs: Record<string, string> = {
  "Urgency & Scarcity": "Tácticas que comprimen la deliberación en un clic nervioso.",
  "Pricing Manipulation": "Tablas, anclas, tasas y opciones por defecto que dificultan la comparación.",
  "Subscription Traps": "Flujos donde comprometerse parece ligero y cancelar parece administrativo.",
  "Interface Manipulation": "Decisiones visuales que guían la atención mientras aparentan neutralidad.",
  "Privacy Manipulation": "Experiencias de consentimiento donde la privacidad existe, técnicamente, en algún sótano.",
  "Social Engineering": "Credibilidad prestada, señales de masa y culpa envueltas en copy de producto.",
  "Attention Capture": "Bucles diseñados para que la siguiente acción esté siempre demasiado cerca.",
  "Gamification Abuse": "Recompensas, rachas y progreso usados cuando dejan de servir al usuario.",
  "Mobile Addiction": "Patrones nativos del móvil que convierten revisar en reflejo.",
  "Trust & Authority Abuse": "Badges, reseñas y autoridad desplegados más allá de la evidencia.",
};

const psychologyEs: Record<string, string> = {
  "Loss Aversion": "Aversión a la pérdida",
  FOMO: "FOMO",
  "Cognitive Load": "Carga cognitiva",
  "Social Proof": "Prueba social",
  Anchoring: "Anclaje",
  "Commitment Bias": "Sesgo de compromiso",
  "Default Bias": "Sesgo por defecto",
  "Variable Reward": "Recompensa variable",
  Reciprocity: "Reciprocidad",
};

const toxicityEs: Record<Pattern["severity"], string> = {
  1: "Empujón leve",
  2: "Cuestionable",
  3: "Manipulador",
  4: "Hostil",
  5: "Radiactivo",
};

const patternEs: Record<string, Partial<Pattern>> = {
  "fake-scarcity": {
    title: "Escasez falsa",
    summary: "Solo quedan 3 habitaciones. Supuestamente. Convenientemente. Siempre.",
    description: "Afirma que un producto, plaza u oferta casi se agota sin hacer que esa limitación sea verificable o relevante.",
    ethicalAlternative: "Muestra inventario real, explica por qué es limitado y elimina la presión cuando el número no es accionable.",
    examples: ["Solo quedan 3 a este precio.", "14 personas están viendo este artículo ahora mismo."],
    origin: "Reservas de viajes, ecommerce, ticketing e interfaces de ventas flash.",
  },
  "countdown-reset": {
    title: "Cuenta atrás que se reinicia",
    summary: "El contador llega a cero, saluda discretamente y vuelve a empezar.",
    description: "Presenta una fecha límite como decisiva, aunque la misma oferta sigue disponible después o reaparece al recargar.",
    ethicalAlternative: "Usa plazos reales, muestra condiciones claras y deja que las promociones caducadas caduquen de verdad.",
    examples: ["Oferta expira en 04:59.", "Recarga la página y el mismo plazo exclusivo vuelve a aparecer."],
    origin: "Páginas de oferta limitada, embudos de webinar y overlays de checkout.",
  },
  confirmshaming: {
    title: "Confirmshaming",
    summary: "No gracias, odio ahorrar dinero.",
    description: "Redacta la acción de rechazo para culpar, ridiculizar o avergonzar al usuario por una decisión legítima.",
    ethicalAlternative: "Etiqueta las acciones de rechazo de forma neutral y respeta la decisión sin comentario editorial.",
    examples: ["No, prefiero pagar el precio completo.", "No me importa mi salud."],
    origin: "Modales de newsletter, cupones de ecommerce y popups de captación de leads.",
  },
  "roach-motel": {
    title: "Roach Motel",
    summary: "Entrar es fácil. Salir requiere una pequeña ceremonia administrativa.",
    description: "Hace que suscribirse o comprar sea simple, mientras cancelar exige rutas ocultas, llamadas o pantallas de retención.",
    ethicalAlternative: "Haz que cancelar sea tan sencillo como darse de alta y confirma el resultado de inmediato.",
    examples: ["Suscríbete en un clic, cancela por teléfono en espera.", "El enlace de cancelación está enterrado tras pantallas de retención."],
    origin: "Software por suscripción, gimnasios, servicios de streaming y programas de membresía.",
  },
  "decoy-pricing": {
    title: "Precio señuelo",
    summary: "Un plan existe sobre todo para que otro parezca razonable.",
    description: "Una opción deliberadamente poco atractiva ancla la comparación y empuja hacia el plan objetivo.",
    ethicalAlternative: "Diseña planes según necesidades reales y muestra las diferencias sin anclas artificiales.",
    examples: ["Básico por 5, Pro por 19, Ultra por 199.", "Un plan solo en papel empuja a los usuarios hacia el bundle."],
    origin: "Tablas de precios SaaS, suscripciones de medios y paquetes de producto.",
  },
  "hidden-cancellation": {
    title: "Cancelación oculta",
    summary: "Cancelar existe, en el mismo sentido en que existe una puerta secreta.",
    description: "La cancelación es posible, pero se esconde tras etiquetas vagas, ajustes anidados o soporte obligatorio.",
    ethicalAlternative: "Coloca la cancelación en ajustes de cuenta con etiquetas directas y consecuencias claras.",
    examples: ["Gestionar plan esconde la cancelación a tres pantallas de profundidad.", "El artículo de ayuda menciona un botón que no existe."],
    origin: "Suscripciones de consumo, pruebas y paneles de cuenta.",
  },
  "forced-continuity": {
    title: "Continuidad forzada",
    summary: "La prueba gratuita termina en silencio; la factura habla claro.",
    description: "Una prueba se convierte en suscripción de pago sin recordatorios suficientes ni salida sencilla.",
    ethicalAlternative: "Envía recordatorios claros, muestra fechas de cobro y ofrece pruebas sin tarjeta cuando sea razonable.",
    examples: ["Empieza gratis, facturado anualmente tras siete días.", "Los correos de aviso brillan por su ausencia o parecen publicidad."],
    origin: "Streaming, pruebas de software, plataformas educativas y apps de consumo.",
  },
  "privacy-zuckering": {
    title: "Privacy Zuckering",
    summary: "Compartir más de lo previsto, con excelente confeti de onboarding.",
    description: "La interfaz empuja a revelar datos personales o permisos que el usuario no entiende del todo.",
    ethicalAlternative: "Pide datos en el momento necesario, explica el beneficio y usa la opción más privada por defecto.",
    examples: ["Encontrar amigos requiere acceso amplio a contactos.", "La visibilidad del perfil se vuelve pública por defecto tras la configuración."],
    origin: "Productos sociales, onboarding móvil y apps de consumo con muchos datos.",
  },
  "cookie-labyrinth": {
    title: "Laberinto de cookies",
    summary: "Aceptar es un botón. Rechazar es una oposición administrativa.",
    description: "Los controles de cookies hacen que rechazar o granular el consentimiento sea mucho más costoso que aceptar.",
    ethicalAlternative: "Ofrece aceptar y rechazar con el mismo peso visual, más ajustes granulares opcionales.",
    examples: ["Aceptar todo es inmediato; gestionar abre diecisiete interruptores.", "Rechazar todo está oculto tras el scroll o entre categorías."],
    origin: "Banners de cookies, plataformas de gestión de consentimiento y sitios con publicidad.",
  },
  "social-proof-inflation": {
    title: "Inflación de prueba social",
    summary: "Todo el mundo lo está comprando. Al parecer, todo el mundo tiene la tarde ocupada.",
    description: "Exagera, simula o descontextualiza señales de popularidad para crear una confianza que los datos no sostienen.",
    ethicalAlternative: "Usa señales específicas, recientes y verificables; evita afirmar popularidad cuando el dato es débil.",
    examples: ["4.812 personas compraron esto hoy.", "Tendencia en tu zona, sin fuente ni periodo de referencia."],
    origin: "Marketplaces, sitios de viajes, crowdfunding y ecommerce.",
  },
  "visual-hierarchy-manipulation": {
    title: "Manipulación de jerarquía visual",
    summary: "El botón preferido es una catedral; la alternativa, una nota al pie.",
    description: "Color, tamaño, contraste y posición hacen que una opción parezca natural y la otra difícil de percibir.",
    ethicalAlternative: "Da visibilidad comparable a decisiones materialmente distintas y usa etiquetas claras.",
    examples: ["Aceptar todo es grande y brillante; rechazar es un enlace gris y pequeño.", "La opción de pago se presenta visualmente como un progreso."],
    origin: "Diálogos de consentimiento, pantallas de mejora, flujos de pago y onboarding.",
  },
  "infinite-scroll": {
    title: "Scroll infinito",
    summary: "Una página sin fondo, ahora con negación plausible.",
    description: "El contenido carga sin interrupción, de modo que parar exige más esfuerzo que continuar.",
    ethicalAlternative: "Añade puntos de parada, controles de sesión y formas de retomar de manera intencional.",
    examples: ["Los feeds añaden publicaciones nuevas al acercarse al final.", "Los puntos de parada se eliminan de las sesiones de navegación."],
    origin: "Redes sociales, plataformas de vídeo, parrillas de compras y apps de noticias.",
  },
  "notification-addiction": {
    title: "Adicción a notificaciones",
    summary: "Un punto rojo, la emergencia más pequeña posible.",
    description: "Badges, alertas y permisos push se afinan para crear revisión habitual más que interrupción significativa.",
    ethicalAlternative: "Agrupa avisos poco importantes, permite configurar intención y evita urgencia visual para eventos rutinarios.",
    examples: ["Aparece un badge para actualizaciones irrelevantes.", "Los avisos push enmarcan el rechazo como perderse algo."],
    origin: "Apps móviles, productos de mensajería, marketplaces y juegos.",
  },
  "default-bias": {
    title: "Sesgo por defecto",
    summary: "La opción por defecto no es neutral. Es una decisión con chaqueta discreta.",
    description: "Empuja hacia una opción seleccionada porque cambiarla requiere atención, esfuerzo o seguridad.",
    ethicalAlternative: "Usa opciones por defecto que protejan al usuario y exige elección activa en decisiones sensibles.",
    examples: ["Los correos promocionales vienen marcados por defecto.", "La facturación anual está preseleccionada en el selector de precio."],
    origin: "Formularios, páginas de pago, onboarding, ajustes de privacidad y selectores de plan.",
  },
  "preselected-options": {
    title: "Opciones preseleccionadas",
    summary: "La casilla ya estaba marcada cuando llegaste. Hospitalidad, quizá.",
    description: "Add-ons, permisos, upgrades o compromisos aparecen seleccionados antes de una elección activa.",
    ethicalAlternative: "Haz que costes y permisos opcionales sean opt-in, especialmente si afectan a privacidad o facturación.",
    examples: ["El seguro se añade a la cesta automáticamente.", "Una donación o propina aparece preseleccionada durante el pago."],
    origin: "Ticketing, viajes, checkout, flujos de donación y configuración móvil.",
  },
  "drip-pricing": {
    title: "Precio por goteo",
    summary: "El precio empieza educado y solo se vuelve honesto al final.",
    description: "Un precio inicial bajo va acumulando tasas obligatorias, cargos o costes de gestión durante el checkout.",
    ethicalAlternative: "Muestra desde el principio el precio total inevitable y explica los costes opcionales antes del compromiso.",
    examples: ["Un billete de 39€ se convierte en 61€ tras tasas de plataforma, gestión y entrega.", "Una tarifa de hotel excluye cargos obligatorios del resort hasta el pago."],
    origin: "Ticketing, viajes, entregas, plataformas de eventos y marketplaces.",
  },
  "sneak-into-basket": {
    title: "Colado en la cesta",
    summary: "Un extra aparece en el carrito con una confianza admirable.",
    description: "Se añade un producto, garantía, donación o servicio sin una elección activa y clara del usuario.",
    ethicalAlternative: "Exige opt-in explícito para todo extra de pago y haz que eliminarlo sea obvio.",
    examples: ["Una garantía aparece silenciosamente bajo el artículo principal.", "Una línea de donación aparece en la cesta a menos que se retire manualmente."],
    origin: "Ecommerce, checkout de viajes, electrónica y flujos de donación.",
  },
  "bait-and-switch": {
    title: "Cebo y cambio",
    summary: "El botón prometía una cosa. La pantalla siguiente tenía otros planes.",
    description: "Se induce a esperar un resultado y luego se entrega otra acción, oferta, precio o compromiso.",
    ethicalAlternative: "Haz explícito el resultado de cada acción y mantén la promesa en todos los pasos.",
    examples: ["Un botón de descarga abre un instalador con venta adicional.", "Una plantilla gratuita deriva a un paso de suscripción obligatorio."],
    origin: "Sitios de descarga, embudos de captación, productos de prueba y páginas de afiliados.",
  },
  "disguised-ads": {
    title: "Anuncios disfrazados",
    summary: "Un anuncio vestido con el uniforme local del contenido.",
    description: "Los espacios pagados se diseñan para parecer contenido editorial, resultados orgánicos o recomendaciones nativas.",
    ethicalAlternative: "Etiqueta los anuncios de forma prominente y distínguelos visualmente del contenido orgánico.",
    examples: ["Los resultados patrocinados usan el mismo diseño que los orgánicos.", "Una tarjeta de recomendación oculta su etiqueta de anuncio en bajo contraste."],
    origin: "Páginas de búsqueda, sitios de noticias, marketplaces, tiendas de apps y redes sociales.",
  },
  nagging: {
    title: "Insistencia repetitiva",
    summary: "La misma petición vuelve hasta que rechazar empieza a parecer trabajo.",
    description: "El producto interrumpe repetidamente con permisos, valoraciones, upsells o recordatorios ya rechazados.",
    ethicalAlternative: "Respeta los rechazos, aplica periodos de enfriamiento y permite reactivar prompts desde ajustes.",
    examples: ["Valóranos aparece después de cada inicio.", "Activar notificaciones vuelve a aparecer tras rechazarlo repetidamente."],
    origin: "Apps móviles, onboarding SaaS, juegos y apps de ecommerce.",
  },
  "trick-questions": {
    title: "Preguntas trampa",
    summary: "Un examen gramatical de checkboxes con consecuencias comerciales.",
    description: "Usa negativas, dobles negativas o condiciones confusas para provocar consentimiento accidental.",
    ethicalAlternative: "Usa redacción positiva y directa, separando cada decisión importante en un control claro.",
    examples: ["No desmarques esta casilla si no quieres perderte ofertas.", "No deseo renunciar a recibir actualizaciones seleccionadas."],
    origin: "Formularios de registro, consentimiento de marketing, flujos de pago y ajustes de cuenta.",
  },
  misdirection: {
    title: "Desvío de atención",
    summary: "La atención se escolta lejos de la parte que cuesta dinero.",
    description: "Diseño, movimiento o copy distraen de términos, costes o consecuencias importantes.",
    ethicalAlternative: "Da a la información material una prominencia comparable a los reclamos promocionales.",
    examples: ["Un descuento brillante domina la página mientras la factura recurrente es minúscula.", "Un mensaje de envío gratis distrae de una comisión oculta."],
    origin: "Checkout, páginas de precios, registro de suscripciones y landing pages promocionales.",
  },
  "comparison-prevention": {
    title: "Prevención de comparación",
    summary: "Tres planes, seis unidades y ninguna forma de comparar limpio.",
    description: "Precios, unidades o periodos se presentan de forma inconsistente para dificultar la comparación racional.",
    ethicalAlternative: "Muestra precios normalizados y unidades comparables junto a cada opción.",
    examples: ["Un plan es mensual, otro anual, otro por asiento.", "Los bundles mezclan almacenamiento, créditos, tokens y add-ons sin precios unitarios."],
    origin: "Precios SaaS, planes de telecomunicaciones, suscripciones, supermercados y servicios cloud.",
  },
  "fake-discount": {
    title: "Descuento falso",
    summary: "Una rebaja con una memoria muy creativa del precio original.",
    description: "El descuento se calcula sobre un precio inflado, raro o recientemente aumentado.",
    ethicalAlternative: "Usa precios de referencia honestos y explica durante cuánto tiempo se aplicaron.",
    examples: ["Antes 129€, ahora 59€, aunque la mayor parte del año se vende a 59€.", "Una oferta con cuenta atrás se repite cada semana con el mismo descuento."],
    origin: "Ecommerce, promociones minoristas, ofertas de viajes y cursos online.",
  },
  "fake-activity": {
    title: "Actividad falsa",
    summary: "Alguien de Bristol acaba de comprar exactamente esta ansiedad.",
    description: "Muestra compras, visitas o ubicaciones recientes simuladas, exageradas o irrelevantes.",
    ethicalAlternative: "Muestra actividad real, reciente y relevante solo cuando ayude a decidir.",
    examples: ["María de Lisboa acaba de reservar esta habitación.", "27 personas están viendo este producto ahora."],
    origin: "Widgets de reservas, popups de ecommerce, plataformas de cursos y páginas de recaudación.",
  },
  "friend-spam": {
    title: "Spam a contactos",
    summary: "Tu agenda se convierte en estrategia de crecimiento.",
    description: "Pide acceso a contactos y luego empuja invitaciones o mensajes que el usuario no pretendía enviar.",
    ethicalAlternative: "Pide confirmación por cada invitación, previsualiza destinatarios y nunca envíes por defecto.",
    examples: ["Importar contactos envía invitaciones por defecto.", "Un flujo de referidos preselecciona todos los contactos."],
    origin: "Redes sociales, programas de referidos, apps de productividad y onboarding móvil.",
  },
  "permission-priming": {
    title: "Preparación del permiso",
    summary: "La app pregunta emocionalmente antes de que el sistema pregunte seriamente.",
    description: "Un aviso previo enmarca un permiso antes del diálogo real del sistema, haciendo que rechazar parezca negativo.",
    ethicalAlternative: "Pide permisos en el momento de necesidad y explica consecuencias funcionales sin presión.",
    examples: ["Activa la ubicación para hacer la comunidad más segura.", "Permite notificaciones para no decepcionar a tu equipo."],
    origin: "Onboarding móvil, apps sociales, productos de delivery y herramientas de productividad.",
  },
  "forced-registration": {
    title: "Registro forzado",
    summary: "El contenido se ve justo hasta que se convierte en cebo.",
    description: "Exige crear cuenta antes de completar una tarea que podría hacerse como invitado.",
    ethicalAlternative: "Ofrece flujos de invitado y explica beneficios de la cuenta sin imponerla por sorpresa.",
    examples: ["El pago requiere una cuenta después de llenar la cesta.", "Un artículo público revela un muro de registro a mitad de lectura."],
    origin: "Ecommerce, sitios de medios, reservas de viajes y marketplaces.",
  },
  "autoplay-trap": {
    title: "Trampa de autoplay",
    summary: "El siguiente vídeo empieza antes de que la intención se calce los zapatos.",
    description: "El contenido continúa automáticamente, eliminando puntos naturales de parada.",
    ethicalAlternative: "Haz el autoplay opcional, muestra señales de parada y recuerda preferencias.",
    examples: ["El siguiente episodio empieza en cinco segundos.", "Los vídeos cortos continúan sin un estado de pausa claro."],
    origin: "Plataformas de vídeo, productos de streaming, redes sociales y sitios de noticias.",
  },
  "streak-pressure": {
    title: "Presión de racha",
    summary: "Un hábito se convierte en una pequeña situación de rehenes.",
    description: "Rachas, badges o contadores crean ansiedad por perder continuidad aunque seguir no aporte valor real.",
    ethicalAlternative: "Usa rachas como reflexión opcional y evita castigar descansos o vender alivio de culpa.",
    examples: ["No pierdas tu racha de 186 días.", "Paga por reparar un día perdido."],
    origin: "Apps de aprendizaje, productos de fitness, juegos, herramientas de productividad y apps de bienestar.",
  },
  "paywall-tease": {
    title: "Cebo de paywall",
    summary: "La respuesta está siempre un párrafo por debajo del muro de pago.",
    description: "Muestra suficiente contenido para crear compromiso y bloquea el valor clave tras registro o pago.",
    ethicalAlternative: "Declara límites de acceso al principio y marca contenido premium antes de invertir tiempo.",
    examples: ["Una receta esconde las cantidades tras la introducción.", "Un artículo comparativo revela el veredicto solo tras el registro."],
    origin: "Medios, sitios de recetas, plataformas educativas y bases de datos de investigación.",
  },
  "anchored-bundling": {
    title: "Bundle anclado",
    summary: "El paquete parece una ganga porque los precios sueltos fueron colocados para saludarlo.",
    description: "Los productos individuales se muestran o precian para que el bundle parezca superior aunque el usuario solo necesite una parte.",
    ethicalAlternative: "Muestra valor realista por separado y permite comparar necesidades reales sin convertir funciones no usadas en ahorro.",
    examples: ["Tres herramientas cuestan 18€ cada una, o 29€ en un bundle que quizá no necesitas.", "El bundle se presenta como un ahorro del 65% sobre precios de componentes inflados."],
    origin: "Suites SaaS, herramientas para creadores, kits de ecommerce y paquetes de telecomunicaciones.",
  },
  "review-gating": {
    title: "Filtrado de reseñas",
    summary: "Los usuarios felices van a público. Los infelices, a un formulario privado con buena acústica.",
    description: "Dirige a clientes satisfechos a reseñas públicas y a clientes descontentos a canales privados.",
    ethicalAlternative: "Invita a reseñar de forma consistente y haz que la reputación pública sea representativa.",
    examples: ["A los que puntúan con 5 estrellas se les pide reseña pública.", "A los de baja puntuación se les envía a un formulario interno."],
    origin: "Servicios locales, tiendas de apps, marketplaces, reservas sanitarias y widgets de reseñas.",
  },
  "loyalty-lock-in": {
    title: "Encierro por fidelización",
    summary: "Puntos que parecen dinero hasta que intentas irte.",
    description: "Puntos, niveles o créditos hacen que abandonar parezca perder valor acumulado.",
    ethicalAlternative: "Haz las recompensas fáciles de canjear, evita caducidades punitivas y conserva valor claro.",
    examples: ["Tienes 940 puntos, pero las recompensas empiezan en 1.000.", "Los créditos caducan a menos que hagas otra compra este mes."],
    origin: "Programas de fidelización minoristas, aerolíneas, apps de delivery, juegos y suscripciones.",
  },
  "scarcity-ladder": {
    title: "Escalera de escasez",
    summary: "Primero popular. Luego limitado. Luego casi agotado. Una pequeña ópera en tres badges.",
    description: "Escala la presión con mensajes sucesivos de demanda, límite e inventario bajo.",
    ethicalAlternative: "Usa una señal de disponibilidad real cuando sea relevante y evita apilar indicadores de presión.",
    examples: ["Elección popular se convierte en stock limitado, luego solo queda uno.", "Un checkout muestra advertencias de demanda, plazo e inventario juntas."],
    origin: "Reservas de viajes, ecommerce, ticketing, lanzamientos de cursos y ventas flash.",
  },
  "ai-authority-washing": {
    title: "Lavado de autoridad con IA",
    summary: "La interfaz dice que lo recomendó la IA y espera que eso suene a evidencia.",
    description: "Invoca IA, algoritmos o personalización para que una opción parezca objetiva o experta sin explicar la base.",
    ethicalAlternative: "Explica criterios de recomendación, declara influencia comercial y permite comparar alternativas.",
    examples: ["Recomendado por IA aparece junto al plan más caro.", "Una puntuación de caja negra clasifica un upsell como lo mejor para ti."],
    origin: "Precios SaaS, recomendaciones de ecommerce, fintech, herramientas de contratación y apps de salud.",
  },
  "negative-option-billing": {
    title: "Facturación por opción negativa",
    summary: "El silencio se interpreta como un sí legalmente facturable.",
    description: "El usuario queda inscrito o renovado salvo que haga opt-out dentro de una ventana fácil de perder.",
    ethicalAlternative: "Exige consentimiento afirmativo para cobrar y envía recordatorios claros antes de renovar.",
    examples: ["La membresía se renueva a menos que se cancele antes de una fecha límite enterrada.", "Una extensión de prueba se vuelve de pago a menos que se rechace."],
    origin: "Clubes de membresía, cajas de suscripción, renovaciones de software y programas de prueba.",
  },
  "survey-to-sales-funnel": {
    title: "Encuesta convertida en embudo",
    summary: "Empieza como quiz y termina como checkout con confianza diagnóstica.",
    description: "Una encuesta recoge intención y convierte el resultado en una razón personalizada para comprar.",
    ethicalAlternative: "Separa evaluación real de presión comercial y explica cómo se generan las recomendaciones.",
    examples: ["Un cuestionario de piel recomienda el pack premium.", "Una evaluación de productividad termina con una oferta de plan limitado."],
    origin: "Bienestar, educación, belleza, productividad y embudos de coaching.",
  },
  "visual-obstruction": {
    title: "Obstrucción visual",
    summary: "El control importante existe detrás de una barra sticky o entusiasmo convenientemente colocado.",
    description: "Un banner, overlay o widget bloquea contenido o controles, haciendo más fácil la acción comercial que descartarlo.",
    ethicalAlternative: "Mantén controles críticos accesibles y haz que los overlays sean descartables, proporcionales y accesibles.",
    examples: ["Un banner sticky de instalación de app tapa el botón de rechazar.", "Un widget de chat superpone el enlace de cancelación."],
    origin: "Web móvil, ecommerce, widgets de soporte, avisos de instalación de app y banners de cookies.",
  },
  "like-gating": {
    title: "Like-gating",
    summary: "Toca dos veces para revelar. Ahora toca otra vez. Y otra.",
    description: "El contenido, funcionalidad o información se bloquean tras un like, compartir, seguir o comentario requerido. Cada barrera de interacción reduce la fricción de la siguiente, convirtiendo el consumo pasivo en promoción activa.",
    ethicalAlternative: "Muestra el contenido libremente y deja que el usuario interactúe porque encuentra valor, no porque la interfaz lo secuestra tras una transacción.",
    examples: ["Toca el corazón para revelar la respuesta.", "Comparte con 3 amigos para desbloquear la guía completa.", "Sigue para seguir leyendo este hilo."],
    origin: "Redes sociales, sitios de recetas, plataformas de cuestionarios y embudos de marketing de contenido.",
  },
  "validation-loop": {
    title: "Bucle de validación",
    summary: "Llega un like. Luego otro. Luego uno de hace tres horas. Dopamina a goteo.",
    description: "Las notificaciones de reacciones (likes, corazones, votos) se entregan en un esquema de recompensa variable para crear un hábito de revisión compulsiva. Cada notificación es una recompensa social programada para arrastrar al usuario de vuelta a la app.",
    ethicalAlternative: "Agrupa las notificaciones, permite elegir la frecuencia de entrega y evita programar las recompensas para maximizar las visitas.",
    examples: ["Tu foto recibió 14 nuevos likes.", "X y 7 más les gusta tu comentario.", "Las notificaciones llegan horas después del engagement para reengancharte."],
    origin: "Redes sociales, apps de citas, plataformas de contenido y productos comunitarios.",
  },
  "reaction-pressure": {
    title: "Presión de reacción",
    summary: "1 like = 1 oración. 1 compartir = 1 árbol. Las matemáticas son emocionales, no financieras.",
    description: "Mensajes emocionales enmarcan las reacciones como actos morales, benéficos o de apoyo, haciendo que el usuario se sienta culpable si no participa. El botón de reacción se convierte en una obligación social.",
    ethicalAlternative: "Deja que los usuarios reaccionen de forma natural sin presión emocional. Apoya causas de forma transparente sin vincular el impacto a métricas de engagement.",
    examples: ["1 like = 1€ donado a agua potable.", "Dale like si crees que esto es inaceptable.", "Comparte para demostrar que te importa."],
    origin: "Facebook, Instagram, TikTok, Twitter/X y campañas benéficas.",
  },
  "hard-to-close": {
    title: "Difícil de cerrar",
    summary: "El botón de cerrar existe. Técnicamente. A 7 píxeles. En bajo contraste.",
    description: "Un modal, ventana emergente u overlay hace que la acción de descartar sea deliberadamente difícil de encontrar o clicar — objetivo minúsculo, contraste bajo, fuera del viewport o escondido tras animación.",
    ethicalAlternative: "Haz que los botones de cerrar midan al menos 44×44 px, tengan alto contraste y estén colocados en una ubicación predecible.",
    examples: ["Un modal de newsletter coloca la X en gris bajo contraste fuera del área visible en móvil.", "Un banner de cookies no ofrece botón de cierre, solo un texto minúsculo entre párrafos."],
    origin: "Popups de newsletter, banners de cookies, intersticiales de instalación de app y overlays de ecommerce.",
  },
  "live-activity-indicator": {
    title: "Indicador de actividad en vivo",
    summary: "Un punto verde. Un número. Un pulso. Alguien, en algún lugar, está mirando. Quizá.",
    description: "Un indicador en vivo — normalmente un punto pulsante, un número rotatorio o un contador animado — afirma mostrar actividad en tiempo real (visitas, compras, registros) de otros usuarios. La señal está diseñada para sentirse inmediata y social, pero los datos suelen ser simulados, promediados, retrasados o imposibles de verificar. La animación crea una sensación de impulso que hace que la inacción se sienta como una pérdida.",
    ethicalAlternative: "Muestra datos de actividad verificables con marca de tiempo cuando estén disponibles. Evita animaciones que impliquen urgencia sin sustento. Si usas estadísticas agregadas, etiquétalas claramente como promedios o totales.",
    examples: [
      "Un punto verde pulsante junto a '14 personas están viendo esto' en un sitio de reservas.",
      "Contador '5 personas compraron esto en la última hora' que se reinicia a diario sin importar las ventas reales.",
      "Barra de notificaciones con scroll: 'Sara de Madrid acaba de comprar...' con nombres inventados.",
      "Un contador de visitantes en tiempo real en una landing page que muestra el mismo número en cada visita.",
    ],
    origin: "Reservas de viajes, ecommerce, landing pages SaaS, embudos de webinar y plataformas de donación.",
  },
};

export function isSpanish(locale: Locale) {
  return locale === "es";
}

export function localizeCategory(category: string, locale: Locale) {
  return locale === "es" ? categoryEs[category] ?? category : category;
}

export function localizeCategoryData(category: Category, locale: Locale): Category {
  if (locale === "en") {
    return category;
  }

  return {
    ...category,
    title: localizeCategory(category.title, locale),
    description: categoryDescriptionEs[category.title] ?? category.description,
  };
}

export function localizePsychology(value: string, locale: Locale) {
  return locale === "es" ? psychologyEs[value] ?? value : value;
}

export function localizeToxicity(severity: Pattern["severity"], locale: Locale) {
  return locale === "es" ? toxicityEs[severity] : undefined;
}

export function localizePattern(pattern: Pattern, locale: Locale): Pattern {
  if (locale === "en") {
    return pattern;
  }

  const translated = patternEs[pattern.slug] ?? {};

  return {
    ...pattern,
    ...translated,
    category: localizeCategory(pattern.category, locale),
    psychology: pattern.psychology.map((item) => localizePsychology(item, locale)),
  };
}

export function localePath(locale: Locale, path: string) {
  if (locale === "en") {
    return path;
  }

  return `/es${path === "/" ? "" : path}`;
}
