import React, { useState } from "react";
import Lottie from "lottie-react";
import EditProf from "../../../assets/animations/EditLogo.json";
import { motion } from "motion/react";
import { useAuth } from "../../../context/AuthContext";

const EditProfileModal = ({ onClose }) => {
  const { user } = useAuth();

  const [data, setData] = useState({
    fullName: user.fullName,
    email: user.email,
    mobileNumber: user.mobileNumber,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  try {
    const res =  applyAxisDelta.put("/user/update", data)
    
  } catch (error) {
    
  }
  return (
    <>
      <div className="fixed inset-0 bg-black/70 flex justify-center p-7 items-center w-full">
        <div className="bg-amber-50 w-1/2 relative max-h-[85vh] overflow-y-auto rounded-2xl p-3">
          <div className=" flex items-center gap-5 text-center w-full justify-center text-2xl font-bold text-blue-500">
            {" "}
            <Lottie
              animationData={EditProf}
              className="w-12 text-blue-500"
            />{" "}
            Edit Profile
          </div>

          <div className=" flex  justify-center items-center">
            <div className="grid-cols-1 text-center pb-10 ">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={data.fullName}
                onChange={handleChange}
                className="w-[80%]  mt-8 h-fit px-4 py-3 disabled:bg-gray-200 disabled:cursor-not-allowed border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
              />

              <input
                type="email"
                name="email"
                placeholder=" Email Id"
                value={data.email}
                onChange={handleChange}
                disabled
                className="w-[80%] mx-auto mt-8 h-fit px-4 py-3 disabled:bg-gray-200 disabled:cursor-not-allowed border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
              />
              <input
                type="number"
                name="mobileNumber"
                placeholder=" Mobile No"
                value={data.mobileNumber}
                onChange={handleChange}
                className="w-[80%] mx-auto mt-8 h-fit px-4 py-3 disabled:bg-gray-200 disabled:cursor-not-allowed border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition"
              />
            </div>
          </div>

          <motion.div
            
            className="text-center flex justify-center"
          >
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
              onClick={() => onClose()}
              className="px-6  text-center rounded-xl bg-green-800 text-white hover:cursor-pointer  text-2xl py-2"
            >
              {" "}
              Update{" "}
            </motion.button>
          </motion.div>
          <button
            onClick={() => onClose()}
            className="w-10 aspect-square rounded-full bg-red-500 text-white text-lg font-extrabold hover:bg-red-700 cursor-pointer absolute right-5 top-5"
          >
            {" "}
            X{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default EditProfileModal;
