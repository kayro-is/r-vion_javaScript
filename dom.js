const button = document.getElementById('changeText');
const demoDiv = document.getElementById('demo');

function changeText(){
    demoDiv.textContent = 'Texte modifié';
}

button.addEventListener('click', changeText);

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