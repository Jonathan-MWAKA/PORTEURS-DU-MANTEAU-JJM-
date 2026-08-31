const content = document.getElementById("content");

const pages = {

  home: `
    <section class="hero">

      <h1>
        Bienvenue chez<br>
        <span class="gold">
          PORTEURS DU MANTEAU
        </span>
      </h1>

      <p>
        Une génération appelée à porter la vérité,
        marcher dans la foi et impacter son environnement.
      </p>

      <div class="hero-buttons">

        <button
          class="btn gold-btn"
          onclick="navigate('teachings')">
          📖 Enseignements
        </button>

        <button
          class="btn"
          onclick="navigate('prayer')">
          🙏 Prier
        </button>

      </div>


      <div class="verse">

        <q>
          Vous connaîtrez la vérité,
          et la vérité vous affranchira.
        </q>

        <small>
          Jean 8:32
        </small>

      </div>


      <!-- CRÉATEUR -->
      <div class="creator-home">

        <span>
          Une application créée par
        </span>

        <strong>
          JONATHAN MWAKA
        </strong>

      </div>

    </section>


    <section class="section">

      <h2 class="section-title">
        Grandir en Christ
      </h2>

      <p class="section-subtitle">
        Nourris ta foi, développe ta vie spirituelle
        et avance chaque jour.
      </p>


      <div class="cards">

        <div
          class="card"
          onclick="navigate('teachings')">

          <div class="emoji">📖</div>

          <h3>
            Enseignements
          </h3>

          <p>
            Découvre des enseignements
            pour approfondir ta foi.
          </p>

        </div>


        <div
          class="card"
          onclick="navigate('prayer')">

          <div class="emoji">🙏</div>

          <h3>
            Prière
          </h3>

          <p>
            Développe une vie de prière
            profonde et régulière.
          </p>

        </div>


        <div
          class="card"
          onclick="navigate('challenges')">

          <div class="emoji">🔥</div>

          <h3>
            Défis spirituels
          </h3>

          <p>
            Relève des défis pour
            progresser chaque semaine.
          </p>

        </div>


        <div
          class="card"
          onclick="navigate('testimonials')">

          <div class="emoji">❤️</div>

          <h3>
            Témoignages
          </h3>

          <p>
            Découvre et partage
            ce que Dieu fait dans ta vie.
          </p>

        </div>

      </div>

    </section>
  `,


  teachings: `

    <section class="section">

      <h2 class="section-title">
        📖 Enseignements
      </h2>

      <p class="section-subtitle">
        Des paroles pour construire une foi solide.
      </p>


      <div class="list">

        <div
          class="row"
          onclick="showTeaching(1)">

          <div class="thumb">✝️</div>

          <div>
            <strong>
              Comment se convertir véritablement ?
            </strong>

            <small>
              Fondements de la conversion
            </small>
          </div>

        </div>


        <div
          class="row"
          onclick="showTeaching(2)">

          <div class="thumb">🔥</div>

          <div>
            <strong>
              Développer une vie de prière
            </strong>

            <small>
              Entrer dans une communion profonde
            </small>
          </div>

        </div>


        <div
          class="row"
          onclick="showTeaching(3)">

          <div class="thumb">📖</div>

          <div>
            <strong>
              Marcher dans la vérité
            </strong>

            <small>
              La vérité qui transforme
            </small>
          </div>

        </div>


        <div
          class="row"
          onclick="showTeaching(4)">

          <div class="thumb">🕊️</div>

          <div>
            <strong>
              Le Saint-Esprit dans la vie du croyant
            </strong>

            <small>
              Comprendre sa présence et son œuvre
            </small>
          </div>

        </div>

      </div>

    </section>
  `,


  prayer: `

    <section class="section">

      <h2 class="section-title">
        🙏 Prière
      </h2>

      <p class="section-subtitle">
        Prends un moment pour te rapprocher de Dieu.
      </p>


      <div class="card">

        <div class="emoji">
          🌅
        </div>

        <h3>
          Défi du jour
        </h3>

        <p>
          Consacre au moins 15 minutes aujourd'hui
          à la prière sans distraction.
        </p>

        <br>

        <button
          class="btn gold-btn"
          onclick="completePrayer()">

          J'ai prié aujourd'hui

        </button>

      </div>


      <br>


      <div class="card">

        <div class="emoji">
          📜
        </div>

        <h3>
          Suggestion de prière
        </h3>

        <p>
          Seigneur, transforme mon cœur,
          renouvelle mon intelligence et conduis-moi
          dans ta vérité. Apprends-moi à marcher
          fidèlement avec toi chaque jour. Amen.
        </p>

      </div>

    </section>
  `,


  challenges: `

    <section class="section">

      <h2 class="section-title">
        🔥 Défis spirituels
      </h2>

      <p class="section-subtitle">
        De petits engagements peuvent produire
        de grandes transformations.
      </p>


      <div class="list">

        <div class="row">

          <div class="thumb">
            📖
          </div>

          <div style="flex:1">

            <strong>
              Lire la Bible
            </strong>

            <small>
              Lire un chapitre aujourd'hui.
            </small>

            <div class="progress">
              <i style="width:0%"></i>
            </div>

            <br>

            <button
              class="btn gold-btn"
              onclick="completeChallenge(this)">

              Accomplir

            </button>

          </div>

        </div>


        <div class="row">

          <div class="thumb">
            🙏
          </div>

          <div style="flex:1">

            <strong>
              Prier 15 minutes
            </strong>

            <small>
              Consacrer un temps personnel à Dieu.
            </small>

            <br>

            <button
              class="btn gold-btn"
              onclick="completeChallenge(this)">

              Accomplir

            </button>

          </div>

        </div>


        <div class="row">

          <div class="thumb">
            ❤️
          </div>

          <div style="flex:1">

            <strong>
              Poser un acte d'amour
            </strong>

            <small>
              Encourager ou aider quelqu'un.
            </small>

            <br>

            <button
              class="btn gold-btn"
              onclick="completeChallenge(this)">

              Accomplir

            </button>

          </div>

        </div>

      </div>

    </section>
  `,


  testimonials: `

    <section class="section">

      <h2 class="section-title">
        ❤️ Témoignages
      </h2>

      <p class="section-subtitle">
        Les témoignages glorifient Dieu
        et encouragent les autres.
      </p>


      <div class="card">

        <h3>
          Partager mon témoignage
        </h3>

        <br>

        <textarea
          id="testimonialText"
          placeholder="Écris ton témoignage ici..."
          style="
            width:100%;
            min-height:150px;
            padding:14px;
            border:1px solid #ddd;
            border-radius:14px;
            resize:vertical;
          "
        ></textarea>

        <br><br>

        <button
          class="btn gold-btn"
          onclick="submitTestimonial()">

          Publier

        </button>

      </div>

    </section>
  `,


  profile: `

    <section class="profile">

      <div class="avatar">
        👤
      </div>

      <h2>
        Mon profil
      </h2>

      <p style="
        margin-top:7px;
        color:#d7dce3;
      ">
        Porteur du Manteau
      </p>


      <!-- CRÉATEUR -->
      <div style="
        margin-top:18px;
        padding:14px;
        border-radius:15px;
        background:#ffffff10;
        border:1px solid #d9a82e55;
      ">

        <small style="
          display:block;
          color:#c7ccd3;
        ">
          Créateur de l'application
        </small>

        <strong style="
          display:block;
          margin-top:5px;
          color:#f0cb65;
          letter-spacing:1.5px;
        ">
          JONATHAN MWAKA
        </strong>

      </div>

    </section>


    <section class="section">

      <div class="cards">

        <div class="card">

          <div class="emoji">
            🔥
          </div>

          <h3>
            Progression
          </h3>

          <p>
            3 défis accomplis
          </p>

        </div>


        <div class="card">

          <div class="emoji">
            🙏
          </div>

          <h3>
            Prières
          </h3>

          <p id="prayerCount">
            0 aujourd'hui
          </p>

        </div>

      </div>


      <br>


      <div class="card">

        <h3>
          ⚙️ Paramètres
        </h3>

        <p>
          Les paramètres du compte seront
          disponibles prochainement.
        </p>

      </div>

    </section>
  `
};


