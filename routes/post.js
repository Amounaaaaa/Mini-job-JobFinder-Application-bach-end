const express = require('express')
const router = express.Router()
const authMiddleware = require('../helpers/authMiddlewar')
const Post=require('../models/Post')
const User=require('../models/User')
const app=express()



app.use(express.json());

//Add new post
router.post('/',authMiddleware,(req,res)=>{
    let newPost=new Post({...req.body,owner:req.userId})
    newPost.save()
        .then(post=>res.status(200).send(post))
        .catch((err)=> {
            console.error(err.message)
                res.status(500).send({errors: [{msg: "Server Error"}]})
            }
        )

})
//**Get All posts***//
router.get('/',authMiddleware,(req,res)=>{
    Post.find()
        .then(posts=>res.send(posts))
        .catch((err)=>{
            console.error(err.message)
            res.status(500).send({errors:[{msg:"Server Error"}]})

        })
})
///////////// get  offres (candidat) /////////////

router.get('/all',(req,res)=>{
    Post.find()
        .then(posts=>res.send(posts))
        .catch((err)=>{
            console.error(err.message)
            res.status(500).send({errors:[{msg:"Server Error"}]})

        })
})
////////////////////////////////////////////////////////

















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
