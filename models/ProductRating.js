import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productRatingSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  rating: {
    type: Number,
    default: 0,
  },
  no_of_reviews: {
    type: Number,
    default: 0,
  },
});

const productRating = model("ProductRating", productRatingSchema);
export default productRating;
