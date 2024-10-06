const express = require('express');
const connectDB = require('../../configurations/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);

const PORT = process.env.USER_SERVICE_PORT || 5001;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
