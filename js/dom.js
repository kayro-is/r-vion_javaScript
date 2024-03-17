
const demoDiv = document.getElementById('demo');

function changeText(){
    demoDiv.textContent = 'Texte modifié';
}

changeText()

const element = document.getElementById('monElement');
element.style.backgroundColor ='blue';
element.style.color = 'white';
element.style.border = '1px solid black';
element.style.padding = '10px';
element.style.margin = '10px';
element.style.fontSize = '2rem';

// creation d'un nouvelle element p
const paragraphe = document.createElement('p');
paragraphe.textContent = 'ca cest un nouveau paragraphe.'

document.body.appendChild(paragraphe);
paragraphe.style.backgroundColor ='green';
paragraphe.style.color ='white';
paragraphe.style.padding = '10px';

const paragraphe1 = document.createElement('p');
paragraphe1.textContent = 'ca cest une deuxieme paragraphe.'
document.body.appendChild(paragraphe1);

paragraphe1.style.backgroundColor ='orange';
paragraphe1.style.color ='white';
paragraphe1.style.padding = '10px';

const paragraphe2 = document.createElement('p');
paragraphe2.textContent = 'ca cest une troissieme paragraphe.'

 document.body.appendChild(paragraphe2);

 paragraphe2.style.backgroundColor ='yellow';
paragraphe2.style.color ='black';
paragraphe2.style.padding = '10px';


const paragraphe3 = document.createElement('p');
paragraphe3.textContent = 'ca cest une quatriéme paragraphe';

document.body.appendChild(paragraphe3);
paragraphe3.style.backgroundColor ='red';
paragraphe3.style.color ='white';
paragraphe3.style.padding = '10px';


const button = document.getElementById('changeText');
button.addEventListener('click', function(){
    alert("le bouton vien d'etre cliqué👌!")
})

const form = document.getElementById('contactForm')
form.addEventListener('submit', function(e){
    e.preventDefault();


    console.log("Formulaire soumis avec succés");
})

const monBouton = document.getElementById('monBouton');
monBouton.addEventListener('click', function(){
    alert("mon bouton vien d'etre cliquée")
})

document.getElementById('divParent').addEventListener('click', function (){
    console.log('Clic détécté sur la div parent');
}, false); // ce false indique que l'écouteur est en phase de bouillonnement

document.getElementById('monBouton').addEventListener('click', function (event){
    console.log('Clic détécté sur le bouton');
    event.stopPropagation();// Empêche la propagation de l'événement au div parent

}, false);