

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


    
(async function() {
    const articleId =  getArticleId()

    const article = await getJsonData(articleId)

    hydrateArticle (article)


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

    createNameField.innerHTML = '<strong>Nom du produit : </strong>' + article.name

    /*Implémentation du prix*/
    const createPriceField = document.createElement("div")
    createPriceField.classList.add("product-price", "product-sheet-infos", "infos-padding")
    createContainer.appendChild(createPriceField)

    createPriceField.innerHTML = '<strong>Prix : </strong>' + article.price / 100 .toFixed(2) + '<strong> € </strong>'

    /*Description*/
    const createDescriptionField = document.createElement("div")
    createDescriptionField.classList.add("product-description", "product-sheet-infos", "infos-padding")
    createContainer.appendChild(createDescriptionField)

    createDescriptionField.innerHTML = '<strong>Description :</strong>' + article.description

    /*Ajout du bouton Ajouter au panier*/
    const createBasketButton = document.createElement("button")
    createBasketButton.classList.add("product-sheet__button")
    createBasketButton.innerHTML = "Ajouter au panier"
    createContainer.appendChild(createBasketButton)


    /*Option*/
    //Creating Select
    const createOptionField = document.createElement("select")
    createOptionField.id = 'select-options'
    createOptionField.classList.add("product-options")
    createContainer.appendChild(createOptionField)

    //Getting to options
    const getSelect = document.getElementById("select-options")

    //Labelling Dropdown Button
    const labelSelect = document.createElement("label")
    labelSelect.id = "options-label"
    labelSelect.classList.add("label-select", "infos-padding")
    labelSelect.innerHTML = "<strong> Type d'objectif : </strong>"
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
       