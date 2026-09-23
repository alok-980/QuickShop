import productModel from "../models/product.model.js";

export const createProductController = async (req, res) => {
    try {

    } catch (error) {
        console.log("createProduct_Controller error:", error.message),
            res.status(500).json({
                success: false,
                message: "Internal server error"
            })
    }
}

export const getAllProductController = async (req, res) => {
    try {

    } catch (error) {
        console.log("getAllProduct_Controller error:", error.message),
            res.status(500).json({
                success: false,
                message: "Internal server error"
            })
    }
}

export const getProductByIdController = async (req, res) => {
    try {

    } catch (error) {
        console.log("getProductById_Controller error:", error.message),
            res.status(500).json({
                success: false,
                message: "Internal server error"
            })
    }
}

export const updateProductByIdController = async (req, res) => {
    try {

    } catch (error) {
        console.log("updateProductById_Controller error:", error.message),
            res.status(500).json({
                success: false,
                message: "Internal server error"
            })
    }
}

export const deleteProductByIdController = async (req, res) => {
    try {

    } catch (error) {
        console.log("deleteProductById_Controller error:", error.message),
            res.status(500).json({
                success: false,
                message: "Internal server error"
            })
    }
}