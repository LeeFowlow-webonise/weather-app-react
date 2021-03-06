
//NOT BEING CALLED ANYWHERE. THIS WAS A CLASS COMPONENT THAT I SET UP
//TO LEARN THE SYNTAX


import React from 'react';
import getCityData from '../util/citySearchTest';
let weatherData;

class CityForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event){
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      weatherData = getCityData(this.state.value);
      console.log(weatherData);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      );
    }
  }

  export default CityForm