import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: String,
    password: String,
    email: String,
    createdAt: Date,
})

const user = model("User", userSchema)
export default user