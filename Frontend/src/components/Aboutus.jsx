import React from "react";
import { motion } from "framer-motion";

export default function About() {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100 py-16 px-6 md:px-20 mt-15">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          About ShakeHub
        </h1>
        <div className="w-20 h-1 bg-pink-500 mx-auto mb-6"></div>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          Since 2015, we've been crafting the finest shakes using premium ingredients, 
          innovative recipes, and a whole lot of love. What started as a small family 
          business has grown into a beloved local institution with 18 locations.
        </p>
      </motion.div>

      {/* MISSION, VISION & VALUES */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
        >
          <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Mission</h3>
          <p className="text-gray-600">
            To serve fresh, premium shakes that make every sip joyful while supporting 
            local farmers and sustainable practices.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.03 }}
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
        >
          <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Vision</h3>
          <p className="text-gray-600">
            To become the most loved shake brand in every city, known for quality, 
            innovation, and community connection.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.03 }}
          className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
        >
          <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Our Values</h3>
          <ul className="text-gray-600 text-left">
            <li className="mb-2 flex items-start">
              <span className="text-pink-500 mr-2">•</span> Quality ingredients from trusted sources
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-pink-500 mr-2">•</span> Innovation in flavor and presentation
            </li>
            <li className="mb-2 flex items-start">
              <span className="text-pink-500 mr-2">•</span> Customer happiness above all
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-2">•</span> Sustainability in all operations
            </li>
          </ul>
        </motion.div>
      </div>

      {/* STATISTICS */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ y: -5 }}
          className="bg-pink-600 text-white p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold">12,500+</h2>
          <p className="mt-2 text-pink-100">Happy Customers</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-gray-800">35,000+</h2>
          <p className="mt-2 text-gray-600">Shakes Served</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-gray-800">18</h2>
          <p className="mt-2 text-gray-600">Branches</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-gray-800">50+</h2>
          <p className="mt-2 text-gray-600">Unique Flavors</p>
        </motion.div>
      </div>

      {/* TEAM SECTION */}
      <div className="max-w-6xl mx-auto mb-16">
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="text-2xl font-semibold text-center mb-4 text-gray-800"
        >
          Meet Our Team
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-10"
        >
          Our passionate team works tirelessly to bring you the best shake experience possible.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
          >
            <div className="relative inline-block mb-4">
              <img
                src="/images/zaheerali.jpg"
                alt="Founder"
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-pink-100"
              />
              <div className="absolute bottom-0 right-4 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h4 className="font-semibold text-lg text-gray-800">Zaheer Ali</h4>
            <p className="text-gray-500 mb-3">Founder & Head Chef</p>
            <p className="text-sm text-gray-600">
              Aisha started ShakeHub with a vision to bring joy through delicious, 
              handcrafted shakes using family recipes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.0 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
          >
            <img
              src="/images/team2.png"
              alt="Manager"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
            />
            <h4 className="font-semibold text-lg text-gray-800">Ihtesham Majeed</h4>
            <p className="text-gray-500 mb-3">Operations Manager</p>
            <p className="text-sm text-gray-600">
              Hamza ensures every ShakeHub location runs smoothly and maintains 
              our high standards of quality and service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
          >
            <img
              src="/images/team3.png"
              alt="Marketing"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
            />
            <h4 className="font-semibold text-lg text-gray-800">Hasaan Azeem</h4>
            <p className="text-gray-500 mb-3">Marketing Director</p>
            <p className="text-sm text-gray-600">
              Safa spreads the word about ShakeHub and creates exciting new 
              campaigns to engage our community of shake lovers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* QUALITY PROMISE */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.4 }}
        className="max-w-4xl mx-auto bg-pink-50 rounded-2xl p-8 md:p-12 mb-16 text-center border border-pink-100"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Quality Promise</h3>
        <p className="text-gray-600 mb-6">
          We source only the freshest ingredients from local suppliers, prepare each shake 
          to order, and never use artificial flavors or preservatives. Every sip is a 
          commitment to quality and taste.
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-6 rounded-full transition duration-300">
          Visit Our Locations
        </button>
      </motion.div>

      {/* FOOTER NOTE */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.6 }}
        className="text-center text-sm text-gray-500"
      >
        © {new Date().getFullYear()} ShakeHub — Crafted with Care and Passion.
      </motion.div>
    </div>
  );
}