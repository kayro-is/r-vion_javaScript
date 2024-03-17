// fonction pour récupérer les donée utilisateur

async function fetchUserData(){
    try {
        // effectuer une requête GET vers l'API
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        // verifier si la reponse est ok
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }

        // parse la reponse en json
        const user = await response.json();

        // Afficher les données utilisateur 
        const div = document.getElementById('userData');
        div.innerHTML = `<p>${user.name}</p><p>${user.email}</p>`;
    } catch (error){
        console.error("Erreur lors de la récupération des données utilisateur:", error)
    }
}
fetchUserData()