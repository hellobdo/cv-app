import Animation from "../components/animation";
import Intro from "../components/intro";
import PersonalInfo from "./personal-info"; 
import JobExperience from "./job-experience";
import { useState } from "react";

export default function Flow() {
    const [showIntro, setShowIntro] = useState(true);
    const [showPersonalInfo, setShowPersonalInfo] = useState(false);
    const [showJob, setShowJob] = useState(false);
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
        {showJob && <JobExperience/>}
      </>
    )
  }
