import "../styles/intro.css";

const introText = "Hey there, do you want to make your own CV?"
const commaIndex = introText.indexOf(",");
const totalChars = introText.length - 3;

function Intro() {
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
        </div>
    );
}
  
  export default Intro