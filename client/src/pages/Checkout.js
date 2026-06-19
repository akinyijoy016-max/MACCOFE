import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Checkout({ cart, user }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customerName: user?.name || '',
    customerEmail: user?.email || '',
    customerPhone: user?.phone || '',
    deliveryAddress: user?.address || '',
    paymentMethod: 'card',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const order = {
        user: user?._id,
        items: cart.map(item => ({ product: item._id, quantity: item.quantity, price: item.price })),
        totalPrice: cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + 5,
        ...formData,
      };

      const response = await axios.post('/api/orders', order);
      alert('Order placed successfully!');
      navigate('/orders');
    } catch (err) {
      console.error('Error placing order:', err);
      alert('Error placing order');
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + 5;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-amber-900 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Delivery Information</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Phone</label>
              <input
                type="tel"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={handleChange}
                required
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Delivery Address</label>
              <textarea
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleChange}
                required
                rows="3"
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-8">Payment Method</h2>

            <div className="mb-6">
              <label className="flex items-center mb-4">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={formData.paymentMethod === 'card'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>Credit/Debit Card</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === 'cash'}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>Cash on Delivery</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 rounded font-bold text-lg hover:bg-amber-700"
            >
              Place Order
            </button>
          </form>
        </div>

        <div className="bg-amber-50 p-6 rounded-lg shadow-lg h-fit">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          {cart.map(item => (
            <div key={item._id} className="flex justify-between mb-2 text-sm">
              <span>{item.name} x{item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span>${(total - 5).toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery:</span>
              <span>$5.00</span>
            </div>
            <div className="border-t pt-2 mt-2 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
