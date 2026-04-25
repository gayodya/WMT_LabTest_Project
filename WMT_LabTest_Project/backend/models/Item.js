import mongoose from 'mongoose';  // Import mongoose

// Define the item schema
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Item name is required"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
  discount: {
    type: Number,
    required: [true, "Discount price is required"],
    min: [0, "Discount price cannot be negative"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
  },
  imageUrl: {
    type: String,
    default: "",
    trim: true,
  },
}, { timestamps: true });

export default mongoose.model("Item", itemSchema);