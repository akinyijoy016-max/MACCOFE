# MACCOFE - Coffee Shop Online Ordering Platform

A full-stack web application for ordering coffee online with user authentication, shopping cart, order tracking, and payment integration.

## Features

- 🏠 **Home Page**: Welcome screen with features overview
- ☕ **Product Catalog**: Browse coffee and pastries with categories
- 🛒 **Shopping Cart**: Add/remove items and manage quantities
- 💳 **Checkout**: Order placement with delivery details
- 📦 **Order Tracking**: View order status and history
- 👤 **User Authentication**: Register and login
- 💰 **Payment Options**: Credit card or cash on delivery

## Tech Stack

### Backend
- **Node.js + Express**: REST API server
- **MongoDB**: Database for products, orders, users
- **JWT**: Authentication tokens
- **bcryptjs**: Password hashing

### Frontend
- **React**: UI framework
- **React Router**: Page navigation
- **Axios**: API requests
- **Tailwind CSS**: Styling

## Installation

### Backend Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```
MONGODB_URI=mongodb://localhost:27017/maccofe
JWT_SECRET=your_secret_key_here
PORT=5000
```

3. Start MongoDB:
```bash
mongod
```

4. Run server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to client folder:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start React app:
```bash
npm start
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products?category=latte` - Filter by category
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get all orders (admin)
- `GET /api/orders/user/:userId` - Get user orders
- `PUT /api/orders/:id` - Update order status

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

### Cart
- `POST /api/cart/add` - Add item to cart
- `GET /api/cart/:userId` - Get user cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/clear` - Clear cart

## Usage

1. Visit http://localhost:3000
2. Sign up for an account
3. Browse the menu by category
4. Add items to cart
5. Proceed to checkout
6. Place order and track it

## Project Structure

```
MAC COFE/
├── models/
│   ├── Product.js
│   ├── Order.js
│   └── User.js
├── routes/
│   ├── products.js
│   ├── orders.js
│   ├── auth.js
│   └── cart.js
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Products.js
│   │   │   ├── Cart.js
│   │   │   ├── Checkout.js
│   │   │   ├── OrderTracking.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── App.js
│   │   └── index.js
│   └── public/
│       └── index.html
├── server.js
├── .env
└── README.md
```

## Future Enhancements

- Payment gateway integration (Stripe)
- Email notifications
- Admin dashboard
- Advanced order analytics
- Real-time order status updates with WebSocket
- Discount codes and promotions
- Customer reviews and ratings

## License

MIT
