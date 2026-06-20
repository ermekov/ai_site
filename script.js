const DEFAULT_LANGUAGE = "ru";
const LANGUAGE_STORAGE_KEY = "orda-ai-language";
const SUPPORTED_LANGUAGES = ["en", "ru", "kz"];

const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("[data-nav-menu]");
const revealItems = document.querySelectorAll("[data-reveal]");
const demoChat = document.querySelector("[data-demo-chat]");
const replayButton = document.querySelector("[data-replay-demo]");
const leadForm = document.querySelector("[data-lead-form]");
const formStatus = document.querySelector("[data-form-status]");
const liveClock = document.querySelector("[data-live-clock]");
const languageButtons = document.querySelectorAll("[data-lang-switch]");
const storySection = document.querySelector("[data-story-section]");
const useCasesSection = document.querySelector(".use-cases.section");
const premiumSurfaces = document.querySelectorAll(
  ".glass-card, .button, .demo-console, details, .timeline li, .case-card, .contact-proof div, .use-case-grid span"
);

const translations = {
  en: {
    htmlLang: "en",
    meta: {
      title: "Orda AI Studio | AI chatbots, automation and business websites in Kazakhstan",
      description:
        "Orda AI Studio builds AI chatbots, WhatsApp automation, Instagram and Telegram bots, CRM handoff workflows, and business websites for companies in Kazakhstan and CIS.",
      ogTitle: "Orda AI Studio | AI Chatbots and Business Automation in Kazakhstan",
      ogDescription:
        "24/7 AI assistants, WhatsApp and Telegram automation, CRM handoff, and business websites for message-heavy businesses.",
      twitterTitle: "Orda AI Studio | AI Automation for Kazakhstan Businesses",
      twitterDescription:
        "AI chatbots, CRM integrations, and websites that help businesses reply faster and capture more requests."
    },
    text: {
      "skip.link": "Skip to content",
      "brand.tagline": "Kazakhstan automation studio",
      "nav.services": "Services",
      "nav.process": "Process",
      "nav.pricing": "Pricing",
      "nav.demo": "Demo",
      "nav.contact": "Contact",
      "cta.book": "Book a consultation",
      "hero.eyebrow": "AI sales assistants for message-heavy businesses",
      "hero.title": "AI assistants that answer customers 24/7",
      "hero.subtitle":
        "They answer questions in WhatsApp, Instagram, Telegram, and your website, collect the request, and send it to a manager.",
      "hero.primaryCta": "Book a consultation",
      "hero.secondaryCta": "Watch the AI demo",
      "hero.channel.whatsapp": "WhatsApp",
      "hero.channel.instagram": "Instagram",
      "hero.channel.telegram": "Telegram",
      "hero.channel.website": "Website chat",
      "hero.proof.1": "No generic templates",
      "hero.proof.2": "Manager handoff included",
      "hero.proof.3": "RU / KZ / EN supported",
      "console.topbar": "AI lead preview",
      "console.whatsapp.title": "Customer question",
      "console.whatsapp.text": "Price, timing, and location requested",
      "console.whatsapp.badge": "WhatsApp",
      "console.instagram.title": "Instagram DM",
      "console.instagram.text": "Budget and service intent captured",
      "console.instagram.badge": "CRM",
      "console.telegram.title": "Telegram alert",
      "console.telegram.text": "Manager receives a short summary",
      "console.telegram.badge": "Sent",
      "console.assistant.label": "AI assistant",
      "console.assistant.flow": "Lead qualification",
      "console.chat.1": "Do you have appointments after 18:00?",
      "console.chat.2":
        "Yes. I can collect your name, phone, and preferred time, then send a short summary to the manager.",
      "console.chat.3": "Tomorrow after 18:00 works.",
      "console.metric.1.value": "Ready lead",
      "console.metric.1.label": "contact details saved",
      "console.metric.2.value": "Handoff",
      "console.metric.2.label": "manager continues",
      "console.metric.3.value": "24/7",
      "console.metric.3.label": "routine answers",
      "problem.kicker": "The hidden leak",
      "problem.title": "Slow replies lose more clients than price.",
      "problem.subtitle":
        "When a customer asks about price, timing, or location, they expect a clear answer fast. If the reply is late, they message the next business.",
      "problem.1.number": "01",
      "problem.1.title": "Slow first replies",
      "problem.1.text": "Customers expect a fast answer the moment they ask. Delay lowers conversion.",
      "problem.2.number": "02",
      "problem.2.title": "Repeated questions",
      "problem.2.text": "Managers lose time repeating prices, schedules, and terms again and again.",
      "problem.3.number": "03",
      "problem.3.title": "Leads stay inside chat",
      "problem.3.text": "If name, phone, request, and budget are not saved, follow-up breaks.",
      "proof.1.title": "Built around how customers already write",
      "proof.1.text": "WhatsApp, Instagram, Telegram, website chat, and manager handoff.",
      "proof.2.title": "Based on real questions",
      "proof.2.text": "We review your customer messages before writing the flow.",
      "proof.3.title": "Every request is saved clearly",
      "proof.3.text": "Source, name, phone, request, urgency, and next step stay in one place.",
      "services.kicker": "What we build",
      "services.title": "AI systems that answer customers and collect requests",
      "services.subtitle":
        "We build bots for WhatsApp, Instagram, Telegram, and websites, then connect them to your team process.",
      "services.1.title": "AI chatbots",
      "services.1.text":
        "Answer common questions and collect customer details in the channels you already use.",
      "services.2.title": "Websites and landing pages",
      "services.2.text":
        "Pages that explain the service, show the offer, and collect consultation requests.",
      "services.3.title": "CRM and Google Sheets",
      "services.3.text":
        "Leads, alerts, and customer details move to managers automatically through the tools your team already uses.",
      "services.4.title": "FAQ and support",
      "services.4.text":
        "Answer repeated questions automatically and hand the conversation to a manager when human help is needed.",
      "process.kicker": "How it works",
      "process.title": "First we understand the work. Then we build.",
      "process.1.title": "Audit",
      "process.1.text": "We review real messages, channels, lead quality, response time, and where sales handoff breaks.",
      "process.2.title": "Script and design",
      "process.2.text": "We write the AI flow, qualification questions, answers, and website structure.",
      "process.3.title": "Development",
      "process.3.text": "We build the assistant, landing page, knowledge base, automations, and manager touchpoints.",
      "process.4.title": "Integration",
      "process.4.text": "We connect CRM, Sheets, Telegram alerts, lead tags, and channel-specific routing.",
      "process.5.title": "Launch",
      "process.5.text": "We test real customer scenarios, fix weak points, show the team how it works, and launch.",
      "process.6.title": "Support",
      "process.6.text": "We review conversations, add answers, update the FAQ, and improve the system after real customer data.",
      "useCases.kicker": "Built for message-heavy businesses",
      "useCases.title": "Where automation helps first.",
      "useCases.subtitle":
        "For businesses that answer the same questions every day and want to capture requests faster.",
      "useCases.1": "Clinics",
      "useCases.2": "Beauty salons",
      "useCases.3": "Education centers",
      "useCases.4": "Real estate",
      "useCases.5": "Restaurants",
      "useCases.6": "Online stores",
      "useCases.7": "Construction companies",
      "useCases.8": "Service businesses",
      "benefits.kicker": "Business outcomes",
      "benefits.title": "Faster first replies. Less manual work.",
      "benefits.subtitle":
        "Managers handle the important conversations. AI answers repeated questions, collects details, and sends requests to the right person.",
      "benefits.1.title": "24/7 replies",
      "benefits.1.text": "Customers get useful answers after work hours, weekends, holidays, and lunch breaks.",
      "benefits.2.title": "Fewer lost leads",
      "benefits.2.text": "Every request can be captured with source, name, phone, need, budget, urgency, and next step.",
      "benefits.3.title": "Faster support",
      "benefits.3.text": "Routine FAQs are solved instantly while complex requests are handed to the right manager.",
      "benefits.4.title": "Multilingual answers",
      "benefits.4.text": "Prepare flows for English, Kazakh, and Russian without rebuilding the system later.",
      "benefits.5.title": "Manager handoff",
      "benefits.5.text": "AI gives your team a concise summary so the human reply starts with context, not confusion.",
      "benefits.6.title": "CRM integration",
      "benefits.6.text": "Leads can move automatically into CRM, Google Sheets, or Telegram notification workflows.",
      "pricing.kicker": "Packages",
      "pricing.title": "Choose the scope. We confirm the details after audit.",
      "pricing.subtitle":
        "The price depends on channels, integrations, languages, and how requests should reach your team.",
      "pricing.start.title": "AI Chatbot",
      "pricing.start.text": "For a business that needs an AI assistant to answer questions in WhatsApp, Instagram, and Telegram, then capture leads.",
      "pricing.start.fit": "Best for: one main channel, FAQ, lead capture",
      "pricing.start.price": "50,000 KZT+",
      "pricing.start.note": "Final scope after audit",
      "pricing.start.item.1": "WhatsApp, Instagram, Telegram AI bot",
      "pricing.start.item.2": "Answer script for services, prices, and schedule",
      "pricing.start.item.3": "Name, phone, request, and intent capture",
      "pricing.start.item.4": "Telegram alert with a request summary",
      "pricing.start.item.5": "Knowledge base, testing, and launch",
      "pricing.start.cta": "Discuss AI Chatbot",
      "pricing.business.badge": "Most chosen",
      "pricing.business.title": "AI Chatbot + Website",
      "pricing.business.text": "For companies that need a website and an AI bot to explain the offer, collect requests, and send them to managers.",
      "pricing.business.fit": "Best for: website, AI bot, CRM or Sheets",
      "pricing.business.price": "80,000 KZT+",
      "pricing.business.note": "For launch with site and bot",
      "pricing.business.item.1": "Landing page or business website",
      "pricing.business.item.2": "WhatsApp, Instagram, Telegram AI bot",
      "pricing.business.item.3": "Lead forms and website chat capture",
      "pricing.business.item.4": "CRM or Google Sheets integration",
      "pricing.business.item.5": "Manager handoff with a short summary",
      "pricing.business.cta": "Get AI Chatbot + Website quote",
      "pricing.premium.title": "Premium AI",
      "pricing.premium.text": "For teams that need one system for sales, support, website, CRM, and alerts.",
      "pricing.premium.fit": "Best for: several channels and regular updates",
      "pricing.premium.price": "custom",
      "pricing.premium.note": "After scope review",
      "pricing.premium.item.1": "Multi-page website",
      "pricing.premium.item.2": "Several AI assistant flows",
      "pricing.premium.item.3": "WhatsApp, Instagram, Telegram, website",
      "pricing.premium.item.4": "CRM, Sheets, alerts, and analytics",
      "pricing.premium.item.5": "Testing and answer tuning",
      "pricing.premium.item.6": "Regular improvements",
      "pricing.premium.cta": "Plan Premium AI",
      "demo.kicker": "AI chatbot demo",
      "demo.title": "How a question becomes a request.",
      "demo.subtitle":
        "The assistant answers, asks for the needed details, and sends a short summary to the manager.",
      "demo.header": "Live website chat",
      "demo.replay": "Replay",
      "demo.summary.title": "Manager summary sent to Telegram",
      "demo.summary.text":
        "Lead: Aigerim. Channel: WhatsApp. Need: dental implant consultation. Budget: asks for installment options. Urgency: this week. Next step: manager call after 18:00.",
      "contact.kicker": "Free audit",
      "contact.title": "Show where customers write to you. We will suggest what to automate first.",
      "contact.subtitle":
        "Tell us your channels, message volume, and repeated questions. We will suggest a simple first step.",
      "contact.proof.1.value": "15 min",
      "contact.proof.1.label": "audit call",
      "contact.proof.2.value": "3 flows",
      "contact.proof.2.label": "first step",
      "contact.proof.3.value": "clear",
      "contact.proof.3.label": "next step",
      "contact.whatsapp": "Book a consultation",
      "contact.telegram": "Book a consultation",
      "form.intro.title": "Request a consultation plan",
      "form.intro.text": "Reviewed by a person before any follow-up. We use your details only to prepare the consultation.",
      "form.name.label": "Name",
      "form.company.label": "Company",
      "form.businessType.label": "Business type",
      "form.service.label": "Service needed",
      "form.service.placeholder": "Select a service",
      "form.service.aiChatbot": "AI chatbot",
      "form.service.website": "Website / landing page",
      "form.service.combo": "Chatbot + website",
      "form.service.crm": "CRM / automation integration",
      "form.service.unsure": "Not sure yet",
      "form.channel.label": "Main customer channel",
      "form.channel.placeholder": "Select a channel",
      "form.channel.whatsapp": "WhatsApp",
      "form.channel.instagram": "Instagram",
      "form.channel.telegram": "Telegram",
      "form.channel.website": "Website",
      "form.channel.several": "Several channels",
      "form.messages.label": "Monthly message volume",
      "form.messages.placeholder": "Select volume",
      "form.messages.under300": "Under 300",
      "form.messages.300_1000": "300-1,000",
      "form.messages.1000_5000": "1,000-5,000",
      "form.messages.5000": "5,000+",
      "form.preferred.label": "Preferred contact method",
      "form.preferred.placeholder": "Select contact method",
      "form.preferred.whatsapp": "WhatsApp",
      "form.preferred.telegram": "Telegram",
      "form.preferred.phone": "Phone",
      "form.preferred.email": "Email",
      "form.contact.label": "Best contact",
      "form.goal.label": "What should automation improve first?",
      "form.submit": "Send consultation request",
      "form.privacy": "Your message stays private. We do not add you to newsletters or automated sales sequences.",
      "final.kicker": "Ready when your inbox gets busy",
      "final.title": "Start with one channel. If it works, expand.",
      "final.subtitle": "We help choose the first automation that can reduce manual replies and capture more requests.",
      "final.cta": "Book a consultation",
      "footer.brandTagline": "AI automation for Kazakhstan and CIS",
      "footer.description": "AI assistants, websites, and simple workflows for businesses with many customer messages.",
      "footer.services.title": "Services",
      "footer.services.1": "AI chatbots",
      "footer.services.2": "Websites",
      "footer.services.3": "CRM integrations",
      "footer.services.4": "Support automation",
      "footer.company.title": "Company",
      "footer.company.1": "Process",
      "footer.company.2": "Pricing",
      "footer.contact.title": "Contact",
      "footer.contact.location": "Almaty and remote across CIS",
      "footer.legal": "(c) 2026 Orda AI Studio. All rights reserved.",
      "footer.localization": "Built for English, Kazakh, and Russian localization."
    },
    placeholders: {
      "form.name.placeholder": "Aigerim",
      "form.company.placeholder": "Your business name",
      "form.businessType.placeholder": "Clinic, salon, school, real estate, online store",
      "form.contact.placeholder": "+7 777 000 00 00 or @telegram",
      "form.goal.placeholder": "Example: answer prices, capture leads, notify manager, connect Google Sheets"
    },
    aria: {
      "brand.aria": "Orda AI Studio home",
      "language.aria": "Language options",
      "nav.menu.open": "Open navigation menu",
      "nav.menu.close": "Close navigation menu",
      "hero.proofAria": "Implementation trust points",
      "hero.visualAria": "Animated AI request console",
      "console.channelsAria": "Incoming message channels",
      "console.chatAria": "Hero AI conversation preview",
      "proof.aria": "Trust signals",
      "contact.channelAria": "Direct consultation channels",
      "contact.whatsappAria": "Book a consultation on WhatsApp",
      "contact.telegramAria": "Book a consultation on Telegram"
    },
    status: {
      loading: "Preparing your consultation request...",
      success: "Consultation request captured. Connect this form to your CRM or Telegram workflow when ready."
    },
    demoMessages: [
      ["Customer", "Hi. How much is an implant consultation and do you work after 18:00?"],
      ["AI assistant", "A first consultation starts from 15,000 KZT. Yes, the clinic has evening slots. Are you asking for yourself or a family member?"],
      ["Customer", "For myself. I am in Almaty and want to understand payment options."],
      ["AI assistant", "Understood. Installment options are available after the doctor's plan. What is your name and the best phone number for the manager?"],
      ["Customer", "Aigerim. +7 777 123 45 67. Please call me after 18:00."],
      ["AI assistant", "Thank you, Aigerim. I sent the manager your request, city, interest, payment question, phone number, and preferred call time."]
    ]
  },
  ru: {
    htmlLang: "ru",
    meta: {
      title: "Orda AI Studio | AI-боты, автоматизация и сайты в Казахстане",
      description:
        "Orda AI Studio создает AI-чатботов для WhatsApp, Instagram, Telegram и сайтов, CRM-интеграции, автоматизацию заявок и сайты для бизнеса в Казахстане и СНГ.",
      ogTitle: "Orda AI Studio | AI-боты и автоматизация продаж в Казахстане",
      ogDescription:
        "AI-ассистенты 24/7, WhatsApp и Telegram автоматизация, передача заявок менеджерам, CRM и сайты для бизнеса.",
      twitterTitle: "Orda AI Studio | AI-автоматизация для бизнеса в Казахстане",
      twitterDescription:
        "AI-чатботы, CRM-интеграции и сайты, которые помогают отвечать быстрее и не терять заявки."
    },
    text: {
      "skip.link": "Перейти к содержанию",
      "brand.tagline": "Студия AI-автоматизации в Казахстане",
      "nav.services": "Услуги",
      "nav.process": "Процесс",
      "nav.pricing": "Пакеты",
      "nav.demo": "Демо",
      "nav.contact": "Контакты",
      "cta.book": "Получить консультацию",
      "hero.eyebrow": "AI-ассистенты продаж для бизнеса с большим потоком сообщений",
      "hero.title": "AI-ассистенты, которые отвечают клиентам 24/7",
      "hero.subtitle":
        "Отвечают на вопросы в WhatsApp, Instagram, Telegram и на сайте, собирают контакты и передают менеджеру готовую заявку.",
      "hero.primaryCta": "Получить консультацию",
      "hero.secondaryCta": "Посмотреть AI-демо",
      "hero.channel.whatsapp": "WhatsApp",
      "hero.channel.instagram": "Instagram",
      "hero.channel.telegram": "Telegram",
      "hero.channel.website": "Чат на сайте",
      "hero.proof.1": "Не готовый шаблон",
      "hero.proof.2": "Есть сценарий передачи менеджеру",
      "hero.proof.3": "Поддержка RU / KZ / EN",
      "console.topbar": "Превью AI-заявки",
      "console.whatsapp.title": "Вопрос клиента",
      "console.whatsapp.text": "Клиент уточняет цену, время и адрес",
      "console.whatsapp.badge": "WhatsApp",
      "console.instagram.title": "Instagram Direct",
      "console.instagram.text": "Бюджет и интерес клиента сохранены",
      "console.instagram.badge": "CRM",
      "console.telegram.title": "Уведомление Telegram",
      "console.telegram.text": "Менеджер получает краткое резюме",
      "console.telegram.badge": "Отправлено",
      "console.assistant.label": "AI-ассистент",
      "console.assistant.flow": "Уточнение заявки",
      "console.chat.1": "Есть запись после 18:00?",
      "console.chat.2": "Да. Я могу сохранить имя, телефон и удобное время, а затем передать менеджеру короткое резюме.",
      "console.chat.3": "Завтра после 18:00 удобно.",
      "console.metric.1.value": "Заявка",
      "console.metric.1.label": "контакты сохранены",
      "console.metric.2.value": "Передача",
      "console.metric.2.label": "менеджер продолжает",
      "console.metric.3.value": "24/7",
      "console.metric.3.label": "ответы на частые вопросы",
      "problem.kicker": "Скрытая потеря",
      "problem.title": "Клиентов чаще теряет не цена, а поздний ответ.",
      "problem.subtitle":
        "Когда клиент спрашивает цену, время или адрес, он ждет быстрый и понятный ответ. Если ответ запаздывает, он пишет следующей компании.",
      "problem.1.number": "01",
      "problem.1.title": "Медленный первый ответ",
      "problem.1.text": "Клиент ждет быстрый ответ в момент вопроса. Задержка снижает конверсию.",
      "problem.2.number": "02",
      "problem.2.title": "Повторяющиеся вопросы",
      "problem.2.text": "Менеджеры теряют время, снова и снова объясняя цены, график и условия.",
      "problem.3.number": "03",
      "problem.3.title": "Заявка остается в чате",
      "problem.3.text": "Если имя, телефон, запрос и бюджет не зафиксированы, работа с клиентом обрывается.",
      "proof.1.title": "Под то, как клиенты уже пишут",
      "proof.1.text": "WhatsApp, Instagram, Telegram, чат на сайте и передача менеджеру.",
      "proof.2.title": "На основе реальных вопросов",
      "proof.2.text": "Перед сценарием смотрим сообщения клиентов.",
      "proof.3.title": "Заявка сохраняется понятно",
      "proof.3.text": "Источник, имя, телефон, запрос, срочность и следующий шаг остаются в одном месте.",
      "services.kicker": "Что делаем",
      "services.title": "AI-системы, которые отвечают клиентам и собирают заявки",
      "services.subtitle":
        "Делаем ботов для WhatsApp, Instagram, Telegram и сайта, затем подключаем их к работе менеджеров.",
      "services.1.title": "AI-чатботы",
      "services.1.text":
        "Отвечают на частые вопросы и собирают данные клиента в нужном канале.",
      "services.2.title": "Сайты и лендинги",
      "services.2.text":
        "Сайты, которые объясняют услугу, показывают предложение и собирают заявки.",
      "services.3.title": "CRM и Google Sheets",
      "services.3.text":
        "Заявки, уведомления и данные клиентов автоматически передаются менеджеру.",
      "services.4.title": "FAQ и поддержка",
      "services.4.text":
        "Отвечает на частые вопросы и передает диалог менеджеру, когда нужна помощь человека.",
      "process.kicker": "Как это работает",
      "process.title": "Сначала разбираемся в работе. Потом делаем.",
      "process.1.title": "Аудит",
      "process.1.text": "Изучаем реальные сообщения, каналы, качество заявок, скорость ответа и провалы в передаче менеджеру.",
      "process.2.title": "Сценарий и дизайн",
      "process.2.text": "Пишем AI-сценарий, вопросы для уточнения, ответы и структуру сайта.",
      "process.3.title": "Разработка",
      "process.3.text": "Собираем ассистента, лендинг, базу знаний, автоматизации и точки работы менеджеров.",
      "process.4.title": "Интеграция",
      "process.4.text": "Подключаем CRM, Google Sheets, Telegram-уведомления, теги заявок и маршрутизацию по каналам.",
      "process.5.title": "Запуск",
      "process.5.text": "Тестируем реальные сценарии клиентов, исправляем слабые места, показываем команде и запускаем.",
      "process.6.title": "Поддержка",
      "process.6.text": "Смотрим диалоги, добавляем ответы, обновляем FAQ и улучшаем систему по реальным данным.",
      "useCases.kicker": "Для бизнеса с большим потоком сообщений",
      "useCases.title": "Где автоматизация помогает в первую очередь.",
      "useCases.subtitle":
        "Для бизнеса, который каждый день отвечает на одни и те же вопросы и хочет быстрее собирать заявки.",
      "useCases.1": "Клиники",
      "useCases.2": "Салоны красоты",
      "useCases.3": "Учебные центры",
      "useCases.4": "Недвижимость",
      "useCases.5": "Рестораны",
      "useCases.6": "Интернет-магазины",
      "useCases.7": "Строительные компании",
      "useCases.8": "Сервисный бизнес",
      "benefits.kicker": "Бизнес-результат",
      "benefits.title": "Быстрее первый ответ. Меньше ручной работы.",
      "benefits.subtitle":
        "Менеджеры ведут важные диалоги. AI отвечает на повторяющиеся вопросы, собирает данные и передает заявку нужному человеку.",
      "benefits.1.title": "Ответы 24/7",
      "benefits.1.text": "Клиенты получают полезные ответы вечером, в выходные, праздники и во время перерывов.",
      "benefits.2.title": "Меньше потерянных заявок",
      "benefits.2.text": "Каждый запрос можно сохранить с источником, именем, телефоном, потребностью, бюджетом и срочностью.",
      "benefits.3.title": "Быстрее поддержка",
      "benefits.3.text": "Частые вопросы закрываются сразу, а сложные запросы уходят нужному менеджеру.",
      "benefits.4.title": "Ответы на нескольких языках",
      "benefits.4.text": "Можно подготовить сценарии на русском, казахском и английском без перестройки всей системы.",
      "benefits.5.title": "Передача менеджеру",
      "benefits.5.text": "AI дает краткое резюме, чтобы менеджер отвечал с контекстом, а не начинал диалог заново.",
      "benefits.6.title": "Интеграция с CRM",
      "benefits.6.text": "Заявки могут автоматически уходить в CRM, Google Sheets или Telegram-уведомления.",
      "pricing.kicker": "Пакеты",
      "pricing.title": "Выберите формат. Детали уточним после аудита.",
      "pricing.subtitle":
        "Цена зависит от каналов, интеграций, языков и того, как заявки должны попадать к менеджерам.",
      "pricing.start.title": "AI-чатбот",
      "pricing.start.text": "Для бизнеса, которому нужен AI-ассистент: отвечать на вопросы в WhatsApp, Instagram, Telegram и собирать заявки.",
      "pricing.start.fit": "Лучше всего: один основной канал, FAQ, сбор заявок",
      "pricing.start.price": "50 000 KZT+",
      "pricing.start.note": "Финальный объем после аудита",
      "pricing.start.item.1": "WhatsApp, Instagram, Telegram AI-бот",
      "pricing.start.item.2": "Сценарий ответов по услугам, ценам и графику",
      "pricing.start.item.3": "Сбор имени, телефона и запроса клиента",
      "pricing.start.item.4": "Telegram-уведомление с кратким резюме",
      "pricing.start.item.5": "База знаний, тестирование и запуск",
      "pricing.start.cta": "Обсудить AI-чатбот",
      "pricing.business.badge": "Чаще выбирают",
      "pricing.business.title": "AI-чатбот + сайт",
      "pricing.business.text": "Для компаний, которым нужен сайт и AI-бот: объяснить услугу, собрать заявку и передать менеджеру.",
      "pricing.business.fit": "Лучше всего: сайт, AI-бот, CRM или Sheets",
      "pricing.business.price": "80 000 KZT+",
      "pricing.business.note": "Для запуска сайта и бота",
      "pricing.business.item.1": "Лендинг или бизнес-сайт",
      "pricing.business.item.2": "WhatsApp, Instagram, Telegram AI-бот",
      "pricing.business.item.3": "Заявки с сайта, формы и чата",
      "pricing.business.item.4": "Интеграция CRM или Google Sheets",
      "pricing.business.item.5": "Передача менеджеру с коротким резюме",
      "pricing.business.cta": "Получить расчет AI-чатбот + сайт",
      "pricing.premium.title": "Premium AI",
      "pricing.premium.text": "Для команд, которым нужна одна система для продаж, поддержки, сайта, CRM и уведомлений.",
      "pricing.premium.fit": "Лучше всего: несколько каналов и регулярная настройка",
      "pricing.premium.price": "индивидуально",
      "pricing.premium.note": "После разбора объема",
      "pricing.premium.item.1": "Многостраничный сайт",
      "pricing.premium.item.2": "Несколько сценариев AI-ассистента",
      "pricing.premium.item.3": "WhatsApp, Instagram, Telegram, сайт",
      "pricing.premium.item.4": "CRM, Sheets, уведомления и аналитика",
      "pricing.premium.item.5": "Тесты сценариев и настройка ответов",
      "pricing.premium.item.6": "Доработки по мере работы",
      "pricing.premium.cta": "Спланировать Premium AI",
      "demo.kicker": "Демо AI-чатбота",
      "demo.title": "Как вопрос становится заявкой.",
      "demo.subtitle":
        "Ассистент отвечает, уточняет нужные данные и отправляет менеджеру короткое резюме.",
      "demo.header": "Живой чат на сайте",
      "demo.replay": "Повторить",
      "demo.summary.title": "Резюме для менеджера отправлено в Telegram",
      "demo.summary.text":
        "Заявка: Айгерим. Канал: WhatsApp. Интерес: консультация по имплантации. Бюджет: спрашивает рассрочку. Срочность: на этой неделе. Следующий шаг: звонок после 18:00.",
      "contact.kicker": "Бесплатная консультация",
      "contact.title": "Покажите, где вам пишут клиенты. Мы предложим, что автоматизировать первым.",
      "contact.subtitle":
        "Расскажите про каналы, объем сообщений и повторяющиеся вопросы. Мы предложим простой первый шаг.",
      "contact.proof.1.value": "15 мин",
      "contact.proof.1.label": "разбор",
      "contact.proof.2.value": "3 сценария",
      "contact.proof.2.label": "что сделать первым",
      "contact.proof.3.value": "по делу",
      "contact.proof.3.label": "следующий шаг",
      "contact.whatsapp": "Получить консультацию",
      "contact.telegram": "Получить консультацию",
      "form.intro.title": "Заявка на консультацию",
      "form.intro.text": "Заявку смотрит человек перед любым ответом. Данные нужны только для подготовки консультации.",
      "form.name.label": "Имя",
      "form.company.label": "Компания",
      "form.businessType.label": "Тип бизнеса",
      "form.service.label": "Что нужно",
      "form.service.placeholder": "Выберите услугу",
      "form.service.aiChatbot": "AI-чатбот",
      "form.service.website": "Сайт / лендинг",
      "form.service.combo": "Чатбот + сайт",
      "form.service.crm": "CRM / автоматизация",
      "form.service.unsure": "Пока не уверен",
      "form.channel.label": "Основной канал заявок",
      "form.channel.placeholder": "Выберите канал",
      "form.channel.whatsapp": "WhatsApp",
      "form.channel.instagram": "Instagram",
      "form.channel.telegram": "Telegram",
      "form.channel.website": "Сайт",
      "form.channel.several": "Несколько каналов",
      "form.messages.label": "Сообщений в месяц",
      "form.messages.placeholder": "Выберите объем",
      "form.messages.under300": "До 300",
      "form.messages.300_1000": "300-1 000",
      "form.messages.1000_5000": "1 000-5 000",
      "form.messages.5000": "5 000+",
      "form.preferred.label": "Как удобнее связаться",
      "form.preferred.placeholder": "Выберите способ связи",
      "form.preferred.whatsapp": "WhatsApp",
      "form.preferred.telegram": "Telegram",
      "form.preferred.phone": "Звонок",
      "form.preferred.email": "Email",
      "form.contact.label": "Контакт",
      "form.goal.label": "Что автоматизировать в первую очередь?",
      "form.submit": "Отправить заявку",
      "form.privacy": "Ваши данные не добавляются в рассылки и не уходят в автоматические продажи.",
      "final.kicker": "Когда входящие сообщения растут",
      "final.title": "Начните с одного канала. Если работает, расширим.",
      "final.subtitle":
        "Поможем выбрать первую автоматизацию, которая уменьшит ручные ответы и сохранит больше заявок.",
      "final.cta": "Получить консультацию",
      "footer.brandTagline": "AI-автоматизация для Казахстана и СНГ",
      "footer.description": "AI-ассистенты, сайты и простые процессы для бизнеса с большим потоком сообщений.",
      "footer.services.title": "Услуги",
      "footer.services.1": "AI-чатботы",
      "footer.services.2": "Сайты",
      "footer.services.3": "CRM-интеграции",
      "footer.services.4": "Автоматизация поддержки",
      "footer.company.title": "Компания",
      "footer.company.1": "Процесс",
      "footer.company.2": "Пакеты",
      "footer.contact.title": "Контакты",
      "footer.contact.location": "Алматы и удаленно по СНГ",
      "footer.legal": "(c) 2026 Orda AI Studio. Все права защищены.",
      "footer.localization": "Готово для русского, казахского и английского языков."
    },
    placeholders: {
      "form.name.placeholder": "Айгерим",
      "form.company.placeholder": "Название компании",
      "form.businessType.placeholder": "Клиника, салон, школа, недвижимость, интернет-магазин",
      "form.contact.placeholder": "+7 777 000 00 00 или @telegram",
      "form.goal.placeholder": "Например: отвечать по ценам, собирать заявки, уведомлять менеджера, подключить Google Sheets"
    },
    aria: {
      "brand.aria": "Главная Orda AI Studio",
      "language.aria": "Выбор языка",
      "nav.menu.open": "Открыть меню",
      "nav.menu.close": "Закрыть меню",
      "hero.proofAria": "Пункты доверия к реализации",
      "hero.visualAria": "Анимированная панель AI-заявок",
      "console.channelsAria": "Входящие сообщения из каналов",
      "console.chatAria": "Превью диалога AI-ассистента",
      "proof.aria": "Сигналы доверия",
      "contact.channelAria": "Каналы для прямой консультации",
      "contact.whatsappAria": "Получить консультацию в WhatsApp",
      "contact.telegramAria": "Получить консультацию в Telegram"
    },
    status: {
      loading: "Готовим вашу заявку...",
      success: "Заявка принята. Позже можно подключить эту форму к CRM или Telegram-процессу."
    },
    demoMessages: [
      ["Клиент", "Здравствуйте. Сколько стоит консультация по имплантации и есть ли время после 18:00?"],
      ["AI-ассистент", "Первая консультация от 15 000 KZT. Да, вечерние окна есть. Подскажите, вы записываетесь для себя?"],
      ["Клиент", "Да, для себя. Я в Алматы, еще хочу узнать про рассрочку."],
      ["AI-ассистент", "Понял. Рассрочка обсуждается после плана врача. Как вас зовут и какой номер передать менеджеру?"],
      ["Клиент", "Айгерим. +7 777 123 45 67. Лучше звонить после 18:00."],
      ["AI-ассистент", "Спасибо, Айгерим. Я передал менеджеру ваш город, интерес, вопрос по оплате, номер и удобное время звонка."]
    ]
  },
  kz: {
    htmlLang: "kk",
    meta: {
      title: "Orda AI Studio | Қазақстандағы AI-боттар, автоматтандыру және бизнес сайттар",
      description:
        "Orda AI Studio WhatsApp, Instagram, Telegram және сайтқа арналған AI-чатботтар, CRM интеграция, өтінім автоматтандыру және бизнес сайттар жасайды.",
      ogTitle: "Orda AI Studio | Қазақстан бизнесіне арналған AI-боттар",
      ogDescription:
        "24/7 AI-ассистенттер, WhatsApp және Telegram автоматтандыру, CRM-ге беру және бизнес сайттар.",
      twitterTitle: "Orda AI Studio | Қазақстандағы AI-автоматтандыру",
      twitterDescription:
        "AI-чатботтар, CRM интеграциялар және клиентке тез жауап беруге көмектесетін сайттар."
    },
    text: {
      "skip.link": "Негізгі бөлімге өту",
      "brand.tagline": "Қазақстандағы AI-автоматтандыру студиясы",
      "nav.services": "Қызметтер",
      "nav.process": "Процесс",
      "nav.pricing": "Пакеттер",
      "nav.demo": "Демо",
      "nav.contact": "Байланыс",
      "cta.book": "Кеңес алу",
      "hero.eyebrow": "WhatsApp, Instagram, Telegram және сайтқа арналған AI-ассистент",
      "hero.title": "Клиентке 24/7 жауап беретін AI-ассистент",
      "hero.subtitle":
        "WhatsApp, Instagram, Telegram және сайттағы сұрақтарға жауап береді, өтінім жинайды және менеджерге қысқа қорытынды жібереді.",
      "hero.primaryCta": "Кеңес алу",
      "hero.secondaryCta": "AI демоны көру",
      "hero.channel.whatsapp": "WhatsApp",
      "hero.channel.instagram": "Instagram",
      "hero.channel.telegram": "Telegram",
      "hero.channel.website": "Сайт чаты",
      "hero.proof.1": "Дайын шаблон емес",
      "hero.proof.2": "Менеджерге беру сценарийі бар",
      "hero.proof.3": "RU / KZ / EN қолдайды",
      "console.topbar": "AI өтінім превьюі",
      "console.whatsapp.title": "Клиент сұрағы",
      "console.whatsapp.text": "Баға, уақыт және мекенжай сұрады",
      "console.whatsapp.badge": "WhatsApp",
      "console.instagram.title": "Instagram Direct",
      "console.instagram.text": "Қызметке қызығушылығы сақталды",
      "console.instagram.badge": "CRM",
      "console.telegram.title": "Telegram хабарлама",
      "console.telegram.text": "Менеджерге қысқа қорытынды жіберілді",
      "console.telegram.badge": "Жіберілді",
      "console.assistant.label": "AI-ассистент",
      "console.assistant.flow": "Өтінімді нақтылау",
      "console.chat.1": "18:00-ден кейін жазылуға бола ма?",
      "console.chat.2": "Иә. Атыңызды, телефоныңызды және ыңғайлы уақытты сақтап, менеджерге қысқа қорытынды жіберемін.",
      "console.chat.3": "Ертең 18:00-ден кейін ыңғайлы.",
      "console.metric.1.value": "Өтінім",
      "console.metric.1.label": "байланыс деректері сақталды",
      "console.metric.2.value": "Беру",
      "console.metric.2.label": "менеджер жалғастырады",
      "console.metric.3.value": "24/7",
      "console.metric.3.label": "жиі сұрақтарға жауап",
      "problem.kicker": "Көрінбейтін жоғалту",
      "problem.title": "Клиент жоғалуының себебі көбіне баға емес — кеш жауап.",
      "problem.subtitle":
        "Клиент баға, уақыт немесе мекенжай сұрағанда, жылдам әрі нақты жауап күтеді. Жауап кешіксе, ол келесі компанияға жазады.",
      "problem.1.number": "01",
      "problem.1.title": "Бірінші жауап баяу",
      "problem.1.text": "Клиент сұрақ қойған сәтте жылдам жауап күтеді. Кешігу конверсияны төмендетеді.",
      "problem.2.number": "02",
      "problem.2.title": "Қайталанатын сұрақтар",
      "problem.2.text": "Менеджерлер баға, кесте және шарттарды қайта-қайта түсіндіруге уақыт жоғалтады.",
      "problem.3.number": "03",
      "problem.3.title": "Өтінім чатта қалып қояды",
      "problem.3.text": "Аты, телефоны, сұранысы мен бюджеті тіркелмесе, клиентпен жұмыс үзіліп қалады.",
      "proof.1.title": "Клиент жазатын арналарға бейім",
      "proof.1.text": "WhatsApp, Instagram, Telegram, сайт чаты және менеджерге беру.",
      "proof.2.title": "Нақты сұрақтарға сүйенеміз",
      "proof.2.text": "Сценарий жазбас бұрын клиент хабарламаларын қараймыз.",
      "proof.3.title": "Өтінім түсінікті сақталады",
      "proof.3.text": "Дереккөз, аты, телефоны, сұранысы, жеделдігі және келесі қадам бір жерде тұрады.",
      "services.kicker": "НЕ ЖАСАЙМЫЗ",
      "services.title": "Клиентке жауап беретін және өтінім жинайтын AI жүйелер",
      "services.subtitle": "WhatsApp, Instagram, Telegram және сайтқа бот жасап, менеджер жұмысына қосамыз.",
      "services.1.title": "AI-чатботтар",
      "services.1.text": "Жиі сұрақтарға жауап береді және клиент дерегін керек арнада жинайды.",
      "services.2.title": "Сайттар және лендингтер",
      "services.2.text": "Қызметті түсіндіреді, ұсынысты көрсетеді және өтінім жинайды.",
      "services.3.title": "CRM және Google Sheets",
      "services.3.text": "Өтінімдер, ескертулер және клиент деректері менеджерге автоматты түрде беріледі.",
      "services.4.title": "FAQ және қолдау",
      "services.4.text": "Жиі қойылатын сұрақтарға жауап береді, қажет кезде менеджерге тапсырады.",
      "process.kicker": "Қалай жұмыс істейміз",
      "process.title": "Алдымен жұмысты түсінеміз. Содан кейін жасаймыз.",
      "process.1.title": "Аудит",
      "process.1.text": "Нақты хабарламаларды, каналдарды, өтінім сапасын, жауап жылдамдығын және менеджерге беру әлсіз жерін қараймыз.",
      "process.2.title": "Сценарий және дизайн",
      "process.2.text": "AI-сценарий, нақтылау сұрақтары, жауаптар және сайт құрылымын жазамыз.",
      "process.3.title": "Әзірлеу",
      "process.3.text": "Ассистент, лендинг, білім базасы, автоматтандыру және менеджер нүктелерін жасаймыз.",
      "process.4.title": "Интеграция",
      "process.4.text": "CRM, Google Sheets, Telegram ескертулері, өтінім тегтері және канал маршрутын қосамыз.",
      "process.5.title": "Іске қосу",
      "process.5.text": "Нақты клиент сценарийлерін тексереміз, әлсіз жерін түзетеміз, командаға көрсетеміз және іске қосамыз.",
      "process.6.title": "Қолдау",
      "process.6.text": "Диалогтарды қарап, жауаптарды қосамыз, FAQ жаңартамыз және жүйені нақты дерекпен жақсартамыз.",
      "useCases.kicker": "Хабарламасы көп бизнеске",
      "useCases.title": "Автоматтандыру алдымен көмектесетін салалар",
      "useCases.subtitle": "Күн сайын бірдей сұрақтарға жауап беретін және өтінімді тез жинағысы келетін бизнеске ыңғайлы.",
      "useCases.1": "Клиникалар",
      "useCases.2": "Сұлулық салондары",
      "useCases.3": "Оқу орталықтары",
      "useCases.4": "Жылжымайтын мүлік",
      "useCases.5": "Мейрамханалар",
      "useCases.6": "Интернет дүкендер",
      "useCases.7": "Құрылыс компаниялары",
      "useCases.8": "Қызмет көрсету бизнесі",
      "benefits.kicker": "Бизнес нәтижесі",
      "benefits.title": "Бірінші жауап жылдам. Қол жұмысы аз.",
      "benefits.subtitle": "Менеджер маңызды диалогпен айналысады. AI қайталанатын сұрақтарға жауап беріп, дерек жинап, өтінімді керек адамға жібереді.",
      "benefits.1.title": "24/7 жауап",
      "benefits.1.text": "Клиенттер кешке, демалыста және үзілісте де пайдалы жауап алады.",
      "benefits.2.title": "Жоғалған өтінім азаяды",
      "benefits.2.text": "Әр сұраныс дереккөзімен, атымен, телефонымен, қажеттілігімен, бюджетімен және жеделдігімен сақталады.",
      "benefits.3.title": "Қолдау жылдамдайды",
      "benefits.3.text": "Жиі сұрақтар бірден жабылады, ал күрделі сұраныстар дұрыс менеджерге өтеді.",
      "benefits.4.title": "Бірнеше тілде жауап",
      "benefits.4.text": "Орыс, қазақ және ағылшын тіліндегі сценарийлерді жүйені қайта жасамай дайындауға болады.",
      "benefits.5.title": "Менеджерге беру",
      "benefits.5.text": "AI қысқа қорытынды береді, менеджер әңгімені басынан бастамайды.",
      "benefits.6.title": "CRM интеграция",
      "benefits.6.text": "Өтінімдер CRM, Google Sheets немесе Telegram ескертуіне автоматты түрде бара алады.",
      "pricing.kicker": "Пакеттер",
      "pricing.title": "Форматты таңдаңыз. Детальдарын аудиттен кейін нақтылаймыз.",
      "pricing.subtitle": "Баға канал санына, интеграцияға, тілге және өтінімнің менеджерге қалай жететініне байланысты.",
      "pricing.start.title": "AI чатбот",
      "pricing.start.text": "WhatsApp, Instagram, Telegram сұрақтарына жауап беріп, өтінім жинайтын AI-ассистент керек бизнеске.",
      "pricing.start.fit": "Ыңғайлы: бір негізгі канал, FAQ, өтінім жинау",
      "pricing.start.price": "50 000 KZT+",
      "pricing.start.note": "Соңғы көлем аудиттен кейін",
      "pricing.start.item.1": "WhatsApp, Instagram, Telegram AI-бот",
      "pricing.start.item.2": "Қызмет, баға және кесте бойынша жауап сценарийі",
      "pricing.start.item.3": "Клиент аты, телефоны және сұранысын жинау",
      "pricing.start.item.4": "Telegram-ға қысқа өтінім ескертуі",
      "pricing.start.item.5": "Білім базасы, тест және іске қосу",
      "pricing.start.cta": "AI чатботты талқылау",
      "pricing.business.badge": "Көбірек таңдалады",
      "pricing.business.title": "AI чатбот + сайт",
      "pricing.business.text": "Қызметті көрсететін сайт және өтінімді менеджерге жіберетін AI-бот керек компанияларға.",
      "pricing.business.fit": "Ыңғайлы: сайт, AI-бот, CRM немесе Sheets",
      "pricing.business.price": "80 000 KZT+",
      "pricing.business.note": "Сайт пен ботты бірге іске қосуға",
      "pricing.business.item.1": "Лендинг немесе бизнес сайт",
      "pricing.business.item.2": "WhatsApp, Instagram, Telegram AI-бот",
      "pricing.business.item.3": "Сайт формасы және чат арқылы өтінім жинау",
      "pricing.business.item.4": "CRM немесе Google Sheets интеграция",
      "pricing.business.item.5": "Менеджерге қысқа қорытындымен беру",
      "pricing.business.cta": "AI чатбот + сайт есебін алу",
      "pricing.premium.title": "Premium AI",
      "pricing.premium.text": "Сату, қолдау, сайт, CRM және ескертулерді бір жүйеге қосқысы келетін командаға.",
      "pricing.premium.fit": "Ыңғайлы: бірнеше канал және тұрақты баптау",
      "pricing.premium.price": "жеке есеп",
      "pricing.premium.note": "Көлемді қарағаннан кейін",
      "pricing.premium.item.1": "Көп бетті сайт",
      "pricing.premium.item.2": "Бірнеше AI-ассистент сценарийі",
      "pricing.premium.item.3": "WhatsApp, Instagram, Telegram, сайт",
      "pricing.premium.item.4": "CRM, Sheets, ескертулер және аналитика",
      "pricing.premium.item.5": "Сценарий тесті және жауаптарды баптау",
      "pricing.premium.item.6": "Жұмыс барысында жақсарту",
      "pricing.premium.cta": "Premium AI жоспарлау",
      "demo.kicker": "AI-чатбот демосы",
      "demo.title": "Сұрақ қалай өтінімге айналады.",
      "demo.subtitle": "Ассистент жауап береді, керек деректі нақтылайды және менеджерге қысқа қорытынды жібереді.",
      "demo.header": "Сайттағы тірі чат",
      "demo.replay": "Қайта көру",
      "demo.summary.title": "Менеджерге қорытынды Telegram арқылы жіберілді",
      "demo.summary.text":
        "Өтінім: Айгерім. Канал: WhatsApp. Қызығушылық: имплантация кеңесі. Бюджет: бөліп төлеуді сұрады. Жеделдік: осы апта. Келесі қадам: 18:00-ден кейін қоңырау.",
      "contact.kicker": "Тегін кеңес",
      "contact.title": "Клиенттер қайда жазатынын көрсетіңіз. Алдымен нені автоматтандыру керек екенін айтамыз.",
      "contact.subtitle": "Каналдар, хабарлама көлемі және қайталанатын сұрақтар туралы айтыңыз. Қарапайым бірінші қадам ұсынамыз.",
      "contact.proof.1.value": "15 мин",
      "contact.proof.1.label": "талдау",
      "contact.proof.2.value": "3 сценарий",
      "contact.proof.2.label": "алдымен не істеу",
      "contact.proof.3.value": "нақты",
      "contact.proof.3.label": "келесі қадам",
      "contact.whatsapp": "Кеңес алу",
      "contact.telegram": "Кеңес алу",
      "form.intro.title": "Кеңеске өтінім",
      "form.intro.text": "Өтінімді жауап бермес бұрын адам қарайды. Деректер тек кеңес дайындауға керек.",
      "form.name.label": "Атыңыз",
      "form.company.label": "Компания",
      "form.businessType.label": "Бизнес түрі",
      "form.service.label": "Қандай қызмет керек",
      "form.service.placeholder": "Қызметті таңдаңыз",
      "form.service.aiChatbot": "AI-чатбот",
      "form.service.website": "Сайт / лендинг",
      "form.service.combo": "Чатбот + сайт",
      "form.service.crm": "CRM / автоматтандыру",
      "form.service.unsure": "Әлі нақты білмеймін",
      "form.channel.label": "Негізгі өтінім каналы",
      "form.channel.placeholder": "Каналды таңдаңыз",
      "form.channel.whatsapp": "WhatsApp",
      "form.channel.instagram": "Instagram",
      "form.channel.telegram": "Telegram",
      "form.channel.website": "Сайт",
      "form.channel.several": "Бірнеше канал",
      "form.messages.label": "Айына хабарлама саны",
      "form.messages.placeholder": "Көлемді таңдаңыз",
      "form.messages.under300": "300-ге дейін",
      "form.messages.300_1000": "300-1 000",
      "form.messages.1000_5000": "1 000-5 000",
      "form.messages.5000": "5 000+",
      "form.preferred.label": "Қалай байланысқан ыңғайлы",
      "form.preferred.placeholder": "Байланыс түрін таңдаңыз",
      "form.preferred.whatsapp": "WhatsApp",
      "form.preferred.telegram": "Telegram",
      "form.preferred.phone": "Қоңырау",
      "form.preferred.email": "Email",
      "form.contact.label": "Контакт",
      "form.goal.label": "Алдымен нені автоматтандыру керек?",
      "form.submit": "Өтінім жіберу",
      "form.privacy": "Деректеріңіз рассылкаға немесе автоматты сатылым тізбегіне қосылмайды.",
      "final.kicker": "Хабарлама көбейген кезде",
      "final.title": "Бір каналдан бастаңыз. Жұмыс істесе, кеңейтеміз.",
      "final.subtitle": "Қолмен жауап беруді азайтып, көбірек өтінім сақтайтын алғашқы автоматтандыруды таңдауға көмектесеміз.",
      "final.cta": "Кеңес алу",
      "footer.brandTagline": "Қазақстан және СНГ үшін AI-автоматтандыру",
      "footer.description": "AI-ассистенттер, сайттар және хабарламасы көп бизнеске арналған қарапайым процестер.",
      "footer.services.title": "Қызметтер",
      "footer.services.1": "AI-чатботтар",
      "footer.services.2": "Сайттар",
      "footer.services.3": "CRM интеграциялар",
      "footer.services.4": "Қолдауды автоматтандыру",
      "footer.company.title": "Компания",
      "footer.company.1": "Процесс",
      "footer.company.2": "Пакеттер",
      "footer.contact.title": "Байланыс",
      "footer.contact.location": "Алматы және СНГ бойынша қашықтан",
      "footer.legal": "(c) 2026 Orda AI Studio. Барлық құқықтар қорғалған.",
      "footer.localization": "Қазақ, орыс және ағылшын тілдеріне дайын."
    },
    placeholders: {
      "form.name.placeholder": "Айгерім",
      "form.company.placeholder": "Компания атауы",
      "form.businessType.placeholder": "Клиника, салон, мектеп, жылжымайтын мүлік, интернет дүкен",
      "form.contact.placeholder": "+7 777 000 00 00 немесе @telegram",
      "form.goal.placeholder": "Мысалы: бағаға жауап беру, өтінім жинау, менеджерге хабарлау, Google Sheets қосу"
    },
    aria: {
      "brand.aria": "Orda AI Studio басты беті",
      "language.aria": "Тілді таңдау",
      "nav.menu.open": "Мәзірді ашу",
      "nav.menu.close": "Мәзірді жабу",
      "hero.proofAria": "Іске асыруға сенім пункттері",
      "hero.visualAria": "AI-өтінімдер анимациялық панелі",
      "console.channelsAria": "Каналдардан келген хабарламалар",
      "console.chatAria": "AI-ассистент диалогының превьюі",
      "proof.aria": "Сенім белгілері",
      "contact.channelAria": "Тікелей кеңес арналары",
      "contact.whatsappAria": "WhatsApp арқылы кеңес алу",
      "contact.telegramAria": "Telegram арқылы кеңес алу"
    },
    status: {
      loading: "Өтініміңіз дайындалып жатыр...",
      success: "Өтінім қабылданды. Кейін бұл форманы CRM немесе Telegram процесіне қосуға болады."
    },
    demoMessages: [
      ["Клиент", "Сәлеметсіз бе. Имплантация бойынша кеңес қанша тұрады және 18:00-ден кейін уақыт бар ма?"],
      ["AI-ассистент", "Алғашқы кеңес 15 000 KZT бастап. Иә, кешкі уақыттар бар. Өзіңіз үшін жазыласыз ба?"],
      ["Клиент", "Иә, өзім үшін. Алматыдамын, бөліп төлеу туралы да білгім келеді."],
      ["AI-ассистент", "Түсіндім. Бөліп төлеу дәрігер жоспарыннан кейін талқыланады. Атыңыз бен менеджерге беретін нөміріңіз қандай?"],
      ["Клиент", "Айгерім. +7 777 123 45 67. 18:00-ден кейін хабарлассын."],
      ["AI-ассистент", "Рахмет, Айгерім. Менеджерге қалаңызды, сұранысыңызды, төлем сұрағын, нөміріңізді және ыңғайлы уақытты жібердім."]
    ]
  }
};

