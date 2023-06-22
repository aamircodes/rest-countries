export interface Country {
  flags: { png: string; alt: string };
  name: { common: string };
  capital?: string[];
  region: string;
  population: number;
  cioc: string;
}

export const getCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data: Country[] = await response.json();
    return data;
  } catch (error) {
    throw new Error('Fetch error');
  }
};
