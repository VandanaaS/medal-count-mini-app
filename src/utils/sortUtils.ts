import {MedalTypes} from '../types/medals';

export function sortMedals(data: MedalTypes[], sortKey: string): MedalTypes[] {
  const getTotal = (c: MedalTypes) => c.gold + c.silver + c.bronze;
// Make a shallow copy of the data to avoid mutating the original array
  return [...data].sort((a, b) => {
    if (sortKey === 'total') {
      const totalA = getTotal(a);// Temporary variable for one country say 'a' to calculate total medals
      const totalB = getTotal(b);// Temporary variable for one country say 'b' to calculate total medals
      if (totalB !== totalA) return totalB - totalA; // sort by total descending
      return b.gold - a.gold; // tie-breaker: gold
    }

    if (sortKey === 'gold') {
      if (b.gold !== a.gold) return b.gold - a.gold;
      return b.silver - a.silver; // tie-breaker: silver
    }

    if (sortKey === 'silver') {
      if (b.silver !== a.silver) return b.silver - a.silver;
      return b.gold - a.gold; // tie-breaker: gold
    }

    if (sortKey === 'bronze') {
      if (b.bronze !== a.bronze) return b.bronze - a.bronze;
      return b.gold - a.gold; // tie-breaker: gold
    }

    return 0; // fallback if sortKey is invalid
  });
}
