import React, { useState, useEffect } from 'react';
import '../1_Assets/Grid.css';

const Crossword = () => {

  useEffect(() => {
    const container = document.getElementsByClassName("container")[0];

    if (container) {
      container.onkeyup = function (e) {
        var target = e.srcElement;
        var maxLength = parseInt(target.attributes["maxlength"].value, 10);
        var myLength = target.value.length;
        if (myLength >= maxLength) {
          var next = target;
          // eslint-disable-next-line
          while (next = next.nextElementSibling) {
            if (next == null)
              break;
              // eslint-disable-next-line
            if (next.tagName.toLowerCase() == "input") {
              next.focus();
              break;
            }
          }
        }
      };
    }
  }, []);


  const successConditions = [
    { row: 1, col: 1, letter: 'S' },
    { row: 1, col: 2, letter: 'U' },
    { row: 1, col: 3, letter: 'C' },
    { row: 1, col: 4, letter: 'C' },
    { row: 1, col: 5, letter: 'E' },
    { row: 1, col: 6, letter: 'S' },
    { row: 1, col: 7, letter: 'S' },
  ];


const collaborationConditions = [
    { row: 1, col: 3, letter: 'C' },
    { row: 2, col: 3, letter: 'O' },
    { row: 3, col: 3, letter: 'L' },
    { row: 4, col: 3, letter: 'L' },
    { row: 5, col: 3, letter: 'A' },
    { row: 6, col: 3, letter: 'B' },
    { row: 7, col: 3, letter: 'O' },
    { row: 8, col: 3, letter: 'R' },
    { row: 9, col: 3, letter: 'A' },
    { row: 10, col: 3, letter: 'T' },
    { row: 11, col: 3, letter: 'I' },
    { row: 12, col: 3, letter: 'O' },
    { row: 13, col: 3, letter: 'N' },
  ];


const breakthroughsConditions = [
    { row: 5, col: 0, letter: 'B' },
    { row: 5, col: 1, letter: 'R' },
    { row: 5, col: 2, letter: 'E' },
    { row: 5, col: 3, letter: 'A' },
    { row: 5, col: 4, letter: 'K' },
    { row: 5, col: 5, letter: 'T' },
    { row: 5, col: 6, letter: 'H' },
    { row: 5, col: 7, letter: 'R' },
    { row: 5, col: 8, letter: 'O' },
    { row: 5, col: 9, letter: 'U' },
    { row: 5, col: 10, letter: 'G' },
    { row: 5, col: 11, letter: 'H' },
    { row: 5, col: 12, letter: 'S' },
  ];



const growthConditions = [
    { row: 7, col: 1, letter: 'G' },
    { row: 7, col: 2, letter: 'R' },
    { row: 7, col: 3, letter: 'O' },
    { row: 7, col: 4, letter: 'W' },
    { row: 7, col: 5, letter: 'T' },
    { row: 7, col: 6, letter: 'H' },
  ];

const thehanginghouseConditions = [
    { row: 10, col: 3, letter: 'T' },
    { row: 10, col: 4, letter: 'H' },
    { row: 10, col: 5, letter: 'E' },
    { row: 10, col: 6, letter: 'H' },
    { row: 10, col: 7, letter: 'A' },
    { row: 10, col: 8, letter: 'N' },
    { row: 10, col: 9, letter: 'G' },
    { row: 10, col: 10, letter: 'I' },
    { row: 10, col: 11, letter: 'N' },
    { row: 10, col: 12, letter: 'G' },
    { row: 10, col: 13, letter: 'H' },
    { row: 10, col: 14, letter: 'O' },
    { row: 10, col: 15, letter: 'U' },
    { row: 10, col: 16, letter: 'S' },
    { row: 10, col: 17, letter: 'E' },
  ];


const opportunityConditions = [
    { row: 4, col: 15, letter: 'O' },
    { row: 5, col: 15, letter: 'P' },
    { row: 6, col: 15, letter: 'P' },
    { row: 7, col: 15, letter: 'O' },
    { row: 8, col: 15, letter: 'R' },
    { row: 9, col: 15, letter: 'T' },
    { row: 10, col: 15, letter: 'U' },
    { row: 11, col: 15, letter: 'N' },
    { row: 12, col: 15, letter: 'I' },
    { row: 13, col: 15, letter: 'T' },
    { row: 14, col: 15, letter: 'Y' },
  ];

  



  const getCellStyle = (row, col) => {
    const word = findWord(row, col);
    if (word) {
      if (word.input) {
        return { backgroundColor: 'white', color: 'black' };
      } else {
        return { backgroundColor: 'black', color: 'white', border: '0.1px solid white'};
      }
    }
    const defaultLetter = defaultLetters[`${row}-${col}`];
    const isSuccess = successConditions.every(
      (condition) => condition.row === row && condition.col === col && grid[row][col] === condition.letter
    );
    return {
      backgroundColor: isSuccess ? 'lightgreen' : 'black',
      color: 'black',
      readOnly: true,
      defaultLetter,
    };
  };

  const handleSubmit = () => {
    const isSuccess = successConditions.every((condition) => {
      const { row, col, letter } = condition;
      return grid[row][col] === letter;
    });

    const isCollaboration = collaborationConditions.every((condition) => {
      const { row, col, letter } = condition;
      return grid[row][col] === letter;
    });

    const isBreakthroughs = breakthroughsConditions.every((condition) => {
      const { row, col, letter } = condition;
      return grid[row][col] === letter;
    });

    const isGrowth = growthConditions.every((condition) => {
      const { row, col, letter } = condition;
      return grid[row][col] === letter;
    });

    const isThehanginghouse = thehanginghouseConditions.every((condition) => {
      const { row, col, letter } = condition;
      return grid[row][col] === letter;
    });

    const isOpportunity = opportunityConditions.every((condition) => {
      const { row, col, letter } = condition;
      return grid[row][col] === letter;
    });

    if (isCollaboration) {
      console.log('isCollaboration');
      document.getElementById('collaborationText').style.color = '#00f526';
    } else {
      console.log('No, some conditions are not met for isCollaboration.');
      document.getElementById('collaborationText').style.color = 'red';
    }

    if (isSuccess) {
      console.log('isSuccess');
      document.getElementById('successText').style.color = '#00f526';
    } else {
      console.log('No, some conditions are not met for isSuccess.');
      document.getElementById('successText').style.color = 'red';
    }

    if (isBreakthroughs) {
      console.log('isBreakthroughs');
      document.getElementById('breakthroughsText').style.color = '#00f526';
    } else {
      console.log('No, some conditions are not met for isBreakthroughs.');
      document.getElementById('breakthroughsText').style.color = 'red';
    }

    if (isGrowth) {
      console.log('isGrowth');
      document.getElementById('growthText').style.color = '#00f526';
    } else {
      console.log('No, some conditions are not met for isGrowth.');
      document.getElementById('growthText').style.color = 'red';
    }

    if (isThehanginghouse) {
      console.log('isThehanginghouse');
      document.getElementById('thehanginghouseText').style.color = '#00f526';
    } else {
      console.log('No, some conditions are not met for isThehanginghouse.');
      document.getElementById('thehanginghouseText').style.color = 'red';
    }

    if (isOpportunity) {
      console.log('isOpportunity');
      document.getElementById('opportunityText').style.color = '#00f526';
    } else {
      console.log('No, some conditions are not met for isOpportunity.');
      document.getElementById('opportunityText').style.color = 'red';
    }

  };

  const defaultLetters = {
    '4-9': 'M',
    '5-9': 'U',
    '6-9': 'G',
    '12-2': 'T',
    '12-3': 'O',
    '12-4': 'T',
    '12-5': 'E',
    '12-6': 'B',
    '12-7': 'A',
    '12-8': 'G',
    '0-18': 'B',
    '1-18': 'O', 
    '2-18': 'T',
    '3-18': 'T',
    '4-18': 'L',
    '5-18': 'E',
    '4-13': 'C',
    '4-14': 'H',
    '4-15': 'O',
    '4-16': 'C',
    '4-17': 'O',
    '4-19': 'A',
    '4-20': 'T',
    '4-21': 'E',
  };

  const initialGrid = Array.from({ length: 15 }, () => Array(22).fill(''));

  for (const key in defaultLetters) {
    const [row, col] = key.split('-').map(Number);
    initialGrid[row][col] = defaultLetters[key];
  }

  const [grid, setGrid] = useState(initialGrid);

  const words = [
    { word: 'SUCCESS', start: { row: 1, col: 1 }, end: { row: 1, col: 7 } },
    { word: 'COLLABORATION', start: { row: 1, col: 3 }, end: { row: 13, col: 3 } },
    { word: 'BREAKTROUGHS', start: { row: 5, col: 0 }, end: { row: 5, col: 12 } },
    { word: 'GROWTH', start: { row: 7, col: 1 }, end: { row: 7, col: 6 } },
    { word: 'THEHANGINGHOUSE', start: { row: 10, col: 3 }, end: { row: 10, col: 17 } },
    { word: 'OPPORTUNITY', start: { row: 4, col: 15 }, end: { row: 14, col: 15 } },
  ];

  const staticWords = [
    { word: 'MUG', start: { row: 4, col: 9 }, end: { row: 6, col: 9 } },
    { word: 'BOTTLE', start: { row: 0, col: 18 }, end: { row: 5, col: 18 } },
    { word: 'CHOCOLATE', start: { row: 4, col: 13 }, end: { row: 4, col: 21 } },
    { word: 'TOTEBAG', start: { row: 12, col: 2 }, end: { row: 12, col: 8 } },
  ];

  const updateGrid = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row] = [...newGrid[row]];
    newGrid[row][col] = value;
    setGrid(newGrid);
    checkWordCompletion();
  };

  const renderGrid = () => {
    return grid.map((row, rowIndex) => (
      <div key={rowIndex} className="crossword-row">
        {row.map((col, colIndex) => {
          const cellStyle = getCellStyle(rowIndex, colIndex);
          const initialCellValue = grid[rowIndex][colIndex];

          return cellStyle.isStatic ? (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="static-word"
              style={cellStyle}
            >
              {initialCellValue || cellStyle.defaultLetter}
            </div>
          ) : (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              value={initialCellValue}
              style={cellStyle}
              readOnly={cellStyle.readOnly}
              maxLength={1}
              onChange={(e) => {
                if (!cellStyle.readOnly) {
                  const uppercaseValue = e.target.value.toUpperCase();
                  updateGrid(rowIndex, colIndex, uppercaseValue);
                }
              }}
            />
          );
        })}
      </div>
    ));
  };

  const findWord = (row, col) => {
    const foundWord = words.find(
      (word) =>
        (row >= word.start.row && row <= word.end.row && col >= word.start.col && col <= word.end.col) ||
        (row <= word.start.row && row >= word.end.row && col <= word.start.col && col >= word.end.col)
    );

    if (foundWord) {
      return { ...foundWord, input: true };
    }

    const foundStaticWord = staticWords.find(
      (word) =>
        row >= word.start.row && row <= word.end.row && col >= word.start.col && col <= word.end.col
    );

    if (foundStaticWord) {
      return { ...foundStaticWord, input: false };
    }

    return null;
  };

  const checkWordCompletion = () => {
    words.forEach((word) => {
      const { start, end } = word;
      const enteredWord = grid[start.row].slice(start.col, end.col + 1).join('');

      if (enteredWord === word.word) {
        markWordAsSuccess(start.row, start.col, end.row, end.col, word.word);
        alert(`Success! You completed the word: ${word.word}`);
      }
    });
  };

  const markWordAsSuccess = (startRow, startCol, endRow, endCol, word) => {
    for (let i = startCol; i <= endCol; i++) {
      const cell = document.querySelector(`#cell-${startRow}-${i}`);
      cell.classList.add('success');
      cell.readOnly = true;
    }

    console.log(`Success! You completed the word: ${word}`);
  };

  return( 
    <div className='container' style={{display: 'flex', height: '100vh', width: '100vw', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
      <h1 style={{width: '100%', textAlign:'center'}}>THE HANGING HOUSE</h1>

      <div className="crossword">{renderGrid()}</div>
      
      <button style={{height: '50px', width: '120px', fontSize: '16px', background: 'black', color: '#00f526', border: '1px solid #00f526', marginTop: '30px'}} onClick={handleSubmit}>SUBMIT</button>



      
      <div className='CrosswordsWords'>

        <div style={{width: '50%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '10px', flexDirection: 'column'}}>
          <p id='successText'>1. SUCCESS</p>
          <p id='collaborationText'>2. COLLABORATION</p>
          <p id='breakthroughsText'>3. BREAKTHROUGHS</p>
        </div>

        <div style={{width: '50%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '10px', flexDirection: 'column'}}>
          <p id='growthText'>4. GROWTH</p>
          <p id='thehanginghouseText'>5. THEHANGINGHOUSE</p>
          <p id='opportunityText'>6. OPPORTUNITY</p>
        </div>  

        
      </div>

    </div>
  );
};

export default Crossword;