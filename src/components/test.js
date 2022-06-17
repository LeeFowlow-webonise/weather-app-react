
//THIS COMPONENT IS CURRENTLY BYPASSED
//AM GOING LEARN HOW TO DYNAMICALLY ADD SCRIPTS THROUGH HERE

import React from 'react';
import '../App.css';
import useWidget from '../hooks/useWidget';

const Test = (weatherData) => {


    return( 
        weatherData.weatherData[0].id
        // <div>
        //     <script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script>
        //     <script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  window.myWidgetParam.push({id: 11,cityid: '2643743',appid: 'd2b1fec5795397279cf8050cce3a8637',units: 'metric',containerid: 'useWidget-11',  });  (function() {var script = document.createElement('script');script.async = true;script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();</script>
        // </div>
        // console.log(widgetScripts)
    )
}

export default Test;