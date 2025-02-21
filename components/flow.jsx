import Intro from "../components/intro.jsx";
import PersonalInfo from "./personal-info.jsx"; 
import JobExperience from "./job-experience.jsx";
import { useState } from "react";

export default function Flow() {
    const [showIntro, setShowIntro] = useState (true);
    const [showJob, setShowJob] = useState (true);

    return (
      <>
        {showIntro ? <Intro setShowIntro={setShowIntro} /> : <PersonalInfo />}
        {showJob ? <PersonalInfo setShowJob={setShowJob} /> : <JobExperience />}
      </>
    )
  }