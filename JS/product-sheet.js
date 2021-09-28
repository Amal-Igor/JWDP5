

/*
const getJsonData = fetch('http://localhost:3000/api/cameras')
.then(response => response.json())
.then (getId => {

    const products = getId;

    for(let id in products){

    let getHref = window.location.href
    let n = getHref.substring(getHref.indexOf('id=') + 3)
    let jsonId = getJsonData.id

        if (n = jsonId) {
            console.log(getJsonData.id[n])
        }
       
}
})

*/


    
(async function () {
    const articleId =  getArticleId()

    const article = await getJsonData(articleId)


    await hydrateArticle (article)

    /*await getOption()*/


}) ()


function getArticleId() {
   return new URL (location.href).searchParams.get("id")

   
}

function getJsonData(articleId) {
    return fetch(`http://localhost:3000/api/cameras/${articleId}`)
                .then(response => response.json())
                .then(articles => articles)
                
}

function hydrateArticle(article) {

     /*Implémentation de la carte produit*/
    const getPrincipalContainer = document.getElementById("main")
    const createContainer = document.createElement("div")
    createContainer.classList.add("sub-container")
    getPrincipalContainer.appendChild(createContainer)

    /*Implémentation de l'img*/
    const createImgContainer = document.createElement("img")
    createImgContainer.classList.add("product-img")
    createContainer.appendChild(createImgContainer)
    
    createImgContainer.src = article.imageUrl


    /*Implémentation du Nom*/
    const createNameField = document.createElement("div")
    createNameField.classList.add("product-name", "product-sheet-infos", "infos-padding")
    createContainer.appendChild(createNameField)

    createNameField.innerHTML = article.name

    /*Implémentation du prix*/
    const createPriceField = document.createElement("div")
    createPriceField.classList.add("product-price", "product-sheet-infos", "infos-padding")
    createContainer.appendChild(createPriceField)

    createPriceField.innerHTML = article.price / 100 .toFixed(2) + '<strong> € </strong>'

    /*Description*/
    const createDescriptionField = document.createElement("div")
    createDescriptionField.classList.add("product-description", "product-sheet-infos", "infos-padding")
    createContainer.appendChild(createDescriptionField)

    createDescriptionField.innerHTML = article.description

 

    /*Ajout du bouton Ajouter au panier*/
    const createBasketButton = document.createElement("button")
    createBasketButton.classList.add("product-sheet__button")
    createBasketButton.setAttribute("id", "submit-button")
    createBasketButton.type = "submit"
    createBasketButton.innerHTML = "Ajouter au panier"
    createContainer.appendChild(createBasketButton)


    /*Option*/
    //Creating Select
    const createOptionField = document.createElement("select")
    createOptionField.setAttribute('id', 'select-options')
    createOptionField.classList.add("product-options" )
    createContainer.appendChild(createOptionField)

    //Getting to options
    const getSelect = document.getElementById("select-options")

    //Labelling Dropdown Button
    const labelSelect = document.createElement("label")
    labelSelect.id = "options-label"
    labelSelect.classList.add("label-select", "product-label", "infos-padding", "option-label")
    createContainer.appendChild(labelSelect)

    const jsonOptions = article.lenses
    loadFromJson(getSelect,jsonOptions)

        function loadFromJson(el,json){
        // appending options from json 
            json.forEach(each=>{
            let newEl = document.createElement("option")
            newEl.innerText = each
            newEl.value = each
            el.appendChild(newEl)
            })


        //Création des labels pour fiche-produit
            const getProductInfos = document.getElementsByClassName("product-sheet-infos")
            for (s = 0; s < getProductInfos.length; s++) {
                let getSubContainer = document.querySelector(".sub-container")
                let createLabels = document.createElement("div")
                createLabels.classList.add("product-label")
                createLabels.setAttribute('id', `product-label-${s}`)
                getSubContainer.appendChild(createLabels) 
            }

            //Contenu des labels de la fiche produit
            document.querySelector("#product-label-0").innerText = " Nom du produit :";
            document.querySelector("#product-label-1").innerText = " Description :";
            document.querySelector("#options-label").innerText = " Choisissez vos options :";
            document.querySelector("#product-label-2").innerText = " Prix :";
}


//Récupérer les élements pour le panier 
fillShoppingCart();

function fillShoppingCart(){
    //Sélection du bouton ajouter au panier
    const reachSubmitButton = document.querySelector("#submit-button");
    console.log(reachSubmitButton)
    reachSubmitButton.addEventListener("click", (event)=>{
        event.preventDefault();


        const reachUserOption = document.querySelector("#select-options");
        const optionChoice = reachUserOption.value

        //Initialisation Objet panier Client
        let userChoice = {
            nom: article.name,
            prix: article.price / 100,
            id: article._id,
            option: optionChoice,
            }
            
            console.log(userChoice)


            //----------Local Storage ------------//


        //Récupération des données pour les convertir en JSON
        let productLocalStorage = JSON.parse(localStorage.getItem("product"));

        //Ajout des donénes dans le local storage
        const addProductInLocalStorage = () => {
            productLocalStorage.push(userChoice)
            localStorage.setItem("product", JSON.stringify(productLocalStorage));
        }

        //Génération Popup confirmation des achats
        const confirmPopUp = () => {
            if (window.confirm(`${article.name} ajouté au panier avec l'option ${optionChoice}. Appuyer sur OK pour continuer vos achats`)) {
                window.location.href = "cart.html"
                
            } else {
                window.location.href = ""
            }
        }


        //Stockage des données dans le local storage
        if (productLocalStorage) {
            addProductInLocalStorage()

            confirmPopUp();
            console.log(productLocalStorage)  


        } else {
            productLocalStorage = [];
            addProductInLocalStorage();

            confirmPopUp();
            console.log(productLocalStorage)  
        }
    });
    
    
    
}   


}













  












 

/*
//Generating Option
const createOption = document.createElement('option')
createOption.value = "default"
createOptionField.appendChild(createOption)

//Fill options with JSON array
const select = document.getElementById("select-options")
const options = article.lenses
for(var i=0; i < options.lenght; i++)
        {   
            
            var option = document.createElement("Option"),
                inner = document.createTextNode(options[i])

                option.appendChild(inner);

            select.insertBefore(option,select.lastChild)

            
        }

        */
       