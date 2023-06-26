import Link from 'next/link';
import { CountryProps } from '../services/countryService';
export interface CountryCardProps {
  country: CountryProps;
}

const CountryCard = ({ country }: CountryCardProps) => {
  const { flags, name, capital, region, population, cca3 } = country;
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
        <h2 className='card-title'>
          <Link href={`/${cca3}`}> {name.common}</Link>
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
