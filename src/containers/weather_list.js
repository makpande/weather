import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => (temp*9/5) - 459.67);
    const pressures = _.map(cityData.list.map(weather => weather.main.pressure), (pressure) => pressure*0.75006375541921);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;


      return (
        <tr key={name}>
          <td><GoogleMap lon={lon} lat={lat} /></td>
          <td><Chart data={temps} color="red" units="F"/></td>
          <td><Chart data={pressures} color="blue" units="mmHg"/></td>
          <td><Chart data={humidities} color="orange" units="%"/></td>
        </tr>
      )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temprature (F)</th>
            <th>Pressure (mmHg)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
