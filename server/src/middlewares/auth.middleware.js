import { verifyAccessToken } from "../utils/auth.util.js"

export const authenticated = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Token is required"
            })
        }

        const accessToken = authHeader.split(" ")[1];
        // console.log(accessToken);

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