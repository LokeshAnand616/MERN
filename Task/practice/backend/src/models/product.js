import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id:{type:Number,required:true},
    Product_name:{type:String, required:true},
    Description:{type:String, required:true},
    Price:{type:String, required:true}
});

const Product = mongoose.model("Product",productSchema);
export default Product;