import express from "express";
import {  registerUser } from "../Controllers/AuthControllers.js";
const router = express.Router()

router.get('/register', async(req,res)=> {
    console.log(req)
    res.send("Register Page")
})

router.post('/register', registerUser)

export default router