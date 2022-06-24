import React from 'react';
import '../App.css';
import { Button } from 'semantic-ui-react';
import CurrentDate from './elements/currentDate';
import CurrentTemp from './elements/currentTemp';
import CurrentSun from './elements/currentSun';
import fetchData from '../util/fetchDataTest';
let weatherInfo;

const refresh = () => {
    window.location.reload();
}

class CurrentWeather extends React.Component{
    constructor(weatherData){
        super(weatherData);
        this.state = {weatherData: weatherData};
        this.coords = {
            lat: weatherData.weatherData[0].coord.lat,
            long: weatherData.weatherData[0].coord.lon
        }
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            5000
          );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
          weatherData: fetchData(this.coords)
        });
      }

    render(){
        console.log(this.state.weatherData);
        weatherInfo = this.state.weatherData.weatherData[0];      

        return (
            <div className='container'>
                <div className='main'>
                    <div className="top">
                        <p className="header">{weatherInfo.name} - <span>current weather</span></p>
                        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh}/>
                    </div>
                    <CurrentDate weatherData={weatherInfo.weather[0].description}/>
                    <CurrentTemp weatherData={[weatherInfo.main.temp, weatherInfo.main.humidity]}/>
                    <CurrentSun weatherData={[weatherInfo.sys.sunrise, weatherInfo.sys.sunset]}/>
                </div>
            </div>
        )
    }
}

export default CurrentWeather