
const caseSombre = document.getElementById("mode-sombre");

const CLES = {
    sombre: "mode-sombre",}


// ---------------------------------------------------------
// ÉTAPE 1 — Remplir le formulaire avec ce qui est rangé
// ---------------------------------------------------------
function choisirtheme() {

    // cocher (ou non) caseSombre.
    //.checked attend true ou false, mais getItem rend du TEXTE.
    caseSombre.checked = localStorage.getItem(CLES.sombre) === "true" || "";
} 



    caseSombre.addEventListener("submit",function(evenement){
        evenement.preventDefault()
        localStorage.setItem(CLES.sombre, caseSombre.checked)
    })


function appliquerTheme() {
    if (localStorage.getItem(CLES.sombre) === "true") {
        document.body.classList.add("theme-sombre");
    } else {
        document.body.classList.remove("theme-sombre");
    }
}
bi-moon-stars
bi-brightness-high-fill
// Au chargement de la page
choisirtheme();
// Le thème est appliqué dès le chargement de chaque page.
appliquerTheme();
































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