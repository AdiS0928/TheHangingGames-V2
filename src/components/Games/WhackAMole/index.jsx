import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 
import ButtonBox from '../../1_Assets/MainAssets/ButtonBox.png';

const WhackAMoleGame = () => {
  const [holes, setHoles] = useState([]);
  const [score, setScore] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const [lastHole, setLastHole] = useState(null);
  const [remainingTime, setRemainingTime] = useState(30); 
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    const holes = document.querySelectorAll('.hole');
    setHoles(holes);
  }, []);

  const randomTime = (min, max) => Math.round(Math.random() * (max - min) + min);

  const randomHole = (holes) => {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      console.log("Ah nah, that's the same one bud");
      return randomHole(holes);
    }
    setLastHole(hole);
    return hole;
  };

  const peep = () => {
    if (!timeUp) {
      const time = randomTime(200, 1000);
      const hole = randomHole(holes);
      hole.classList.add('up');
      setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep(); 
      }, time);
    }
  };

  const startGame = () => {

    setButtonDisabled(true);
    setScore(0);
    setTimeUp(false);
    setLastHole(null);
    setRemainingTime(30); 
    peep();
    setTimeout(() => {
      setTimeUp(true);
      navigate('/GameOver');
    }, 30000); 
    startCountdown(); 
  };

  const startCountdown = () => {
    const countdownInterval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
      if (remainingTime === 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  };

  const bonk = (e) => {
    if (!e.isTrusted) return; 
    setScore(score + 1);
    e.target.parentNode.classList.remove('up');
  };

  return (
    <div className='mainwhack1'>
      <div className='mainwhack2'>
        <h1 className='h1whack' style={{fontWeight: '300'}}>WHACK-A-MOLE!</h1>
        <h1 className="score" style={{fontWeight: '300'}}>TIME REMAINING: <span className="TRemain">{remainingTime}</span></h1>
        <h1 className="score" style={{fontWeight: '300'}}>SCORE: {score}</h1>

        <div className="game">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className={`hole hole${index + 1}`}>
              <div className="mole" onClick={bonk}></div>
            </div>
          ))}
        </div>
      </div>
      <button id='StartGame' onClick={startGame} disabled={buttonDisabled} style={{ marginTop: '80px', backgroundColor: 'transparent', border: 'none', height: '90px', width: '370px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${ButtonBox}')`, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'grab', fontSize: '30px', color: 'white', visibility: buttonDisabled ? 'hidden' : 'visible' }} > START </button>
    </div>
  );
};

export default WhackAMoleGame;
