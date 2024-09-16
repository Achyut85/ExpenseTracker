import express from "express"
import { signinValidation, signupValidation } from "../middleware/authValidation.js";
import { signin, signup } from "../controllers/auth.controller.js";
const router = express.Router();

router.post('/signup',signupValidation, signup)
      .post('/signin',signinValidation,signin)

export default router;