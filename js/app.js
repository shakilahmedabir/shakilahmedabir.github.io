/* Main app: rendering, languages, themes, particles, toolbar, forms, toolbox */
(function(){
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const store={get(k,d){try{const v=localStorage.getItem('sa_'+k);return v===null?d:JSON.parse(v)}catch(e){return d}},
             set(k,v){try{localStorage.setItem('sa_'+k,JSON.stringify(v))}catch(e){}}};
const S={lang:store.get('lang',CONFIG.defaultLang),theme:store.get('theme',null),auto:store.get('auto',true),
         fx:store.get('fx',true),motion:store.get('motion',!matchMedia('(prefers-reduced-motion: reduce)').matches),font:store.get('font',16),
         group:'month',skillTab:'main',workTab:'all',linkCat:'all',pkg:'intro',serv:'book'};
const L=()=>S.lang;
const t=o=>o==null?'':typeof o==='string'?o:(o[L()]||o.en||'');
const ui=k=>(UI[L()]&&UI[L()][k])||UI.en[k]||k;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
window.APP={t,ui,esc,store,S,$,$$};

/* ---------- toast ---------- */
let tt;function toast(msg){const e=$('#toast');e.textContent=msg;e.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('show'),3800)}
APP.toast=toast;

/* ---------- projects (built-in + owner-added) ---------- */
const allProjects=()=>[...store.get('extraProjects',[]),...PROJECTS];

/* ---------- render ---------- */
function render(){
  document.documentElement.lang=L();document.documentElement.dir=L()==='ar'?'rtl':'ltr';
  $$('[data-i18n]').forEach(e=>e.textContent=ui(e.dataset.i18n));
  $$('[data-i18n-ph]').forEach(e=>e.placeholder=ui(e.dataset.i18nPh));
  $$('[data-name]').forEach(e=>e.textContent=t(CONFIG.name));
  $$('[data-avatar]').forEach(e=>e.src=({face:CONFIG.faceAvatar,card:CONFIG.cardAvatar,bot:CONFIG.botAvatar,cut:CONFIG.cutAvatar}[e.dataset.avatar])||CONFIG.avatar);
  $('#creds').innerHTML=CREDS.map(c=>`<li>${esc(t(c))}</li>`).join('');
  $('#cpills').innerHTML=`<a href="tel:${esc(CONFIG.phone.replace(/\s/g,''))}">📞 ${esc(CONFIG.phone)}</a><a href="mailto:${esc(CONFIG.email)}">✉️ ${esc(CONFIG.email)}</a>`;
  $('#loc').textContent=t(CONFIG.location);$('#yr').textContent=new Date().getFullYear();
  $('#langQuick').value=L();$$('#langSeg button').forEach(b=>b.classList.toggle('on',b.dataset.l===L()));
  $('#stats').innerHTML=STATS.map(s=>`<div class="stat"><b>${s.n}</b><span>${esc(t(s.l))}</span></div>`).join('');
  $('#aboutText').textContent=t(ABOUT);
  $('#tagline').textContent=t(CONFIG.tagline);
  document.title=`${t(CONFIG.name)} — ${t(CONFIG.tagline)}`;
  renderSkills();renderRoles();renderExp();renderWork();renderEdu();renderServices();renderLinks();renderContact();renderToolbar();
  startTyped();observe();
}

function renderSkills(){
  const groups=[['main','g_main'],['pro','g_pro'],['sub','g_sub']];
  $('#skillTabs').innerHTML=groups.map(([g,k])=>`<button data-g="${g}" class="${S.skillTab===g?'on':''}">${esc(ui(k))}</button>`).join('');
  $('#skillList').innerHTML=SKILLS.filter(s=>s.g===S.skillTab).map(s=>`<div class="skill reveal" tabindex="0"><div class="top"><span class="sic">${s.icon}</span><span class="nm">${esc(t(s.n))}</span><span class="lv">Lv ${s.lv}</span></div><div class="bar"><i data-w="${s.lv*10}"></i></div><div class="ev">🔎 ${esc(s.ev)}</div></div>`).join('');
  $('#toolList').innerHTML=`<b>${esc(ui('g_tool'))}:</b> `+TOOLS.map(x=>`<span>${esc(x)}</span>`).join('');
  $('#achList').innerHTML=ACHIEVEMENTS.map((a,i)=>`<div class="badge reveal"><i style="animation-delay:${i*.08}s">${a.i}</i>${esc(t(a.n))}</div>`).join('');
  const total=SKILLS.reduce((a,s)=>a+s.lv,0);$('#lvlNum').textContent=Math.round(total/5);
  setTimeout(()=>$('#xpFill').style.width=(total%10)*10+35+'%',300);
  radar();
}
function radar(){
  const ax=[['🧑‍🏫',{en:'Teach',bn:'শিক্ষা',ar:'تعليم',de:'Lehre'},96],['🛠️',{en:'IT',bn:'আইটি',ar:'تقنية',de:'IT'},82],['🎨',{en:'Design',bn:'ডিজাইন',ar:'تصميم',de:'Design'},80],
            ['🤖',{en:'AI',bn:'এআই',ar:'ذكاء',de:'KI'},88],['📣',{en:'Market',bn:'মার্কেটিং',ar:'تسويق',de:'Marketing'},78],['🗣️',{en:'Comm.',bn:'যোগাযোগ',ar:'تواصل',de:'Komm.'},86]];
  const cx=110,cy=110,R=78,n=ax.length,pt=(i,r)=>[cx+r*Math.sin(2*Math.PI*i/n),cy-r*Math.cos(2*Math.PI*i/n)];
  let g='';[.25,.5,.75,1].forEach(k=>g+=`<polygon points="${ax.map((_,i)=>pt(i,R*k).join(',')).join(' ')}" fill="none" stroke="var(--mu)" stroke-opacity=".3"/>`);
  ax.forEach((a,i)=>{const[x,y]=pt(i,R+20);g+=`<line x1="${cx}" y1="${cy}" x2="${pt(i,R)[0]}" y2="${pt(i,R)[1]}" stroke="var(--mu)" stroke-opacity=".3"/><text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-size="10" fill="var(--tx)">${a[0]} ${esc(t(a[1]))}</text>`});
  g+=`<polygon points="${ax.map((a,i)=>pt(i,R*a[2]/100).join(',')).join(' ')}" fill="var(--pr)" fill-opacity=".35" stroke="var(--ac)" stroke-width="2"><animate attributeName="opacity" from="0" to="1" dur="1s"/></polygon>`;
  $('#radar').innerHTML=g;
}
function renderRoles(){
  const th=THEMES.find(x=>x.id===S.theme),active=th&&th.role;
  $('#roleList').innerHTML=ROLES.slice().sort((a,b)=>(b.k===active)-(a.k===active)||b.m-a.m).map(r=>`<div class="card role reveal" data-theme="${r.theme}" title="${esc(ui('wear'))}" style="${r.k===active?'outline:2px solid var(--ac)':''}"><div class="meter" style="--p:${r.m}"><span>${r.m}%</span></div><div><b>${r.i} ${esc(t(r.n))}</b><br><small>🎭 ${esc(ui('wear'))}</small></div></div>`).join('');
}
function renderExp(){
  $('#expList').innerHTML=EXPERIENCE.map(e=>`<div class="card job reveal"><div class="jobhead"><b>${esc(t(e.r))}</b><span class="org">${esc(e.org)}</span><span class="muted small">📅 ${esc(e.when)}${e.where?' · 📍 '+esc(e.where):''}</span></div>
    <div class="jobsecs">${(e.sec||[]).map(s=>`<div class="jobsec"><h5>${esc(t(s.h))}</h5><ul>${(s.i[L()]||s.i.en).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}</div></div>`).join('');
  $('#sectorList').innerHTML=SECTORS.map(s=>`<span class="chip reveal">${s.i} ${esc(t(s.n))}</span>`).join('');
}
function renderWork(){
  const cats=['all',...Object.keys(CATS)];
  $('#workTabs').innerHTML=cats.map(c=>`<button data-w="${c}" class="${S.workTab===c?'on':''}">${esc(c==='all'?ui('all'):t(CATS[c]))}</button>`).join('');
  $('#workList').innerHTML=allProjects().filter(p=>S.workTab==='all'||p.cat===S.workTab).map(p=>`<div class="card reveal">${p.img?`<img src="${esc(p.img)}" alt="" loading="lazy" draggable="false">`:`<div class="ic">${p.icon||'📁'}</div>`}<b>${esc(t(p.t))}</b><span class="muted small">${esc(t(p.d))}</span><div class="meta"><span>${esc(t(CATS[p.cat]||{en:p.cat}))} · ${esc(p.date||'')}</span>${p.link?`<a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(ui('open'))} ↗</a>`:''}</div></div>`).join('');
}
function renderEdu(){
  $('#eduList').innerHTML=EDUCATION.map(e=>`<div class="card edu reveal"><b>🎓 ${esc(t(e.t))}</b><div class="muted small">${esc(e.s)}</div></div>`).join('');
  $('#certList').innerHTML=`<li class="certhead">🏅 <b>${CERTS.length}</b> ${esc(ui('certs_n'))} · ✔ ${CERTS.filter(c=>c.v).length} ${esc(ui('verified'))}</li>`+
    Object.keys(CERT_GROUPS).map(g=>{const G=CERT_GROUPS[g],list=CERTS.filter(c=>c.g===g).sort((a,b)=>b.y-a.y);if(!list.length)return'';
      return `<li class="certgrp"><b>${G.i} ${esc(t(G))}</b><ul>${list.map(c=>`<li>${esc(c.n)} <span class="muted small">— ${esc(c.by)}, ${c.y}</span>${c.v?` <a href="${esc(c.v)}" target="_blank" rel="noopener" class="small">✔ ${esc(ui('verify'))}</a>`:''}</li>`).join('')}</ul></li>`}).join('');
}
function renderServices(){
  $$('#servTabs button').forEach(b=>b.classList.toggle('on',b.dataset.s===S.serv));
  ['book','hire','learn'].forEach(k=>$('#f-'+k).classList.toggle('hidden',k!==S.serv));
  $('#pkgList').innerHTML=SERVICES.packages.map(p=>`<div class="pkg ${S.pkg===p.id?'on':''}" data-p="${p.id}"><b>${p.price?('৳'+p.price):esc(ui('free'))}</b>${esc(t(p.n))}<div class="muted small">${p.per?esc(ui('per_month')):p.min+' '+esc(ui('min'))}</div></div>`).join('');
  $('#avail').textContent=CONFIG.availability?('🕕 '+t(CONFIG.availability)):'';
  if(CONFIG.availFrom)$('#f-book [name=time]').min=CONFIG.availFrom;
  $('#hireSel').innerHTML=SERVICES.hire.map(s=>`<option>${esc(t(s))}</option>`).join('');
  $('#learnSel').innerHTML=SERVICES.learn.map(s=>`<option>${esc(t(s))}</option>`).join('');
  $('#bkash').textContent=CONFIG.bkash?('bKash: '+CONFIG.bkash):'';
}
/* ---------- toolbox (links database) ---------- */
const norm=s=>String(s).toLowerCase();
function searchLinks(q,cat){
  const words=norm(q).split(/[\s,]+/).filter(w=>w.length>1);
  return LINKS.map(l=>{const hay=norm(l.name+' '+l.tags+' '+l.desc+' '+l.cat);let sc=0;words.forEach(w=>{if(hay.includes(w))sc+=norm(l.tags).includes(w)?3:1});return{l,sc}})
    .filter(x=>(cat==='all'||!cat||x.l.cat===cat)&&(!words.length||x.sc>0)).sort((a,b)=>b.sc-a.sc).map(x=>x.l);
}
APP.searchLinks=searchLinks;
function renderLinks(){
  const cats=['all',...new Set(LINKS.map(l=>l.cat))];
  $('#toolCats').innerHTML=cats.map(c=>`<button class="chip" data-c="${c}" style="${S.linkCat===c?'background:var(--pr);color:var(--bg)':''}">${esc(c==='all'?ui('all'):c)}</button>`).join('');
  const res=searchLinks($('#toolSearch').value,S.linkCat);
  $('#linkList').innerHTML=res.map(l=>`<div class="card"><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.name)} ↗</a><p>${esc(l.desc)}</p><p class="small">#${esc(l.cat)}</p></div>`).join('')||`<p class="muted">0</p>`;
}
function renderContact(){
  $('#contactList').innerHTML=[
    ['✉️',CONFIG.email,'mailto:'+CONFIG.email],['💬','WhatsApp','https://wa.me/'+CONFIG.whatsapp],
    ['📞',CONFIG.phone,'tel:'+CONFIG.phone.replace(/\s/g,'')],['in','LinkedIn',CONFIG.linkedin],
    ...(CONFIG.facebook?[['f','Facebook',CONFIG.facebook]]:[]),...(CONFIG.github?[['⌨','GitHub',CONFIG.github]]:[]),...(CONFIG.youtube?[['▶','YouTube',CONFIG.youtube]]:[]),
    ...(CONFIG.calendarUrl?[['📅',ui('cta_book'),CONFIG.calendarUrl]]:[])
  ].map(([i,l,h])=>`<a class="btn" href="${esc(h)}" target="_blank" rel="noopener">${i} ${esc(l)}</a>`).join('');
}

