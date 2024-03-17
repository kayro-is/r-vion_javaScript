function animeElement (){
    const element = document.getElementById('elementAnime');
    let position = 0; //position initiale

    // fonction exécuter a chaque etape de l'animation 

    function step(){
        position++;// Incrémentation de la position pour déplacé l'élément 
        element.style.transform = `translateX(${position}px)`; // appliquer le deplacement a l'élément
        if (position < 200) {
            requestAnimationFrame(step);// planifier la prochaine etape de l'animation 
        }
    }
    requestAnimationFrame(step);// demarre l'annimation 
}

animeElement ()