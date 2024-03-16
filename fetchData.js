// URL de l'API pour obtenir des posts de démonstration
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// function asynchrone pour récupérée et afficher le posts

async function fetchPost() {
    try {
        // Envoi la requete fetch de l'API
        const response  = await fetch(apiUrl);

        // verification si la requête a réussir
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        // extraction de json de la reponse
        const posts = await response.json();

        //Traitment et affichage des données
        console.log(posts)
    } catch (err) {
        console.error("Erreur lors de la recupération des données:",err)
    }
}
fetchPost()

