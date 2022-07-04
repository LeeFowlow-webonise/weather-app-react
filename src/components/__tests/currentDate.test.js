import { render, screen } from '@testing-library/react';
import moment from 'moment';
import weatherData from '../../util/__forTests/mockWeatherData';
import CurrentDate from '../elements/currentDate';

let testWeekday = moment().format('dddd') + ',';
let testDay = moment().format('LL');
let testDescription = weatherData.cityDate[1];

describe('current date component', () => {

    test('renders and displays appropriate output', () => {
        const {getByTestId} = render(<CurrentDate weatherData={weatherData.cityDate[1]}/>);
        const forecast = getByTestId('dateDiv');
        expect(forecast).toBeTruthy();
        screen.getByText(testWeekday);
        screen.getByText(testDay);
        screen.getByText(testDescription);
    })
})