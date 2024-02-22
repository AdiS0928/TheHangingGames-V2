
import { Link } from 'react-router-dom';
import React from 'react';

function App() {

  return (
    <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center', top: '20px', position: 'absolute', width: '100vw', paddingLeft: '25px', paddingRight: '20px'}}>
        <Link to="/">
            <button style={{height: '30px', width: '70px', fontSize: '12px', background: 'black', color: '#00f526', border: '1px solid #00f526', cursor: 'grab', marginRight: '15px'}}>Return</button>
        </Link>
        {/* <p style={{color: 'white'}}>The <span style={{color:'#00f526'}}> Hanging </span>House</p> */}
    </div>
  );
}

export default App;