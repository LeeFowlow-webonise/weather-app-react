import React from 'react';
let weatherArray = [];


//IMPLEMENTATION BREAKS RULES OF HOOKS. I AM TRYING TO CALL THE HOOK IN AN ONCLICK EVENT, WHEN IT NEEDS
//TO BE DONE ON LOAD OF COMPONENT. GOING TO CHNAGE THE CITYNAME INPUT TO COME BEFORE THE COMPONENT LOADS

const useCitySearch = async (cityName) => {
    // const [data, setData] = useState([]);

    // //call based on city name, instead of lat/long    
        await fetch(`${process.env.REACT_APP_API_URL}/weather?q=${cityName}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                //ensures no bad requests get added to the weatherData array
                if (result.cod === '400'){
                console.log(result.err);
                return(null);
                } else {
                console.log(result);
                weatherArray.push(result.dt);
                weatherArray.push(result.weather[0].description);
                weatherArray.push(result.main.temp);
                weatherArray.push(result.main.humidity);
                weatherArray.push(result.sys.sunrise);
                weatherArray.push(result.sys.sunset);
                return weatherArray;
                }
            })
}

export default useCitySearch