import React from 'react';
import '../App.css';
import useForecast from '../hooks/useForecast';

const ForecastCard = ({weatherData}) => (

      <div className='forecast' id='forecast'>
        <div className='forecasttop'>
          <div className='header'>5-day Forecast</div>
        </div>
        <div className='flex'>
              <p className='foreday'>Date/Time</p>
              <p className='foreday'>Temp&deg;C</p>
              <p className='foreday'>Condition</p>
              <p className='foreday'>Wind(km/hr)</p>
        </div>
        <div className='flex' id='foredisplay'></div>
        <div className='flex'></div>
        <div className='flex'></div>
      </div>
  )

  export default ForecastCard;