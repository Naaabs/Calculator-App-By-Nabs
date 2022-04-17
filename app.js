//Récupérer les DOM
const touches = [...document.querySelectorAll('.bouton')];
//Acceder à datakey grâce à dataset
//map prend chaque element d'un tableau, execute un traitement et retourne le resultat sous forme d'un tableau
const listeKeycode = touches.map(touche => touche.dataset.key);

//Récupérer l'écran de la calculatrice
const ecran = document.querySelector('.ecran');

//Keydown event
document.addEventListener('keydown', (e) =>{
    const valeur = e.keyCode.toString();
    calculer(valeur);
})

//Click event
document.addEventListener('click', (e)=> {
    const valeur = e.target.dataset.key;
    calculer(valeur);
})

//Fonction de calcul
const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)){ //si le bouton fait partie de la liste Keycode
        //Isoler deux cas : le bouton clean et le bouton égal
        switch (valeur){
            case '8': //Si on clique sur le bouton clean
                ecran.textContent = "" ; //Vider l'écran
                break;
            case '13' :
                const calcul = eval(ecran.textContent).toFixed(2); //Grâce à toFixed on arrondi le résultat à 2 chiffres après la virgule.
                ecran.textContent = calcul;
                break;
            default :  // cliquer sur le reste des boutons
            const indexKeycode = listeKeycode.indexOf(valeur); //recuprer l'index du keycode dans le tableau
            const touche = touches[indexKeycode]; //récuper la touche surlaquelle on a appuyer
            ecran.textContent += touche.innerHTML;
        }
    }
}
//Cas d'erreur de calcul
window.addEventListener('error', (e) => {
    alert('An error has occurred in your math');
})