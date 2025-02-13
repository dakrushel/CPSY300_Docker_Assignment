const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

app. use(cors());
app.use(bodyParser.json());

connectDB();

//Routes
app.use('/api', require('./routes/studentRoutes'));

//Default route
app.get('/', (req, res) => {
    res.send('Student API is running. Use /api/students or /api/students/:id');
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));