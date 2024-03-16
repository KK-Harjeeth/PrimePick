import mongoose from "mongoose";

const reviewSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    name:{
        type : String,
        required:true,
    },
    rating:{
        type : Number,
        required:true,
    },
    comment:{
        type:String, 
        required:true,
    },
},{
    timestamps:true,
})
const productSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    name:{
        type : String,
        required:true,
    },
    image:{
        type : String,
        required:true,
    },
    brand:{
        type:String, 
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    reviews:[reviewSchema],
    rating:{
        type:Number,
        required:true,
        default:0,
    },
    numReviews:{
        type:Number,
        required:true,
        default:0,
    },
    price:{
        type:Number,
        required:true,
        default:0,
    },
    countInStock:{
        type:Number,
        required:true,
        default:0,
    },
},{
    timestamps:true,
})
// In Mongoose, setting timestamps: true in the schema options automatically adds two fields to the schema: createdAt and updatedAt. These fields track the creation and last modification time of documents in the database, respectively.

// Here's what each field does:

// createdAt: This field is automatically set to the current date and time when a document is first created.

// updatedAt: This field is automatically updated to the current date and time whenever a document is modified or updated.

// By setting timestamps: true, you don't need to manually handle these fields in your code. Mongoose takes care of updating them behind the scenes, providing you with useful metadata about the lifecycle of your documents. This can be particularly helpful for auditing purposes, versioning, or simply understanding when documents were created or last modified.


const Product=mongoose.model("Product",productSchema);

export default Product;