import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryList from '@/app/components/CountryList';

const mockCountries = [
  {
    cca3: 'abc',
    flags: { png: '', alt: '' },
    name: { common: 'CountryA' },
    region: 'RegionA',
    population: 1000,
  },
  {
    cca3: 'def',
    flags: { png: '', alt: '' },
    name: { common: 'CountryB' },
    region: 'RegionB',
    population: 2000,
  },
];

describe('CountryList', () => {
  it('should render CountryList', () => {
    render(
      <CountryList search='' countries={mockCountries} selectedRegion='' />
    );
    mockCountries.forEach((country) => {
      expect(screen.getByText(country.name.common)).toBeInTheDocument();
    });
  });

  it('should filter countries by search', () => {
    render(
      <CountryList
        search='CountryA'
        countries={mockCountries}
        selectedRegion=''
      />
    );
    expect(screen.getByText('CountryA')).toBeInTheDocument();
    expect(screen.queryByText('CountryB')).toBeNull();
  });

  it('should filter countries by region', () => {
    render(
      <CountryList
        search=''
        countries={mockCountries}
        selectedRegion='RegionB'
      />
    );
    expect(screen.getByText('CountryB')).toBeInTheDocument();
    expect(screen.queryByText('CountryA')).toBeNull();
  });
});
