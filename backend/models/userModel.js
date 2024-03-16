import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    name:{
        type : String,
        required:true,
    },
    email:{
        type : Number,
        required:true,
        unique:true,
    },
    password:{
        type:String, 
        required:true,
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false,
    },

},{timestamps: true}); // This will add createdAt and updatedAt as an object with date in it
const User=mongoose.model('User',userSchema);
export default User;