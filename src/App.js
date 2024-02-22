import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';

import WhackAMole from './components/Games/WhackAMole'; 
import Hangman from './components/Games/Hangman'; 
import MemoryGame from './components/Games/MemoryGame'; 
import FlappyBird from './components/Games/FlappyBird';
import Puzzle from './components/Games/Puzzle';
import TicTacToe from './components/Games/TicTacToe';

import GameOver from './components/GameOver';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Registration" element={<Registration />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />

            <Route exact path="/WhackAMole" element={<WhackAMole />} />
            <Route exact path="/Hangman" element={<Hangman />} />
            <Route exact path="/MemoryGame" element={<MemoryGame />} />
            <Route exact path="/Flappy" element={<FlappyBird />} />
            <Route exact path="/Puzzle" element={<Puzzle />} />
            <Route exact path="/TicTacToe" element={<TicTacToe />} />
            
            <Route exact path="/GameOver" element={<GameOver />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;