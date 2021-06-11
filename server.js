const express = require('express')
const app = express() //app est une instance d'express
const mongoos = require('mongoose')
require('dotenv').config({path: 'config/.env'})

app.use(express.json())
mongoos.connect(process.env.URI, { useUnifiedTopology: true, useNewUrlParser: true ,useUnifiedTopology: true,useFindAndModify:false,connectTimeoutMS: 10000,poolSize: 10,writeConcern: {j: true} } ,
    (err) => {
        if (err){ throw err;}

            console.log('connect to db...')
    })

app.use('/post',require('./routes/post'))
app.use('/register',require('./routes/register'))
app.use('/registeremployer',require('./routes/registerEmployer'))
app.use('/login'   ,require('./routes/login'))
app.use('/loginemp'   ,require('./routes/loginemp'))
app.use('/categorie'   ,require('./routes/categorie'))




//app.use(express.json())
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server is running on PORT: ${PORT}`));


