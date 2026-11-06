/* =========================================================
   PORTFOLIO DATA — edit this file to change your information.
   Every text has 4 languages: en, bn, ar, de.
   If a language is missing, English is shown.
   ========================================================= */
window.CONFIG = {
  name: { en:"Shakil Ahmed", bn:"শাকিল আহমেদ", ar:"شكيل أحمد", de:"Shakil Ahmed" },
  nick: "Abir",
  tagline: { en:"Your Learning & Digital Growth Partner!", bn:"আপনার শেখা ও ডিজিটাল অগ্রগতির সঙ্গী!", ar:"شريكك في التعلّم والنمو الرقمي!", de:"Ihr Partner für Lernen & digitales Wachstum!" },
  email: "shakilahmedabir@gmail.com",
  phone: "+880 1785 055 056",
  whatsapp: "8801785055056",
  linkedin: "https://www.linkedin.com/in/shakilahmedabir/",
  facebook: "https://www.facebook.com/shakilahmedabir0",
  github: "https://github.com/shakilahmedabir",
  youtube: "",
  availability: { en:"Available every day after 6:00 pm (Bangladesh time)", bn:"প্রতিদিন সন্ধ্যা ৬টার পর (বাংলাদেশ সময়)", ar:"متاح يومياً بعد الساعة 6 مساءً (بتوقيت بنغلاديش)", de:"Täglich ab 18:00 Uhr verfügbar (Bangladesch-Zeit)" },
  availFrom: "18:00",
  location: { en:"Mirpur-10, Dhaka, Bangladesh", bn:"মিরপুর-১০, ঢাকা, বাংলাদেশ", ar:"ميربور-10، دكا، بنغلاديش", de:"Mirpur-10, Dhaka, Bangladesch" },
  // Free form-to-email service: Web3Forms (account herrshakil@gmail.com — messages arrive there).
  // The access key is public by design (it only allows sending TO you), so it is safe in this file.
  formEndpoint: "https://api.web3forms.com/submit",
  web3formsKey: "e0ebb571-28aa-435e-aac5-c541925baec9",
  avatar: "assets/me.jpg",              // hero photo (from 01_Profile/Photos_original/me4.png)
  faceAvatar: "assets/me_face.jpg",     // small round photo in the header
  cardAvatar: "assets/me_card.jpg",     // game character card (from me5.png)
  cutAvatar: "assets/me_cut.webp",      // transparent cutout for the hero (background removed)
  botAvatar: "assets/avatar.svg",       // cute cartoon for the chatbot
  bkash: "",                            // e.g. "01785055056 (Personal)" — leave empty to hide
  calendarUrl: "",                      // optional Google Calendar booking page link
  // SHA-256 of your owner PIN (set from the info form on 2026-11-07; the PIN itself is never stored).
  adminPinHash: "caa998cdd95dce88cc9469997057af24aea19801c38c5c680a8bcf96a321176b",
  defaultLang: "en",
  siteUrl: "https://shakilahmedabir.github.io",
  // Public-visibility choices from the info form: political campaign work = hidden.
  showPolitical: false,
};

/* Short credentials shown as a checklist in the hero */
window.CREDS = [
  {en:"B.Sc. in CSE — Eastern University (ongoing)",bn:"বিএসসি ইন সিএসই — ইস্টার্ন ইউনিভার্সিটি (চলমান)",ar:"بكالوريوس علوم الحاسوب — جامعة إيسترن (جارٍ)",de:"B.Sc. Informatik — Eastern University (laufend)"},
  {en:"Diploma in Computer Technology — BTEB",bn:"ডিপ্লোমা ইন কম্পিউটার টেকনোলজি — বিটিইবি",ar:"دبلوم تكنولوجيا الحاسوب — BTEB",de:"Diplom Computertechnik — BTEB"},
  {en:"NTVQF Level-4 Trainer & Assessor (CBT&A)",bn:"NTVQF লেভেল-৪ ট্রেইনার ও অ্যাসেসর (CBT&A)",ar:"مدرب ومقيّم معتمد NTVQF المستوى 4",de:"NTVQF-Level-4-Trainer & Prüfer (CBT&A)"},
  {en:"Google & IBM certified IT support · 28 certificates",bn:"গুগল ও আইবিএম সার্টিফায়েড আইটি সাপোর্ট · ২৮টি সার্টিফিকেট",ar:"دعم تقني معتمد من غوغل وIBM · 28 شهادة",de:"Google- & IBM-zertifizierter IT-Support · 28 Zertifikate"},
];

window.STATS = [
  { n:"5+",  l:{en:"Years experience",bn:"বছরের অভিজ্ঞতা",ar:"سنوات خبرة",de:"Jahre Erfahrung"} },
  { n:"300+",l:{en:"Students taught",bn:"শিক্ষার্থী",ar:"طالب",de:"Schüler unterrichtet"} },
  { n:"60+", l:{en:"Canva designs",bn:"ক্যানভা ডিজাইন",ar:"تصميم كانفا",de:"Canva-Designs"} },
  { n:"30+", l:{en:"Lab PCs managed",bn:"ল্যাব কম্পিউটার",ar:"حاسوب في المختبر",de:"Labor-PCs betreut"} },
];

window.HEADLINES = {
  en:["ICT Educator","IT Support Specialist","AI-Powered Content Creator","Canva Designer","Digital Marketing Planner","Certified Trainer & Assessor"],
  bn:["আইসিটি শিক্ষক","আইটি সাপোর্ট স্পেশালিস্ট","এআই-চালিত কনটেন্ট নির্মাতা","ক্যানভা ডিজাইনার","ডিজিটাল মার্কেটিং পরিকল্পনাকারী","সার্টিফায়েড ট্রেইনার ও অ্যাসেসর"],
  ar:["معلّم تقنية المعلومات","أخصائي دعم تقني","صانع محتوى بالذكاء الاصطناعي","مصمم كانفا","مخطط تسويق رقمي","مدرب ومقيّم معتمد"],
  de:["ICT-Lehrer","IT-Support-Spezialist","KI-gestützter Content Creator","Canva-Designer","Digital-Marketing-Planer","Zertifizierter Trainer & Prüfer"],
};

