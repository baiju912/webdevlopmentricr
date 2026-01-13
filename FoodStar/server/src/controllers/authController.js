import User from "../models/userModels.js";

import bcrypt from "bcrypt";


export const UserRegister = async (req, res, next ) => {
    try {


        const {fullName, email, mobileNumber, password} =req.body;
        if(!fullName || !email || !mobileNumber || !password)
        {
            const error = new Error("All feilds required");
            error.statusCode = 400;
            return next(error);
        }

        const existingUser = await User.findOne({email});
        if(existingUser) {
            const error = new Error("Email Already registered");
            error.statusCode = 409;
            return next(error); 
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);

        const newUser = await User.create({
            fullName,
            email,
            mobileNumber,
            password: hashPassword,
        });

        console.log(newUser);

        res.status(201).json({message: "Registration Successfull"});
        

        
    } catch (error) {
        next(error)
    }
}

export const UserLogin = async (req, res, next ) => {
    try {

        const {email, password} = req.body;
         if( !email  || !password)
        {
            const error = new Error("All feilds required");
            error.statusCode = 400;
            return next(error);
        }

         const existingUser = await User.findOne({email});
        if(existingUser) {
            const error = new Error("Email not registered");
            error.statusCode = 402;
            return next(error); 
        }

        const isVerified = await bcrypt.compare(existingUser.password);

        if(!isVerified)
        {
            const error = new Error("Password don't match");
            error.statusCode = 402;
            return next(error); 
        }

        res.status(200).json({message:"Login Successfull",data: existingUser});


        
    } catch (error) {
        next(error)
    }
}

export const UserLogout = async (req, res, next ) => {
    try {
       res.status(200).json({message:"Logout Successfull"}); 
    } catch (error) {
        next(error)
    }
}