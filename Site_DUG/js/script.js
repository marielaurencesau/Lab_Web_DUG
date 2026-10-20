/*-------------------écouter bouton mode-sombre-------------------*/
const boutonTheme = document.getElementById("bouton-theme");
const imageTheme = document.getElementById("image-theme")

const CLES = {
    theme: "galaxieTheme",
}

boutonTheme.addEventListener("click",function(){
    setTimeout(() => {
        if (boutonTheme.getAttribute("aria-pressed") === "true"){
            appliquerTheme("sombre");
            localStorage.setItem(CLES.theme, "sombre");
        }else{appliquerTheme("clair");
            localStorage.setItem(CLES.theme, "clair");
        }
    }, 0);
})  

const themeSauvegarde = localStorage.getItem(CLES.theme);

if (themeSauvegarde) {
    appliquerTheme(themeSauvegarde)
}else{
    appliquerTheme("sombre")
}

function appliquerTheme(theme) {
    if(theme === "sombre"){
        document.body.classList.add("theme-sombre");
        document.body.classList.remove("theme-clair")
        boutonTheme.setAttribute("aria-pressed", "true");
        boutonTheme.classList.add("icone-clair");
        boutonTheme.classList.remove("icone-sombre");
        imageTheme.className = "bi bi-brightness-high-fill fs-6";

    } else {
        document.body.classList.add("theme-clair")
        document.body.classList.remove("theme-sombre");
        boutonTheme.setAttribute("aria-pressed", "false");
        boutonTheme.classList.add("icone-sombre");
        boutonTheme.classList.remove("icone-clair");
        imageTheme.className = "bi bi-moon-stars fs-6";
    }
}
/*  theme sombre: .body --> theme-sombre 
                 #image-theme : "bi bi-brightness-high-fill fs-6"
    theme clair: .body --> theme-clair
                 #image-theme : "bi bi-brightness-high-fill fs-6"
    theme disco  .body --> theme-disco
                 #image-theme : "bi bi-globe fs-6"
*/
/*--------------------------formulaires-------------------------*/
const radioTelefaxe= document.getElementById("radio-telefax");
const radioModifier= document.getElementById("radio-modifier");
const formTelefaxe = document.getElementById("formulaire-telefax");
const formAjout = document.getElementById("formulaire-ajout");

function gererAffichageFormulaires() {
    if (radioTelefaxe && radioTelefaxe.checked) {
        if (formTelefaxe) formTelefaxe.style.setProperty("display", "block", "important");
        if (formAjout) formAjout.style.setProperty("display", "none", "important");
    } else if (radioModifier && radioModifier.checked) {
        if (formTelefaxe) formTelefaxe.style.setProperty("display", "none", "important");
        if (formAjout) formAjout.style.setProperty("display", "block", "important");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (radioTelefaxe) radioTelefaxe.addEventListener("change", gererAffichageFormulaires);
    if (radioModifier) radioModifier.addEventListener("change", gererAffichageFormulaires);

    gererAffichageFormulaires();
});

/*------------------------Tableaux épisodes-----------------------*/
const listeTableau = document.getElementsByName("tableau_selection");
const tableauSaison1 = document.getElementById("saison1");
const tableauSaison2 = document.getElementById("saison2");
const tableauSaison3 = document.getElementById("saison3");
const tableauSaison4 = document.getElementById("saison4");
const tableaufilms = document.getElementById("films_et_autres");
const pitonS1 = document.getElementById("piton_s1")
const pitonS2 = document.getElementById("piton_s2")
const pitonS3 = document.getElementById("piton_s3")
const pitonS4 = document.getElementById("piton_s4")
const pitonFilms = document.getElementById("piton_films")

listeTableau.forEach(function(bouton) {
    bouton.addEventListener("click",function(){
        tableauChoisi = this.value;

        afficherTableau(tableauChoisi);
    });
});

function afficherTableau(tableauChoisi){
        if (!tableauSaison1) {
        return;
        }
        tableauSaison1.classList.add("d-none");
        tableauSaison2.classList.add("d-none");
        tableauSaison3.classList.add("d-none");
        tableauSaison4.classList.add("d-none");
        tableaufilms.classList.add("d-none");
        pitonS1.classList.remove("choisi");
        pitonS2.classList.remove("choisi");
        pitonS3.classList.remove("choisi");
        pitonS4.classList.remove("choisi");
        pitonFilms.classList.remove("choisi");

    if (tableauChoisi === "saison1" || tableauChoisi === ""){
        tableauSaison1.classList.remove("d-none");
        pitonS1.classList.add("choisi");
    }else if(tableauChoisi === "saison2"){
        tableauSaison2.classList.remove("d-none");
        pitonS2.classList.add("choisi");  
    }else if(tableauChoisi === "saison3"){
        tableauSaison3.classList.remove("d-none");
        pitonS3.classList.add("choisi");
    }else if(tableauChoisi === "saison4"){
        tableauSaison4.classList.remove("d-none");
        pitonS4.classList.add("choisi");
    }else if(tableauChoisi === "film"){
        tableaufilms.classList.remove("d-none");
        pitonFilms.classList.add("choisi");
    }else{
        tableauSaison1.classList.remove("d-none");
        pitonS1.classList.add("choisi");
    }
}
afficherTableau("saison1");


/*------------------------validation formulaire------------------------*/

