const SearchCityDate = (weatherData) => {
    return (
    <div className='flex'>
        <p className='day'>{new Date(weatherData.weatherData[0] * 1000).toLocaleString('en-IN', {day: '2-digit', month: 'numeric', hour: 'numeric', minute: '2-digit'})}</p>
        <p className="description">{weatherData.weatherData[1]}</p>
    </div>
    )
}

export default SearchCityDate