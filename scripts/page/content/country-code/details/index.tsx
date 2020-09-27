import * as React from "react";

import { ICountryDetails } from "../../../../types/icomponent.d";

import styled from "styled-components";

const DetailsWrapper  = styled.div`
	display:flex;
	flex:1 1 60%;
	.table {
		display:flex;
		flex-direction:column;
		flex: 1 1 100%;
		.table-head {
			display:flex;
			padding: 0.7rem 0;
			font-weight: bold;
			color:white;
			background:maroon;
			>div {
				padding: 0.5rem;
				flex: 2 2 50%;
			}
		}
		.table-body {
			display:flex;
			border-bottom:1px solid lightgray;
			>div {
				padding: 0.7rem 0.5rem;
				flex: 2 2 50%;
			}
			&:nth-child(even) {
				background:floralwhite;
			}
			&.new-confirm {
				background: #FFEEAA;
			}
			&.new-death {
				background: red;
				color:white;
			}
			&.new-recovery {
				background:#c8e6c9;
			}
		}
	}
`;

const Details:React.FC<ICountryDetails> = ({countryDetails}) => {
	return (
		<DetailsWrapper>
			<div className="table">
				<div className="table-head">
					<div>Detail</div>
					<div>Value</div>
				</div>
				<div className="table-body">
					<div>Country</div>
					<div>{countryDetails.Country}</div>
				</div>
				<div className="table-body">
					<div>Country Code</div>
					<div>{countryDetails.CountryCode}</div>
				</div>
				<div className="table-body">
					<div>Date</div>
					<div>{countryDetails.Date}</div>
				</div>
				<div className="table-body">
					<div>Total Active</div>
					<div>{countryDetails.TotalActive}</div>
				</div>
				<div className="table-body">
					<div>Total Confirmed</div>
					<div>{countryDetails.TotalConfirmed}</div>
				</div>
				<div className={countryDetails.NewConfirmed>0 ? "table-body new-confirm":"table-body"}>
					<div>New Confirmed</div>
					<div>{countryDetails.NewConfirmed>0? `+${countryDetails.NewConfirmed}`: countryDetails.NewConfirmed}</div>
				</div>
				<div className="table-body">
					<div>Total Recovered</div>
					<div>{countryDetails.TotalRecovered}</div>
				</div>
				<div className={countryDetails.NewRecovered>0 ? "table-body new-recovery":"table-body"}>
					<div>New Recovered</div>
					<div>{countryDetails.NewRecovered>0 ? `+${countryDetails.NewRecovered}`: countryDetails.NewRecovered}</div>
				</div>
				<div className="table-body">
					<div>Total Deaths</div>
					<div>{countryDetails.TotalDeaths}</div>
				</div>
				<div className={countryDetails.NewDeaths>0 ? "table-body new-death":"table-body"}>
					<div>New Deaths</div>
					<div>{countryDetails.NewDeaths>0? `+${countryDetails.NewDeaths}`: countryDetails.NewDeaths}</div>
				</div>
			</div>
		</DetailsWrapper>
	);
};

export default Details;