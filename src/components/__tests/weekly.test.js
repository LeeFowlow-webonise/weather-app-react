import { render } from '@testing-library/react';
import weatherData from '../../util/__forTests/mockWeatherData';
import Weekly from '../weekly';

let forecastDiv = weatherData.forecastData;
forecastDiv.push('weekly');

describe('weekly forecast component', () => {

    test('renders with input', () => {
        const {getByTestId} = render(<Weekly location={forecastDiv}/>);
        const forecast = getByTestId('weeklyDiv');
        expect(forecast).toBeTruthy();
    })
})