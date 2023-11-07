import { quotes } from "./config"
import { composeRandomQuote } from "./compose-random-quote"

beforeEach(() => {
    jest.spyOn(Math, 'random').mockReturnValue(0.42)
});
afterEach(() => {
    jest.restoreAllMocks()
});

describe('When called with a quote list', () => {

    it('should return the second (random) quote', () => {
        // Arrange
        const result = composeRandomQuote(quotes)

        // Assert
        expect(result).toEqual(quotes[1])
    });
});