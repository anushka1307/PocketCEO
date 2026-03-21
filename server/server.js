const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: '*',
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization']
    }
));

const PORT = 4000;

const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ MongoDB connection failed:', error);
  });