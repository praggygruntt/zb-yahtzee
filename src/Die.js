import React, { Component } from "react";
import "./Die.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

class Die extends Component {
  static defaultProps = {
    numberWords: ["One", 'Two', 'Three', 'Four', 'Five', 'Six'],
    diceIcons: [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix],
    val: 1
  }
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx)
  }
  render() {
    return (
      // <i
      //   className={`Die fas fa-dice-${this.props.numberWords[this.props.val-1]} fa-5x ${this.props.locked ? 'Die-locked' : null} ${this.props.rolling && "Die-rolling"}`}
      //   onClick={this.handleClick}
      //   disabled={this.props.disabled}
      // >
      // </i>
      <FontAwesomeIcon 
        icon={this.props.diceIcons[this.props.val-1]}
        size={'3x'}
        className={`Die ${this.props.locked ? 'Die-locked' : null} ${this.props.rolling && "Die-rolling"}`}
        onClick={this.handleClick}
        disabled={this.props.disabled}
      />

    );
  }
}

export default Die;
