import cloudinary from "../config/Cloundinary.js";
import User from "../models/userModels.js";

export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber, gender, dob, address, city, pin, documents, paymentDetails, geoLocation } = req.body;
    const currentUser = req.user;
    

    if ( !fullName || !email || !mobileNumber || !gender || !dob || !address || !city || !pin || !documents || !paymentDetails || !geoLocation ) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }
    console.log("oldData: ", currentUser); // old user data in JSON format
    //First Way
     currentUser.fullName = fullName;
     currentUser.email = email;
     currentUser.mobileNumber = mobileNumber;
     currentUser.gender = gender;
     currentUser.dob = dob;
     currentUser.address = address;
     currentUser.city = city;
     currentUser.pin = pin;
     currentUser.documents = documents;
     currentUser.paymentDetails = paymentDetails;
     currentUser.geoLocation = geoLocation;

     await currentUser.save();

     console.log("NewData : ", currentUser);

    // Second Way

    // const updateUser = await User.findByIdAndUpdate(
    //   { _id: currentUser._id },
    //   {
    //     fullName,
    //     email,
    //     mobileNumber,
    //   },
    //   { new: true },
    // );

    // console.log("Update User : ", updateUser);

    res
      .status(200)
      .json({ message: "User Updated Sucessfully ", data: currentUser });

    console.log("Updating the user");
  } catch (error) {
    next(error);
  }
};

export const UserChangePhoto = async (req, res, next) => {
  try {
    // console.log("body: ", req.body);
    const currentUser = req.user;
    const dp = req.file;

    console.log("request file: ", req.file);

    if (!dp) {
      const error = new Error("Profile Picture required");
      error.statusCode = 400;
      return next(error);
    }

    console.log("DP:", dp);

    if (currentUser.photo.publicId) {
      await cloudinary.uploader.destroy(currentUser.photo.publicId);
    }

    const b64 = Buffer.from(dp.buffer).toString("base64");
    // console.log(b64.slice(0,100));
    const dataURI = `data:${dp.mimetype};base64,${b64}`;
    console.log("DataURI", dataURI.slice(0, 100));

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "Cravings/User",
      width: 500,
      height: 500,
      crop: "fill",
    });

    console.log("Image Uplaoded successfully: ", result);
    currentUser.photo.url = result.secure_url;
    currentUser.photo.publicId = result.public_id;

    await currentUser.save();

    res.status(200).json({ message: "Photo Updated", data: currentUser });
  } catch (error) {
    next(error);
  }
};
