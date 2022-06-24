import React from 'react';
import '../App.css';
import weeklyForecast from '../util/weeklyForecast';
import ForecastElement from './forecastElement';

const Weekly = (weatherData) => {
    const dailyDiv = weeklyForecast(weatherData.weatherData[2].daily);

    return( 
        <div className='container'>
            <ForecastElement forecastDiv={[weatherData.weatherData[0].name, dailyDiv]}/>
        </div>
    )
}

export default Weekly;