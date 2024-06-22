import { SyntheticEvent } from "react";
import { CompanySearch } from "../../comapny";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";


interface Props  {
  id: string;
  searchResult:CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const Card: React.FC<Props> = ({id,searchResult, onPortfolioCreate}: Props): JSX.Element => {
  return (
    <div key={id} id={id} className="card">
        <img src="" alt="company logo" />
        <div className="details">
            <h2>{searchResult.name} {searchResult.symbol}</h2>
            <p>${searchResult.currency}</p>
        </div>
        <p className="info"> {searchResult.exchangeShortName} - {searchResult.stockExchange}</p>
        <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol}/>
    </div>
  )
}

export default Card