window.ABOUT = {
  en:"I teach ICT from Class 6 to HSC (C, Python, HTML, databases) at Greenfield School & College, run a 30+ PC lab, and build the institution's admission campaigns. My superpower: using AI (Claude, ChatGPT, Gemini) to turn ideas into professional bilingual documents, decks, designs, chatbots and code — in hours, not weeks. NTVQF Level-4 certified trainer & assessor, with an NGO IT background.",
  bn:"আমি গ্রীনফিল্ড স্কুল অ্যান্ড কলেজে ষষ্ঠ শ্রেণি থেকে এইচএসসি পর্যন্ত আইসিটি (সি, পাইথন, এইচটিএমএল, ডাটাবেজ) পড়াই, ৩০+ কম্পিউটারের ল্যাব পরিচালনা করি এবং প্রতিষ্ঠানের ভর্তি ক্যাম্পেইন তৈরি করি। আমার সুপারপাওয়ার: এআই (Claude, ChatGPT, Gemini) ব্যবহার করে আইডিয়াকে কয়েক ঘণ্টায় পেশাদার বাংলা-ইংরেজি ডকুমেন্ট, প্রেজেন্টেশন, ডিজাইন, চ্যাটবট ও কোডে রূপ দেওয়া। আমি NTVQF লেভেল-৪ সার্টিফায়েড ট্রেইনার ও অ্যাসেসর, এনজিওতে আইটি সাপোর্টের অভিজ্ঞতাও আছে।",
  ar:"أدرّس تقنية المعلومات من الصف السادس حتى الثانوية العليا (C، بايثون، HTML، قواعد البيانات) في مدرسة وكلية غرينفيلد، وأدير مختبراً يضم أكثر من 30 حاسوباً، وأصمم حملات القبول للمؤسسة. قوتي الخاصة: استخدام الذكاء الاصطناعي لتحويل الأفكار إلى مستندات وعروض وتصاميم وروبوتات محادثة وبرمجيات احترافية ثنائية اللغة خلال ساعات. مدرب ومقيّم معتمد من المستوى الرابع NTVQF، ولدي خبرة في الدعم التقني لدى منظمة غير حكومية.",
  de:"Ich unterrichte ICT von Klasse 6 bis zum HSC-Abschluss (C, Python, HTML, Datenbanken) am Greenfield School & College, betreue ein Labor mit über 30 PCs und gestalte die Aufnahmekampagnen der Schule. Meine Superkraft: Mit KI (Claude, ChatGPT, Gemini) verwandle ich Ideen in Stunden statt Wochen in professionelle zweisprachige Dokumente, Präsentationen, Designs, Chatbots und Code. NTVQF-Level-4-zertifizierter Trainer & Prüfer mit IT-Erfahrung bei einer NGO.",
};

/* Game-style skills. lv = 1..10. group: main | pro | sub | tool */
window.SKILLS = [
  { g:"main", lv:9, icon:"🧑‍🏫", n:{en:"ICT Teaching (Class 6–HSC)",bn:"আইসিটি শিক্ষাদান (৬ষ্ঠ–এইচএসসি)",ar:"تدريس تقنية المعلومات",de:"ICT-Unterricht (Kl. 6–HSC)"}, ev:"Lesson plans 2025–26, Class 6–11 folders" },
  { g:"main", lv:9, icon:"📚", n:{en:"Curriculum & Lesson Design",bn:"কারিকুলাম ও লেসন প্ল্যান",ar:"تصميم المناهج والدروس",de:"Lehrplan- & Unterrichtsdesign"}, ev:"Syllabus 2025 BN/EV, lesson plans Jun–Jul 2026" },
  { g:"main", lv:9, icon:"📝", n:{en:"Assessment Design (MCQ, CQ, Tests)",bn:"প্রশ্নপত্র ও মূল্যায়ন (MCQ, CQ)",ar:"تصميم الاختبارات",de:"Prüfungsdesign (MCQ, CQ)"}, ev:"2026 X-Test, Class 5 model tests, MCQ banks" },
  { g:"main", lv:9, icon:"🤖", n:{en:"AI-Powered Document Production",bn:"এআই দিয়ে দ্রুত ডকুমেন্ট তৈরি",ar:"إنتاج المستندات بالذكاء الاصطناعي",de:"KI-gestützte Dokumentenerstellung"}, ev:"Ads pack, marketing proposal, HTML decks" },
  { g:"main", lv:8, icon:"🛠️", n:{en:"IT Support & Lab Admin",bn:"আইটি সাপোর্ট ও ল্যাব ব্যবস্থাপনা",ar:"الدعم التقني وإدارة المختبر",de:"IT-Support & Laborverwaltung"}, ev:"30+ PC lab at Greenfield, RISDA NGO IT (95% tickets in SLA)" },
  { g:"pro", lv:8, icon:"🎨", n:{en:"Graphic Design (Canva Pro, Illustrator)",bn:"গ্রাফিক ডিজাইন (ক্যানভা, ইলাস্ট্রেটর)",ar:"التصميم الجرافيكي",de:"Grafikdesign (Canva, Illustrator)"}, ev:"60+ Canva designs, logos" },
  { g:"pro", lv:8, icon:"📣", n:{en:"Digital Marketing for Education",bn:"শিক্ষা প্রতিষ্ঠানের ডিজিটাল মার্কেটিং",ar:"التسويق الرقمي للتعليم",de:"Digitales Bildungsmarketing"}, ev:"GFSC Digital Marketing Plan 2027" },
  { g:"pro", lv:7, icon:"🎬", n:{en:"Video Planning & Reels",bn:"ভিডিও পরিকল্পনা ও রিল",ar:"تخطيط الفيديو والريلز",de:"Videoplanung & Reels"}, ev:"Junior video plan, 1080×1920 reels" },
  { g:"pro", lv:7, icon:"💬", n:{en:"Chatbot / AI Agent Setup",bn:"চ্যাটবট / এআই এজেন্ট সেটআপ",ar:"إعداد روبوتات المحادثة",de:"Chatbot-/KI-Agent-Einrichtung"}, ev:"Meta Messenger AI agent for admissions" },
  { g:"pro", lv:7, icon:"💻", n:{en:"Programming: C, Python, HTML, SQL",bn:"প্রোগ্রামিং: সি, পাইথন, এইচটিএমএল, এসকিউএল",ar:"البرمجة: C، بايثون، HTML، SQL",de:"Programmierung: C, Python, HTML, SQL"}, ev:"Class-11 C/HTML/DB, Python projects" },
  { g:"pro", lv:7, icon:"🌐", n:{en:"Networking & Servers (Win/Linux)",bn:"নেটওয়ার্কিং ও সার্ভার",ar:"الشبكات والخوادم",de:"Netzwerke & Server"}, ev:"SEIP-BASIS 240h, Google SysAdmin" },
  { g:"pro", lv:8, icon:"🎓", n:{en:"Training & Assessment (CBT&A)",bn:"ট্রেনিং ও অ্যাসেসমেন্ট (CBT&A)",ar:"التدريب والتقييم",de:"Training & Bewertung (CBT&A)"}, ev:"NTVQF L4, bootcamp 100+ students" },
  { g:"pro", lv:9, icon:"📊", n:{en:"MS Office & Google Workspace",bn:"এমএস অফিস ও গুগল ওয়ার্কস্পেস",ar:"مايكروسوفت أوفيس وغوغل",de:"MS Office & Google Workspace"}, ev:"Marksheets with formulas, routines" },
  { g:"sub", lv:8, icon:"🔁", n:{en:"Bangla ⇄ English Content",bn:"বাংলা ⇄ ইংরেজি কনটেন্ট",ar:"محتوى بنغالي ⇄ إنجليزي",de:"Bangla ⇄ Englisch Inhalte"}, ev:"Every lesson in BM + EV" },
  { g:"sub", lv:8, icon:"📄", n:{en:"Documentation & CV Writing",bn:"ডকুমেন্টেশন ও সিভি তৈরি",ar:"التوثيق وكتابة السير الذاتية",de:"Dokumentation & Lebensläufe"}, ev:"CVs for colleagues, institutional docs" },
  { g:"sub", lv:7, icon:"🎉", n:{en:"Event Coordination",bn:"ইভেন্ট সমন্বয়",ar:"تنسيق الفعاليات",de:"Eventkoordination"}, ev:"Prize giving, cultural events, PTM" },
  { g:"sub", lv:7, icon:"🧠", n:{en:"Prompt Engineering",bn:"প্রম্পট ইঞ্জিনিয়ারিং",ar:"هندسة الأوامر",de:"Prompt Engineering"}, ev:"Daily Claude/GPT/Gemini workflows" },
  { g:"sub", lv:6, icon:"🐍", n:{en:"Python Automation",bn:"পাইথন অটোমেশন",ar:"الأتمتة ببايثون",de:"Python-Automatisierung"}, ev:"Image & reel pipeline scripts" },
  { g:"sub", lv:6, icon:"🧩", n:{en:"Web Dashboards (HTML/CSS/JS)",bn:"ওয়েব ড্যাশবোর্ড",ar:"لوحات ويب",de:"Web-Dashboards"}, ev:"Productivity system, practical dashboard" },
  { g:"sub", lv:4, icon:"🗣️", n:{en:"German (A2)",bn:"জার্মান ভাষা (A2)",ar:"الألمانية (A2)",de:"Deutsch (A2)"}, ev:"The Open University" },
];
window.TOOLS = ["Canva Pro","Illustrator","CapCut","Claude","ChatGPT","Gemini","MS Word","Excel","PowerPoint","Google Workspace","VS Code","Python","C","HTML/CSS/JS","SQL","Windows Server","Linux","Meta Business Suite"];

