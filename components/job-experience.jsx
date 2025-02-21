import PropTypes from "prop-types";

export default function JobExperience({ setShowJob }) {
    return (
        <div className="container">
          <button className="yes" onClick={() => setShowJob(false)}>Yes</button>
        </div>
    );
}

JobExperience.propTypes = {
    setShowJob: PropTypes.func.isRequired,
}