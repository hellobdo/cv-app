import "../styles/intro.css";
import "../styles/button.css";
import PropTypes from "prop-types";

const introText = "Hey there, do you want to make your own CV?"
const commaIndex = introText.indexOf(",");
const totalChars = introText.length - 3;

export default function Intro({ setShowIntro }) {
    return (
        <div className="intro-container">
            <div 
                className="intro-text"
                style= {{
                    "--comma-count": commaIndex,
                    "--total-count": totalChars
                }}
            >
                {introText}
            </div>
            <button className="yes" onClick={() => setShowIntro(false)}>Yes</button>
        </div>
    );
}

Intro.propTypes = {
    setShowIntro: PropTypes.func.isRequired,
}