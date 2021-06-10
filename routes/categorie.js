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
//** Get user posts****//
router.get('/myPosts',authMiddleware,(req,res)=>{
    Post.find({owner:req.userId})
        .populate('owner')
        .then((posts)=>res.status(200).json(posts) )

        // .send(posts))
        .catch((err)=>{
            // console.error(err.message)
            console.log("Error !!!!!!!!!!!!!!!!!!!!!!!!!")
            res.status(500).send({errors:[{msg:"Server Error"}]})

        })
})



module.exports=router
