const axios = require("axios")
const {Pokemon, Type} = require("../db");





async function getPokemonsApi(){

    let allPokemons = [];
    let url = ("https://pokeapi.co/api/v2/pokemon")
    let apiUrls=[]
    let apiUrls2=[]
    for (let i = 0; i < 2; i++) {
        let urls = await axios.get(url)
        apiUrls = [...apiUrls,...urls.data.results.map(u=>u.url)] 
        url = urls.data.next

    }
    let promesas= [];
    apiUrls.map(p=>{
        promesas.push(axios.get(p))
    })
    console.log(promesas)
    await Promise.all(promesas)
    .then(response=>{
        allPokemons = response.map(p=>{
                        return {
                            id: p.data.id,
                            name: p.data.name,
                            vida: p.data.stats[0].base_stat,
                            ataque: p.data.stats[1].base_stat,
                            velocidad: p.data.stats[5].base_stat,
                            altura: p.data.height,
                            defensa: p.data.stats[2].base_stat,
                            peso: p.data.weight,
                            image: p.data.sprites.other.dream_world.front_default,
                            tipos: p.data.types.map(t=>t.type.name)
            
                        }
                    })
        
    })
    .catch(error=>{
        console.log(error)
    })
           
            return allPokemons

}

// const url = ("https://pokeapi.co/api/v2/pokemon?limit=40")

// async function getPokemonsApi(){
//     let allPokemons = [];

//      await axios.get(url)
//      .then(async (response)=>{
//         let arrayInfoData = response.data.results;
//         let promiseArray = [];

//         arrayInfoData.map( p=>promiseArray.push( axios.get(p.url)))
//      await Promise.allSettled(promiseArray)
//      .then((response)=>{
//         allPokemons = response.map(p=>{
//             return {
//                 id: p.data.id,
//                 name: p.data.name,
//                 vida: p.data.stats[0].base_stat,
//                 ataque: p.data.stats[1].base_stat,
//                 velocidad: p.data.stats[5].base_stat,
//                 altura: p.data.height,
//                 defensa: p.data.stats[2].base_stat,
//                 peso: p.data.weight,
//                 image: p.data.sprites.other.dream_world.front_default,
//                 tipos: p.data.types.map(t=>t.type.name)

//             }
//         })
//      })

//    })
//    .catch((error) => {
//     return error;
// });
// //   console.log(allPokemons) 
//     return allPokemons
// }

const getPokemonBs = async()=>{

    try {
        const poquemonBs = await Pokemon.findAll({
            include:{
                model: Type,
                attributes:["name"],
                through: {
                    attributes:[]
                }
            }
        })
        return poquemonBs 
    } catch (error) {
        console.log(error)
    }
    
}

  async function getAllPokemons(){
    let pokeApi = await getPokemonsApi()
    let pokeBs = await getPokemonBs()
    const alltotalInfo = pokeApi?.concat(pokeBs)


    return alltotalInfo;
    
    
    // return allinfo
}
async function getPokemonByName(name){
var pokebyName= []
let poke = []
let pokebyNameB


try {
  
    let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    let pokemon2 = pokemon.data
    poke.push(pokemon2)
    console.log(poke)
        if(poke.length){
            poke.map(p=>{
             pokebyName.push({
                id: p.id,
                name: p.name,
                vida: p.stats[0].base_stat,
                ataque: p.stats[1].base_stat,
                velocidad: p.stats[5].base_stat,
                defensa: p.stats[2].base_stat,
                altura: p.height,
                peso: p.weight,
                image: p.sprites.other.dream_world.front_default,
                tipos: p.types.map(t=>t.type.name)
                })
             
            })
       
            return pokebyName
        }
        else {
          return null
        }
   
} catch (error) {
    console.log("back",error)
}

}

 async function getPokemonByNameBD(name){

    if(name){
       
        let pokemon = await Pokemon.findAll({
            where:{name:name},
            include:{
                model: Type,
                attributes:["name"],
                through: {
                    attributes:[]
                }
            }
        })
        return pokemon
    }


 }
    







 
    

       

        
          
    


    async function getPokemonById(id){
    let pokeById = [];
    let poke = [];
    let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    poke.push(pokemon.data)
    poke.map(p=>{
        return pokeById.push({
            id: p.id,
            name: p.name,
            vida: p.stats[0].base_stat,
            ataque: p.stats[1].base_stat,
            velocidad: p.stats[5].base_stat,
            defensa: p.stats[2].base_stat,
            altura: p.height,
            peso: p.weight,
            image: p.sprites.other.dream_world.front_default,
            tipos: p.types.map(t=>t.type.name)
    
        })
    })
  return pokeById;
    


}

async function getPokemonByIdBS(id){

    let pokemon = await Pokemon.findAll({
        where:{id:id},
        include:{
            model: Type,
            attributes:["name"],
            through: {
                attributes:[]
            }
        }
    })
    return pokemon
    
}

async function typesApi(){
    let info = await axios.get("https://pokeapi.co/api/v2/type")
    info = info.data.results
    let infotypes = info.map(t=>t.name)
   


    infotypes.forEach(ele=>{
        Type.findOrCreate({
            where:{name:ele}
        })
    })

    }
    



module.exports = {
    getPokemonsApi,// trae los pokemones de la api
    getPokemonBs,
    getAllPokemons,// trae todos los poquemonos base de datos y api
    getPokemonByName,
    getPokemonByNameBD,
    getPokemonById,
    typesApi,
    getPokemonByIdBS // funcion para buscar por id en base de datos
}

