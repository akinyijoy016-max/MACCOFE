# MACCOFE - Coffee Shop Online Ordering Platform

## 🚀 Getting Started - Complete Setup Guide

Follow these steps to get your MACCOFE coffee shop website running locally.

---

## ✅ Prerequisites

Before you start, make sure you have:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org)
- **MongoDB** - Either [local](https://docs.mongodb.com/manual/installation/) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free cloud option)
- **Git** - [Download](https://git-scm.com)
- **Code Editor** - VS Code or similar

---

## 📥 Step 1: Clone the Repository

```bash
git clone https://github.com/akinyijoy016-max/MACCOFE.git
cd MACCOFE
```

---

## ⚙️ Step 2: Backend Setup

### 2.1 Install Backend Dependencies
```bash
npm install
```

### 2.2 Create Environment File

Create a `.env` file in the root directory:

```bash
touch .env
```

Add these variables:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/maccofe

# JWT Secret (change this to a random string)
JWT_SECRET=your_super_secret_key_change_this_in_production_12345

# Stripe (optional for now)
STRIPE_SECRET_KEY=sk_test_your_key_here

# Server Port
PORT=5000

# Environment
NODE_ENV=development
```

### 2.3 Setup MongoDB

**Option A: Local MongoDB** (Recommended for development)

1. Install MongoDB from [mongodb.com/download](https://www.mongodb.com/try/download/community)
2. Start MongoDB:
   - **Windows**: MongoDB should auto-start or use Services app
   - **Mac**: `brew services start mongodb-community`
   - **Linux**: `sudo systemctl start mongod`

3. Verify it's running:
   ```bash
   mongosh
   # If you see a prompt, MongoDB is running. Type 'exit' to quit.
   ```

**Option B: MongoDB Atlas** (Cloud - Free)

1. Go to [atlas.mongodb.com](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create a project and cluster (choose Free tier)
4. Go to "Database" → Click "Connect"
5. Select "Drivers" → Copy connection string
6. Update `.env`:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/maccofe
   ```

### 2.4 Seed Database with Sample Products

This adds 18 sample coffee products to your database:

```bash
npm run seed
```

✅ You should see: `Successfully seeded 18 products!`

### 2.5 Start Backend Server

```bash
npm run dev
```

✅ You should see:
```
MongoDB connected
Server running on port 5000
```

**Keep this terminal open!**

---

## 🎨 Step 3: Frontend Setup

### 3.1 Open New Terminal

Keep the backend running in terminal 1, open a new terminal for frontend.

### 3.2 Install Frontend Dependencies

```bash
cd client
npm install
```

### 3.3 Start React App

```bash
npm start
```

✅ Browser will automatically open http://localhost:3000

If not, manually visit: **http://localhost:3000**

---

## 🎉 Done! Your App is Running!

### Test the Application:

1. **Home Page** - You should see the MACCOFE welcome screen
2. **Sign Up** - Create a new account
3. **Menu** - Browse all 18 coffee products with categories
4. **Add to Cart** - Add items and see cart count update
5. **Checkout** - Enter delivery details
6. **Place Order** - Order gets saved to database
7. **Order Tracking** - View your order status

---

## 🛠️ Useful Commands

### Backend
```bash
npm run dev          # Start development server with auto-reload
npm start            # Start production server
npm run seed         # Seed database with sample products
```

### Frontend
```bash
npm start            # Start development server
npm run build        # Build for production
```

### Database
```bash
mongosh              # Connect to MongoDB
show databases       # List all databases
use maccofe          # Switch to maccofe database
db.products.find()   # View all products
db.users.find()      # View all users
db.orders.find()     # View all orders
```

---

## 🔗 API Testing with Postman

### Import API Collection

1. Open [Postman](https://www.postman.com/downloads/)
2. Try these endpoints:

#### Get All Products
```
GET http://localhost:5000/api/products
```

#### Get Products by Category
```
GET http://localhost:5000/api/products?category=latte
```

#### Register User
```
POST http://localhost:5000/api/auth/register
Body (JSON):
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "1234567890"
}
```

#### Login
```
POST http://localhost:5000/api/auth/login
Body (JSON):
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### Create Order
```
POST http://localhost:5000/api/orders
Body (JSON):
{
  "user": "user_id_from_register",
  "items": [
    {
      "product": "product_id",
      "quantity": 2,
      "price": 4.99
    }
  ],
  "totalPrice": 14.98,
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "customerPhone": "1234567890",
  "deliveryAddress": "123 Main St",
  "paymentMethod": "card"
}
```

---

## 🐛 Troubleshooting

### Problem: "Cannot connect to MongoDB"
**Solution:**
- Ensure MongoDB is running
- Check `.env` MONGODB_URI is correct
- If using Atlas, verify IP address is whitelisted

### Problem: "Port 5000 already in use"
**Solution:**
```bash
# Kill the process
lsof -ti:5000 | xargs kill -9
# Or change port in .env
```

### Problem: "Port 3000 already in use"
**Solution:**
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9
# Or React will ask to use 3001
```

### Problem: "npm: command not found"
**Solution:**
- Install Node.js from [nodejs.org](https://nodejs.org)
- Restart your terminal

### Problem: "Products not showing"
**Solution:**
- Run seed again: `npm run seed`
- Check MongoDB is running
- Check backend is running on port 5000

---

## 📚 Project Structure

```
MAC COFE/
├── models/              # Database schemas
│   ├── Product.js
│   ├── Order.js
│   └── User.js
├── routes/              # API routes
│   ├── products.js
│   ├── orders.js
│   ├── auth.js
│   └── cart.js
├── client/              # React frontend
│   ├── src/
│   │   ├── pages/       # Page components
│   │   ├── components/  # Reusable components
│   │   ├── App.js
│   │   └── index.js
│   └── public/
├── server.js            # Express server
├── seed.js              # Database seeding
├── .env                 # Environment variables
└── package.json         # Dependencies
```

---

## 🚀 Next Steps

1. **Customize**: Modify product prices, add your own products
2. **Styling**: Update colors and design in Tailwind CSS
3. **Features**: Add discount codes, wishlists, etc.
4. **Deployment**: Deploy to Heroku/Vercel
5. **Payment**: Integrate Stripe for real payments

---

## 📞 Support

If you run into issues:
1. Check the troubleshooting section above
2. Review error messages in terminal
3. Check browser console (F12)
4. Create an issue on GitHub

---

## ✨ You're all set!

Your MACCOFE coffee shop website is ready to use! 🎉☕
