import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productSchema = new Schema({
    name: String,
    categoryId: Integer,
    description: String,
    productImages: [String],
    qtyInStock: Integer,
    price: Integer,
    percentageDiscount: Integer,
    createdAt: Date,
    updatedAt: Date
})

const product = model("Product", productSchema)
export default product