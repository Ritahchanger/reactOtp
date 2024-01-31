import React, { useState } from "react";

const App = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [formset, setFormset] = useState(false);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < otp.length - 1 && value !== "") {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allBoxesFilled = otp.every((digit) => digit !== "");
    if(allBoxesFilled){
      setFormset(true);
    }
  };

  return (
    <div className="h-screen flex mx-auto max-w-2xl flex-col items-center justify-center">
      {!formset ? (
        <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
          <div className="h-400 w-400 flex justify-center items-center max-w-2xl mx-auto">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                id={`otp-input-${index}`}
                className="appearance-none w-12 h-12 mx-1 text-4xl border border-gray-300 rounded text-center focus:outline-none focus:border-indigo-500"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            ))}
          </div>
          <input
            type="submit"
            value="SUBMIT"
            className="my-10 p-4 bg-blue-500 mx-auto text-white rounded cursor-pointer transition-colors hover:bg-green-500"
          />
        </form>
      ) : (
        <div>
          <h2>The form is set</h2>
        </div>
      )}
    </div>
  );
};

export default App;