let currentLanguage = getStoredLanguage();
let demoTimers = [];

function getStoredLanguage() {
  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return SUPPORTED_LANGUAGES.includes(savedLanguage) ? savedLanguage : DEFAULT_LANGUAGE;
}

function getLanguageData(lang = currentLanguage) {
  return translations[lang] || translations[DEFAULT_LANGUAGE];
}

function getText(key, lang = currentLanguage) {
  const data = getLanguageData(lang);
  return data.text[key] || data.placeholders[key] || data.aria[key] || translations.en.text[key] || key;
}

function setMetaContent(selector, value) {
  const element = document.querySelector(selector);
  if (element && value) {
    element.setAttribute("content", value);
  }
}

function applyMetadata(lang) {
  const meta = getLanguageData(lang).meta;
  document.title = meta.title;
  setMetaContent('meta[name="description"]', meta.description);
  setMetaContent('meta[property="og:title"]', meta.ogTitle);
  setMetaContent('meta[property="og:description"]', meta.ogDescription);
  setMetaContent('meta[name="twitter:title"]', meta.twitterTitle);
  setMetaContent('meta[name="twitter:description"]', meta.twitterDescription);
}

function applyText(lang) {
  const data = getLanguageData(lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (key && data.text[key]) {
      element.textContent = data.text[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (key && data.placeholders[key]) {
      element.setAttribute("placeholder", data.placeholders[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (key && data.aria[key]) {
      element.setAttribute("aria-label", data.aria[key]);
    }
  });
}

function updateLanguageButtons(lang) {
  languageButtons.forEach((button) => {
    const isActive = button.dataset.langSwitch === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setMenu(open) {
  const data = getLanguageData();
  body.classList.toggle("nav-open", open);
  menuToggle?.setAttribute("aria-expanded", String(open));
  menuToggle?.setAttribute("aria-label", open ? data.aria["nav.menu.close"] : data.aria["nav.menu.open"]);
}

function setLanguage(lang, options = {}) {
  if (!SUPPORTED_LANGUAGES.includes(lang)) return;

  currentLanguage = lang;
  const data = getLanguageData(lang);

  document.documentElement.lang = data.htmlLang;
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  applyMetadata(lang);
  applyText(lang);
  updateLanguageButtons(lang);
  setMenu(body.classList.contains("nav-open"));
  updateClock();
  playDemo();

  if (options.track) {
    trackEvent("language_switch", { language: lang });
  }
}

function trackEvent(eventName, eventData = {}) {
  const payload = {
    event: eventName,
    language: currentLanguage,
    timestamp: new Date().toISOString(),
    ...eventData
  };
  console.info("[Orda analytics]", payload);
}

function clearDemoTimers() {
  demoTimers.forEach((timer) => window.clearTimeout(timer));
  demoTimers = [];
}

function bindPremiumPointerDetails() {
  if (!("matchMedia" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  premiumSurfaces.forEach((surface) => {
    let frame = 0;
    let isInsideSurface = false;
    const current = { x: 0.5, y: 0 };
    const target = { x: 0.5, y: 0 };

    const resetSpotlight = () => {
      surface.style.removeProperty("--spotlight-x");
      surface.style.removeProperty("--spotlight-y");
    };

    const setSpotlight = (x, y) => {
      surface.style.setProperty("--spotlight-x", `${(x * 100).toFixed(2)}%`);
      surface.style.setProperty("--spotlight-y", `${(y * 100).toFixed(2)}%`);
    };

    const animateSpotlight = () => {
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;
      setSpotlight(current.x, current.y);

      const isSettled = Math.abs(target.x - current.x) < 0.001 && Math.abs(target.y - current.y) < 0.001;

      if (isSettled) {
        current.x = target.x;
        current.y = target.y;
        setSpotlight(current.x, current.y);
        frame = 0;

        if (!isInsideSurface) resetSpotlight();
        return;
      }

      frame = window.requestAnimationFrame(animateSpotlight);
    };

    const scheduleSpotlight = () => {
      if (!frame) frame = window.requestAnimationFrame(animateSpotlight);
    };

    const updateTarget = (event, immediate = false) => {
      const rect = surface.getBoundingClientRect();
      target.x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
      target.y = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1);

      if (immediate) {
        current.x = target.x;
        current.y = target.y;
        setSpotlight(current.x, current.y);
      }

      scheduleSpotlight();
    };

    surface.addEventListener("pointerenter", (event) => {
      isInsideSurface = true;
      updateTarget(event, true);
    });

    surface.addEventListener("pointermove", (event) => {
      isInsideSurface = true;
      updateTarget(event);
    });

    surface.addEventListener("pointerleave", () => {
      target.x = 0.5;
      target.y = 0;
      isInsideSurface = false;
      scheduleSpotlight();
    });
  });
}

function bindStoryCursorInteractions() {
  if (!storySection || !("matchMedia" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  let frame = 0;
  let isInsideStory = false;
  const current = { x: 0.5, y: 0.22 };
  const target = { x: 0.5, y: 0.22 };

  const resetStoryMotion = () => {
    storySection.style.removeProperty("--story-x");
    storySection.style.removeProperty("--story-y");
    storySection.style.removeProperty("--story-shift-x");
    storySection.style.removeProperty("--story-shift-y");
    storySection.style.removeProperty("--story-shift-x-alt");
    storySection.style.removeProperty("--story-shift-y-alt");
    storySection.style.removeProperty("--story-tilt-x");
    storySection.style.removeProperty("--story-tilt-y");
  };

  const setStoryMotion = (x, y) => {
    const dx = x - 0.5;
    const dy = y - 0.5;

    storySection.style.setProperty("--story-x", `${(x * 100).toFixed(2)}%`);
    storySection.style.setProperty("--story-y", `${(y * 100).toFixed(2)}%`);
    storySection.style.setProperty("--story-shift-x", `${(dx * 6).toFixed(2)}px`);
    storySection.style.setProperty("--story-shift-y", `${(dy * 4).toFixed(2)}px`);
    storySection.style.setProperty("--story-shift-x-alt", `${(dx * -5).toFixed(2)}px`);
    storySection.style.setProperty("--story-shift-y-alt", `${(dy * -4).toFixed(2)}px`);
    storySection.style.setProperty("--story-tilt-x", `${(dx * 0.35).toFixed(3)}deg`);
    storySection.style.setProperty("--story-tilt-y", `${(dy * -0.35).toFixed(3)}deg`);
  };

  const animateStoryMotion = () => {
    current.x += (target.x - current.x) * 0.08;
    current.y += (target.y - current.y) * 0.08;
    setStoryMotion(current.x, current.y);

    const isSettled = Math.abs(target.x - current.x) < 0.001 && Math.abs(target.y - current.y) < 0.001;

    if (isSettled) {
      current.x = target.x;
      current.y = target.y;
      setStoryMotion(current.x, current.y);
      frame = 0;

      if (!isInsideStory) resetStoryMotion();
      return;
    }

    frame = window.requestAnimationFrame(animateStoryMotion);
  };

  const scheduleStoryMotion = () => {
    if (!frame) frame = window.requestAnimationFrame(animateStoryMotion);
  };

  storySection.addEventListener("pointermove", (event) => {
    const rect = storySection.getBoundingClientRect();
    target.x = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1);
    target.y = Math.min(Math.max((event.clientY - rect.top) / rect.height, 0), 1);
    isInsideStory = true;
    scheduleStoryMotion();
  });

  storySection.addEventListener("pointerleave", () => {
    target.x = 0.5;
    target.y = 0.22;
    isInsideStory = false;
    scheduleStoryMotion();
  });
}

function bindUseCaseBackgroundMotion() {
  if (!useCasesSection || !("matchMedia" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  let frame = 0;
  let isInsideSection = false;
  const current = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };

  const resetUseCaseGlow = () => {
    useCasesSection.style.removeProperty("--use-glow-shift-x");
    useCasesSection.style.removeProperty("--use-glow-shift-y");
    useCasesSection.style.removeProperty("--use-soft-glow-shift-x");
    useCasesSection.style.removeProperty("--use-soft-glow-shift-y");
    useCasesSection.style.removeProperty("--use-halo-shift-x");
    useCasesSection.style.removeProperty("--use-halo-shift-y");
    useCasesSection.style.removeProperty("--use-ambient-shift-x");
    useCasesSection.style.removeProperty("--use-ambient-shift-y");
    useCasesSection.style.removeProperty("--use-ambient-alt-shift-x");
    useCasesSection.style.removeProperty("--use-ambient-alt-shift-y");
  };

  const setUseCaseGlow = (x, y) => {
    useCasesSection.style.setProperty("--use-glow-shift-x", `${(-x * 76).toFixed(2)}px`);
    useCasesSection.style.setProperty("--use-glow-shift-y", `${(-y * 48).toFixed(2)}px`);
    useCasesSection.style.setProperty("--use-soft-glow-shift-x", `${(-x * 58).toFixed(2)}px`);
    useCasesSection.style.setProperty("--use-soft-glow-shift-y", `${(-y * 36).toFixed(2)}px`);
    useCasesSection.style.setProperty("--use-halo-shift-x", `${(-x * 42).toFixed(2)}px`);
    useCasesSection.style.setProperty("--use-halo-shift-y", `${(-y * 26).toFixed(2)}px`);
    useCasesSection.style.setProperty("--use-ambient-shift-x", `${(-x * 92).toFixed(2)}px`);
    useCasesSection.style.setProperty("--use-ambient-shift-y", `${(-y * 58).toFixed(2)}px`);
    useCasesSection.style.setProperty("--use-ambient-alt-shift-x", `${(-x * 66).toFixed(2)}px`);
    useCasesSection.style.setProperty("--use-ambient-alt-shift-y", `${(-y * 42).toFixed(2)}px`);
  };

  const animateUseCaseGlow = () => {
    current.x += (target.x - current.x) * 0.095;
    current.y += (target.y - current.y) * 0.095;
    setUseCaseGlow(current.x, current.y);

    const isSettled = Math.abs(target.x - current.x) < 0.001 && Math.abs(target.y - current.y) < 0.001;

    if (isSettled) {
      current.x = target.x;
      current.y = target.y;
      setUseCaseGlow(current.x, current.y);
      frame = 0;

      if (!isInsideSection) resetUseCaseGlow();
      return;
    }

    frame = window.requestAnimationFrame(animateUseCaseGlow);
  };

  const scheduleUseCaseGlow = () => {
    if (!frame) frame = window.requestAnimationFrame(animateUseCaseGlow);
  };

  useCasesSection.addEventListener("pointermove", (event) => {
    const rect = useCasesSection.getBoundingClientRect();
    target.x = Math.min(Math.max(((event.clientX - rect.left) / rect.width - 0.5) * 2, -1), 1);
    target.y = Math.min(Math.max(((event.clientY - rect.top) / rect.height - 0.5) * 2, -1), 1);
    isInsideSection = true;
    scheduleUseCaseGlow();
  });

  useCasesSection.addEventListener("pointerleave", () => {
    target.x = 0;
    target.y = 0;
    isInsideSection = false;
    scheduleUseCaseGlow();
  });
}

function addDemoMessage(message, index) {
  const bubble = document.createElement("article");
  const role = index % 2 === 0 ? "customer" : "ai";
  const label = document.createElement("strong");
  const text = document.createElement("p");

  bubble.className = `demo-message ${role}`;
  label.textContent = message[0];
  text.textContent = message[1];
  bubble.append(label, text);
  demoChat?.appendChild(bubble);
}

function playDemo() {
  if (!demoChat) return;

  clearDemoTimers();
  demoChat.innerHTML = "";

  getLanguageData().demoMessages.forEach((message, index) => {
    const timer = window.setTimeout(() => addDemoMessage(message, index), index * 520);
    demoTimers.push(timer);
  });
}

function getFormValue(selector) {
  const element = leadForm?.querySelector(selector);
  return element instanceof HTMLInputElement || element instanceof HTMLSelectElement || element instanceof HTMLTextAreaElement
    ? element.value
    : "";
}

function updateClock() {
  if (!liveClock) return;

  const localeMap = {
    en: "en-US",
    ru: "ru-RU",
    kz: "kk-KZ"
  };

  liveClock.textContent = new Date().toLocaleTimeString(localeMap[currentLanguage], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

menuToggle?.addEventListener("click", () => {
  setMenu(!body.classList.contains("nav-open"));
});

navMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    setMenu(false);
  }
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.langSwitch;
    if (lang && lang !== currentLanguage) {
      setLanguage(lang, { track: true });
    }
  });
});

document.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target.closest("[data-track]") : null;
  if (!(target instanceof HTMLElement)) return;

  const trackType = target.dataset.track;
  const baseData = {
    placement: target.dataset.trackPlacement || "unknown",
    label: target.textContent?.trim() || "",
    href: target instanceof HTMLAnchorElement ? target.href : undefined
  };

  if (trackType === "pricing_package_click") {
    trackEvent("pricing_package_click", {
      ...baseData,
      package: target.dataset.trackPackage || "unknown"
    });
    return;
  }

  if (trackType === "whatsapp_click") {
    trackEvent("whatsapp_click", baseData);
    return;
  }

  if (trackType === "telegram_click") {
    trackEvent("telegram_click", baseData);
    return;
  }

  trackEvent("cta_click", baseData);
});

replayButton?.addEventListener("click", () => {
  trackEvent("cta_click", { placement: "demo_replay", label: getText("demo.replay") });
  playDemo();
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const submitButton = leadForm.querySelector("button[type='submit']");
  const status = getLanguageData().status;

  submitButton?.setAttribute("disabled", "true");
  if (formStatus) {
    formStatus.textContent = status.loading;
  }

  window.setTimeout(() => {
    if (formStatus) {
      formStatus.textContent = status.success;
    }

    trackEvent("form_submit_success", {
      service: getFormValue("#service"),
      businessTypeProvided: Boolean(getFormValue("#business-type")),
      channel: getFormValue("#channel"),
      messageVolume: getFormValue("#messages"),
      preferredContact: getFormValue("#preferred-contact")
    });

    submitButton?.removeAttribute("disabled");
    leadForm.reset();
  }, 700);
});

bindPremiumPointerDetails();
bindStoryCursorInteractions();
bindUseCaseBackgroundMotion();
setLanguage(currentLanguage);
window.setInterval(updateClock, 30000);