window.ACHIEVEMENTS = [
  { i:"🏆", n:{en:"NTVQF L4 Trainer",bn:"NTVQF লেভেল-৪ ট্রেইনার",ar:"مدرب NTVQF مستوى 4",de:"NTVQF-L4-Trainer"} },
  { i:"🚀", n:{en:"100+ Bootcamp Students",bn:"১০০+ বুটক্যাম্প শিক্ষার্থী",ar:"أكثر من 100 طالب",de:"100+ Bootcamp-Schüler"} },
  { i:"🧑‍💻", n:{en:"Google SysAdmin",bn:"গুগল সিস্টেম অ্যাডমিন",ar:"مدير أنظمة غوغل",de:"Google SysAdmin"} },
  { i:"🛡️", n:{en:"IBM Cybersecurity",bn:"আইবিএম সাইবার সিকিউরিটি",ar:"أمن سيبراني IBM",de:"IBM Cybersecurity"} },
  { i:"📣", n:{en:"Year-long Marketing Plan",bn:"বার্ষিক মার্কেটিং প্ল্যান",ar:"خطة تسويق سنوية",de:"Jahres-Marketingplan"} },
  { i:"🤖", n:{en:"Built an AI Messenger Agent",bn:"এআই মেসেঞ্জার এজেন্ট তৈরি",ar:"بنى وكيل ماسنجر ذكي",de:"KI-Messenger-Agent gebaut"} },
  { i:"📜", n:{en:"28 Certificates (11 verifiable)",bn:"২৮টি সার্টিফিকেট (১১টি যাচাইযোগ্য)",ar:"28 شهادة (11 قابلة للتحقق)",de:"28 Zertifikate (11 überprüfbar)"} },
  { i:"🎨", n:{en:"60+ Designs Shipped",bn:"৬০+ ডিজাইন সম্পন্ন",ar:"أكثر من 60 تصميماً",de:"60+ Designs"} },
];

window.ROLES = [
  { k:"teacher",   m:96, i:"🧑‍🏫", theme:"pro-teacher",  n:{en:"ICT Teacher / Lecturer",bn:"আইসিটি শিক্ষক / প্রভাষক",ar:"معلّم / محاضر تقنية المعلومات",de:"ICT-Lehrer / Dozent"} },
  { k:"designer2", m:90, i:"📚", theme:"pro-teacher",  n:{en:"Instructional Designer",bn:"ইনস্ট্রাকশনাল ডিজাইনার",ar:"مصمم تعليمي",de:"Instructional Designer"} },
  { k:"trainer",   m:90, i:"🎓", theme:"pro-trainer",  n:{en:"Digital Skills Trainer",bn:"ডিজিটাল স্কিলস ট্রেইনার",ar:"مدرب مهارات رقمية",de:"Trainer für digitale Kompetenzen"} },
  { k:"itpro",     m:88, i:"🛠️", theme:"pro-it",       n:{en:"IT Support Specialist",bn:"আইটি সাপোর্ট স্পেশালিস্ট",ar:"أخصائي دعم تقني",de:"IT-Support-Spezialist"} },
  { k:"assess",    m:88, i:"📝", theme:"pro-teacher",  n:{en:"Assessment / Question Specialist",bn:"প্রশ্নপত্র বিশেষজ্ঞ",ar:"أخصائي تقييم",de:"Prüfungsspezialist"} },
  { k:"ai",        m:85, i:"🤖", theme:"pro-ai",       n:{en:"AI Content & Automation Specialist",bn:"এআই কনটেন্ট ও অটোমেশন স্পেশালিস্ট",ar:"أخصائي محتوى وأتمتة بالذكاء الاصطناعي",de:"KI-Content- & Automatisierungsspezialist"} },
  { k:"marketer",  m:82, i:"📣", theme:"pro-marketer", n:{en:"Social Media / Digital Marketing Executive",bn:"সোশ্যাল মিডিয়া / ডিজিটাল মার্কেটিং এক্সিকিউটিভ",ar:"مسؤول تسويق رقمي",de:"Social-Media-/Digital-Marketing-Manager"} },
  { k:"designer",  m:80, i:"🎨", theme:"pro-designer", n:{en:"Graphic Designer (Canva)",bn:"গ্রাফিক ডিজাইনার (ক্যানভা)",ar:"مصمم جرافيك",de:"Grafikdesigner (Canva)"} },
  { k:"aitrainer", m:80, i:"🗣️", theme:"pro-ai",       n:{en:"AI Trainer / Bengali Data Annotator",bn:"এআই ট্রেইনার / বাংলা ডাটা অ্যানোটেটর",ar:"مدرب ذكاء اصطناعي (بنغالي)",de:"KI-Trainer (Bengalisch)"} },
  { k:"ngo",       m:80, i:"🌍", theme:"pro-it",       n:{en:"NGO ICT / Digital Impact Assistant",bn:"এনজিও আইসিটি / ডিজিটাল ইমপ্যাক্ট",ar:"مساعد تقنية في منظمة",de:"NGO-ICT-Assistent"} },
  { k:"admin",     m:78, i:"🗂️", theme:"pro-corporate",n:{en:"Documentation / Office Admin",bn:"ডকুমেন্টেশন / অফিস অ্যাডমিন",ar:"التوثيق والإدارة",de:"Dokumentation / Büroverwaltung"} },
  { k:"video",     m:70, i:"🎬", theme:"pro-designer", n:{en:"Video Content Planner",bn:"ভিডিও কনটেন্ট প্ল্যানার",ar:"مخطط محتوى فيديو",de:"Video-Content-Planer"} },
  { k:"sysadmin",  m:65, i:"🖧", theme:"pro-it",       n:{en:"Junior System / Network Admin",bn:"জুনিয়র সিস্টেম / নেটওয়ার্ক অ্যাডমিন",ar:"مدير أنظمة وشبكات مبتدئ",de:"Junior System-/Netzwerkadmin"} },
  { k:"dev",       m:60, i:"💻", theme:"pro-dev",      n:{en:"Junior Web Developer",bn:"জুনিয়র ওয়েব ডেভেলপার",ar:"مطور ويب مبتدئ",de:"Junior-Webentwickler"} },
];

