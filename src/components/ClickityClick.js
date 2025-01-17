import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      toggled: false
    };
  }

  handleClick = () => {
    // Update our state here...
    this.setState(previousState => {
        return {
            toggled: !previousState.toggled
        }
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.toggled ? "TRUE" : "FALSE"}</button>
      </div>
    );
  }
}

export default ClickityClick;

