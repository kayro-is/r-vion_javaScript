 document.getElementById('monformulaire').addEventListener('submit', function(event) {
  event.preventDefault();// Empêche la soumission normale du formulaire , nous permettant de valiser manuelement 

  const inputNom = document.getElementById('nom');

  if (inputNom.value === '') {
    alert('Le nom est requis');
  }else{
    console.log('Formulaire soumis avec le nom :', inputNom.value);
  }

 })