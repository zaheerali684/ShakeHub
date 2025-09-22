import React from "react";
import { FaBlender, FaBirthdayCake, FaLeaf, FaTruck, FaGift, FaCalendarAlt } from "react-icons/fa";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-orange-50 to-yellow-100 flex flex-col items-center py-20 px-6">
      
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-pink-900 drop-shadow-lg mb-4">
        Our Shake Services
      </h1>
      <p className="text-lg text-zinc-700 max-w-2xl text-center mb-16">
        At <span className="font-bold text-pink-600">ShakeHub</span>, we serve more than just shakes. 
        Explore our wide range of services crafted to make your shake experience unforgettable.
      </p>

      {/* Services Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Service 1 */}
        <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border border-pink-200">
          <FaBlender className="text-pink-600 text-5xl mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-pink-700">Custom Shake Orders</h2>
          <p className="text-zinc-600 leading-relaxed">
            Mix and match your favorite fruits, flavors, and toppings to craft the perfect shake.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border border-pink-200">
          <FaBirthdayCake className="text-pink-600 text-5xl mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-pink-700">Party Catering</h2>
          <p className="text-zinc-600 leading-relaxed">
            Celebrate birthdays and events with our shake catering services and custom menus.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border border-pink-200">
          <FaLeaf className="text-pink-600 text-5xl mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-pink-700">Healthy Options</h2>
          <p className="text-zinc-600 leading-relaxed">
            From protein shakes to vegan delights, enjoy our health-focused shake varieties.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border border-pink-200">
          <FaTruck className="text-pink-600 text-5xl mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-pink-700">Fast Delivery</h2>
          <p className="text-zinc-600 leading-relaxed">
            Get your favorite shakes delivered fresh and chilled right to your doorstep.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border border-pink-200">
          <FaGift className="text-pink-600 text-5xl mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-pink-700">Seasonal Specials</h2>
          <p className="text-zinc-600 leading-relaxed">
            Limited-time shakes made from seasonal fruits and festive flavors.
          </p>
        </div>

        {/* Service 6 */}
        <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border border-pink-200">
          <FaCalendarAlt className="text-pink-600 text-5xl mb-4" />
          <h2 className="text-2xl font-bold mb-3 text-pink-700">Subscriptions</h2>
          <p className="text-zinc-600 leading-relaxed">
            Subscribe to weekly or monthly shake plans and never miss your daily freshness.
          </p>
        </div>
      </div>
    </div>
  );
}
