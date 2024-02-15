import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    ref: "User",
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
  description: {
    type: String,
    default: "",
  },
  detailed_description: {
    type: String,
    default: "",
  },
  image: [
    {
      type: String,
    },
  ],
  qty_in_stock: {
    type: Number,
    required: true,
    min: 0,
    max: 256,
  },
  price: {
    type: Number,
    default: 0,
  },
  percentage_discount: {
    type: Number,
    default: 0,
  },
  is_featured: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updated_at: {
    type: Date,
  },
});

const product = model("Product", productSchema);
export default product;
