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
    <>
      <label>Filter by Region</label>
      <select
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
    </>
  );
};

export default RegionFilter;
