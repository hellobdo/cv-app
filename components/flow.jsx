import Intro from "../components/intro";
import PersonalInfo from "./personal-info"; 
import JobExperience from "./job-experience";
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