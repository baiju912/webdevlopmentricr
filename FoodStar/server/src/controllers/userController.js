import User from "../models/userModels.js";

export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber } = req.body;
    const currentUser = req.user;
    

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }
    console.log("oldData: ", currentUser); // old user data in JSON format
    //First Way
    //  currentUser.fullName = fullName;
    //  currentUser.email = email;
    //  currentUser.mobileNumber = mobileNumber;

    //  await currentUser.save();

    //  console.log("NewData : ", currentUser);

    // Second Way

    const updateUser = await User.findByIdAndUpdate(
      { _id: currentUser._id },
      {
        fullName,
        email,
        mobileNumber,
      },
      { new: true },
    );

    console.log("Update User : ", updateUser);

    res
      .status(200)
      .json({ message: "User Updated Sucessfully ", data: updateUser });

    console.log("Updating the user");
  } catch (error) {
    next(error);
  }
};
