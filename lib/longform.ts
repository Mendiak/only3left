import type { Locale } from "@/lib/i18n";

export type LongformSection = { heading: string; paragraphs: string[] };
export type LongformSource = { label: string; url: string };

export type Longform = {
  intro: string;
  sections: LongformSection[];
  sources: LongformSource[];
};

export function hasLongform(slug: string) {
  return Boolean(longform[slug]);
}

/**
 * Deep content for the patterns that already receive impressions in Search
 * Console. The remaining patterns keep their short entries until they earn a
 * query of their own; this is deliberately not generated for every pattern at once.
 */
export const longform: Record<string, Record<Locale, Longform>> = {
  "roach-motel": {
    en: {
      intro:
        "The roach motel is the canonical subscription dark pattern: you can check in, but you cannot check out. It was named by the sociologist and consumer advocate Tom Watson in the 1980s and formalised into the dark pattern canon by Harry Brignull in 2010. Nearly four decades later it remains the most common pattern in European and North American subscription products, and the one regulators have been slowest to fix.",
      sections: [
        {
          heading: "How the mechanism actually works",
          paragraphs: [
            "A roach motel is not one screen; it is an asymmetry distributed across a customer journey. Sign-up is one click, one field, one social login. Cancellation is a settings page nested under Billing, which is nested under Account, which requires re-authentication, which opens a support article, which recommends a live chat during business hours.",
            "The individual steps are defensible in isolation. Combined, they convert a two-second decision into a twenty-minute project, and the project is scheduled for a moment when the user has time — which is exactly when they have stopped being in a hurry to leave. That delay is the revenue model.",
          ],
        },
        {
          heading: "Real examples",
          paragraphs: [
            "Gym memberships made this pattern famous by requiring an in-person visit or a registered letter to cancel. Streaming services refined it digitally: cancel online, but only after a retention flow that offers a discount, then a pause, then a reminder of what you will lose. SaaS products add a third variant, where the cancellation button is replaced by a \"contact sales\" link, and the sales conversation is the cancellation form.",
            "The pattern also appears in trials. A seven-day free trial that requires a card and converts silently is a roach motel with a shorter corridor: entry is instant, exit requires remembering a date.",
          ],
        },
        {
          heading: "Why it works",
          paragraphs: [
            "Three levers do the work. Loss aversion makes the retention offer feel like a threat of loss rather than a discount. Present bias makes the future cancellation task feel cheap while the current friction feels expensive. Cognitive load supplies the excuse: the user does not decide not to cancel, they simply fail to finish.",
            "The effect compounds at scale. A ten percent drop in voluntary churn is worth more to a subscription business than a ten percent increase in acquisition, which is why the pressure is applied at exit rather than at entry.",
          ],
        },
        {
          heading: "What the law says now",
          paragraphs: [
            "The EU's amended Consumer Rights Directive and the Digital Services Act both require that withdrawing from a contract be as easy as entering it, and the FTC's click-to-cancel rule applies the same principle in the United States: if you can subscribe online, you must be able to cancel online, without a phone call, an email, or a retention interview.",
            "The roach motel is therefore moving from an ethics problem to a compliance problem. The practical consequence is architectural: cancellation has to be designed at the same time as onboarding, not bolted on after a growth review.",
          ],
        },
        {
          heading: "The ethical alternative",
          paragraphs: [
            "Put a Cancel plan link at the top level of account settings, labelled with the words \"cancel\", not \"manage\". Show the effective date and the final charge before confirmation. Confirm the cancellation by email immediately, with the amount that will not be charged.",
            "If you want retention, earn it before the exit: offer a pause instead of a discount, state clearly what the customer loses, and accept the answer the first time. A cancellation flow that respects the decision produces fewer chargebacks and fewer regulator questions than one that delays it.",
          ],
        },
      ],
      sources: [
        { label: "Deceptive Patterns — Harry Brignull", url: "https://deceptive.design/" },
        {
          label: "Mathur et al., Dark Patterns at Scale (2019)",
          url: "https://arxiv.org/abs/1907.07032",
        },
        {
          label: "FTC — Bringing Dark Patterns to Light (2022)",
          url: "https://www.ftc.gov/reports/bringing-dark-patterns-light",
        },
        {
          label: "Directive 2005/29/EC on unfair commercial practices",
          url: "https://eur-lex.europa.eu/eli/dir/2005/29/oj",
        },
      ],
    },
    es: {
      intro:
        "El roach motel es el patrón oscuro de suscripción canónico: puedes entrar, pero no puedes salir. Lo nombró el defensor del consumidor Tom Watson en los años ochenta y Harry Brignull lo incorporó al canon de los patrones oscuros en 2010. Casi cuatro décadas después sigue siendo el patrón más común en productos de suscripción europeos y norteamericanos, y el que los reguladores han tardado más en corregir.",
      sections: [
        {
          heading: "Cómo funciona el mecanismo",
          paragraphs: [
            "Un roach motel no es una pantalla: es una asimetría distribuida a lo largo del recorrido del cliente. El alta es un clic, un campo, un inicio de sesión social. La cancelación es una página de ajustes dentro de Facturación, dentro de Cuenta, que exige reautenticarse, que abre un artículo de ayuda, que recomienda un chat en horario comercial.",
            "Cada paso es defendible por separado. Combinados convierten una decisión de dos segundos en un proyecto de veinte minutos, y el proyecto se agenda para un momento en el que el usuario tenga tiempo, que es justo cuando ha dejado de tener prisa por irse. Ese retraso es el modelo de negocio.",
          ],
        },
        {
          heading: "Ejemplos reales",
          paragraphs: [
            "Los gimnasios hicieron famoso el patrón al exigir una visita presencial o una carta certificada para cancelar. Los servicios de streaming lo refinaron en digital: cancela online, pero solo tras un flujo de retención que ofrece un descuento, luego una pausa, luego un recordatorio de lo que perderás. El SaaS añade una tercera variante, donde el botón de cancelar se sustituye por un enlace a «contactar con ventas», y la conversación comercial es el formulario de cancelación.",
            "El patrón también aparece en las pruebas. Una prueba gratis de siete días que exige tarjeta y convierte en silencio es un roach motel con un pasillo más corto: entrar es instantáneo, salir exige recordar una fecha.",
          ],
        },
        {
          heading: "Por qué funciona",
          paragraphs: [
            "Tres palancas hacen el trabajo. La aversión a la pérdida hace que la oferta de retención se sienta como una amenaza de pérdida en lugar de un descuento. El sesgo de presente hace que la tarea futura de cancelar parezca barata mientras la fricción actual parece cara. La carga cognitiva pone la excusa: el usuario no decide no cancelar, simplemente no termina.",
            "El efecto se multiplica a escala. Una caída del diez por ciento en el churn voluntario vale más para un negocio de suscripción que un aumento del diez por ciento en adquisición, y por eso la presión se aplica a la salida y no a la entrada.",
          ],
        },
        {
          heading: "Qué dice la ley ahora",
          paragraphs: [
            "La Directiva europea de derechos del consumidor, modificada, y el Reglamento de Servicios Digitales exigen que retirarse de un contrato sea tan fácil como entrar en él, y la norma click-to-cancel de la FTC aplica el mismo principio en Estados Unidos: si puedes suscribirte online, debes poder cancelar online, sin llamada, sin correo y sin entrevista de retención.",
            "El roach motel pasa así de ser un problema ético a ser un problema de cumplimiento. La consecuencia práctica es arquitectónica: la cancelación debe diseñarse a la vez que el onboarding, no atornillarse después de una revisión de crecimiento.",
          ],
        },
        {
          heading: "La alternativa ética",
          paragraphs: [
            "Pon un enlace de Cancelar plan en el primer nivel de los ajustes de cuenta, etiquetado con la palabra «cancelar», no «gestionar». Muestra la fecha efectiva y el último cargo antes de confirmar. Confirma la cancelación por correo de inmediato, con el importe que no se cobrará.",
            "Si quieres retención, gánatela antes de la salida: ofrece una pausa en lugar de un descuento, explica con claridad qué pierde el cliente y acepta la respuesta la primera vez. Un flujo de cancelación que respeta la decisión genera menos contracargos y menos preguntas de reguladores que uno que la retrasa.",
          ],
        },
      ],
      sources: [
        { label: "Deceptive Patterns — Harry Brignull", url: "https://deceptive.design/" },
        { label: "Mathur et al., Dark Patterns at Scale (2019)", url: "https://arxiv.org/abs/1907.07032" },
        {
          label: "FTC — Bringing Dark Patterns to Light (2022)",
          url: "https://www.ftc.gov/reports/bringing-dark-patterns-light",
        },
        {
          label: "Directiva 2005/29/CE sobre prácticas comerciales desleales",
          url: "https://eur-lex.europa.eu/eli/dir/2005/29/oj",
        },
      ],
    },
  },

  "fake-scarcity": {
    en: {
      intro:
        "Fake scarcity manufactures a shortage that does not exist: three rooms left, two seats at this price, a stock bar that has been at eleven percent for a year. The claim is usually formatted as data — a number, a bar, a timer — which is exactly what makes it persuasive. Numbers read as measurements, and measurements read as neutral.",
      sections: [
        {
          heading: "How the mechanism works",
          paragraphs: [
            "Real scarcity changes the expected cost of waiting: if the item may be gone tomorrow, waiting has a price. Fake scarcity borrows that logic without the underlying constraint. The interface presents a limit, omits the evidence for it, and leaves the user to resolve the uncertainty in the direction of buying.",
            "The strongest versions combine three signals at once: popularity (\"12 people are viewing this\"), proximity (\"only 3 left\"), and time (\"this price ends in 04:59\"). Each is individually weak. Together they produce a small, coherent narrative of a market about to close.",
          ],
        },
        {
          heading: "Real examples",
          paragraphs: [
            "Travel booking sites are the classic habitat: the same three rooms are available on every visit, every day, for every visitor. Ecommerce adds the stock bar that never moves. Ticketing adds the queue position that resets. Flash-sale platforms add the \"X people bought this in the last hour\" ticker, which is often computed from a static number.",
            "The tell is reproducibility. Real inventory changes when other people buy. Fake inventory changes when you refresh.",
          ],
        },
        {
          heading: "Why it works",
          paragraphs: [
            "Loss aversion is roughly twice as strong as the pleasure of an equivalent gain, so the threat of missing out outweighs the benefit of a good deal. FOMO supplies the social frame, and cognitive load prevents the user from checking whether the claim is true before the timer reaches zero.",
            "Scarcity also shortens the comparison process. Under time pressure, people evaluate options sequentially rather than comparatively, which means the second tab never gets opened.",
          ],
        },
        {
          heading: "What the law says",
          paragraphs: [
            "Falsely stating that a product will only be available for a very limited time, or that it is available only on particular terms, is listed as a misleading practice in the annex to the EU Unfair Commercial Practices Directive. The Digital Services Act separately bans dark patterns on regulated platforms, and the FTC has brought enforcement actions over fabricated demand and countdown timers.",
            "The legal test is usually not whether the shortage is real but whether the trader can substantiate the claim at the time it was made. A number without a source is a liability.",
          ],
        },
        {
          heading: "The ethical alternative",
          paragraphs: [
            "Show inventory only when it is accurate, current, and actionable — and say where it comes from. If a price genuinely ends, show the end date with a timezone and let it expire. If the item is popular, say so once, with a real period and denominator, rather than stacking three pressure signals on one screen.",
            "The commercial case is not weaker than it looks. Repeated fake scarcity trains customers to ignore urgency messaging entirely, which is why the pattern's conversion lift decays while its regulatory exposure does not.",
          ],
        },
      ],
      sources: [
        { label: "Deceptive Patterns — Harry Brignull", url: "https://deceptive.design/" },
        { label: "Mathur et al., Dark Patterns at Scale (2019)", url: "https://arxiv.org/abs/1907.07032" },
        {
          label: "Directive 2005/29/EC, Annex I (misleading practices)",
          url: "https://eur-lex.europa.eu/eli/dir/2005/29/oj",
        },
      ],
    },
    es: {
      intro:
        "La escasez falsa fabrica una carencia que no existe: solo quedan tres habitaciones, dos asientos a este precio, una barra de stock que lleva un año en el once por ciento. La afirmación suele presentarse como dato —un número, una barra, un contador— y eso es precisamente lo que la hace persuasiva. Los números se leen como mediciones, y las mediciones como neutralidad.",
      sections: [
        {
          heading: "Cómo funciona el mecanismo",
          paragraphs: [
            "La escasez real cambia el coste esperado de esperar: si el artículo puede desaparecer mañana, esperar tiene un precio. La escasez falsa toma prestada esa lógica sin la restricción que la sostiene. La interfaz presenta un límite, omite la evidencia y deja que el usuario resuelva la incertidumbre en la dirección de comprar.",
            "Las versiones más fuertes combinan tres señales a la vez: popularidad («12 personas están viendo esto»), proximidad («solo quedan 3») y tiempo («este precio termina en 04:59»). Cada una es débil por separado. Juntas producen una pequeña narrativa coherente de un mercado a punto de cerrar.",
          ],
        },
        {
          heading: "Ejemplos reales",
          paragraphs: [
            "Las webs de reservas de viajes son el hábitat clásico: las mismas tres habitaciones están disponibles en cada visita, cada día, para cada visitante. El ecommerce añade la barra de stock que nunca se mueve. La venta de entradas añade la posición en la cola que se reinicia. Las plataformas de venta flash añaden el contador de «X personas compraron en la última hora», a menudo calculado sobre un número estático.",
            "La señal es la reproducibilidad. El inventario real cambia cuando otra gente compra. El inventario falso cambia cuando recargas.",
          ],
        },
        {
          heading: "Por qué funciona",
          paragraphs: [
            "La aversión a la pérdida es aproximadamente el doble de fuerte que el placer de una ganancia equivalente, así que la amenaza de perdérselo supera el beneficio de una buena oferta. El FOMO aporta el marco social y la carga cognitiva impide comprobar si la afirmación es cierta antes de que el contador llegue a cero.",
            "La escasez también acorta el proceso de comparación. Bajo presión temporal, la gente evalúa opciones de forma secuencial en lugar de comparativa, y eso significa que la segunda pestaña nunca se abre.",
          ],
        },
        {
          heading: "Qué dice la ley",
          paragraphs: [
            "Afirmar falsamente que un producto solo estará disponible durante un tiempo muy limitado, o solo en determinadas condiciones, figura como práctica engañosa en el anexo de la Directiva europea sobre prácticas comerciales desleales. El Reglamento de Servicios Digitales prohíbe además los patrones oscuros en plataformas reguladas, y la FTC ha abierto expedientes por demanda fabricada y contadores falsos.",
            "La prueba legal no suele ser si la escasez es real, sino si el comerciante puede acreditar la afirmación en el momento en que la hizo. Un número sin fuente es un pasivo.",
          ],
        },
        {
          heading: "La alternativa ética",
          paragraphs: [
            "Muestra inventario solo cuando sea exacto, actual y accionable, y di de dónde sale. Si un precio termina de verdad, muestra la fecha de fin con zona horaria y deja que caduque. Si el artículo es popular, dilo una vez, con un periodo y un denominador reales, en lugar de apilar tres señales de presión en una pantalla.",
            "El argumento comercial no es tan débil como parece. La escasez falsa repetida entrena al cliente a ignorar por completo los mensajes de urgencia, y por eso el aumento de conversión del patrón decae mientras su exposición regulatoria no.",
          ],
        },
      ],
      sources: [
        { label: "Deceptive Patterns — Harry Brignull", url: "https://deceptive.design/" },
        { label: "Mathur et al., Dark Patterns at Scale (2019)", url: "https://arxiv.org/abs/1907.07032" },
        {
          label: "Directiva 2005/29/CE, anexo I (prácticas engañosas)",
          url: "https://eur-lex.europa.eu/eli/dir/2005/29/oj",
        },
      ],
    },
  },

  confirmshaming: {
    en: {
      intro:
        "Confirmshaming writes the refusal so that refusing sounds like a character flaw. \"No thanks, I prefer paying full price.\" \"No, I don't want to save money.\" The option is technically available, and technically labelled — it is just labelled with an insult, so that the cost of saying no is social rather than financial.",
      sections: [
        {
          heading: "How the mechanism works",
          paragraphs: [
            "Every opt-out is a small identity statement. Confirmshaming attaches a negative identity to the refusal, then leaves the accept option neutral. The user is no longer choosing between two features; they are choosing between being sensible and being the kind of person the copy describes.",
            "The technique is cheap to implement and hard to prosecute, which is why it survives: it changes the framing of a choice rather than the availability of one. That also makes it the pattern most likely to be present in a product whose team would never describe itself as manipulative.",
          ],
        },
        {
          heading: "Real examples",
          paragraphs: [
            "Newsletter modals are the densest concentration: \"No thanks, I like being uninformed\" next to a pre-filled email field. Ecommerce adds the discount popup that frames dismissal as hating savings. Subscription cancellations add a variant where the decline reads \"No, I don't want to improve my business\", and the accept button is the only one styled as a button.",
            "The most consequential version appears in consent flows, where the reject link says \"No, I don't care about my privacy\" and the accept button says \"Agree and continue\". Here the shame is doing regulatory work, which is precisely why several data-protection authorities have treated it as invalid consent.",
          ],
        },
        {
          heading: "Why it works",
          paragraphs: [
            "The lever is commitment bias plus social pressure. People prefer to act consistently with a positive self-image, and the copy makes refusal inconsistent with one. The effect is small in absolute terms, which is exactly why it is used: it nudges the marginal user at almost no cost.",
            "It also works asymmetrically. The user who accepts does not notice the framing; the user who refuses has to absorb a small insult to get what they wanted. Most people are not willing to spend emotional energy on a newsletter popup.",
          ],
        },
        {
          heading: "What the law says",
          paragraphs: [
            "Confirmshaming sits in a grey zone. It is generally not a false statement, so it is not caught by prohibitions on misleading advertising in the way a fake countdown is. But under the EU's unfair commercial practices rules, aggressive practices that impair the consumer's freedom of choice through non-physical pressure can be caught, and under GDPR consent must be freely given, which a guilt-based refusal undermines.",
            "Several national consumer authorities have included confirmshaming in guidance on dark patterns, and the European Commission's 2023 assessment of consent banners singled out emotionally loaded refusal language.",
          ],
        },
        {
          heading: "The ethical alternative",
          paragraphs: [
            "Label the refusal with what it does, not with what it says about the person: \"Continue without subscribing\", \"No thanks\", \"Decline\". If you need a reason to offer, put it in the body copy, not in the button.",
            "The same design that avoids the insult also performs better in the long run, because it does not generate the small resentment that turns into unsubscribes, ad blockers, and one-star reviews that mention the popup rather than the product.",
          ],
        },
      ],
      sources: [
        { label: "Deceptive Patterns — Harry Brignull", url: "https://deceptive.design/" },
        {
          label: "Directive 2005/29/EC on unfair commercial practices",
          url: "https://eur-lex.europa.eu/eli/dir/2005/29/oj",
        },
        {
          label: "FTC — Bringing Dark Patterns to Light (2022)",
          url: "https://www.ftc.gov/reports/bringing-dark-patterns-light",
        },
      ],
    },
    es: {
      intro:
        "El confirmshaming redacta el rechazo de forma que rechazar suene a defecto de carácter. «No gracias, prefiero pagar el precio completo». «No, no quiero ahorrar dinero». La opción está técnicamente disponible y técnicamente etiquetada: solo que la etiqueta es un insulto, de modo que el coste de decir que no es social en lugar de económico.",
      sections: [
        {
          heading: "Cómo funciona el mecanismo",
          paragraphs: [
            "Cada opt-out es una pequeña declaración de identidad. El confirmshaming asocia una identidad negativa al rechazo y deja la opción de aceptar en neutro. El usuario ya no elige entre dos funciones: elige entre ser sensato y ser el tipo de persona que describe el texto.",
            "La técnica es barata de implementar y difícil de perseguir, y por eso sobrevive: cambia el marco de una elección, no su disponibilidad. Eso también la convierte en el patrón más probable en un producto cuyo equipo jamás se describiría como manipulador.",
          ],
        },
        {
          heading: "Ejemplos reales",
          paragraphs: [
            "Los modales de newsletter son la mayor concentración: «No gracias, me gusta estar desinformado» junto a un campo de correo ya relleno. El ecommerce añade el popup de descuento que enmarca cerrar como odiar los ahorros. Las cancelaciones de suscripción añaden una variante en la que el rechazo dice «No, no quiero mejorar mi negocio», y el botón de aceptar es el único con aspecto de botón.",
            "La versión más consecuente aparece en los flujos de consentimiento, donde el enlace de rechazo dice «No, no me importa mi privacidad» y el botón de aceptar dice «Aceptar y continuar». Aquí la vergüenza hace trabajo regulatorio, y por eso varias autoridades de protección de datos lo han tratado como consentimiento inválido.",
          ],
        },
        {
          heading: "Por qué funciona",
          paragraphs: [
            "La palanca es el sesgo de compromiso más la presión social. La gente prefiere actuar de forma coherente con una autoimagen positiva, y el texto hace que rechazar resulte incoherente con ella. El efecto es pequeño en términos absolutos, y precisamente por eso se usa: mueve al usuario marginal a coste casi nulo.",
            "También funciona de forma asimétrica. Quien acepta no percibe el encuadre; quien rechaza tiene que absorber un pequeño insulto para conseguir lo que quería. La mayoría no está dispuesta a gastar energía emocional en un popup de newsletter.",
          ],
        },
        {
          heading: "Qué dice la ley",
          paragraphs: [
            "El confirmshaming vive en una zona gris. En general no es una afirmación falsa, así que no cae en las prohibiciones de publicidad engañosa como un contador inventado. Pero, según las normas europeas de prácticas desleales, las prácticas agresivas que menoscaban la libertad de elección mediante presión no física pueden ser sancionables, y bajo el RGPD el consentimiento debe ser libre, algo que un rechazo culpabilizador socava.",
            "Varias autoridades nacionales de consumo han incluido el confirmshaming en sus guías sobre patrones oscuros, y la evaluación de la Comisión Europea de 2023 sobre banners de consentimiento señaló el lenguaje de rechazo cargado emocionalmente.",
          ],
        },
        {
          heading: "La alternativa ética",
          paragraphs: [
            "Etiqueta el rechazo por lo que hace, no por lo que dice de la persona: «Continuar sin suscribirse», «No gracias», «Rechazar». Si necesitas dar un motivo, ponlo en el cuerpo del texto, no en el botón.",
            "El mismo diseño que evita el insulto también rinde mejor a largo plazo, porque no genera el pequeño resentimiento que se convierte en bajas, bloqueadores de anuncios y reseñas de una estrella que mencionan el popup en lugar del producto.",
          ],
        },
      ],
      sources: [
        { label: "Deceptive Patterns — Harry Brignull", url: "https://deceptive.design/" },
        {
          label: "Directiva 2005/29/CE sobre prácticas comerciales desleales",
          url: "https://eur-lex.europa.eu/eli/dir/2005/29/oj",
        },
        {
          label: "FTC — Bringing Dark Patterns to Light (2022)",
          url: "https://www.ftc.gov/reports/bringing-dark-patterns-light",
        },
      ],
    },
  },

  misdirection: {
    en: {
      intro:
        "Misdirection is the deliberate allocation of attention: the promotional claim gets the colour, the contrast and the motion, while the term that costs money gets eleven-pixel grey text. Nothing is hidden. Everything is visible. The user simply never looks at the part that matters, and the design has ensured they will not.",
      sections: [
        {
          heading: "How the mechanism works",
          paragraphs: [
            "Visual attention is finite and largely involuntary. High contrast, saturated colour, large type and movement capture it before deliberate scanning begins. Misdirection exploits that ordering: put the free shipping banner at the top, the recurring charge at the bottom in low-contrast grey, and the eye will do the rest.",
            "The pattern is often invisible to the team that ships it, because each element is individually reasonable. A marketing banner is legitimate. A small price disclosure is legitimate. Placing them so that one is read and the other is not is a design decision, and it is the one that gets audited.",
          ],
        },
        {
          heading: "Real examples",
          paragraphs: [
            "Checkout pages that place a bright discount badge beside a small recurring-billing note. Pricing pages where the annual plan's total cost is shown in a footnote while the monthly-looking figure dominates. Subscription sign-ups where the free trial dominates and the auto-renewal date is set in the lightest available grey.",
            "A subtler variant uses motion: an animated badge or a pulsing element pulls the eye away from a disclosure that sits next to it. Motion is the strongest attentional cue available in a browser, and it is usually deployed for exactly that reason.",
          ],
        },
        {
          heading: "Why it works",
          paragraphs: [
            "Attentional capture is pre-conscious. The user does not choose to look at the bright element; the visual system prioritises it. By the time deliberate reading starts, the click is often already forming.",
            "The design also exploits a reasonable heuristic: people assume that important information will be presented prominently. When it is not, they infer it is not important, which converts a layout choice into a belief about the terms.",
          ],
        },
        {
          heading: "What the law says",
          paragraphs: [
            "Material information must be presented clearly, intelligibly and in good time. Under the EU Unfair Commercial Practices Directive, hiding material information, or presenting it in an unclear, unintelligible, ambiguous or untimely manner, is an omission that can make a practice misleading — even when the information appears somewhere on the page.",
            "The FTC applies the same logic to negative-option marketing: the material terms must be clear and conspicuous, not merely technically disclosed.",
          ],
        },
        {
          heading: "The ethical alternative",
          paragraphs: [
            "Rank information by consequence, not by conversion. If a charge will recur, it belongs next to the price, in the same type size and contrast. If a term changes the total, it belongs above the fold of the checkout, not in a footnote.",
            "A simple audit catches most cases: screenshot the page, blur it, and look at what survives. If the only thing still legible is the promotional claim, the hierarchy is doing the misdirection.",
          ],
        },
      ],
      sources: [
        { label: "Deceptive Patterns — Harry Brignull", url: "https://deceptive.design/" },
        {
          label: "Directive 2005/29/EC on unfair commercial practices",
          url: "https://eur-lex.europa.eu/eli/dir/2005/29/oj",
        },
        {
          label: "FTC — Bringing Dark Patterns to Light (2022)",
          url: "https://www.ftc.gov/reports/bringing-dark-patterns-light",
        },
      ],
    },
    es: {
      intro:
        "El desvío de atención es la asignación deliberada de la mirada: el reclamo promocional recibe el color, el contraste y el movimiento, mientras el término que cuesta dinero recibe texto gris de once píxeles. Nada está oculto. Todo es visible. El usuario simplemente nunca mira la parte que importa, y el diseño se ha asegurado de que no lo haga.",
      sections: [
        {
          heading: "Cómo funciona el mecanismo",
          paragraphs: [
            "La atención visual es finita y en buena parte involuntaria. El alto contraste, el color saturado, el cuerpo grande y el movimiento la capturan antes de que empiece el escaneo deliberado. El desvío explota ese orden: pon el banner de envío gratis arriba y el cargo recurrente abajo en gris de bajo contraste, y el ojo hará el resto.",
            "El patrón suele ser invisible para el equipo que lo publica, porque cada elemento es razonable por separado. Un banner de marketing es legítimo. Una divulgación pequeña del precio es legítima. Colocarlos de modo que uno se lea y la otra no es una decisión de diseño, y es la que se audita.",
          ],
        },
        {
          heading: "Ejemplos reales",
          paragraphs: [
            "Checkouts que colocan un badge de descuento brillante junto a una nota pequeña de facturación recurrente. Páginas de precios donde el coste total del plan anual aparece en una nota al pie mientras domina la cifra que parece mensual. Altas de suscripción donde domina la prueba gratis y la fecha de renovación automática está en el gris más claro disponible.",
            "Una variante más sutil usa el movimiento: un badge animado o un elemento que pulsa arrastra el ojo lejos de una divulgación situada al lado. El movimiento es la señal atencional más fuerte disponible en un navegador, y normalmente se despliega exactamente por eso.",
          ],
        },
        {
          heading: "Por qué funciona",
          paragraphs: [
            "La captura atencional es preconsciente. El usuario no elige mirar el elemento brillante; el sistema visual lo prioriza. Cuando empieza la lectura deliberada, el clic suele estar ya formándose.",
            "El diseño también explota una heurística razonable: la gente asume que la información importante se presentará de forma prominente. Cuando no lo está, infiere que no es importante, lo que convierte una decisión de maquetación en una creencia sobre las condiciones.",
          ],
        },
        {
          heading: "Qué dice la ley",
          paragraphs: [
            "La información material debe presentarse de forma clara, inteligible y oportuna. Según la Directiva europea sobre prácticas comerciales desleales, ocultar información material o presentarla de forma poco clara, ininteligible, ambigua o tardía es una omisión que puede hacer engañosa la práctica, incluso cuando la información aparece en algún lugar de la página.",
            "La FTC aplica la misma lógica al marketing de opción negativa: las condiciones materiales deben ser claras y visibles, no meramente divulgadas en sentido técnico.",
          ],
        },
        {
          heading: "La alternativa ética",
          paragraphs: [
            "Ordena la información por consecuencia, no por conversión. Si un cargo se va a repetir, va junto al precio, con el mismo cuerpo y contraste. Si una condición cambia el total, va por encima del pliegue del checkout, no en una nota al pie.",
            "Una auditoría sencilla atrapa la mayoría de los casos: haz una captura de la página, desenfócala y mira qué sobrevive. Si lo único legible es el reclamo promocional, la jerarquía está haciendo el desvío.",
          ],
        },
      ],
      sources: [
        { label: "Deceptive Patterns — Harry Brignull", url: "https://deceptive.design/" },
        {
          label: "Directiva 2005/29/CE sobre prácticas comerciales desleales",
          url: "https://eur-lex.europa.eu/eli/dir/2005/29/oj",
        },
        {
          label: "FTC — Bringing Dark Patterns to Light (2022)",
          url: "https://www.ftc.gov/reports/bringing-dark-patterns-light",
        },
      ],
    },
  },

  "paywall-tease": {
    en: {
      intro:
        "The paywall tease shows enough to create commitment and withholds exactly the part that answers the question. A recipe reveals the story of the dish and hides the quantities. A comparison article reveals the criteria and hides the verdict. The user has already invested attention, and the wall converts that investment into a subscription decision rather than an information decision.",
      sections: [
        {
          heading: "How the mechanism works",
          paragraphs: [
            "The pattern depends on the sunk-cost effect. Reading four hundred words creates a small sense of ownership over the answer, and the paywall arrives precisely when the cost of abandoning exceeds the cost of paying. Placement is the whole design: too early and there is no commitment, too late and the user has the answer.",
            "The most aggressive versions combine the tease with a registration wall rather than a payment wall. An email address is cheap, and once collected it can be monetised through marketing, so the wall does not even need the paywall to be profitable.",
          ],
        },
        {
          heading: "Real examples",
          paragraphs: [
            "News sites that let you read two paragraphs of an analysis before a modal. Recipe sites that hide the ingredient list behind a newsletter signup, often after a thousand-word personal essay. Research databases that show the abstract and the first page of results. Course platforms that show the curriculum and gate the first lesson.",
            "The pattern is especially common where content is expensive to produce and hard to differentiate, which is why the wall tends to climb higher as the economics tighten.",
          ],
        },
        {
          heading: "Why it works",
          paragraphs: [
            "Commitment plus information asymmetry. The user knows the answer exists and knows they were close to it, which makes the gap feel like an unfinished task. Unfinished tasks are unpleasant to leave open, and the subscription is presented as the way to close it.",
            "The tease also disguises the commercial nature of the transaction. The user believes they are deciding whether to subscribe to a publication; in practice they are deciding whether to abandon a question they have already invested in.",
          ],
        },
        {
          heading: "What the law says",
          paragraphs: [
            "Paywalls themselves are lawful; withholding content you own is not a dark pattern. The problem is the disclosure. Under EU and US rules, the material terms of an offer — including the fact that access requires payment or registration — must be clear before the user invests effort.",
            "In practice, this means the gate must be visible at the point where the user decides to read, not only at the point where they try to finish. Several EU consumer authorities have treated late disclosure of a registration requirement as a misleading omission.",
          ],
        },
        {
          heading: "The ethical alternative",
          paragraphs: [
            "Mark premium content before the reader starts: a label, a lock icon, a stated word count. If you use a metered model, show the meter. If the answer is behind the wall, say so in the first paragraph rather than the tenth.",
            "For educational and reference content, the stronger long-term play is usually to give the answer and monetise the depth: worked examples, data, tooling. Withholding the conclusion generates subscriptions from irritation, and irritation churns.",
          ],
        },
      ],
      sources: [
        { label: "Deceptive Patterns — Harry Brignull", url: "https://deceptive.design/" },
        {
          label: "Directive 2005/29/EC on unfair commercial practices",
          url: "https://eur-lex.europa.eu/eli/dir/2005/29/oj",
        },
        {
          label: "FTC — Bringing Dark Patterns to Light (2022)",
          url: "https://www.ftc.gov/reports/bringing-dark-patterns-light",
        },
      ],
    },
    es: {
      intro:
        "El cebo de paywall muestra lo suficiente para crear compromiso y retiene exactamente la parte que responde a la pregunta. Una receta revela la historia del plato y esconde las cantidades. Un artículo comparativo revela los criterios y esconde el veredicto. El usuario ya ha invertido atención, y el muro convierte esa inversión en una decisión de suscripción en lugar de una decisión informativa.",
      sections: [
        {
          heading: "Cómo funciona el mecanismo",
          paragraphs: [
            "El patrón depende del efecto de coste hundido. Leer cuatrocientas palabras crea una pequeña sensación de propiedad sobre la respuesta, y el muro llega justo cuando el coste de abandonar supera el de pagar. La colocación lo es todo: demasiado pronto no hay compromiso, demasiado tarde el usuario ya tiene la respuesta.",
            "Las versiones más agresivas combinan el cebo con un muro de registro en lugar de un muro de pago. Un correo electrónico es barato y, una vez captado, se puede monetizar con marketing, así que el muro ni siquiera necesita el pago para ser rentable.",
          ],
        },
        {
          heading: "Ejemplos reales",
          paragraphs: [
            "Sitios de noticias que dejan leer dos párrafos de un análisis antes de un modal. Webs de recetas que esconden la lista de ingredientes tras una suscripción a la newsletter, a menudo después de un ensayo personal de mil palabras. Bases de datos de investigación que muestran el resumen y la primera página de resultados. Plataformas de cursos que muestran el temario y bloquean la primera lección.",
            "El patrón es especialmente común donde el contenido es caro de producir y difícil de diferenciar, y por eso el muro tiende a subir cuanto más se aprieta la economía.",
          ],
        },
        {
          heading: "Por qué funciona",
          paragraphs: [
            "Compromiso más asimetría de información. El usuario sabe que la respuesta existe y sabe que estuvo cerca, lo que hace que el hueco se sienta como una tarea sin terminar. Las tareas sin terminar son desagradables de dejar abiertas, y la suscripción se presenta como la forma de cerrarlas.",
            "El cebo también disfraza la naturaleza comercial de la transacción. El usuario cree que está decidiendo suscribirse a una publicación; en la práctica está decidiendo si abandona una pregunta en la que ya invirtió.",
          ],
        },
        {
          heading: "Qué dice la ley",
          paragraphs: [
            "Los paywalls son legales; retener contenido propio no es un patrón oscuro. El problema es la divulgación. Según las normas europeas y estadounidenses, las condiciones materiales de una oferta —incluido el hecho de que el acceso requiere pago o registro— deben ser claras antes de que el usuario invierta esfuerzo.",
            "En la práctica, eso significa que el muro debe ser visible en el punto en el que el usuario decide leer, no solo en el punto en el que intenta terminar. Varias autoridades europeas de consumo han tratado la divulgación tardía de un requisito de registro como omisión engañosa.",
          ],
        },
        {
          heading: "La alternativa ética",
          paragraphs: [
            "Marca el contenido premium antes de que el lector empiece: una etiqueta, un icono de candado, un recuento de palabras. Si usas un modelo medido, muestra el medidor. Si la respuesta está tras el muro, dilo en el primer párrafo y no en el décimo.",
            "Para contenido educativo y de referencia, la jugada de fondo suele ser dar la respuesta y monetizar la profundidad: ejemplos resueltos, datos, herramientas. Retener la conclusión genera suscripciones desde la irritación, y la irritación produce bajas.",
          ],
        },
      ],
      sources: [
        { label: "Deceptive Patterns — Harry Brignull", url: "https://deceptive.design/" },
        {
          label: "Directiva 2005/29/CE sobre prácticas comerciales desleales",
          url: "https://eur-lex.europa.eu/eli/dir/2005/29/oj",
        },
        {
          label: "FTC — Bringing Dark Patterns to Light (2022)",
          url: "https://www.ftc.gov/reports/bringing-dark-patterns-light",
        },
      ],
    },
  },
};
