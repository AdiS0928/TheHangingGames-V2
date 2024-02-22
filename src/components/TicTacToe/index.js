import React from 'react';
import './styles.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const TicTacToe = () => {
  const renderBlocks = () => {
    const blocks = [];
    for (let turn = 1; turn <= 9; turn++) {
      for (let row = 1; row <= 3; row++) {
        for (let column = 1; column <= 3; column++) {
          let player = "1";
          let positionHorizontal = "";
          let positionVertical = "";
          let positionDiagonal = "";

          if (turn % 2 === 0) {
            player = "2";
          }

          if (column === 1) {
            positionHorizontal = " left first-column";
          } else if (column === 2) {
            positionHorizontal = " middle second-column";
          } else if (column === 3) {
            positionHorizontal = " right third-column";
          }

          if (row === 1) {
            positionVertical = " top first-row";
          } else if (row === 2) {
            positionVertical = " center second-row";
          } else if (row === 3) {
            positionVertical = " bottom third-row";
          }

          if (row === 1 && column === 1) {
            positionDiagonal = " first-diagonal";
          } else if (row === 1 && column === 3) {
            positionDiagonal = " second-diagonal";
          } else if (row === 2 && column === 2) {
            positionDiagonal = " first-diagonal second-diagonal";
          } else if (row === 3 && column === 1) {
            positionDiagonal = " second-diagonal";
          } else if (row === 3 && column === 3) {
            positionDiagonal = " first-diagonal";
          }

          blocks.push(
            <React.Fragment key={`block-${turn}-${row}-${column}`}>
              <input
                id={`block${turn}-${row}-${column}`}
                type="radio"
                className={`player-${player}${positionHorizontal}${positionVertical}${positionDiagonal} turn-${turn}`}
              />
              <label
                htmlFor={`block${turn}-${row}-${column}`}
                className={`turn-${turn}`}
              ></label>
            </React.Fragment>
          );
        }
      }
    }
    return blocks;
  };

  return (
    <div className="tic-tac-toe">
      {renderBlocks()}
      <div className="end">
      {/* eslint-disable-next-line */}
        <h3></h3>
        <a href="/tictactoe">Restart</a>
      </div>
      {/* <h5>Note: use the Full Page view for the best experience.</h5> */}
    </div>
  );
};

export default TicTacToe;
