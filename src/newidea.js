import React, { Component } from 'react';
import './Idea.css';


class NewIdea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandNew: false,
      newTitle: '',
      newContent: '',
    };
  }

  newIdeaClick() {
    this.setState({expandNew: !this.state.expandNew})
    console.log(this.state.expandNew)
  }

  saveNewIdea() {
    const newIdea = {
      key: Date.now(),
      title: this.state.newTitle,
      content: this.state.newContent,
      favorite: false,
    }
    console.log(newIdea);
    this.props.ideas.push(newIdea);
    console.log('UPDATED IDEAS ARRAY', this.props.ideas)
    this.setState({expandNew: false})
  }

  render() {
    return (
      <div className="New-Idea">
        <button
          className="new-idea-btn"
          hidden={this.state.expandNew}
          onClick={this.newIdeaClick.bind(this)}
        >
          ADD NEW IDEA
        </button>
        <div
          className="new-idea-inputs"
          hidden={!this.state.expandNew}
        >
          <input
            placeholder={'Title'}
            onChange={(e)=>this.setState({newTitle: e.target.value})}
          />
          <input
            placeholder={'Content'}
            onChange={(e)=>this.setState({newContent: e.target.value})}
          />
          <button onClick={this.saveNewIdea.bind(this)}>
            SAVE
          </button>
        </div>
      </div>
    )
  }
}

export default NewIdea;
