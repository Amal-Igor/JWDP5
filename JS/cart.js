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
    <div class="label-container">
        <label class="input-label letter-label" for="nom">Nom :</label>
        <i id="help-icon-1" class="help-icon __letter-input-help far fa-question-circle"></i>
        <span class="help-popup" id="popup-1">Aucun chiffre ou symbole n'est autorisé</span>
        <input class="input-entry letter-input" id="input-nom" name="nom" type="text" required>
    </div>

    <div class="label-container">           
        <label class="input-label letter-label" for="prenom">Prénom :</label>
        <i id="help-icon-2" class="help-icon __letter-input-help far fa-question-circle"></i>
        <span class="help-popup" id="popup-2">Aucun chiffre ou symbole n'est autorisé</span>
        <input class="input-entry letter-input" id="input-prenom" name="prenom" type="text" required>
    </div>

    
    <div class="label-container">
        <label class="input-label " for="mail">Email :</label>
        <i class="help-icon far fa-question-circle"></i>
        <span class="help-popup" id="popup-3"> Veuillez rentrer une adresse mail valide</span>
        <input class="input-entry" id="input-mail" name="mail" type="text" required>
    </div>


    <div class="label-container">
        <label class="input-label " for="adresse">Adresse :</label>
        <i class="help-icon far fa-question-circle"></i>
        <span class="help-popup" id="popup-4">Aucun symbole n'est autorisé</span>
        <textarea class="input-entry adresse-input" id="input-adress" name="adresse" type="text" required></textarea>
    </div>

    <div class="label-container">   
        <label class="input-label letter-label" for="ville">Ville :</label>
        <i class="help-icon __letter-input-help far fa-question-circle"></i>
        <span class="help-popup" id="popup-4">Aucun chiffre ou symbole n'est autorisé</span>
        <input class="input-entry letter-input" id="input-ville" name="ville" type="text" required>
    </div>

    


    

    
    <button type="submit" id="finalize-order" >Valider votre commande</button>
</form>`

    reachFormContainer.innerHTML = formScheme;
    };


///Ajout de l'évènement pour générer le formulaire au click
let reachOrderButton = document.getElementById("order-cart-button");
    reachOrderButton.addEventListener("click", (event) => {
        event.preventDefault();
        goToForm();

        let finalizeOrder = document.getElementById("finalize-order");


        ///Modification du style en fonction de si la valeur de l'input est correcte ou non
        function validInput(elt) {
            elt.style.border = 'solid 1px green'
            elt.style.boxShadow = '#00800066 0px 0px 4px'
        }

        function invalidInput(elt) {
            elt.style.border = 'solid 1px red'
            elt.style.boxShadow = 'rgba(128, 0, 0, 0.4) 0px 0px 4px'
          }

        ///Affichage Popup d'aide en cas de mauvais complétion de l'input
        document.querySelectorAll(".help-icon").forEach(item => {
            item.addEventListener("click", function (evt) {
                const help = evt.target.closest('.help-icon');
                if (help) {
                  help.closest('.label-container').querySelector('.help-popup').classList.toggle('show-popup');
                }
              });
        })
        
            // création fonctions de validité prénom, nom, ville
            function isValid(value) {
                return /^[A-Z-a-z\s]{3,40}$/.test(value);
            };

                        document.querySelectorAll(".letter-input").forEach(item => {
                        item.addEventListener("change", (event) => {
                            if (isValid(item.value)) {
                                event.preventDefault();
                                validInput(item);
                            } else {
                                invalidInput(item)

                            }
                            })
                        })

           // création fonctions de validité mail
            function validMail(value){
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
            };

                        let reachMailField = document.getElementById("input-mail")
                        reachMailField.addEventListener("change", (event) => {
                            if(validMail(reachMailField.value)) {
                                validInput(reachMailField);
                                event.preventDefault();
                            } else {
                                invalidInput(reachMailField)
                            }
                            
                            
                        })

                    // création fonctions de validité adresse
        function validAddress(value) {
            return /^[A-Z-a-z-0-9\s]{5,80}$/.test(value)
        };

            let reachAdressField = document.getElementById("input-adress")
            reachAdressField.addEventListener("change", (event) => {
                if(validAddress(reachAdressField.value)){
                    validInput(reachAdressField);
                    event.preventDefault();
                } else {
                    invalidInput(reachAdressField)
                }
            })


    })

        







///------  Récupération des données du formulaire  --------------\\\



/////Test Validation formulaire//////



/////Test Validation formulaire//////

    










