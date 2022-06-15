import React from 'react';
import '../App.css';
import useForecast from '../hooks/useForecast';
import { Button } from 'semantic-ui-react';

const Forecast = (weatherData) => {
    return (
        <div className='forecast' id='forecast'>
             <div className='forecasttop'>
                 <div className='header'>Forecasts</div>
                 <Button className='linkButton' onClick={() => console.log('test')}>
                     {'Weekly'}</Button>
             </div>
             <div className='flex'>            
                 <p className='foreday'>Date/Time</p>
                 <p className='foreday'>Temp</p>
                 <p className='foreday'>Condition</p>
                 <p className='foreday'>Wind</p>
                 <p className='foreday'>Wind Direction</p>
             </div>
             {useForecast(weatherData[1].list)}
         </div>
        )
}

export default Forecast;
