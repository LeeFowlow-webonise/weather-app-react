import React from 'react';
import '../App.css';
import useForecast from '../hooks/useForecast';

const Forecast = (weatherData) => {
    const hourlyDiv = useForecast(weatherData.weatherData[1].list);

    return (
        <div className='container'>
            <div className='forecast' id='forecast'>
                <div className='top'>
                    <div className='header'>{weatherData.weatherData[0].name} - <span>24-Hour Forecast</span></div>
                </div>
                <div className='row'>
                    {hourlyDiv}
                </div>
            </div>
        </div>
    )
}

export default Forecast;
