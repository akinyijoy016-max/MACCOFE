import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-amber-900 mb-6">Welcome to MACCOFE</h1>
        <p className="text-xl text-gray-600 mb-8">Freshly brewed coffee delivered to your door</p>
        <Link to="/products" className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700">
          Order Now
        </Link>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 px-4">
          <div className="text-center">
            <div className="text-4xl mb-4">☕</div>
            <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Sourced from the finest coffee plantations</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Get your coffee within 30 minutes</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-bold mb-2">Easy Payment</h3>
            <p className="text-gray-600">Multiple payment options available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
