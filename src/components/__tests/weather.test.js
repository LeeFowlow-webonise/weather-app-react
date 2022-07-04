import { render } from '@testing-library/react';
import weatherData from '../../util/__forTests/mockWeatherData';
import Weather from '../weather';

describe('city forecast component', () => {

    test('renders with input', () => {
        const {getByTestId} = render(<Weather weatherData={weatherData.weatherData}/>);
        const forecast = getByTestId('weatherDiv');
        expect(forecast).toBeTruthy();
    })
})