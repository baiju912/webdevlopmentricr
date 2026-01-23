import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";

const UserProfile = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

  const { user } = useAuth();
  return (
    <>
      <div className="flex-col-2 gap-10 p-5 justify-center text-center items-center">
        <div className=" pt-5">
          <span>Name :</span>
          <span> {user.fullName}</span>
        </div>
        <div className=" pt-5">
          <span>Email :</span>
          <span> {user.email}</span>
        </div>
        <div className=" pt-5">
          <span>Phone :</span>
          <span> {user.mobileNumber}</span>
        </div>
        <button
          className="border px-5 py-2 mt-5 bg-amber-500 text-amber-100 hover:scale-105 hover:cursor-pointer rounded-xl "
          onClick={() => setIsEditProfileModalOpen(true)}
        >
          {" "}
          Edit Profile
        </button>
      </div>

      {isEditProfileModalOpen && (
        <EditProfileModal onClose={() => setIsEditProfileModalOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;
