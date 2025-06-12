/*Fetch: Function used for making HTTP requests to fetch resources.(json style, data, images, files)  
         Simplifies asynchronous data fetching in javascript and used for interacting with APIs to retrieve
         and send data asynchrnously over the web.
         
         fetch(url, {options})
*/

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     // .then(response=>console.log(response))
//     .then(response => response.json())
//     .then(data=> console.log(data.name))
//     .catch(error=> console.error(error))








// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response=>{
//     if(!response.ok){
//         throw new Error("Could not fetch resource")
//     }

//     return response.json()
// })
// .then(data=> console.log(data))
// .catch(error => console.log(error))








// fetchData()

// async function fetchData(){
// try{
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    
//     if(!response.ok){
//         throw new Error("Could not fetch resource")
//     }

//     const data = await response.json()
//     console.log(data)
// }

// catch(error){
//     console.log(error)
// }
// }














async function fetchData(){
    try{
     let pokemonName = document.getElementById("pokemonName").value.toLowerCase()

     const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

     if(!response.ok){
        throw new Error("Could not fetch resource")
     }

     const data = await response.json()
     const pokemonSprite = data.sprites.front_default
     const imgElement = document.getElementById("pokemonImage")

     imgElement.src = pokemonSprite
     imgElement.style.display = "block"

     const name = data.name.toUpperCase()
     const weight = data.weight
     const height = data.height

     const details = document.getElementById("details")
     details.innerHTML = `Name: ${name}\nWeight: ${weight}\nHeight: ${height}` 

    }

    catch(error){
        console.error(error)
    }
}