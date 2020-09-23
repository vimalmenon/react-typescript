import * as React from "react";

import {sortArray} from "utility";
import styled from "styled-components";

import {ICountry} from "../../../types/isummary.d";

import context from "../../index.context";

import Country from "./country";

import {SortIcon} from "../../../dumb-components";


const ContentWrapper  = styled.section`
	display:flex;
	flex-direction:column;
	.table {
		display:flex;
		flex-direction:column;
		.table-head {
			display:flex;
			padding: 0.7rem 0;
			font-weight: bold;
			color:white;
			background:maroon;
			>div {
				padding: 0.5rem;
				flex: 2 2 50px;
			}
			.sr-no {
				flex: 0 0 50px;
			}
			.country-name {
				flex: 2 2 50px;
			}
		}
		.table-body {
			display:flex;
			border-bottom:1px solid lightgray;
			>div {
				padding: 0.7rem 0.5rem;
				flex: 2 2 50px;
			}
			.sr-no {
				flex: 0 0 50px;
			}
			.country-name {
				flex: 2 2 50px;
			}
			&:nth-child(even) {
				background:floralwhite;
			}
			&.no-cases {
				background:aliceblue;
			}
			&.no-active {
				background:silver;
			}
			& .new-confirm {
				background: #FFEEAA;
			}
			& .new-death {
				background: red;
				color:white;
			}
			& .new-recovery {
				background:#c8e6c9;
			}
			&.highlight {
				background:moccasin;
			}
		}
	}
`;

const Main = () => {
	const value = React.useContext(context);
	const Countries = value?.data?.Countries||[];
	const Global = value?.data?.Global;
	const date = new Intl.DateTimeFormat("en-GB", {
		hour:"2-digit",
		minute:"2-digit",
		second:"2-digit",
		year: "numeric",
		month: "long",
		day: "2-digit"
	}).format(new Date(value?.data?.Date||""));
	const getDate = value?.getData;
	const [SortedCountries, setCountries] = React.useState<ICountry[]>([]);
	const [sortIndex, setSortIndex] = React.useState<number>(2);
	const sortCountries = (sortValue, updatedSortedIndex) => {
		setCountries([...sortArray<ICountry>(Countries, sortValue, updatedSortedIndex>0)]);
		setSortIndex(updatedSortedIndex);
	};
	React.useEffect(() => {
		sortCountries("TotalConfirmed", sortIndex);
	}, []);
	return (
		<ContentWrapper>
			<div>
				<span>
					Last Updated On: {date}
				</span>
				<button onClick={getDate}>
					Refresh
				</button>
			</div>
			{value && Countries && Global?
				<div className="table">
					<div className="table-head">
						<div className="sr-no">#</div>
						<div className="country-name" onClick={() => sortCountries("Country", sortIndex==1?-1:1)}>Country Name <SortIcon sortIndex={sortIndex} currentIndex={1} /></div>
						<div onClick={() => sortCountries("TotalConfirmed", sortIndex==2?-2:2)}>Total Confirmed <SortIcon sortIndex={sortIndex} currentIndex={2} /></div>
						<div onClick={() => sortCountries("NewConfirmed", sortIndex==3?-3:3)}>New Confirmed <SortIcon sortIndex={sortIndex} currentIndex={3} /></div>
						<div onClick={() => sortCountries("TotalActive", sortIndex==4?-4:4)}> Total Active  <SortIcon sortIndex={sortIndex} currentIndex={4} /></div>
						<div onClick={() => sortCountries("TotalDeaths", sortIndex==5?-5:5)}>Total Deaths <SortIcon sortIndex={sortIndex} currentIndex={5} /></div>
						<div onClick={() => sortCountries("NewDeaths", sortIndex==6?-6:6)}>New Deaths <SortIcon sortIndex={sortIndex} currentIndex={6} /></div>
						<div onClick={() => sortCountries("TotalRecovered", sortIndex==7?-7:7)}>Total Recovered <SortIcon sortIndex={sortIndex} currentIndex={7}/></div>
						<div onClick={() => sortCountries("NewRecovered", sortIndex==8?-8:8)}>New Recovered <SortIcon sortIndex={sortIndex} currentIndex={8}/></div>
					</div>
					<div className="table-body highlight">
						<div className="sr-no"></div>
						<div className="country-name">World</div>
						<div>{Global.TotalConfirmed}</div>
						<div>{Global.NewConfirmed>0?`+${Global.NewConfirmed}`: Global.NewConfirmed}</div>
						<div>{Global.TotalConfirmed-Global.TotalDeaths-Global.TotalRecovered}</div>
						<div>{Global.TotalDeaths}</div>
						<div>{Global.NewDeaths?`+${Global.NewDeaths}`: Global.NewDeaths}</div>
						<div>{Global.TotalRecovered}</div>
						<div>{Global.NewRecovered?`+${Global.NewRecovered}`: Global.NewRecovered}</div>
					</div>
					{SortedCountries.map((country, key) => {
						return (
							<Country 
								index={key} 
								country={country} 
								key={country.CountryCode} />
						);
					})}
				</div>:
				null
			}
		</ContentWrapper>
	);
};

export default Main;