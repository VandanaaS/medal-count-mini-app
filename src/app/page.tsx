'use client';

import { useEffect, useState } from 'react';
import { useMedals } from '@/hooks/useMedals';
import Flag from '@/components/Flag';
import { sortMedals } from '@/utils/sortUtils';
import MedalColour from '@/components/MedalColour';

export default function Page() {
  const { data, error } = useMedals();
  const [sortKey, setSortKey] = useState('gold');

  useEffect(() => {
    window.history.replaceState(null, '', `?sort=${sortKey}`);
  }, [sortKey]);

  if (error) return <p className="text-danger text-center">{error}</p>;
  if (!data) return <p className="text-center">Loading medal data...</p>;

  const sortedData = sortMedals(data, sortKey);

  const flagIndexMap: { [key: string]: number } = {};
  [...data]
    .sort((a, b) => a.code.localeCompare(b.code))
    .forEach((country, index) => {
      flagIndexMap[country.code] = index;
    });

  const getArrow = (key: string) => (key === sortKey ? '▼' : '');

  return (
    <div className="container mt-4">
      <h4 className="text-primary fw-bold mb-3">MEDAL COUNT</h4>

      <div className="row fw-bold text-center border-bottom pb-2">
        <div className="col-1">#</div>
        <div className="col-1">Flag</div>
        <div className="col-2">Country</div>
        <div className="col-1" role="button" onClick={() => setSortKey('gold')}>
          <MedalColour type="gold" /> {getArrow('gold')}
        </div>
        <div className="col-1" role="button" onClick={() => setSortKey('silver')}>
          <MedalColour type="silver" /> {getArrow('silver')}
        </div>
        <div className="col-1" role="button" onClick={() => setSortKey('bronze')}>
          <MedalColour type="bronze" /> {getArrow('bronze')}
        </div>
        <div className="col-2" role="button" onClick={() => setSortKey('total')}>
          <MedalColour type="total" /> {getArrow('total')}
        </div>
      </div>

      {sortedData.slice(0, 10).map((country, index) => (
        <div className="row text-center py-2 border-bottom" key={country.code}>
          <div className="col-1 fw-bold">{index + 1}</div>
          <div className="col-1">
            <Flag countryIndex={flagIndexMap[country.code]} />
          </div>
          <div className="col-2">{country.code}</div>
          <div className="col-1 text-warning">{country.gold}</div>
          <div className="col-1 text-secondary">{country.silver}</div>
          <div className="col-1" style={{ color: '#CD7F32' }}>{country.bronze}</div>
          <div className="col-2 fw-bold">
            {country.gold + country.silver + country.bronze}
          </div>
        </div>
      ))}
    </div>
  );
}
