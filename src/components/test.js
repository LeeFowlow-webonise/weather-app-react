
//THIS COMPONENT IS CURRENTLY BYPASSED
//AM GOING LEARN HOW TO DYNAMICALLY ADD SCRIPTS THROUGH HERE

import React from 'react';
import '../App.css';
import useWidget from '../hooks/useWidget';

const Test = (weatherData) => {
    const mainScript = React.createElement(
        'script',
        {src: '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'}
    )

    const callScript = React.createElement(
        'script',
        null,
        `window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
            window.myWidgetParam.push(id: 11, cityid: '${weatherData.weatherData[0].id}', appid: '${process.env.REACT_APP_API_KEY}',
            units: 'metric', containerid: 'root'});
            (function() {var script = document.createElement('script');script.async = true;
            script.charset = "utf-8";
            script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
            var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  }
            )
            )();`
    )

    let widgetScripts = [mainScript, callScript];

    // let callScript = useWidgetTest(weatherData.weatherData[0].id);

    return( 
        <div>
            {callScript}
        </div>
        // console.log(widgetScripts)
    )
}

export default Test;