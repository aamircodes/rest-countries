import { Country } from '../services/countryService';
export interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  const { flags, name, capital, region, population } = country;
  return (
    <div className='card w-96 bg-base-100 shadow-xl' data-testid='country-card'>
      <figure>
        <img src={flags.png} alt={flags.alt} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title' data-testid='country-name'>
          {name.common}
        </h2>
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

export default CountryCard;
