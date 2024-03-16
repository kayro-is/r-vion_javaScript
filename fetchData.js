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

// fonction asynchrone poàur récypérer une serie de poste un par un , sequenciellement .

async function fetchPostsSerially() {
    const posts = [1, 2, 3]; //IDs des postes a récupérer
    for (const id of posts) {
        const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post = await response.json();
        console.log(post);
    }

}

// Foncton pour lancer une reqête fetch avec timeout 

const fetchWithTimeout = (url, timeout) => {
    return Promise.race([
        fetch(url), // la requête principal 
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout)) // Une promesse qui sera rejetée après un délai spécifié, simulant un timeout.
    ]);
};

// utiliser fetchWithTimeout pour récuperer un post avec un timeout de 1 seconde
fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1', 1000)
.then(response => response.json())
.then(post => console.log(post))
.catch(error => console.error('Erreur ou Timeout', error))