// Définition d'une fonction asynchrone fetchData pour récupérer les données depuis l'API
async function fetchData() {
    try {
        // Utiliser l'API fetch pour envoyer une requête GET à l'URL fournie.
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Vérifie si la réponse HTTP est 'ok' (status dans la plage 200-299).
        if (!response.ok) {
            throw new Error('Réponse réseau non OK ❌');
        }

        // Transformer la réponse en format JSON.
        // Attendez que la promesse soit résolue pour obtenir les données JSON.
        const data = await response.json(); // Correction ici: ajoutez 'await' devant response.json()

        // Sélectionne l'élément du DOM où les données seront affichées.
        const container = document.querySelector('#dataContaineur');

        // Afficher les données dans l'élément sélectionné.
        // Utiliser JSON.stringify pour convertir l'objet JSON en chaîne de caractères formatée.
        // Ici, seules les 5 premières entrées sont affichées pour simplifier.
        container.innerHTML = `<pre>${JSON.stringify(data.slice(0, 5), null, 2)}</pre>`;
    } catch (error) {
        console.error("Il y a eu un problème avec l'opération fetch:", error);
    }
}

// Appelle la fonction fetchData lors du chargement du script.
fetchData();
