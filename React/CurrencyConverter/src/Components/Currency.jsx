import React, { useState } from "react";
import toast from "react-hot-toast";
import CountryData from "../assets/CountryData.json";

import axios from "axios";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const Currency = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromAmt, setFromAmt] = useState("");
  const [toAmt, setToAmt] = useState("");

  const swap = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
  }


  const Convert = async () => {
    if (!from || !to || !fromAmt) {
      toast.error("Some fields missing");
      return;
    }

    try {
      const res = await axios.get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from
          .split(" ")[0]
          .toLowerCase()}.json`
      );

      setToAmt(
        (
          fromAmt *
          res.data[from.split(" ")[0].toLowerCase()][
            to.split(" ")[0].toLowerCase()
          ]
        ).toFixed(2)
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="bg-amber-50 h-screen p-5">
        <div className=" w-2xl bg-[#e2eafc] rounded shadow border p-3 mx-auto space-y-5">
          <div className="flex justify-between w-full gap-2">
            <fieldset className="border bg-white border-blue-500  rounded">
              <legend className="ms-5 font-bold"> From </legend>
              <div className="flex gap-2  w-75 px-2">
                {from && (
                  <img
                    src={`https://flagsapi.com/${
                      from.split(" ")[1]
                    }/flat/48.png`}
                    alt="image"
                  />
                )}
                <select
                  name="from"
                  id="form"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="p-3 overflow-hidden w-full focus:outline-none"
                >
                  <option value=""> --Select Country--</option>
                  {CountryData.map((country, idx) => (
                    <option
                      value={country.CurrencyCode + " " + country.CountryCode}
                      key={idx}
                    >
                      {country.CountryName}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>

            <div>
              <button onClick={swap} className=" hover:text-green-500 hover: duration-500 hover:scale-120">
                <FaArrowRightArrowLeft className="flex justify-center items-center mt-7 scale-100 duration-300 text-2xl" />
              </button>
            </div>

            <fieldset className="border bg-white border-blue-500  rounded">
              <legend className="ms-5 font-bold">To</legend>
              
              <div className="flex gap-2 w-75 px-2">
                {to && (
                  <img
                    src={`https://flagsapi.com/${to.split(" ")[1]}/flat/48.png`}
                    alt="image"
                  />
                )}
                <select
                  name="to"
                  id="to"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="p-3 overflow-hidden w-full focus:outline-none"
                >
                  <option value=""> --Select Country--</option>
                  {CountryData.map((country, idx) => (
                    <option
                      value={country.CurrencyCode + " " + country.CountryCode}
                      key={idx}
                    >
                      {country.CountryName}
                    </option>
                  ))}
                </select>
              </div>
            </fieldset>
          </div>

          <div className=" flex gap-3 font-bold items-center">
            <label htmlFor="fromAmt">Amount:</label>
            <input
              type="number"
              name="fromAmt"
              value={fromAmt}
              onChange={(e) => setFromAmt(e.target.value)}
              placeholder="Enter the amount to convert"
              className=" bg-white border rounded p-3 w-full"
            />
          </div>

          <button
            className="bg-green-400 text-green-800  py-2 border rounded hover:bg-green-500 hover: text-white hover:shadow-md w-full"
            onClick={Convert}
          >
            Convert Amount
          </button>

          <div className="border" />

          <div className="flex gap-3 text-center bg-green-300 shadow-2xl rounded-3xl mb-10">
            <label
              className="text-center mx-auto py-3 text-2xl "
              htmlFor="toAmt"
            >
              {" "}
              Converted Amount :{" "}
              {toAmt
                ? `${fromAmt} ${from.split(" ")[0]} = ${toAmt} ${
                    to.split(" ")[0]
                  }`
                : "XXXXX"}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Currency;
