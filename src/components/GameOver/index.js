import React from 'react';
import '../1_Assets/Main.css';
import { Link } from 'react-router-dom';
import Logo from '../1_Assets/MainAssets/HomeLogo.png';
import ButtonBox from '../1_Assets/MainAssets/ButtonBox.png';

const GameOver = () => { 

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh', width: '100vw'}}>
      
      <img style={{width: '20vw'}} className='GUGUMainLogo' alt='GUGULogo' src={Logo}/>
      <h1 style={{fontSize: '6vw', fontWeight: '300', marginTop: '50px'}}>GAME OVER</h1>

      <h1 style={{fontSize: '2.5vw', marginTop: '0', fontWeight: '300'}}>lnsert coin to continue</h1>
      <h1 style={{fontSize: '2.5vw', marginTop: '-15px', fontWeight: '300', marginBottom: '100px'}}>Oh wait, wrong era!</h1>

      <Link to="/Dashboard" style={{textDecoration: 'none'}}>
          <button  style={{backgroundColor: 'transparent', border: 'none', height: '90px', width: '370px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${ButtonBox}')`, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px', cursor: 'grab', fontSize: '30px', color: 'white'}} >RETURN</button>
      </Link>

    </div>
  );
};

export default GameOver;
