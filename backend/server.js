import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/ProductRoutes.js'
const port = process.env.PORT || 2000;
connectDB();
const app=express(); 
app.get('/',(req,res)=>{
    res.send('API is running .....');
});

app.use('/api/products',productRoutes);
app.listen(port,()=>console.log( `Server started on ${port}`));  