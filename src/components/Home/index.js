import React from 'react';
import '../1_Assets/Main.css';
import { Link } from 'react-router-dom';
import Logo from '../1_Assets/MainAssets/HomeLogo.png';
import ButtonBox from '../1_Assets/MainAssets/ButtonBox.png';

const Home = () => { 

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh', width: '100vw'}}>
      
      <img style={{width: '40vw'}} alt='GUGULogo' src={Logo}/>

      <Link to="/Registration" className='start-btn' style={{textDecoration: 'none'}}>
        <button  style={{backgroundColor: 'transparent', border: 'none', height: '90px', width: '370px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${ButtonBox}')`, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px', cursor: 'grab', fontSize: '30px', color: 'white'}} >Let's Go</button>
      </Link>

    </div>
  );
};

export default Home;
