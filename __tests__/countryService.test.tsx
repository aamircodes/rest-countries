import { getCountries, Country } from '@/app/services/countryService';

describe('getCountries', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              flags: { png: 'flag.png', alt: 'Country Flag' },
              name: { common: 'Country 1' },
              capital: ['Capital 1'],
              region: 'Region 1',
              population: 1000000,
              cca2: 'CC1',
            },
            {
              flags: { png: 'flag.png', alt: 'Country Flag' },
              name: { common: 'Country 2' },
              capital: ['Capital 2'],
              region: 'Region 2',
              population: 2000000,
              cca2: 'CC2',
            },
          ]),
      })
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('returns an array of countries', async () => {
    const countries: Country[] = await getCountries();

    expect(countries).toHaveLength(2);
    expect(countries[0].name.common).toBe('Country 1');
    expect(countries[0].capital?.[0]).toBe('Capital 1');
    expect(countries[0].population)?.toBe(1000000);
    expect(countries[1].name.common).toBe('Country 2');
  });

  test('handles errors during fetching', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Fetch error'));

    await expect(getCountries()).rejects.toThrow('Fetch error');
  });
});
