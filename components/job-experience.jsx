import PropTypes from "prop-types";
import "../styles/job-experience.css";
import { useState } from "react";

export default function JobExperience({ setShowJob }) {
    const [formData, setFormData] = useState({});
    const [allEntries, setAllEntries] = useState([]);
    const inputIds = ["positionTitle", "companyName", "mainResponsibilities", "dateFrom", "dateUntil"];

    const entries = () => {
        setAllEntries([...allEntries, { ...formData }]);
        console.log([...allEntries, { ...formData }]);
        setFormData({}); 
    };


    const handleKeyPress = (event) => {
        if (event.key === "Enter" && event.target.id === "dateUntil") {
            entries();
        }
    };

    const handleClickButton = () => {
        const isAnyEmpty = inputIds.some((id) => !formData[id] || formData[id].trim() === "");
        if (isAnyEmpty) {
            return;
        } else
            entries();
    }

    const handleDoneButton = () => {
        if (allEntries.length === 0) return
        setShowJob(false);
    }

    const handleChange = (e, id) => {
        let value = e.target.value;
        if (id === "companyName" || id === "positionTitle" || id === "mainResponsibilities") {
            value = value.replace(/[^A-Za-z ]/g, ""); // Allow only letters and spaces
            e.target.value = value;
        }
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: value
        }));
    }
        

    return (
        <div className="wrapper">
        <div className="header">
            <div className="current-status">
                <div className="firstName"></div>
                <div className="lastName"></div>
                <div className="email"></div>
                <div className="phone"></div>
            </div>
            <button 
                className="done"
                onClick={handleDoneButton}>
                Done
            </button>
        </div>
        <div className="job-container">
            <div className="job-experience">
                {allEntries.map((entry, index) => (
                    <div key={index} className="job-entry">
                        <h3>{entry.positionTitle}</h3>
                        <p>Company: {entry.companyName}</p>
                        <p>Main Responsibilities: {entry.mainResponsibilities}</p>
                        <p>From: {entry.dateFrom}</p>
                        <p>Until: {entry.dateUntil}</p>
                    </div>
                ))}
            </div>
                <div className="inputs">
                    {inputIds.map((id) => (
                        id === "mainResponsibilities" ? (
                            <textarea
                                key={id}
                                id={id}
                                name={id}
                                value={formData[id] || ""}
                                placeholder="main responsibilities: drink coffee, check Instagram, what else?"
                                className="inputField"
                                onKeyDown={handleKeyPress}
                                onChange={handleChange}
                            />
                        ) : (
                            <input
                                key={id}
                                type={id === "dateFrom" ? "date" : id === "dateUntil" ? "date" : "text"}
                                id={id}
                                name={id}
                                value={formData[id] || ""}
                                placeholder={
                                    id === "companyName"
                                        ? "that sucker of an employer"
                                        : id === "positionTitle"
                                        ? "title: genius master of growth, was it?"
                                        : ""
                                }
                                className="inputField"
                                onKeyDown={handleKeyPress}
                                onChange={handleChange}
                            />
                        )
                    ))}
                    <button className="save" onClick={handleClickButton}>Save</button>
                </div>
        </div>
        </div>
    );
}

JobExperience.propTypes = {
    setShowJob: PropTypes.func.isRequired,
}