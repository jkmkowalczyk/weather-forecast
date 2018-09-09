import React, {Component} from 'react';

class Searchbar extends Component {
  state = {
    input: '',
  };

  updateText = (e) => {
    this.setState({input: e.target.value}, () => this.props.findCities(this.state.input));
  };


  render() {
    return (
      <input
        className="searchbar"
        type="text"
        placeholder="Enter city"
        value={this.state.input}
        onChange={this.updateText}
      />
    );
  }
}

export default Searchbar;
