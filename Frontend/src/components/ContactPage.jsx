import React, { useState } from "react";
import API from "../services/api";

export default function ContactPage() {
  const [authData, setAuthData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [authMode, setAuthMode] = useState("signup"); // signup or login
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (authMode === "signup") {
        const res = await API.post("/auth/signup", authData);
        setStatus("✅ " + res.data.message);
      } else {
        const res = await API.post("/auth/login", {
          email: authData.email,
          password: authData.password,
        });
        setStatus("✅ " + res.data.message);
        localStorage.setItem("token", res.data.token); // save JWT token
      }
      setAuthData({ name: "", email: "", password: "" });
    } catch (err) {
      setStatus("❌ " + (err.response?.data?.error || "Server error"));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-yellow-400 to-orange-500 flex items-center justify-center px-6 py-12">
      <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          {authMode === "signup" ? "📝 Sign Up" : "🔑 Login"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {authMode === "signup" && (
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={authData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={authData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={authData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-green-700 transition-all"
          >
            {authMode === "signup" ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-700">
          {authMode === "signup"
            ? "Already have an account?"
            : "Don’t have an account?"}
          <button
            onClick={() =>
              setAuthMode(authMode === "signup" ? "login" : "signup")
            }
            className="ml-2 text-pink-600 font-semibold"
          >
            {authMode === "signup" ? "Login" : "Sign Up"}
          </button>
        </p>

        {status && <p className="mt-4 text-center text-green-700">{status}</p>}
      </div>
    </div>
  );
}
