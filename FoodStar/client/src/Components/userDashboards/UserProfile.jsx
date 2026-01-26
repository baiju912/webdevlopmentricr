import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";
import useNavigate from "./UserOverview"

const UserProfile = () => {
 
  const { user, isLogin } = useAuth();
  const navigate = useNavigate();
   const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);

   useEffect(
    () =>{
      if(!isLogin){
        navigate("/login");
      }
    }
   );

   if(role !== "customer"){
    return
    (
      <>
      <div>You are not login</div>
      </>
    )
   }


  return (
    <>
      <div className=" flex  shadow-2xl border bg-black/20 rounded-2xl mx-auto p-8 w-[95%] mt-10">
        <div className=" h-20 w-20 border-2 flex items-center justify-center text-5xl rounded-full">
          {user.fullName.charAt(0)}
        </div>
        <div className=" px-10 flex-col-1  items-center">
          <p> Name: {user.fullName} </p>
          <p>Email id: {user.email} </p>
          <p>Mobile No : {user.mobileNumber} </p>
        </div>
        <button
          onClick={() => setIsEditProfileModalOpen(true)}
          className="hover:scale-105 cursor-pointer px-10 rounded-2xl h-10 text-white bg-blue-500 ml-auto"
        >
          Edit
        </button>
      </div>

      {isEditProfileModalOpen && (
        <EditProfileModal onClose={() => setIsEditProfileModalOpen(false)} />
      )}
    </>
  );
};

export default UserProfile;
