import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const paymentTypeSchema = new Schema({
    paymentTypeId: Integer,
    paymentTypeName: String
})

const paymentType = model("PaymentType", paymentTypeSchema)
export default paymentType