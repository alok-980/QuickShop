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
        const products = await productModel.find({});

        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: {
                products: products.map(product => ({
                    id: product._id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    stock: product.stock
                }))
            }
        })
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
        const { id } = req.params;

        const product = await productModel.findById(id);

        if (!product) {
            res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: {
                product
            }
        })
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
        const { id } = req.params;
        const { title, description, price, stock } = req.body;

        const product = await productModel.findById(id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }

        if (product.seller.toString() !== req.user) {
            return res.status(403).json({
                success: false,
                message: "You dont have access to update this product"
            })
        }

        const updatedProduct = await productModel.findByIdAndUpdate(id, {
            title: title || product.title,
            description: description || product.description,
            price: price || product.price,
            stock: stock || product.stock
        }, { new: true })

        res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: {
                product: updatedProduct
            }
        })
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
        const { id } = req.params;

        const product = await productModel.findById(id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }

        if (product.seller.toString() !== req.user) {
            return res.status(403).json({
                success: false,
                message: "You dont have access to delete this product"
            })
        }

        await productModel.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        })
    } catch (error) {
        console.log("deleteProductById_Controller error:", error.message),
            res.status(500).json({
                success: false,
                message: "Internal server error"
            })
    }
}