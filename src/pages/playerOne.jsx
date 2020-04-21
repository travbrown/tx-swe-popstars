import React, {useState, useEffect} from 'react';
import './countdown.css';



const PlayerOnePage = () => {
    const FULL_DASH_ARRAY = 3000;
    const WARNING_THRESHOLD = 5;
    const ALERT_THRESHOLD = 3;

    const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
    };

    const TIME_LIMIT = 5;
    let remainingPathColor = COLOR_CODES.info.color;

    const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
    useEffect(() => {
        const interval = timeLeft > 0 && setInterval(() => {
            setTimeLeft(timeLeft => timeLeft - 1);
            setCircleDasharray();
            setRemainingPathColor(timeLeft);
          }, 1000);
        if (timeLeft === 0) {   
            window.location.href="/PlayerOneGame";
        }
        return () => clearInterval(interval);
    }, [timeLeft, setCircleDasharray, setRemainingPathColor]);

    
    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return `${minutes}:${seconds}`;
    }
    
    function setRemainingPathColor(timeLeft) {
      const { alert, warning, info } = COLOR_CODES;
      if (timeLeft <= alert.threshold) {
        document
          .getElementById("base-timer-path-remaining")
          .classList.remove(warning.color);
        document
          .getElementById("base-timer-path-remaining")
          .classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document
          .getElementById("base-timer-path-remaining")
          .classList.remove(info.color);
        document
          .getElementById("base-timer-path-remaining")
          .classList.add(warning.color);
      }
    }
    
    function calculateTimeFraction() {
      const rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    }
    
    function setCircleDasharray() {
      const circleDasharray = `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 3000`;
      document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
    }    

    var name1 = localStorage.getItem('name1'); 
    var name2 = localStorage.getItem('name2'); 

    return (
      <div className="App">
        <nav class="item">
            <h2 id="username"> {name1} </h2>
            <h2 id="subject-getreadyp1"> Get ready </h2>
          </nav>
        
       <div className="centerItems">
            <div class="base-timer">
            <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g class="base-timer__circle">
                <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                <path
                    id="base-timer-path-remaining"
                    stroke-dasharray="3000"
                    class="base-timer__path-remaining ${remainingPathColor}"
                    d="
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0
                    " ></path>
                </g>
            </svg>
            <span id="base-timer-label" class="base-timer__label">{formatTime(timeLeft)}</span>
            </div>
</div>
        
      </div>
    );
};

export default PlayerOnePage;