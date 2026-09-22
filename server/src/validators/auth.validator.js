import { body, validationResult } from 'express-validator';

export const registerValidator = [
    body('name')
        .exists().withMessage("Name is required").bail()
        .isString().withMessage("Name must be a string").bail()
        .trim()
        .isLength({ min: 2, max: 30 }).withMessage("Name must be between 2 to 30 characters"),

    body('email')
        .exists().withMessage("Email is required").bail()
        .isString().withMessage("Email must be a String Value").bail()
        .trim()
        .isEmail().withMessage("Enter a valid email address"),

    body('password')
        .exists().withMessage("Password is required").bail()
        .isString().withMessage("Password must be a string").bail()
        .trim()
        .isLength({ min: 6 }).withMessage("Password must be minimum 6 character long"),

    body('confirmPassword')
        .exists().withMessage("confirmPassword is required").bail()
        .isString().withMessage("confirmPassword must be a string").bail()
        .trim()
        .isLength({ min: 6 }).withMessage("confirmPassword must be minimum 6 character long"),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: "Invalid Request",
                errors: errors.array()
            })
        }

        next();
    }
]

export const loginValidator = [
    body('email')
        .exists().withMessage("Email is required").bail()
        .isString().withMessage("Email must be a String Value").bail()
        .trim()
        .isEmail().withMessage("Enter a valid email address"),

    body('password')
        .exists().withMessage("Password is required").bail()
        .isString().withMessage("Password must be a string").bail()
        .trim()
        .isLength({ min: 6 }).withMessage("Password must be minimum 6 character long"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: "Invalid Request",
                errors: errors.array()
            })
        }
        next();
    }
]