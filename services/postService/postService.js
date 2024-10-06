const express = require('express');
const connectDB = require('../../configurations/db');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.use(express.json());

connectDB();

app.use('/api/posts', postRoutes);

const PORT = process.env.POST_SERVICE_PORT || 5002;
app.listen(PORT, () => console.log(`Post Service running on port ${PORT}`));
