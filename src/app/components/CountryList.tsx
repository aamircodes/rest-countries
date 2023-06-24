import { CountryProps } from '../services/countryService';
import CountryCard from './CountryCard';

interface CountryListProps {
  search: string;
  countries: CountryProps[];
  selectedRegion: string;
}

const CountryList = ({
  search,
  countries,
  selectedRegion,
}: CountryListProps) => {
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .startsWith(search.toLowerCase().trim());
    const matchesRegion =
      !selectedRegion ||
      country.region.toLowerCase() === selectedRegion.toLowerCase();

    return matchesSearch && matchesRegion;
  });

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center py-4'>
      {filteredCountries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