/* Experience — combined from all CV versions (ATS, UNICEF, PASCH, RWS, HELD, RISDA resumes)
   and evidence files (video plan "My Tasks", marketing plan, exam folders). sec = responsibility areas. */
window.EXPERIENCE = [
  { org:"Greenfield School & College", when:"Jan 2024 – Present", where:"Mirpur-10, Dhaka-1216",
    r:{en:"Lecturer (ICT) — SSC & HSC Level",bn:"প্রভাষক (আইসিটি) — এসএসসি ও এইচএসসি",ar:"محاضر تقنية المعلومات — المرحلتان الثانوية والعليا",de:"Dozent (ICT) — SSC- & HSC-Stufe"},
    sec:[
      { h:{en:"📚 Teaching & curriculum",bn:"📚 শিক্ষাদান ও কারিকুলাম",ar:"📚 التدريس والمناهج",de:"📚 Unterricht & Lehrplan"},
        i:{en:["Teach ICT to 300+ students from Class 6 to HSC, in both Bangla and English versions, with student-centred, personalised lessons","Cover the full HSC syllabus: number systems, C programming, HTML & web design, databases (SQL) and networking","Design the yearly syllabus, term lesson plans and class summaries aligned with the NCTB curriculum","Create digital worksheets, practical sheets, lab exercises and practical reports for every topic","Ran a Digital Essentials Bootcamp (MS Office, Canva Pro, design principles, digital literacy) for 100+ students","Use projects, games and story-based slides (e.g. 'Infinity Castle' Python loops) to raise engagement"],
           bn:["৬ষ্ঠ শ্রেণি থেকে এইচএসসি পর্যন্ত ৩০০+ শিক্ষার্থীকে বাংলা ও ইংরেজি দুই ভার্সনে, শিক্ষার্থী-কেন্দ্রিক ও ব্যক্তিগত পদ্ধতিতে আইসিটি পড়াই","এইচএসসির পূর্ণ সিলেবাস: সংখ্যা পদ্ধতি, সি প্রোগ্রামিং, এইচটিএমএল ও ওয়েব ডিজাইন, ডাটাবেজ (SQL) ও নেটওয়ার্কিং","NCTB কারিকুলাম অনুযায়ী বার্ষিক সিলেবাস, টার্মভিত্তিক লেসন প্ল্যান ও ক্লাস সামারি তৈরি","প্রতিটি অধ্যায়ের ডিজিটাল ওয়ার্কশিট, প্র্যাকটিক্যাল শিট, ল্যাব এক্সারসাইজ ও প্র্যাকটিক্যাল রিপোর্ট তৈরি","১০০+ শিক্ষার্থীর জন্য ডিজিটাল এসেনশিয়ালস বুটক্যাম্প (এমএস অফিস, ক্যানভা প্রো, ডিজাইন, ডিজিটাল সাক্ষরতা) পরিচালনা","প্রজেক্ট, গেম ও গল্পভিত্তিক স্লাইড (যেমন 'ইনফিনিটি ক্যাসল' পাইথন লুপ) দিয়ে শিক্ষার্থীদের আগ্রহ বাড়াই"],
           ar:["تدريس أكثر من 300 طالب من الصف السادس حتى الثانوية العليا بالنسختين البنغالية والإنجليزية بأسلوب يتمحور حول الطالب","تغطية منهج الثانوية العليا كاملاً: أنظمة العد، برمجة C، HTML وتصميم الويب، قواعد البيانات والشبكات","إعداد المنهج السنوي وخطط الدروس الفصلية وفق المنهج الوطني","إعداد أوراق عمل رقمية وعملية وتمارين مختبر وتقارير","إدارة معسكر المهارات الرقمية الأساسية لأكثر من 100 طالب","استخدام المشاريع والألعاب والشرائح القصصية لزيادة التفاعل"],
           de:["Unterricht für 300+ Schüler von Klasse 6 bis HSC, auf Bangla und Englisch, schülerzentriert und individuell","Kompletter HSC-Lehrplan: Zahlensysteme, C-Programmierung, HTML & Webdesign, Datenbanken (SQL), Netzwerke","Jahreslehrplan, Unterrichtspläne und Stundenzusammenfassungen nach NCTB-Lehrplan","Digitale Arbeitsblätter, Praxisblätter, Laborübungen und Praxisberichte zu jedem Thema","Digital-Essentials-Bootcamp (MS Office, Canva Pro, Design, digitale Kompetenz) für 100+ Schüler","Projekte, Spiele und Story-Folien (z. B. 'Infinity Castle' Python-Schleifen) für mehr Motivation"]} },
      { h:{en:"📝 Assessment & exams",bn:"📝 মূল্যায়ন ও পরীক্ষা",ar:"📝 التقييم والاختبارات",de:"📝 Prüfungen & Bewertung"},
        i:{en:["Set creative (CQ) and MCQ papers, class tests, model tests and practical exams with answer keys","Built MCQ banks, assessment rubrics, OMR sheets and formula-driven Excel marksheets","Compile and format test-exam question papers for colleagues across subjects (SSC Test 2026)"],
           bn:["সৃজনশীল (CQ) ও MCQ প্রশ্নপত্র, ক্লাস টেস্ট, মডেল টেস্ট ও প্র্যাকটিক্যাল পরীক্ষা উত্তরমালাসহ তৈরি","MCQ ব্যাংক, মূল্যায়ন রুব্রিক, OMR শিট ও ফর্মুলাযুক্ত এক্সেল মার্কশিট তৈরি","বিভিন্ন বিষয়ের সহকর্মীদের টেস্ট পরীক্ষার প্রশ্নপত্র সংকলন ও ফরম্যাট (এসএসসি টেস্ট ২০২৬)"],
           ar:["إعداد أسئلة إبداعية واختيار من متعدد واختبارات نموذجية وعملية مع مفاتيح الإجابة","بناء بنوك الأسئلة وسلالم التقييم ونماذج OMR وكشوف درجات إكسل تلقائية","تجميع وتنسيق أوراق الاختبارات لزملاء من مواد مختلفة"],
           de:["Kreative (CQ) und MCQ-Prüfungen, Tests, Modelltests und Praxisprüfungen mit Lösungen","MCQ-Banken, Bewertungsraster, OMR-Bögen und Excel-Notenblätter mit Formeln","Zusammenstellung und Formatierung der Testprüfungen für Kollegen aller Fächer (SSC 2026)"]} },
      { h:{en:"📣 Digital communication & admissions",bn:"📣 ডিজিটাল কমিউনিকেশন ও ভর্তি",ar:"📣 الاتصال الرقمي والقبول",de:"📣 Digitale Kommunikation & Aufnahme"},
        i:{en:["Manage the institution's website content and social media: events, notices, achievements","Design admission campaigns — Bangla/English flyers, posts, banners, reels — with Canva Pro, Illustrator and AI tools","Wrote the 2027 year-long Digital Marketing Plan: proposal, content calendar, budget, KPIs and Bangla/English decks","Built and trained the Facebook Messenger AI agent that answers parents' admission questions 24/7","Produced the Junior Section promo videos end-to-end: scripts, shooting-day agenda, consent, coordinating teachers, students, music club and guardians, editor guides"],
           bn:["প্রতিষ্ঠানের ওয়েবসাইট ও সোশ্যাল মিডিয়া পরিচালনা: ইভেন্ট, নোটিশ, অর্জন","ক্যানভা প্রো, ইলাস্ট্রেটর ও এআই দিয়ে ভর্তি ক্যাম্পেইন — বাংলা/ইংরেজি ফ্লায়ার, পোস্ট, ব্যানার, রিল","২০২৭ সালের বার্ষিক ডিজিটাল মার্কেটিং প্ল্যান: প্রস্তাবনা, কনটেন্ট ক্যালেন্ডার, বাজেট, KPI ও বাংলা/ইংরেজি প্রেজেন্টেশন","অভিভাবকদের ভর্তি-প্রশ্নের ২৪/৭ উত্তর দিতে ফেসবুক মেসেঞ্জার এআই এজেন্ট তৈরি ও প্রশিক্ষণ","জুনিয়র সেকশনের প্রচারণা ভিডিও শুরু থেকে শেষ: স্ক্রিপ্ট, শুটিং এজেন্ডা, সম্মতি, শিক্ষক-শিক্ষার্থী-মিউজিক ক্লাব-অভিভাবক সমন্বয়, এডিটর গাইড"],
           ar:["إدارة محتوى الموقع ووسائل التواصل: الفعاليات والإعلانات والإنجازات","تصميم حملات القبول — منشورات ولافتات وريلز بلغتين — بكانفا وإليستريتور والذكاء الاصطناعي","كتابة خطة التسويق الرقمي السنوية 2027: المقترح والتقويم والميزانية والمؤشرات والعروض","بناء وتدريب وكيل ماسنجر ذكي يجيب أسئلة القبول على مدار الساعة","إنتاج فيديوهات القسم الابتدائي كاملة: النصوص وجدول التصوير والموافقات والتنسيق وأدلة المونتاج"],
           de:["Website-Inhalte und Social Media der Schule: Events, Mitteilungen, Erfolge","Aufnahmekampagnen — zweisprachige Flyer, Posts, Banner, Reels — mit Canva Pro, Illustrator und KI","Jahres-Digitalmarketingplan 2027: Konzept, Redaktionskalender, Budget, KPIs, Präsentationen","Facebook-Messenger-KI-Agent gebaut und trainiert, der Eltern rund um die Uhr antwortet","Werbevideos der Grundschule komplett produziert: Skripte, Drehplan, Einwilligungen, Koordination, Schnittleitfaden"]} },
      { h:{en:"🛠️ ICT lab & IT support",bn:"🛠️ আইসিটি ল্যাব ও আইটি সাপোর্ট",ar:"🛠️ مختبر الحاسوب والدعم التقني",de:"🛠️ ICT-Labor & IT-Support"},
        i:{en:["Administer the ICT lab of 30+ workstations: hardware deployment, OS & software installation, updates and maintenance","Maintain LAN/WAN connectivity and network security for staff and students","Level-1 IT support for students and faculty — diagnose and fix hardware, software and network issues fast","Set up multimedia classrooms (PCs, projectors, audio) and virtual classes on Zoom / Google Meet; trained teachers to use them"],
           bn:["৩০+ কম্পিউটারের আইসিটি ল্যাব: হার্ডওয়্যার স্থাপন, ওএস ও সফটওয়্যার ইনস্টল, আপডেট ও রক্ষণাবেক্ষণ","শিক্ষক-শিক্ষার্থীদের জন্য LAN/WAN সংযোগ ও নেটওয়ার্ক নিরাপত্তা বজায় রাখা","শিক্ষক-শিক্ষার্থীদের লেভেল-১ আইটি সাপোর্ট — হার্ডওয়্যার, সফটওয়্যার ও নেটওয়ার্ক সমস্যা দ্রুত সমাধান","মাল্টিমিডিয়া ক্লাসরুম (পিসি, প্রজেক্টর, সাউন্ড) ও Zoom/Google Meet-এ ভার্চুয়াল ক্লাস সেটআপ; শিক্ষকদের প্রশিক্ষণ"],
           ar:["إدارة مختبر يضم أكثر من 30 حاسوباً: تركيب الأجهزة والأنظمة والبرامج والصيانة","الحفاظ على اتصال الشبكات وأمنها","دعم تقني من المستوى الأول للطلاب والمعلمين","تجهيز الفصول متعددة الوسائط والفصول الافتراضية وتدريب المعلمين عليها"],
           de:["Betreuung des ICT-Labors mit 30+ PCs: Hardware, Betriebssysteme, Software, Updates, Wartung","LAN/WAN-Verbindung und Netzwerksicherheit für Lehrkräfte und Schüler","Level-1-IT-Support: schnelle Lösung von Hardware-, Software- und Netzwerkproblemen","Multimedia-Klassenräume und virtuelle Klassen (Zoom/Meet) eingerichtet; Lehrkräfte geschult"]} },
      { h:{en:"🗂️ Administration & events",bn:"🗂️ প্রশাসনিক কাজ ও ইভেন্ট",ar:"🗂️ الإدارة والفعاليات",de:"🗂️ Verwaltung & Events"},
        i:{en:["Prepare class routines, attendance and digital records; support campus system configuration","Draft institutional documents, notices and professional CVs for colleagues","Coordinate and cover events: Annual Prize Giving, cultural programmes, parent-teacher meetings"],
           bn:["ক্লাস রুটিন, হাজিরা ও ডিজিটাল রেকর্ড তৈরি; ক্যাম্পাস সিস্টেম কনফিগারেশনে সহায়তা","প্রাতিষ্ঠানিক ডকুমেন্ট, নোটিশ ও সহকর্মীদের পেশাদার সিভি তৈরি","বার্ষিক পুরস্কার বিতরণী, সাংস্কৃতিক অনুষ্ঠান ও অভিভাবক সভা সমন্বয় ও কভারেজ"],
           ar:["إعداد الجداول والحضور والسجلات الرقمية","صياغة المستندات المؤسسية والإعلانات والسير الذاتية للزملاء","تنسيق وتغطية الفعاليات: حفل الجوائز والبرامج الثقافية واجتماعات أولياء الأمور"],
           de:["Stundenpläne, Anwesenheit und digitale Akten; Unterstützung der Systemkonfiguration","Institutionsdokumente, Mitteilungen und Lebensläufe für Kollegen","Koordination von Preisverleihung, Kulturprogrammen und Elternabenden"]} },
    ] },
  { org:"RISDA-Bangladesh (NGO) — RISDA Institute of Technology & RISDA Polytechnic Institute", when:"Jul 2019 – Jun 2021", where:"Kaliakoir, Birulia, Dhaka",
    r:{en:"Assistant Executive — IT Support Service & Jr. Instructor",bn:"সহকারী নির্বাহী — আইটি সাপোর্ট সার্ভিস ও জুনিয়র ইন্সট্রাক্টর",ar:"مسؤول تنفيذي مساعد — الدعم التقني ومدرّب مبتدئ",de:"Assistant Executive — IT-Support & Junior-Ausbilder"},
    sec:[
      { h:{en:"🖧 IT operations",bn:"🖧 আইটি অপারেশন",ar:"🖧 العمليات التقنية",de:"🖧 IT-Betrieb"},
        i:{en:["Managed the organisation's overall IT, networking and software functions for 50+ users","Ran diagnostics and troubleshooting on computers, servers, storage and internet services — 95% of tickets solved within SLA","Repaired or replaced faulty computer and network components","Maintained printers, scanners, external storage, LAN/WAN and high-speed internet for reliable, secure communication","Assessed hardware lifecycle and recommended upgrades to keep systems up to date and reduce downtime"],
           bn:["৫০+ ব্যবহারকারীর জন্য প্রতিষ্ঠানের সামগ্রিক আইটি, নেটওয়ার্কিং ও সফটওয়্যার ব্যবস্থাপনা","কম্পিউটার, সার্ভার, স্টোরেজ ও ইন্টারনেট সেবার ডায়াগনস্টিক ও সমাধান — ৯৫% সমস্যা নির্ধারিত সময়ে","ত্রুটিপূর্ণ কম্পিউটার ও নেটওয়ার্ক যন্ত্রাংশ মেরামত বা প্রতিস্থাপন","প্রিন্টার, স্ক্যানার, এক্সটার্নাল স্টোরেজ, LAN/WAN ও হাই-স্পিড ইন্টারনেট রক্ষণাবেক্ষণ","হার্ডওয়্যারের অবস্থা মূল্যায়ন করে আপগ্রেডের সুপারিশ — সিস্টেম হালনাগাদ রাখা ও ডাউনটাইম কমানো"],
           ar:["إدارة تقنية المعلومات والشبكات والبرمجيات لأكثر من 50 مستخدماً","تشخيص وإصلاح الحواسيب والخوادم والتخزين والإنترنت — 95% ضمن الوقت المحدد","إصلاح أو استبدال المكونات المعطلة","صيانة الطابعات والماسحات والتخزين والشبكات والإنترنت","تقييم دورة حياة الأجهزة واقتراح الترقيات"],
           de:["Gesamte IT, Netzwerk und Software der Organisation für 50+ Nutzer verwaltet","Diagnose und Fehlerbehebung an PCs, Servern, Speicher und Internet — 95 % im SLA","Defekte Computer- und Netzwerkkomponenten repariert oder ersetzt","Drucker, Scanner, externe Speicher, LAN/WAN und Internet gewartet","Hardware-Lebenszyklus bewertet und Upgrades empfohlen"]} },
      { h:{en:"🎓 Training & coordination",bn:"🎓 প্রশিক্ষণ ও সমন্বয়",ar:"🎓 التدريب والتنسيق",de:"🎓 Training & Koordination"},
        i:{en:["As Junior Instructor, trained 200+ staff and trainees on office applications, data storage, internet use and system configuration","Organised training programmes: schedules, travel, accommodation and coordination across multiple institutes","Secretary, SAMPREETI — Preventing Violent Extremism initiative (2019)","Completed workplace ethics and occupational/fire safety training (TTTI, Bangladesh Army)"],
           bn:["জুনিয়র ইন্সট্রাক্টর হিসেবে ২০০+ কর্মী ও প্রশিক্ষণার্থীকে অফিস অ্যাপ্লিকেশন, ডাটা সংরক্ষণ, ইন্টারনেট ও সিস্টেম কনফিগারেশন প্রশিক্ষণ","প্রশিক্ষণ কর্মসূচি আয়োজন: সময়সূচি, যাতায়াত, আবাসন ও একাধিক প্রতিষ্ঠানের সাথে সমন্বয়","সেক্রেটারি, SAMPREETI — সহিংস উগ্রবাদ প্রতিরোধ উদ্যোগ (২০১৯)","কর্মক্ষেত্রের নৈতিকতা ও অগ্নি নিরাপত্তা প্রশিক্ষণ (TTTI, বাংলাদেশ সেনাবাহিনী)"],
           ar:["تدريب أكثر من 200 موظف ومتدرب على التطبيقات المكتبية والتخزين والإنترنت","تنظيم برامج التدريب: الجداول والسفر والإقامة والتنسيق بين المعاهد","أمين سر مبادرة SAMPREETI لمنع التطرف العنيف (2019)","إتمام تدريب أخلاقيات العمل والسلامة من الحرائق"],
           de:["Als Junior-Ausbilder 200+ Mitarbeitende in Office, Datenspeicherung, Internet und Systemkonfiguration geschult","Trainingsprogramme organisiert: Zeitpläne, Reisen, Unterkunft, Koordination mehrerer Institute","Sekretär, SAMPREETI — Prävention von gewalttätigem Extremismus (2019)","Schulung zu Arbeitsethik und Brandschutz (TTTI, Bangladesch-Armee)"]} },
    ] },
];

