import "../styles/animation.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Animation({ setShowAnimation }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setShowAnimation(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [setShowAnimation]);

    return (
      <>
       {isLoading &&
       <div className="container">
            <div className="loading">Loading...</div>
       </div>
       }
      </>
    );
  }


Animation.propTypes = {
    setShowAnimation: PropTypes.func.isRequired,
}