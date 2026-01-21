import React, { useState } from "react";
import toast from "react-hot-toast";

const Regstration = () => {
  const [regstrationData, setRegstrationData] = useState({
    name: "",
    email: "",
    number: "",
    dob: "",
    qualification: "",
    grade: "",
    course: "",
    address: "",
    city: "",
    pin: "",
    parentname: "",
    parentnumber: "",
    message: "",
    adds: [],
    batch: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let temp = regstrationData.batch;
  
      
      if (checked) {
        temp.push(value);
        setRegstrationData((previousData) => ({
          ...previousData,
          [name]: temp,
        }));
      } else {
        temp = Object.values(temp);
        temp = temp.filter((word) => word !== value);
        setRegstrationData((previousData) => ({
          ...previousData,
          [name]: temp,
        }));
      }
    } else {
      setRegstrationData((previousData) => ({
        ...previousData,
        [name]: value,
      }));
    }
  };

  const handleClearForm = () => {
    setRegstrationData({
      name: "",
      email: "",
      number: "",
      dob: "",
      qualification: "",
      grade: "",
      course: "",
      address: "",
      city: "",
      pin: "",
      parentname: "",
      parentnumber: "",
      message: "",
      adds: [],
      batch: [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log(regstrationData);
      toast.success("Registration Sucsessfull");
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    
    handleClearForm();
  };

  return (
    <>
      <div className="pt-10 pb-10">
        <div className=" border-2 border-[#0a9396]  shadow h-auto w-[90%] rounded-2xl mx-auto">
          <p className="text-5xl font-bold bg-[#f4978e] rounded-2xl py-4 text-[#007ea7] text-center">
            {" "}
            Registration Form
          </p>
        </div>
        <div className="border-2 pt-5 mt-5 border-[#0a9396] shadow-2xl h-auto w-[90%] rounded-2xl mx-auto">
          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            <fieldset className="  border rounded-2xl border-blue-400 w-[90%] mx-auto">
              <legend className="ms-10 text-[#007ea7] font-bold">
                Personal Information
              </legend>
              <div>
                <div className=" grid grid-cols-1 gap-2 md:grid-cols-[30%_70%] pt-3 px-10">
                  <label htmlFor="name">Full Name: </label>
                  <input
                    // required
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={regstrationData.name}
                    className="w-[100%] border  border-[#0a9396] p-1 rounded "
                  />
                </div>
                <div className=" grid grid-cols-1 gap-2 md:grid-cols-[30%_70%] pt-3 px-10">
                  <label htmlFor="email">Email Address :</label>
                  <input
                    // required
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={regstrationData.email}
                    className="w-[100%] border border-[#0a9396] p-1 rounded "
                  />
                </div>
                <div className=" grid grid-cols-1 gap-2 md:grid-cols-[30%_70%] pt-3 px-10">
                  <label htmlFor="number">Mobile Number :</label>
                  <input
                    // required
                    type="number"
                    name="number"
                    id="number"
                    onChange={handleChange}
                    value={regstrationData.number}
                    className="w-[100%] border border-[#0a9396] p-1 rounded "
                  />
                </div>
                <div className=" grid grid-cols-1 gap-2 md:grid-cols-[30%_70%] pb-4 pt-3 px-10">
                  <label htmlFor="dob">Date of Birth :</label>
                  <input
                    // required
                    type="date"
                    name="dob"
                    id="dob"
                    onChange={handleChange}
                    value={regstrationData.dob}
                    className="w-[100%] border border-[#0a9396] p-1 rounded "
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="mt-5 border  rounded-2xl border-blue-400 w-[90%] mx-auto">
              <legend className="ms-10  text-[#007ea7] font-bold">
                Academic Details
              </legend>
              <div>
                <div className=" grid grid-cols-1 gap-2 md:grid-cols-[30%_70%] pt-3 px-10">
                  <label htmlFor="qualification">Qualifiaction :</label>
                  <select
                    // required
                    className="w-[100%] border border-[#0a9396] p-1 rounded "
                    name="qualification"
                    id="qualification"
                    onChange={handleChange}
                    value={regstrationData.qualification}
                  >
                    <option value="">--Select Qualifiaction--</option>
                    <option value="10th">High School</option>
                    <option value="12th">Intermediate</option>
                    <option value="Graduation">Graduation</option>
                    <option value="phd"> P.hd</option>
                  </select>
                </div>
                <div className=" grid grid-cols-1 gap-2 md:grid-cols-[30%_70%] pb-4 pt-3 px-10">
                  <label htmlFor="grade">Percentage / Grade :</label>
                  <input
                    // required

                    type="text"
                    name="grade"
                    id="grade"
                    onChange={handleChange}
                    value={regstrationData.grade}
                    className="w-[100%] border border-[#0a9396] p-1 rounded "
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="mt-5 border rounded-2xl border-blue-400 w-[90%] mx-auto">
              <legend className="ms-10 text-[#007ea7] font-bold">
                Course Information
              </legend>
              <div>
                <div className=" grid grid-cols-1 gap-2 md:grid-cols-[30%_70%] pt-3 px-10">
                  <label htmlFor="course">Available Courses :</label>
                  <select
                    // required
                    className="w-[100%] border border-[#0a9396] p-1 rounded "
                    name="course"
                    id="course"
                    onChange={handleChange}
                    value={regstrationData.course}
                  >
                    <option value="">--Select course--</option>
                    <option value="FSD">Full Stack Development</option>
                    <option value="DSA">DSA</option>
                    <option value="DA">Data Analytics</option>
                    <option value="DS"> Data Science</option>
                  </select>
                </div>
                <div className=" grid grid-cols-1 gap-2 md:grid-cols-[30%_70%] pb-4 pt-3 px-10">
                  <label htmlFor="batch">Prefered Batch :</label>
                  <div className="flex justify-around flex-wrap md:justify-start md:gap-3 ">
                    <div>
                      <input
                      type="checkbox"
                      name="batch" 
                      value="morning"
                      id="morning"
                      onChange={handleChange}
                      checked={Object.values(regstrationData.batch).includes(
                        "morning"
                      )}
                    />{" "}
                    Morning
                    </div>
                    <div>
                      <input
                      type="checkbox"
                      name="batch"
                      id="evening"
                      value="evening"
                      className="ms-8"
                      onChange={handleChange}
                      checked={Object.values(regstrationData.batch).includes(
                        "evening"
                      )}
                    />{" "}
                    Evening
                    </div>
                    <div>
                      <input
                      type="checkbox"
                      name="batch"
                      id="afternoon"
                      value="afternoon"
                      className="ms-8"
                      onChange={handleChange}
                      checked={Object.values(regstrationData.batch).includes(
                        "afternoon"
                      )}
                    />{" "}
                    Afternoon
                    </div>
                    <div>
                      <input
                      type="checkbox"
                      name="batch"
                      value="weekends"
                      id="weekends"
                      className="ms-8"
                      onChange={handleChange}
                      checked={Object.values(regstrationData.batch).includes(
                        "weekends"
                      )}
                    />{" "}
                    Weekends
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset className="mt-5 border rounded-2xl border-blue-400 w-[90%] mx-auto">
              <legend className="ms-10 text-[#007ea7] font-bold">
                Address
              </legend>
              <div>
                <div className=" grid grid-cols-1 gap-2 md:grid-cols-[30%_70%] pt-3 px-10">
                  <label htmlFor="address">Residential Address: </label>
                  <textarea
                    // required
                    className="w-[100%] border border-[#0a9396] p-1 rounded "
                    name="address"
                    id="address"
                    onChange={handleChange}
                    value={regstrationData.address}
                  ></textarea>
                </div>
                <div className=" grid grid-cols-1 gap-2 md:grid-cols-[30%_70%] pt-3 px-10">
                  <label htmlFor="city">City :</label>
                  <input
                    // required
                    type="text"
                    name="city"
                    id="city"
                    onChange={handleChange}
                    value={regstrationData.city}
                    className="w-[100%] border border-[#0a9396] p-1 rounded "
                  />
                </div>
                <div className=" grid grid-cols-1 gap-2 md:grid-cols-[30%_70%] pb-4 pt-3 px-10">
                  <label htmlFor="pin">Pin Code :</label>
                  <input
                    // required
                    type="number"
                    name="pin"
                    id="pin"
                    onChange={handleChange}
                    value={regstrationData.pin}
                    className="w-[100%] border border-[#0a9396] p-1 rounded "
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="mt-5 border rounded-2xl border-blue-400 w-[90%] mx-auto">
              <legend className="ms-10 text-[#007ea7] font-bold">
                Guardian Details
              </legend>
              <div>
                <div className=" grid grid-cols-1 gap-2 md:grid-cols-[30%_70%] pt-3 px-10">
                  <label htmlFor="parentname">Guardian’s Full Name: </label>
                  <input
                    // required
                    type="text"
                    name="parentname"
                    id="parentname"
                    onChange={handleChange}
                    value={regstrationData.parentname}
                    className="w-[100%] border border-[#0a9396] p-1 rounded "
                  />
                </div>

                <div className=" grid grid-cols-1 gap-2 md:grid-cols-[30%_70%] pb-4 pt-3 px-10">
                  <label htmlFor="parentnumber">
                    Guardian’s Contact Number :
                  </label>
                  <input
                    // required
                    type="number"
                    name="parentnumber"
                    id="parentnumber"
                    onChange={handleChange}
                    value={regstrationData.parentnumber}
                    className="w-[100%] border border-[#0a9396] p-1 rounded "
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="mt-5 border rounded-2xl border-blue-400 w-[90%] mx-auto">
              <legend className="ms-10 text-[#007ea7] font-bold">
                Additional Information
              </legend>
              <div>
                <div className="  grid grid-cols-1 gap-2 md:grid-cols-[30%_70%] pb-4 pt-3 px-10 gap-15">
                  <label htmlFor="adds">How did you hear about us? :</label>

                  <div className="flex justify-around w-[90%] text-wrap  gap-1 flex-wrap">
                    <div className="flex gap-2 items-center">
                      <input
                      type="checkbox"
                      name="adds"
                      id="friend"
                      value="friend"
                      onChange={handleChange}
                      checked={Object.values(regstrationData.adds).includes(
                        "friend"
                      )}
                    />
                    Friends
                    </div>
                    
                   <div>
                     <input
                      type="checkbox"
                      name="adds"
                      id="onlinead"
                      value="onlinead"
                      className=""
                      onChange={handleChange}
                      checked={Object.values(regstrationData.adds).includes(
                        "onlinead"
                      )}
                    />
                    Online Ad
                   </div>
                   <div>
                     <input
                      type="checkbox"
                      name="adds"
                      id="newspaper"
                      value="newspaper"
                      className=""
                      onChange={handleChange}
                      checked={Object.values(regstrationData.adds).includes(
                        "newspaper"
                      )}
                    />{" "}
                    NewsPaper
                   </div>
                    <div className="flex gap-2 items-center">
                      <input
                      type="checkbox"
                      name="adds"
                      id="media"
                      value="media"
                      className=""
                      onChange={handleChange}
                      checked={Object.values(regstrationData.adds).includes(
                        "media"
                      )}
                    />{" "}
                    Social Media
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                      type="checkbox"
                      name="adds"
                      id="other"
                      value="other"
                      className=""
                      onChange={handleChange}
                      checked={Object.values(regstrationData.adds).includes(
                        "other"
                      )}
                    />
                    Other
                    </div>
                  </div>
                </div>

                <div className=" grid grid-cols-1 gap-2 md:grid-cols-[30%_70%] pb-4 pt-3 px-10">
                  <label htmlFor="message">
                    Special Requirement(optional){" "}
                  </label>
                  <textarea
                    // required
                    className="w-[100%] border border-[#0a9396] p-1 rounded "
                    name="message"
                    id="message"
                    onChange={handleChange}
                    value={regstrationData.message}
                  ></textarea>
                </div>
              </div>
            </fieldset>

            <div className="mx-auto  flex justify-center gap-10  pt-10 pb-10">
              <button
                type="Reset"
                className="bg-red-500 py-1 shadow-2xl px-5 rounded text-2xl hover:text-red-600 hover:shadow hover:bg-orange-400 text-white"
              >
                Clear Form
              </button>
              <button
                type="Submit"
                className="bg-[#3f7d20] py-1 hover:text-green-600 hover: border-green-500 hover:bg-green-400 shadow-2xl px-5 rounded text-2xl text-white"
              >
                {isLoading ? "Loading" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Regstration;
