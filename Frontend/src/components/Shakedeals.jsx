import React from "react";
import { useNavigate } from "react-router-dom";

export default function ShakesDeals() {
  const navigate = useNavigate();

  const handleOrderPage = (shakeName) => {
    navigate("/order", { state: { shakeName } });
  };

  return (
    <div className="min-h-screen bg-zinc-100 p-8 mt-20">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-900">
        🥤 Shakes Mega Deals
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Oreo Shake */}
        <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Oreo Shake</h3>
          <img src="/images/oreo.png" alt="Oreo Shake" className="w-40 h-60 mb-4 object-contain" />
          <p className="text-gray-700 text-center mb-4">Crunchy Oreo blended with creamy milk.</p>
          <button onClick={() => handleOrderPage("Oreo Shake")} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Order Now
          </button>
        </div>

        {/* Chocolate Shake */}
        <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Chocolate Shake</h3>
          <img src="/images/chocolate.png" alt="Chocolate Shake" className="w-40 h-60 mb-4 object-contain" />
          <p className="text-gray-700 text-center mb-4">Rich and creamy chocolate shake.</p>
          <button onClick={() => handleOrderPage("Chocolate Shake")} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Order Now
          </button>
        </div>

        {/* Strawberry Shake */}
        <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Strawberry Shake</h3>
          <img src="/images/strawberry.png" alt="Strawberry Shake" className="w-40 h-60 mb-4 object-contain" />
          <p className="text-gray-700 text-center mb-4">Fresh strawberries blended with milk.</p>
          <button onClick={() => handleOrderPage("Strawberry Shake")} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Order Now
          </button>
        </div>

        {/* Mango Shake */}
        <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Mango Shake</h3>
          <img src="/images/mango.png" alt="Mango Shake" className="w-40 h-60 mb-4 object-contain" />
          <p className="text-gray-700 text-center mb-4">Tropical mango shake with fruity flavor.</p>
          <button onClick={() => handleOrderPage("Mango Shake")} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Order Now
          </button>
        </div>

        {/* Vanilla Shake */}
        <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Vanilla Shake</h3>
          <img src="/images/vanilla.png" alt="Vanilla Shake" className="w-40 h-60 mb-4 object-contain" />
          <p className="text-gray-700 text-center mb-4">Classic vanilla shake with smooth texture.</p>
          <button onClick={() => handleOrderPage("Vanilla Shake")} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Order Now
          </button>
        </div>

        {/* Banana Shake */}
        <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Banana Shake</h3>
          <img src="/images/banana.png" alt="Banana Shake" className="w-40 h-60 mb-4 object-contain" />
          <p className="text-gray-700 text-center mb-4">Creamy banana shake full of energy.</p>
          <button onClick={() => handleOrderPage("Banana Shake")} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Order Now
          </button>
        </div>

        {/* KitKat Shake */}
        <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">KitKat Shake</h3>
          <img src="/images/kitkat.png" alt="KitKat Shake" className="w-40 h-60 mb-4 object-contain" />
          <p className="text-gray-700 text-center mb-4">KitKat chocolate crunch in every sip.</p>
          <button onClick={() => handleOrderPage("KitKat Shake")} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Order Now
          </button>
        </div>

        {/* Nutella Shake */}
        <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Nutella Shake</h3>
          <img src="/images/nutella.png" alt="Nutella Shake" className="w-40 h-60 mb-4 object-contain" />
          <p className="text-gray-700 text-center mb-4">Delicious Nutella blended shake.</p>
          <button onClick={() => handleOrderPage("Nutella Shake")} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Order Now
          </button>
        </div>

        {/* Coffee Shake */}
        <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Coffee Shake</h3>
          <img src="/images/coffee.png" alt="Coffee Shake" className="w-40 h-60 mb-4 object-contain" />
          <p className="text-gray-700 text-center mb-4">Iced coffee blended with cream.</p>
          <button onClick={() => handleOrderPage("Coffee Shake")} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Order Now
          </button>
        </div>

        {/* Blueberry Shake */}
        <div className="bg-white rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Blueberry Shake</h3>
          <img src="/images/blueberry.png" alt="Blueberry Shake" className="w-40 h-60 mb-4 object-contain" />
          <p className="text-gray-700 text-center mb-4">Sweet and tangy blueberry shake.</p>
          <button onClick={() => handleOrderPage("Blueberry Shake")} className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Order Now
          </button>
        </div>

      </div>
    </div>
  );
}
