import jwt from "jsonwebtoken"
import { errorHandler } from "../utils/error.js";
export const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization'];
    if(!auth){
        return next(errorHandler(401, "unauthorized, JWT token is require"));
    }
     try{
        const decoded = jwt.verify(auth,process.env.JWT_SECRET);
        req.user = decoded;
        next();
     } catch(error){
        return next(errorHandler(401, "unauthorized, JWT token is wrong or expired"));
     }
}