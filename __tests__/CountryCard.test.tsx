import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CountryCard from '@/app/components/CountryCard';

describe('CountryCard', () => {
  const mockCountry = {
    flags: {
      png: 'https://example.com/flag.png',
      alt: 'Mock Country Flag',
    },
    name: { common: 'mockCountry' },
    capital: ['mockCapital'],
    region: 'MockRegion',
    population: 123456,
  };

  test('renders correctly when all properties are defined', () => {
    render(<CountryCard country={mockCountry} />);

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      mockCountry.flags.png
    );
    expect(screen.getByRole('img')).toHaveAttribute(
      'alt',
      mockCountry.flags.alt
    );
    expect(screen.getByText('mockCountry')).toBeInTheDocument();
    expect(screen.getByText('Capital:')).toBeInTheDocument();
    expect(screen.getByText('mockCapital')).toBeInTheDocument();
    expect(screen.getByText('Region:')).toBeInTheDocument();
    expect(screen.getByText('MockRegion')).toBeInTheDocument();
    expect(screen.getByText('Population:')).toBeInTheDocument();
    expect(screen.getByText('123,456')).toBeInTheDocument();
  });

  test('renders correctly when capital is undefined', () => {
    const countryWithoutCapital = { ...mockCountry, capital: undefined };
    render(<CountryCard country={countryWithoutCapital} />);

    expect(screen.queryByText('Capital:')).not.toBeInTheDocument();
  });

  test('renders correctly when region is undefined', () => {
    const countryWithoutRegion = { ...mockCountry, region: undefined };
    render(<CountryCard country={countryWithoutRegion} />);

    expect(screen.queryByText('Region:')).not.toBeInTheDocument();
  });

  test('renders correctly when population is undefined', () => {
    const countryWithoutPopulation = { ...mockCountry, population: undefined };
    render(<CountryCard country={countryWithoutPopulation} />);

    expect(screen.queryByText('Population:')).not.toBeInTheDocument();
  });
});