"use strict";
//declaration des variable 
const champVotreNom = document.getElementById("votre-nom");
const champVotreCourriel = document.getElementById("votre-courriel");
const champAjoutNom = document.getElementById("ajout-nom");
const champAjoutCourriel = document.getElementById("ajout-courriel")
const formulaires = document.querySelectorAll("#formulaire-telefax, #formulaire-ajout");


/* ---------------------------------------------------------------------
   ÉTAPE 1 — Au chargement : remplir les champs avec ce qui est rangé
   --------------------------------------------------------------------- */
function chargerDonnees() {
    const nom = localStorage.getItem("telefax-nom") || "";
    const courriel = localStorage.getItem("telefax-courriel")

    if (champVotreNom) {champVotreNom.value = nom;}
    if (champAjoutNom) {champAjoutNom.value = nom;}
    if (champVotreCourriel) {champVotreCourriel.value = courriel;}
    if (champAjoutCourriel) {champAjoutCourriel.value = courriel;}
}

chargerDonnees();


/* ---------------------------------------------------------------------
   ÉTAPE 2 — Validation et Enregistrement lors de la soumission
   --------------------------------------------------------------------- */
formulaires.forEach(function (formulaire) {
    
    // On désactive la validation native du navigateur pour laisser le JS gerer
    formulaire.setAttribute("novalidate", "");

    formulaire.addEventListener("submit", function (evenement) {
        let formulaireValide = true;
        const inputs = formulaire.querySelectorAll("input, textarea, select");

        // Vérification de chaque champ du formulaire
        inputs.forEach(function (input) {
            if (!validerChamp(input)) {
                formulaireValide = false;
            }
        });

        // Bloquer l'envoi si le formulaire contient au moins une erreur
                if (!formulaireValide) {
            evenement.preventDefault();
            } else {
            // Si tout est beau, on sauvegarde manuellement les champs présents
            const champNom = formulaire.querySelector("input[name='nom']")
            const champCourriel = formulaire.querySelector("input[name='email']")
            
            if (champNom) {
                localStorage.setItem("telefax-nom", champNom.value.trim());
            }
            if (champCourriel) {
                localStorage.setItem("telefax-courriel", champCourriel.value.trim());
            }
        

            // Sauvegarder séparément le sujet et le message pour la page merci.html
            const champSujet = formulaire.querySelector("input[id*='sujet']");
            const champMessage = formulaire.querySelector("textarea");

            if (champSujet) {
                localStorage.setItem("merci-sujet", champSujet.value.trim());
            }
            if (champMessage) {
                localStorage.setItem("merci-message", champMessage.value.trim());
            }
        }
    });

    /* ---------------------------------------------------------------------
       validation en temps reel
       --------------------------------------------------------------------- */
    formulaire.addEventListener("input", function (evenement) {
        validerChamp(evenement.target);
    });
});


/* ---------------------------------------------------------------------
regles de validation d'un champ
   --------------------------------------------------------------------- */
function validerChamp(champ) {
    let conteneurErreur = champ.parentNode.querySelector(".invalid-feedback");
    if (!conteneurErreur) {
        // Pas de .validation dans le parent (ex. boutons radio) : on ne valide pas
        if (!champ.parentNode.querySelector(".validation")) {
            return true;
        }
        conteneurErreur = document.createElement("div");
        conteneurErreur.className = "invalid-feedback";
        champ.parentNode.appendChild(conteneurErreur);
    }

    
    if (!conteneurErreur) {
        return true;
    }

    let messageErreur = "";
    const valeur = champ.value.trim();

    // RÈGLE 1 : Le champ requis est rester vide
    if (champ.hasAttribute("required") && valeur === "") {
        messageErreur = "Ce champ est obligatoire.";
    } 
    
    // RÈGLE 2 : Le format de l'adresse courriel est incorrect
    else if (champ.type === "email" && valeur !== "") {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(valeur)) {
            messageErreur = "Veuillez entrer une adresse courriel valide (ex: nom@domaine.com).";
        }
    }
    
    // RÈGLE 3 : Le texte est trop court
    else if (champ.hasAttribute("minlength") && valeur !== "") {
        const minLength = parseInt(champ.getAttribute("minlength"), 10);
        if (valeur.length < minLength) {
            messageErreur = `Ce champ doit contenir au moins ${minLength} caractères.`;
        }
    }

    if (messageErreur !== "") {
        champ.setCustomValidity("Invalide");
        conteneurErreur.textContent = messageErreur;
        conteneurErreur.style.display = "block"; 
        conteneurErreur.style.color = "red";
        return false;
    } else {
        champ.setCustomValidity("");
        conteneurErreur.textContent = "";
        conteneurErreur.style.display = "none";
        return true;
    }
}
function afficherRemerciements() {
    const conteneurSujet = document.getElementById("affichage-sujet");
    const conteneurMessage = document.getElementById("affichage-message");

    if (conteneurSujet || conteneurMessage) {
        const sujetSauvegarde = localStorage.getItem("merci-sujet") || "Aucun sujet";
        const messageSauvegarde = localStorage.getItem("merci-message") || "Aucun message";

        if (conteneurSujet) {
            conteneurSujet.textContent = sujetSauvegarde;
        }
        if (conteneurMessage) {
            conteneurMessage.textContent = messageSauvegarde;
        }
        localStorage.removeItem("merci-sujet");
        localStorage.removeItem("merci-message");
    }
}
afficherRemerciements();