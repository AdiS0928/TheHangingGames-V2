import React from 'react';
import { Link } from 'react-router-dom';
import '../1_Assets/Main.css';
import Logo from '../1_Assets/MainAssets/Logo2.png';

import Whackamole from '../1_Assets/Thumbnails/Whackamole.jpg';
import Hangman from '../1_Assets/Thumbnails/Hangman.jpg';
import MemoryGame from '../1_Assets/Thumbnails/MemoryGame.jpg';
import Puzzle from '../1_Assets/Thumbnails/Puzzle.jpg';
import Flappy from '../1_Assets/Thumbnails/Flappy.jpg';


const Dashboard = () => { 

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', width: '100vw'}}>

        <img style={{width: '100px', marginTop: '60px'}} alt='thhlogo' src={Logo}/>

        <h1 style={{width: '100%', textAlign:'center'}}>THE HANGING GAMES</h1>  

        <div className='HomeMainDiv'>



          <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'column', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${Whackamole})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/whackamole" className='start-btn' style={{textDecoration: 'none', zIndex: '3'}}>
              WHACK-A-MOLE
            </Link>
            <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'row', margin: '5px', padding: '10px', zIndex: '1', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', borderRadius: '15px', opacity: '0.4'}}>
              
            </div>
          </div>

          <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'column', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${Hangman})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/hangman" className='start-btn' style={{textDecoration: 'none', zIndex: '3'}}>
              HANGMAN
            </Link>
            <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'row', margin: '5px', padding: '10px', zIndex: '1', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', borderRadius: '15px', opacity: '0.4'}}>
              
            </div>
          </div>

          <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'column', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${MemoryGame})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/memorygame" className='start-btn' style={{textDecoration: 'none', zIndex: '3'}}>
              MEMORY GAME
            </Link>
            <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'row', margin: '5px', padding: '10px', zIndex: '1', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', borderRadius: '15px', opacity: '0.4'}}>
              
            </div>
          </div>


          <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'column', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${Puzzle})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/puzzle" className='start-btn' style={{textDecoration: 'none', zIndex: '3'}}>
              PUZZLE GAME
            </Link>
            <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'row', margin: '5px', padding: '10px', zIndex: '1', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', borderRadius: '15px', opacity: '0.4'}}>
              
            </div>
          </div>


          <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'column', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${Flappy})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/flappy" className='start-btn' style={{textDecoration: 'none', zIndex: '3'}}>
              FLAPPY BIRD
            </Link>
            <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'row', margin: '5px', padding: '10px', zIndex: '1', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', borderRadius: '15px', opacity: '0.4'}}>
              
            </div>
          </div>


        </div>
    </div>
  );
};

export default Dashboard;
