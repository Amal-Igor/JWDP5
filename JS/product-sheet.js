

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
    console.log(article)
    
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
    createNameField.classList.add("product-name", "product-sheet-infos")
    createContainer.appendChild(createNameField)

    createNameField.innerText = article.name

    /*Implémentation du prix*/
    const createPriceField = document.createElement("div")
    createPriceField.classList.add("product-price", "product-sheet-infos")
    createContainer.appendChild(createPriceField)

    createPriceField.innerHTML = article.price / 100 .toFixed(2) + '<strong> € </strong>'

    /*Description*/
    const createDescriptionField = document.createElement("div")
    createDescriptionField.classList.add("product-description", "product-sheet-infos")
    createContainer.appendChild(createDescriptionField)

    createDescriptionField.innerHTML = article.description

    /*Option*/
    const createOptionField = document.createElement("select")
    createOptionField.classList.add("product-options", "product-sheet-infos")
    createContainer.appendChild(createOptionField)





}