import { createContext, useRef } from "react";
import PropTypes from "prop-types";

export const PersonalInfoContext = createContext();

export const PersonalInfoProvider = ({ children }) => {
  const personalInfoRefs = useRef([]);
  return (
    <PersonalInfoContext.Provider value={personalInfoRefs}>
      {children}
    </PersonalInfoContext.Provider>
  );
};

PersonalInfoProvider.propTypes = {
    children: PropTypes.func.isRequired,
}