import User, { findOne, findById } from "../models/user";
import { genSalt, hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export async function register(req, res) {
  const { username, email, password } = req.body;
  try {
    const existingUser = await findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
}

export async function getUser(req, res) {
  try {
    const user = await findById(req.user.userId).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
}
