import User from "../model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// 🔹 Generate JWT Token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

// 🔹 Register New User
export const createUser = async (req, res) => {
  const { name, email, password, role, profileImage, phone } = req.body;

  if (!name || !email || !password || !phone) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    let imgSrc = null;
    if (profileImage) {
        const result = await cloudinary.uploader.upload(image, {
            resource_type: "image",
        });
        imgSrc = result.secure_url;
    }

    const user = await User.create({
      name,
      email,
      password, 
      role,
      profileImage: imgSrc,
      phone,
    });
    
    if (user) {
      res.status(201).json({
        success: true,
        message: "User created successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          profileImage: user.profileImage,
          phone: user.phone,
        },
        token: generateToken(user._id, user.role),
      });
    } else {
      res.status(400).json({ success: false, message: "Invalid user data" });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// 🔹 User Login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Please fill in all fields" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    const isPasswordCorrect = await user.matchPassword(password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        profileImage: user.profileImage,
        phone: user.phone,
      },
      token: generateToken(user._id, user.role),
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


// const clearUsers = async () => {
//     try {
//         await User.deleteMany({});
//         console.log("All users deleted successfully!");
//         mongoose.connection.close(); // Close connection after deletion
//     } catch (error) {
//         console.error("Error deleting users:", error);
//     }
// };

// clearUsers();