/* =========================================================
   PORTEURS DU MANTEAU JJM
   FILS & FILLES
   LA VÉRITÉ QUI IMPACTE
   JONATHAN MWAKA

   APPLICATION COMPLÈTE
   PROFILS + PHOTOS
   ========================================================= */


/* =========================================================
   1. LES 12 LEÇONS
   ========================================================= */

const doctrineLessons = [

    {
        title: "Qu'est-ce que la saine doctrine ?",
        verse: "Tite 2:1",
        text: "La saine doctrine désigne l'enseignement fidèle à la Parole de Dieu. Elle nous permet de connaître correctement Dieu, de comprendre l'Évangile et de vivre d'une manière conforme à notre foi.",
        reflection: "Ce que nous croyons influence notre manière de vivre.",
        question: "La saine doctrine doit-elle seulement remplir notre connaissance ?",
        answer: "Non. Elle doit aussi transformer notre manière de vivre.",
        prayer: "Seigneur, donne-moi l'amour de ta vérité et aide-moi à la mettre en pratique."
    },

    {
        title: "La Bible, fondement de la vérité",
        verse: "2 Timothée 3:16-17",
        text: "La Bible est inspirée de Dieu et constitue une référence fondamentale pour enseigner, corriger et instruire le croyant.",
        reflection: "Nos opinions changent, mais la Parole de Dieu demeure.",
        question: "Sur quoi notre doctrine doit-elle être fondée ?",
        answer: "Sur la Parole de Dieu.",
        prayer: "Seigneur, donne-moi faim de ta Parole et aide-moi à la pratiquer."
    },

    {
        title: "Qui est Dieu ?",
        verse: "Deutéronome 6:4",
        text: "Dieu est le Créateur, éternel, souverain et digne de toute adoration. Nous devons apprendre à le connaître tel qu'il se révèle dans les Écritures.",
        reflection: "Nous ne devons pas fabriquer un Dieu selon nos préférences.",
        question: "Comment pouvons-nous connaître Dieu correctement ?",
        answer: "En nous appuyant sur sa révélation dans les Écritures.",
        prayer: "Père, révèle-moi davantage qui tu es."
    },

    {
        title: "Qui est Jésus-Christ ?",
        verse: "Jean 14:6",
        text: "Jésus-Christ est au centre de la foi chrétienne. Il est le chemin, la vérité et la vie. Son œuvre de salut constitue le cœur de l'Évangile.",
        reflection: "Suivre Christ signifie aussi apprendre à lui ressembler.",
        question: "Qui est au centre de la foi chrétienne ?",
        answer: "Jésus-Christ.",
        prayer: "Seigneur Jésus, aide-moi à mieux te connaître et à te suivre."
    },

    {
        title: "Le Saint-Esprit",
        verse: "Jean 14:26",
        text: "Le Saint-Esprit enseigne, rappelle les paroles de Jésus et conduit le croyant dans la vérité.",
        reflection: "Nous avons besoin de la direction du Saint-Esprit pour vivre fidèlement.",
        question: "Que fait le Saint-Esprit dans la vie du croyant ?",
        answer: "Il enseigne et conduit le croyant dans la vérité.",
        prayer: "Saint-Esprit, conduis-moi dans la vérité."
    },

    {
        title: "Le salut par grâce",
        verse: "Éphésiens 2:8-9",
        text: "Le salut est reçu par grâce, au moyen de la foi. Il n'est pas un salaire obtenu par les mérites humains.",
        reflection: "Nous sommes sauvés par la grâce et appelés ensuite à vivre dans l'obéissance.",
        question: "Pouvons-nous acheter notre salut par nos œuvres ?",
        answer: "Non. Le salut est un don de grâce reçu par la foi.",
        prayer: "Merci Seigneur pour ta grâce."
    },

    {
        title: "La repentance et la foi",
        verse: "Actes 3:19",
        text: "La repentance implique de se détourner du péché et de revenir vers Dieu. La foi consiste à placer notre confiance en Jésus-Christ.",
        reflection: "La repentance véritable produit un changement de direction.",
        question: "Que signifie se repentir ?",
        answer: "Se détourner du péché et revenir vers Dieu.",
        prayer: "Seigneur, donne-moi un cœur véritablement repentant."
    },

    {
        title: "La nouvelle naissance",
        verse: "Jean 3:3",
        text: "Jésus enseigne la nécessité de naître de nouveau. La vie chrétienne commence par une œuvre de transformation spirituelle.",
        reflection: "Porter le nom de chrétien ne suffit pas : Dieu veut transformer notre cœur.",
        question: "Que signifie naître de nouveau ?",
        answer: "Recevoir une vie nouvelle par l'œuvre de Dieu.",
        prayer: "Seigneur, renouvelle mon cœur."
    },

    {
        title: "La sanctification",
        verse: "1 Thessaloniciens 4:3",
        text: "La sanctification est une marche de consécration à Dieu et de séparation du péché.",
        reflection: "La grâce nous appelle à vivre une vie qui honore Dieu.",
        question: "Quel est l'objectif de la sanctification ?",
        answer: "Vivre dans la sainteté et être consacré à Dieu.",
        prayer: "Seigneur, aide-moi à marcher dans la sainteté."
    },

    {
        title: "L'Église, corps de Christ",
        verse: "1 Corinthiens 12:27",
        text: "Les croyants forment le corps de Christ. Chacun possède une place et une responsabilité dans l'œuvre de Dieu.",
        reflection: "Nous sommes appelés à servir et à édifier les autres.",
        question: "Qui forme le corps de Christ ?",
        answer: "Les croyants en Christ.",
        prayer: "Seigneur, montre-moi comment servir ton Église."
    },

    {
        title: "La vie du disciple",
        verse: "Luc 9:23",
        text: "Jésus appelle celui qui veut le suivre à renoncer à lui-même, porter sa croix chaque jour et marcher derrière lui.",
        reflection: "Le disciple accepte le prix de l'obéissance.",
        question: "Que demande Jésus à celui qui veut le suivre ?",
        answer: "Renoncer à soi-même, porter sa croix et le suivre.",
        prayer: "Seigneur Jésus, donne-moi la force de te suivre fidèlement."
    },

    {
        title: "Demeurer dans la vérité",
        verse: "Jean 8:31-32",
        text: "Jésus appelle ses disciples à demeurer dans sa Parole. La vérité produit la liberté lorsque nous la connaissons et la vivons.",
        reflection: "La vérité doit devenir une manière de vivre.",
        question: "Que devons-nous faire pour demeurer disciples de Jésus ?",
        answer: "Demeurer dans sa Parole.",
        prayer: "Seigneur, garde-moi fidèle à ta vérité."
    }

];


