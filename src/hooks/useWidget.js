
//NOT IMPLEMENTED, and likely to be removed in the future. Was my first attempt at passing
//scripts dynamically into the component.

import React from 'react';



 //     {<script src='//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'></script>
 //     <script>window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
 //     window.myWidgetParam.push({id: 11,cityid: '6112046',appid: 'd2b1fec5795397279cf8050cce3a8637',
 //     units: 'metric',containerid: 'root',  });  
 //     (function() {var script = document.createElement('script');script.async = true;
 //     script.charset = "utf-8";
 //     script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
 //     var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();</script>

const useWidget = (cityId) => {

    //could only get widgetParamObj and widgetFunction to work by coding them directly into callScript

    // let widgetParamObj = {
    //     id: 11,
    //     cityid: cityId,
    //     appid: process.env.REACT_APP_API_KEY,
    //     units: 'metric',
    //     containerid: 'useWidget-11'
    // };

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

    // let mainScript = React.createElement(
    //     'script',
    //     {src: '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js', key: 'main'}
    // );

    // let callScript = React.createElement(
    //     'script',
    //     {key: 'call'},
    //     `window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
    //      window.myWidgetParam.push(id: 11, cityid: '${cityId}', appid: '${process.env.REACT_APP_API_KEY}',
    //         units: 'metric', containerid: 'useWidget-11'});
    //     (function() {var script = document.createElement('script');script.async = true;
    //         script.charset = "utf-8";
    //         script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    //         var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  }
    //         )
    //     )();`

    // );

    let callScript = `window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
        window.myWidgetParam.push({id: 11,cityid: '${cityId}',appid: '${process.env.REACT_APP_API_KEY}',
        units: 'metric',containerid: 'root',  });  
        (function() {var script = document.createElement('script');script.async = true;
        script.charset = "utf-8";script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(script, s);  })();`

    // let widgetScripts = [mainScript, callScript];

    return(
        callScript
    )
}

export default useWidget