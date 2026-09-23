import { body, param, validationResult } from 'express-validator';

export const createProductValidaion = [
    body('title')
        .exists().withMessage("Title is required").bail()
        .isString().withMessage("Title must be a string").bail()
        .trim()
        .isLength({ min: 3, max: 100 }).withMessage("Title must be between 3 to 100 character"),

    body('description')
        .exists().withMessage("Description is required").bail()
        .isString().withMessage("Description must be a string").bail()
        .trim()
        .isLength({ min: 20, max: 500 }).withMessage("Description must be between 20 to 500 character"),

    body('price')
        .exists().withMessage("Price amount is required").bail()
        .isInt({ min: 0 }).withMessage("Price must be a Integer number greater than or equal to 0"),

    body('stock')
        .exists().withMessage("Product stock is required").bail()
        .isInt({ min: 0 }).withMessage("Stock must be a Integer number greater than or equal to 0"),

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

export const updateProductValidation = [
    body('title')
        .optional()
        .isString().withMessage("Title must be a string").bail()
        .trim()
        .isLength({ min: 3, max: 100 }).withMessage("Title must be between 3 to 100 character"),

    body('description')
        .optional()
        .isString().withMessage("Description must be a string").bail()
        .trim()
        .isLength({ min: 20, max: 500 }).withMessage("Description must be between 20 to 500 character"),

    body('price')
        .optional()
        .isInt({ min: 0 }).withMessage("Price must be a Integer number greater than or equal to 0"),

    body('stock')
        .optional()
        .isInt({ min: 0 }).withMessage("Stock must be a Integer number greater than or equal to 0"),

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

export const productIdValidation = [
    param('id')
        .exists().withMessage("Product id is required").bail()
        .isMongoId().withMessage("Invalid product Id"),

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