import mongoose from 'mongoose';
import { isEmail } from 'validator';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, 'Please enter a valid password'],
        minlength: [6, 'Minimum password length must be 6 characters']
    },
    email: {
        type: String,
        required: [true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    createdAt: {
        type: Date,
        default: () => Date.now,
        immutable: true
    },
})

const user = model("User", userSchema)
export default user