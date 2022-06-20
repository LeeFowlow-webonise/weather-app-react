
//NOT IMPLEMENTED, and likely to be removed in the future. Was my first attempt at passing
//scripts dynamically into the component.

//import React from 'react';

const useWidget = (weatherData) => {
    let cityId = weatherData.weatherData[0].id;

//     //this if/else came before defining window.myWidgetParam, as provided by openweathermap
//     //
//     if (window.myWidgetParam !== 'undefined'){
//         window.myWidgetParam = [];  
//         window.myWidgetParam.push({id: 11,cityid: cityId,appid: process.env.REACT_APP_API_KEY,units: 'metric',containerid: 'useWidget-11',  });  
        
//         (function() {
//             var script = document.createElement('script');
//             script.async = true;
//             script.charset = "utf-8";
//             script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
//             var s = document.getElementsByTagName('script')[0];
//             s.parentNode.insertBefore(script, s);
//             console.log(s.parentNode);  
//         })();
//     }

    // let widgetFunction = () => {
    //     var script = document.createElement('script');
    //     script.async = true;
    //     script.charset = "utf-8";
    //     script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    //     // var script = React.createElement(
    //     //     'script',
    //     //     {async: 'true', charset: 'utf-8',
    //     //     src: "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"});
    //     var s = document.getElementsByTagName('script')[0];
    //     console.log(s);
    //     s.parentNode.insertBefore(script, s);
    // };
}

export default useWidget