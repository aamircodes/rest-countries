import { render, fireEvent } from '@testing-library/react';
import CountrySearch from '@/app/components/CountrySearch';

describe('CountrySearch', () => {
  it('renders correctly', () => {
    const mockHandleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <CountrySearch search='' handleSearchChange={mockHandleChange} />
    );

    expect(getByPlaceholderText('Search for a country...')).toBeInTheDocument();
  });

  it('calls handleSearchChange on input change', () => {
    const mockHandleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <CountrySearch search='' handleSearchChange={mockHandleChange} />
    );
    const input = getByPlaceholderText('Search for a country...');

    fireEvent.change(input, { target: { value: 'Spain' } });

    expect(mockHandleChange).toHaveBeenCalled();
  });

  it('displays the correct search value', () => {
    const mockHandleChange = jest.fn();
    const { getByDisplayValue } = render(
      <CountrySearch search='France' handleSearchChange={mockHandleChange} />
    );

    expect(getByDisplayValue('France')).toBeInTheDocument();
  });
});
