import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ user, setUser, cartCount }) {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <nav className="bg-amber-900 text-white p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">☕ MACCOFE</Link>
        <ul className="flex gap-6 items-center">
          <li><Link to="/" className="hover:text-amber-200">Home</Link></li>
          <li><Link to="/products" className="hover:text-amber-200">Menu</Link></li>
          <li><Link to="/cart" className="hover:text-amber-200">Cart ({cartCount})</Link></li>
          {user ? (
            <>
              <li><Link to="/orders" className="hover:text-amber-200">Orders</Link></li>
              <li className="text-amber-200">{user.name}</li>
              <li><button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="hover:text-amber-200">Login</Link></li>
              <li><Link to="/register" className="bg-amber-600 px-4 py-2 rounded hover:bg-amber-700">Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
