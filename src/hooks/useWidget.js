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

    let widgetParamObj = {
        id: 11,
        cityid: cityId,
        appid: process.env.REACT_APP_API_KEY,
        units: 'metric',
        containerid: 'useWidget-11'
    };

    let widgetFunction = () => {
        var script = React.createElement('script');
        script.async = true;
        script.charset = "utf-8";
        script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
    };

    let mainScript = React.createElement(
        'script',
        {src: '//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js'}
    );

    let callScript = React.createElement(
        'script',
        null,
        `window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];  
        window.myWidgetParam.push(${widgetParamObj});(${widgetFunction})
        )();</script>`

    );

    return(
        // console.log([
        //     {'wPO': widgetParamObj},
        //     {'main': mainScript},
        //     {'call': callScript},
        //     {'func': widgetFunction}
        // ])
        mainScript,
        callScript
    )
}

export default useWidget