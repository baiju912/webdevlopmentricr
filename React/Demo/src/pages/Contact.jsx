import React from "react";
import { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [Isloading, setIsloading] = useState("");

  const handleClearForm = () => {
    setFullName("");
    setEmail();
    setMessage();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      const response = await fetch(
        "https://makeup-api.herokuapp.com/api/v1/products.json"
      );
      const data = {
        fullName,
        email,
        message,
      };
      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsloading(false);
    }
    handleClearForm();
  };

  return (
    <>
      <div className="text-center">
        <h1>Contact Us</h1>
        <div className="container">
          <form>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input required
                type="text"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your Name"
                className="text-primary"
              />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input required
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="text-primary"
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
              required
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                className="text-primary"
              ></textarea>
            </div>
            <div>
              <button type="reset">Clear Form</button>
              <button type="submit"> { Isloading? "Loading" : "Submit"} </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
