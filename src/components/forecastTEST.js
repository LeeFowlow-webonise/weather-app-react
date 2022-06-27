import React, { useState } from 'react';
import '../App.css';
import dailyForecast from '../util/dailyForecast';
import weatherFetch from '../util/weatherFetch/hourly';
import ForecastElement from './elements/forecastElement';
import useLocation from '../hooks/useLocation';

const Forecast = async(weatherData) => {
    // const [weatherData, setWeatherData] = useState();
    const location = useLocation();
    const forecast = weatherFetch(location);


    const hourlyDiv = dailyForecast(weatherData.weatherData[1].list);

    return (
        <div className='container'>
            <ForecastElement forecastDiv={[weatherData.weatherData[0].name, hourlyDiv]}/>
        </div>
    )
}

export default Forecast;








// import React, { useEffect, useState } from 'react';
// import '../App.css';
// import dailyForecast from '../util/dailyForecast';
// import weatherFetch from '../util/weatherFetch';
// import ForecastElement from './forecastElement';
// import useLocation from '../hooks/useLocation';
// let lat, long;

// const Forecast = async() => {
//     const [weatherData, setWeatherData] = useState([]);
//     const [hourlyDiv, setHourlyDiv] = useState();

//     const location = useLocation();
//     console.log(location);

    

//     // useEffect(() => {
//     //     weatherFetch(location)
//     //         .then(weatherData => setWeatherData(weatherData))
//     //         .catch(err => {
//     //             return err
//     //         })

//     //     let div = dailyForecast(weatherData.weatherData[1].list);
//     //     setHourlyDiv(div);
//     // }, []);

//     return (
//         <div className='container'>
//             <ForecastElement forecastDiv={[weatherData.weatherData[0].name, hourlyDiv]}/>
//         </div>
//     )
// }

// export default Forecast;