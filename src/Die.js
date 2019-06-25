import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", 'two', 'three', 'four', 'five', 'six'],
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
      <i
        className={`Die fas fa-dice-${this.props.numberWords[this.props.val-1]} fa-5x ${this.props.locked ? 'Die-locked' : null} ${this.props.rolling && "Die-rolling"}`}
        onClick={this.handleClick}
        disabled={this.props.disabled}
      >
      </i>
    );
  }
}

export default Die;
