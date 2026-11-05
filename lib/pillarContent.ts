import type { Locale } from "@/lib/i18n";
import type { ReferenceId } from "@/lib/references";

export type PillarSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type PillarContent = {
  h1: string;
  description: string;
  intro: string[];
  sections: PillarSection[];
  faq: { q: string; a: string }[];
  references: ReferenceId[];
};

export const pillarContent: Record<Locale, PillarContent> = {
  en: {
    h1: "What Are Dark Patterns? Definition, Types and Examples",
    description:
      "A dark pattern is an interface designed to make you choose something you would not have chosen freely. Definition, the ten categories, real examples and the law.",
    intro: [
      "A dark pattern is a user interface designed to make a person do something they would not have done if the choice had been presented honestly. The phrase was coined by the UX designer Harry Brignull in 2010, when he started cataloguing manipulative interfaces under the name deceptive.design. The definition has survived fifteen years of redesigns because the mechanism has not changed: move the cost of a decision out of sight, and the decision moves.",
      "Dark patterns are not bad copywriting and they are not simply persuasive design. Persuasion offers reasons; a dark pattern removes them, buries them, or makes acting on them expensive. That distinction matters legally, because most consumer-protection frameworks turn on whether a practice materially distorts the consumer's ability to make an informed choice.",
    ],
    sections: [
      {
        heading: "The ten categories",
        paragraphs: [
          "Patterns cluster by what they exploit. This catalogue sorts them into ten families, each with its own page and examples:",
        ],
        bullets: [
          "Urgency and scarcity — fabricated deadlines, invented stock levels, resetting countdowns.",
          "Pricing manipulation — decoy plans, drip-priced fees, pre-checked add-ons.",
          "Subscription traps — hidden cancellation, forced continuity, negative-option billing.",
          "Interface manipulation — visual hierarchy, obstruction, disguised ads, bait and switch.",
          "Privacy manipulation — cookie labyrinths, permission priming, privacy-hostile defaults.",
          "Social engineering — confirmshaming, inflated social proof, fake activity, review gating.",
          "Attention capture — infinite scroll, autoplay, notification badges engineered for return visits.",
          "Gamification abuse — streaks that punish absence, paid streak repair, unrecoverable progress.",
          "Mobile addiction — permission priming on phones, re-engagement notifications, compulsive loops.",
          "Trust and authority abuse — unearned badges, AI-washed recommendations, borrowed institutional credibility.",
        ],
      },
      {
        heading: "How to recognise one",
        paragraphs: [
          "There is a single counterfactual test that catches most of them: if both options were displayed with the same size, contrast, wording and effort, would your choice change? If yes, the interface is doing work it does not disclose. The test works because dark patterns almost always depend on asymmetry — of clicks, of attention, of minutes, or of social pressure.",
          "A second useful test is the subtraction test. Remove the timer, the badge, the counter, the pre-selected box. Does the offer still make sense on its own merits? If the offer collapses when the pressure is removed, the pressure was the product.",
        ],
      },
      {
        heading: "Why they work",
        paragraphs: [
          "Dark patterns do not bypass reasoning; they arrive first. Loss aversion makes a fake deadline feel like a real risk. Default bias means a pre-ticked box is accepted unless actively refused, and refusing costs a decision. Cognitive load turns a seventeen-toggle consent panel into a shrug. Social proof converts a stranger's purchase into evidence.",
          "Because these effects are pre-reflective, knowing about them offers limited protection. Studies on dark patterns find that even informed users make the intended choice when the friction is asymmetric. That is why regulation focuses on the design rather than on consumer education.",
        ],
      },
      {
        heading: "Are dark patterns illegal?",
        paragraphs: [
          "Increasingly, yes — though the answer depends on jurisdiction and on whether the practice is deceptive. In the European Union, the Unfair Commercial Practices Directive bans misleading and aggressive practices, and the Digital Services Act explicitly prohibits dark patterns on regulated online platforms. The Digital Markets Act requires consent to be as easy to refuse as to give. The EU AI Act adds transparency duties where recommendations are presented as automated or objective.",
          "In the United States, the Federal Trade Commission acts under Section 5 of the FTC Act against deceptive practices, and its click-to-cancel rule targets subscription traps directly. In the United Kingdom, the Competition and Markets Authority has secured undertakings from several large retailers over urgency claims and drip pricing.",
          "Not every pattern is illegal. Confirmshaming is usually lawful but unpleasant. A fake countdown is usually both unlawful and unpleasant. The line runs through whether a reasonable person would be misled about something material.",
        ],
      },
      {
        heading: "What to do when you find one",
        paragraphs: [
          "Document it before you close the tab: a screenshot with the timestamp, the URL, and the exact wording of the claim. If the claim is a deadline or a stock count, refresh the page and capture the second state too — the mismatch is the evidence.",
          "Then report it. In the EU, national consumer authorities accept complaints under the Unfair Commercial Practices Directive. In the US, the FTC takes reports at ReportFraud.ftc.gov. Regulators build cases from patterns of complaints, and the screenshots are what make a case possible.",
          "If you build interfaces, the ethical alternative is usually less expensive than it looks: show the real number, allow the real deadline to expire, and give the secondary action the same size and contrast as the primary one. The catalogue has a specific alternative for every pattern it documents.",
        ],
      },
    ],
    faq: [
      {
        q: "Who coined the term dark patterns?",
        a: "The UX designer Harry Brignull coined it in 2010 and published the first public catalogue of deceptive interfaces at deceptive.design.",
      },
      {
        q: "Are dark patterns the same as persuasive design?",
        a: "No. Persuasive design offers reasons and preserves the ability to choose otherwise. Dark patterns remove, bury or price out that ability.",
      },
      {
        q: "How many types of dark patterns are there?",
        a: "There is no fixed number. This catalogue documents 46 named patterns grouped into ten categories, which covers the mechanisms most commonly observed in consumer products.",
      },
      {
        q: "Do dark patterns actually work on people who know about them?",
        a: "Yes, in most experimental settings. The effects are pre-reflective and asymmetric, so awareness reduces but does not eliminate the influence.",
      },
    ],
    references: ["brignull", "wikipediaEn", "ftc", "ucpd", "dsa", "dma", "aiAct", "edpb", "cma", "oecd", "mathur2019", "gray2018"],
  },
  es: {
    h1: "¿Qué son los patrones oscuros? Definición, tipos y ejemplos",
    description:
      "Un patrón oscuro es una interfaz diseñada para que elijas algo que no habrías elegido libremente. Definición, las diez categorías, ejemplos reales y qué dice la ley.",
    intro: [
      "Un patrón oscuro es una interfaz diseñada para que una persona haga algo que no habría hecho si la elección se hubiera presentado con honestidad. El término lo acuñó el diseñador de UX Harry Brignull en 2010, cuando empezó a catalogar interfaces manipuladoras bajo el nombre deceptive.design. La definición ha sobrevivido a quince años de rediseños porque el mecanismo no ha cambiado: saca el coste de una decisión de la vista y la decisión se mueve.",
      "Los patrones oscuros no son mala redacción publicitaria ni simple diseño persuasivo. La persuasión ofrece razones; un patrón oscuro las retira, las entierra o encarece actuar sobre ellas. Esa distinción importa legalmente, porque la mayoría de los marcos de protección al consumidor giran en torno a si una práctica distorsiona materialmente la capacidad de decidir con información.",
    ],
    sections: [
      {
        heading: "Las diez categorías",
        paragraphs: [
          "Los patrones se agrupan por lo que explotan. Este catálogo los ordena en diez familias, cada una con su propia página y ejemplos:",
        ],
        bullets: [
          "Urgencia y escasez — plazos inventados, stock ficticio, cuentas atrás que se reinician.",
          "Manipulación de precios — planes señuelo, tasas por goteo, extras preseleccionados.",
          "Trampas de suscripción — cancelación oculta, continuidad forzada, facturación por opción negativa.",
          "Manipulación de interfaz — jerarquía visual, obstrucción, anuncios disfrazados, cebo y cambio.",
          "Manipulación de privacidad — laberintos de cookies, preparación de permisos, valores por defecto hostiles.",
          "Ingeniería social — confirmshaming, prueba social inflada, actividad falsa, filtrado de reseñas.",
          "Captura de atención — scroll infinito, autoplay, badges diseñados para que vuelvas.",
          "Abuso de gamificación — rachas que castigan la ausencia, reparaciones de pago, progreso irrecuperable.",
          "Adicción móvil — preparación de permisos en el teléfono, notificaciones de reenganche, bucles compulsivos.",
          "Abuso de confianza y autoridad — badges no ganados, recomendaciones lavadas con IA, credibilidad institucional prestada.",
        ],
      },
      {
        heading: "Cómo reconocer uno",
        paragraphs: [
          "Hay una prueba contrafactual que atrapa a la mayoría: si ambas opciones se mostraran con el mismo tamaño, contraste, redacción y esfuerzo, ¿cambiaría tu elección? Si sí, la interfaz está haciendo un trabajo que no declara. La prueba funciona porque los patrones oscuros casi siempre dependen de una asimetría: de clics, de atención, de minutos o de presión social.",
          "Una segunda prueba útil es la de sustracción. Quita el contador, el badge, el número, la casilla premarcada. ¿La oferta sigue teniendo sentido por sí sola? Si se desmorona al retirar la presión, la presión era el producto.",
        ],
      },
      {
        heading: "Por qué funcionan",
        paragraphs: [
          "Los patrones oscuros no sortean el razonamiento: llegan antes. La aversión a la pérdida hace que un plazo falso se sienta como un riesgo real. El sesgo por defecto implica que una casilla premarcada se acepta salvo rechazo activo, y rechazar cuesta una decisión. La carga cognitiva convierte un panel de consentimiento con diecisiete interruptores en un encogimiento de hombros. La prueba social transforma la compra de un desconocido en evidencia.",
          "Como estos efectos son prerreflexivos, conocerlos protege poco. Los estudios sobre patrones oscuros encuentran que incluso los usuarios informados toman la decisión pretendida cuando la fricción es asimétrica. Por eso la regulación se centra en el diseño y no en educar al consumidor.",
        ],
      },
      {
        heading: "¿Son ilegales los patrones oscuros?",
        paragraphs: [
          "Cada vez más, sí, aunque depende de la jurisdicción y de si la práctica es engañosa. En la Unión Europea, la Directiva sobre prácticas comerciales desleales prohíbe las prácticas engañosas y agresivas, y el Reglamento de Servicios Digitales prohíbe expresamente los patrones oscuros en plataformas reguladas. El Reglamento de Mercados Digitales exige que rechazar el consentimiento sea tan fácil como darlo. El Reglamento de IA añade deberes de transparencia cuando las recomendaciones se presentan como automáticas u objetivas.",
          "En Estados Unidos, la Comisión Federal de Comercio actúa contra prácticas engañosas y su norma click-to-cancel ataca directamente las trampas de suscripción. En Reino Unido, la autoridad de competencia ha obtenido compromisos de varios grandes minoristas por afirmaciones de urgencia y precios por goteo.",
          "No todos los patrones son ilegales. El confirmshaming suele ser legal pero desagradable. Un contador falso suele ser ambas cosas. La línea pasa por si una persona razonable resultaría engañada sobre algo material.",
        ],
      },
      {
        heading: "Qué hacer cuando encuentras uno",
        paragraphs: [
          "Documéntalo antes de cerrar la pestaña: una captura con la fecha, la URL y el texto exacto de la afirmación. Si la afirmación es un plazo o un stock, recarga y captura también el segundo estado: la discrepancia es la prueba.",
          "Después denúncialo. En la UE, las autoridades nacionales de consumo aceptan reclamaciones por prácticas desleales. En Estados Unidos, la FTC recibe informes en ReportFraud.ftc.gov. Los reguladores construyen casos a partir de patrones de quejas, y las capturas son lo que hace posible un caso.",
          "Si construyes interfaces, la alternativa ética suele ser más barata de lo que parece: muestra el número real, deja que el plazo real caduque y da a la acción secundaria el mismo tamaño y contraste que a la primaria. El catálogo tiene una alternativa concreta para cada patrón que documenta.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Quién acuñó el término patrones oscuros?",
        a: "El diseñador de UX Harry Brignull lo acuñó en 2010 y publicó el primer catálogo público de interfaces engañosas en deceptive.design.",
      },
      {
        q: "¿Son lo mismo que el diseño persuasivo?",
        a: "No. El diseño persuasivo ofrece razones y preserva la capacidad de elegir otra cosa. Los patrones oscuros retiran, entierran o encarecen esa capacidad.",
      },
      {
        q: "¿Cuántos tipos de patrones oscuros hay?",
        a: "No hay un número fijo. Este catálogo documenta 46 patrones con nombre agrupados en diez categorías, que cubren los mecanismos más observados en productos de consumo.",
      },
      {
        q: "¿Funcionan en personas que ya los conocen?",
        a: "Sí, en la mayoría de entornos experimentales. Los efectos son prerreflexivos y asimétricos, así que la conciencia reduce la influencia pero no la elimina.",
      },
    ],
    references: ["brignull", "wikipediaEs", "ftc", "ucpd", "dsa", "dma", "aiAct", "edpb", "cma", "oecd", "mathur2019", "gray2018"],
  },
};
