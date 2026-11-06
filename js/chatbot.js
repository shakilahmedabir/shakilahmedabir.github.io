/* Abir-bot: answers from the portfolio data in the current language (no server, free). */
(function(){
const {t,ui,esc,$,S}=APP;
const K={ // keywords in EN / BN / AR / DE
  greet:"hi hello hey salam assalamu হাই হ্যালো সালাম আসসালামু مرحبا السلام hallo guten",
  who:"who about yourself introduce shakil abir কে পরিচয় সম্পর্কে من نبذة wer über",
  skills:"skill skills can do good expert দক্ষতা স্কিল পারেন পারো مهارات kann fähigkeit skills",
  exp:"experience job work worked company career অভিজ্ঞতা চাকরি কাজ করেছেন خبرة عمل erfahrung arbeit job",
  edu:"education study degree university diploma certificate certification শিক্ষা পড়াশোনা ডিগ্রি সার্টিফিকেট تعليم شهادة ausbildung studium zertifikat",
  roles:"role roles position apply suitable fit রোল পদ উপযুক্ত أدوار وظيفة rolle position",
  sectors:"sector industry field সেক্টর খাত قطاع branche",
  contact:"contact email phone whatsapp call reach linkedin যোগাযোগ ইমেইল ফোন نتواصل اتصال بريد kontakt telefon email",
  hire:"hire service price cost freelance project order কাজ দিতে সার্ভিস দাম খরচ প্রজেক্ট توظيف خدمة سعر auftrag preis service",
  learn:"learn teach course class tutor শিখতে কোর্স ক্লাস টিউশন পড়াবেন تعلم دورة lernen kurs unterricht",
  book:"appointment book meeting schedule time অ্যাপয়েন্টমেন্ট মিটিং সময় موعد termin buchen",
  work:"project portfolio evidence sample design canva প্রজেক্ট প্রমাণ নমুনা ডিজাইন مشاريع أعمال projekt arbeiten",
  lang:"language languages speak german english arabic ভাষা জার্মান ইংরেজি لغة sprache deutsch",
  loc:"where location live address dhaka কোথায় ঠিকানা ঢাকা أين wo wohnort",
  ai:"ai chatgpt claude gemini prompt এআই প্রম্পট ذكاء ki",
  theme:"theme color colour dark light থিম রং سمة لون farbe thema",
  links:"link links resource tool tools website site লিংক রিসোর্স টুল ওয়েবসাইট رابط أدوات link werkzeug",
};
const intents=Object.keys(K);
function detect(q){const s=q.toLowerCase();let best=null,sc=0;
  intents.forEach(k=>{let n=0;K[k].split(' ').forEach(w=>{if(w&&s.includes(w))n+=w.length>3?2:1});if(n>sc){sc=n;best=k}});return best}
function list(a){return a.map(x=>'• '+x).join('\n')}
function answer(q){
  const it=detect(q),N=t(CONFIG.name);
  switch(it){
    case 'greet':return ui('bot_hi');
    case 'who':return `${N} — ${(HEADLINES[S.lang]||HEADLINES.en).slice(0,3).join(' · ')}\n\n${t(ABOUT)}`;
    case 'skills':return list(SKILLS.slice().sort((a,b)=>b.lv-a.lv).slice(0,8).map(s=>`${s.icon} ${t(s.n)} — Lv ${s.lv}`))+'\n\n<a href="#skills">→ '+esc(ui('skills_t'))+'</a>';
    case 'exp':return EXPERIENCE.map(e=>`💼 ${t(e.r)} — ${e.org} (${e.when})\n`+(e.sec||[]).map(s=>'   '+t(s.h)).join('\n')).join('\n\n')+'\n\n<a href="#exp">→ '+esc(ui('exp_t'))+'</a>';
    case 'edu':return EDUCATION.map(e=>'🎓 '+t(e.t)+' — '+e.s).join('\n')+`\n\n🏅 ${CERTS.length} ${ui('certs_n')}:\n`+list(CERTS.slice(0,6).map(c=>c.v?`<a href="${c.v}" target="_blank">${esc(c.n)}</a> — ${esc(c.by)}`:`${esc(c.n)} — ${esc(c.by)}`))+'\n\n<a href="#edu">→ '+esc(ui('edu_t'))+'</a>';
    case 'roles':return list(ROLES.slice(0,8).map(r=>`${r.i} ${t(r.n)} — ${r.m}%`));
    case 'sectors':return list(SECTORS.map(s=>s.i+' '+t(s.n)));
    case 'contact':case 'loc':return `📍 ${t(CONFIG.location)}\n✉️ <a href="mailto:${CONFIG.email}">${CONFIG.email}</a>\n💬 <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank">WhatsApp</a>\n🔗 <a href="${CONFIG.linkedin}" target="_blank">LinkedIn</a>`+(CONFIG.facebook?` · <a href="${CONFIG.facebook}" target="_blank">Facebook</a>`:'')+(CONFIG.github?` · <a href="${CONFIG.github}" target="_blank">GitHub</a>`:'')+(CONFIG.availability?`\n🕕 ${t(CONFIG.availability)}`:'');
    case 'hire':go('hire');return list(SERVICES.hire.map(t))+'\n\n<a href="#services">→ '+esc(ui('cta_hire'))+'</a>';
    case 'learn':go('learn');return list(SERVICES.learn.map(t))+'\n\n<a href="#services">→ '+esc(ui('cta_learn'))+'</a>';
    case 'book':go('book');return list(SERVICES.packages.map(p=>`${t(p.n)} — ${p.per?ui('per_month'):p.min+' '+ui('min')} — ${p.price?'৳'+p.price:ui('free')}`))+(CONFIG.availability?'\n🕕 '+t(CONFIG.availability):'')+'\n\n<a href="#services">→ '+esc(ui('cta_book'))+'</a>';
    case 'work':return list(PROJECTS.slice(0,7).map(p=>p.icon+' '+t(p.t)))+'\n\n<a href="#work">→ '+esc(ui('work_t'))+'</a>';
    case 'lang':return '🇧🇩 Bangla — Native\n🇬🇧 English — Professional (Grade A)\n🇩🇪 Deutsch — A2';
    case 'ai':return SKILLS.filter(s=>/AI|Prompt|Chatbot|Automation/.test(s.n.en)).map(s=>`${s.icon} ${t(s.n)} — ${s.ev}`).join('\n');
    case 'theme':$('#toolbar').classList.remove('hidden');return '⚙️ '+ui('tb_title')+' → '+ui('tb_theme');
    case 'links':return links(q,true);
  }
  // fallback 1: resource library keywords
  const l=links(q,false);if(l)return l;
  // fallback 2: search projects
  const w=q.toLowerCase().split(/\s+/).filter(x=>x.length>2);
  const hit=PROJECTS.filter(p=>w.some(x=>(t(p.t)+' '+t(p.d)+' '+p.cat).toLowerCase().includes(x)));
  if(hit.length)return list(hit.slice(0,5).map(p=>p.icon+' '+t(p.t)));
  return null;
}
function links(q,force){
  const stop=/\b(link|links|resource|tools?|website|site|give|me|for|the|a)\b|লিংক|দাও|রিসোর্স|টুল/gi;
  const res=APP.searchLinks(q.replace(stop,' '),'all');
  if(!res.length||(!force&&res.length===LINKS.length))return force?list(LINKS.slice(0,6).map(l=>`<a href="${l.url}" target="_blank">${esc(l.name)}</a>`))+'\n\n<a href="#tools">→ '+esc(ui('tools_t'))+'</a>':null;
  if(!force&&res.length>LINKS.length/2)return null;
  return '🔗\n'+res.slice(0,6).map(l=>`• <a href="${l.url}" target="_blank" rel="noopener">${esc(l.name)}</a> — ${esc(l.desc)}`).join('\n');
}
function go(tab){APP.S.serv=tab;document.querySelector(`#servTabs [data-s="${tab}"]`)?.click()}
function add(html,who){const d=document.createElement('div');d.className='m '+who;d.innerHTML=html;$('#msgs').appendChild(d);$('#msgs').scrollTop=1e9;return d}
function reply(q){const ty=add('<span class="typing"><span></span><span></span><span></span></span>','b');
  setTimeout(()=>{const a=answer(q);ty.innerHTML=a||esc(ui('bot_none'));if(!a)chips()},500+Math.random()*400)}
function chips(){const qs=['q_skills','q_exp','q_roles','q_edu','q_contact','q_hire','q_learn','q_links'];
  $('#quick').innerHTML=qs.map(k=>`<button class="chip" data-q="${esc(ui(k))}">${esc(ui(k))}</button>`).join('')}
let opened=false;
$('#botBtn').onclick=()=>{const b=$('#bot');b.classList.toggle('hidden');$('.bubble-hint')?.remove();
  if(!opened){opened=true;add(esc(ui('bot_hi')),'b');chips()}setTimeout(()=>$('#botIn').focus(),50)};
$('#bot').addEventListener('click',e=>{const c=e.target.closest('[data-q]');if(c){add(esc(c.dataset.q),'u');reply(c.dataset.q)}});
$('#botForm').onsubmit=e=>{e.preventDefault();const v=$('#botIn').value.trim();if(!v)return;add(esc(v),'u');$('#botIn').value='';reply(v)};
// refresh chips when language changes
new MutationObserver(()=>{if(opened)chips()}).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();