/* =========================================================
   2. MEMBRES
   ========================================================= */

const members = [

    {
        id: "jonathan",
        name: "Jonathan Mwaka",
        role: "Responsable",
        icon: "👨🏽‍💼"
    },

    {
        id: "stephie",
        name: "Sr Stephie",
        role: "Fille spirituelle",
        icon: "👩🏽"
    },

    {
        id: "tegra",
        name: "Sr Tegra",
        role: "Fille spirituelle",
        icon: "👩🏽"
    },

    {
        id: "billy",
        name: "Fr Billy",
        role: "Fils spirituel",
        icon: "👨🏽"
    }

];


/* =========================================================
   3. PROGRAMME
   ========================================================= */

const weeklyProgram = [

    {
        day: "Lundi",
        icon: "📖",
        title: "Étude biblique",
        activity: "Lire et méditer la Parole de Dieu.",
        verse: "Josué 1:8"
    },

    {
        day: "Mardi",
        icon: "🙏",
        title: "Prière et intercession",
        activity: "Prendre un temps personnel de prière.",
        verse: "1 Thessaloniciens 5:17"
    },

    {
        day: "Mercredi",
        icon: "🎓",
        title: "Enseignement",
        activity: "Étudier une leçon et répondre aux questions.",
        verse: "Osée 4:6"
    },

    {
        day: "Jeudi",
        icon: "🔥",
        title: "Défi spirituel",
        activity: "Mettre la Parole de Dieu en pratique.",
        verse: "Jacques 1:22"
    },

    {
        day: "Vendredi",
        icon: "❤️",
        title: "Communion fraternelle",
        activity: "Encourager un frère ou une sœur.",
        verse: "Hébreux 10:24-25"
    },

    {
        day: "Samedi",
        icon: "🛐",
        title: "Consécration",
        activity: "Chercher Dieu dans la prière et la consécration.",
        verse: "Romains 12:1"
    },

    {
        day: "Dimanche",
        icon: "⛪",
        title: "Culte et service",
        activity: "Adorer Dieu, écouter sa Parole et servir.",
        verse: "Psaume 84:11"
    }

];


