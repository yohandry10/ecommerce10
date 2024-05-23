const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

const app = express ();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI,{
    userNewParser: true,
    useUnifiedTopology: true,
})
.then(()=> console.log('MongoDb Connected'))
.catch((error)=> console.error(error));

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('Servidor escuchando el puerto 4000');
});