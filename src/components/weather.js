import React from 'react';
import '../App.css';
import { Button } from 'semantic-ui-react';
import moment from 'moment';

const refresh = () => {
    window.location.reload();
  }

const CurrentWeather = (weatherData) => {
    return (
        <div className='container'>
            <div className='main'>
            <div className="top">
                <p className="header">{weatherData.weatherData[0].name} - <span>current weather</span></p>
                <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
            </div>
            <div className='flex'>
                <p className='day'>{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                <p className="description">{weatherData.weatherData[0].weather[0].description}</p>
            </div>
            <div className='flex'>
                <p className='temp'>{weatherData.weatherData[0].main.temp} &deg;C</p>
                <p className="temp">Humidity: {weatherData.weatherData[0].main.humidity} %</p>
            </div>
            <div className='flex'>
                <p className='sunrise-sunset'>Sunrise: {new Date(weatherData.weatherData[0].sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p className='sunrise-sunset'>Sunset: {new Date(weatherData.weatherData[0].sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </div>
            </div>
        </div>
    )
}

export default CurrentWeather;