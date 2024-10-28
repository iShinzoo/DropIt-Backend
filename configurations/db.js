<<<<<<< HEAD
import { connect } from "mongoose";

const connectDB = async () => {
  try {
    await connect(process.env.URI);
=======
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
>>>>>>> f4527ab58b12de8fa288577fefc8d991a851d3e7
    console.log("MongoDB connected");
  } 
  catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;


