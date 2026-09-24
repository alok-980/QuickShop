import userModel from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { generateToken, verifyRefreshToken } from "../utils/auth.util.js";

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
        console.log("registerController error:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error."
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
                },
                accessToken
            },
        })
    } catch (error) {
        console.log("loginController error:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const refreshTokenController = async (req, res) => {
    try {
        const { refreshToken } = req.cookies;

        if (!refreshToken) {
            return res.status(401).json({
                success: false,
                message: "refresh-token is required please login again"
            })
        }

        const decoded = verifyRefreshToken(refreshToken);

        if (!decoded) {
            return res.status(401).json({
                success: false,
                message: "Invalid token please login again"
            })
        }

        const { id } = decoded;

        const user = await userModel.findById(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if (refreshToken !== user.refreshToken) {
            await userModel.findByIdAndUpdate(user._id, {
                refreshToken: null
            })

            return res.status(403).json({
                success: false,
                message: "Refresh token mismatch please login again"
            })
        }

        const { accessToken, refreshToken: newRefreshToken } = generateToken({ userId: user._id });

        await userModel.findByIdAndUpdate(id, {
            refreshToken: newRefreshToken
        })

        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true
        })

        res.status(200).json({
            success: true,
            message: "Token rotated successfully",
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                },
                accessToken
            }
        })
    } catch (error) {
        console.log("refreshTokenController error:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const logoutController = async (req, res) => {
    try {
        const id = req.user;

        const user = await userModel.findByIdAndUpdate(id, {
            refreshToken: null
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        res.cookie("refreshToken", "", {
            httpOnly: true
        })

        res.status(200).json({
            success: true,
            message: "Logout successfully"
        })
    } catch (error) {
        console.log("logoutController error:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export const meController = async (req, res) => {
    try {
        const id = req.user;

        const user = await userModel.findById(id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "User data fetch successfully",
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
            }
        })
    } catch (error) {
        console.log("meController error:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}