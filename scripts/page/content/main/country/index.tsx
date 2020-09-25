import * as React from "react";
import {ICountryComponent} from "../../../../types/icomponent.d";

import {
	Link
} from "react-router-dom";

const Country:React.FC<ICountryComponent> = ({country, index}) =>{
	const classes = (country.TotalConfirmed === 0 || (country.TotalConfirmed-country.TotalRecovered)===0) ? "table-body no-cases" : (country.TotalActive === 0) ? "table-body no-active":"table-body";
	return (
		<div className={classes}>
			<div data-testid="index" className="sr-no">{index+1}</div>
			<div data-testid="country" className="country-name"><Link to={country.CountryCode}>{country.Country}</Link></div>
			<div data-testid="total-confirmed">{country.TotalConfirmed}</div>
			<div data-testid="new-confirmed" className={country.NewConfirmed>0 ? "new-confirm":""}>{country.NewConfirmed>0? `+${country.NewConfirmed}`: country.NewConfirmed}</div>
			<div data-testid="total-active" >{country.TotalActive}</div>
			<div data-testid="total-deaths">{country.TotalDeaths}</div>
			<div data-testid="new-deaths" className={country.NewDeaths>0 ? "new-death":""}>{country.NewDeaths>0? `+${country.NewDeaths}`: country.NewDeaths}</div>
			<div data-testid="total-recovered">{country.TotalRecovered}</div>
			<div data-testid="new-recovered" className={country.NewRecovered>0 ? "new-recovery":""}>{country.NewRecovered>0 ? `+${country.NewRecovered}`: country.NewRecovered}</div>
		</div>
	);
};

export default Country;