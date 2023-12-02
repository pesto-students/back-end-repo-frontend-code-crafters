import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const categorySchema = new Schema({
    categoryId: Integer,
    categoryName: String
})

const category = model("Category", categorySchema)
export default category