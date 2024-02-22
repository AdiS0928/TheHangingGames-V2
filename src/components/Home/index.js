import React from 'react';
import '../1_Assets/Main.css';
import { Link } from 'react-router-dom';
import Logo from '../1_Assets/MainAssets/HomeLogo.png';

const Home = () => { 

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', width: '100vw'}}>
      {/* <h1 style={{fontSize: '10vw'}}>Welcome</h1> */}
      
      <img style={{width: '40vw', marginTop: '60px'}} alt='GUGULogo' src={Logo}/>

      <Link to="/Registration" className='start-btn' style={{textDecoration: 'none'}}>
        <button style={{width: '10vw', height: '80px', fontSize: '30px'}}>Let's Go</button>
      </Link>

    </div>
  );
};

export default Home;
