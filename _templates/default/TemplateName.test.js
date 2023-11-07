import { render, screen } from '@testing-library/react';
import { TemplateName } from './TemplateName';

describe('<TemplateName />', () => {
  test('it should mount', () => {
    render(<TemplateName />);

    const result = screen.getByTestId('TemplateName');

    expect(result).toBeInTheDocument();
  });
});