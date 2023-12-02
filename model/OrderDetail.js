import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const orderDetailSchema = new Schema({
    userId: Integer,
    productId: Integer,
    shippingAddress: Integer,
    orderTotal: Double,
    createdAt: Date,
    updatedAt: Date
})

const orderDetail = model("OrderDetail", orderDetailSchema)
export default orderDetail