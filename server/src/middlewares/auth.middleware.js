import { verifyAccessToken } from "../utils/auth.util.js"

export const authenticated = async (req, res, next) => {
    try {
        const accessToken = req.headers.authorization.split(" ")[1];

        if (!accessToken) {
            return res.status(400).json({
                success: false,
                message: "Token is required"
            })
        }

        const decoded = await verifyAccessToken(accessToken);

        req.user = decoded.id;

        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "Invalid or expire token"
        })
    }
}