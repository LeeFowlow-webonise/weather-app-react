const CurrentTemp = (weatherData) => {
    return(
    <div className='flex' data-testid='tempDiv'>
        <p className='temp'>{weatherData.weatherData[0]} &deg;C</p>
        <p className="temp">Humidity: {weatherData.weatherData[1]} %</p>
    </div>
    )
}

export default CurrentTemp