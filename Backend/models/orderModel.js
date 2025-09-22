import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    product: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
    paymentMethod: {
      type: String,
      enum: ["Cash on Delivery", "Online Payment"],
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
