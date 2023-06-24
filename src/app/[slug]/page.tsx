export default async function Page({ params }: { params: { slug: string } }) {
  const cca3 = params.slug;
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
  const data = await response.json();
  const country = data[0];
  return (
    <>
      <div>Country: {country.name.common}</div>
      <div>Capital: {country.capital}</div>
    </>
  );
}