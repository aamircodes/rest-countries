import { Country } from '../services/countryService';
export interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  const { flags, name, capital, region, population } = country;
  const formattedPopulation = population.toLocaleString();

  return (
    <div
      className='card card-compact bg-base-100 shadow-xl w-72 h-80'
      data-testid='country-card'
    >
      <figure className='h-1/2'>
        <img src={flags.png} alt={flags.alt} />
      </figure>
      <div className='card-body h-1/2'>
        <h2 className='card-title' data-testid='country-name'>
          {name.common}
        </h2>
        {capital && (
          <div>
            <strong>Capital: </strong> {capital[0]}
          </div>
        )}
        <div>
          <strong>Region: </strong> {region}
        </div>
        <div>
          <strong>Population: </strong> {formattedPopulation}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
