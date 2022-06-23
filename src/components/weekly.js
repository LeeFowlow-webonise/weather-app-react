
//THIS COMPONENT IS CURRENTLY BYPASSED
//AM GOING LEARN HOW TO DYNAMICALLY ADD SCRIPTS THROUGH HERE

import React from 'react';
import '../App.css';
import useDailyForecast from '../hooks/useDailyForecast';

const Test = (weatherData) => {
    const dailyDiv = useDailyForecast(weatherData.weatherData[2].daily);

    return( 
        <div className='container'>
            <div className='forecast' id='forecast'>
                <div className='top'>
                    <div className='header'>{weatherData.weatherData[0].name} - <span>Weekly Forecast</span></div>
                </div>
                <div className='row'>
                    {dailyDiv}
                </div>
            </div>
        </div>
    )
}

export default Test;