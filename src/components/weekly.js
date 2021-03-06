import React, { useEffect, useState } from 'react';
import '../App.css';
import weeklyForecast from '../util/weeklyForecast';
import weatherFetch from '../util/weatherFetch/onecall';
import ForecastElement from './elements/forecastElement';

const Weekly = (location) => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        if(process.env.NODE_ENV === 'test'){
            setWeatherData(location.location[1])
        } else {
            weatherFetch(location.location[1])
                .then(result => {
                    setWeatherData(result);
                })
                .catch(err => {
                    return err
                })
        }
    });  

    return weatherData ? (   
        (typeof weatherData[0] !== 'undefined') ? (  
            <div className='container' data-testid='weeklyDiv'>
                <ForecastElement forecastDiv={[location.location[0].name, weeklyForecast(weatherData[0]), 'weekly']}/>
            </div>        
        ): (
        <div></div>
        )
    ): (
    console.log('failed to fetch weather data')
    )
}

export default Weekly;