/* =========================
   NAVIGATION
========================= */

function navigate(page) {

  if (!pages[page]) {
    page = "home";
  }

  content.innerHTML = pages[page];

  document
    .querySelectorAll(".nav-button")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.page === page
      );

    });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================
   ENSEIGNEMENTS
========================= */

function showTeaching(id) {

  const teachings = {

    1: {
      title:
        "Comment se convertir véritablement ?",

      text:
        "La conversion véritable commence par une prise " +
        "de conscience, une repentance sincère et une décision " +
        "de se tourner vers Dieu. Elle ne consiste pas simplement " +
        "à changer de comportement, mais à laisser Dieu transformer " +
        "le cœur."
    },

    2: {
      title:
        "Développer une vie de prière",

      text:
        "La prière est une relation avec Dieu. Elle demande " +
        "régularité, sincérité, écoute et persévérance. Apprends " +
        "à chercher Dieu même lorsque tu ne ressens rien."
    },

    3: {
      title:
        "Marcher dans la vérité",

      text:
        "Marcher dans la vérité signifie rechercher l'intégrité, " +
        "refuser le mensonge et laisser la Parole de Dieu orienter " +
        "nos décisions et notre conduite."
    },

    4: {
      title:
        "Le Saint-Esprit",

      text:
        "Le Saint-Esprit accompagne le croyant dans sa marche " +
        "avec Dieu. Il conduit, enseigne, convainc et produit " +
        "du fruit dans la vie de celui qui se soumet à Dieu."
    }

  };

  const teaching = teachings[id];

  content.innerHTML = `

    <section class="section">

      <button
        class="btn"
        onclick="navigate('teachings')">

        ← Retour

      </button>

      <br><br>

      <h2 class="section-title">
        ${teaching.title}
      </h2>

      <div class="card">

        <div class="emoji">
          📖
        </div>

        <p style="
          margin-top:15px;
          line-height:1.8;
          font-size:16px;
        ">
          ${teaching.text}
        </p>

      </div>

    </section>

  `;
}


