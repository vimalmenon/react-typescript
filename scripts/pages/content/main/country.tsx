import * as React from "react";

const Country = ({country, index}) =>{
	const classes = (country.TotalConfirmed === 0 || (country.TotalConfirmed-country.TotalRecovered)===0) ? "table-body no-cases" : (country.TotalActive === 0) ? "table-body no-active":"table-body";
	return (
		<div key={country.CountryCode} className={classes}>
			<div className="sr-no">{index+1}</div>
			<div className="country-name">{country.Country}</div>
			<div>{country.TotalConfirmed}</div>
			<div className={country.NewConfirmed>0 ? "new-confirm":""}>{country.NewConfirmed>0? `+${country.NewConfirmed}`: country.NewConfirmed}</div>
			<div>{country.TotalActive}</div>
			<div>{country.TotalDeaths}</div>
			<div className={country.NewDeaths>0 ? "new-death":""}>{country.NewDeaths>0? `+${country.NewDeaths}`: country.NewDeaths}</div>
			<div>{country.TotalRecovered}</div>
			<div className={country.NewRecovered>0 ? "new-recovery":""}>{country.NewRecovered>0 ? `+${country.NewRecovered}`: country.NewRecovered}</div>
		</div>
	);
};

export default Country;