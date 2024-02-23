import ButtonBox from '../../1_Assets/MainAssets/ButtonBox.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import './flappy.css'
// eslint-disable-next-line
import { Navigate } from 'react-router-dom';

export default function FlappyBird(){




   
    useEffect(()=>{
      // Constants
const canvas = document.getElementById("grid");
const ctx = canvas.getContext("2d");

const btn = document.querySelector(".mode_container .btn_container .btn");
// eslint-disable-next-line
const btnContainer = document.querySelector(".mode_container .btn_container");
const circle = document.querySelector(".mode_container .btn_container .circle");
const modeTitle = document.querySelector(".mode_container span ");

// Original dimensions
const originalWidth = 370;
const originalHeight = 560;

// Calculate canvas height based on 80vh and aspect ratio
const canvasHeight = window.innerHeight * 0.9;
const canvasWidth = (originalWidth / originalHeight) * canvasHeight;

// Set canvas dimensions
canvas.width = canvasWidth;
canvas.height = canvasHeight;

const sprite = new Image();
sprite.src = "https://raw.githubusercontent.com/islamelsayyad/flappybird-canvas/05d4cdc9cbb4bf209fc9568a1a4f48a820c1930f/assets/img/flappybird-sprites.png";

const POINT = new Audio();
POINT.src =
"https://soundboardguy.com/wp-content/uploads/2021/06/flappy-birds-point.mp3";

const WING = new Audio();
WING.src =
"https://www.myinstants.com/media/sounds/sfx_wing.mp3";

// Functions
// eslint-disable-next-line
let frames = 0;

let randomNum = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let multipleTwoNum = function (num) {
  return num * 2.5;
};

// Event Listener

window.addEventListener("click", (e) => {
  if (state.current === state.game) {
    let cltRect = canvas.getBoundingClientRect();
    let cltX = e.clientX - cltRect.left;
    let cltY = e.clientY - cltRect.top;

    if (pauseBtn.isPause === true) {
      bird.speed = 0;
    }

    if (
      cltX >= pauseBtn.x &&
      cltX <= pauseBtn.x + pauseBtn.width &&
      cltY >= pauseBtn.y &&
      cltY <= pauseBtn.y + pauseBtn.height &&
      pauseBtn.isPause === false
    ) {
      pauseBtn.isPause = true;
    } else if (
      (cltX >= pauseBtn.x &&
        cltX <= pauseBtn.x + pauseBtn.width &&
        cltY >= pauseBtn.y &&
        cltY <= pauseBtn.y + pauseBtn.height) ||
      pauseBtn.isPause === true
    ) {
      pauseBtn.isPause = false;
    }
  }
});

window.addEventListener("click", (e) => {
  let cltRect = canvas.getBoundingClientRect();
  let cltX = e.clientX - cltRect.left;
  let cltY = e.clientY - cltRect.top;

  if (state.current === state.getReady && getReady.frame === 0) {
    getReady.frame = 1;
  } else if (state.current === state.getReady && getReady.frame === 1) {
    state.current = state.game;
  } else if (
    state.current === state.game &&
    !(
      cltX >= pauseBtn.x &&
      cltX <= pauseBtn.x + pauseBtn.width &&
      cltY >= pauseBtn.y &&
      cltY <= pauseBtn.y + pauseBtn.height
    )
  ) {
    bird.flap();
  } else if (state.current === state.gameOver) {
    let overBtn = gameOver.gameOverMsg[2];

    if (
      cltX >= overBtn.x &&
      cltX <= overBtn.x + overBtn.width &&
      cltY >= overBtn.y &&
      cltY <= overBtn.y + overBtn.height
    ) {
      state.current = state.getReady;
      getReady.frame = 0;

      bird.reset();
      pipes.reset();
      score.reset();
    }
  }
});
// eslint-disable-next-line
function darkMode() {
  circle.classList.add("active");
  btn.style.backgroundColor = "#FBDF07";
  modeTitle.textContent = "Dark";
  localStorage.setItem("dark", "true");
}

// function offDarkMode() {
//   circle.classList.remove("active");
//   btn.style.backgroundColor = "#3CCF4E";
//   modeTitle.textContent = "Light";
//   localStorage.setItem("dark", "false");
// }

// btnContainer.addEventListener("click", () => {
//   circle.classList.toggle("active");

//   if (circle.classList.contains("active")) {
//     darkMode();
//     background.sX = localStorage.setItem("sX", 146);
//     background.sX = 146;
//   } else {
//     offDarkMode();
//     background.sX = localStorage.setItem("sX", 0);
//     background.sX = 0;
//   }
// });

// if (localStorage.getItem("dark") === "true") {
//   darkMode();
// } else {
//   offDarkMode();
// }

// Objects
// States
const state = {
  current: 0,
  getReady: 0,
  game: 1,
  gameOver: 2
};

// Background
const background = {
  sX: localStorage.getItem("sX") || 0,
  sY: 0,
  sWidth: 144,
  sHeight: 256,

  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height,

  draw() {
    ctx.drawImage(
      sprite,
      this.sX,
      this.sY,
      this.sWidth,
      this.sHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  },

  update() {}
};

// Pipes
const pipes = {
  top: {
    sX: 56,
    sY: 323
  },

  bottom: {
    sX: 84,
    sY: 323
  },

  sWidth: 26,
  sHeight: 160,

  position: [],

  width: multipleTwoNum(26),
  height: multipleTwoNum(160),

  maxPos: -230,
  minPos: -100,

  gap: 105,

  frames: 0,
  period: 50,

  draw() {
    for (let i = 0; i < this.position.length; i++) {
      let position = this.position[i];
      let bottomPosY = this.height + position.y + this.gap;
      if (state.current === state.game) {
        if (
          bird.x + bird.width - 1 > position.x &&
          bird.x + 1 < position.x + this.width &&
          bird.y < position.y + this.height &&
          bird.y + bird.height > position.y
        ) {
          state.current = state.gameOver;
        } else if (
          bird.x + bird.width - 1 > position.x &&
          bird.x + 1 < position.x + this.width &&
          bird.y < bottomPosY + this.height &&
          bird.y + bird.height > bottomPosY
        ) {
          state.current = state.gameOver;
        }

        if (
          bird.x + bird.width === position.x + this.width / 2 &&
          bird.y >= position.y + this.height &&
          bird.y + bird.height <= bottomPosY
        ) {
          score.current++;
          localStorage.setItem("high", score.high);
          POINT.play();
        }
      }

      ctx.drawImage(
        sprite,
        this.top.sX,
        this.top.sY,
        this.sWidth,
        this.sHeight,
        position.x,
        position.y,
        this.width,
        this.height
      );

      ctx.drawImage(
        sprite,
        this.bottom.sX,
        this.bottom.sY,
        this.sWidth,
        this.sHeight,
        position.x,
        bottomPosY,
        this.width,
        this.height
      );
    }
  },

  update() {
    if (state.current === state.game && pauseBtn.isPause === false) {
      for (let i = 0; i < this.position.length; i++) {
        let position = this.position[i];
        position.x -= 4;

        if (this.position.x + this.width <= 0) {
          this.position.shift();
        }
      }
    }

    for (let i = 0; i < this.position.length; i++) {
      let position = this.position[i];
      if (position.x + this.width < bird.x && !position.passed) {
        position.passed = true;
        score.current++;
        POINT.play();
      }
    }
  
    if (state.current !== state.game) return false;

    if (!(state.current === state.gameOver) && pauseBtn.isPause === false) {
      if (this.frames % this.period === 0) {
        this.position.push({
          x: canvas.width,
          y: randomNum(this.maxPos, this.minPos)
        });
      }

      this.frames++;
    }
  },

  reset() {
    this.position = [];
  }
};

// Floor
const floor = {
  sX: 292,
  sY: 0,
  sWidth: 168,
  sHeight: 56,

  x: 0,
  y: canvas.height - multipleTwoNum(56),
  width: canvas.width,
  height: multipleTwoNum(56),

  draw() {
    ctx.drawImage(
      sprite,
      this.sX,
      this.sY,
      this.sWidth,
      this.sHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );

    ctx.drawImage(
      sprite,
      this.sX,
      this.sY,
      this.sWidth,
      this.sHeight,
      this.x - this.width + 1,
      this.y,
      this.width,
      this.height
    );
  },

  update() {
    if (pauseBtn.isPause === false) {
      if (!(state.current === state.gameOver)) {
        this.x += 1;

        if ((this.x - this.width) / 2 >= 0) {
          this.x = 0;
        }
      }
    }
  }
};

// Bird
const bird = {
  animate: [
    { sX: 3, sY: 491 },
    { sX: 31, sY: 491 },
    { sX: 59, sY: 491 },
    { sX: 3, sY: 491 }
  ],

  sWidth: 17,
  sHeight: 12,

  x: 60,
  y: canvas.height / 3.25,
  width: multipleTwoNum(17),
  height: multipleTwoNum(13),

  frames: 0,
  frame: 0,

  speed: 0,
  gravity: 0,

  jump: 5.9,

  draw() {
    ctx.drawImage(
      sprite,
      this.animate[this.frame].sX,
      this.animate[this.frame].sY,
      this.sWidth,
      this.sHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  },

  update() {
    if (pauseBtn.isPause === false) {
        if (!(state.current === state.gameOver)) {
          // eslint-disable-next-line
            this.period = state.current == state.game ? 5 : 8;
            this.frame += this.frames % this.period ? 0 : 1;
            this.frame = this.frame % this.animate.length;
        }
        // eslint-disable-next-line
        if (state.current === state.getReady) {
          // eslint-disable-next-line
            this.y = this.y;
        } else {
            // Adjust the bird's falling speed (gravity) here
            this.speed += this.gravity*5; // Increase the falling speed
            this.y += this.speed;

            if (this.y + this.height >= floor.y) {
                this.y = floor.y - this.height;
                state.current = state.gameOver;
            } else {
                this.gravity = 0.1;
            }

            if (this.y <= 0) {
                this.y *= -0.5;
                this.gravity = 0.75;
            }
        }

        if (state.current === state.getReady && getReady.frame === 0) {
            this.x = getReady.animate[0].x + getReady.animate[0].width + 15;
        } else {
            this.x = 60;
        }

        this.frames++;
    }
},


  flap() {
    if (pauseBtn.isPause === false) {
      this.speed = -this.jump;
      WING.play();
    }
  },

  reset() {
    this.speed = 0;
    this.y = canvas.height / 3.25;
  }
};

// Get Ready [State]
const getReady = {
  animate: [
    {
      sX: 351,
      sY: 91,
      sWidth: 89,
      sHeight: 24,

      width: multipleTwoNum(89),
      height: multipleTwoNum(24),
      x: canvas.width / 2 - (89 + bird.x / 2),
      y: bird.y - 24 / 3
    },
    [
      {
        sX: 295,
        sY: 59,
        sWidth: 92,
        sHeight: 25,

        width: multipleTwoNum(92),
        height: multipleTwoNum(25),
        x: canvas.width / 2 - 92,
        y: bird.y - multipleTwoNum(40)
      },

      {
        sX: 292,
        sY: 91,
        sWidth: 57,
        sHeight: 49,

        width: multipleTwoNum(57),
        height: multipleTwoNum(49),
        x: canvas.width / 2 - 57,
        y: bird.y
      }
    ]
  ],

  frame: 0,

  draw() {
    for (let i = 0; i < this.animate.length; i++) {
      if (state.current === state.getReady && this.frame === 0) {
        ctx.drawImage(
          sprite,
          this.animate[i].sX,
          this.animate[i].sY,
          this.animate[i].sWidth,
          this.animate[i].sHeight,
          this.animate[i].x,
          this.animate[i].y,
          this.animate[i].width,
          this.animate[i].height
        );
      }
      for (let n = 0; n < this.animate[i].length; n++) {
        if (state.current === state.getReady && this.frame === 1) {
          ctx.drawImage(
            sprite,
            this.animate[i][n].sX,
            this.animate[i][n].sY,
            this.animate[i][n].sWidth,
            this.animate[i][n].sHeight,
            this.animate[i][n].x,
            this.animate[i][n].y,
            this.animate[i][n].width,
            this.animate[i][n].height
          );
        }
      }
    }
  }
};

// Game Over [State]
const gameOver = {
  gameOverMsg: [
    {
      sX: 395,
      sY: 59,
      sWidth: 96,
      sHeight: 21,
      x: canvas.width / 5.5 + 5,
      y: canvas.height / 5 - 40,
      width: multipleTwoNum(96),
      height: multipleTwoNum(21)
    },
    {
      sX: 3,
      sY: 259,
      sWidth: 113,
      sHeight: 57,
      x: canvas.width / 8,
      y: canvas.height / 4 + 4,
      width: multipleTwoNum(113),
      height: multipleTwoNum(57)
    },
    {
      sX: 462,
      sY: 42,
      sWidth: 40,
      sHeight: 14,
      x: canvas.width / 2.7 + 3,
      y: canvas.height / 2 + 21,
      width: multipleTwoNum(40),
      height: multipleTwoNum(14)
    }
  ],

  draw() {
    for (let i = 0; i < this.gameOverMsg.length; i++) {
      const message = this.gameOverMsg[i];
      const x = (canvas.width - message.width) / 2;
      const y = message.y; // Keep the y coordinate unchanged
      if (state.current === state.gameOver) {
        ctx.drawImage(
          sprite,
          message.sX,
          message.sY,
          message.sWidth,
          message.sHeight,
          x,
          y,
          message.width,
          message.height
        );
      }
    }
  },
  

  update() {}
};

// Pause Button
const pauseBtn = {
  sX: 121,
  sY: 306,
  sWidth: 13,
  sHeight: 14,

  x: 15,
  y: 15,
  width: multipleTwoNum(13),
  height: multipleTwoNum(14),

  isPause: false,

  draw() {
    if (state.current === state.game) {
      ctx.drawImage(
        sprite,
        this.sX,
        this.sY,
        this.sWidth,
        this.sHeight,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  },

  update() {
    if (this.isPause === true) {
      this.sX = 334;
      this.sY = 142;
    } else {
      this.sX = 121;
      this.sY = 306;
    }
  }
};

// Score
// Score
const score = {
  current: 0,
  high: parseInt(localStorage.getItem("high")) || 0,

  draw() {
    let gameOverMsg = gameOver.gameOverMsg[1];
    ctx.fillStyle = "#fafafa";
    ctx.strokeStyle = "#553847";
  
    if (state.current === state.game) {
      ctx.font = "42px Flappy Bird";
      ctx.lineWidth = 2;
      ctx.textAlign = "center"; // Center align the text
      ctx.fillText(this.current, canvas.width / 2, 43);
      ctx.strokeText(this.current, canvas.width / 2, 43);
    }
    if (state.current === state.gameOver) {
      ctx.font = "25px Flappy Bird";
      ctx.lineWidth = 1;
      
      const centerX = canvas.width / 2; // Calculate the center of the canvas
      const scoreX = centerX + 95; // Adjusted by adding 15 pixels
      
      ctx.fillText(
        this.high,
        scoreX,
        gameOverMsg.y + gameOverMsg.height - 34
      );
      ctx.strokeText(
        this.high,
        scoreX,
        gameOverMsg.y + gameOverMsg.height - 34
      );
  
      ctx.fillText(
        this.current,
        scoreX,
        gameOverMsg.y + 54
      );
      ctx.strokeText(
        this.current,
        scoreX,
        gameOverMsg.y + 54
      );
    }
  },
  

  update() {
    // if (pipes.position.length > this.current) {
    //   this.current = pipes.position.length;
    // }
    
    if (this.current > this.high) {
      this.high = this.current; // Update the high score if the current score surpasses it
    }
  },



  reset() {
    this.current = 0;
  }
};


// Functions

// Animation Functions
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  background.draw();
  pipes.draw();
  floor.draw();
  bird.draw();
  getReady.draw();
  gameOver.draw();
  pauseBtn.draw();
  score.draw();
}

function update() {
  background.update();
  pipes.update();
  floor.update();
  gameOver.update();
  pauseBtn.update();
  score.update();
  bird.update();
}

function animate() {
  update();
  draw();
  requestAnimationFrame(animate);
}

animate();

    },[])
    
    return(
      <div class="container">
      <canvas id="grid"></canvas>
    
      <Link to="/" style={{ textDecoration: 'none', zIndex: '3', position: 'absolute', bottom: '10px', left: '10px', background: 'red' }}>
        <button style={{position: 'absolute', bottom: '10px', left: '10px', marginTop: '80px', backgroundColor: 'transparent', border: 'none', height: '40px', width: '200px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${ButtonBox}')`, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'grab', fontSize: '20px', color: 'white'}} > MAIN </button>
      </Link>

      <Link to="/Dashboard" style={{ textDecoration: 'none', zIndex: '3', position: 'absolute', bottom: '10px', right: '10px', background: 'red' }}>
        <button style={{position: 'absolute', bottom: '10px', right: '10px',  marginTop: '80px', backgroundColor: 'transparent', border: 'none', height: '40px', width: '200px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${ButtonBox}')`, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'grab', fontSize: '20px', color: 'white' }} > RETURN </button>
      </Link>
    </div>
    )
}