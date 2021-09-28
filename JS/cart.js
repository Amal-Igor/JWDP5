//Récupération des données pour les convertir en JSON
let productLocalStorage = JSON.parse(localStorage.getItem("product"));
console.log(productLocalStorage)


//Génération de la page HTML
const reachMainContainer = document.querySelector(".main-container")
console.log(reachMainContainer)


//Récupération des data dans le local storage pour les afficher en HTML


//Si le panier est vide
if(productLocalStorage === null || productLocalStorage.length == 0) {
    const panierVide = 
    `<div class="empty-cart-container"> 
        <div class="empty-cart-message"> Votre Panier est vide :'( </div>
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
            <button type="button" class="product-delete cart-element col">Bouton Supprimer</button>   
        </div>
        `;
    }
        if(x == productLocalStorage.length){
        //Ajout des cases montant total + supprimer tout le panier
        reachMainContainer.innerHTML = hydrateCart + 
        `<div class="row container-fluid justify-content-center text-center">
            <div class="total-amount col">"Montant total du panier" +  </div>
            <div class="order col">yo</div>
        </div>`;


        ///Calcul du prix total du panier
      /*  let calculPrice = [];
        for (productLocalStorage of productLocalStorage) {
        let article = productLocalStorage.prix;
        calculPrice.push(article);
        };
        
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const totalPrice = calculPrice.reduce(reducer, 0);

        console.log(totalPrice);
      */

        
        }    
}


      //Ajout du bouton supprimer
let reachDeleteButton = document.querySelectorAll(".product-delete");
      console.log(reachDeleteButton);
        //Creation d'un tableau vide
      let tab = [];

      for (let i = 0; i < reachDeleteButton.length; i++){
          reachDeleteButton[i].addEventListener("click", (event) => {
              event.preventDefault();
                //Récupération de l'index du produit associé au bouton supprimer
                
                let getIndexOnLocalStorage = productLocalStorage.indexOf(productLocalStorage[i]);
                    console.log(getIndexOnLocalStorage);
                    tab = productLocalStorage
                let response = confirm("Vous allez retirer ce produit de votre panier, voulez-vous continuer?")

                if (response == true ) {
                    tab.splice(getIndexOnLocalStorage, 1)
                    productLocalStorage = localStorage.setItem("product", JSON.stringify(tab));
                    window.location.href ="cart.html";}

                else {
                }

          })
              }


/*
              let getIdToDelete = productLocalStorage.indexOf(productLocalStorage[i]);
              console.log(getIdToDelete);
                    if(getIdToDelete === productLocalStorage[i]){
                        productLocalStorage.splice(i, 1);
                    }
              


                       console.log(event)

                productLocalStorage = productLocalStorage.filter(element => element)



              */