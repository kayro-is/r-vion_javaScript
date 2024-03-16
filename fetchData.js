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
