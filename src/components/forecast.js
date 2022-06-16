import React from 'react';
import '../App.css';
import useForecast from '../hooks/useForecast';

const Forecast = (weatherData) => {
    const newData = useForecast(weatherData.weatherData[1].list);

    return (
        <div className='forecast' id='forecast'>
            <div className='top'>
                <div className='header'>Forecasts</div>
            </div>
            <div className='flex'>            
                <p className='foreday'>Date/Time</p>
                <p className='foreday'>Temp</p>
                <p className='foreday'>Condition</p>
                <p className='foreday'>Wind</p>
                <p className='foreday'>Wind Direction</p>
            </div>
            {newData}
        </div>
    )
}

export default Forecast;
