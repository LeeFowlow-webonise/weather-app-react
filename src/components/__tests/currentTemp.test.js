import { render, screen } from '@testing-library/react';
import weatherData from '../../util/__forTests/mockWeatherData';
import CurrentTemp from '../elements/currentTemp';

describe('searched city current temp display component', () => {

    test('renders and displays appropriate output', () => {
        const {getByTestId} = render(<CurrentTemp weatherData={weatherData.temp}/>);
        const forecast = getByTestId('tempDiv');
        expect(forecast).toBeTruthy();
        screen.getByText(/30.94/i);
        screen.getByText(/26/i);
    })
})