/* =========================================================
   4. DÉFIS
   ========================================================= */

const challenges = [

    {
        title: "Lire un chapitre de la Bible",
        icon: "📖",
        text: "Choisis un chapitre de la Bible et médite-le."
    },

    {
        title: "Prier pendant 30 minutes",
        icon: "🙏",
        text: "Consacre un temps spécial à la prière."
    },

    {
        title: "Mémoriser un verset",
        icon: "🧠",
        text: "Choisis un verset et apprends-le par cœur."
    },

    {
        title: "Encourager quelqu'un",
        icon: "❤️",
        text: "Envoie un message d'encouragement à une personne."
    },

    {
        title: "Partager la Parole",
        icon: "🔥",
        text: "Partage un verset ou une pensée biblique."
    }

];


/* =========================================================
   5. ANNONCES
   ========================================================= */

const announcements = [

    {
        title: "🔥 Bienvenue dans Fils & Filles",
        text: "Bienvenue dans l'espace Porteurs du Manteau JJM. Apprenons, prions, servons et grandissons ensemble.",
        category: "Important"
    },

    {
        title: "📖 Formation biblique",
        text: "Prenons le temps de parcourir les 12 leçons de la saine doctrine.",
        category: "Formation"
    },

    {
        title: "🙏 Vie de prière",
        text: "Chaque membre est encouragé à développer une véritable communion avec Dieu.",
        category: "Spirituel"
    }

];


/* =========================================================
   6. DONNÉES SAUVEGARDÉES
   ========================================================= */

let completedLessons =
    JSON.parse(
        localStorage.getItem("completedLessons")
    ) || [];


let completedProgram =
    JSON.parse(
        localStorage.getItem("completedProgram")
    ) || [];


let completedChallenges =
    JSON.parse(
        localStorage.getItem("completedChallenges")
    ) || [];


let profilePhotos =
    JSON.parse(
        localStorage.getItem("profilePhotos")
    ) || {};


let currentMember =
    localStorage.getItem("currentMember")
    || "jonathan";


/* =========================================================
   7. SAUVEGARDE
   ========================================================= */

function saveData() {

    localStorage.setItem(
        "completedLessons",
        JSON.stringify(completedLessons)
    );

    localStorage.setItem(
        "completedProgram",
        JSON.stringify(completedProgram)
    );

    localStorage.setItem(
        "completedChallenges",
        JSON.stringify(completedChallenges)
    );

    localStorage.setItem(
        "profilePhotos",
        JSON.stringify(profilePhotos)
    );

    localStorage.setItem(
        "currentMember",
        currentMember
    );

}


/* =========================================================
   8. OUTILS
   ========================================================= */

function getContent() {

    return document.getElementById("content");

}


function lessonProgress() {

    return Math.round(
        completedLessons.length /
        doctrineLessons.length * 100
    );

}


function programProgress() {

    return Math.round(
        completedProgram.length /
        weeklyProgram.length * 100
    );

}


function challengeProgress() {

    return Math.round(
        completedChallenges.length /
        challenges.length * 100
    );

}


/* =========================================================
   9. PHOTO DU MEMBRE
   ========================================================= */

function getMemberPhoto(member) {

    if (profilePhotos[member.id]) {

        return `
            <img
                src="${profilePhotos[member.id]}"
                alt="${member.name}"
                style="
                    width:90px;
                    height:90px;
                    object-fit:cover;
                    border-radius:50%;
                    display:block;
                    margin:0 auto 12px;
                    border:4px solid #111827;
                "
            >
        `;

    }


    return `

        <div
            style="
                width:90px;
                height:90px;
                border-radius:50%;
                display:flex;
                align-items:center;
                justify-content:center;
                margin:0 auto 12px;
                background:#e5e7eb;
                font-size:42px;
            "
        >

            ${member.icon}

        </div>

    `;

}


/* =========================================================
   10. ACCUEIL
   ========================================================= */

