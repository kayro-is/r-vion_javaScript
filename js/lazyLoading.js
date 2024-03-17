

// attente que le contenu DOM soit entierement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded',() => {
    // récuperer tous les elements img avec loa classe 'lazy' dans un tableau

    let lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));

    // verifié si l'API  Insertion Observer est supportée par le navigateur
    if("insertionObserver" in window) {
        // crée un nouvelle observateur avec une function callback pour les images visible

        let lazyImageObserver = new insertionObserver((entries, observer) => {
            entries.forEach((entry) => {
                // verifié si l'élément est visible avec viewport
                if(entry.isInterseting){
                    let lazyImage = entry.target;
                    // remplacer l'attribut 'src' de l'image par la valeur data-src
                    lazyImage.src = lazyImage.dataset.src;
                    // supprimer la classe lazy pour ne plus la traiter a l'avenir
                    lazyImage.classList.remove("lazy");
                    // arreter d'observer l'élément actuel puisque il est deja charger 
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        // observer chaque image lazy pour detecter son entrée dans le viewport
        lazyImages.forEach((lazyImage) =>{
            lazyImageObserver.observe(lazyImage);
        });
    }else{
        //FallBack pour les navigateur qui ne support pas l'intersection observer
        //charger immédiatement toutes les imagesans lazy loading
        lazyImages.forEach((lazyImage) => {
            lazyImage.src = lazyImage.dataset.src
        });
    }
});