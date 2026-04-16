export type Lang = "en" | "es";

export type Messages = Record<string, string>;

export const messages: Record<Lang, Messages> = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.pocket": "Pocket Negotiator",
    "nav.about": "About us",
    "nav.work": "How it works",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.legal": "Legal",
    "lang.english": "English",
    "lang.spanish": "Español",

    // Footer
    "footer.tagline.title": "Spark Clarity Before you sign",
    "footer.tagline.desc":
      "Building trust in car buying by empowering buyers with AI-powered contract clarity, fee fairness insights, and negotiation guidance—before signing.",
    "footer.product": "Product",
    "footer.resources": "Resources",
    "footer.legal": "Legal",
    "footer.contactSupport": "Contact Support",
    "footer.poweredBy": "Powered by Community Data from",
    "footer.encryption": "256-Bit Bank Level Encryption",
    "footer.copyright": "© 2026 SignSpark AI. All rights reserved.",

    // Contact modal
    "contact.title": "Contact Us",
    "contact.subtitle": "Our team is here to support you every step of the way",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.email": "Email",
    "contact.emailPlaceholder": "your@email.com",
    "contact.message": "Message",
    "contact.messagePlaceholder": "How can we help?",
    "contact.submit": "Contact Us",

    // Pocket negotiator
    "pocket.kicker": "Negotiate with Confidence",
    "pocket.titlePrefix": "Your Pocket",
    "pocket.titleAccent": "Negotiator.",
    "pocket.desc":
      "Arm yourself with real-time AI analysis. Scan contracts, spot hidden fees, and negotiate with confidence—right at the dealership desk.",
    "pocket.step1": "Scan Contracts in Seconds",
    "pocket.step2": "Get a Fairness Score Instantly",
    "pocket.step3": "Know Exactly What to Negotiate",
    "pocket.appStore": "App Store",
    "pocket.playStore": "Play Store",
    "pocket.trust1": "100% Secure & Private. Your data is never shared.",
    "pocket.trust2": "Helping car buyers across all 50 states.",

    // Home page (high-signal bits)
    "home.hero.badge": "Buying a car? SignSpark is your AI Negotiator.",
    "home.hero.h1":
      "The Essential AI Companion for Today’s Car Buyer—Because the real negotiation starts at the signing desk.",
    "home.hero.line1": "Don’t sign until you check.",
    "home.hero.p1":
      "Scan your dealership paperwork and get real-time contract analysis against state laws. SignSpark flags hidden fees and compliance risks — so you can shield your wallet from junk fees and overcharging.",
    "home.hero.p2.prefix": "Optimized for the Finance Office: Most buyers save",
    "home.hero.p2.suffix":
      "at the signing table — based on real contract analysis.",
    "home.hero.comingSoon": "Coming Soon",
    "home.hero.proFeatures": "See Pro Features",
    "home.hero.trust.states": "50 States Covered",
    "home.hero.trust.contracts": "Real Contracts",
    "home.hero.trust.poweredBy": "(Powered by CarBuyInsight)",
    "home.hero.trust.noDataShared": "No Data Ever Shared",
    "home.faq.kicker": "FAQ's",
    "home.faq.title": "Frequently Asked Questions",
    "home.faq.subtitle": "Get the answers you need to negotiate with confidence.",
    "home.faq.haveQuestion": "Have a Question?",
    "home.faq.contactUs": "Contact Us",
    "home.faq.instantAnswer": "Instant answer. Human backup available.",

    // Feature-top strip
    "home.featureTop.iconAlt": "AI Feature Icon",
    "home.featureTop.title": "AI That Keeps Your Deal Fair",
    "home.featureTop.desc.before":
      "Our intelligent system reviews your contract to uncover hidden fees,",
    "home.featureTop.desc.highlight": "built on state-specific fee rules",
    "home.featureTop.desc.after":
      "and ensure transparency — before you sign.",
    "home.featureTop.pill1Alt": "100% Private & Secure",
    "home.featureTop.pill1": "100% Private & Secure",
    "home.featureTop.pill2Alt": "Instant Analysis",
    "home.featureTop.pill2": "Instant Analysis",
    "home.featureTop.pill3Alt": "Built to Protect Car Buyers",
    "home.featureTop.pill3": "Built to Protect Car Buyers",

    // Footer links
    "footer.product.freeScan": "Free Fairness Scan",
    "footer.product.pro": "SignSpark Pro",
    "footer.product.howItWorks": "How it works",
    "footer.product.faq": "FAQ",
    "footer.product.about": "About Us",
    "footer.resources.guide": "Car Buying Guide",
    "footer.resources.scripts": "Negotiation Scripts",
    "footer.legal.privacy": "Privacy Policy",
    "footer.legal.terms": "Terms & Conditions",
    "footer.legal.security": "Data Security",

    // About section
    "home.about.kicker": "About SignSpark AI",
    "home.about.title.prefix": "We Level The",
    "home.about.title.accent": "Playing Field.",
    "home.about.p1":
      "For too long, the car-buying process has been designed to confuse consumers. Dealerships have the experience; you have the confusion.",
    "home.about.p2":
      "We built SignSpark to change that. By combining state-specific laws with the proprietary data from CarBuyInsight.org, we turn complex contracts into clear, undeniable facts.",
    "home.about.p3":
      "We don't just scan paper; we give you the leverage to say \"No\" to junk fees. Our AI is your pocket expert, ensuring clarity when it matters most: before you sign.",
    "home.about.pill1.title": "Data-Driven Leverage",
    "home.about.pill1.desc":
      "Built on the nation's largest consumer contract database.",
    "home.about.pill2.title": "Legal Shield",
    "home.about.pill2.desc":
      "Designed alongside federal and state protection guidelines.",

    // About (right card)
    "home.about.card.kicker": "Why it matters",
    "home.about.card.title": "Proof you can feel.",
    "home.about.card.subtitle":
      "A lighter, transparent experience—built for consumer trust.",
    "home.about.card.stat.accuracy": "Accuracy",
    "home.about.card.stat.states": "States Covered",
    "home.about.card.stat.private": "Private",
    "home.about.card.row1.title": "Built for Transparency",
    "home.about.card.row1.desc":
      "Our AI surfaces what matters most—fees, compliance risks, and unfair terms—so you can make clear decisions.",
    "home.about.card.row2.title": "Plus Jakarta Sans",
    "home.about.card.row2.desc":
      "Get a clear summary of what to negotiate—so you can act quickly at the signing table.",

    // Mission section
    "home.mission.kicker": "OUR MISSION",
    "home.mission.title.prefix": "WE ENGINEER",
    "home.mission.title.accent": "FAIRNESS.",
    "home.mission.subtitle":
      "The system is rigged to confuse you. We built the intelligence to fight back.",
    "home.mission.card1.title": "Unbiased Advocacy",
    "home.mission.card1.desc":
      "We don't work for dealerships. Our AI is programmed to serve only your financial interests, detecting terms that favor the seller over the buyer.",
    "home.mission.card2.title": "Real-Time Defense",
    "home.mission.card2.desc":
      "Stop predatory tactics before they start. We flag \"junk\" fees and inflated add-ons instantly, giving you the leverage to say No.",
    "home.mission.card3.title": "Data-Driven Leverage",
    "home.mission.card3.desc":
      "Powered by CarBuyInsight™, our algorithms compare your deal against thousands of others to ensure you never pay above market standards.",

    // Features section
    "home.features.kicker": "Key Features",
    "home.features.title.prefix": "The Ultimate Car",
    "home.features.title.accent": "Buying Toolkit",
    "home.features.subtitle":
      "Smart features built to bring you clarity, confidence, and comfort before you sign.",
    "home.feature1.title": "Instant Contract X-ray",
    "home.feature1.desc":
      "Digitize messy scans in seconds. Reveal every buried line item.",
    "home.feature2.title": "Hidden Fee Detector",
    "home.feature2.desc":
      "Instantly spots non-compliant fees, fake taxes, and duplicate charges.",
    "home.feature3.title": "50-State Legal Check",
    "home.feature3.desc":
      "Validates all fees against real-time local laws (Powered by CarBuyInsight™).",
    "home.feature4.title": "Real-Time Negotiation Coach",
    "home.feature4.desc":
      "Get the exact AI-generated script to decline fees and win.",

    // Work section
    "home.work.kicker": "How It Works",
    "home.work.title.prefix": "Understand Your Deal in",
    "home.work.title.accent": "3 Simple Steps",
    "home.work.subtitle":
      "Our intelligent system reviews your contract to uncover hidden fees and ensure transparency — before you sign.",
    "home.work.comingSoon": "COMING SOON",

    // CTA section
    "home.cta.title": "Stop guessing. Start saving.",
    "home.cta.subtitle": "Upload your contract now for an instant fairness check.",
    "home.cta.comingSoon": "Coming Soon",
    "home.cta.downloadOn": "Download on the",
    "home.cta.getItOn": "GET IT ON",

    // Blog section
    "home.blog.kicker": "Blogs",
    "home.blog.title.prefix": "Expert Insights &",
    "home.blog.title.accent": "Saving Strategies",
    "home.blog.subtitle":
      "Don’t just buy a car. Master the deal. Practical advice from negotiation experts and data scientists.",
    "home.blog.readGuide": "Read Guide →",
    "home.blog.seeScripts": "See the Scripts →",
    "home.blog.readMore": "Read Guide →",

    // Home blog cards
    "home.blog.card1.title":
      "The Dirty Dozen: 12 Hidden Fees Car Dealers Hope You Miss",
    "home.blog.card1.desc":
      "You’ve spent weeks researching the perfect car. You’ve test-driven it and agreed on the monthly payment. But at the signing desk, SignSpark AI protects you by exposing hidden junk fees buried in your contract’s fine print—before you sign.",
    "home.blog.card2.title":
      "Stop Asking, Start Negotiating: How AI Scripts Saved One Buyer $2,400",
    "home.blog.card2.desc":
      "A real-world case study showing how specific AI-generated trigger phrases from SignSpark transformed a moderate deal into a great one—saving the buyer $2,400.",
    "home.blog.card3.title":
      "The Silent Sign-Off: How Digital Dealerships Can Hide Hidden Fees",
    "home.blog.card3.desc":
      "Imagine buying a new car. You've negotiated the price, picked your color, and now you're in the finance office, ready to seal the deal.",

    // FAQ Q/A
    "home.faq.q1": "Will the dealership get mad if I use this?",
    "home.faq.a1":
      "Transparency isn't rude; it's smart. Our Fairness Report gives you professional, data-backed facts so you can ask confident questions without being aggressive. Most users find dealers back down quickly when shown the data.",
    "home.faq.q2": "How much money can I actually save?",
    "home.faq.a2":
      "On average, users save between $1,500 and $4,000 on their vehicle purchase. The exact amount depends on the make, model, and current market conditions in your area.",
    "home.faq.q3": "Is my contract data 100% private?",
    "home.faq.a3":
      "Absolutely. Your data is encrypted end-to-end and never shared with third parties, including dealerships. We take your privacy seriously.",
    "home.faq.q4": "Does this work for Leases and Used Cars?",
    "home.faq.a4":
      "Yes! Our platform supports new car purchases, used vehicles, and lease agreements. We analyze all deal types to ensure you get a fair price.",
    "home.faq.q5": "I'm at the dealership right now. Is it fast enough?",
    "home.faq.a5":
      "Yes — results are generated in under 60 seconds. Just upload your contract or enter the deal details and you'll have a full Fairness Report before you sign anything.",
    "home.faq.q6": "Do I have to pay if my deal is already fair?",
    "home.faq.a6":
      "You only pay for the full report if you choose to unlock it. The initial summary showing whether your deal is fair or not is completely free.",

    // Blog page meta
    "blog.byTeam": "By SignSpark Editorial Team",
    "blog.minutesRead": "Minutes Read Time",
    "blog.category.scams": "SCAMS",
    "blog.category.negotiation": "NEGOTIATION",
    "blog.minReadShort": "min read",
  },
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.pocket": "Negociador de bolsillo",
    "nav.about": "Sobre nosotros",
    "nav.work": "Cómo funciona",
    "nav.faq": "Preguntas frecuentes",
    "nav.contact": "Contacto",
    "nav.legal": "Legal",
    "lang.english": "English",
    "lang.spanish": "Español",

    // Footer
    "footer.tagline.title": "Aclara todo antes de firmar",
    "footer.tagline.desc":
      "Generamos confianza en la compra de autos al empoderar a los compradores con claridad contractual impulsada por IA, información sobre tarifas justas y guía de negociación—antes de firmar.",
    "footer.product": "Producto",
    "footer.resources": "Recursos",
    "footer.legal": "Legal",
    "footer.contactSupport": "Soporte",
    "footer.poweredBy": "Impulsado por datos de la comunidad de",
    "footer.encryption": "Cifrado de nivel bancario de 256 bits",
    "footer.copyright": "© 2026 SignSpark AI. Todos los derechos reservados.",

    // Contact modal
    "contact.title": "Contáctanos",
    "contact.subtitle": "Nuestro equipo está aquí para ayudarte en cada paso",
    "contact.name": "Nombre",
    "contact.namePlaceholder": "Tu nombre",
    "contact.email": "Correo",
    "contact.emailPlaceholder": "tu@correo.com",
    "contact.message": "Mensaje",
    "contact.messagePlaceholder": "¿Cómo podemos ayudarte?",
    "contact.submit": "Enviar",

    // Pocket negotiator
    "pocket.kicker": "Negocia con confianza",
    "pocket.titlePrefix": "Tu",
    "pocket.titleAccent": "negociador de bolsillo.",
    "pocket.desc":
      "Equípate con análisis de IA en tiempo real. Escanea contratos, detecta tarifas ocultas y negocia con confianza—directo en el concesionario.",
    "pocket.step1": "Escanea contratos en segundos",
    "pocket.step2": "Obtén un puntaje de equidad al instante",
    "pocket.step3": "Sabe exactamente qué negociar",
    "pocket.appStore": "App Store",
    "pocket.playStore": "Play Store",
    "pocket.trust1": "100% seguro y privado. Tus datos nunca se comparten.",
    "pocket.trust2": "Ayudando a compradores en los 50 estados.",

    // Home page (high-signal bits)
    "home.hero.badge": "¿Vas a comprar un auto? SignSpark es tu negociador con IA.",
    "home.hero.h1":
      "El compañero esencial con IA para el comprador de autos de hoy—porque la verdadera negociación empieza al firmar.",
    "home.hero.line1": "No firmes sin revisar.",
    "home.hero.p1":
      "Escanea tu documentación del concesionario y obtén un análisis del contrato en tiempo real según las leyes estatales. SignSpark detecta tarifas ocultas y riesgos de cumplimiento—para proteger tu bolsillo de cargos basura y sobreprecios.",
    "home.hero.p2.prefix":
      "Optimizado para la oficina de finanzas: la mayoría de los compradores ahorra",
    "home.hero.p2.suffix":
      "al momento de firmar—según análisis reales de contratos.",
    "home.hero.comingSoon": "Próximamente",
    "home.hero.proFeatures": "Ver funciones Pro",
    "home.hero.trust.states": "Cobertura en los 50 estados",
    "home.hero.trust.contracts": "Contratos reales",
    "home.hero.trust.poweredBy": "(Impulsado por CarBuyInsight)",
    "home.hero.trust.noDataShared": "Nunca compartimos tus datos",
    "home.faq.kicker": "Preguntas",
    "home.faq.title": "Preguntas frecuentes",
    "home.faq.subtitle": "Respuestas para negociar con confianza.",
    "home.faq.haveQuestion": "¿Tienes una pregunta?",
    "home.faq.contactUs": "Contáctanos",
    "home.faq.instantAnswer": "Respuesta rápida. Soporte humano disponible.",

    // Feature-top strip
    "home.featureTop.iconAlt": "Icono de función de IA",
    "home.featureTop.title": "IA que mantiene tu trato justo",
    "home.featureTop.desc.before":
      "Nuestro sistema inteligente revisa tu contrato para descubrir tarifas ocultas,",
    "home.featureTop.desc.highlight":
      "basado en reglas de tarifas específicas por estado",
    "home.featureTop.desc.after":
      "y garantizar transparencia — antes de que firmes.",
    "home.featureTop.pill1Alt": "100% privado y seguro",
    "home.featureTop.pill1": "100% privado y seguro",
    "home.featureTop.pill2Alt": "Análisis instantáneo",
    "home.featureTop.pill2": "Análisis instantáneo",
    "home.featureTop.pill3Alt": "Hecho para proteger a los compradores",
    "home.featureTop.pill3": "Hecho para proteger a los compradores",

    // Footer links
    "footer.product.freeScan": "Escaneo gratuito de equidad",
    "footer.product.pro": "SignSpark Pro",
    "footer.product.howItWorks": "Cómo funciona",
    "footer.product.faq": "Preguntas frecuentes",
    "footer.product.about": "Sobre nosotros",
    "footer.resources.guide": "Guía para comprar autos",
    "footer.resources.scripts": "Guiones de negociación",
    "footer.legal.privacy": "Política de privacidad",
    "footer.legal.terms": "Términos y condiciones",
    "footer.legal.security": "Seguridad de datos",

    // About section
    "home.about.kicker": "Sobre SignSpark AI",
    "home.about.title.prefix": "Nivelamos el",
    "home.about.title.accent": "terreno de juego.",
    "home.about.p1":
      "Durante demasiado tiempo, el proceso de compra de autos se ha diseñado para confundir a los consumidores. Los concesionarios tienen la experiencia; tú tienes la confusión.",
    "home.about.p2":
      "Creamos SignSpark para cambiar eso. Al combinar leyes específicas por estado con datos propietarios de CarBuyInsight.org, convertimos contratos complejos en hechos claros e irrefutables.",
    "home.about.p3":
      "No solo escaneamos papel: te damos el poder de decir “No” a las tarifas basura. Nuestra IA es tu experto de bolsillo, aportando claridad cuando más importa: antes de firmar.",
    "home.about.pill1.title": "Ventaja basada en datos",
    "home.about.pill1.desc":
      "Construido sobre la base de datos de contratos de consumo más grande del país.",
    "home.about.pill2.title": "Escudo legal",
    "home.about.pill2.desc":
      "Diseñado junto con guías de protección federales y estatales.",

    // About (right card)
    "home.about.card.kicker": "Por qué importa",
    "home.about.card.title": "Prueba que puedes sentir.",
    "home.about.card.subtitle":
      "Una experiencia más ligera y transparente—diseñada para generar confianza.",
    "home.about.card.stat.accuracy": "Precisión",
    "home.about.card.stat.states": "Estados cubiertos",
    "home.about.card.stat.private": "Privado",
    "home.about.card.row1.title": "Hecho para la transparencia",
    "home.about.card.row1.desc":
      "Nuestra IA resalta lo más importante—tarifas, riesgos de cumplimiento y términos injustos—para que puedas decidir con claridad.",
    "home.about.card.row2.title": "Además Jakarta Sans",
    "home.about.card.row2.desc":
      "Obtén un resumen claro de qué negociar—para actuar rápido al momento de firmar.",

    // Mission section
    "home.mission.kicker": "NUESTRA MISIÓN",
    "home.mission.title.prefix": "DISEÑAMOS",
    "home.mission.title.accent": "EQUIDAD.",
    "home.mission.subtitle":
      "El sistema está diseñado para confundirte. Creamos inteligencia para contraatacar.",
    "home.mission.card1.title": "Defensa imparcial",
    "home.mission.card1.desc":
      "No trabajamos para concesionarios. Nuestra IA está diseñada para proteger tus intereses financieros, detectando términos que favorecen al vendedor sobre el comprador.",
    "home.mission.card2.title": "Defensa en tiempo real",
    "home.mission.card2.desc":
      "Detén tácticas abusivas antes de que empiecen. Señalamos tarifas “basura” y recargos inflados al instante, dándote poder de negociación.",
    "home.mission.card3.title": "Ventaja basada en datos",
    "home.mission.card3.desc":
      "Impulsado por CarBuyInsight™, comparamos tu trato con miles de otros para que nunca pagues por encima del mercado.",

    // Features section
    "home.features.kicker": "Funciones clave",
    "home.features.title.prefix": "La caja de herramientas definitiva para",
    "home.features.title.accent": "comprar un auto",
    "home.features.subtitle":
      "Funciones inteligentes para darte claridad, confianza y tranquilidad antes de firmar.",
    "home.feature1.title": "Rayos X instantáneos del contrato",
    "home.feature1.desc":
      "Digitaliza escaneos desordenados en segundos. Revela cada cargo oculto.",
    "home.feature2.title": "Detector de tarifas ocultas",
    "home.feature2.desc":
      "Detecta al instante tarifas no conformes, impuestos falsos y cargos duplicados.",
    "home.feature3.title": "Revisión legal en los 50 estados",
    "home.feature3.desc":
      "Valida tarifas según leyes locales en tiempo real (impulsado por CarBuyInsight™).",
    "home.feature4.title": "Coach de negociación en tiempo real",
    "home.feature4.desc":
      "Obtén el guion exacto generado por IA para rechazar tarifas y ganar.",

    // Work section
    "home.work.kicker": "Cómo funciona",
    "home.work.title.prefix": "Entiende tu trato en",
    "home.work.title.accent": "3 pasos simples",
    "home.work.subtitle":
      "Nuestro sistema revisa tu contrato para descubrir tarifas ocultas y asegurar transparencia—antes de firmar.",
    "home.work.comingSoon": "PRÓXIMAMENTE",

    // CTA section
    "home.cta.title": "Deja de adivinar. Empieza a ahorrar.",
    "home.cta.subtitle":
      "Sube tu contrato ahora para una verificación instantánea de equidad.",
    "home.cta.comingSoon": "Próximamente",
    "home.cta.downloadOn": "Descárgalo en",
    "home.cta.getItOn": "CONSÍGUELO EN",

    // Blog section
    "home.blog.kicker": "Blog",
    "home.blog.title.prefix": "Ideas de expertos y",
    "home.blog.title.accent": "estrategias de ahorro",
    "home.blog.subtitle":
      "No solo compres un auto. Domina el trato. Consejos prácticos de expertos en negociación y científicos de datos.",
    "home.blog.readGuide": "Leer guía →",
    "home.blog.seeScripts": "Ver guiones →",
    "home.blog.readMore": "Leer guía →",

    // Home blog cards
    "home.blog.card1.title":
      "La Docena Sucia: 12 tarifas ocultas que los concesionarios esperan que no veas",
    "home.blog.card1.desc":
      "Has pasado semanas investigando el auto perfecto. Lo probaste y acordaste el pago mensual. Pero en la mesa de firma, SignSpark AI te protege al exponer cargos basura ocultos en la letra pequeña de tu contrato—antes de que firmes.",
    "home.blog.card2.title":
      "Deja de preguntar, empieza a negociar: cómo los guiones de IA le ahorraron $2,400 a un comprador",
    "home.blog.card2.desc":
      "Un caso real que muestra cómo frases detonantes generadas por IA de SignSpark convirtieron un trato normal en uno excelente—ahorrando $2,400 al comprador.",
    "home.blog.card3.title":
      "La firma silenciosa: cómo las concesionarias digitales pueden esconder tarifas ocultas",
    "home.blog.card3.desc":
      "Imagina que compras un auto nuevo. Negociaste el precio, elegiste el color y ahora estás en la oficina de finanzas, listo para cerrar el trato.",

    // FAQ Q/A
    "home.faq.q1": "¿Se molestará el concesionario si uso esto?",
    "home.faq.a1":
      "La transparencia no es grosera; es inteligente. Nuestro informe de equidad te da hechos profesionales y respaldados por datos para que preguntes con seguridad sin ser agresivo. Muchos concesionarios retroceden cuando ven los datos.",
    "home.faq.q2": "¿Cuánto dinero puedo ahorrar realmente?",
    "home.faq.a2":
      "En promedio, los usuarios ahorran entre $1,500 y $4,000 en la compra del vehículo. El monto exacto depende de la marca, el modelo y las condiciones del mercado en tu zona.",
    "home.faq.q3": "¿Mis datos del contrato son 100% privados?",
    "home.faq.a3":
      "Sí. Tus datos se cifran de extremo a extremo y nunca se comparten con terceros, incluidos los concesionarios. Nos tomamos tu privacidad muy en serio.",
    "home.faq.q4": "¿Funciona para leasing y autos usados?",
    "home.faq.a4":
      "Sí. Nuestra plataforma soporta compras de autos nuevos, usados y contratos de leasing. Analizamos todos los tipos de trato para ayudarte a conseguir un precio justo.",
    "home.faq.q5": "Estoy en el concesionario ahora. ¿Es lo suficientemente rápido?",
    "home.faq.a5":
      "Sí — los resultados se generan en menos de 60 segundos. Sube tu contrato o ingresa los detalles y tendrás un informe completo antes de firmar.",
    "home.faq.q6": "¿Tengo que pagar si mi trato ya es justo?",
    "home.faq.a6":
      "Solo pagas por el informe completo si decides desbloquearlo. El resumen inicial que indica si el trato es justo o no es totalmente gratis.",

    // Blog page meta
    "blog.byTeam": "Por el equipo editorial de SignSpark",
    "blog.minutesRead": "min de lectura",
    "blog.category.scams": "ESTAFAS",
    "blog.category.negotiation": "NEGOCIACIÓN",
    "blog.minReadShort": "min de lectura",
  },
};

