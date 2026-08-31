const screenEl=document.getElementById("screen");
const drawer=document.getElementById("drawer"),overlay=document.getElementById("overlay");
const nav=document.querySelector(".bottom-nav");
const state={screen:"home", completed:new Set(JSON.parse(localStorage.getItem("completedChallenges")||"[]")), installed:false};

const teachings=[
 ["La bonne doctrine","12 leçons","📖"],["Identité en Christ","10 leçons","🌄"],["Caractère chrétien","8 leçons","❤️"],["Appel et destinée","9 leçons","🔥"],["Vie de prière","7 leçons","🙏"],["La foi qui agit","8 leçons","🕊️"]
];
const programs=[
 ["LUN","Parole & Orientation","Parole du jour et exhortation"],
 ["MAR","Enseignement","Enseignement biblique"],
 ["MER","Prière & Intercession","Temps de prière collective"],
 ["JEU","Conseil & Vie pratique","Conseils pour la vie chrétienne"],
 ["VEN","Méditation","Examen et méditation personnelle"],
 ["SAM","Partage & Témoignages","Échanges et témoignages"],
 ["DIM","Culte & Engagement","Bilan et engagement"]
];
const challenges=[
 ["Lecture Biblique","Lis 1 chapitre par jour","7 jours",71,"📘"],
 ["Prière Quotidienne","15 min de prière par jour","7 jours",57,"🙏"],
 ["Évangélisation","Partage ta foi cette semaine","3 personnes",66,"📣"],
 ["Service","Pose un acte de service","1 action",100,"🤝"]
];

