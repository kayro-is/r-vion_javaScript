// effectué une requête Get pour récupérer une poste spécifique.
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => {
    // verifier si la reponse est réussie.
    if (!response.ok) throw new error ('Echec du réseau');
    //Transformer la resonse en json.
    return response.json();
})

.then(post => console.log(post)) // afficher le poste récupéré.
. catch(error => console.error('Erreur:', error));


// lancer plusieur requêtes en paralléle et attendre que toutes soient résolues.

Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts/1'),
    fetch('https://jsonplaceholder.typicode.com/posts/2'),
    fetch('https://jsonplaceholder.typicode.com/posts/3')
])

.then(response => Promise.all(response.map(res => res.json()))) // Transformer toutes les reponse en json.
.then(posts => console.log(posts)) // afficher tous les postes récupérés.
.catch(error => console.error('Erreur lors de la récupération des posts : ', error));