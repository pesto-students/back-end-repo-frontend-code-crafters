import mongoose from "mongoose";
import "dotenv/config";

export default async () => {
  try {
    // Connect
    const uri = process.env.DB_URI;
    await mongoose.connect(uri);
    // Send a ping to confirm a successful connection
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    // Ensures that the client will close when you finish/error
    console.log({ message: error });
  }
}