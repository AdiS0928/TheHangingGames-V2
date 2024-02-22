import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS file
import ButtonBox from '../../1_Assets/MainAssets/ButtonBox.png';

const WhackAMoleGame = () => {
  const [holes, setHoles] = useState([]);
  const [score, setScore] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const [lastHole, setLastHole] = useState(null);

  useEffect(() => {
    const holes = document.querySelectorAll('.hole');
    setHoles(holes);
  }, []);

  const randomTime = (min, max) => Math.round(Math.random() * (max - min) + min);
 
  const randomHole = (holes) => {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      console.log('Ah nah, that\'s the same one bud');
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
    setScore(0);
    setTimeUp(false);
    setLastHole(null);
    peep();
    setTimeout(() => setTimeUp(true), 10000);
  };

  const bonk = (e) => {
    if (!e.isTrusted) return; // cheater!
    setScore(score + 1);
    e.target.parentNode.classList.remove('up');
  };

  return (
    <div className='mainwhack1'>
      <div className='mainwhack2'>
        <h1 className='h1whack'>WHACK-A-MOLE!</h1>
        <h1 className="score" >SCORE: {score} </h1>
        
        <div className="game">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className={`hole hole${index + 1}`}>
              <div className="mole" onClick={bonk}></div>
            </div>
          ))}
        </div>
      </div>
      
      <button onClick={startGame}  style={{marginTop: '80px', backgroundColor: 'transparent', border: 'none', height: '90px', width: '370px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${ButtonBox}')`, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'grab', fontSize: '30px', color: 'white'}} >START</button>
    </div>
  );
};

export default WhackAMoleGame;
