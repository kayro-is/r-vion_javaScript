const bouton = document.getElementById('changerTexte');

const paragraph = document.getElementById('texteDemo');

// fonction qui sera exécutée lorsque le bouton est cliqué

function changerTexte(){
    paragraph.textContent = 'Le texte a été changer Grâce a javaScript';

}

// ajouter un ecouteur d'évenements sur le bouton pour éxécutér la function changerTexte
bouton.addEventListener('click', changerTexte)