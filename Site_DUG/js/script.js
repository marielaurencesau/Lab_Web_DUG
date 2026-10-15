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
afficherTableau(tableauChoisi)
