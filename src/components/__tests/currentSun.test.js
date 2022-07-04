import { render } from '@testing-library/react';
import weatherData from '../../util/__forTests/mockWeatherData';
import CurrentSun from '../elements/currentSun';

describe('searched city current sunlight hours component', () => {

    test('rendered input', () => {
        const {getByTestId} = render(<CurrentSun weatherData={weatherData.sunlight}/>);
        const forecast = getByTestId('sunDiv');
        expect(forecast).toBeTruthy();
    })
})