function showHome() {

    const content = getContent();


    content.innerHTML = `

        <section class="welcome">

            <div class="icon">
                🔥
            </div>

            <h2>
                PORTEURS DU MANTEAU
            </h2>

            <p>
                <strong>
                    LA VÉRITÉ QUI IMPACTE
                </strong>
            </p>

            <p>
                Bienvenue dans
                <strong>
                    FILS & FILLES
                </strong>.
            </p>

            <p>
                <strong>
                    JONATHAN MWAKA
                </strong>
            </p>

        </section>


        <section class="cards">

            <div class="card">

                <div class="icon">
                    📖
                </div>

                <h3>
                    Saine doctrine
                </h3>

                <p>
                    ${completedLessons.length}/12
                    leçons terminées.
                </p>

                <div class="progress-container">

                    <div
                        class="progress-bar"
                        style="width:${lessonProgress()}%">
                    </div>

                </div>

                <button
                    onclick="navigate('teachings')">

                    📖 Continuer

                </button>

            </div>


            <div class="card">

                <div class="icon">
                    📅
                </div>

                <h3>
                    Programme
                </h3>

                <p>
                    ${completedProgram.length}/7
                    activités réalisées.
                </p>

                <button
                    onclick="navigate('program')">

                    📅 Voir le programme

                </button>

            </div>


            <div class="card">

                <div class="icon">
                    🙏
                </div>

                <h3>
                    Vie de prière
                </h3>

                <p>
                    Développe ta communion
                    avec Dieu.
                </p>

                <button
                    onclick="navigate('prayer')">

                    🙏 Prier

                </button>

            </div>


            <div class="card">

                <div class="icon">
                    🔥
                </div>

                <h3>
                    Défis spirituels
                </h3>

                <p>
                    ${completedChallenges.length}/
                    ${challenges.length}
                    défis accomplis.
                </p>

                <button
                    onclick="navigate('challenges')">

                    🔥 Commencer

                </button>

            </div>

        </section>

    `;

}


/* =========================================================
   11. DOCTRINE
   ========================================================= */

function showDoctrine() {

    const content = getContent();


    content.innerHTML = `

        <section class="welcome">

            <div class="icon">
                📖
            </div>

            <h2>
                La saine doctrine
            </h2>

            <p>
                12 leçons pour connaître
                et vivre la vérité biblique.
            </p>

            <p>
                Progression :
                <strong>
                    ${completedLessons.length}/12
                </strong>
            </p>

            <div class="progress-container">

                <div
                    class="progress-bar"
                    style="width:${lessonProgress()}%">
                </div>

            </div>

        </section>


        <section class="cards">

            ${doctrineLessons.map(
                (lesson, index) => `

                <div class="card">

                    <div class="icon">
                        ${
                            completedLessons.includes(index)
                            ? "✅"
                            : "📖"
                        }
                    </div>

                    <h3>
                        ${index + 1}.
                        ${lesson.title}
                    </h3>

                    <p>
                        📖 ${lesson.verse}
                    </p>

                    <button
                        onclick="openDoctrineLesson(${index})">

                        ${
                            completedLessons.includes(index)
                            ? "Relire"
                            : "Lire la leçon"
                        }

                    </button>

                </div>

            `).join("")}

        </section>

    `;

}


/* =========================================================
   12. LEÇON
   ========================================================= */

function openDoctrineLesson(index) {

    const lesson =
        doctrineLessons[index];


    if (!lesson) {

        showDoctrine();

        return;

    }


    const content =
        getContent();


    content.innerHTML = `

        <section class="welcome">

            <div class="icon">
                📖
            </div>

            <h2>
                Leçon ${index + 1}
            </h2>

            <h2>
                ${lesson.title}
            </h2>

            <p>
                📖
                <strong>
                    ${lesson.verse}
                </strong>
            </p>

        </section>


        <div class="card">

            <h3>
                📚 Enseignement
            </h3>

            <p>
                ${lesson.text}
            </p>

        </div>


        <div class="card">

            <h3>
                💭 Réflexion
            </h3>

            <p>
                ${lesson.reflection}
            </p>

        </div>


        <div class="card">

            <h3>
                ❓ Question
            </h3>

            <p>
                ${lesson.question}
            </p>

        </div>


        <div class="card">

            <h3>
                💡 Réponse
            </h3>

            <p>
                ${lesson.answer}
            </p>

        </div>


        <div class="card">

            <h3>
                🙏 Prière
            </h3>

            <p>
                ${lesson.prayer}
            </p>

        </div>


        <div class="card">

            <button
                onclick="markLessonCompleted(${index})">

                ${
                    completedLessons.includes(index)
                    ? "✓ Leçon terminée"
                    : "✅ Marquer comme terminée"
                }

            </button>

        </div>


        <div class="card">

            <button
                onclick="showDoctrine()">

                ← Retour aux leçons

            </button>

        </div>

    `;

}


