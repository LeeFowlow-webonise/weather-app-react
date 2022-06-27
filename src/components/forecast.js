import React, { useEffect, useState } from 'react';
import '../App.css';
import dailyForecast from '../util/dailyForecast';
import weatherFetch from '../util/weatherFetch/hourly';
import ForecastElement from './elements/forecastElement';
// import useLocation from '../hooks/useLocation';

const Hourly = (location) => {
    const [weatherData, setWeatherData] = useState([]);
    
    useEffect(() => {
        weatherFetch(location.location)
            .then(result => {
                console.log(result);
                setWeatherData(result);
            })
            .catch(err => {
                return err
            })
    });        

    return weatherData ? (    
        (typeof weatherData[1] !== 'undefined') ? (  
        <div className='container'>
            <ForecastElement forecastDiv={[weatherData[0], dailyForecast(weatherData[1]), 'hourly']}/>
        </div>        
    ): (
        console.log(weatherData))
      ): (
        console.log('fail')
      )
}

export default Hourly