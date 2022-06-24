import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import SearchCityDate from './elements/searchCityDate';
import CurrentTemp from './elements/currentTemp';
import CurrentSun from './elements/currentSun';
import homeIcon from '../assets/images/icons/homeIcon.png'
import citySearch from '../util/citySearch'


const returnSearch = () => {
    document.getElementById('cityName').style.display = 'inline';
    document.getElementById('cityName').value = '';
    document.getElementById('cityNameSearch').style.display = 'inline';
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
            <SearchCityDate weatherData={[weatherData[0], weatherData[1]]}/>
            <CurrentTemp weatherData={[weatherData[2], weatherData[3]]}/>
            <CurrentSun weatherData={[weatherData[4], weatherData[5]]}/>
        </div>
    )
}

export default City