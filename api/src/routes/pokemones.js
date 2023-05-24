const {Router} = require("express")
const {getPokemonsApi, getPokemonBs,getAllPokemons, getPokemonByName, getPokemonByNameBD, getPokemonById, getPokemonByIdBS} = require("./utils")
const {Pokemon, Type} = require("../db")



const router = Router();




router.get("/",async(req,res)=>{
const {name} = req.query
let pokemon1=[]


try {
    if(name){
        let searchName = name.toLocaleLowerCase()
         pokemon1= await getPokemonByName(searchName)
         console.log("desde rutas", pokemon1)
         
       if(!pokemon1){
 
          pokemon1 = await getPokemonByNameBD(searchName)
         
       }
        
    //    pokemon1.length
    //    ?res.status(200).send(pokemon1)
    //    :res.status(400).send("no hay pokemon con ese nombre")
        res.send(pokemon1.length?pokemon1:"no hay pokemon con ese nombre")
     }
     else{
        let pokemon = await getAllPokemons()
        res.send(pokemon.length?pokemon:"no hay pokemones")
     }
     
} catch (error) {
    console.log(error)
}
    
})

router.get("/:id",async(req,res)=>{

    try {
        const {id} = req.params

        if(id.toString().length<5){
            let pokemon = await getPokemonById(id)
            res.send(pokemon.length?pokemon:"no existe poquemon")
        }
        else{
            let pokemon = await getPokemonByIdBS(id)
            res.send(pokemon.length?pokemon:"no existe poquemon")
        }

        
    } 
    catch (error) {
        
    }
 
    
})

router.post("/",async(req,res)=>{


    try {
        const {name,vida,ataque,velocidad,defensa,altura,peso,image,tipos} =req.body
        let pokemonCreate = await Pokemon.create({
            name: name,
            vida: vida,
            ataque: ataque,
            velocidad: velocidad,
            defensa: defensa,
            altura: altura,
            peso: peso,
            image:image
        })
        
        tipos.forEach(async ele=>{
            const tiposbs = await Type.findAll({
                where: {name: ele}
            })
            console.log(tiposbs)
            await pokemonCreate.addType(tiposbs)
        })
         res.send(pokemonCreate)
     } catch (error) {
         console.log(error)
    }
   })


router.put("/",async(req,res)=>{
    try {
        const {actualizar}= req.body

        const pokemon = await Pokemon.update({
            name:actualizar.name
        },{
            where:{
                id:actualizar.id
            }
        })
        res.send(pokemon)
        
    } catch (error) {
        
    }
})
module.exports = router;