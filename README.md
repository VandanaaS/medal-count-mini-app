
#  Medal Count App

A React + Next.js (TypeScript) Olympic medal leaderboard app that shows the top 10 countries by medals (gold, silver, bronze, total). Includes Bootstrap layout and uses a sprite image to render country flags.


##  How to Run Locally

1. Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/medal-count-mini-app.git
cd medal-count-mini-app
```

2. Install dependencies:

```
npm install
```

3. Run the app:

```
npm run dev
```

Visit `http://localhost:3000` in your browser.

---

##  Project Structure

```
src/
 -app/
  -page.tsx              # App entry — handles sort, fetch & render
  -layout.tsx            # Global styles (Bootstrap + fonts)

 -components/
  -MedalList.tsx         # Renders medal data in a responsive Bootstrap grid
   -Flag.tsx             # Renders flags from sprite using background-position
   -MedalColour.tsx      # Renders svgs for each Medal Type
 hooks/
  -useMedals.ts          # Custom hook for fetching and caching medals.json

 styles/
  - Flag.module.css       # Styling for flag sprite rendering

 types/
 - medal.ts              # Type definitions for CountryMedals
 utils/
  - sortUtils.ts          # Sorting logic based on gold/silver/bronze/total

public/
  data/
   -medals.json           # Static dataset of medals
 -flags.png                 # Sprite sheet with all country flags (16px wide each)
```

---

## Flag Sprite Logic

- Flags are shown using `flags.png` — a single image with all flags in **alphabetical order** by country code.
- Each flag is `16px` wide, so we calculate offset using:

```tsx
const offset = countryIndex * 16;
style={{ backgroundPosition: `-${offset}px 0` }}
```

- The index (`countryIndex`) is determined by sorting all country codes alphabetically.

---

##  Sorting Logic

- `total`: Sorted by total medals. Tie → more gold.
- `gold`: Sorted by gold. Tie → more silver.
- `silver`: Sorted by silver. Tie → more gold.
- `bronze`: Sorted by bronze. Tie → more gold.

---

##  Potential Improvements

- Add unit tests for `sortUtils` and `useMedals`
- Improve mobile styling and accessibility
- Add loader while fetching medals
- Flags are not displayed as per the sorted country. Flags are displayed alphabetically reading from the sprite. 

---



