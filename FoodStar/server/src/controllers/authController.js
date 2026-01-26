import User from "../models/userModels.js";
import bcrypt from "bcrypt";
import { genToken } from "../utils/authToken.js";

export const UserRegister = async (req, res, next) => {
  try {
    console.log(req.body);
    
    // Accept data form Fronted
    const { fullName, email, mobileNumber, password, role } = req.body;

    // Verify that all data exits
    if (!fullName || !email || !mobileNumber || !password ||!role) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    console.log({ fullName, email, mobileNumber, password });
    
    // Check for duplicate user before registration
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email Already registered");
      error.statusCode = 409;
      return next(error);
    }

    console.log("sending Data to DB");
    
    // Encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    console.log("password hashing done = ",hashPassword );
    
    // Save data to database
    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashPassword,
      role,
    });

    // Send response to  frontend
    console.log(newUser);

    res.status(201).json({ message: "Registration Successfull" });
  } catch (error) {
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    // Fetch data from frontend
    const { email, password } = req.body;

    //Verify that  all data exist
    if (!email || !password) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    // Check if user is registred or not
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 401;
      return next(error);
    }

    // Verify the password
    const isVerified = await bcrypt.compare(password,existingUser.password);

    if (!isVerified) {
      const error = new Error("Password don't match");
      error.statusCode = 401;
      return next(error);
    }

//Token
     genToken(existingUser, res);

    //Send message to frontend
    res.status(200).json({ message: "Login Successfull", data: existingUser });
  } catch (error) {
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Logout Successfull" });
  } catch (error) {
    next(error);
  }
};
