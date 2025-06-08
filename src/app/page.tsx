'use client';
import { useMedals } from '@/hooks/useMedals';
import MedalList from '@/components/MedalList';
export default function Page() {
  // Make sure useMedals returns { data, error }
  const { data, error } = useMedals() || { data: undefined, error: undefined };

  if (error) return <p className="text-danger text-center">{error}</p>;
  if (!data) return <p className="text-center">Loading medal data...</p>;

  const flagIndexMap: { [key: string]: number } = {};
  [...data]
    .sort((a, b) => a.code.localeCompare(b.code))
    .forEach((country, index) => {
      console.log(flagIndexMap);
      flagIndexMap[country.code] = index;
    });

  return <MedalList data={data} flagIndexMap={flagIndexMap} />;
}

