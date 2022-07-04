import { render } from '@testing-library/react';
import ForecastElement from '../elements/forecastElement';

describe('check to see if forecastElement renders', () => {

    test('rendered input', () => {
        const {getByTestId} = render(<ForecastElement forecastDiv={<div></div>}/>);
        const forecast = getByTestId('forecastElement');
        expect(forecast).toBeTruthy();
    })
})