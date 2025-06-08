import Flag from "./Flag";
import { MedalTypes } from "@/types/medals";


type MedalListProps = {
  data: MedalTypes[];
  flagIndexMap: { [code: string]: number };
};

export default function MedalList({ data, flagIndexMap }: MedalListProps) {
    return (
    <div className="container mt-4">
    <h4 className="text-primary fw-bold mb-3">Medal Count</h4>

    <div className="row fw-bold text-center border-bottom pb-2">
      <div className="col-1">S.No</div>
      <div className="col-1">Flag</div>
      <div className="col-2">Country</div>
      <div className="col-1">
        <svg width="14" height="14" viewBox="0 0 100 100" className="me-1">
            <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" fill="#FFD700" />
         </svg> GOLD
      </div>
      <div className="col-1">
        <svg width="14" height="14" viewBox="0 0 100 100" className="me-1">
             <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" fill="#C0C0C0" />
        </svg>
         SILVER
     </div>
      <div className="col-1"> 
        <svg width="14" height="14" viewBox="0 0 100 100" className="me-1">
      <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" fill="#CD7F32" />
    </svg> BRONZE
    </div>
      <div className="col-2">Total</div>
    </div>

    {data.slice(0, 10).map((country: MedalTypes, index: number) => (
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