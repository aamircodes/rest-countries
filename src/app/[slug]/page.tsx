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
    <>
      <Link href='/'>
        <button>Back</button>
      </Link>
      <div>Country: {country.name.common}</div>
      <div>Capital: {country.capital}</div>
    </>
  );
}
