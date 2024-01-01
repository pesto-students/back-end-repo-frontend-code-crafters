import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';
import dbConnect from './config/dbConnect.js';
import home from "./routes/home.js";
import api from "./routes/api.js";
//import vegetableRoutes from './routes/products.js';
//import featuredProductsRoutes from './routes/featuredproducts.js';

// MongoDB connection
dbConnect();

const app = express();

// Body parser middleware
app.use(express.json());

// MongoDB Schema and Model
const productSchema = new mongoose.Schema({
  id: String,
  class: String,
  img: String,
  name: String,
  price: String,
  div: String,
  star: Number,
  offpercent: String,
  instock: String,
  description: String,
  detaildescription: String,
});
const Product = mongoose.model('Product', productSchema);

// CORS middleware
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Routes
app.use("/home", home);
app.use("/api", api);
//app.use('/api', vegetableRoutes);
//app.use('/api', featuredProductsRoutes);

// Fetch all products
/*app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});*/
// Fetch products with search functionality
app.get('/api/products', async (req, res) => {
  try {
    const { search } = req.query;
    let products;

    if (search) {
      // Perform a case-insensitive search using a regular expression
      const regex = new RegExp(search, 'i');
      products = await Product.find({ name: regex }); // Search in the 'name' field; adjust as needed
    } else {
      products = await Product.find(); // Fetch all products if no search term is provided
    }

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});



// Add a new product
app.post('/api/products', async (req, res) => {
  const product = new Product(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Modify the route to get a single product by ID
app.get('/api/products/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findOne({ id: id.toString() });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// ... (your existing code)

// Create an empty array to hold the cart items
let cartItems = [];

// Endpoint to add a product to the cart
app.post('/api/cart/add', async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    // Find the index of the product in the cartItems array
    const index = cartItems.findIndex(item => item.id === productId);

    if (index !== -1) {
      // If the product exists in the cart, increase its quantity
      cartItems[index].quantity += 1;
      res.status(200).json({ message: 'Quantity updated in cart', cart: cartItems });
    } else {
      // If the product doesn't exist, add it to the cart
      const foundProduct = await Product.findById(productId);

      if (!foundProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }

      const cartItem = {
        id: productId,
        product: foundProduct,
        quantity: quantity || 1,
      };

      cartItems.push(cartItem);
      res.status(200).json({ message: 'Product added to cart', cart: cartItems });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Endpoint to get the current items in the cart
app.get('/api/cart', (req, res) => {
  res.json(cartItems);
});

// ... (your existing code)





// Start the server
const PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
