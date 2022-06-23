import React from 'react';
import moment from 'moment';
import useCitySearch from '../hooks/useCitySearch';
import '../App.css';
let weatherArray = [];

const City = () => {

    let cityName = document.getElementById('cityName').value;
    weatherArray = useCitySearch(cityName);
    console.log(weatherArray);

    return( 
        <div id='newCityDiv' className='main'>
            <div className="top">
                <p className="header">{cityName} - <span>current weather</span></p>
            </div>
            <div className='flex'>
                <p className='day'>{new Date(weatherArray[0] * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', hour: 'numeric', minute: '2-digit'})}</p>
                <p className="description">{weatherArray[1]}</p>
            </div>
            <div className='flex'>
                <p className='temp'>{weatherArray[2]} &deg;C</p>
                <p className="temp">Humidity: {weatherArray[3]} %</p>
            </div>
            <div className='flex'>
                <p className='sunrise-sunset'>Sunrise: {new Date(weatherArray[4] * 1000).toLocaleTimeString('en-IN')}</p>
                <p className='sunrise-sunset'>Sunset: {new Date(weatherArray[5] * 1000).toLocaleTimeString('en-IN')}</p>
            </div>
        </div>
    )
}

export default City;