import { Country } from '../services/countryService';
export interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  const { flags, name, capital, region, population } = country;
  const formattedPopulation = population.toLocaleString();

  return (
    <div
      className='card w-full h-full bg-base-100 shadow-xl'
      data-testid='country-card'
    >
      <figure>
        <img src={flags.png} alt={flags.alt} />
      </figure>
      <div className='card-body'>
        <div className='card-body'>
          <h2 className='card-title' data-testid='country-name'>
            {name.common}
          </h2>
          {capital && (
            <div>
              <strong>Capital: </strong> {capital[0]}
            </div>
          )}
          {region && (
            <div>
              <strong>Region: </strong> {region}
            </div>
          )}
          {formattedPopulation && (
            <div>
              <strong>Population: </strong> {formattedPopulation}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
