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
            <div class="product-price cart-element col">${productLocalStorage[x].prix} €</div>
            <button type="button" class="product-delete cart-element col">Bouton Supprimer</button>   
        </div>
        `;


   
    }
        if(x == productLocalStorage.length){
            ///Calcul du prix total du panier
        let calculPrice = [];
        for (let montant of productLocalStorage) {
        let article = montant.prix;
        calculPrice.push(article);
        };
        
        /*
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const totalPrice = calculPrice.reduce(reducer, 0);
        */
       
        const totalPrice = productLocalStorage.map(montant => montant.prix).reduce((a, b) => a + b, 0)
        console.log(totalPrice);

        //Ajout des cases montant total + supprimer tout le panier
        reachMainContainer.innerHTML = hydrateCart + 
        `<div class="row container-fluid justify-content-center text-center">
            <div class="total-amount col">Prix total : ${totalPrice} €</div>
            
            <button id="order-cart-button" class="order col">Passer la commande</button>
        </div>`;
        }    
}

///BOUTON POUR VIDER LE PANIER 

 /*<button id="empty-cart-button" class="empty-cart col">Vider le panier</button>*/ 

//Ajout du bouton supprimer
let reachDeleteButton = document.querySelectorAll(".product-delete");
      console.log(reachDeleteButton);
        //Creation d'un tableau vide
      let tab = [];

      for (let i = 0; i < reachDeleteButton.length; i++){
          reachDeleteButton[i].addEventListener("click", (event) => {
              event.preventDefault();
                //Récupération de l'index du produit associé au bouton supprimer
                console.log(productLocalStorage)
                
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

//Template du formulaire
const goToForm = () => {

    const reachFormContainer = document.getElementById("form-sub-container");

    const formScheme = `<form class="form-order">
    <label for="nom">Nom :</label>
      <input class="input-entry" id="input-nom" name="nom" type="text" required>            
    <label for="prenom">Prénom :</label>
        <input class="input-entry" id="input-prenom" name="prenom" type="text" required>
    <label for="mail">Email :</label>
         <input class="input-entry" id="input-mail" name="mail" type="text" required>
    <label for="adresse">Adresse :</label>
        <textarea class="input-entry" id="input-adresse" name="adresse" type="text" required></textarea>
     <label for="ville">Ville :</label>
        <input class="input-entry" id="input-ville" name="ville" type="text" required>
    
    <button type=""submit" id="finalize-order">Valider votre commande</button>
</form>`

    reachFormContainer.innerHTML = formScheme;
    }


///Ajout de l'évènement pour générer le formulaire au click
let reachOrderButton = document.getElementById("order-cart-button");
    reachOrderButton.addEventListener("click", (event) => {
        event.preventDefault();
        goToForm();
    })



///------  Récupération des données du formulaire  --------------\\\
let reachFinalizeOrder = document.getElementById("finalize-order")
reachFinalizeOrder.addEventListener("click",  (event)=>{
event.preventDefault();


localStorage.setItem("prenom" ,document.getElementById("input-prenom").value);
localStorage.setItem("nom" ,document.getElementById("input-nom").value);
localStorage.setItem("" ,document.getElementById("input-adresse").value);
localStorage.setItem("" ,document.getElementById("input-mail").value);
localStorage.setItem("" ,document.getElementById("input-ville").value);
})
        



/////Test Validation formulaire//////




/* A RECUPERER
          //Mise en place des quantités
         
          for(l = 1; l <= 10; l++){
            let reachQuantity = document.querySelectorAll(".product-quantity");
        let createQuantityDropDown = document.createElement("option");
        reachQuantity.appendChild(createQuantityDropDown);

            
        }
*/
    