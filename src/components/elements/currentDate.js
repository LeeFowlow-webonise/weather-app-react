import moment from 'moment';

const CurrentDate = (weatherData) => {
    return (
    <div className='flex' data-testid='dateDiv'>
        <p className='day'>{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
        <p className="description">{weatherData.weatherData}</p>
    </div>
    )
}

export default CurrentDate