import mongoose from "mongoose";
const { Schema, model } = mongoose;

const cartSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  items: [
    {
      product_id: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      name: {
        type: String,
        ref: "Product",
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity can not be less then 1"],
        default: 1,
      },
      price: Number,
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updated_at: Date,
});

const cart = model("Cart", cartSchema);
export default cart;
