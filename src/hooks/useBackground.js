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
        scatteredclouds: 'assets/images/backgrounds/scattered\ clouds.jpg',//eslint-disable-line        
        heavyintensityrain: 'assets/images/backgrounds/heavy\ intensity\ rain.jpg',//eslint-disable-line        
        smoke: 'assets/images/backgrounds/smoke.jpg',//eslint-disable-line        
        lightintensitydrizzle: 'assets/images/backgrounds/light\ intensity\ drizzle.jpg',//eslint-disable-line        
    }

    let currentWeather = (weatherData[0].weather[0].description).replace(/\s+/g, '');
   
    if (images[currentWeather] != null){
        return ([currentWeather, images[currentWeather]]);
    } else {
        return (images.clearsky);
    }
}

export default useBackground