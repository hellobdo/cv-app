import { useState } from "react";

export const useFormFunctions = (setter, inputIds) => {
    const [formData, setFormData] = useState({});
    const [allEntries, setAllEntries] = useState([]);

    const entries = () => {
        setAllEntries([...allEntries, { ...formData }]);
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
        setter(false);
    }
    
    const handleChange = (e, id, ...ids) => {
        let value = e.target.value;
        for (const item of ids) {
            if (id === item) {
                value = value.replace(/[^A-Za-z ]/g, ""); // Allow only letters and spaces
                e.target.value = value;
            }
        }
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: value
        }));
    }


    return {
        formData,
        allEntries,
        entries,
        handleKeyPress,
        handleClickButton,
        handleDoneButton,
        handleChange
    }
}