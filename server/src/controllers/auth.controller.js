import userModel from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { generateToken } from "../utils/auth.util.js";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and confirm password do not match"
            })
        }

        const isExist = await userModel.findOne({ email });

        if (isExist) {
            return res.status(409).json({
                success: false,
                message: "User already exist with this email",
                errors: [
                    {
                        path: "email",
                        msg: "User already exist with this email"
                    }
                ]
            })
        }

        const user = await userModel.create({
            name,
            email,
            passwordHashed: await bcrypt.hash(password, 10)
        })

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        })
    }
}

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        const verifyPassword = await bcrypt.compare(password, user.passwordHashed);

        if (!verifyPassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            })
        }

        const { accessToken, refreshToken } = generateToken({ userId: user._id });

        await userModel.findByIdAndUpdate(user._id, {
            refreshToken
        })

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true
        })

        res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
            },
            accessToken
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        })
    }
}

export const refreshTokenController = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        })
    }
}

export const logoutController = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        })
    }
}

export const meController = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error: " + error.message
        })
    }
}