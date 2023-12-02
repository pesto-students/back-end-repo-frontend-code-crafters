import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productRatingSchema = new Schema({
    productId: Integer,
    avgRating: Integer,
    noOfReviews: Integer,
})

const productRating = model("ProductRating", productRatingSchema)
export default productRating