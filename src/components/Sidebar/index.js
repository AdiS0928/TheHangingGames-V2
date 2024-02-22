import React from 'react';
import '../1_Assets/Main.css';
import Cloud from '../1_Assets/MainAssets/Cloud.png';
import Snail from '../1_Assets/MainAssets/Snail.png';
import NoIdea from '../1_Assets/MainAssets/NoIdea.png';
import '../1_Assets/Main.css';

const Sidebar = () => { 

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', height: '100%', width: '100vw', position: 'absolute', zIndex: '-1'}}>

        <img className="CloudRightNoIdea" style={{width: '20vw', position: 'absolute', right: '40px', top: '190px'}} alt='GUGULogo' src={NoIdea}/>
        <img className="CloudRight" style={{width: '40vw', position: 'absolute', right: '-300px'}} alt='GUGULogo' src={Cloud}/>

        <img className="CloudLeftSnail" style={{width: '20vw', position: 'absolute', left: '40px', top: '240px'}} alt='GUGULogo' src={Snail}/>
        <img className="CloudLeft" style={{width: '40vw', position: 'absolute', left: '-300px'}} alt='GUGULogo' src={Cloud}/>

    </div>
  );
};

export default Sidebar;
