'use client';

import { useEffect, useState } from 'react';
import { Country } from '../services/countryService';

const Cioc = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<Country | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const cioc = params.slug;

  useEffect(() => {
    const fetchCountry = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${cioc}`
        );
        const data = await response.json();
        setData(data[0]);
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setIsLoading(false);
      }
    };
    fetchCountry();
  }, [cioc]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>Country: {data?.name.common}</div>
      <div>Capital: {data?.capital}</div>
    </>
  );
};

export default Cioc;
