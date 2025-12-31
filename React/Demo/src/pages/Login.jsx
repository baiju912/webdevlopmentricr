import React, { useState } from "react";


const Login = () => {
  const [contactData, setContactData] = useState({
    username: "",
    password: "",
    
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((previousData) => ({ ...previousData, [name]: value }));
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
      <div className=" text-center pt-5">
       
        <div className=" container h-50 w-50 border bg-primary-subtle rounded-3  shadow mb-4">
           <h1>Login </h1>
          <form  onSubmit={handleSubmit}>
            <div className="mt-3 fs-5 mb-3">
              <label htmlFor="username">User Name : </label>
              <input
                required
                type="text"
                name="username"
                id="username"
                value={contactData.username}
                onChange={handleChange}
                placeholder="Enter your User Name"
                className="text-primary ms-5"
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
                placeholder="Enter your password"
                className="text-primary  ms-lg-5"
              />
            </div>

            

            <div className="mb-5">
                {/* <button type="register" className="btn  btn-primary me-4">
                {" "}
                Register
              </button> */}
              
              <button type="submit" className="btn btn-success px-4">
                {" "}
                {isLoading ? "Loading" : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
