/* =========================================================
   THEME ENGINE DATA — add a new theme by copying one line.
   c: [background, surface(card), text, muted, primary, accent]
   fx: none | sakura | snow | stars | confetti | leaves | rain | bubbles | fire | lantern | hearts | sparks
   font: optional heading font (Google Fonts loaded in index.html)
   ========================================================= */
window.THEME_GROUPS = ["month","elegant","event","anime","prof"];
window.THEMES = [
  // ----- 12 months (Bangladesh seasons) -----
  { id:"m01", g:"month", e:"❄️", n:"January · Winter Mist",      c:["#eef3f8","#ffffff","#1b2a3a","#5b6b7c","#3a6ea5","#9cc3e6"], fx:"snow" },
  { id:"m02", g:"month", e:"🌺", n:"February · Shimul Red",       c:["#fff4f1","#ffffff","#2b1513","#7a5450","#c0392b","#f39c12"], fx:"leaves" },
  { id:"m03", g:"month", e:"🇧🇩", n:"March · Freedom Green",       c:["#f0f8f3","#ffffff","#10261a","#4d6b59","#006a4e","#f42a41"], fx:"confetti" },
  { id:"m04", g:"month", e:"🎏", n:"April · Boishakhi",           c:["#fffaf3","#ffffff","#2a1608","#7b5a3f","#d62828","#f6aa1c"], fx:"confetti" },
  { id:"m05", g:"month", e:"🥭", n:"May · Mango Gold",            c:["#fffbea","#ffffff","#2d2305","#776a3c","#e09f00","#5fa83a"], fx:"sparks" },
  { id:"m06", g:"month", e:"🌧️", n:"June · Monsoon Teal",         c:["#eaf6f6","#ffffff","#0e2a2c","#4f6f70","#0f8b8d","#3d5a80"], fx:"rain" },
  { id:"m07", g:"month", e:"🌼", n:"July · Kadam Rain",           c:["#f4f8ec","#ffffff","#1f2b0e","#61704a","#6a994e","#f2c14e"], fx:"rain" },
  { id:"m08", g:"month", e:"🪷", n:"August · Lotus Pink",         c:["#fdf1f6","#ffffff","#2e1220","#7a5468","#c2185b","#7cb342"], fx:"bubbles" },
  { id:"m09", g:"month", e:"🌾", n:"September · Kash Phul",       c:["#f7f7f2","#ffffff","#22221a","#6b6b5c","#5c6b73","#c9b37e"], fx:"leaves" },
  { id:"m10", g:"month", e:"🍂", n:"October · Autumn Amber",      c:["#fdf5ec","#ffffff","#2b1a0c","#7b6049","#c8641e","#7a3e1b"], fx:"leaves" },
  { id:"m11", g:"month", e:"🌾", n:"November · Nabanna Harvest",  c:["#fbf6e9","#ffffff","#2a2210","#776b4d","#b8860b","#2e7d32"], fx:"sparks" },
  { id:"m12", g:"month", e:"⭐", n:"December · Victory Night",     c:["#0b1a14","#13261e","#eaf5ef","#9bb5a8","#2ecc71","#e74c3c"], fx:"stars" },

  // ----- 12 elegant colour themes -----
  { id:"e-navy",     g:"elegant", e:"⚓", n:"Royal Navy",     c:["#0f1b2d","#17263d","#e8eef7","#9aabc4","#4f8cff","#ffd166"], fx:"stars" },
  { id:"e-emerald",  g:"elegant", e:"💎", n:"Emerald Luxe",   c:["#062a22","#0b3a2f","#e6f4ef","#93b8ab","#2bd9a2","#e6c46c"], fx:"sparks" },
  { id:"e-gold",     g:"elegant", e:"👑", n:"Midnight Gold",  c:["#0d0d0d","#181818","#f5f0e6","#a89f8d","#d4af37","#f1e3b4"], fx:"sparks", font:"Playfair Display" },
  { id:"e-rose",     g:"elegant", e:"🌹", n:"Rose Quartz",    c:["#fdf2f4","#ffffff","#3b1f27","#86656e","#d4708f","#a26769"], fx:"hearts" },
  { id:"e-ivory",    g:"elegant", e:"🕊️", n:"Ivory Sand",     c:["#faf7f0","#ffffff","#2b2620","#7a7062","#8b6f47","#c9a227"], fx:"none", font:"Playfair Display" },
  { id:"e-graphite", g:"elegant", e:"🖤", n:"Graphite",       c:["#1c1c1e","#2a2a2d","#f2f2f2","#a1a1a6","#ffffff","#0a84ff"], fx:"none" },
  { id:"e-sapphire", g:"elegant", e:"🔷", n:"Sapphire",       c:["#f1f5ff","#ffffff","#101a3a","#56607e","#2541b2","#06bee1"], fx:"bubbles" },
  { id:"e-wine",     g:"elegant", e:"🍷", n:"Burgundy Wine",  c:["#1f0a10","#2c1018","#f7e9ec","#c19aa4","#c2185b","#e8b04b"], fx:"sparks" },
  { id:"e-sage",     g:"elegant", e:"🌿", n:"Sage Calm",      c:["#f2f5f0","#ffffff","#1f2a1f","#66735f","#5f7f5a","#c08552"], fx:"leaves" },
  { id:"e-lavender", g:"elegant", e:"💜", n:"Lavender Mist",  c:["#f6f3fc","#ffffff","#2a2140","#6e6585","#7c5cc4","#e58fb1"], fx:"bubbles" },
  { id:"e-pearl",    g:"elegant", e:"🦪", n:"Ocean Pearl",    c:["#eef7f9","#ffffff","#0f2a33","#567580","#1d7a8c","#e0a96d"], fx:"bubbles" },
  { id:"e-obsidian", g:"elegant", e:"🌌", n:"Obsidian Neon",  c:["#07070c","#11111a","#eaeaff","#9090b0","#7f5af0","#2cb67d"], fx:"stars" },

  // ----- Events (auto-applied on these dates when "Auto" is on) -----
  { id:"ev-ekushe",   g:"event", e:"🕯️", n:"21 February · Ekushe",        c:["#111111","#1c1c1c","#f2f2f2","#a8a8a8","#e53935","#ffffff"], fx:"none", dates:["02-19","02-22"] },
  { id:"ev-indep",    g:"event", e:"🇧🇩", n:"26 March · Independence Day", c:["#f2faf5","#ffffff","#0d2418","#4c6a58","#006a4e","#f42a41"], fx:"confetti", dates:["03-24","03-27"] },
  { id:"ev-boishakh", g:"event", e:"🎉", n:"Pohela Boishakh",              c:["#fffaf0","#ffffff","#2a0f0a","#7a5446","#d00000","#ffba08"], fx:"confetti", dates:["04-12","04-15"] },
  { id:"ev-ramadan",  g:"event", e:"🏮", n:"Ramadan Kareem",               c:["#0b1630","#13214a","#f4ecd8","#b4a98c","#e3b04b","#4fb3bf"], fx:"lantern", dates:[] },
  { id:"ev-eid",      g:"event", e:"🌙", n:"Eid Mubarak",                  c:["#06261d","#0c3a2c","#f6f0dc","#b7c2a8","#e9c46a","#2a9d8f"], fx:"stars", dates:[] },
  { id:"ev-teacher",  g:"event", e:"🍎", n:"5 October · Teachers' Day",    c:["#f3f7ee","#ffffff","#1d2a12","#5f6e51","#2f6b2f","#f4a261"], fx:"sparks", dates:["10-04","10-06"] },
  { id:"ev-puja",     g:"event", e:"🪔", n:"Durga Puja",                   c:["#fff6ec","#ffffff","#2e0f05","#7d5240","#c1121f","#ffb703"], fx:"lantern", dates:[] },
  { id:"ev-victory",  g:"event", e:"🏆", n:"16 December · Victory Day",    c:["#0a2016","#12301f","#effaf3","#a3c0ae","#00a86b","#ff3b3b"], fx:"confetti", dates:["12-14","12-17"] },
  { id:"ev-xmas",     g:"event", e:"🎄", n:"Christmas",                    c:["#0f2417","#173322","#f6fbf6","#a9c2ae","#d62828","#f4d35e"], fx:"snow", dates:["12-23","12-26"] },
  { id:"ev-newyear",  g:"event", e:"🎆", n:"New Year",                     c:["#0a0a1a","#151530","#ffffff","#a3a3c2","#ffcf33","#ff4ecd"], fx:"confetti", dates:["12-30","01-02"] },

  // ----- Anime-inspired styles (original looks, no copyrighted characters) -----
  { id:"a-sakura",  g:"anime", e:"🌸", n:"Sakura Breeze",   c:["#fff5f8","#ffffff","#3a1d2b","#8a6577","#ff6fa5","#7ec8e3"], fx:"sakura", font:"Mochiy Pop One" },
  { id:"a-shonen",  g:"anime", e:"🔥", n:"Shonen Blaze",    c:["#140b05","#22140a","#fff3e6","#c9a88a","#ff6b00","#ffd000"], fx:"fire", font:"Bangers" },
  { id:"a-mecha",   g:"anime", e:"🤖", n:"Neon Mecha",      c:["#050b1a","#0b1630","#e0f4ff","#7fa3c2","#00e5ff","#ff2e88"], fx:"sparks", font:"Orbitron" },
  { id:"a-forest",  g:"anime", e:"🍃", n:"Spirit Forest",   c:["#eef6ea","#ffffff","#1b2b16","#5c7354","#4a8c3a","#f2b544"], fx:"leaves", font:"Mochiy Pop One" },
  { id:"a-magic",   g:"anime", e:"✨", n:"Magical Star",    c:["#f8f0ff","#ffffff","#2e1a47","#7a6694","#b14aed","#ffcc4d"], fx:"stars", font:"Mochiy Pop One" },
  { id:"a-ninja",   g:"anime", e:"🥷", n:"Ninja Night",     c:["#0d0d12","#18181f","#f0f0f5","#9a9aab","#e63946","#a8dadc"], fx:"sakura", font:"Bangers" },
  { id:"a-chibi",   g:"anime", e:"🍡", n:"Chibi Candy Pop", c:["#fffaf0","#ffffff","#3d2c3e","#8a7a8b","#ff8fab","#6ec6ff"], fx:"bubbles", font:"Mochiy Pop One" },

  // ----- Profession themes (wear before you send the link) -----
  { id:"pro-teacher",   g:"prof", e:"🧑‍🏫", n:"Teacher · Chalkboard",  c:["#1f3b2d","#274a39","#f3f7f1","#b8cbbf","#ffe66d","#ffffff"], fx:"none", font:"Patrick Hand", role:"teacher" },
  { id:"pro-it",        g:"prof", e:"🖥️", n:"IT Pro · Terminal",     c:["#0a0f0a","#111a11","#d7ffd7","#7fae7f","#39ff14","#00d1ff"], fx:"rain", font:"JetBrains Mono", role:"itpro" },
  { id:"pro-designer",  g:"prof", e:"🎨", n:"Designer · Studio",     c:["#fff8f2","#ffffff","#24152b","#776480","#ff4d6d","#7b2cbf"], fx:"confetti", role:"designer" },
  { id:"pro-marketer",  g:"prof", e:"📣", n:"Marketer · Growth",     c:["#fff7ed","#ffffff","#2b1606","#7b5a3f","#f97316","#2563eb"], fx:"sparks", role:"marketer" },
  { id:"pro-ai",        g:"prof", e:"🤖", n:"AI Creator · Neural",   c:["#0b0618","#160d2b","#efe9ff","#a597c9","#a855f7","#22d3ee"], fx:"stars", font:"Orbitron", role:"ai" },
  { id:"pro-trainer",   g:"prof", e:"🎓", n:"Trainer · Academy",     c:["#f0f6ff","#ffffff","#0f1e3a","#56647f","#1e5eff","#ffb020"], fx:"none", role:"trainer" },
  { id:"pro-corporate", g:"prof", e:"💼", n:"Corporate · Clean",     c:["#f7f8fa","#ffffff","#141821","#5f6675","#1f3a5f","#c9a227"], fx:"none", role:"admin" },
  { id:"pro-dev",       g:"prof", e:"💻", n:"Developer · Code Dark", c:["#1e1e1e","#252526","#d4d4d4","#8b8b8b","#569cd6","#c586c0"], fx:"none", font:"JetBrains Mono", role:"dev" },
];
