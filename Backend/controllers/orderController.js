import Order from "../models/orderModel.js";

// ✅ Create order
export const createOrder = async (req, res) => {
  try {
    const { product, size, price, paymentMethod } = req.body;

    if (!product || !size || !price || !paymentMethod) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const order = new Order({
      product,
      size,
      price,
      paymentMethod,
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("❌ Order Create Error:", error.message);
    res.status(500).json({ message: "Server error while placing order" });
  }
};

// ✅ Get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};
