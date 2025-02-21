import "../styles/personal-info.css";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function PersonalInfo({ setShowPersonalInfo }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputIds = ["firstName", "lastName", "email", "phone"];
  const inputRefs = useRef([]); // Store input references
  const personalInfoRefs = useRef([]);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    if (inputRefs.current[currentIndex]) {
      inputRefs.current[currentIndex].focus(); // Automatically focus on the visible input
    }
  }, [currentIndex]);

  const handleKeyPress = (event) => {
    let value = event.target.value;
    let id = event.target.id;
    if (event.key === "Enter") {
      if(id === "email" && !emailRegex.test(value)) {
        return
      }
      personalInfoRefs.current.push(value);
      console.log(personalInfoRefs.current);
      if (currentIndex < inputIds.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (currentIndex === inputIds.length -1 ) {
        setShowPersonalInfo(false);
      }
    }
  };

  const handleChange = (e, id) => {
    let value = e.target.value;
    if (id === "email") {
      !emailRegex.test(value);
    } else if (id === "phone") {
      // Allow only numbers
      value = value.replace(/\D/g, ""); // Remove non-numeric characters
    } else {
      // Allow only letters and spaces
      value = value.replace(/[^A-Za-z ]/g, "");
    }
    e.target.value = value; // Update the input field
  };
  
    return (
      <>
      <div className="container">
      {inputIds.map((id, index) => (
        <input
          key={id}
          ref={(el) => (inputRefs.current[index] = el)} // Store reference
          type={id === "email" ? "email" : id === "phone" ? "tel" : "text"}
          id={id}
          name={id}
          placeholder={
            id === "firstName"
              ? "That what people call you"
              : id === "lastName"
              ? "surname, sir/madam"
              : id === "email"
              ? "myself@bestdomain.com"
              : "Your phone number right here"
          }
          className={index === currentIndex ? "visible" : "invisible"}
          onChange={(e) => handleChange(e, id)}
          onKeyDown={handleKeyPress}
        />
      ))}
      </div>
      </>
    )
  }

  PersonalInfo.propTypes = {
      setShowPersonalInfo: PropTypes.func.isRequired,
  }