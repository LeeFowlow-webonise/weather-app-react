import React from 'react';
import labels from './forecastLabels';

const weeklyForecast = (weatherData) => {
    let i;
    let forecastDiv = [];
    let newDayArray = [];
    let newLowTempArray = [];
    let newHighTempArray = [];
    let newCondArray = [];
    let newWindArray = [];

    for(i = 0; i < weatherData.length; i++){
        let forecastData = weatherData[i];
        //the new paragraphs to be added to next flex div
        let newDay = React.createElement(
            'p', 
            {className: 'foreday', key: 'newDay' + i, style: {color: 'darkgray'}},
            new Date(forecastData.dt * 1000).toLocaleString('en-IN', {weekday: 'long'})
            );
        let newLowTemp = React.createElement(
            'p', 
            {className: 'foreday', key: 'newLowTemp' + i},
            forecastData.temp.min + '°C'
            );
        let newHighTemp = React.createElement(
            'p', 
            {className: 'foreday', key: 'newHighTemp' + i},
            forecastData.temp.max + '°C'
            );
        let newCond = React.createElement(
            'p', 
            {className: 'foreday', key: 'newCond' + i},
            forecastData.weather[0].description
            );
        let newWind = React.createElement(
            'p', 
            {className: 'foreday', key: 'newWind' + i},
            Math.round(10 * forecastData.wind_speed) / 10 + 'km/h'
            );

        newDayArray.push(newDay);
        newLowTempArray.push(newLowTemp);
        newHighTempArray.push(newHighTemp);
        newCondArray.push(newCond);
        newWindArray.push(newWind);

        //stops iterating one short of full array
        if (i === weatherData.length - 2){
            let dayDiv = React.createElement(
                'div',
                {className: 'column', key: 'dayDiv' + i},
                labels.dayLabel,
                newDayArray.slice()
            );
            let lowTempDiv = React.createElement(
                'div',
                {className: 'column', key: 'LowTempDiv' + i},
                labels.lowTempLabel,
                newLowTempArray.slice()
            );
            let highTempDiv = React.createElement(
                'div',
                {className: 'column', key: 'HighTempDiv' + i},
                labels.highTempLabel,
                newHighTempArray.slice()
            );
            let condDiv = React.createElement(
                'div',
                {className: 'column', key: 'condDiv' + i},
                labels.condLabel,
                newCondArray.slice()
            );
            let windDiv = React.createElement(
                'div',
                {className: 'column', key: 'windDiv' + i},
                labels.windLabel,
                newWindArray.slice()
            );
            
            forecastDiv.push(dayDiv, lowTempDiv, highTempDiv, condDiv, windDiv);
            return forecastDiv;                
        }
    }

}

export default weeklyForecast