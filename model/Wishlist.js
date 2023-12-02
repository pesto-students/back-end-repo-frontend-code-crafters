import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const wishlistSchema = new Schema({
    userId: Integer,
    productId: Integer,
    createdAt: Date,
    updatedAt: Date
})

const wishlist = model("Wishlist", wishlistSchema)
export default wishlist