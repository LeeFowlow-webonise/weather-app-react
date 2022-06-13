import React from 'react';
import '../App.css';
import useForecast from '../hooks/useForecast';
//temporary hook until useForecast is operable
import useWindDirection from '../hooks/useWindDirection';

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
        <div className='flex'>
            <p className='foreday'>{new Date(weatherData[1].list[0].dt * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit'})}</p>
            <p className='foreday'>{weatherData[1].list[0].main.temp} &deg;C</p>
            <p className='foreday'>{weatherData[1].list[0].weather[0].description}</p>
            <p className='foreday'>{Math.round(10 * weatherData[1].list[0].wind.speed) / 10}km/hr <span>{useWindDirection(weatherData[1].list[0].wind.deg)}</span></p>
        </div>
        <div className='flex'>
            <p className='foreday'>{new Date(weatherData[1].list[4].dt * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit'})}</p>
            <p className='foreday'>{weatherData[1].list[4].main.temp} &deg;C</p>
            <p className='foreday'>{weatherData[1].list[4].weather[0].description}</p>
            <p className='foreday'>{Math.round(10 * weatherData[1].list[4].wind.speed) / 10}km/hr <span>{useWindDirection(weatherData[1].list[0].wind.deg)}</span></p>
        </div>
        <div className='flex'>
            <p className='foreday'>{new Date(weatherData[1].list[8].dt * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit'})}</p>
            <p className='foreday'>{weatherData[1].list[8].main.temp} &deg;C</p>
            <p className='foreday'>{weatherData[1].list[8].weather[0].description}</p>
            <p className='foreday'>{Math.round(10 * weatherData[1].list[8].wind.speed) / 10}km/hr <span>{useWindDirection(weatherData[1].list[0].wind.deg)}</span></p>
        </div>
        <div className='flex'>
            <p className='foreday'>{new Date(weatherData[1].list[12].dt * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit'})}</p>
            <p className='foreday'>{weatherData[1].list[12].main.temp} &deg;C</p>
            <p className='foreday'>{weatherData[1].list[12].weather[0].description}</p>
            <p className='foreday'>{Math.round(10 * weatherData[1].list[12].wind.speed) / 10}km/hr <span>{useWindDirection(weatherData[1].list[0].wind.deg)}</span></p>
        </div>
        <div className='flex'>
            <p className='foreday'>{new Date(weatherData[1].list[16].dt * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit'})}</p>
            <p className='foreday'>{weatherData[1].list[16].main.temp} &deg;C</p>
            <p className='foreday'>{weatherData[1].list[16].weather[0].description}</p>
            <p className='foreday'>{Math.round(10 * weatherData[1].list[16].wind.speed) / 10}km/hr <span>{useWindDirection(weatherData[1].list[0].wind.deg)}</span></p>
        </div>
        <div className='flex'>
            <p className='foreday'>{new Date(weatherData[1].list[20].dt * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit'})}</p>
            <p className='foreday'>{weatherData[1].list[20].main.temp} &deg;C</p>
            <p className='foreday'>{weatherData[1].list[20].weather[0].description}</p>
            <p className='foreday'>{Math.round(10 * weatherData[1].list[20].wind.speed) / 10}km/hr <span>{useWindDirection(weatherData[1].list[0].wind.deg)}</span></p>
        </div>
        <div className='flex'>
            <p className='foreday'>{new Date(weatherData[1].list[24].dt * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit'})}</p>
            <p className='foreday'>{weatherData[1].list[24].main.temp} &deg;C</p>
            <p className='foreday'>{weatherData[1].list[24].weather[0].description}</p>
            <p className='foreday'>{Math.round(10 * weatherData[1].list[24].wind.speed) / 10}km/hr <span>{useWindDirection(weatherData[1].list[0].wind.deg)}</span></p>
        </div>
        <div className='flex'>
            <p className='foreday'>{new Date(weatherData[1].list[28].dt * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit'})}</p>
            <p className='foreday'>{weatherData[1].list[28].main.temp} &deg;C</p>
            <p className='foreday'>{weatherData[1].list[28].weather[0].description}</p>
            <p className='foreday'>{Math.round(10 * weatherData[1].list[28].wind.speed) / 10}km/hr <span>{useWindDirection(weatherData[1].list[0].wind.deg)}</span></p>
        </div>
        <div className='flex'>
            <p className='foreday'>{new Date(weatherData[1].list[32].dt * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit'})}</p>
            <p className='foreday'>{weatherData[1].list[32].main.temp} &deg;C</p>
            <p className='foreday'>{weatherData[1].list[32].weather[0].description}</p>
            <p className='foreday'>{Math.round(10 * weatherData[1].list[32].wind.speed) / 10}km/hr <span>{useWindDirection(weatherData[1].list[0].wind.deg)}</span></p>
        </div>
        <div className='flex'>
            <p className='foreday'>{new Date(weatherData[1].list[36].dt * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit'})}</p>
            <p className='foreday'>{weatherData[1].list[36].main.temp} &deg;C</p>
            <p className='foreday'>{weatherData[1].list[36].weather[0].description}</p>
            <p className='foreday'>{Math.round(10 * weatherData[1].list[36].wind.speed) / 10}km/hr <span>{useWindDirection(weatherData[1].list[0].wind.deg)}</span></p>
        </div>
    </div>
  )

  export default ForecastCard;