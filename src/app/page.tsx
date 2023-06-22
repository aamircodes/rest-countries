'use client';

import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import CountrySearch from './components/CountrySearch';
import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import { Country, getCountries } from './services/countryService';
import Filter from './components/RegionFilter';

export default function Home() {
  const [countrySearch, setCountrySearch] = useState<string>('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  useEffect(() => {
    getCountries().then((data) => setCountries(data));
  }, []);

  const handleCountrySearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setCountrySearch(e.target.value);
    },
    []
  );
  return (
    <>
      <Navbar />
      <div className='w-11/12 mx-auto'>
        <div className='w-full flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center my-6'>
          <CountrySearch
            search={countrySearch}
            handleSearchChange={handleCountrySearchChange}
          />
          <Filter
            setSelectedRegion={setSelectedRegion}
            selectedRegion={selectedRegion}
          />
        </div>
        <CountryList
          search={countrySearch}
          countries={countries}
          selectedRegion={selectedRegion}
        />
      </div>
    </>
  );
}
