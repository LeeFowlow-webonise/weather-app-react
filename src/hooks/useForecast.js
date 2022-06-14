import React, { useState } from 'react';

const converter = (degrees) => {
    const directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest']

    let degreeCalc = Math.round((degrees / 360) * 8);

    return (directions[degreeCalc]);
}

const useForecast = (weatherData) => {
    let i;
    let forecastDiv = [];
    // let newP = document.createElement('p');
    // newP.setAttribute('className', 'foreday');

    for (i = 0; i < weatherData.length; i++){
        if (i % 4 === 0){
            let forecastData = weatherData[i];
            //the new div to be added this loop
            let newDate = React.createElement(
                'p', 
                {className: 'foreday'},
                Date(forecastData.dt * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit'})
                );
            let newTemp = React.createElement(
                'p', 
                {className: 'foreday'},
                forecastData.main.temp +  '&deg;C'
                );
            let newCond = React.createElement(
                'p', 
                {className: 'foreday'},
                forecastData.weather[0].description
                );
            let newWind = React.createElement(
                'p', 
                {className: 'foreday'},
                Math.round(10 * forecastData.wind.speed) / 10 + 'km/hr <span>' + converter(forecastData.wind.deg)
                );
            //the new paragraphs to be inserted into that div
 
            //the content to be displayed in those paragraphs
            // newDate.innerHTML = Date(forecastData.dt * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit'});
            // newTemp.innerHTML = forecastData.main.temp +  '&deg;C';
            // newCond.innerHTML = forecastData.weather[0].description;
            // newWind.innerHTML = Math.round(10 * forecastData.wind.speed) / 10 + 'km/hr <span>' + converter(forecastData.wind.deg);
            
            let newD = React.createElement(
                'div', 
                {className: 'flex'},
                newDate,
                newTemp,
                newCond,
                newWind
                );
            //newD.append(newDate, newTemp, newCond, newWind);
            forecastDiv.push(newD);

            //currently set to trigger before i passes the last divisible by 4 element index number
            if (i >= weatherData.length - 4){
                console.log(forecastDiv);
                return forecastDiv;
            }
        }
    }
}

export default useForecast;