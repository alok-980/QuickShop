import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
        minLength: 2,
        maxLength: 30
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    passwordHashed: {
        type: String,
        required: true
    },

    refreshToken: {
        type: String
    }

}, { timestamps: true })

const userModel = mongoose.model('users', userSchema);

export default userModel;