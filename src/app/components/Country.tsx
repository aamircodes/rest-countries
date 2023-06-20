export interface CountryProps {
  country: {
    flags: { png: string; alt: string };
    name: { common: string };
    capital: string[];
    region: string;
    population: number;
  };
}

const Country = ({ country }: CountryProps) => {
  const { flags, name, capital, region, population } = country;
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src={flags.png} alt={flags.alt} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{name.common}</h2>
        {capital && (
          <p>
            <strong>Capital: </strong> {capital[0]}
          </p>
        )}
        {region && (
          <p>
            <strong>Region: </strong> {region}
          </p>
        )}
        {population && (
          <p>
            <strong>Population: </strong> {population.toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default Country;
