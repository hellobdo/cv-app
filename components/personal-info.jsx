import "../styles/personal-info.css";
import { useState, useEffect, useRef } from "react";

export default function PersonalInfo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputIds = ["firstName", "lastName", "email", "phone"];
  const inputRefs = useRef([]); // Store input references

  useEffect(() => {
    if (inputRefs.current[currentIndex]) {
      inputRefs.current[currentIndex].focus(); // Automatically focus on the visible input
    }
  }, [currentIndex]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      if (currentIndex < inputIds.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    }
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
          onKeyDown={handleKeyPress}
        />
      ))}
      </div>
      </>
    )
  }