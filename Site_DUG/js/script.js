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



