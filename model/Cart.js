import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const cartSchema = new Schema({
    userId: Integer,
    productId: Integer,
    qty: Integer,
    createdAt: Date,
    updatedAt: Date
})

const cart = model("Cart", cartSchema)
export default cart