import React from 'react';
import '../App.css';
import { Button } from 'semantic-ui-react';
import CurrentDate from './elements/currentDate';
import CurrentTemp from './elements/currentTemp';
import CurrentSun from './elements/currentSun';

const refresh = () => {
    window.location.reload();
}

const CurrentWeather = (weatherData) => {
    let weatherInfo = weatherData.weatherData[0];

    return (
        // console.log(weatherInfo)
        <div className='container' data-testid='weatherDiv'>
            <div className='main'>
                <div className="top">
                    <p className="header">{weatherInfo.name} - <span>current weather</span></p>
                    <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh}/>
                </div>
                <CurrentDate weatherData={weatherInfo.weather[0].description}/>
                <CurrentTemp weatherData={[weatherInfo.main.temp, weatherInfo.main.humidity]}/>
                <CurrentSun weatherData={[weatherInfo.sys.sunrise, weatherInfo.sys.sunset]}/>
            </div>
        </div>
    )
}

export default CurrentWeather;