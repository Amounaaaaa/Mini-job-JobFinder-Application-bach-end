const mongoose=require('mongoose')
const CategorieSchema=mongoose.Schema({
    description : String

})
module.exports=mongoose.model("categorie",CategorieSchema)
