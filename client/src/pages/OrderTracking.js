import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function OrderTracking({ user }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/orders/user/${user._id}`);
      setOrders(response.data);
    } catch (err) {
      console.error('Error fetching orders:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 text-center">
        <p className="text-xl text-gray-600">Please login to view your orders</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-amber-900 mb-8">Order Tracking</h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading orders...</p>
      ) : orders.length === 0 ? (
        <p className="text-center text-gray-600">No orders yet</p>
      ) : (
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order._id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-amber-900">Order #{order._id}</h3>
                  <p className="text-gray-600">{new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                <span className={`px-4 py-2 rounded font-bold text-white capitalize ${
                  order.status === 'completed' ? 'bg-green-600' :
                  order.status === 'ready' ? 'bg-blue-600' :
                  order.status === 'processing' ? 'bg-yellow-600' :
                  order.status === 'cancelled' ? 'bg-red-600' :
                  'bg-gray-600'
                }`}>
                  {order.status}
                </span>
              </div>

              <div className="mb-4">
                <h4 className="font-bold mb-2">Items:</h4>
                <ul className="text-gray-600 text-sm">
                  {order.items.map((item, idx) => (
                    <li key={idx}>{item.quantity}x Item - ${item.price.toFixed(2)}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <span className="text-lg font-bold">Total: ${order.totalPrice.toFixed(2)}</span>
                <span className="text-gray-600">{order.paymentMethod === 'card' ? '💳 Card' : '💵 Cash'}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
