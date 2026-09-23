import express from 'express';

const router = express.Router();

import {
    registerController,
    loginController,
    refreshTokenController,
    logoutController,
    meController
} from '../controllers/auth.controller.js';

import {
    registerValidator,
    loginValidator
} from '../validators/auth.validator.js';

import {
    authenticated
} from '../middlewares/auth.middleware.js'

router.post('/register', registerValidator, registerController);
router.post('/login', loginValidator, loginController);
router.post('/refresh-token', refreshTokenController);
router.post('/logout', authenticated, logoutController);
router.get('/me', authenticated, meController);

export default router;