import React from 'react';

const converter = (degrees) => {
    const directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest']

    let degreeCalc = Math.round((degrees / 360) * 8);

    return (directions[degreeCalc]);
}

const useForecast = (weatherData) => {
    let i;
    let forecastDiv = [];
    let newDateArray = [];
    let newTempArray = [];
    let newCondArray = [];
    let newWindArray = [];
    let newDirectArray = [];

    let dateLabel = React.createElement(
        'p',
        {className: 'foreday', key: 'dateLabel', style: {color: 'darkgray'}},
        'Date/Time'
    )
    let tempLabel = React.createElement(
        'p',
        {className: 'foreday', key: 'tempLabel', style: {color: 'darkgray'}},
        'Temp'
    )
    let condLabel = React.createElement(
        'p',
        {className: 'foreday', key: 'condLabel', style: {color: 'darkgray'}},
        'Condition'
    )
    let windLabel = React.createElement(
        'p',
        {className: 'foreday', key: 'windLabel', style: {color: 'darkgray'}},
        'Wind'
    )
    let directLabel = React.createElement(
        'p',
        {className: 'foreday', key: 'directLabel', style: {color: 'darkgray'}},
        'Direction'
    )

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
            converter(forecastData.wind.deg)
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
                dateLabel,
                newDateArray.slice()
            );
            let tempDiv = React.createElement(
                'div',
                {className: 'column', key: 'tempDiv' + i},
                tempLabel,
                newTempArray.slice()
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
            let directDiv = React.createElement(
                'div',
                {className: 'column', key: 'directDiv' + i},
                directLabel,
                newDirectArray.slice()
            );
            
            forecastDiv.push(dateDiv, tempDiv, condDiv, windDiv, directDiv);
            return forecastDiv;                
        }
    
    }
}

export default useForecast;