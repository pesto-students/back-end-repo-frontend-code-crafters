import mongoose from "mongoose";
const { Schema, model } = mongoose;

const orderDetailSchema = new Schema({
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
      },
      price: Number,
    },
  ],
  shipping_address: {
    type: Schema.Types.ObjectId,
    ref: "Address",
  },
  payment_type: {
    type: Schema.Types.ObjectId,
    ref: "PaymentType",
  },
  created_at: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
});

const orderDetail = model("OrderDetail", orderDetailSchema);
export default orderDetail;