window.SECTORS = [
  { i:"🏫", n:{en:"School & College Education",bn:"স্কুল ও কলেজ শিক্ষা",ar:"التعليم المدرسي والجامعي",de:"Schul- & Collegebildung"} },
  { i:"🔧", n:{en:"Technical & Vocational (TVET)",bn:"কারিগরি ও বৃত্তিমূলক শিক্ষা",ar:"التعليم التقني والمهني",de:"Berufliche Bildung (TVET)"} },
  { i:"🤝", n:{en:"NGO & Development",bn:"এনজিও ও উন্নয়ন",ar:"المنظمات والتنمية",de:"NGO & Entwicklung"} },
  { i:"📣", n:{en:"Digital Marketing & Ads",bn:"ডিজিটাল মার্কেটিং ও বিজ্ঞাপন",ar:"التسويق الرقمي والإعلان",de:"Digitalmarketing & Werbung"} },
  { i:"🎨", n:{en:"Graphic Design & Branding",bn:"গ্রাফিক ডিজাইন ও ব্র্যান্ডিং",ar:"التصميم والعلامات التجارية",de:"Grafikdesign & Branding"} },
  { i:"🎬", n:{en:"Video & Media Production",bn:"ভিডিও ও মিডিয়া প্রোডাকশন",ar:"إنتاج الفيديو والإعلام",de:"Video- & Medienproduktion"} },
  { i:"🤖", n:{en:"AI & Automation",bn:"এআই ও অটোমেশন",ar:"الذكاء الاصطناعي والأتمتة",de:"KI & Automatisierung"} },
  { i:"🏪", n:{en:"Small Business Services",bn:"ক্ষুদ্র ব্যবসা সেবা",ar:"خدمات الأعمال الصغيرة",de:"Kleinunternehmen-Services"} },
  { i:"🖧", n:{en:"IT Services & Infrastructure",bn:"আইটি সেবা ও অবকাঠামো",ar:"خدمات وبنية تقنية",de:"IT-Services & Infrastruktur"} },
  { i:"🎉", n:{en:"Events & Community",bn:"ইভেন্ট ও কমিউনিটি",ar:"الفعاليات والمجتمع",de:"Events & Gemeinschaft"} },
];