/* =========================
   PRIÈRE
========================= */

function completePrayer() {

  let count =
    Number(
      localStorage.getItem("prayerCount") || 0
    );

  count++;

  localStorage.setItem(
    "prayerCount",
    count
  );

  showToast(
    "🙏 Bravo ! Temps de prière enregistré."
  );

}


/* =========================
   DÉFIS
========================= */

function completeChallenge(button) {

  button.textContent =
    "✓ Accompli";

  button.disabled = true;

  button.style.opacity =
    "0.6";

  showToast(
    "🔥 Défi accompli ! Continue à avancer."
  );

}


/* =========================
   TÉMOIGNAGE
========================= */

function submitTestimonial() {

  const field =
    document.getElementById(
      "testimonialText"
    );

  if (
    !field ||
    !field.value.trim()
  ) {

    showToast(
      "Écris d'abord ton témoignage."
    );

    return;
  }

  localStorage.setItem(
    "lastTestimonial",
    field.value.trim()
  );

  field.value = "";

  showToast(
    "❤️ Ton témoignage a été enregistré."
  );

}


/* =========================
   MESSAGE
========================= */

function showToast(message) {

  const toast =
    document.getElementById("toast");

  if (!toast) return;

  toast.textContent =
    message;

  toast.style.opacity =
    "1";

  setTimeout(
    () => {
      toast.style.opacity = "0";
    },
    2500
  );

}


/* =========================
   DÉMARRAGE
========================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    navigate("home");

  }
);
