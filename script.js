
/*Card Produits*/
const getJsonData = fetch('http://localhost:3000/api/cameras').then(response => response.json());






getJsonData
.then(function getProducts() {
    const products = getProducts;
    for (let product in products) {
        let productCard = document.createElement("div");
        document.querySelector(".products").appendChild(productCard);
        productCard.classList.add("product");
}}

















/*
    /*Image Produits
getImgUrl = getJsonData
    .then(data => {
        for(let i =  0;  i < 5; i++) {  
        document.getElementById(`img-art-${i}`).src = data[i].imageUrl}}
        )

    .catch(error => console.log("Erreur" + error))

    /*Nom Produits
getProductName = getJsonData
    .then(data => {
        for(let i =  0;  i < 5; i++) {  
        document.getElementById(`name-art-${i}`).innerText = data[i].name}}
        )

    .catch(error => console.log("Erreur" + error))

    /*Prix Produits
getProductPrice = getJsonData
    .then(data => {
        for(let i =  0;  i < 5; i++) {  
        document.getElementById(`price-art-${i}`).innerText = data[i].price + ' €'}}
    )

    .catch(error => console.log("Erreur" + error))

    /*Description des produits
getProductDescription = getJsonData
    .then(data => {
        for(let i =  0;  i < 5; i++) {  
        document.getElementById(`box-description-${i}`).innerHTML = '<strong>Description: </strong>' + data[i].description}}
    )

    .catch(error => console.log("Erreur" + error))





























/*ZONNNNNEEE CRASH TEST*/
/*Fiche produits*/

/*
let generateProductSheet = document.getElementsByClassName("product-card")

/*
let getId = generateProductSheet.getAttribute("id")

let resultat = console.log(getId)

function getId(getArticle, getId) {
    let getArticle = document.getElementsByClassName("product-card");
    for(let i = 0; {

    }
}
*/
/*
 let e = 
    for(let i = 0 ; i < 5){
         document.querySelector(`[id^="article-card-${i}"]`).id = z
 }
/*
var inputs = document.getElementsByClassName("product-card");
for (var i = 0; i < inputs.length; i++) {
  console.log(inputs[i].id);
}
*/




/*
let e = document.getElementsByClassName("product-card")[0].id;

let f = Object.values(e)
    



/*
let generateProductSheet = document.getElementsByClassName("product-card")
        console.log(generateProductSheet)

function getId() {

}

/*

    generateProductSheet.getAttribute('id')
    generateProductSheet.id;









/*const img = document.getElementById("img-art-1");

const yourObjectInResponse = [
    {
      imageUrl: "anyUrl"
    },
    {
      imageUrl: "anotherUrl"
    }
  ]
  
  const img = document.getElementById("img-art-1");
  
  const makeApiCall = () => {
    img.src = yourObjectInResponse[0].imageUrl
  }
  
  makeApiCall()

  
 */           
/*
   /    const articleData = response.json();

        console.log(articleData);

        articleData.then((articleDetails) =>{
            console.log(articleDetails[0].imageUrl)
        })
    })
*/

 