import PropTypes from "prop-types";
import "../styles/job-experience.css";
import { useContext } from "react";
import { PersonalInfoContext } from "../src/context/personal-info-context.jsx"
import { useFormFunctions } from "../src/form-functions.jsx";

export default function JobExperience({ setShowJob }) {
    const personalInfoRefs = useContext(PersonalInfoContext);
    const inputIds = ["positionTitle", "companyName", "mainResponsibilities", "dateFrom", "dateUntil"];

    const {
        formData,
        allEntries,
        handleKeyPress,
        handleClickButton,
        handleDoneButton,
        handleChange
        } = useFormFunctions(setShowJob, inputIds);

    return (
        <>
            <div className="wrapper">
                <div className="header">
                    <div className="personal-info">
                        {Object.entries(personalInfoRefs.current).map(([key,value]) => (
                                <div key={key} className="personal-info-item" id={key}>
                                    {value}
                                </div>    
                        ))}
                    </div>
                    <div className="header-right">
                        <button 
                            className="done"
                            onClick={handleDoneButton}>
                            Done
                        </button>
                    </div>
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
    </>
    );
}

JobExperience.propTypes = {
    setShowJob: PropTypes.func.isRequired,
}