/* =========================================================
   13. VALIDATION LEÇON
   ========================================================= */

function markLessonCompleted(index) {

    if (!completedLessons.includes(index)) {

        completedLessons.push(index);

        saveData();

        alert(
            "🎉 Félicitations !\n\n" +
            "Leçon terminée avec succès."
        );

    }

    openDoctrineLesson(index);

}


/* =========================================================
   14. PROGRAMME
   ========================================================= */

function showProgram() {

    const content =
        getContent();


    content.innerHTML = `

        <section class="welcome">

            <div class="icon">
                📅
            </div>

            <h2>
                Programme de la semaine
            </h2>

            <p>
                Grandissons ensemble dans
                la Parole, la prière et le service.
            </p>

            <p>
                ${completedProgram.length}/7
                activités réalisées.
            </p>

        </section>


        ${weeklyProgram.map(
            (item, index) => `

            <div class="card">

                <div class="icon">
                    ${item.icon}
                </div>

                <h3>
                    ${item.day}
                </h3>

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.activity}
                </p>

                <p>
                    📖
                    <strong>
                        ${item.verse}
                    </strong>
                </p>

                <button
                    onclick="toggleProgram(${index})">

                    ${
                        completedProgram.includes(index)
                        ? "✓ Activité accomplie"
                        : "Marquer comme accomplie"
                    }

                </button>

            </div>

        `).join("")}

    `;

}


function toggleProgram(index) {

    if (completedProgram.includes(index)) {

        completedProgram =
            completedProgram.filter(
                item => item !== index
            );

    }

    else {

        completedProgram.push(index);

    }

    saveData();

    showProgram();

}


/* =========================================================
   15. MEMBRES
   ========================================================= */

function showMembers() {

    const content =
        getContent();


    content.innerHTML = `

        <section class="welcome">

            <div class="icon">
                👥
            </div>

            <h2>
                Fils & Filles
            </h2>

            <p>
                Une famille spirituelle appelée
                à grandir ensemble en Christ.
            </p>

        </section>


        <section class="cards">

            ${members.map(
                member => `

                <div class="card">

                    ${getMemberPhoto(member)}

                    <h3>
                        ${member.name}
                    </h3>

                    <p>
                        ${member.role}
                    </p>

                    <button
                        onclick="openMemberProfile('${member.id}')">

                        👤 Voir le profil

                    </button>

                </div>

            `).join("")}

        </section>

    `;

}


/* =========================================================
   16. PROFIL D'UN MEMBRE
   ========================================================= */

function openMemberProfile(id) {

    const member =
        members.find(
            item => item.id === id
        );


    if (!member) {

        showMembers();

        return;

    }


    currentMember =
        member.id;


    saveData();


    const content =
        getContent();


    content.innerHTML = `

        <section class="welcome">

            ${getMemberPhoto(member)}

            <h2>
                ${member.name}
            </h2>

            <p>
                ${member.role}
            </p>

        </section>


        <div class="card">

            <h3>
                🖼️ Photo de profil
            </h3>

            <p>
                Choisis une photo depuis
                ton téléphone.
            </p>

            <input
                type="file"
                id="profilePhotoInput"
                accept="image/*"
                onchange="changeProfilePhoto(event, '${member.id}')"
                style="
                    width:100%;
                    padding:12px;
                    margin-top:10px;
                "
            >

        </div>


        <div class="card">

            <h3>
                📊 Progression
            </h3>

            <p>
                📖 Saine doctrine :
                ${completedLessons.length}/12
            </p>

            <p>
                📅 Programme :
                ${completedProgram.length}/7
            </p>

            <p>
                🔥 Défis :
                ${completedChallenges.length}/${challenges.length}
            </p>

        </div>


        ${
            profilePhotos[member.id]
            ? `

            <div class="card">

                <button
                    onclick="removeProfilePhoto('${member.id}')">

                    🗑️ Supprimer la photo

                </button>

            </div>

            `
            : ""
        }


        <div class="card">

            <button
                onclick="showMembers()">

                ← Retour aux membres

            </button>

        </div>

    `;

}


