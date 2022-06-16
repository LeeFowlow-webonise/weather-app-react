import React from 'react';
import '../App.css';
import useWidget from '../hooks/useWidget';

const Test = (weatherData) => {
    const widgetURL = useWidget(weatherData.weatherData[0].id);

    return( 
        'testing'
        //console.log(widgetURL)
        // <div id='useWidget-11'>
        //     {widgetURL}
        // </div>
    )
}

export default Test;