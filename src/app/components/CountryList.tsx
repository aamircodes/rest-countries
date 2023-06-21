import { Country } from '../services/countryService';
import CountryCard from './CountryCard';

interface CountryListProps {
  search: string;
  countries: Country[];
}

const CountryList = ({ search, countries }: CountryListProps) => {
  const filteredCountries =
    search.trim() === ''
      ? []
      : countries.filter((country) => {
          return country.name.common
            .toLowerCase()
            .startsWith(search.toLowerCase().trim());
        });
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-4'>
      {filteredCountries.map((country) => (
        <CountryCard key={country.cca2} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
