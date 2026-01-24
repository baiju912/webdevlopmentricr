import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";

const UserProfile = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  const { user } = useAuth();
  return (
    <>
      <div className=" flex ">
        <div className=" h-10 w-10 rounded-full">
          {user.fullName.charAt(0)}
        </div>
        <div>
          <p> {user.fullName} </p>
           <p> {user.email} </p>
            <p> {user.mobileNumber} </p>
        </div>
        <button  onClick={() => setIsEditProfileModalOpen(true)} className=" px-6 py-2 text-white bg-blue-500 ml-auto">Edit</button>
      </div>

      {isEditProfileModalOpen && (
        <EditProfileModal onClose={() => setIsEditProfileModalOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;
