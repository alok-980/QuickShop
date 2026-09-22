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

router.post('/register', registerValidator, registerController);
router.post('/login', loginValidator, loginController);
router.post('/refresh-token', refreshTokenController);
router.post('/logout', logoutController);
router.get('/me', meController);

export default router;