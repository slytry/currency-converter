import { renderHook } from '@testing-library/react'
import { useConverter } from '.';
import { act } from '@testing-library/react';

const stub = {
    initialRub: 100,
    rate: 100,
    usd: 1
}

describe('When hook `useConverter` rendered', () => {
    it('Initial amount of RUB should be equal to returned', () => {
        // Arrange
        const { result } = renderHook(() => useConverter(stub.initialRub, stub.rate))

        // Assert
        expect(result.current.rub).toBe(100)
    });
    it('USD value should bo equal to calculated amount of usd', () => {
        // Arrange
        const { result } = renderHook(() => useConverter(stub.initialRub, stub.rate))

        // Assert
        expect(result.current.usd).toBe(1)
    });
});


describe('When called `updateRub` method', () => {
    it('should update RUB value', () => {
        // Arrange
        const { result } = renderHook(() => useConverter(stub.initialRub, stub.rate))

        // Act
        act(() => {
            result.current.updateRub(10)
        })

        // Assert
        expect(result.current.rub).toBe(10)
    });
    it('should recalculate USD value', () => {
        // Arrange
        const { result } = renderHook(() => useConverter(stub.initialRub, stub.rate))

        // Act
        act(() => {
            result.current.updateRub(10)
        })

        // Assert
        expect(result.current.usd).toBe(0.1)
    });
});

describe('When called `updateUsd` method', () => {
    it('should update USD value', () => {
        // Arrange
        const { result } = renderHook(() => useConverter(stub.initialRub, stub.rate))

        // Act
        act(() => {
            result.current.updateUsd(10)
        })

        // Assert
        expect(result.current.usd).toBe(10)
    });
    it('should recalculate RUB value', () => {
        // Arrange
        const { result } = renderHook(() => useConverter(stub.initialRub, stub.rate))

        // Act
        act(() => {
            result.current.updateUsd(10)
        })

        // Assert
        expect(result.current.rub).toBe(1000)
    });
});

describe('When re-rendered', () => {
    it.todo('should update its value',);
});