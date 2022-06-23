import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import homeIcon from '../assets/images/icons/homeIcon.png'
//imported but not yet implemented
// import useBackground from '../hooks/useBackground';
let weatherData = [];

const returnSearch = () => {
    document.getElementById('cityName').style.display = 'inline';
    document.getElementById('cityName').value = '';
    document.getElementById('cityNameSearch').style.display = 'inline';
}

async function citySearch(cityName){
    await fetch(`${process.env.REACT_APP_API_URL}/weather?q=${cityName}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
            if (result.cod === '400'){
            console.log(result.err);
            return(null);
            } else {
            weatherData.push(result.dt);
            weatherData.push(result.weather[0].description);
            weatherData.push(result.main.temp);
            weatherData.push(result.main.humidity);
            weatherData.push(result.sys.sunrise);
            weatherData.push(result.sys.sunset);
            console.log(weatherData);
            }
        })
        return weatherData;
}

const City = () => {
    const [weatherData, setWeatherData] = useState([]);    

    let cityName = document.getElementById('cityName').value;

    useEffect(() => {
        citySearch(cityName)
            .then(weatherData => setWeatherData(weatherData))
            .catch(err => {
                return err
            })
    }, []);

    return( 
        // console.log(weatherData)
        <div id='newCityDiv' className='main'>
            <div className="top">
                <p className="header">{cityName} - <span>current weather</span></p>
                <Link to="/" className="btn btn-primary" style={{backgroundColor: 'transparent'}} onClick={returnSearch}><img src={homeIcon}/></Link>
            </div>
            <div className='flex'>
                <p className='day'>{new Date(weatherData[0] * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', hour: 'numeric', minute: '2-digit'})}</p>
                <p className="description">{weatherData[1]}</p>
            </div>
            <div className='flex'>
                <p className='temp'>{weatherData[2]} &deg;C</p>
                <p className="temp">Humidity: {weatherData[3]} %</p>
            </div>
            <div className='flex'>
                <p className='sunrise-sunset'>Sunrise: {new Date(weatherData[4] * 1000).toLocaleTimeString('en-IN')}</p>
                <p className='sunrise-sunset'>Sunset: {new Date(weatherData[5] * 1000).toLocaleTimeString('en-IN')}</p>
            </div>
        </div>
    )
}

export default City