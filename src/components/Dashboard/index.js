import React from 'react';
import { Link } from 'react-router-dom';
import '../1_Assets/Main.css';
import Logo from '../1_Assets/MainAssets/HomeLogo.png';

import Whackamole from '../1_Assets/Thumbnails/Whackamole.jpg';
import Hangman from '../1_Assets/Thumbnails/Hangman.jpg';
import MemoryGame from '../1_Assets/Thumbnails/MemoryGame.jpg';
import Puzzle from '../1_Assets/Thumbnails/Puzzle.jpg';
import Flappy from '../1_Assets/Thumbnails/Flappy.jpg';
// import TicTacToe from  '../1_Assets/Thumbnails/TicTacToe.png';

const buttonStyle = {
  height: '150px',
  width: '250px',
  display: 'flex',
  flexDirection: 'column',
  margin: '5px',
  padding: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  borderRadius: '40px',
  border: '1px solid grey',
  // clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',

  clipPath: 'polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)',
  
};

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh', width: '100vw' }}>

      <img style={{ width: '200px' }} className='GUGUMainLogo' alt='GUGULogo' src={Logo} />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
        <div style={{ ...buttonStyle, backgroundImage: `url(${Whackamole})` }}>
          <Link to="/whackamole" className='start-btn' style={{ textDecoration: 'none', zIndex: '3' }}>
            WHACK-A-MOLE
          </Link>
        </div>

        <div style={{ ...buttonStyle, backgroundImage: `url(${Hangman})` }}>
          <Link to="/hangman" className='start-btn' style={{ textDecoration: 'none', zIndex: '3' }}>
            HANGMAN
          </Link>
        </div>

        <div style={{ ...buttonStyle, backgroundImage: `url(${MemoryGame})` }}>
          <Link to="/memorygame" className='start-btn' style={{ textDecoration: 'none', zIndex: '3' }}>
            MEMORY GAME
          </Link>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
        <div style={{ ...buttonStyle, backgroundImage: `url(${Puzzle})` }}>
          <Link to="/puzzle" className='start-btn' style={{ textDecoration: 'none', zIndex: '3' }}>
            PUZZLE GAME
          </Link>
        </div>

        <div style={{ ...buttonStyle, backgroundImage: `url(${Flappy})` }}>
          <Link to="/flappy" className='start-btn' style={{ textDecoration: 'none', zIndex: '3' }}>
            FLAPPY BIRD
          </Link>
        </div>

        {/* <div style={{ ...buttonStyle, backgroundImage: `url(${TicTacToe})` }}>
          <Link to="/TicTacToe" className='start-btn' style={{ textDecoration: 'none', zIndex: '3' }}>
            TIC TAC TOE
          </Link>
        </div> */}
      </div>



    </div>
  );
};

export default Dashboard;
