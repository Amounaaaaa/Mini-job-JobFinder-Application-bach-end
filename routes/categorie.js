const express = require('express')
const router = express.Router()
const authMiddleware = require('../helpers/authMiddlewar')
const Categorie=require('../models/Categorie')
const app=express()



app.use(express.json());

//Add new categorie :
router.post('/',(req,res)=>{
    let newCategorie=new Categorie({...req.body})
    newCategorie.save()
        .then(categorie=>res.status(200).send(categorie))
        .catch((err)=> {
                console.error(err.message)
                res.status(500).send({errors: [{msg: "Server Error"}]})
            }
        )

})
//**Get All categories***//
router.get('/',(req,res)=>{
    Categorie.find()
        .then(categories=>res.send(categories))
        .catch((err)=>{
            console.error(err.message)
            res.status(500).send({errors:[{msg:"Server Error"}]})

        })
})
//** Get categorie by id ****//
router.get('/categorie/:id',(req,res)=>{
    Categorie.find({_id:req.params})

        .then((categorie)=>res.status(200).json(categorie))
        // .send(posts))
        .catch((err)=>{
            // console.error(err.message)
            console.log("Error !!!!!!!!!!!!!!!!!!!!!!!!!")
            res.status(404).send({errors:[{msg:"Server Error"}]})
        })
})

module.exports=router