/* =========================================================
   17. AJOUTER UNE PHOTO
   ========================================================= */

function changeProfilePhoto(event, memberId) {

    const file =
        event.target.files[0];


    if (!file) {

        return;

    }


    if (!file.type.startsWith("image/")) {

        alert(
            "❌ Veuillez choisir une image."
        );

        return;

    }


    const reader =
        new FileReader();


    reader.onload = function(e) {

        profilePhotos[memberId] =
            e.target.result;


        saveData();


        alert(
            "🖼️ Photo de profil enregistrée !"
        );


        openMemberProfile(memberId);

    };


    reader.readAsDataURL(file);

}


/* =========================================================
   18. SUPPRIMER PHOTO
   ========================================================= */

function removeProfilePhoto(memberId) {

    const confirmation =
        confirm(
            "Voulez-vous supprimer cette photo ?"
        );


    if (!confirmation) {

        return;

    }


    delete profilePhotos[memberId];


    saveData();


    openMemberProfile(memberId);

}


/* =========================================================
   19. ANNONCES
   ========================================================= */

function showAnnouncements() {

    const content =
        getContent();


    content.innerHTML = `

        <section class="welcome">

            <div class="icon">
                📢
            </div>

            <h2>
                Annonces
            </h2>

            <p>
                Informations importantes
                du groupe.
            </p>

        </section>


        ${announcements.map(
            announcement => `

            <div class="card">

                <h3>
                    ${announcement.title}
                </h3>

                <p>
                    ${announcement.text}
                </p>

                <span class="badge">
                    ${announcement.category}
                </span>

            </div>

        `).join("")}

    `;

}


/* =========================================================
   20. PRIÈRE
   ========================================================= */

function showPrayer() {

    const content =
        getContent();


    content.innerHTML = `

        <section class="welcome">

            <div class="icon">
                🙏
            </div>

            <h2>
                Vie de prière
            </h2>

            <p>
                « Priez sans cesse. »
            </p>

            <p>
                <strong>
                    1 Thessaloniciens 5:17
                </strong>
            </p>

        </section>


        <div class="card">

            <h3>
                🌅 Prière du matin
            </h3>

            <p>
                Commence ta journée
                dans la présence de Dieu.
            </p>

            <button
                onclick="startPrayer('matin')">

                🙏 Commencer

            </button>

        </div>


        <div class="card">

            <h3>
                🌙 Prière du soir
            </h3>

            <p>
                Termine ta journée
                avec Dieu.
            </p>

            <button
                onclick="startPrayer('soir')">

                🙏 Prier

            </button>

        </div>

    `;

}


function startPrayer(moment) {

    if (moment === "matin") {

        alert(
            "🙏 Commence ta journée avec Dieu.\n\n" +
            "Remercie-le, lis sa Parole et " +
            "présente-lui ta journée."
        );

    }

    else {

        alert(
            "🙏 Termine ta journée avec Dieu.\n\n" +
            "Remercie-le pour sa fidélité et " +
            "remets-lui ta nuit."
        );

    }

}


/* =========================================================
   21. DÉFIS
   ========================================================= */

function showChallenges() {

    const content =
        getContent();


    content.innerHTML = `

        <section class="welcome">

            <div class="icon">
                🔥
            </div>

            <h2>
                Défis spirituels
            </h2>

            <p>
                Progression :
                <strong>
                    ${challengeProgress()}%
                </strong>
            </p>

        </section>


        ${challenges.map(
            (challenge, index) => `

            <div class="card">

                <div class="icon">
                    ${challenge.icon}
                </div>

                <h3>
                    Défi ${index + 1}
                </h3>

                <h3>
                    ${challenge.title}
                </h3>

                <p>
                    ${challenge.text}
                </p>

                <button
                    onclick="toggleChallenge(${index})">

                    ${
                        completedChallenges.includes(index)
                        ? "✓ Défi accompli"
                        : "Accomplir le défi"
                    }

                </button>

            </div>

        `).join("")}

    `;

}


