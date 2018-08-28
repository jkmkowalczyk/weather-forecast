import React, { Component } from 'react';
import axios from 'axios';
import CurrentWeather from "./CurrentWeather";

class CityList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.identyfikator
    }
  }

  renderCity = (city) => {
    return (
      <li key={city.id} onClick={() => {
        this.setState({ id: city.id })
        console.log(this.state.id)
        { this.someFn() }
      }}>
        {city.name}, {city.country}
      </li>

    );

  };
  someFn = () => {
    var identify = this.state.id;
    this.props.callbackFromParent(identify);
  }

  render() {
    return (
      <div>
        <div>
          <ul className="city-list">
            {this.props.cityList.map(this.renderCity)}

          </ul>
        </div>

      </div>

    );
  }
}

export default CityList;
