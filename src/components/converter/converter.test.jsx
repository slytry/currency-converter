/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Converter } from './converter';

describe('When <Converter /> rendered', () => {

    it('rub input should have a value with a rub amount', () => {
        // Arrange
        render(<Converter />)
        const input = screen.getByLabelText(/Сумма в рублях/)

        // Assert
        expect(input).toHaveValue(100);
    });

    it('usd input should have a value with a usd amount', () => {
        // Arrange
        render(<Converter />)
        const input = screen.getByLabelText(/Сумма в долларах/)

        // Assert
        expect(input).toHaveValue(1);
    });
});

describe('When type in a rub input', () => {

    it('should update its value', async () => {
        // Arrange
        render(<Converter />)
        const input = screen.getByLabelText(/Сумма в рублях/)

        // Act
        await userEvent.clear(input)
        await userEvent.type(input, '43')

        // Assert
        expect(input).toHaveValue(43);
    });

});

describe('When type in a usd input', () => {

    it('should update its value', async () => {
        // Arrange
        render(<Converter />)
        const input = screen.getByLabelText(/Сумма в долларах/)

        // Act
        await userEvent.clear(input)
        await userEvent.type(input, '100')

        // Assert
        expect(input).toHaveValue(100);
    });

});