/* ---------- typed headline ---------- */
let typedTimer;function startTyped(){
  clearTimeout(typedTimer);const list=HEADLINES[L()]||HEADLINES.en;let i=0,j=0,del=false;const el=$('#typed');
  (function step(){const w=list[i];el.textContent=w.slice(0,j);
    if(!del&&j<w.length)j++;else if(!del){del=true;typedTimer=setTimeout(step,1600);return}else if(j>0)j--;else{del=false;i=(i+1)%list.length}
    typedTimer=setTimeout(step,del?35:70)})();
}

/* ---------- scroll reveal ---------- */
let io;function observe(){
  io&&io.disconnect();io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');$$('.bar i',e.target).forEach(b=>b.style.width=b.dataset.w+'%');io.unobserve(e.target)}}),{threshold:.12});
  $$('.reveal').forEach(e=>io.observe(e));
}

/* ---------- themes ---------- */
function md(d){return String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')}
function autoPick(){
  const today=md(new Date());
  const ev=THEMES.find(x=>x.dates&&x.dates.length===2&&(x.dates[0]<=x.dates[1]?(today>=x.dates[0]&&today<=x.dates[1]):(today>=x.dates[0]||today<=x.dates[1])));
  return ev?ev.id:'m'+String(new Date().getMonth()+1).padStart(2,'0');
}
function applyTheme(id,save){
  const th=THEMES.find(x=>x.id===id)||THEMES[0];S.theme=th.id;
  const r=document.documentElement.style,[bg,sf,tx,mu,pr,ac]=th.c;
  r.setProperty('--bg',bg);r.setProperty('--sf',sf);r.setProperty('--tx',tx);r.setProperty('--mu',mu);r.setProperty('--pr',pr);r.setProperty('--ac',ac);
  r.setProperty('--hf',`'${th.font||'Inter'}'`);
  const meta=$('meta[name=theme-color]')||document.head.appendChild(Object.assign(document.createElement('meta'),{name:'theme-color'}));meta.content=bg;
  FX.set(S.fx?th.fx:'none');
  if(save){S.auto=false;store.set('auto',false);store.set('theme',th.id);$('#autoTheme').checked=false}
  renderRoles();renderToolbar();observe();
}
APP.applyTheme=applyTheme;

/* ---------- particles ---------- */
const FX=(function(){
  const cv=$('#fx'),cx=cv.getContext('2d');let P=[],type='none',raf;
  const E={sakura:['🌸','💮'],snow:['❄','•'],stars:['✦','✧','⋆'],confetti:['■','●','▲'],leaves:['🍂','🍃'],rain:['│'],bubbles:['○'],fire:['🔥','✦'],lantern:['🏮','✨'],hearts:['♥','♡'],sparks:['✦','·']};
  function size(){cv.width=innerWidth*devicePixelRatio;cv.height=innerHeight*devicePixelRatio}
  function make(top){const g=E[type]||[];return{x:Math.random()*cv.width,y:top?-20:Math.random()*cv.height,s:(type==='rain'?10:12+Math.random()*14)*devicePixelRatio,
    vy:(type==='rain'?7:type==='bubbles'||type==='fire'||type==='lantern'?-0.6:0.6+Math.random())*devicePixelRatio,vx:(Math.random()-.5)*.6*devicePixelRatio,ch:g[Math.floor(Math.random()*g.length)],
    a:Math.random()*6,h:Math.floor(Math.random()*360),o:.35+Math.random()*.5}}
  function loop(){cx.clearRect(0,0,cv.width,cv.height);const col=getComputedStyle(document.documentElement).getPropertyValue('--ac');
    P.forEach(p=>{p.y+=p.vy;p.x+=p.vx+Math.sin(p.a+=.02)*.4;if(p.y>cv.height+30)Object.assign(p,make(true));if(p.y<-40){p.y=cv.height+20}
      cx.globalAlpha=p.o;cx.font=p.s+'px serif';cx.fillStyle=type==='confetti'?`hsl(${p.h},80%,60%)`:col;cx.fillText(p.ch,p.x,p.y)});
    raf=requestAnimationFrame(loop)}
  addEventListener('resize',size);size();
  return{set(t){type=t;cancelAnimationFrame(raf);cx.clearRect(0,0,cv.width,cv.height);if(t==='none'||document.body.classList.contains('no-motion'))return;
    const n=innerWidth<700?18:36;P=Array.from({length:n},()=>make(false));loop()}};
})();

/* ---------- toolbar ---------- */
function renderToolbar(){
  const names={month:'tb_month',elegant:'tb_elegant',event:'tb_event',anime:'tb_anime',prof:'tb_prof'};
  $('#themeGroups').innerHTML=THEME_GROUPS.map(g=>`<button data-tg="${g}" class="${S.group===g?'on':''}">${esc(ui(names[g]))}</button>`).join('');
  $('#themeList').innerHTML=THEMES.filter(x=>x.g===S.group).map(x=>`<button class="sws ${S.theme===x.id?'on':''}" data-t="${x.id}"><i style="background:linear-gradient(135deg,${x.c[0]} 50%,${x.c[4]} 50%)"></i>${x.e} ${esc(x.n)}</button>`).join('');
  $('#autoTheme').checked=S.auto;$('#fxOn').checked=S.fx;$('#motionOn').checked=S.motion;$('#fontSize').value=S.font;
  $('#admCat').innerHTML=Object.keys(CATS).map(c=>`<option value="${c}">${esc(t(CATS[c]))}</option>`).join('');
}
function setLang(l){S.lang=l;store.set('lang',l);render()}
APP.setLang=setLang;

/* ---------- forms → email ---------- */
async function sendForm(form,extra){
  const st=$('.status',form),btn=$('button:not([type=button])',form),data=Object.fromEntries(new FormData(form));
  Object.assign(data,extra||{});data._subject=`[Portfolio] ${form.dataset.kind} — ${data.name||''}`;data._template='table';data._captcha='false';data.page_language=L();
  if(data._honey){return}
  btn.disabled=true;st.textContent=ui('f_sending');
  try{const r=await fetch(CONFIG.formEndpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)});
    const j=await r.json().catch(()=>({}));
    // FormSubmit answers 200 even when it did NOT deliver (e.g. form not activated yet) — check "success"
    if(!r.ok||String(j.success)!=='true')throw new Error(j.message||('HTTP '+r.status));
    st.textContent=ui('f_ok');toast(ui('f_ok'));form.reset();btn.disabled=false;return true}
  catch(e){btn.disabled=false;
    const body=Object.entries(data).filter(([k])=>!k.startsWith('_')).map(([k,v])=>`${k}: ${v}`).join('\n');
    const gmail=`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONFIG.email)}&su=${encodeURIComponent(data._subject)}&body=${encodeURIComponent(body)}`;
    const wa=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(data._subject+'\n\n'+body)}`;
    const mail=`mailto:${CONFIG.email}?subject=${encodeURIComponent(data._subject)}&body=${encodeURIComponent(body)}`;
    st.innerHTML=`<span>${esc(ui('f_fail'))}</span><span class="fallback"><a class="btn primary" href="${gmail}" target="_blank" rel="noopener">✉️ Gmail</a><a class="btn" href="${wa}" target="_blank" rel="noopener">💬 WhatsApp</a><a class="btn" href="${mail}">📧 ${esc(ui('f_mailapp'))}</a></span>`;
    console.warn('Form not delivered:',e.message);return false}
}
APP.sendForm=sendForm;

/* ---------- owner tools ---------- */
async function sha(s){if(crypto.subtle){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}return''}
function exportProjects(){
  const all=allProjects(),txt=`/* Exported ${new Date().toISOString()} — replace js/projects.js with this file */\nwindow.CATS=${JSON.stringify(CATS,null,1)};\nwindow.PROJECTS=${JSON.stringify(all,null,1)};\n`;
  const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([txt],{type:'text/javascript'}));a.download='projects.js';a.click();
}

/* ---------- events ---------- */
function bind(){
  document.addEventListener('click',e=>{
    const g=e.target.closest('[data-g]');if(g){S.skillTab=g.dataset.g;renderSkills();observe()}
    const w=e.target.closest('[data-w]');if(w&&w.tagName==='BUTTON'){S.workTab=w.dataset.w;renderWork();observe()}
    const sk=e.target.closest('.skill');if(sk)sk.classList.toggle('open');
    const ro=e.target.closest('.role');if(ro){applyTheme(ro.dataset.theme,true);toast('🎭 '+THEMES.find(x=>x.id===ro.dataset.theme).n);scrollTo({top:0})}
    const tg=e.target.closest('[data-tg]');if(tg){S.group=tg.dataset.tg;renderToolbar()}
    const th=e.target.closest('[data-t]');if(th)applyTheme(th.dataset.t,true);
    const lb=e.target.closest('[data-l]');if(lb)setLang(lb.dataset.l);
    const pk=e.target.closest('.pkg');if(pk){S.pkg=pk.dataset.p;renderServices()}
    const sv=e.target.closest('#servTabs [data-s]');if(sv){S.serv=sv.dataset.s;renderServices()}
    const tab=e.target.closest('[data-tab]');if(tab){S.serv=tab.dataset.tab;renderServices()}
    const lc=e.target.closest('[data-c]');if(lc){S.linkCat=lc.dataset.c;renderLinks()}
    const cl=e.target.closest('[data-close]');if(cl)$('#'+cl.dataset.close).classList.add('hidden');
    if(e.target.closest('#menu a'))$('#menu').classList.remove('open');
  });
  $('#burger').onclick=()=>$('#menu').classList.toggle('open');
  $('#langQuick').onchange=e=>setLang(e.target.value);
  $('#tbBtn').onclick=()=>$('#toolbar').classList.toggle('hidden');
  $('#autoTheme').onchange=e=>{S.auto=e.target.checked;store.set('auto',S.auto);if(S.auto){store.set('theme',null);applyTheme(autoPick())}};
  $('#fxOn').onchange=e=>{S.fx=e.target.checked;store.set('fx',S.fx);applyTheme(S.theme)};
  $('#motionOn').onchange=e=>{S.motion=e.target.checked;store.set('motion',S.motion);document.body.classList.toggle('no-motion',!S.motion);applyTheme(S.theme)};
  $('#fontSize').oninput=e=>{S.font=+e.target.value;store.set('font',S.font);document.documentElement.style.setProperty('--fs',S.font+'px')};
  $('#printBtn').onclick=()=>{document.body.classList.add('copy-pass');setTimeout(()=>{print();if(!APP.copyPass)document.body.classList.remove('copy-pass')},100)};
  $('#resetBtn').onclick=()=>{['lang','theme','auto','fx','motion','font'].forEach(k=>{try{localStorage.removeItem('sa_'+k)}catch(e){}});location.reload()};
  $('#toolSearch').oninput=renderLinks;
  ['book','hire','learn'].forEach(k=>$('#f-'+k).addEventListener('submit',e=>{e.preventDefault();
    const extra=k==='book'?(()=>{const p=SERVICES.packages.find(x=>x.id===S.pkg);return{package:`${t(p.n)} — ${p.per?'per month':p.min+' min'} — ${p.price?('BDT '+p.price):'Free'}`}})():{};sendForm(e.target,extra)}));
  $('#pinBtn').onclick=async()=>{const h=await sha($('#pinIn').value);if(h&&h===CONFIG.adminPinHash){$('#adminLock').classList.add('hidden');$('#adminForm').classList.remove('hidden');toast('🔓')}else toast('🔒 ✖')};
  $('#adminForm').onsubmit=e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.target));
    const p={cat:d.cat,icon:d.icon||'📁',date:new Date().toISOString().slice(0,7),link:d.link,img:d.img,t:{en:d.t,bn:d.tbn||d.t},d:{en:d.d,bn:d.dbn||d.d}};
    store.set('extraProjects',[p,...store.get('extraProjects',[])]);renderWork();observe();e.target.reset();toast('✅ '+d.t)};
  $('#exportBtn').onclick=exportProjects;
}

/* ---------- start ---------- */
document.documentElement.style.setProperty('--fs',S.font+'px');
document.body.classList.toggle('no-motion',!S.motion);
bind();render();applyTheme(S.auto||!S.theme?autoPick():S.theme);
S.group=(THEMES.find(x=>x.id===S.theme)||{}).g||'month';renderToolbar();
})();
