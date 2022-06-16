import React from 'react';
import '../App.css';
import useWidget from '../hooks/useWidget';

const Test = (weatherData) => {
    const widgetURL = useWidget(weatherData.weatherData[0].id);

    return( 
        console.log(widgetURL)
        //console.log(widgetURL)
        // <div id='useWidget-11'>
        //     {widgetURL}
        // </div>
    )
}

export default Test;