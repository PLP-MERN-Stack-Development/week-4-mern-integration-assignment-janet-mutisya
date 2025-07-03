require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Post = require('./models/Post');
const postRoutes = require('./routes/post');
const categoryRoutes = require('./routes/categories');
const errorHandler = require('./middleware/errorHandler');


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/post', postRoutes);
app.use('/api/categories', categoryRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('MERN Blog API is running');
});

// Error handler
app.use(errorHandler);

// Connect DB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.log(err));
