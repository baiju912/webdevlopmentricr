import React, { useState } from "react";

const Register = () => {
  const [contactData, setContactData] = useState({
    fullname: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleClearForm = () => {
    setContactData({
      fullname: "",
      email: "",
      phone: "",
      city: "",
      password: "",
      
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      console.log(contactData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <>
      <div className=" text-center">
        <h1>Register </h1>
        <div className=" container h-50 w-50 border bg-primary-subtle rounded-3 shadow mb-5">
          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            <div className="mt-3 fs-5 mb-3">
              <label htmlFor="fullname">Full Name : </label>
              <input
                required
                type="text"
                name="fullname"
                id="fullname"
                value={contactData.fullname}
                onChange={handleChange}
                placeholder="Enter your Name"
                className="text-primary ms-5"
              />
            </div>

            <div className="mb-4 fs-5">
              <label htmlFor="email">Email Id : </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter your Email Id"
                className="text-primary  ms-lg-5"
              />
            </div>

            <div className="mb-4 fs-5">
              <label htmlFor="phone">Phone No : </label>
              <input
                required
                type="number"
                name="phone"
                id="phone"
                value={contactData.phone}
                onChange={handleChange}
                placeholder="Enter your Phone no"
                className="text-primary  ms-lg-5"
              />
            </div>

            <div className="mb-4 fs-5">
              <label htmlFor="city">City : </label>
              <input
                required
                type="text"
                name="city"
                id="city"
                value={contactData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="text-primary  ms-lg-5"
              />
            </div>

            <div className="mb-4 fs-5">
              <label htmlFor="password">Password : </label>
              <input
                required
                type="password"
                name="password"
                id="password"
                value={contactData.password}
                onChange={handleChange}
                placeholder="Enter your Password"
                className="text-primary  ms-lg-5"
              />
            </div>

            

            <div className="mb-5">
              <button type="reset" className="btn btn-danger me-4">
                {" "}
                Clear Form
              </button>
              <button type="submit" className="btn btn-success">
                {" "}
                {isLoading ? "Loading" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
