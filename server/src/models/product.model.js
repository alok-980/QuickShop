import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minLength: 3,
        maxLength: 100
    },

    description: {
        type: String,
        required: true,
        trim: true,
        minLength: 5,
        maxLength: 500
    },

    images: {
        type: [{
            type: String
        }],
        validate: {
            validator: images => images.length <= 5,
            message: "A product can have at most 5 images"
        }
    },

    price: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },

    stock: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },

    seller: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    }
}, { timestamps: true })

const productModel = mongoose.model("products", productSchema);

export default productModel;