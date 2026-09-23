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
    authenticated
} from '../middlewares/auth.middleware.js';

router.post('/', authenticated, createProductController);
router.get('/', getAllProductController);
router.get('/:id', getProductByIdController);
router.put('/:id', authenticated, updateProductByIdController);
router.delete('/:id', authenticated, deleteProductByIdController);

export default router;