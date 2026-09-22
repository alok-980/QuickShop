import userModel from "../models/user.model.js";
import bcrypt from 'bcryptjs';

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