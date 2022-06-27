import { render } from '@testing-library/react';
import Forecast from './forecast';

describe('hourly forecast component', () => {

    test('rendered input', () => {
        const {getByTestId} = render(<Forecast/>);
        const forecast = getByTestId('forecastDiv');
        expect(forecast).toBeTruthy();
    })

})