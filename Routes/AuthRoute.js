import express from "express";
import { loginUser, registerUser } from "../Controllers/AuthControllers.js";
const router = express.Router();

// router.get('/register', async(req,res)=> {
//     console.log(req)
//     res.send("Register Page")
// })

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
