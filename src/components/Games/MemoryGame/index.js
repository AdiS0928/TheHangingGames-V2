import { useEffect, useState } from 'react';
import './Memory.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

export default function MemoryGame() {
  
  useEffect(() => {
    class PlayGround extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          frameworks: ['Cards', 'Cassette', 'ChipsOman', 'FlappyBird', 'KNDoor', 'LabanUp', 'Lollipop', 'Ludo', 'Mario', 'Safari', 'SourPunk', 'Courage', 'Dexter', 'Tom&Jerry', 'Sonic'],
          duplicatedFrameworks: [],
          randomizedFrameworks: [],
          finalizedFrameworks: [],
          openedFrameworks: [],
          timeRemaining: 10,
        };
        this.start();
      }

      handleClick(name, index) {
        if (this.state.openedFrameworks.length === 2) {
          setTimeout(() => {
            this.check();
          }, 750);
        } else {
          let framework = {
            name,
            index,
          };
          let finalizedFrameworks = this.state.finalizedFrameworks;
          let frameworks = this.state.openedFrameworks;
          finalizedFrameworks[index].close = false;
          frameworks.push(framework);
          this.setState({
            openedFrameworks: frameworks,
            finalizedFrameworks: finalizedFrameworks,
          });
          if (this.state.openedFrameworks.length === 2) {
            setTimeout(() => {
              this.check();
            }, 750);
          }
        }
      }

      check() {
        let finalizedFrameworks = this.state.finalizedFrameworks;

        if (finalizedFrameworks.every((card) => card.complete)) {
          setTimeout(() => {
            alert('Congratulations! You have won!');
          }, 500);
        } else {
          if (
            this.state.openedFrameworks[0].name === this.state.openedFrameworks[1].name &&
            this.state.openedFrameworks[0].index !== this.state.openedFrameworks[1].index
          ) {
            finalizedFrameworks[this.state.openedFrameworks[0].index].complete = true;
            finalizedFrameworks[this.state.openedFrameworks[1].index].complete = true;
          } else {
            finalizedFrameworks[this.state.openedFrameworks[0].index].close = true;
            finalizedFrameworks[this.state.openedFrameworks[1].index].close = true;
          }

          this.setState({
            finalizedFrameworks,
            openedFrameworks: [],
          });
        }
      }

      start() {
        let finalizedFrameworks = [];
        this.state.duplicatedFrameworks = this.state.frameworks.concat(this.state.frameworks);
        this.state.randomizedFrameworks = this.shuffle(this.state.duplicatedFrameworks);
        this.state.randomizedFrameworks.forEach((name, index) => {
          finalizedFrameworks.push({
            name,
            close: true,
            complete: false,
            fail: false,
          });
        });
        this.state.finalizedFrameworks = finalizedFrameworks;
        this.startTimer();
      }

      shuffle(array) {
        let currentIndex = array.length,
          temporaryValue,
          randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }

      startTimer() {
        this.timerInterval = setInterval(() => {
          this.setState((prevState) => ({
            timeRemaining: prevState.timeRemaining - 1,
          }));
        }, 1000);
      }

      stopTimer() {
        clearInterval(this.timerInterval);
      }

      componentDidUpdate() {
        if (this.state.timeRemaining === 0) {
          this.stopTimer();
          this.navigate('/');
        }
      }

      componentWillUnmount() {
        this.stopTimer();
      }

      render() {
        return (
          <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h1 style={{ marginBottom: '-20px', marginTop: '20px' }}>TIME REMAINING: <span>{this.state.timeRemaining}</span></h1>
            </div>
            <div className="playground">
              {this.state.finalizedFrameworks.map((framework, index) => (
                <Card
                  key={index}
                  framework={framework.name}
                  click={() => {
                    this.handleClick(framework.name, index);
                  }}
                  close={framework.close}
                  complete={framework.complete}
                />
              ))}
            </div>
          </div>
        );
      }
    }

    class Card extends React.Component {
      clicked(framework) {
        this.props.click(framework);
      }

      render() {
        return (
          <div
            className={'card' + (!this.props.close ? ' opened' : '') + (this.props.complete ? ' matched' : '')}
            onClick={() => this.clicked(this.props.framework)}
          >
            <div className="front">?</div>
            <div className="back">
              <img src={`https://raw.githubusercontent.com/AdiS0928/TheHangingGames-V2/main/src/components/1_Assets/GameAssets/MemoryGame/${this.props.framework}.png`} />
            </div>
          </div>
        );
      }
    }

    ReactDOM.render(<PlayGround />, document.getElementById('app'));

    return () => {
      ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    };
  }, []);

  return <div id="app"></div>;
}
