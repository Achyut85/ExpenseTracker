import { addUser, getUser } from "../models/users.model.js"
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcrypt"

import jwt from "jsonwebtoken"
export const signup = async (req, res ,next) =>{
     try{
        const {name, email, password} = req.body
        const user = await getUser(email);
        if(user){
            return next(errorHandler(409,"User is already exits, You can signin"));
        }
       
        
        const pass = await bcrypt.hash(password,10);
        await addUser(name, email, pass);
        res.status(201)
            .json({
                message:"Signup successfully",
                success:true
            })
        
     }catch(error){
        return next(error)
}
     }


     export const signin = async (req, res ,next) =>{
        try{
           const {email, password} = req.body
           const user = await getUser(email);
           const errorMsg = "email or password is wrong"
           if(!user){
               return next(errorHandler(403,errorMsg));
           }
          
           
           const isPassEqual = await bcrypt.compare(password, user.password);
            if(!isPassEqual){
                return next(errorHandler(403,errorMsg));
            }
            const jwtToken = jwt.sign(
                {
                    email:user.email, 
                    id:user.id
                },
                process.env.JWT_SECRET,
                {expiresIn:'24h'}
            )
           res.status(200)
               .json({
                   message:"Signin successfully",
                   success:true,
                   jwtToken,
                   email,
                   name:user.name,
                   id:user.id
               })
           
        }catch(error){
           return next(error)
   }
        }
   
