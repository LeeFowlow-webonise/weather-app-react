
//WHEN FINISHED THIS HOOK WILL BE VERY SIMILAR TO THE useForecast HOOK.
//SO MUCH SO, THAT I MAY MAKE A MEDIARY HOOK TO PARSE THE DATA, AND THEN COMBINE
//  THESE INTO A SINGLE FUNCTION.

import React from 'react';
import moment from 'moment';

//this will be the basis for displaying forecasts for specific days three days ahead
const useDailyForecast = (weatherData) => {
    let i;
    let dailyDiv = [];
    let newDayArray = [];
    let newLowTempArray = [];
    let newHighTempArray = [];
    let newCondArray = [];
    let newWindArray = [];

    let dayLabel = React.createElement(
        'p',
        {className: 'foreday', key: 'dateLabel'},
        'Day/Time'
    )
    let lowTempLabel = React.createElement(
        'p',
        {className: 'foreday', key: 'lowTempLabel'},
        'Low'
    )
    let highTempLabel = React.createElement(
        'p',
        {className: 'foreday', key: 'highTempLabel'},
        'highTemp'
    )
    let condLabel = React.createElement(
        'p',
        {className: 'foreday', key: 'condLabel'},
        'Condition'
    )
    let windLabel = React.createElement(
        'p',
        {className: 'foreday', key: 'windLabel'},
        'Wind'
    )

    for(i = 0; i < weatherData.length; i++){
        let forecastData = weatherData[i];
        //the new paragraphs to be added to next flex div
        let newDay = React.createElement(
            'p', 
            {className: 'foreday', key: 'newDay' + i},
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
                dayLabel,
                newDayArray.slice()
            );
            let lowTempDiv = React.createElement(
                'div',
                {className: 'column', key: 'LowTempDiv' + i},
                lowTempLabel,
                newLowTempArray.slice()
            );
            let highTempDiv = React.createElement(
                'div',
                {className: 'column', key: 'HighTempDiv' + i},
                highTempLabel,
                newHighTempArray.slice()
            );
            let condDiv = React.createElement(
                'div',
                {className: 'column', key: 'condDiv' + i},
                condLabel,
                newCondArray.slice()
            );
            let windDiv = React.createElement(
                'div',
                {className: 'column', key: 'windDiv' + i},
                windLabel,
                newWindArray.slice()
            );
            
            dailyDiv.push(dayDiv, lowTempDiv, highTempDiv, condDiv, windDiv);
            return dailyDiv;                
        }
    }

}

export default useDailyForecast

// new Date(forecastData.dt * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', year: '2-digit', hour: 'numeric', minute: '2-digit'})