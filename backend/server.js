import path from 'path';
import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/ProductRoutes.js'
import userRoutes from './routes/userRoutes.js';
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from './routes/uploadRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT;
connectDB();
const app=express(); 
//Body Parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Cookie parser middleware
app.use(cookieParser());

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);
app.use('/api/upload',uploadRoutes);
app.get('/api/config/paypal',(req,res)=>
    res.send({clientId:process.env.PAYPAL_CLIENT_ID})
);

const __dirname=path.resolve();
app.use('/uploads', express.static('/var/data/uploads'));
if(process.env.NODE_ENV==='production'){
    //set static folder
    app.use(express.static(path.join(__dirname,'/frontend/build')));

    //any route that is not api will be redirected to index.html

    app.get('*',(req,res)=>
    res.sendFile(path.resolve(__dirname,'frontend','build','index.html')));
}
else{
    app.get('/',(req,res)=>{
        res.send('API is running .....');
    });
    
}
app.use(notFound);
app.use(errorHandler);
app.listen(port,()=>console.log( `Server started on ${port}`));  
