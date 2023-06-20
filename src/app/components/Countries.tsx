import Country from './Country';

interface CountriesProps {
  search: string;
  countries: any[];
}

const Countries = ({ search, countries }: CountriesProps) => {
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
      {filteredCountries.map((country, index) => (
        <Country key={index} country={country} />
      ))}
    </div>
  );
};

export default Countries;
