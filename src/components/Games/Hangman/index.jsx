import React, { useState, useEffect } from 'react';
import './styles.scss';
import $ from 'jquery';

const HangmanGame = () => {
	// var Hintof = "Hello";
	// eslint-disable-next-line 
  const [puzzleList, setPuzzleList] = useState([
	"POWERPUFF GIRLS",
    "DEXTERS LABORATORY",
    "VIOLETS ARE BLUE",
    "FLINTSTONE",
    "GEEK",
    "FINDING NEMO",
    "HAKUNA MATATA",
    "TO INFINITY AND BEYOND",
    "YA FILTHY ANIMAL",
    "SMELLY CAT"
  ]);

//   eslint-disable-next-line 
  const [puzzle, setPuzzle] = useState('');
//   eslint-disable-next-line 
  const [puzzleLetterContainers, setPuzzleLetterContainers] = useState([]);
//   eslint-disable-next-line 
  const [previouslyChosen, setPreviouslyChosen] = useState('');
//   eslint-disable-next-line 
  const [totalIncorrect, setTotalIncorrect] = useState(0);
//   eslint-disable-next-line 
  const [remainingBlanks, setRemainingBlanks] = useState(0);
//   eslint-disable-next-line 
  const [hangmanPartsRendered, setHangmanPartsRendered] = useState([]);

  useEffect(() => {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      puzzle = '',
      puzzleLetterContainers = [],
      previouslyChosen = '',
      totalIncorrect = 0,
      remainingBlanks = 0,
      hangmanParts = [
        '<circle stroke-width="10" stroke-miterlimit="10" cx="254.404" cy="174.26" r="29.412"/>',
        '<line stroke-width="10" stroke-miterlimit="10" x1="254.404" y1="203.672" x2="254.404" y2="314.056"/>',
        '<line stroke-width="10" stroke-miterlimit="10" x1="255.339" y1="311.094" x2="185.875" y2="406.468"/>',
        '<line stroke-width="10" stroke-miterlimit="10" x1="323.46" y1="406.468" x2="253.996" y2="311.094"/>',
        '<line stroke-width="10" stroke-miterlimit="10" x1="254.404" y1="229.409" x2="164.11" y2="256.834"/>',
        '<line stroke-width="10" stroke-miterlimit="10" x1="254.404" y1="229.409" x2="344.699" y2="256.834"/>',
        '<circle fill="#000000" cx="243.663" cy="169.333" r="3.667"/>',
        '<circle fill="#000000" cx="265.663" cy="169.333" r="3.667"/>',
        '<path stroke-width="4" stroke-miterlimit="10" d="M245.571,190.082c0-4.879,3.955-8.833,8.833-8.833 c4.879,0,8.833,3.955,8.833,8.833"/>'
      ];

    // Add alphabet to div
    alphabet.forEach((i) => {
      $('.hangman-letters').append(`<div>${i}</div>`);
    });

    // Set up initial puzzle
    setUp();

    // Set up new puzzle when user clicks "start over"
    $('#game-over-replay').click(function () {
      setUp();
    });

    // Use the function that checks letters, then disable that letter and check if game over
	$('.hangman-letters div').click(function () {
		var isCorrect = letterChosen(this.innerHTML.toLowerCase());
		if (isCorrect) $(this).addClass('disabled correct');
		else $(this).addClass('disabled');
		if (remainingBlanks < 1) {
		  gameOver(true);
		}
		if (totalIncorrect >= hangmanParts.length + 1) {
		  gameOver(false);
		}
	  });

    // Functions...

    function setUp() {
      $('.game-over').hide();
      puzzle = newPuzzle();
      puzzleLetterContainers = [];
      previouslyChosen = '';
      totalIncorrect = 0;
      remainingBlanks = puzzle.length;
      $('.hangman-puzzle').html('');
      $('#added-parts').html('');
      $('.hangman-letters div').each(function () {
        this.classList = '';
      })

      puzzle.split('').forEach((i) => {
        var thisClass = "hangman-puzzle-letters";
		// eslint-disable-next-line 
        if (i == ' ') {
          thisClass += ' space';
          remainingBlanks--;
        }
        $('.hangman-puzzle').append(`<div class="${thisClass}">&nbsp;</div>`);
      });
      puzzleLetterContainers = document.getElementsByClassName('hangman-puzzle-letters');
    }

	function letterChosen(letter) {
		if (previouslyChosen.indexOf(letter) < 0) {
		  previouslyChosen += letter;
		  var checkResults = checkLetter(puzzle.toLowerCase(), letter);
		  if (checkResults) {
			checkResults.forEach(function (item) {
			  puzzleLetterContainers[item].innerHTML = puzzle.charAt(item);  // Adjust here
			  remainingBlanks--;
			});
			return true;
		  } else {
			wrongAnswer(letter);
			return false;
		  }
		}
	  }

    function checkLetter(solution, thisLetter) {
      var indexes = [];
      solution.split('').forEach(function (item, index) {
		// eslint-disable-next-line 
        if (item == thisLetter) {
          indexes.push(index);
        }
      });
      return indexes.length > 0 ? indexes : false;
    }

    function wrongAnswer(letter) {
      document.getElementById('added-parts').appendChild(parseSVG(hangmanParts[totalIncorrect]));
      totalIncorrect++;
    }

    function newPuzzle() {
      var newPuzzle = puzzleList.splice(Math.floor(Math.random() * puzzleList.length), 1);
	  console.log(newPuzzle)
      return newPuzzle[0];
    }

    function parseSVG(s) {
      var div = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
      div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + s + '</svg>';
      var frag = document.createDocumentFragment();
      while (div.firstChild.firstChild)
        frag.appendChild(div.firstChild.firstChild);
      return frag;
    }

    function gameOver(won) {
      if (!won) {
        $('.game-over-lost').show();
        $('.game-over-won').hide();
        $('.hangman-puzzle-letters').each(function (index) {
			// eslint-disable-next-line 
          if ($(this).html() == "&nbsp;" && !$(this).hasClass("space")) {
            $(this).html(puzzle.charAt(index));
            $(this).addClass('game-lost');
          }
        });
      }
      else {
        $('.game-over-lost').hide();
        $('.game-over-won').show();
      }
      $('.game-over').show();
    }
	// eslint-disable-next-line 
  }, []); // Run only once when the component mounts
  return (
    <div className='mainhangman'>
      <div class="hangman">
        <div class="hangman-results">
          <div class="hangman-hangman">
            <svg id="hangman-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 400 500" stroke="#fff" fill="none">
              <polyline strokeWidth="10" strokeMiterlimit="10" points="253.996,142.899 253.996,59.666 115.663,59.666 115.663,434.999" />
              <line strokeWidth="10" strokeMiterlimit="10" x1="392.33" y1="434.999" x2="8.33" y2="434.999" />
              <g id="added-parts"></g>
            </svg>
          </div>
          <div class="game-over" style={{ display: 'none' }}>
            <p class="game-over-won">YOU WON! 🎉</p>
            <p class="game-over-lost">YOU LOST 😔</p>
            <button style={{marginTop: '15px'}} id="game-over-replay">START OVER</button>
          </div>
        </div>
		<p className='Hint' style={{fontSize: '25px'}}>I am the Hint</p>
        <div class="hangman-puzzle">
        </div>
        <div class="hangman-letters">
        </div>
      </div>
    </div>
  );
};

export default HangmanGame;