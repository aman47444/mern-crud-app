const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyPrser = require('body-parser');
const users = require('./server/api/users')
const cors = require('cors')
const path = require('path');


const URL = 'mongodb+srv://aman007:Demo07@cluster0.eqtls.mongodb.net/foodies?retryWrites=true&w=majority'

// app.use(express.json());
app.use(bodyPrser.json({ extended:true }));
app.use(bodyPrser.urlencoded({ extended: true}))

app.use('/api/users', users)
app.use(cors())

mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Database Conente ho gya hai ...')
})

const port = process.env.PORT || 8000; 
app.listen(port, ()=> {
    console.log(`server is running on ${port}`);
});