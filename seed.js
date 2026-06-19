const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/maccofe', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

const sampleProducts = [
  {
    name: 'Espresso',
    description: 'Strong and bold single shot of espresso',
    price: 3.50,
    category: 'espresso',
    image: 'espresso.jpg',
    available: true,
  },
  {
    name: 'Double Espresso',
    description: 'Double shot of rich espresso',
    price: 4.50,
    category: 'espresso',
    image: 'double-espresso.jpg',
    available: true,
  },
  {
    name: 'Classic Latte',
    description: 'Smooth espresso with steamed milk and foam',
    price: 4.99,
    category: 'latte',
    image: 'latte.jpg',
    available: true,
  },
  {
    name: 'Vanilla Latte',
    description: 'Latte with creamy vanilla flavor',
    price: 5.49,
    category: 'latte',
    image: 'vanilla-latte.jpg',
    available: true,
  },
  {
    name: 'Caramel Latte',
    description: 'Sweet caramel latte with whipped cream',
    price: 5.99,
    category: 'latte',
    image: 'caramel-latte.jpg',
    available: true,
  },
  {
    name: 'Cappuccino',
    description: 'Perfect balance of espresso and steamed milk',
    price: 4.99,
    category: 'cappuccino',
    image: 'cappuccino.jpg',
    available: true,
  },
  {
    name: 'Iced Cappuccino',
    description: 'Chilled cappuccino perfect for hot days',
    price: 5.49,
    category: 'cappuccino',
    image: 'iced-cappuccino.jpg',
    available: true,
  },
  {
    name: 'Americano',
    description: 'Espresso diluted with hot water',
    price: 3.99,
    category: 'americano',
    image: 'americano.jpg',
    available: true,
  },
  {
    name: 'Black Americano',
    description: 'Strong americano with extra espresso shots',
    price: 4.49,
    category: 'americano',
    image: 'black-americano.jpg',
    available: true,
  },
  {
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk',
    price: 5.49,
    category: 'mocha',
    image: 'mocha.jpg',
    available: true,
  },
  {
    name: 'Iced Mocha',
    description: 'Cold mocha with chocolate and whipped cream',
    price: 5.99,
    category: 'mocha',
    image: 'iced-mocha.jpg',
    available: true,
  },
  {
    name: 'White Mocha',
    description: 'Mocha with white chocolate',
    price: 5.99,
    category: 'mocha',
    image: 'white-mocha.jpg',
    available: true,
  },
  {
    name: 'Croissant',
    description: 'Buttery and flaky French pastry',
    price: 3.99,
    category: 'pastries',
    image: 'croissant.jpg',
    available: true,
  },
  {
    name: 'Chocolate Croissant',
    description: 'Croissant filled with rich dark chocolate',
    price: 4.49,
    category: 'pastries',
    image: 'choco-croissant.jpg',
    available: true,
  },
  {
    name: 'Blueberry Muffin',
    description: 'Fresh blueberry muffin',
    price: 3.49,
    category: 'pastries',
    image: 'blueberry-muffin.jpg',
    available: true,
  },
  {
    name: 'Chocolate Chip Cookie',
    description: 'Classic homemade chocolate chip cookie',
    price: 2.99,
    category: 'snacks',
    image: 'cookie.jpg',
    available: true,
  },
  {
    name: 'Almond Biscotti',
    description: 'Crunchy Italian almond biscotti',
    price: 3.49,
    category: 'snacks',
    image: 'biscotti.jpg',
    available: true,
  },
  {
    name: 'Granola Bar',
    description: 'Healthy granola with nuts and dried fruits',
    price: 3.99,
    category: 'snacks',
    image: 'granola-bar.jpg',
    available: true,
  },
];

const seedDatabase = async () => {
  try {
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample products
    await Product.insertMany(sampleProducts);
    console.log(`✅ Successfully seeded ${sampleProducts.length} products!`);

    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedDatabase();
