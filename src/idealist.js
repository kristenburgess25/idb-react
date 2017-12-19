import React, { Component } from 'react';
import './Idea.css';
import startingIdeas from './ideasArray.js';
import NewIdea from './newidea.js';
import Idea from './idea.js'

class IdeaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: startingIdeas,
    };
  }

  render() {

    const displayIdeas = this.state.ideas.map(idea =>
      <Idea
        idea={idea}
        key={idea.key}
      />
    )
    return (
      <div className="Idea-List-Container">
        <NewIdea ideas={this.state.ideas} />
        {displayIdeas}
      </div>
    )
  }
}

export default IdeaList;
