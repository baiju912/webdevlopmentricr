import React from "react";

function Contact() {
  return (
    <>
      <div className="h-90 w-130 border shadow-2xl rounded-2xl bg-[#e78f8e] mx-auto mt-20 mb-30">
        <h2 className=" text-center text-blue-500 text-4xl font-bold mt-3">
          Contact Us
        </h2>
        <div className="grid drid-col-3 gap-5 p-6 text-strart ms-12">
          <div>
            <label className=" me-5 text-2xl" htmlFor="name">
              Full Name :
            </label>
            <input
              type="text"
              className="bg-white p-2 px-4 border rounded-2xl"
              name="name"
              id="name"
              placeholder="Enter your Name"
            />
          </div>
          <div>
            <label className=" me-10 text-2xl" htmlFor="email">
              Email Id :
            </label>
            <input
              type="email"
              className="bg-white p-2 px-4 border rounded-2xl"
              name="email"
              id="email"
              placeholder="Enter your Email Id"
            />
          </div>
          <div>
            <label className=" me-8 text-2xl " htmlFor="message">
              Message :
            </label>
            <textarea
              className="bg-white px-5  border rounded-2xl"
              name="message"
              id="maessge"
            ></textarea>
          </div>
          <div className="text-center mt-4 ">
            <button className=" border w-30 px-4 py-2 shadow-lg font-bold bg-[#3b28cc] text-[#ef233c] rounded-2xl  hover:bg-[#f48498] hover:text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
