import { render, screen } from '@testing-library/react';
import CountryList from '@/app/components/CountryList';

describe('CountryList', () => {
  const mockCountries = [
    {
      flags: { png: 'url1', alt: 'alt text 1' },
      name: { common: 'country name 1' },
      capital: ['capital name 1'],
      region: 'region 1',
      population: 1000000,
      cca2: 'cc1',
    },
    {
      flags: { png: 'url2', alt: 'alt text 2' },
      name: { common: 'country name 2' },
      capital: ['capital name 2'],
      region: 'region 2',
      population: 2000000,
      cca2: 'cc2',
    },
  ];

  it('renders CountryCard for each country', () => {
    render(<CountryList search='country' countries={mockCountries} />);

    expect(screen.getAllByTestId('country-card').length).toBe(2);
    expect(screen.getByText('country name 1')).toBeInTheDocument();
    expect(screen.getByText('country name 2')).toBeInTheDocument();
  });

  it('renders no CountryCard when search does not match', () => {
    render(<CountryList search='no match' countries={mockCountries} />);

    expect(screen.queryAllByTestId('country-card').length).toBe(0);
  });
});
