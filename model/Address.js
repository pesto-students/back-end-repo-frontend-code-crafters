import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const addressSchema = new Schema({
    userId: Integer,
    addressLineOne: String,
    state: String,
    pincode: Integer,
    createdAt: Date,
})

const address = model("Address", addressSchema)
export default address