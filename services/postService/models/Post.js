const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  post_type: String,
  weight: { type: String, enum: ['5kg', '10kg', '20kg'] },
  product_name: String,
  product_description: String,
  product_image: String,
  pickup_point: String,
  delivery_point: String,
  date_time: Date,
  price: Number,
  status: { type: String, enum: ['Pending', 'Accepted', 'Completed'], default: 'Pending' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
