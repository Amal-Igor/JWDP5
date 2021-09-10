


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
        return 
}
})




    

/*

function generateProductSheet(){
    return new Promise((generateCustomInfos, showErrorMessage) => {
        let getHref = window.location.href
        let n = getHref.substring(getHref.indexOf('id=') + 3)
        const getJsonData = fetch('http://localhost:3000/api/cameras')
        .then(response => response.json())
        .then (data => {
        getJsonData.id = console.log(data[0])
    })
        if ()
    })
} 
            
*/




/*
let getHref = window.location.href

let n = getHref.substring(getHref.indexOf('id=') + 3)




/*
let isolateId = getHref.match(regex);
*/

/*
let getId = getHref.filter(id => /^[^id=]/.test(fruit))


let matches = location.href.match(/5be1ed3f1c9d44000030b061/);  */