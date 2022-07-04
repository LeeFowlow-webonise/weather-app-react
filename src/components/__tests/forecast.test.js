import { render } from '@testing-library/react';
import weatherData from '../../util/__forTests/mockWeatherData';
import Hourly from '../forecast';

let forecastDiv = weatherData.forecastData;
forecastDiv.push('hourly');

describe('hourly forecast component', () => {

    test('renders with input', () => {
        const {getByTestId} = render(<Hourly weatherData={forecastDiv}/>);
        const forecast = getByTestId('forecastDiv');
        expect(forecast).toBeTruthy();
    })

})