function toggleChallenge(index) {

    if (completedChallenges.includes(index)) {

        completedChallenges =
            completedChallenges.filter(
                item => item !== index
            );

    }

    else {

        completedChallenges.push(index);

        alert(
            "🔥 Bravo ! Continue à avancer avec Christ."
        );

    }

    saveData();

    showChallenges();

}


/* =========================================================
   22. PROFIL PRINCIPAL
   ========================================================= */

function showProfile() {

    const member =
        members.find(
            item => item.id === currentMember
        ) || members[0];


    const content =
        getContent();


    const totalProgress =
        Math.round(
            (
                lessonProgress() +
                programProgress() +
                challengeProgress()
            ) / 3
        );


    let level =
        "🌱 Nouveau disciple";


    if (totalProgress >= 80) {

        level =
            "🏆 Disciple fidèle";

    }

    else if (totalProgress >= 50) {

        level =
            "🔥 Serviteur engagé";

    }

    else if (totalProgress >= 25) {

        level =
            "🌿 En croissance";

    }


    content.innerHTML = `

        <section class="welcome">

            ${getMemberPhoto(member)}

            <h2>
                ${member.name}
            </h2>

            <p>
                ${member.role}
            </p>

            <p>
                Niveau :
                <strong>
                    ${level}
                </strong>
            </p>

            <p>
                Progression générale :
                <strong>
                    ${totalProgress}%
                </strong>
            </p>

            <div class="progress-container">

                <div
                    class="progress-bar"
                    style="width:${totalProgress}%">
                </div>

            </div>

            <button
                onclick="openMemberProfile('${member.id}')">

                🖼️ Modifier ma photo

            </button>

        </section>


        <div class="card">

            <h3>
                📖 Saine doctrine
            </h3>

            <p>
                ${completedLessons.length}/12
                leçons
            </p>

        </div>


        <div class="card">

            <h3>
                📅 Programme
            </h3>

            <p>
                ${completedProgram.length}/7
                activités
            </p>

        </div>


        <div class="card">

            <h3>
                🔥 Défis
            </h3>

            <p>
                ${completedChallenges.length}/
                ${challenges.length}
                défis
            </p>

        </div>


        <div class="card">

            <button
                onclick="resetProgress()">

                🔄 Réinitialiser ma progression

            </button>

        </div>

    `;

}


/* =========================================================
   23. RÉINITIALISER
   ========================================================= */

function resetProgress() {

    const confirmation =
        confirm(
            "⚠️ Cette action supprimera toute " +
            "ta progression.\n\n" +
            "Continuer ?"
        );


    if (!confirmation) {

        return;

    }


    completedLessons = [];

    completedProgram = [];

    completedChallenges = [];


    saveData();


    alert(
        "🔄 Progression réinitialisée."
    );


    showProfile();

}


/* =========================================================
   24. NAVIGATION
   ========================================================= */

function navigate(page) {

    const buttons =
        document.querySelectorAll(
            ".nav-button"
        );


    buttons.forEach(
        button => {

            button.classList.remove(
                "active"
            );

        }
    );


    switch (page) {


        case "home":

            if (buttons[0])
                buttons[0]
                    .classList.add("active");

            showHome();

            break;


        case "program":

            if (buttons[1])
                buttons[1]
                    .classList.add("active");

            showProgram();

            break;


        case "teachings":

            if (buttons[2])
                buttons[2]
                    .classList.add("active");

            showDoctrine();

            break;


        case "members":

            if (buttons[3])
                buttons[3]
                    .classList.add("active");

            showMembers();

            break;


        case "profile":

            if (buttons[4])
                buttons[4]
                    .classList.add("active");

            showProfile();

            break;


        case "prayer":

            showPrayer();

            break;


        case "challenges":

            showChallenges();

            break;


        case "announcements":

            showAnnouncements();

            break;


        default:

            showHome();

    }

}


/* =========================================================
   25. DÉMARRAGE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        showHome();

    }
);


/* =========================================================
   FIN
   ========================================================= */