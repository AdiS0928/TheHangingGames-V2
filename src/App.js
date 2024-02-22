import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

// import Footer from './components/Footer';
import Home from './components/Home';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';

import WhackAMole from './components/Games/WhackAMole'; 
import Hangman from './components/Games/Hangman'; 
import MemoryGame from './components/Games/MemoryGame'; 
import FlappyBird from './components/Games/FlappyBird/index.js';
import Puzzle from './components/Games/Puzzle/index.js';

function App() {
  return (
    <>
      <Router>
        {/* <Footer /> */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Registration" element={<Registration />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />

            <Route exact path="/WhackAMole" element={<WhackAMole />} />
            <Route exact path="/Hangman" element={<Hangman />} />
            <Route exact path="/MemoryGame" element={<MemoryGame />} />
            <Route exact path="/Flappy" element={<FlappyBird />} />
            <Route exact path="/Puzzle" element={<Puzzle />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;