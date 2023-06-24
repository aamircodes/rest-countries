import { render, screen, fireEvent } from '@testing-library/react';
import RegionFilter from '@/app/components/RegionFilter';
import { REGIONS } from '@/app/utils/constants';

describe('RegionFilter component', () => {
  let setSelectedRegion: jest.Mock;

  beforeEach(() => {
    setSelectedRegion = jest.fn();
    render(
      <RegionFilter selectedRegion='' setSelectedRegion={setSelectedRegion} />
    );
  });

  it('renders correctly', () => {
    const select = screen.getByLabelText('Filter by Region');
    expect(select).toBeInTheDocument();
  });

  it('renders correct options', () => {
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(REGIONS.length + 1);
    REGIONS.forEach((region, index) => {
      expect(options[index + 1]).toHaveTextContent(region);
    });
  });

  it('calls setSelectedRegion with the correct value when an option is selected', () => {
    const select = screen.getByLabelText('Filter by Region');
    fireEvent.change(select, { target: { value: REGIONS[0] } });
    expect(setSelectedRegion).toHaveBeenCalledWith(REGIONS[0]);
  });
});
