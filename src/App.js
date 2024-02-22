import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

import Footer from './components/Footer/index.js';
import Home from './components/Home';

import WhackAMole from './components/WhackAMole'; 
import Hangman from './components/Hangman'; 
import MemoryGame from './components/MemoryGame'; 
import FlappyBird from './components/FlappyBird/index.js';
import Puzzle from './components/Puzzle/index.js';

function App() {
  return (
    <>
      <Router>
        <Footer />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Wordsearch" element={<Wordsearch />} />
            <Route exact path="/Crossword" element={<Crossword />} />
            <Route exact path="/WhackAMole" element={<WhackAMole />} />
            <Route exact path="/Hangman" element={<Hangman />} />
            <Route exact path="/MemoryGame" element={<MemoryGame />} />
            <Route exact path="/TicTacToe" element={<TicTacToe />} />
            <Route exact path="/TriviaQuiz" element={<TriviaQuiz />} />
            <Route exact path="/TriviaQuizScore" element={<TriviaQuizScore />} />
            <Route exact path="/FightingGame" element={<FightingGame />} />
            <Route exact path="/score" element={<TriviaQuizScore />} />
            <Route exact path="/Flappy" element={<FlappyBird />} />
            <Route exact path="/Puzzle" element={<Puzzle />} />
            <Route exact path="/Match3" element={<Match3 />} />

            <Route exact path="/Slot" element={<Slot />} />

          </Routes>
      </Router>
    </>
  );
}

export default App;