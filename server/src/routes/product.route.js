import express from 'express';

const router = express.Router();

import {
    createProductController,
    getAllProductController,
    getProductByIdController,
    updateProductByIdController,
    deleteProductByIdController
} from '../controllers/product.controller.js';

import {
    createProductValidaion,
    updateProductValidation,
    productIdValidation
} from '../validators/product.validator.js';

import {
    authenticated
} from '../middlewares/auth.middleware.js';

router.post('/', authenticated, createProductValidaion, createProductController);
router.get('/', getAllProductController);
router.get('/:id', productIdValidation, getProductByIdController);
router.put('/:id', authenticated, productIdValidation, updateProductValidation, updateProductByIdController);
router.delete('/:id', authenticated, productIdValidation, deleteProductByIdController);

export default router;