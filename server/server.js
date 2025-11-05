require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Order = require('./models/order');
const { sendOrderConfirmation } = require('./services/emailService');
const novaPoshtaService = require('./services/novaPoshtaService');

const app = express();

// Нова Пошта endpoints
app.get('/api/nova-poshta/cities', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q || q.length < 2) {
      return res.json([]);
    }
    const cities = await novaPoshtaService.searchCities(q);
    res.json(cities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cities' });
  }
});

app.get('/api/nova-poshta/warehouses/:cityRef', async (req, res) => {
  try {
    const warehouses = await novaPoshtaService.getWarehouses(req.params.cityRef);
    res.json(warehouses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch warehouses' });
  }
});

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Підключення до MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Генерація номера замовлення
const generateOrderNumber = () => {
  const date = new Date();
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `PW${date.getFullYear()}${(date.getMonth()+1).toString().padStart(2, '0')}${random}`;
};

// API endpoints
app.post('/api/orders', async (req, res) => {
  try {
    const orderData = req.body;
    
    // Валідація даних
    if (!orderData.customerInfo.name || !orderData.customerInfo.phone || !orderData.customerInfo.address) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    if (!orderData.items || orderData.items.length === 0) {
      return res.status(400).json({ error: 'Order must contain items' });
    }

    // Створення замовлення
    const order = new Order({
      ...orderData,
      orderNumber: generateOrderNumber()
    });

    // Збереження в базу даних
    await order.save();

    // Відправка email підтвердження
    if (order.customerInfo.email) {
      try {
        await sendOrderConfirmation(order);
      } catch (emailError) {
        console.error('Failed to send confirmation email:', emailError);
        // Не перериваємо процес, якщо email не відправився
      }
    }

    res.status(201).json({
      message: 'Order created successfully',
      orderNumber: order.orderNumber
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Отримання статусу замовлення
app.get('/api/orders/:orderNumber', async (req, res) => {
  try {
    const order = await Order.findOne({ orderNumber: req.params.orderNumber });
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json({
      orderNumber: order.orderNumber,
      status: order.status,
      createdAt: order.createdAt
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});