export interface CountryProps {
  flags: { png: string; alt: string };
  name: { common: string };
  capital?: string[];
  region: string;
  population: number;
  cca3?: string;
}

export const getCountries = async (): Promise<CountryProps[]> => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data: CountryProps[] = await response.json();
    return data;
  } catch (error) {
    throw new Error('Fetch error');
  }
};
