import React from 'react';

const converter = (degrees) => {
    const directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest']

    let degreeCalc = Math.round((degrees / 360) * 8);

    return (directions[degreeCalc]);
}

const useForecast = (weatherData) => {
    let i;
    let forecastDiv = [];

    for (i = 0; i < weatherData.length; i++){
        if (i % 4 === 0){
            let forecastData = weatherData[i];
            //the new paragraphs to be added to next flex div
            let newDate = React.createElement(
                'p', 
                {className: 'foreday'},
                new Date(forecastData.dt * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit'})
                );
            let newTemp = React.createElement(
                'p', 
                {className: 'foreday'},
                forecastData.main.temp + '°C'
                );
            let newCond = React.createElement(
                'p', 
                {className: 'foreday'},
                forecastData.weather[0].description
                );
            let newWind = React.createElement(
                'p', 
                {className: 'foreday'},
                Math.round(10 * forecastData.wind.speed) / 10 + 'km/h'
                );
            let newDirect = React.createElement(
                'p', 
                {className: 'foreday'},
                converter(forecastData.wind.deg)
                );        
 
            
            let newD = React.createElement(
                'div', 
                {className: 'flex'},
                newDate,
                newTemp,
                newCond,
                newWind,
                newDirect
                );
            forecastDiv.push(newD);

            //currently set to trigger before i passes the last divisible by 4 element index number
            if (i >= weatherData.length - 4){
                return forecastDiv;
            }
        }
    }
}

export default useForecast;