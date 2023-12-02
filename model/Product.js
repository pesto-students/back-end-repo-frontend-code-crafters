import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        ref: "User"
    },
    categoryId: {
        type: String,
        required: true,
        ref: "Category"
    },
    description: {
        type: String,
        required: true
    },
    productImages: [String],
    qtyInStock: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    percentageDiscount: Number,
    createdAt: {
        type: Date,
        default: ()=>Date.now,
        immutable: true
    },
    updatedAt: Date
})

const product = model("Product", productSchema)
export default product