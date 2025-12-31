import React, { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullname: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
    message: "",
    religion: "",
    gender:"",
    skill : [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let temp = contactData.skill;
      if (checked) {
        temp.push(value);
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      } else {
        temp = Object.values(temp); 
        temp = temp.filter((word) => word !== value); //Remove the Undersired Value
        setContactData((previousData) => ({ ...previousData, [name]: temp }));
      }
    } else {
      setContactData((previousData) => ({ ...previousData, [name]: value }));
    }
  };

  const handleClearForm = () => {
    setContactData({
      fullname: "",
      email: "",
      phone: "",
      city: "",
      subject: "",
      message: "",
      religion: "",
      gender:"",
      skill : [],
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
        <h1>Contact Us </h1>
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
              <label htmlFor="subject">Subject : </label>
              <input
                required
                type="text"
                name="subject"
                id="subject"
                value={contactData.subject}
                onChange={handleChange}
                placeholder="Enter your Subject"
                className="text-primary  ms-lg-5"
              />
            </div>
            <div className="mt-3 fs-5 mb-3">
              <label htmlFor="religion">Religion</label>
              <select
                name="religion"
                id="religion"
                onChange={handleChange}
                value={contactData.religion}
                className=" ms-lg-5"
              >
                <option value="">--Select Religion--</option>
                <option value="islam">Islam</option>
                <option value="hinduism">Hinduism</option>
                <option value="christianity">Christianity</option>
                <option value="buddhism">Buddhism</option>
                <option value="jainism">Jainism</option>
                <option value="sikhism">Sikhism</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mt-3 fs-5 mb-3">
              <label htmlFor="gender">Gender</label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={contactData.gender === "male"}
                className=" ms-5"
              />{" "}
              Male
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={contactData.gender === "female"}
                className=" ms-3"
              />{" "}
              Female
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={handleChange}
                checked={contactData.gender === "other"}
                className="  ms-3"
              />{" "}
              Other
            </div>

            <div className="mt-3 fs-5 mb-3">
              <label htmlFor="skill">Skill known</label>
              <input
                type="checkbox"
                name="skill"
                value="html"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "html"
                  )
                    ? true
                    : false
                }
                className="  ms-5"
              />{" "}
              HTML
              <input
                type="checkbox"
                name="skill"
                value="css"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "css"
                  )
                    ? true
                    : false
                }
                className="  ms-3"
              />{" "}
              CSS
              <input
                type="checkbox"
                name="skill"
                value="js"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).find(
                    (word) => word === "js"
                  )
                    ? true
                    : false
                }
                className="  ms-3"
              />{" "}
              JS
              <input
                type="checkbox"
                name="skill"
                value="react"
                onChange={handleChange}
                checked={
                  Object.values(contactData.skill).includes("react")
                }
                className="  ms-3"
              />{" "}
              React
            </div>

            <div className="mb-4 fs-5">
              <label htmlFor="message">Message : </label>
              <textarea
                required
                name="message"
                id="message"
                value={contactData.message}
                onChange={handleChange}
                placeholder="Enter your Message"
                className=" text-primary ms-5"
              ></textarea>
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

export default Contact;
