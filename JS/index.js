
getIndexGenerated();

function getIndexGenerated(){
const getJsonData = fetch('http://localhost:3000/api/cameras').then(response => response.json());

getJsonData
        .then(function (dispatchData){
            const products = dispatchData;

            for (let item in products)  {

                /*Implémentation de la carte*/
                let getPrincipalContainer = document.getElementById("products");
                let createCard = document.createElement("div")
                createCard.className = 'product-card';
                createCard.classList.add("col", "pl-0", "pr-0");
                
                getPrincipalContainer.appendChild(createCard)


                /*Implémentation de l'img*/
                 
                let createImg = document.createElement("img")
                createImg.className = "card-img";
                createImg.src = dispatchData[item].imageUrl
                createCard.appendChild(createImg)

                /*Implémentation du Nom*/

                let createName = document.createElement("h2")
                createName.className = "card-name"
                createName.innerText = dispatchData[item].name
                createCard.appendChild(createName)
                createName.classList.add("card-description");

                /*Implémentation du prix*/

                let createPrice = document.createElement("p")
                createPrice.className = "product-price" 
                createPrice.innerHTML = dispatchData[item].price / 100 .toFixed(2) + '<strong> € </strong>'
                createCard.appendChild(createPrice)
                createPrice.classList.add("card-description");

                /*Lien  vers la fiche produit*/

                let createLink = document.createElement("a")
                createLink.className = "product-sheet-link"
                createLink.innerText = "Voir la fiche produit"
                createLink.href = `product-sheet.html?id=${dispatchData[item]._id}`
                createCard.appendChild(createLink)
                createLink.classList.add("card-button");

                /*Ajouter au panier*/

                let createBasket = document.createElement("button")
                createBasket.className = "to-basket"
                createCard.appendChild(createBasket);
                createBasket.innerText = "Ajouter au panier"
                createBasket.classList.add("card-button")
                
            } 
        
        })
}



































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

 