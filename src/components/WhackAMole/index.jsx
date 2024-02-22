import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS file

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
        <h1 className='h1whack'>Whack-a-mole! </h1>
        <h1 className="score" >Score: {score} </h1>

        {/* <div className="controls">
          <button onClick={startGame} style={{width: '100px', height: '30px', backgroundColor: 'black', color: '#00f526', border: '1px solid #00f526', cursor: 'grab', zIndex: '100000000000'}}>Start!</button>
        </div> */}
        
        <div className="game">
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className={`hole hole${index + 1}`}>
              <div className="mole" onClick={bonk}></div>
            </div>
          ))}
        </div>
      </div>
      
      <button onClick={startGame} style={{width: '100px', height: '30px', backgroundColor: 'black', color: '#00f526', border: '1px solid #00f526', cursor: 'grab', zIndex: '100000000000'}}>Start!</button>
    </div>
  );
};

export default WhackAMoleGame;
