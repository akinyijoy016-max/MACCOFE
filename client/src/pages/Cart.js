import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ cart, setCart }) {
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item._id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item._id === productId ? { ...item, quantity } : item
      ));
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-amber-900 mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
          <Link to="/products" className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-amber-100">
                <tr>
                  <th className="p-4 text-left">Product</th>
                  <th className="p-4 text-center">Price</th>
                  <th className="p-4 text-center">Quantity</th>
                  <th className="p-4 text-center">Total</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item._id} className="border-b">
                    <td className="p-4">{item.name}</td>
                    <td className="p-4 text-center">${item.price.toFixed(2)}</td>
                    <td className="p-4 text-center">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
                        className="w-16 border rounded text-center"
                      />
                    </td>
                    <td className="p-4 text-center font-bold">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mb-8">
            <div className="bg-amber-50 p-6 rounded-lg w-full md:w-96">
              <div className="flex justify-between mb-4 text-lg">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4 text-lg">
                <span>Delivery:</span>
                <span>$5.00</span>
              </div>
              <div className="border-t pt-4 flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span>${(total + 5).toFixed(2)}</span>
              </div>
              <Link to="/checkout" className="w-full bg-amber-600 text-white py-3 rounded mt-4 block text-center hover:bg-amber-700 font-bold">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
