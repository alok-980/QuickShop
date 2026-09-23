import productModel from "../models/product.model.js";

export const createProductController = async (req, res) => {
    try {
        const { title, description, price, stock } = req.body;

        const product = await productModel.create({
            title,
            description,
            price,
            stock,
            seller: req.user
        })

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: {
                product: {
                    id: product._id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    stock: product.stock
                }
            }
        })
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