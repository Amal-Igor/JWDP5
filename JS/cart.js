//Récupération des données pour les convertir en JSON
let productLocalStorage = JSON.parse(localStorage.getItem("product"));
console.log(productLocalStorage)




//Récupération des data dans le local storage pour les afficher en HTML
const reachMainContainer = document.querySelector(".main-container")
console.log(reachMainContainer)


//Si le panier est vide
if(productLocalStorage === null) {
    const panierVide = "Votre panier est vide! :'( ";
    reachMainContainer.innerHTML = panierVide
}

else(){
    
}