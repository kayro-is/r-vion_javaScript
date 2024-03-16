function createCounter() {
    //Initialise une varialbe count dans le scope parent
    let count = 0;

    // la fonction retournée est une fermiture.Elle a acces a count.
    return function() {
        //incrémente count a chaque appel .
        count += 1;
        console.log(`Cette fonction a été appellée ${count} fois.`);
    };
}

// utilisation de la fermiture
const myCounter = createCounter();// Crée une nouvelle instance de compteur.

myCounter(); // Appelle la fonction retournée pour la première fois.
myCounter(); // Appelle la fonction retournée pour la deuxième fois.
myCounter(); // Et ainsi de suite...


