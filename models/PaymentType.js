import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const paymentTypeSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const paymentType = model("PaymentType", paymentTypeSchema)
export default paymentType