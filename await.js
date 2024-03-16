const newDiv = document.createElement('div');
newDiv.innerHTML.textContent ='bonjour tous le monde';
document.body.appendChild(newDiv);


const monButton = document.getElementById('monButton');
monButton.addEventListener('click', () => {
    alert('bouton cliqué !')
})


fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Erreur', error));


document.getElementById('monFormulaire').addEventListener('submit', (event) => {
    const valeurIput = document.getElementById('monInput').value;
    if (!valeurIput) {
        console.log('le champ ne peut pas etre vide.')
        event.preventDefault();
    }
})