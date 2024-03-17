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