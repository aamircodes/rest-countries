'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import CountrySearch from './components/CountrySearch';
import Navbar from './components/Navbar';
import Countries from './components/Countries';
import { getCountries } from './services/countryService';

export default function Home() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    getCountries().then((data) => setCountries(data));
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <Navbar />
      <CountrySearch search={search} handleSearchChange={handleSearchChange} />
      <Countries search={search} countries={countries} />
    </div>
  );
}
