import User from "../models/userModel.js";

export const UserRegister = async (req, res, next) => {
  try {
    const { fullName, email, phone, password } = req.body;

    if (!fullName || !email || !phone || !password) {
      const error = new Error("All Fields Requried");
      error.statusCode = 400;
      return next(error);
    }

    const newUser = await User.create({
      fullName,
      email,
      phone,
      password,
    });

    console.log(newUser);
    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("User Not Found");
      error.statusCode = 404;
      return next(error);
    }

    const exixtingUser = await User.findOne({ email });
    if (!exixtingUser) {
      res.status(409).json({ message: "Email already exists" });
      return;
    }
    const isVerified = password === exixtingUser.password;

    if (!isVerified) {
      const error = new Error("User not Authorized");
      error.statusCode = 402;
      return next(error);
    }

    console.log(exixtingUser);

    res.status(200).json({ message: "Welcome Back", data: exixtingUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Logout Successfull" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, phone } = req.body;
    if (!fullName || !email || !phone) {
      const error = new Error("All Fields Requried");
      error.statusCode = 400;
      return next(error);
    }
    const exixtingUser = await User.findOne({ email });
    if (!exixtingUser) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }

    exixtingUser.fullName = fullName;
    exixtingUser.phone = phone;
    await exixtingUser.save();

    res
      .status(200)
      .json({ message: "User Update Successfully", data: exixtingUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
