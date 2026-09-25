import config from '../config/config.js';

const isProduction = config.NODE_ENV === 'production';

export const refreshTokenCookieOptions = () => ({
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
});