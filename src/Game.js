// Importing React Boilerplate, Components, and CSS File
import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

// Global Variables
const NUM_DICE = 5;
const NUM_ROLLS = 3;

// Create Game Component
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Create an array of length NUM_DICE
      dice: Array.from({ length: NUM_DICE }),
      // locked state becomes an array of length NUM_DICE and fills all indicies with false
      locked: Array(NUM_DICE).fill(false),
      // Bring NUM_ROLLS global variable into state of <Game />
      rollsLeft: NUM_ROLLS,
      rolling: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      }
    };
    // Binding roll() and doScore()
    this.roll = this.roll.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.doScore = this.doScore.bind(this);
    this.animateRoll = this.animateRoll.bind(this);
  };
  componentDidMount(){
    this.animateRoll();
  }
  animateRoll(){
    this.setState({rolling: true}, () => {
      setTimeout(this.roll, 1000);
    });
  };
  // Funtion to Roll Dice
  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        // if dice is locked at that index, return the dice, if unlocked, return a random roll between 1 and 6
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      // set locked state - if rollsLeft is greater than one, return the old locked array, if out of rolls, fill with all true(locked)
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      // takes rolls left down by one
      rollsLeft: st.rollsLeft - 1,
      rolling: false
    }));
  }

  toggleLocked(idx) {
    if(this.state.rollsLeft > 0 && !this.state.rolling) {
    // toggle whether idx is in locked or not
      this.setState(st => ({
        // make new locked state that first fills the old array up to the idx, then the inverse of that index to toggle, then fills the rest after that index
        locked: [
          ...st.locked.slice(0, idx),
          !st.locked[idx],
          ...st.locked.slice(idx + 1)
        ]
      }));
    }
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false)
    }));
    this.animateRoll();
  }

  render() {
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='App-title'>Yahtzee!</h1>

          <section className='Game-dice-section'>
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
              disabled={this.state.rollsLeft === 0}
              rolling={this.state.rolling}
            />
            <div className='Game-button-wrapper'>
              <button
                className='Game-reroll'
                disabled={this.state.locked.every(x => x) || this.state.rolling}
                onClick={this.animateRoll}
              >
                {this.state.rolling ? 'Rolling...' : (this.state.rollsLeft === 1 ? this.state.rollsLeft + ' Reroll Left' : this.state.rollsLeft + ' Rerolls Left')}
              </button>
            </div>
          </section>
        </header>
        <ScoreTable doScore={this.doScore} scores={this.state.scores} />
      </div>
    );
  }
}

export default Game;
