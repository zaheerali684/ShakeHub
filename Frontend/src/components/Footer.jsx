import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300 mt-20">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            🍹 Shake<span className="text-pink-500">Hub</span>
          </h2>
          <p className="text-gray-400">
            Fresh, delicious and creamy shakes made with love.  
            Order your favorite flavor today and enjoy happiness in every sip! 🥤
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-pink-500 transition">Home</Link></li>
            <li><Link to="/shakes" className="hover:text-pink-500 transition">Shakes</Link></li>
            <li><Link to="/services" className="hover:text-pink-500 transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-pink-500 transition">Contact</Link></li>
            <li><Link to="/order" className="hover:text-pink-500 transition">Order Now</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p>📍 Gulshan-e-Iqbal, Karachi, Pakistan</p>
          <p>📞 +92 300 1234567</p>
          <p>✉️ support@shakehub.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-pink-500 text-xl">🌐</a>
            <a href="#" className="hover:text-pink-500 text-xl">📘</a>
            <a href="#" className="hover:text-pink-500 text-xl">📸</a>
            <a href="#" className="hover:text-pink-500 text-xl">🐦</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-zinc-800 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} ShakeHub. All rights reserved.
      </div>
    </footer>
  );
}
