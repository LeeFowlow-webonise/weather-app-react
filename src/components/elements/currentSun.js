const CurrentSun = (weatherData) => {
    return(
    <div className='flex'>
        <p className='sunrise-sunset'>Sunrise: {new Date(weatherData.weatherData[0] * 1000).toLocaleTimeString('en-IN')}</p>
        <p className='sunrise-sunset'>Sunset: {new Date(weatherData.weatherData[1] * 1000).toLocaleTimeString('en-IN')}</p>
    </div>
    )
}

export default CurrentSun