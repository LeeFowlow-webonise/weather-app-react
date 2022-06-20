

function variableParser(variable){
    let newVar = variable.replace(/\s+/g, '');

    return newVar
}

//this function always returns the clear sky image path as of now
const useBackground = (weatherData) => {
    const images = {
        brokenclouds: 'assets/images/backgrounds/broken\ clouds.jpg',//eslint-disable-line
        clearsky: 'assets/images/backgrounds/clear\ sky.jpg',//eslint-disable-line
        lightrain: 'assets/images/backgrounds/light\ rain.jpg',//eslint-disable-line
        moderaterain: 'assets/images/backgrounds/moderate\ rain.jpg',//eslint-disable-line
        overcastclouds: 'assets/images/backgrounds/overcast\ clouds.jpg',//eslint-disable-line
        fewclouds: 'assets/images/backgrounds/few\ clouds.jpg',//eslint-disable-line
        lightintensityshowerrain: 'assets/images/backgrounds/light\ intensity\ shower\ rain.jpg',//eslint-disable-line
        mist: 'assets/images/backgrounds/mist.jpg',//eslint-disable-line        
    }


    let currentWeather = (weatherData[0].weather[0].description).replace(/\s+/g, '');
    // let varChange = currentWeather.replace(/\s+/g, '');
    //varChange = currentWeather;
    // currentWeather = currentWeather.replace(/\s+/g, '');
    // let currentWeather = variableParser(weatherData[0].weather[0].description);
    

    //not handling the variables properly. Converting it a string?

   
    if (images[currentWeather] != null){
        return (images[currentWeather]);
    } else {
        return (images.clearsky);
    }
}

export default useBackground