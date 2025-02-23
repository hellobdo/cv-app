import PropTypes from "prop-types";
import { useFormFunctions } from "../src/form-functions.jsx";

export default function Education({ setShowEducation }) {
    const inputIds = ["studyTitle", "schoolName", "description", "dateFrom", "dateUntil"];
    
    const {
        formData,
        allEntries,
        handleKeyPress,
        handleClickButton,
        handleDoneButton,
        handleChange
        } = useFormFunctions(setShowEducation, inputIds);


    return (
        <>
            <div className="wrapper">
            <div className="studies-container">
                <div className="study-experience">
                    {allEntries.map((entry, index) => (
                        <div key={index} className="study-entry">
                            <h3>{entry.studyTitle}</h3>
                            <p>School: {entry.schoolName}</p>
                            <p>Description: {entry.description}</p>
                            <p>From: {entry.dateFrom}</p>
                            <p>Until: {entry.dateUntil}</p>
                        </div>
                    ))}
                </div>
                    <div className="inputs">
                        {inputIds.map((id) => (
                            id === "description" ? (
                                <textarea
                                    key={id}
                                    id={id}
                                    name={id}
                                    value={formData[id] || ""}
                                    placeholder="main responsibilities: biology, physics, and comedy?"
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
                                        id === "schoolName"
                                            ? "Standford?"
                                            : id === "studyTitle"
                                            ? "title: PhD in Quantum Comedy"
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

Education.propTypes = {
    setShowEducation: PropTypes.func.isRequired,
}