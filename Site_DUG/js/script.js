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

