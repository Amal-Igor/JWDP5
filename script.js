

/*const img = document.getElementById("img-art-1");*/


/*Card Produits*/
const getJsonData = fetch('http://localhost:3000/api/cameras').then(response => response.json());


    /*Image Produits*/
getImgUrl = getJsonData
    .then(data => document.getElementById("img-art-1").src = data[0].imageUrl)
    .catch(error => console.log("Erreur" + error))

    /*Nom Produits*/
getProductName = getJsonData
    .then(data => document.getElementById("name-art-1").innerHTML = data[0].name)
    .catch(error => console.log("Erreur" + error))

    /*Prix Produits*/
getProductPrice = getJsonData
    .then(data => document.getElementById("price-art-1").innerText = data[0].price)
/*
/*
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

 

   
    
    
