/* eslint-disable no-undef */

import { render, screen } from '@testing-library/react'
import { quotes } from './config';
import { Quote } from './quote';

describe('When quote rendered', () => {

    const quoteStub = quotes[0];
    const { text, author } = quoteStub;

    it('should contain an expected text', () => {
        // Arrange
        render(<Quote quote={quoteStub} />)

        // Act
        const result = screen.getByText(new RegExp(text))

        // Assert
        expect(result).toBeInTheDocument();
    });

    it('should contain an expexted author', () => {
        // Arrange
        render(<Quote quote={quoteStub}/>)

        // Act
        const result = screen.getByText(new RegExp(author))
        
        // Assert
        expect(result).toBeInTheDocument();
    });
});