function save(){localStorage.setItem("completedChallenges",JSON.stringify([...state.completed]));}
function card(html,cls="card"){return `<section class="${cls}">${html}</section>`}
function render(){
  const s=state.screen;
  if(s==="home") home();
  else if(s==="teachings") teachings();
  else if(s==="prayer") prayer();
  else if(s==="program") program();
  else if(s==="profile") profile();
  else if(s==="members") members();
  else if(s==="challenges") challenges();
  else if(s==="testimonies") testimonies();
  else if(s==="library") library();
  document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.screen===s));
  window.scrollTo({top:0,behavior:"smooth"});
}
function home(){
 screenEl.innerHTML=`<div class="screen">
  <div class="hero"><div class="eyebrow">BIENVENUE 👋</div><h1>Fils bien-aimé(e)</h1><p>Grandissons ensemble dans la grâce, la connaissance et la fidélité à Jésus-Christ.</p><div class="creator-line">CRÉÉE PAR JONATHAN MWAKA</div></div>
  ${card(`<div class="verse"><div class="quote">“</div><p>Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta propre intelligence.</p><cite>Proverbes 3:5</cite></div>`)}
  <div class="section-title"><h2>Pensée du jour</h2></div>
  ${card(`<div class="thought"><b>Dieu n'a pas seulement un plan pour ta vie.</b><br>Il a un dessein. Reste fidèle : Il est en train de te former.</div>`)}
  <div class="section-title"><h2>Accès rapide</h2></div>
  <div class="grid">
   ${tile("▣","Enseignements","teachings")} ${tile("🙏","Prière","prayer")} ${tile("▦","Programme","program")} ${tile("👥","Fils & filles","members")} ${tile("🎯","Défis","challenges")} ${tile("💬","Discussions","testimonies")}
  </div>
  <div class="section-title"><h2>Défis en cours</h2><button onclick="go('challenges')">Voir tout</button></div>
  ${card(challenges.slice(0,2).map((c,i)=>challengeHTML(c,i)).join(""))}
  <div class="install" id="installBox">${card(`<b>Installer l'application</b><p class="thought">Ajoute Fils & Filles à ton écran d'accueil pour y accéder rapidement.</p><button class="gold-btn" onclick="installApp()">Installer</button>`)}</div>
 </div>`;
}
function tile(icon,label,target){return `<button class="tile" onclick="go('${target}')"><span class="emoji">${icon}</span><span>${label}</span></button>`}
function teachings(){
 screenEl.innerHTML=`<div class="screen"><div class="hero"><div class="eyebrow">FORMATION</div><h1>Enseignements</h1><p>Des sujets bibliques pour bâtir ta foi sur la saine doctrine.</p></div>
 <div class="tabs"><button class="tab active">Tous</button><button class="tab">Récents</button><button class="tab">Favoris</button></div>
 <div class="list">${teachings.map((t,i)=>`<button class="list-item" onclick="openTeaching(${i})"><div class="thumb">${t[2]}</div><div><b>${t[0]}</b><small>${t[1]} • Lire et méditer</small></div><span>›</span></button>`).join("")}</div></div>`;
}
function openTeaching(i){
 const t=teachings[i];
 screenEl.innerHTML=`<div class="screen"><button class="primary" onclick="go('teachings')">← Retour</button>${card(`<div class="eyebrow">${t[2]} ENSEIGNEMENT</div><h1>${t[0]}</h1><p class="thought">Cette leçon t'aide à approfondir ta connaissance de Dieu et à mettre sa Parole en pratique.</p><hr><div class="quote-big">« Ta Parole est une lampe à mes pieds, et une lumière sur mon sentier. »</div><p class="thought">Prends un moment pour lire, méditer, prier et appliquer ce que tu apprends.</p><button class="gold-btn" onclick="alert('Leçon enregistrée comme commencée.')">Commencer la leçon</button>`)}</div>`;
}
function prayer(){
 screenEl.innerHTML=`<div class="screen"><div class="hero"><div class="eyebrow">COMMUNION</div><h1>Prière</h1><p>Retrouve les sujets de prière et participe aux temps de prière collective.</p></div>
 ${card(`<h2>Sujet du jour 🙏</h2><p class="thought">Seigneur, fortifie ma foi, donne-moi la sagesse et aide-moi à marcher dans l'obéissance à ta Parole.</p><button class="gold-btn" onclick="alert('Que Dieu entende ta prière. 🙏')">Prier maintenant</button>`)}
 ${card(`<h3>Temps de prière collective</h3><p class="thought">Chaque membre peut ajouter un sujet et prier pour les autres.</p><button class="primary" onclick="alert('Fonction de partage bientôt disponible.')">Ajouter un sujet</button>`)}
 </div>`;
}
function program(){
 screenEl.innerHTML=`<div class="screen"><div class="hero"><div class="eyebrow">ORGANISATION</div><h1>Programme de la semaine</h1><p>Découvre les rendez-vous spirituels et garde le rythme.</p></div><div class="list">${programs.map(p=>`<div class="list-item"><div class="thumb">${p[0][0]}</div><div><b>${p[0]} — ${p[1]}</b><small>${p[2]}</small></div></div>`).join("")}</div></div>`;
}
function challenges(){
 screenEl.innerHTML=`<div class="screen"><div class="hero"><div class="eyebrow">DISCIPLINE</div><h1>Défis spirituels</h1><p>Développe une discipline qui plaît à Dieu.</p></div><div class="list">${challenges.map((c,i)=>challengeHTML(c,i,true)).join("")}</div></div>`;
}
function challengeHTML(c,i,full=false){
 const done=state.completed.has(i), pct=done?100:c[3];
 return `<div class="card"><div class="challenge"><div><b>${c[4]} ${c[0]}</b><div class="thought">${c[1]}</div></div><span class="badge">${done?"ACCOMPLI":"EN COURS"}</span></div><div class="progress"><i style="width:${pct}%"></i></div><small>${done?"Défi terminé":pct+"% complété"} • ${c[2]}</small><br><button class="${done?"primary":"gold-btn"}" style="margin-top:10px" onclick="toggleChallenge(${i})">${done?"Annuler":"Marquer comme accompli"}</button></div>`;
}
function toggleChallenge(i){state.completed.has(i)?state.completed.delete(i):state.completed.add(i);save();render();}
function members(){
 screenEl.innerHTML=`<div class="screen"><div class="hero"><div class="eyebrow">COMMUNAUTÉ</div><h1>Fils & filles</h1><p>Unis pour grandir ensemble dans la foi, l'amour et le service.</p></div>${card(`<h3>Notre famille spirituelle</h3><p class="thought">Cet espace est destiné à encourager, édifier et accompagner les frères et sœurs dans leur marche avec Christ.</p><button class="primary" onclick="alert('Bienvenue dans la famille Fils & Filles !')">Voir les membres</button>`)}${card(`<h3>Règle d'or ❤️</h3><p class="thought">Que tout ce qui se dit ici serve à édifier, encourager et conduire vers Christ.</p>`)}</div>`;
}
function testimonies(){
 screenEl.innerHTML=`<div class="screen"><div class="hero"><div class="eyebrow">ÉDIFICATION</div><h1>Témoignages</h1><p>Partage ce que Dieu fait dans ta vie pour encourager les autres.</p></div>
 ${card(`<b>Victoire sur la peur</b><p class="thought">« Dieu m'a délivré d'une peur qui me paralysait depuis des années. »</p><small>— Marie</small>`)}
 ${card(`<b>Fidélité de Dieu</b><p class="thought">« Il a pourvu au moment où je ne m'y attendais plus. Gloire à Lui ! »</p><small>— Jonathan</small>`)}
 ${card(`<button class="primary" onclick="alert('Merci ! Ton témoignage pourra être ajouté dans une prochaine version.')">Partager mon témoignage</button>`)}</div>`;
}
function library(){
 screenEl.innerHTML=`<div class="screen"><div class="hero"><div class="eyebrow">RESSOURCES</div><h1>Bibliothèque</h1><p>Un espace pour retrouver tes ressources spirituelles.</p></div><div class="grid">${tile("📖","Bible","teachings")}${tile("🎧","Audios","library")}${tile("📝","Notes","library")}${tile("📚","Cours","teachings")}</div>${card(`<div class="empty">Ta bibliothèque personnelle pourra être enrichie avec les documents et enseignements de ton ministère.</div>`)}</div>`;
}
function profile(){
 const progress=[["Vie de prière",80],["Connaissance de la Parole",70],["Caractère",65],["Service",60],["Maturité spirituelle",75]];
 screenEl.innerHTML=`<div class="screen"><div class="hero"><div class="eyebrow">MON ESPACE</div><h1>Mon profil</h1></div>${card(`<div class="profile-head"><div class="avatar">👤</div><div><h2 style="margin:0">Fils & Fille</h2><small>Membre depuis 2026</small></div></div>`)}${card(`<h3>Ma progression</h3>${progress.map(x=>`<div class="metric"><div class="metric-row"><span>${x[0]}</span><b>${x[1]}%</b></div><div class="progress"><i style="width:${x[1]}%"></i></div></div>`) .join("")}`)}${card(`<h3>Créateur de l'application</h3><p class="thought"><b>JONATHAN MWAKA</b><br>Fils & Filles — Grandir en Christ</p>`)}</div>`;
}
function go(s){state.screen=s;closeDrawer();render();}
function openDrawer(){drawer.classList.remove("hidden");overlay.classList.remove("hidden")}
function closeDrawer(){drawer.classList.add("hidden");overlay.classList.add("hidden")}
document.getElementById("menuBtn").onclick=openDrawer;
document.getElementById("closeDrawer").onclick=closeDrawer;
overlay.onclick=closeDrawer;
document.getElementById("notifyBtn").onclick=()=>alert("Aucune nouvelle notification.");
document.querySelectorAll("[data-screen]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.screen)));

let deferredPrompt=null;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;const box=document.getElementById("installBox");if(box)box.style.display="block"});
window.installApp=async()=>{if(!deferredPrompt){alert("Pour installer : menu du navigateur → Ajouter à l'écran d'accueil.");return}deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null};
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
render();
