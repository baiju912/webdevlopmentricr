import jwt from "jsonwebtoken";
import User from "../models/userModels.js";

export const Protect = async (req, res, next) => {
  try {
    const biscut = req.cookies.parleG;
    console.log("Token recived in cookies: ", biscut);

    const tea = jwt.verify(biscut, process.env.JWT_SECRET);
    console.log(tea);

    if (!tea) {
      const error = new Error("Unauthorized! Please Login Again");
      error.statusCode = 401;
      return next(error);
    }

    const verifiedUser = await User.findById(tea.id);

    if (!verifiedUser) {
      const error = new Error("Unauthorized! Please Login Again");
      error.statusCode = 401;
      return next(error);
    }
    req.user = verifiedUser;

    next();
  } catch (error) {
    next(error);
  }
};


export const OtpProtect = async (req, res, next) => {
  try {
    const token = req.cookies.otpToken;
    console.log("Token recived in cookies: ", token);

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode);

    if (!decode) {
      const error = new Error("Unauthorized! Please try Again");
      error.statusCode = 401;
      return next(error);
    }

    const verifiedUser = await User.findById(decode.id);

    if (!verifiedUser) {
      const error = new Error("Unauthorized! Please try Again");
      error.statusCode = 401;
      return next(error);
    }
    req.user = verifiedUser;

    next();
  } catch (error) {
    next(error);
  }
};
