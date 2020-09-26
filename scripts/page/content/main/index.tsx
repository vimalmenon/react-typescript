import * as React from "react";

import {sortArray} from "utility";
import styled from "styled-components";

import {SortIcon} from "../../../dumb-components";

import {ICountry} from "../../../types/isummary.d";

import context from "../index.context";

import Country from "./country";
import Search from "./search";

import{useSetSearch, useSortIndex, useSortCountries} from "./index.services";

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

const Main:React.FC = () => {
	const value = React.useContext(context);
	const Countries = value?.data?.Countries||[];
	const Global = value?.data?.Global;
	const [SortedCountries, setCountries] = React.useState<ICountry[]>([]);
	const {sortIndex, setSortIndex} = useSortIndex(2);
	const {search, setSearch} = useSetSearch("");
	const {sortCountries} = useSortCountries(setCountries, setSortIndex);
	/*const sortCountries = (Countries, sortValue, updatedSortedIndex) => {
		setCountries([...sortArray<ICountry>(Countries, sortValue, updatedSortedIndex>0)]);
		setSortIndex(updatedSortedIndex);
	};*/
	React.useEffect(() => {
		sortCountries(Countries, "TotalConfirmed", sortIndex);
	}, []);
	return (
		<ContentWrapper>
			<Search 
				search={search}
				setSearch={setSearch} />
			{value && SortedCountries && Global?
				<div className="table">
					<div className="table-head">
						<div className="sr-no">#</div>
						<div data-testid="Country" className="country-name" onClick={() => sortCountries(Countries, "Country", sortIndex==1?-1:1)}>Country Name <SortIcon sortIndex={sortIndex} currentIndex={1} /></div>
						<div data-testid="ClickTotalConfirmed" onClick={() => sortCountries(Countries, "TotalConfirmed", sortIndex==2?-2:2)}>Total Confirmed <SortIcon sortIndex={sortIndex} currentIndex={2} /></div>
						<div data-testid="ClickNewConfirmed" onClick={() => sortCountries(Countries, "NewConfirmed", sortIndex==3?-3:3)}>New Confirmed <SortIcon sortIndex={sortIndex} currentIndex={3} /></div>
						<div data-testid="ClickTotalActive" onClick={() => sortCountries(Countries, "TotalActive", sortIndex==4?-4:4)}> Total Active  <SortIcon sortIndex={sortIndex} currentIndex={4} /></div>
						<div data-testid="ClickTotalDeaths" onClick={() => sortCountries(Countries, "TotalDeaths", sortIndex==5?-5:5)}>Total Deaths <SortIcon sortIndex={sortIndex} currentIndex={5} /></div>
						<div data-testid="ClickNewDeaths" onClick={() => sortCountries(Countries, "NewDeaths", sortIndex==6?-6:6)}>New Deaths <SortIcon sortIndex={sortIndex} currentIndex={6} /></div>
						<div data-testid="ClickTotalRecovered" onClick={() => sortCountries(Countries, "TotalRecovered", sortIndex==7?-7:7)}>Total Recovered <SortIcon sortIndex={sortIndex} currentIndex={7}/></div>
						<div data-testid="ClickNewRecovered" onClick={() => sortCountries(Countries, "NewRecovered", sortIndex==8?-8:8)}>New Recovered <SortIcon sortIndex={sortIndex} currentIndex={8}/></div>
					</div>
					<div className="table-body highlight">
						<div className="sr-no"></div>
						<div className="country-name">World</div>
						<div data-testid="TotalConfirmed">{Global.TotalConfirmed}</div>
						<div data-testid="NewConfirmed">{Global.NewConfirmed>0?`+${Global.NewConfirmed}`: Global.NewConfirmed}</div>
						<div data-testid="TotalActive">{Global.TotalConfirmed-Global.TotalDeaths-Global.TotalRecovered}</div>
						<div data-testid="TotalDeaths">{Global.TotalDeaths}</div>
						<div data-testid="NewDeaths">{Global.NewDeaths?`+${Global.NewDeaths}`: Global.NewDeaths}</div>
						<div data-testid="TotalRecovered">{Global.TotalRecovered}</div>
						<div data-testid="NewRecovered">{Global.NewRecovered?`+${Global.NewRecovered}`: Global.NewRecovered}</div>
					</div>
					{SortedCountries.map((country, key) => {
						if (search) {
							if(country.Country.toLowerCase().indexOf(search) >= 0) {
								return (
									<Country 
										index={key} 
										country={country} 
										key={key} />
								);
							}
						} else {
							return (
								<Country 
									index={key} 
									country={country} 
									key={key} />
							);
						}
					})}
				</div>:
				null
			}
		</ContentWrapper>
	);
};

export default Main;