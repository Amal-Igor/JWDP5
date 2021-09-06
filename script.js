
/*Card Produits*/
const getJsonData = fetch('http://localhost:3000/api/cameras').then(response => response.json());


    /*Image Produits*/
getImgUrl = getJsonData
    .then(data => {
        for(let i =  0;  i < 5; i++) {  
        document.getElementById(`img-art-${i}`).src = data[i].imageUrl}}
        )

    .catch(error => console.log("Erreur" + error))

    /*Nom Produits*/
getProductName = getJsonData
    .then(data => {
        for(let i =  0;  i < 5; i++) {  
        document.getElementById(`name-art-${i}`).innerText = data[i].name}}
        )

    .catch(error => console.log("Erreur" + error))

    /*Prix Produits*/
getProductPrice = getJsonData
    .then(data => {
        for(let i =  0;  i < 5; i++) {  
        document.getElementById(`price-art-${i}`).innerText = data[i].price + '€'}}
    )

    .catch(error => console.log("Erreur" + error))


    



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

 

   
    
    
