import Link from 'next/link';

export default async function CountryPage({
  params,
}: {
  params: { slug: string };
}) {
  const cca3 = params.slug;

  const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
  const data = await response.json();
  const country = data[0];

  return (
    <div className='min-h-screen w-11/12 lg:w-5/6 mx-auto my-4 px-2 sm:px-0'>
      <div className='flex items-center my-4 md:my-8'>
        <Link href='/'>
          <button className='btn btn-sm btn-neutral normal-case'>
            {' '}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5'
            >
              <path
                fillRule='evenodd'
                d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
                clipRule='evenodd'
              ></path>
            </svg>
            Back
          </button>
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 my-4 md:my-8'>
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          className='w-full h-auto object-cover'
        />

        <div className='w-full'>
          <h1 className='text-3xl sm:text-3xl font-bold mb-4 '>
            {country.name.common}
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div id='main-details' className='space-y-1'>
              <div className='text-xs sm:text-sm'>
                <strong>Native Name: </strong>{' '}
                {Object.values(country.name.nativeName)[0].common}
              </div>
              <div className='text-xs sm:text-sm'>
                <strong>Population: </strong> {country.population}
              </div>
              <div className='text-xs sm:text-sm'>
                <strong>Region: </strong> {country.region}
              </div>
              <div className='text-xs sm:text-sm'>
                <strong>Sub Region: </strong> {country.subregion}
              </div>
              <div className='text-xs sm:text-sm'>
                <strong>Capital: </strong> {country?.capital}
              </div>
            </div>
            <div className='other-details space-y-1'>
              <div className='text-xs sm:text-sm'>
                <strong>Top Level Domain: </strong> {country?.tld[0]}
              </div>
              <div className='text-xs sm:text-sm'>
                <strong>Currency: </strong>{' '}
                {Object.values(country.currencies as { name: string }[]).map(
                  (currency: { name: string }) => (
                    <span key={currency.name}>{currency.name}</span>
                  )
                )}
              </div>
              <div className='text-xs sm:text-sm'>
                <strong>Languages: </strong>{' '}
                {Object.values(country.languages).join(', ')}
              </div>
            </div>
          </div>

          <div className='flex flex-wrap mt-4 md:mt-6 space-x-1.5 space-y-1.5 items-center'>
            <strong className='w-full sm:w-auto'>Border countries:</strong>
            {country.borders?.map((borderCountry) => (
              <Link key={borderCountry} href={`/${borderCountry}`}>
                <button className='btn btn-sm btn-accent'>
                  {borderCountry}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
