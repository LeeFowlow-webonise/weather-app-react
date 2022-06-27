import React, { useEffect, useState } from 'react';
import '../App.css';
import weeklyForecast from '../util/weeklyForecast';
import weatherFetch from '../util/weatherFetch/onecall';
import ForecastElement from './elements/forecastElement';

const Weekly = (location) => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        weatherFetch(location.location[1])
            .then(result => {
                setWeatherData(result);
            })
            .catch(err => {
                return err
            })
    });

    return weatherData ? (    
        (typeof weatherData[0] !== 'undefined') ? (  
        <div className='container'>
            <ForecastElement forecastDiv={[location.location[0].name, weeklyForecast(weatherData[0]), 'weekly']}/>
        </div>        
    ): (
        console.log(weatherData))
      ): (
        console.log('fail')
      )
}

export default Weekly;