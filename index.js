const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 8080;
const db = require('./db');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const authRoutes = require('./routes/auth');
const operatorRoutes = require('./routes/operators');

// Use your deployed frontend domain in production
const allowedOrigin = process.env.FRONTEND_URL || 'https://antbus.in/';

app.use(cookieParser()) 
app.use(cors({
  credentials:true,
  origin: allowedOrigin
}));
app.use(express.json())

app.use('/api/auth', authRoutes);
app.use('/api/operators', operatorRoutes);


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