window.EDUCATION = [
  { t:{en:"BSc in Computer Science & Engineering (ongoing)",bn:"বিএসসি ইন কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (চলমান)",ar:"بكالوريوس علوم وهندسة الحاسوب (جارٍ)",de:"BSc Informatik & Ingenieurwesen (laufend)"}, s:"Eastern University · 2022 –" },
  { t:{en:"Diploma in Engineering — Computer Technology",bn:"ডিপ্লোমা ইন ইঞ্জিনিয়ারিং — কম্পিউটার টেকনোলজি",ar:"دبلوم هندسة — تكنولوجيا الحاسوب",de:"Ingenieurdiplom — Computertechnik"}, s:"F. K. Polytechnic Institute · BTEB · CGPA 3.22 · 2016–2020" },
];
/* Certificates — read from the scanned files on 2026-11-07.
   The files themselves stay PRIVATE in 07_Education_Certifications/Certificates_PRIVATE
   (they contain parents' names, date of birth, registration numbers).
   v = public verification link (only for certificates that have one). */
window.CERT_GROUPS = {
  voc:  {i:"🏛️", en:"National skills (NTVQF / SEIP)", bn:"জাতীয় দক্ষতা (NTVQF / SEIP)", ar:"المهارات الوطنية", de:"Nationale Qualifikationen"},
  it:   {i:"🖧", en:"IT support, networking & security", bn:"আইটি সাপোর্ট, নেটওয়ার্কিং ও নিরাপত্তা", ar:"الدعم التقني والشبكات والأمن", de:"IT-Support, Netzwerk & Sicherheit"},
  data: {i:"🐍", en:"Programming & databases", bn:"প্রোগ্রামিং ও ডাটাবেজ", ar:"البرمجة وقواعد البيانات", de:"Programmierung & Datenbanken"},
  biz:  {i:"🎨", en:"Design, branding & projects", bn:"ডিজাইন, ব্র্যান্ডিং ও প্রজেক্ট", ar:"التصميم والعلامة والمشاريع", de:"Design, Branding & Projekte"},
  teach:{i:"🎓", en:"Teaching, training & languages", bn:"শিক্ষকতা, প্রশিক্ষণ ও ভাষা", ar:"التدريس والتدريب واللغات", de:"Lehre, Training & Sprachen"},
  safe: {i:"🦺", en:"Safety & community", bn:"নিরাপত্তা ও কমিউনিটি", ar:"السلامة والمجتمع", de:"Sicherheit & Gemeinschaft"},
};
window.CERTS = [
  { g:"voc",  y:2019, n:"National Certificate Level-4 — Competency-Based Training & Assessment (Trainer & Assessor)", by:"BTEB · NTVQF" },
  { g:"voc",  y:2020, n:"National Skill Certificate Level-1 — IT Support Technician", by:"BTEB · NTVQF" },
  { g:"voc",  y:2019, n:"National Skill Certificate Level-1 — Computer Operation", by:"BTEB · NTVQF" },
  { g:"voc",  y:2022, n:"Server Administration incl. Windows Server Management (240 hours)", by:"SEIP · BASIS · UY LAB" },
  { g:"it",   y:2020, n:"System Administration and IT Infrastructure Services", by:"Google · Coursera", v:"https://coursera.org/verify/XLW56GMPL79M" },
  { g:"it",   y:2020, n:"Technical Support Fundamentals", by:"Google · Coursera", v:"https://coursera.org/verify/CYB8HD4AL953" },
  { g:"it",   y:2020, n:"Cybersecurity Roles, Processes & Operating System Security", by:"IBM · Coursera", v:"https://coursera.org/verify/NZNDGC4WGYEY" },
  { g:"it",   y:2020, n:"CCNA Routing and Switching — The Easy Certification Guide", by:"Eduonix", v:"https://www.eduonix.com/certificate/9fe7a43f93" },
  { g:"it",   y:2021, n:"IT Troubleshooting Skill Training", by:"Udemy", v:"https://ude.my/UC-1b3dbf85-3810-45e2-8c38-d5fc356e4663" },
  { g:"it",   y:2021, n:"IT Management: Essential Principles and Skills", by:"Udemy", v:"https://ude.my/UC-63979e4a-89d8-4996-8d6e-f5dd46e087c7" },
  { g:"it",   y:2019, n:"Computer & ICT Skill (90 days, Grade A+)", by:"IMB Professional & Vocational Skill Institute" },
  { g:"data", y:2020, n:"Language Classification with Naive Bayes in Python", by:"Coursera Project Network", v:"https://coursera.org/verify/325GYN3BF6A8" },
  { g:"data", y:2020, n:"Performing Data Definition and Manipulation in SQL", by:"Coursera Project Network", v:"https://coursera.org/verify/TJUGVKVEHGS4" },
  { g:"data", y:2020, n:"Database Design and Diagramming in Dia", by:"Coursera Project Network", v:"https://coursera.org/verify/TVSTN9TNTJSM" },
  { g:"biz",  y:2020, n:"Create a Business Marketing Brand Kit Using Canva", by:"Coursera Project Network", v:"https://coursera.org/verify/82L4K79D4CJU" },
  { g:"biz",  y:2020, n:"Initiating and Planning Projects", by:"University of California, Irvine · Coursera", v:"https://coursera.org/verify/B9PXBR4F26SP" },
  { g:"biz",  y:2019, n:"Diploma in CAD (AutoCAD)", by:"CAD training centre, Uttara" },
  { g:"biz",  y:2019, n:"Technical & Engineering Drawing (90 days, Grade A+)", by:"IMB Professional & Vocational Skill Institute" },
  { g:"teach",y:2019, n:"Generic, Vocational & Technological Skills Development Teachers Training (72 h, Grade A+)", by:"IMB Professional & Vocational Skill Institute" },
  { g:"teach",y:2019, n:"Counselling, Coaching & Incubated Training Program (Grade A+)", by:"IMB Professional & Vocational Skill Institute" },
  { g:"teach",y:2019, n:"Industrial Attachment Training Program — Computer Technology (12 weeks)", by:"IMB Professional & Vocational Skill Institute" },
  { g:"teach",y:2019, n:"Certificate of Appreciation — Industrial Training (90 hours)", by:"IMB Professional & Vocational Skill Institute" },
  { g:"teach",y:2022, n:"Professional English Communication Skill (Grade A)", by:"SEIP · Ace Skills Development Academy" },
  { g:"teach",y:2023, n:"Getting Started with German 1", by:"The Open University · OpenLearn" },
  { g:"safe", y:2019, n:"Discipline & Industrial Fire Safety Training", by:"Trust Technical Training Institute (Bangladesh Army)" },
  { g:"safe", y:2023, n:"Fire Safety Management (self-guided online course)", by:"Online course" },
  { g:"safe", y:2019, n:"Preventing Violent Extremism — training participation", by:"RISDA-Bangladesh" },
  { g:"safe", y:2018, n:"Cyber Security Trends & Awareness — workshop participation", by:"IDEB ICT & Innovation Cell" },
];

