import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Products({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const url = category ? `/api/products?category=${category}` : '/api/products';
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item._id === product._id);
    if (existingItem) {
      setCart(cart.map(item =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    alert('Added to cart!');
  };

  const categories = ['espresso', 'latte', 'cappuccino', 'americano', 'mocha', 'pastries', 'snacks'];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-amber-900 mb-8">Our Menu</h1>

      <div className="mb-8 flex gap-2 flex-wrap">
        <button
          onClick={() => setCategory('')}
          className={`px-4 py-2 rounded ${!category ? 'bg-amber-600 text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded capitalize ${category === cat ? 'bg-amber-600 text-white' : 'bg-gray-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-amber-100 h-48 flex items-center justify-center text-4xl">
                ☕
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-amber-900">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-amber-600">${product.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
