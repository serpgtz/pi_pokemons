const {Router} = require("express")
const {Type, Pokemon} = require("../db")



const router = Router();




router.get("/", async(req,res)=>{

    
try {
    const allTypes = await Type.findAll({
        include: {
            model: Pokemon,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    })

    let typesFront = allTypes.filter(t=>t.name!="dragon"&&t.name!="ice"&&t.name!="shadow"&&t.name!="dark"&&t.name!="fighting"&&t.name!="unknown"&&t.name!="ghost"&&t.name!="rock"&&t.name!="psychic"&&t.name!="steel")

    res.send(typesFront.length?typesFront:"no hay tipos")

} catch (error) {
    console.log(error)
}
    
   
})
module.exports = router;