import React from 'react';
import '../App.css';
import dailyForecast from '../util/dailyForecast';
import ForecastElement from './elements/forecastElement';

const Forecast = (weatherData) => {
    const hourlyDiv = dailyForecast(weatherData.weatherData[1].list);

    return (
        <div className='container'>
            <ForecastElement forecastDiv={[weatherData.weatherData[0].name, hourlyDiv]}/>
        </div>
    )
}

export default Forecast;