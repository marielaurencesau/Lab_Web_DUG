
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



    formulaire.addEventListener("submit",function(evenement){
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