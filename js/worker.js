// le code a executer par le worker

self.addEventListener('message', (e) => {
    //récuperer les données recpérer par le worker

    const data = e.data;
    // effectuer une opératijn longue ou complexe .
    const result = `Recu dans le worker: ${data}`;
    //Envoie le résultat de l'opération de retour script principal
    self.postMessage(result);
});