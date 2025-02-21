import Animation from "./animation.jsx";
import Intro from "./intro.jsx";
import PersonalInfo from "./personal-info.jsx"; 
import JobExperience from "./job-experience.jsx";
import Education from "./educational.jsx";
import { useState } from "react";

export default function Flow() {
    const [showIntro, setShowIntro] = useState(true);
    const [showPersonalInfo, setShowPersonalInfo] = useState(false);
    const [showJob, setShowJob] = useState(false);
    const [showEducation, setShowEducation] = useState(false);
    const [showAnimation, setShowAnimation] = useState(false)

    return (
      <>
        {showIntro && <Intro setShowIntro={() => {
            setShowIntro(false);
            setShowAnimation(true);
        }}/>}
        {showAnimation && <Animation setShowAnimation={() => {
            setShowAnimation(false);
            setShowPersonalInfo(true);
        }}/>}
        {showPersonalInfo && <PersonalInfo setShowPersonalInfo={() => {
            setShowPersonalInfo(false);
            setShowJob(true);
        }}/>}
        {showJob && <JobExperience setShowJob={() => {
            setShowJob(false);
            setShowEducation(true);
        }}/>}
        {showEducation && <Education/>}
      </>
    )
  }