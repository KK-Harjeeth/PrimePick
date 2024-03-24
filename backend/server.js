import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/ProductRoutes.js'
import userRoutes from './routes/userRoutes.js';
import orderRoutes from "./routes/OrderRoutes.js";
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT;
connectDB();
const app=express(); 
//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Cookie parser middleware
app.use(cookieParser());
app.get('/',(req,res)=>{
    res.send('API is running .....');
});

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port,()=>console.log( `Server started on ${port}`));  