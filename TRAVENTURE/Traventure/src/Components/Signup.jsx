import React, { useState, useContext } from "react";
import "../Styles/signup.css";
import axios from "axios";
import logo from "../assets/logo.png";
import EmailContext from "../context/EmailContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { email, setEmail } = useContext(EmailContext);
  const [showOtpSection, setShowOtpSection] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [hasFetchError, setHasError] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const navigate = useNavigate();

  const isButtonDisabled = () => {
    return !email.includes("@") || email.length < 5;
  };

  const [isAlreadyUser,setIsAlreadyUser] = useState(false)
  const handleGetOtp = async (e) => {
    e.preventDefault();
    setIsButtonPressed(true);
    try {
      const response = await axios.post(`http://localhost:8080/api/otp/send`, null, {
        params: { email: email },
      });
      if (response.data === "user already exist") {
        setIsAlreadyUser(true); 
        setTimeout(() => {
          navigate("/");
        }, 1500); 
      } else {
        setShowOtpSection(true);
      }
    } catch (error) {
      setHasError(true);
      setShowOtpSection(false);
      setIsButtonPressed(false);
    }
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const updatedOtp = [...otp];
      updatedOtp[index] = value;
      setOtp(updatedOtp);

      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 2}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      const prevInput = document.getElementById(`otp-${index}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    try {
      const response = await axios.post(`http://localhost:8080/api/otp/verify`, null, {
        params: { email, otp: enteredOtp },
      });

      if (response.data === "OTP Verified") {
        navigate("/register");
      } else {
        alert("Invalid OTP. Please try again.");
      }
    } catch (error) {
      alert("Verification failed. Please try again.");
    }
  };



  

  return (

    
    <div className="container signup">
      <div className="left">
        <h1>Welcome to TRAVENTURE!</h1>
        <h4>Track your Journey, not the Past</h4>
        <p>
          Set your sights on the world, let your dreams take flight,
          With Traventure as your guide, every step feels right.
          We’re more than a service — we’re your travel friend,
          From planning to exploring, support till the end.
          Curating journeys both near and far,
          From mountain trails to oceans under the stars.

          Tailored tours and handpicked stays,
          Smooth travels with memorable days.
          Whether solo, with friends, or family in tow,
          Traventure makes your wanderlust grow.
          Trust us to turn trips into lifelong treasure,
          With passion, care, and travel done with pleasure.
        </p>
      </div>

      <div className="right">
        

        {!showOtpSection && (
          <div className="number-input-section">
            <h1>Signup Here</h1>
            <form onSubmit={handleGetOtp}>  
              <input
                type="email"
                placeholder="Enter Email Address"
                id="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
              <button
                id="get-otp-btn"
                disabled={isButtonDisabled()}
                style={{ cursor: isButtonDisabled() ? "not-allowed" : "pointer" }}
              >
                {!isButtonPressed ? "Get OTP" : "Loading..."}
              </button>
            </form>
            
            {hasFetchError && <p id="otpFailed">⚡Something went wrong. Please try again.</p>}
            {isAlreadyUser &&<p id="alradyUserMsg">Welcome back {email} </p>}

          </div>
        )}


        {showOtpSection && (
          <div className="otp-verification-section">
            <h1>Verify OTP</h1>
            <p>
              Enter the verification code sent to "{email}".<br />
              Kindly check your spam folder if it's not in the inbox.
            </p>
            <div className="otp-type-section">
              <form onSubmit={handleVerifyOtp}>
                <div className="inputs">
                  {[...Array(6)].map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      id={`otp-${index + 1}`}
                      className="otp-input"
                      maxLength="1"
                      value={otp[index]}
                      onChange={(e) => handleOtpChange(e, index)}
                      onKeyUp={(e) => handleBackspace(e, index)}
                    />
                  ))}
                </div>
                <button id="otp-verify-btn" type="submit">
                  Verify
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
