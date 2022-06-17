let images = {
    brokenclouds: 'assets/images/backgrounds/broken\ clouds.jpg',//eslint-disable-line
    clearsky: 'assets/images/backgrounds/clear\ sky.jpg',//eslint-disable-line
    lightrain: 'assets/images/backgrounds/light\ rain.jpg',//eslint-disable-line
    moderaterain: 'assets/images/backgrounds/moderate\ rain.jpg',//eslint-disable-line
    overcastclouds: 'assets/images/backgrounds/overcast\ clouds.jpg',//eslint-disable-line
    'fewclouds': 'assets/images/backgrounds/few\ clouds.jpg'//eslint-disable-line
}

//this function always returns the clear sky image path as of now
const useBackground = (weatherData) => {
    let currentWeather = weatherData[0].weather[0].description;

    //not handling the variables properly. Converting it a string?

    // currentWeather = currentWeather.replace(/\s+/g, '');
   
    if (images.currentWeather != null){
        return (images.currentWeather);
    } else {
        return (images.clearsky);
    }
}

export default useBackground