import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CountryCard from '@/app/components/CountryCard';

const mockCountry = {
  flags: { png: 'flagUrl', alt: 'flagAlt' },
  name: { common: 'TestCountry' },
  capital: ['TestCapital'],
  region: 'TestRegion',
  population: 123456,
  cca3: 'TC',
};

describe('CountryCard', () => {
  let container: HTMLElement;
  beforeEach(() => {
    const renderResult = render(<CountryCard country={mockCountry} />);
    container = renderResult.container;
  });

  test('renders the country flag', () => {
    const flagImage = screen.getByRole('img');
    expect(flagImage).toHaveAttribute('src', 'flagUrl');
    expect(flagImage).toHaveAttribute('alt', 'flagAlt');
  });

  test('renders the country name with link', () => {
    const nameLink = screen.getByRole('link', { name: /TestCountry/i });
    expect(nameLink).toHaveAttribute('href', '/TC');
  });

  test('renders the country capital', () => {
    expect(container).toHaveTextContent(/Capital: TestCapital/);
  });

  test('renders the country region', () => {
    expect(container).toHaveTextContent(/Region: TestRegion/);
  });

  test('renders the country population', () => {
    expect(container).toHaveTextContent(/Population: 123,456/);
  });
});
