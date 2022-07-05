import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import SearchCityDate from './elements/searchCityDate';
import CurrentTemp from './elements/currentTemp';
import CurrentSun from './elements/currentSun';
import homeIcon from '../assets/images/icons/homeIcon.png'
import citySearch from '../util/citySearch'
let cityName;


const returnSearch = () => {
    document.getElementById('cityName').style.display = 'inline';
    document.getElementById('cityName').value = '';
    document.getElementById('cityNameSearch').style.display = 'inline';
}

const City = (testValue) => {
    const [weatherData, setWeatherData] = useState([]);    

    useEffect(() => {
        if(process.env.NODE_ENV === 'test'){
            cityName = testValue.testValue.pop();
            setWeatherData(testValue.testValue);
        } else {
            cityName = document.getElementById('cityName').value;
            citySearch(cityName)
                .then(weatherData => setWeatherData(weatherData))
                .catch(err => {
                    return err
                })
        }
    }, []);

    return weatherData ? (
        (typeof weatherData[0] !== 'undefined') ? ( 
        <div id='newCityDiv' className='main' data-testid='cityDiv'>
            <div className="top">
                <p className="header">{cityName} - <span>current weather</span></p>
                <a href='/' className="btn btn-primary" style={{backgroundColor: 'transparent'}} onClick={returnSearch}><img src={homeIcon}/></a>
            </div>
            <SearchCityDate weatherData={[weatherData[0], weatherData[1]]}/>
            <CurrentTemp weatherData={[weatherData[2], weatherData[3]]}/>
            <CurrentSun weatherData={[weatherData[4], weatherData[5]]}/>
        </div>
        ) : (
            <div></div>
        )
    ) : (
        console.log('failed to fetch weatherData')
    )
}

export default City