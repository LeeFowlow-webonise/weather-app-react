import { render, screen } from '@testing-library/react';
import weatherData from '../../util/__forTests/mockWeatherData';
import CurrentSun from '../elements/currentSun';

let testSunrise = new Date(weatherData.sunlight[0] * 1000).toLocaleTimeString('en-IN');
let testSunset = new Date(weatherData.sunlight[1] * 1000).toLocaleTimeString('en-IN');

describe('searched city current sunlight hours component', () => {

    test('renders and displays appropriate output', () => {
        const {getByTestId} = render(<CurrentSun weatherData={weatherData.sunlight}/>);
        const forecast = getByTestId('sunDiv');
        expect(forecast).toBeTruthy();
        screen.getByText('Sunrise: ' + testSunrise);
        screen.getByText('Sunset: ' + testSunset);
    })
})