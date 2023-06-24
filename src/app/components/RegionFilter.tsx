import { REGIONS } from '../utils/constants';

interface RegionFilterProps {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}

const RegionFilter = ({
  selectedRegion,
  setSelectedRegion,
}: RegionFilterProps) => {
  return (
    <div className='flex items-center'>
      <label className='whitespace-nowrap mr-1' htmlFor='regionSelect'>
        Filter by Region
      </label>
      <select
        id='regionSelect'
        className='select select-bordered w-full max-w-xs'
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
      >
        <option value={''}>All</option>
        {REGIONS.map((region) => (
          <option value={region} key={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionFilter;
