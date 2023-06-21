import { render, fireEvent, act } from '@testing-library/react';
import Home from '../src/app/page';
import { getCountries } from '@/app/services/countryService';

jest.mock('../src/app/services/countryService', () => ({
  getCountries: jest.fn(),
}));

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (getCountries as jest.Mock).mockResolvedValue([]);
  });

  it('renders without crashing', () => {
    render(<Home />);
  });

  it('calls getCountries on component mount', async () => {
    const countriesMock = [
      {
        name: {
          common: 'Country',
        },
        cca2: 'CC',
        flags: {
          png: 'flag.png',
        },
        capital: ['Capital'],
        region: 'Region',
        population: 1000,
      },
    ];
    (getCountries as jest.Mock).mockResolvedValueOnce(countriesMock);

    await act(async () => {
      render(<Home />);
    });

    expect(getCountries).toHaveBeenCalledTimes(1);
  });

  it('handleSearchChange updates the search state correctly', () => {
    const { getByPlaceholderText } = render(<Home />);
    const searchInput = getByPlaceholderText(
      'Search for a country'
    ) as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: 'Spain' } });

    expect(searchInput.value).toBe('Spain');
  });

  it('renders Navbar, CountrySearch, and CountryList', () => {
    const { getByText, getByPlaceholderText } = render(<Home />);

    expect(getByText('Country Explorer')).toBeInTheDocument();
    expect(getByPlaceholderText('Search for a country')).toBeInTheDocument();
  });

  //   it('displays countries correctly when getCountries is called', async () => {
  //     const countriesMock = [
  //       {
  //         name: {
  //           common: 'Country1',
  //         },
  //         cca2: 'C1',
  //         flags: {
  //           png: 'flag1.png',
  //         },
  //         capital: ['Capital1'],
  //         region: 'Region1',
  //         population: 1000,
  //       },
  //       {
  //         name: {
  //           common: 'Country2',
  //         },
  //         cca2: 'C2',
  //         flags: {
  //           png: 'flag2.png',
  //         },
  //         capital: ['Capital2'],
  //         region: 'Region2',
  //         population: 2000,
  //       },
  //     ];
  //     (getCountries as jest.Mock).mockResolvedValueOnce(countriesMock);

  //     const wrapper = await act(async () => {
  //       return render(<Home />);
  //     });

  //     const country1 = await wrapper.findByText('Country1');
  //     const country2 = await wrapper.findByText('Country2');

  //     expect(country1).toBeInTheDocument();
  //     expect(country2).toBeInTheDocument();
  //   });
});
