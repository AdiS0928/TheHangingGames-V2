import React, { useState } from 'react';
import '../1_Assets/Grid.css';

const wordToFind = 'HELLO';

const generateRandomLetters = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const grid = [];

  // Initialize the grid with random letters
  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      row.push(letters[randomIndex]);
    }
    grid.push(row);
  }

  // Place the word horizontally, vertically, or diagonally
  const direction = Math.floor(Math.random() * 3); // 0: horizontal, 1: vertical, 2: diagonal

  switch (direction) {
    case 0: // Horizontal
      const horizontalStart = Math.floor(Math.random() * (8 - wordToFind.length + 1));
      for (let i = 0; i < wordToFind.length; i++) {
        grid[3][horizontalStart + i] = wordToFind[i];
      }
      break;
    case 1: // Vertical
      const verticalStart = Math.floor(Math.random() * (8 - wordToFind.length + 1));
      for (let i = 0; i < wordToFind.length; i++) {
        grid[verticalStart + i][3] = wordToFind[i];
      }
      break;
    case 2: // Diagonal
      const diagonalStart = Math.floor(Math.random() * (8 - wordToFind.length + 1));
      for (let i = 0; i < wordToFind.length; i++) {
        grid[diagonalStart + i][diagonalStart + i] = wordToFind[i];
      }
      break;
    default:
      break;
  }

  return grid;
};

const Home = () => {
  // eslint-disable-next-line
  const [grid, setGrid] = useState(generateRandomLetters());
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [foundWord, setFoundWord] = useState(false);

  const handleClick = (row, col) => {
    if (foundWord) return;
  
    const clickedTile = { row, col };
    const lastTile = selectedTiles[selectedTiles.length - 1];
  
    if (
      !lastTile ||
      (Math.abs(clickedTile.row - lastTile.row) <= 1 &&
        Math.abs(clickedTile.col - lastTile.col) <= 1)
    ) {
      const isSameTile = selectedTiles.some(
        (tile) => tile.row === row && tile.col === col
      );
  
      if (isSameTile) {
        // If the clicked tile is the same as the last one, unhighlight it
        const newSelectedTiles = selectedTiles.filter(
          (tile) => !(tile.row === row && tile.col === col)
        );
        setSelectedTiles(newSelectedTiles);
      } else {
        // Otherwise, add the clicked tile to the selection
        const newSelectedTiles = [...selectedTiles, clickedTile];
        setSelectedTiles(newSelectedTiles);
  
        if (newSelectedTiles.length === wordToFind.length) {
          const selectedWord = newSelectedTiles.map(
            ({ row, col }) => grid[row][col]
          ).join('');
  
          if (selectedWord=== wordToFind) {
            setFoundWord(true);
            alert('Congratulations! You found the word!');
          } else {
            setSelectedTiles([]);
          }
        }
      }
    } else {
      setSelectedTiles([clickedTile]);
    }
  };

  return ( 
    <div className="App">
      <h1 style={{width: '100%', textAlign:'center'}}>THE HANGING HOUSE</h1>
      <div className="grid">

        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((letter, colIndex) => (
              <button
                key={colIndex}
                className={`tile ${
                  selectedTiles.some(
                    (tile) => tile.row === rowIndex && tile.col === colIndex
                  )
                    ? 'selected'
                    : ''
                }`}
                onClick={() => handleClick(rowIndex, colIndex)}
              >
                {letter}
              </button>
            ))}
          </div>
        ))}
      </div>

      <h3 style={{width: '100%', textAlign:'center', marginTop: '80px', marginBottom: '5px'}}>Words to Search:</h3>

      <div style={{display: 'flex', color: 'white', flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center'}}>    
        <p style={{color: 'white'}}>HELLO</p>
      </div>


    </div>
  );
};

export default Home;
