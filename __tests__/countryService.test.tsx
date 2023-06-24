import { getCountries, CountryProps } from '@/app/services/countryService';

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
              cca3: 'CC1',
            },
            {
              flags: { png: 'flag.png', alt: 'Country Flag' },
              name: { common: 'Country 2' },
              capital: ['Capital 2'],
              region: 'Region 2',
              population: 2000000,
              cca3: 'CC2',
            },
          ]),
      })
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('returns an array of countries', async () => {
    const countries: CountryProps[] = await getCountries();

    expect(countries).toHaveLength(2);
    expect(countries[0].name.common).toBe('Country 1');
    expect(countries[0].capital?.[0]).toBe('Capital 1');
    expect(countries[0].population)?.toBe(1000000);
    expect(countries[0].flags.png).toBe('flag.png');
    expect(countries[0].flags.alt).toBe('Country Flag');
    expect(countries[0].cca3).toBe('CC1');
    expect(countries[1].name.common).toBe('Country 2');
    expect(countries[1].capital?.[0]).toBe('Capital 2');
    expect(countries[1].population)?.toBe(2000000);
    expect(countries[1].flags.png).toBe('flag.png');
    expect(countries[1].flags.alt).toBe('Country Flag');
    expect(countries[1].cca3).toBe('CC2');
  });

  test('handles errors during fetching', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Fetch error'));

    await expect(getCountries()).rejects.toThrow('Fetch error');
  });

  test('verifies flags and cca3 properties of countries', async () => {
    const countries: CountryProps[] = await getCountries();

    expect(countries[0].flags.png).toBe('flag.png');
    expect(countries[0].flags.alt).toBe('Country Flag');
    expect(countries[0].cca3).toBe('CC1');
    expect(countries[1].flags.png).toBe('flag.png');
    expect(countries[1].flags.alt).toBe('Country Flag');
    expect(countries[1].cca3).toBe('CC2');
  });

  test('handles absence of optional property "capital"', async () => {
    global.fetch = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              flags: { png: 'flag.png', alt: 'Country Flag' },
              name: { common: 'Country without Capital' },
              region: 'Region without Capital',
              population: 3000000,
              cca3: 'CCW',
            },
          ]),
      })
    );

    const countries: CountryProps[] = await getCountries();

    expect(countries[0].capital).toBeUndefined();
  });
});
