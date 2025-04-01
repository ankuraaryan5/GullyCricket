import User from "../model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export const createUser = async (req, res) => {
    const { name, email, password, role, profileImage, phone } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword, 
            role,
            profileImage,
            phone
        });
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user,
            token
        });
    } catch (error) {   
        console.error(error); // ✅ Log errors for debugging
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Please fill in all fields" });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: "No user found" });
        }
        const isPasswordCorrect = await user.matchPassword(password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ success: false, message: "Invalid password" });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user,
            token
        });

    } catch (error) {
        console.error(error); // ✅ Added logging for debugging
        res.status(400).json({
            success: false,
            message: error.message || "Failed to login user",
        });
    }
};