/* Services you sell / offer */
window.SERVICES = {
  hire:[
    {en:"Lesson plans & worksheets (BN/EN)",bn:"লেসন প্ল্যান ও ওয়ার্কশিট",ar:"خطط دروس وأوراق عمل",de:"Unterrichtspläne & Arbeitsblätter"},
    {en:"Question papers, MCQ banks, answer keys",bn:"প্রশ্নপত্র, MCQ ব্যাংক, উত্তরপত্র",ar:"أوراق أسئلة وبنوك اختيار من متعدد",de:"Prüfungen, MCQ-Banken, Lösungen"},
    {en:"Canva design: flyer, logo, social posts",bn:"ক্যানভা ডিজাইন: ফ্লায়ার, লোগো, পোস্ট",ar:"تصميم كانفا: منشورات وشعارات",de:"Canva-Design: Flyer, Logo, Posts"},
    {en:"Digital marketing plan for schools",bn:"স্কুলের ডিজিটাল মার্কেটিং প্ল্যান",ar:"خطة تسويق رقمي للمدارس",de:"Digitaler Marketingplan für Schulen"},
    {en:"AI documents, decks, CVs in hours",bn:"এআই দিয়ে দ্রুত ডকুমেন্ট, প্রেজেন্টেশন, সিভি",ar:"مستندات وعروض وسير ذاتية بالذكاء الاصطناعي",de:"KI-Dokumente, Präsentationen, CVs"},
    {en:"Messenger / website chatbot setup",bn:"মেসেঞ্জার / ওয়েবসাইট চ্যাটবট সেটআপ",ar:"إعداد روبوت محادثة",de:"Messenger-/Website-Chatbot"},
    {en:"Simple websites & dashboards",bn:"সাধারণ ওয়েবসাইট ও ড্যাশবোর্ড",ar:"مواقع ولوحات بسيطة",de:"Einfache Websites & Dashboards"},
    {en:"Computer lab / IT support setup",bn:"কম্পিউটার ল্যাব / আইটি সাপোর্ট",ar:"إعداد مختبر حاسوب ودعم تقني",de:"Computerlabor-/IT-Support"},
    {en:"Video shooting plan & editor guide",bn:"ভিডিও শুটিং প্ল্যান ও এডিটর গাইড",ar:"خطة تصوير فيديو",de:"Videodrehplan & Schnittleitfaden"},
  ],
  learn:[
    {en:"HSC ICT (full syllabus, BN/EN)",bn:"এইচএসসি আইসিটি (পূর্ণ সিলেবাস)",ar:"تقنية المعلومات للثانوية",de:"HSC-ICT (kompletter Lehrplan)"},
    {en:"SSC / Class 6–10 ICT",bn:"এসএসসি / ৬ষ্ঠ–১০ম আইসিটি",ar:"تقنية المعلومات للصفوف 6–10",de:"ICT Klasse 6–10"},
    {en:"C programming from zero",bn:"শূন্য থেকে সি প্রোগ্রামিং",ar:"البرمجة بلغة C من الصفر",de:"C-Programmierung von null"},
    {en:"Python for beginners & kids",bn:"বিগিনার ও শিশুদের জন্য পাইথন",ar:"بايثون للمبتدئين والأطفال",de:"Python für Einsteiger & Kinder"},
    {en:"HTML & CSS — build your first website",bn:"এইচটিএমএল ও সিএসএস — প্রথম ওয়েবসাইট",ar:"HTML وCSS — أول موقع",de:"HTML & CSS — erste Website"},
    {en:"Canva design masterclass",bn:"ক্যানভা ডিজাইন মাস্টারক্লাস",ar:"دورة كانفا المتقدمة",de:"Canva-Masterclass"},
    {en:"AI for teachers & office work (prompting)",bn:"শিক্ষক ও অফিসের জন্য এআই (প্রম্পটিং)",ar:"الذكاء الاصطناعي للمعلمين",de:"KI für Lehrkräfte & Büro"},
    {en:"MS Office & Excel formulas",bn:"এমএস অফিস ও এক্সেল ফর্মুলা",ar:"أوفيس وصيغ إكسل",de:"MS Office & Excel-Formeln"},
  ],
  packages:[
    { id:"intro", price:0,    min:15, n:{en:"Free intro call",bn:"ফ্রি পরিচিতি কল",ar:"مكالمة تعارف مجانية",de:"Kostenloses Kennenlernen"} },
    { id:"s30",   price:500,  min:30, n:{en:"Consultation / tutoring",bn:"পরামর্শ / টিউশন",ar:"استشارة / درس",de:"Beratung / Nachhilfe"} },
    { id:"s60",   price:1000, min:60, n:{en:"Deep session / project planning",bn:"বিস্তারিত সেশন / প্রজেক্ট প্ল্যানিং",ar:"جلسة معمقة / تخطيط مشروع",de:"Intensiv-Session / Projektplanung"} },
    { id:"work",  price:2500, min:120,n:{en:"Workshop for your team (2 h)",bn:"আপনার টিমের জন্য কর্মশালা (২ ঘণ্টা)",ar:"ورشة لفريقك (ساعتان)",de:"Workshop für Ihr Team (2 Std.)"} },
    { id:"tuition", price:8000, min:0, per:"month", n:{en:"Monthly tuition",bn:"মাসিক টিউশন",ar:"دروس شهرية",de:"Monatlicher Unterricht"} },
  ],
};
