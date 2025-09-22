import { useState } from "react";
import API from "../services/api";

export default function OrderPage() {
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleOrder = async () => {
    if (!size || !paymentMethod) {
      alert("⚠️ Please select size and payment method!");
      return;
    }

    try {
      const orderData = {
        product: "Chocolate Shake", // static for now
        size,
        price,
        paymentMethod,
      };

      const { data } = await API.post("/orders", orderData);
      alert("✅ Order placed successfully!");
      console.log("Order Response:", data);
    } catch (error) {
      console.error("Order Failed:", error.response?.data || error.message);
      alert("❌ Failed to place order");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 p-6">
      <div className="bg-white shadow-xl rounded-xl p-10 w-full max-w-lg">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-6">
          Order Your Shake
        </h1>

        {/* Size Options */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Select Size:
          </label>
          <select
            onChange={(e) => {
              setSize(e.target.value);
              if (e.target.value === "Small") setPrice(150);
              else if (e.target.value === "Medium") setPrice(250);
              else if (e.target.value === "Large") setPrice(350);
            }}
            className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-purple-400 outline-none"
          >
            <option value="">-- Choose Size --</option>
            <option value="Small">Small - Rs 150</option>
            <option value="Medium">Medium - Rs 250</option>
            <option value="Large">Large - Rs 350</option>
          </select>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Payment Method:
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="Cash on Delivery"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span>Cash on Delivery</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="Online Payment"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span>Online Payment</span>
            </label>
          </div>
        </div>

        {/* Price Summary */}
        {size && (
          <div className="mb-6 text-center">
            <p className="text-xl font-bold text-gray-800">
              Selected: <span className="text-purple-600">{size}</span>
            </p>
            <p className="text-lg text-gray-600">Total: Rs {price}</p>
          </div>
        )}

        {/* Place Order Button */}
        <button
          onClick={handleOrder}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg rounded-lg shadow-md transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
