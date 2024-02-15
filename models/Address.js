import mongoose from "mongoose";
const { Schema, model } = mongoose;

const addressSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  street: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
    default: "India",
  },
  pincode: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
});

const address = model("Address", addressSchema);
export default address;
