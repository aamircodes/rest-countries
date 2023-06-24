import { render, screen, waitFor } from '@testing-library/react';
import Home from '@/app/page';
import userEvent from '@testing-library/user-event';
import { CountryProps, getCountries } from '@/app/services/countryService';

jest.mock('../src/app/services/countryService');
jest.mock('../src/app/utils/constants', () => ({
  REGIONS: ['Region1', 'Region2'],
}));

const countriesMock: CountryProps[] = [
  {
    flags: { png: 'url1', alt: 'country1' },
    name: { common: 'Country1' },
    region: 'Region1',
    population: 1000000,
    cca3: 'C1',
  },
  {
    flags: { png: 'url2', alt: 'country2' },
    name: { common: 'Country2' },
    region: 'Region2',
    population: 2000000,
    cca3: 'C2',
  },
];

describe('Home component', () => {
  beforeEach(() => {
    (getCountries as jest.Mock).mockResolvedValue(countriesMock);
  });

  it('fetches countries data and renders CountryCards', async () => {
    render(<Home />);
    const cards = await screen.findAllByTestId('country-card');
    expect(cards).toHaveLength(countriesMock.length);
  });

  it('filters countries by search', async () => {
    render(<Home />);
    const searchInput = screen.getByPlaceholderText('Search for a country...');
    userEvent.type(searchInput, 'Country1');
    await waitFor(() => {
      expect(screen.getByText('Country1')).toBeInTheDocument();
      expect(screen.queryByText('Country2')).not.toBeInTheDocument();
    });
  });

  it('filters countries by region', async () => {
    render(<Home />);
    const filterSelect = screen.getByLabelText('Filter by Region');
    userEvent.selectOptions(filterSelect, 'Region1');
    await waitFor(() => {
      expect(screen.getByText('Country1')).toBeInTheDocument();
      expect(screen.queryByText('Country2')).not.toBeInTheDocument();
    });
  });

  it('should handle country fetch correctly', async () => {
    const countries = await getCountries();
    expect(countries).toEqual(countriesMock);
  });

  // it('renders error on data fetch failure', async () => {
  //   (getCountries as jest.Mock).mockRejectedValue(new Error('Fetch error'));
  //   render(<Home />);
  // });
});
