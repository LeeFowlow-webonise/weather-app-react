import React from 'react';
import moment from 'moment';
import { Button } from 'semantic-ui-react';
import '../App.css';

const city = () => {
    return(
        console.log('city component')

        //START OF INPUT CITY DIV
        // <div className='row' style={{width: '40vw', fontWeight: 'bolder', color: 'white'}}>
        //     <div className='column'>
        //         <label for='citySearch'>City Name:</label>
        //     </div>
        //     <div className='column'>
        //         <input id='cityName' type='text'></input>
        //     </div>
        //     <div className='column'>
        //         <input type='submit' value='Search' onClick={useFindWeather()}/>
        //     </div>
        // </div>

        //TEMPLATE FOR DISPLAY
        // <div className='container'>
        //     <div className='main'>
        //         <div className="top">
        //             <p className="header">{weatherData.weatherData[0].name} - <span>current weather</span></p>
        //         </div>
        //         <div className='flex'>
        //             <p className='day'>{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        //             <p className="description">{weatherData.weatherData[0].weather[0].description}</p>
        //         </div>
        //         <div className='flex'>
        //             <p className='temp'>{weatherData.weatherData[0].main.temp} &deg;C</p>
        //             <p className="temp">Humidity: {weatherData.weatherData[0].main.humidity} %</p>
        //         </div>
        //         <div className='flex'>
        //             <p className='sunrise-sunset'>Sunrise: {new Date(weatherData.weatherData[0].sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
        //             <p className='sunrise-sunset'>Sunset: {new Date(weatherData.weatherData[0].sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default city;