import React, { Component } from 'react';
import axios from 'axios';

class CityList extends Component {
  constructor(props) {
    super(props);
  }


  renderCity = city => (
    <li
      key={city.id}
      onClick={() => {
        this.props.getCurrentWeather(city.id);
        this.props.getNextWeekWeather(city.id);
        this.props.getNextWeekWeather2(city.id);
        this.props.getNextWeekWeather3(city.id);
        this.props.getNextWeekWeather4(city.id);
        this.props.getNextWeekWeather5(city.id);
        // POBIERANIE LOKALIZACJI PO IP
        // axios.get('http://api.ip2geo.pl/json/?ip=5.226.96.177')
        //   .then((data) => {
        //     console.log(data.data);
        //   });
      }}
    >
      {city.name}, {city.country}
    </li>
  );

render() {
  return (<ul className="city-list">
    {this.props.cityList.map(this.renderCity)}
  </ul>);
}
}

export default CityList;
