import { render, screen } from '@testing-library/react';
import weatherData from '../../util/__forTests/mockWeatherData';
import Weather from '../weather';

let weatherInfo = weatherData.weatherData[0];
let testSunrise = new Date(weatherInfo.sys.sunrise * 1000).toLocaleTimeString('en-IN');

describe('city forecast component', () => {

    test('renders renders and displays appropriate output', () => {
        const {getByTestId} = render(<Weather weatherData={weatherData.weatherData}/>);
        const forecast = getByTestId('weatherDiv');
        expect(forecast).toBeTruthy();

        screen.getByText(weatherInfo.name + ' -');
        screen.getByText(weatherInfo.weather[0].description);
        //checks for temp display
        screen.getByText(/15.57/i);
        screen.getByText('Sunrise: ' + testSunrise);
    })
})