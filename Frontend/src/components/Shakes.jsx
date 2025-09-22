import React from "react";

export default function ShakeGridPage() {
  return (
    <div className="min-h-screen bg-zinc-100 p-8 mt-15">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-900">
        🍹 Our Shakes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Oreo Delight */}
        <div className="bg-zinc-600 rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Oreo Delight</h3>
          <img src="/images/oreo.png" alt="Oreo Shake" className="w-40 h-60 object-contain mb-4" />
          <p className="text-gray-700 text-center">
            A creamy blend of Oreo cookies and chilled milk – perfect for cookie lovers.
          </p>
        </div>

        {/* Mango Magic */}
        <div className="bg-yellow-200 rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Mango Magic</h3>
          <img src="/images/mango.png" alt="Mango Shake" className="w-40 h-60 object-contain mb-4" />
          <p className="text-gray-700 text-center">
            Refreshing tropical delight made with juicy mangoes and rich cream.
          </p>
        </div>

        {/* Strawberry Bliss */}
        <div className="bg-pink-200 rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Strawberry Bliss</h3>
          <img src="/images/strawberry.png" alt="Strawberry Shake" className="w-40 h-60 object-contain mb-4" />
          <p className="text-gray-700 text-center">
            Sweet and tangy strawberry shake that melts in your mouth.
          </p>
        </div>

        {/* Chocolate Heaven */}
        <div className="bg-brown-200 rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Chocolate Heaven</h3>
          <img src="/images/chocolate.png" alt="Chocolate Shake" className="w-40 h-60 object-contain mb-4" />
          <p className="text-gray-700 text-center">
            Indulge in pure chocolate heaven – thick, rich, and smooth.
          </p>
        </div>

        {/* Banana Shake */}
        <div className="bg-yellow-100 rounded-3xl p-6 shadow-lg flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-4">Banana Shake</h3>
          <img src="/images/banana.png" alt="Banana Shake" className="w-40 h-60 object-contain mb-4" />
          <p className="text-gray-700 text-center">
            A healthy and tasty banana shake – energy-packed and smooth.
          </p>
        </div>

        {/* Add more shakes here as needed */}

      </div>
    </div>
  );
}
