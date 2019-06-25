import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if(this.state.active) {
      this.props.doScore();
      this.setState({active: false});
    }
  }
  render() {
    return (
      <tr className={"RuleRow " + (this.state.active ? "RuleRow-active" : "RuleRow-disabled")} onClick={this.handleClick}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;