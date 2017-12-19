import React, { Component } from 'react';
import './Idea.css';

class Idea extends Component {
  render() {
    console.log('MADE IT', this.props.idea)
    const idea = this.props.idea
    return (
      <div className="Idea">
        <h1 className="Idea-Title"> {idea.title} </h1>
        <h3 className="Idea-Content"> {idea.content} </h3>
      </div>
    )
  }
}

export default Idea;
