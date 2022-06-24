let weatherData = [];

const citySearch = async(cityName) => {

    if(cityName != null){
    await fetch(`${process.env.REACT_APP_API_URL}/weather?q=${cityName}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
            if (result.cod === '400'){
            console.log(result.err);
            return(null);
            } else {
            weatherData.push(result.dt);
            weatherData.push(result.weather[0].description);
            weatherData.push(result.main.temp);
            weatherData.push(result.main.humidity);
            weatherData.push(result.sys.sunrise);
            weatherData.push(result.sys.sunset);
            }
        })
        return weatherData;
    }
}

export default citySearch