import React from 'react';
import labels from './forecastLabels';
import windDirection from './windDirection';

const dailyForecast = (weatherData) => {
    let i;
    let forecastDiv = [];
    let newDateArray = [];
    let newTempArray = [];
    let newCondArray = [];
    let newWindArray = [];
    let newDirectArray = [];

    for (i = 0; i < weatherData.length; i++){
        let forecastData = weatherData[i];
        //the new paragraphs to be added to next flex div
        let newDate = React.createElement(
            'p', 
            {className: 'foreday', key: 'newDate' + i, style: {color: 'darkgray'}},
            new Date(forecastData.dt * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', hour: 'numeric', minute: '2-digit'})
            );
        let newTemp = React.createElement(
            'p', 
            {className: 'foreday', key: 'newTemp' + i},
            forecastData.main.temp + '°C'
            );
        let newCond = React.createElement(
            'p', 
            {className: 'foreday', key: 'newCond' + i},
            forecastData.weather[0].description
            );
        let newWind = React.createElement(
            'p', 
            {className: 'foreday', key: 'newWind' + i},
            Math.round(10 * forecastData.wind.speed) / 10 + 'km/h'
            );
        let newDirect = React.createElement(
            'p', 
            {className: 'foreday', key: 'newDirect' + i},
            windDirection(forecastData.wind.deg)
            );        

        newDateArray.push(newDate);
        newTempArray.push(newTemp);
        newCondArray.push(newCond);
        newWindArray.push(newWind);
        newDirectArray.push(newDirect);

        //currently set to trigger before i passes the last divisible by 4 element index number
        if (i === 7){
            let dateDiv = React.createElement(
                'div',
                {className: 'column', key: 'dateDiv' + i},
                labels.dateLabel,
                newDateArray.slice()
            );
            let tempDiv = React.createElement(
                'div',
                {className: 'column', key: 'tempDiv' + i},
                labels.tempLabel,
                newTempArray.slice()
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
            let directDiv = React.createElement(
                'div',
                {className: 'column', key: 'directDiv' + i},
                labels.directLabel,
                newDirectArray.slice()
            );
            
            forecastDiv.push(dateDiv, tempDiv, condDiv, windDiv, directDiv);
            return forecastDiv;                
        }
    
    }
}

export default dailyForecast;