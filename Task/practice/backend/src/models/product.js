import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id:{type:String,required:true},
    Product_name:{type:String, required:true},
    Description:{type:String, required:true},
    Price:{type:Number, required:true}
});

const Product = mongoose.model("Product",productSchema);
export default Product;