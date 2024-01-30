function toggle_div(btn, id_div) {
    // Cette fonction est appelée lorsqu'un bouton est cliqué.
    // Elle change le texte, le titre et la visibilité d'un élément (div) associé.



    // Changer le titre du bouton entre 'Afficher la suite' et 'Masquer la suite'
    btn.title = (btn.title == 'Afficher la suite') ? 'Masquer la suite' : 'Afficher la suite';

    // Obtenir l'élément (div) associé à partir de son ID
    const divToShowHide = document.getElementById(id_div);

    // Changer la visibilité de l'élément (div) entre visible (block) et caché (none)
    divToShowHide.style.display = (divToShowHide.style.display == 'none') ? 'block' : 'none';
}

let boutonActif = null;

function ecoute() {
    // Cette fonction ajoute un écouteur de clic à chaque bouton ayant la classe 'monBouton'.

    let boutons = document.querySelectorAll('.monBouton');

    boutons.forEach((bouton, i) => {
        bouton.addEventListener('click', () => {
            console.log("bouton cliqué" + i);

            
            

            // Si un autre bouton était actif précédemment, le désactiver
            // Cela vérifie s'il y a déjà un bouton actif et s'il est différent du bouton actuel.
            if (boutonActif && boutonActif !== bouton) {
                const ancienTextId = boutonActif.getAttribute('data-target');
                // Cela obtient l'ID de l'ancien élément (div) associé au bouton actif.
                const ancienText = document.getElementById(ancienTextId);
                // Cela obtient l'ancien élément (div) associé en utilisant l'ID obtenu précédemment.
                ancienText.style.display = 'none';
                boutonActif.title = 'Afficher la suite';
            }

            // Mettre à jour le bouton actif
            boutonActif = bouton;
        });
    });
}

// Attendre que le document HTML soit complètement chargé
document.addEventListener('DOMContentLoaded', function () {
    ecoute(); // Appeler la fonction ecoute() pour configurer les écouteurs de clic
});

const mousemove = document.querySelector('.mousemove');

// Dans le DOM windows c'est la fenêtre, c'est au dessus de document

window.addEventListener('mousemove', (e) =>{
    console.log(e)
// e correspond a tout les événement de mousemove
mousemove.style.left = e.pageX + "px";
mousemove.style.top = e.pageY + "px";
// pour que le rond suive la souris
})

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
    mousemove.style.border = "2px solid #FB8E5C";
});

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

// pour faire grossir ou degrossir le rond au clic
// pour changer la couleur de la bordure au declic ou au clic
// Le style JS prend le dessus sur le style CSS
// rappeler le translate pour la taille

