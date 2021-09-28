//Récupération des données pour les convertir en JSON
let productLocalStorage = JSON.parse(localStorage.getItem("product"));
console.log(productLocalStorage)


//Génération de la page HTML
const reachMainContainer = document.querySelector(".main-container")
console.log(reachMainContainer)


//Récupération des data dans le local storage pour les afficher en HTML


//Si le panier est vide
if(productLocalStorage === null) {
    const panierVide = 
    `<div class="empty-cart-container"> 
        <p class="empty-cart-message"> Votre Panier est vide :'( </p>
    </div>`;
    reachMainContainer.innerHTML = panierVide;

        
}
else {
    let hydrateCart = [];

    for (x = 0; x < productLocalStorage.length; x++) {
        hydrateCart = hydrateCart + 

        `<div class="row container-fluid justify-content-center text-center">
            <div class="product-name cart-element col "> ${productLocalStorage[x].nom}</div>
            <div class="product-option cart-element col"> ${productLocalStorage[x].option}</div>
            <div class="product-quantity cart-element col">Quantité</div>
            <div class="product-price cart-element col">${productLocalStorage[x].prix} €</div>
            <div class="product-deletecart-element col">Bouton Supprimer</div>
        </div>`;
    }
        if(x == productLocalStorage.length){

        reachMainContainer.innerHTML = hydrateCart;

        }

    


}