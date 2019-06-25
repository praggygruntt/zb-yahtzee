import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {

  render() {
    const { scores, doScore } = this.props;
    const scoresArray = Object.values(scores);
    let sum = 0;
    scoresArray.forEach(score => {
      if(score !== undefined) {
        sum += score;
      }
    });
    console.log(sum);
    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Ones" score={scores.ones !== undefined ? scores.ones : ones.desc} doScore={evt => doScore("ones", ones.evalRoll)} />
              <RuleRow name="Twos" score={scores.twos !== undefined ? scores.twos : twos.desc} doScore={evt => doScore("twos", twos.evalRoll)} />
              <RuleRow name="Threes" score={scores.threes !== undefined ? scores.threes : threes.desc} doScore={evt => doScore("threes", threes.evalRoll)} />
              <RuleRow name="Fours" score={scores.fours !== undefined ? scores.fours : fours.desc} doScore={evt => doScore("fours", fours.evalRoll)} />
              <RuleRow name="Fives" score={scores.fives !== undefined ? scores.fives : fives.desc} doScore={evt => doScore("fives", fives.evalRoll)} />
              <RuleRow name="Sixes" score={scores.sixes !== undefined ? scores.sixes : sixes.desc} doScore={evt => doScore("sixes", sixes.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Three of Kind" score={scores.threeOfKind !== undefined ? scores.threeOfKind : threeOfKind.desc} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow name="Four of Kind" score={scores.fourOfKind !== undefined ? scores.fourOfKind : fourOfKind.desc} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
              <RuleRow name="Full House" score={scores.fullHouse !== undefined ? scores.fullHouse : fullHouse.desc} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
              <RuleRow name="Small Straight" score={scores.smallStraight !== undefined ? scores.smallStraight : smallStraight.desc} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow name="Large Straight" score={scores.largeStraight !== undefined ? scores.largeStraight : largeStraight.desc} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow name="Yahtzee" score={scores.yahtzee !== undefined ? scores.yahtzee : yahtzee.desc} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow name="Chance" score={scores.chance !== undefined ? scores.chance : chance.desc} doScore={evt => doScore("chance", chance.evalRoll)} />
            </tbody>
          </table>
        </section>
        <h2>Total Score: {sum}</h2>
      </div>
    )
  }
}

export default ScoreTable;