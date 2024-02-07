import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const wishlistSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: "Product"
    },
    created_at: {
        type: Date,
        default: Date.now,
        immutable: true
    },
    updated_at: Date
})

const wishlist = model("Wishlist", wishlistSchema)
export default wishlist