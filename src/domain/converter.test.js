import { rubToUsd, usdToRub } from "./converter";

describe('when converting rub to usd', () => {
    it('should return a correct converted value', () => {
        //Arrange
        const result = rubToUsd(10, 50)

        //Assert
        expect(result).toEqual(0.2)
    });
});

describe('when converting usd to rub', () => {
    it('should return a correct converted value', () => {
        //Arrange
        const testCases = [
            { usd: 1, rate: 100, rub: 100 },
            { usd: 10, rate: 100, rub: 1000 },
            { usd: 1.2, rate: 100, rub: 120 },
            { usd: 1.222222, rate: 100, rub: 122.22 }
        ]

        //Assert
        testCases.forEach(({ usd, rate, rub }) => {
            const result = usdToRub(usd, rate)
            expect(result).toEqual(rub)
        })

    });
});