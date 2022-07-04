import { render } from '@testing-library/react';
import weatherData from '../../util/__forTests/mockWeatherData';
import CurrentTemp from '../elements/currentTemp';

describe('searched city current temp display component', () => {

    test('rendered input', () => {
        const {getByTestId} = render(<CurrentTemp weatherData={weatherData.temp}/>);
        const forecast = getByTestId('tempDiv');
        expect(forecast).toBeTruthy();
    })
})