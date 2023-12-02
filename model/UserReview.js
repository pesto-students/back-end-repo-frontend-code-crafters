import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userReviewSchema = new Schema({
    userId: Integer,
    productId: Integer,
    rating: Integer,
    comment: String,
    createdAt: Date
})

const userReview = model("UserReview", userReviewSchema)
export default userReview