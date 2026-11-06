/* =========================================================
   CONTENT GUARD — friendly, game-style copy protection.
   Honest note: no website can make copying 100% impossible
   (screenshots always exist). This makes copying slow, asks
   permission in a fun way, watermarks pages, and auto-adds
   credit to anything copied with a Copy Pass.
   ========================================================= */
(function(){
const {ui,$,toast}=APP;
const PASS_MIN=10;
let passUntil=+(APP.store.get('copyPass',0));
const hasPass=()=>Date.now()<passUntil;
function setPass(){passUntil=Date.now()+PASS_MIN*60000;APP.store.set('copyPass',passUntil);applyPass()}
function applyPass(){APP.copyPass=hasPass();document.body.classList.toggle('copy-pass',APP.copyPass)}
applyPass();setInterval(applyPass,30000);

// 1) Stop being embedded inside someone else's site (clone via iframe)
try{if(window.top!==window.self){window.top.location=window.self.location}}catch(e){document.body.innerHTML='<p style="padding:40px">© Shakil Ahmed — open the original site.</p>'}

// 2) Visible-but-faint watermark
(function(){const s=`<svg xmlns='http://www.w3.org/2000/svg' width='260' height='160'><text x='10' y='90' transform='rotate(-20 130 80)' font-size='16' font-family='sans-serif' fill='gray'>© Shakil Ahmed · shakilahmedabir</text></svg>`;
  $('#watermark').style.backgroundImage=`url("data:image/svg+xml,${encodeURIComponent(s)}")`})();

// 3) Hidden fingerprint so copied text can be traced back
const FP='​‌​‍‌';

// 4) Open the quest instead of silently blocking
function quest(){if(hasPass())return false;$('#quest').classList.remove('hidden');return true}
const isField=e=>e.target.closest&&e.target.closest('input,textarea,select,#bot,#toolbar,#quest');
document.addEventListener('contextmenu',e=>{if(isField(e)||hasPass())return;e.preventDefault();quest()});
document.addEventListener('dragstart',e=>{if(e.target.tagName==='IMG'&&!hasPass()){e.preventDefault()}});
document.addEventListener('copy',e=>{
  if(isField(e))return;
  if(!hasPass()){e.preventDefault();quest();return}
  const sel=String(getSelection());e.preventDefault();
  e.clipboardData.setData('text/plain',sel+FP+`\n\n— Source: ${APP.t(CONFIG.name)}, ${location.href} (used with permission request)`);
  toast('✅ Copied with credit');
});
document.addEventListener('cut',e=>{if(!isField(e)&&!hasPass()){e.preventDefault();quest()}});
document.addEventListener('keydown',e=>{
  if(isField(e)&&!(e.key==='F12'))return;
  const k=e.key.toLowerCase(),c=e.ctrlKey||e.metaKey;
  const blocked=e.key==='F12'||(c&&['s','u','p'].includes(k))||(c&&e.shiftKey&&['i','j','c'].includes(k))||(c&&k==='c'&&!hasPass());
  if(blocked&&!hasPass()){e.preventDefault();if(k==='p'&&c){toast('🖨️ ⚙️ → '+ui('tb_print'))}else quest()}
});

// 5) The mini-game: catch 5 stars in 8 seconds
let score=0,timer,spawn,left;
function end(win){clearInterval(timer);clearInterval(spawn);$('#arena').querySelectorAll('.star').forEach(s=>s.remove());
  if(win){$('#qStage1').classList.add('hidden');$('#qStage2').classList.remove('hidden');confetti()}
  else{$('#qTimer').textContent=ui('g_lose');$('#qPlay').disabled=false}}
function play(){score=0;left=8;$('#qPlay').disabled=true;$('#qScore').textContent='⭐ 0/5';$('#qTimer').textContent='⏱ '+left;
  const A=$('#arena');
  spawn=setInterval(()=>{const s=document.createElement('span');s.className='star';s.textContent=['⭐','🌟','✨'][Math.floor(Math.random()*3)];
    s.style.left=Math.random()*85+'%';s.style.top=Math.random()*75+10+'%';
    s.onclick=()=>{score++;s.remove();$('#qScore').textContent=`⭐ ${score}/5`;if(score>=5)end(true)};
    A.appendChild(s);setTimeout(()=>s.remove(),1300)},450);
  timer=setInterval(()=>{left--;$('#qTimer').textContent='⏱ '+left;if(left<=0)end(false)},1000)}
function confetti(){const A=$('#arena');for(let i=0;i<30;i++){const s=document.createElement('span');s.className='star';s.textContent=['🎉','🎊','✨'][i%3];s.style.left=Math.random()*95+'%';s.style.top=Math.random()*90+'%';A.appendChild(s);setTimeout(()=>s.remove(),1500)}}
$('#qPlay').onclick=play;
$('#qClose').onclick=()=>{$('#quest').classList.add('hidden');end(false);$('#qStage1').classList.remove('hidden');$('#qStage2').classList.add('hidden');$('#qTimer').textContent='';$('#qPlay').disabled=false};
$('#qStage2').onsubmit=async e=>{e.preventDefault();
  await APP.sendForm(e.target,{page:location.href,selected_text:String(getSelection()).slice(0,300)});
  setPass();$('.status',e.target).textContent=ui('g_granted');toast(ui('g_granted'));setTimeout(()=>$('#qClose').click(),2500)};
})();
