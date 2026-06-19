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

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Clone and navigate to project:
```bash
git clone https://github.com/akinyijoy016-max/MACCOFE.git
cd MACCOFE
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in root directory:
```
MONGODB_URI=mongodb://localhost:27017/maccofe
JWT_SECRET=your_secure_secret_key_here
STRIPE_SECRET_KEY=your_stripe_key_here
PORT=5000
NODE_ENV=development
```

4. Start MongoDB:
```bash
mongod
```

5. Seed database with sample products:
```bash
npm run seed
```

6. Run backend server:
```bash
npm run dev
```
Server will run on http://localhost:5000

### Frontend Setup (New Terminal)

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
App will open on http://localhost:3000

## 🎯 Usage

1. Visit http://localhost:3000
2. Click "Sign Up" to create an account
3. Browse the menu by category
4. Add items to your cart
5. Proceed to checkout
6. Enter delivery details and select payment method
7. Place order
8. Track your order in "Orders" section

## 📚 API Endpoints

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

## 📁 Project Structure

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
├── seed.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🌱 Sample Products

The seed script adds 18 sample products including:
- **Espresso**: Single, Double
- **Latte**: Classic, Vanilla, Caramel
- **Cappuccino**: Classic, Iced
- **Americano**: Regular, Black
- **Mocha**: Regular, Iced, White
- **Pastries**: Croissants, Muffins
- **Snacks**: Cookies, Biscotti, Granola Bars

## 🔧 Database Configuration

### Using MongoDB Atlas (Cloud)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Get connection string
5. Update `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/maccofe
```

### Using Local MongoDB

1. Install MongoDB locally
2. Start MongoDB:
```bash
mongod
```
3. Default connection string in `.env`:
```
MONGODB_URI=mongodb://localhost:27017/maccofe
```

## 📦 Deployment

### Deploy Backend on Heroku

1. Install Heroku CLI
2. Login: `heroku login`
3. Create app: `heroku create your-app-name`
4. Set environment variables:
```bash
heroku config:set MONGODB_URI=your_mongodb_uri
heroku config:set JWT_SECRET=your_secret
```
5. Deploy: `git push heroku main`

### Deploy Frontend on Vercel

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Set root directory to `client`
4. Set environment variable:
   - `REACT_APP_API_URL=your_backend_url`
5. Deploy

## 🛡️ Security Notes

- Change `JWT_SECRET` to a strong random string in production
- Never commit `.env` to version control
- Validate all user inputs on backend
- Use HTTPS in production
- Implement rate limiting for API endpoints
- Add CSRF protection

## 🚀 Future Enhancements

- [ ] Stripe payment integration
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Order analytics
- [ ] Real-time updates with WebSocket
- [ ] Discount codes and promotions
- [ ] Customer reviews and ratings
- [ ] Push notifications
- [ ] Mobile app

## 🐛 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running: `mongod`
- Check connection string in `.env`
- Verify MongoDB is accessible

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### CORS Errors
- Backend has CORS enabled by default
- Ensure frontend proxy is set correctly in `client/package.json`

## 📝 License

MIT

## 👨‍💻 Support

For issues or questions, please create an issue in the repository.
