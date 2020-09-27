import * as React from "react";
import styled from "styled-components";

import {
	Link
} from "react-router-dom";


import {NoRoute} from "../../../dumb-components";

import context from "../index.context";
import {getParamsCode} from "./index.services";

import Graph from "./graph";
import Details from "./details";
import {formatDate} from "utility";

const CountryCodeWrapper  = styled.div`
	display:flex;
	flex-direction:column;
	.content{
		display:flex;
	}
	.last-updated{
		margin: 1rem;
	}
	.last-updated {
		display:flex;
		justify-content: flex-end;
		span {
			margin: 0 1.3rem;
		}
		button{
			margin: 0 1.3rem;
		}
	}
`;

const CountryCode:React.FC = () => {
	const value = React.useContext(context);
	const { code } = getParamsCode();
	const CountriesHash = value?.data?.CountriesHash;
	const countryDetails = CountriesHash?.[code];
	if (countryDetails) {
		return (
			<CountryCodeWrapper>
				<div className="last-updated">
					<span data-testid="date">
						Last Updated On: {formatDate(value?.data?.Date||"")}
					</span>
					<button onClick={value?.getData}>
						Refresh
					</button>
					<Link to={"/"}>
						Go Back
					</Link>
				</div>
				<div className="content">
					<Details countryDetails={countryDetails} />
					<Graph countryDetails={countryDetails} />
				</div>
			</CountryCodeWrapper>
		);
	}
	return (
		<NoRoute />
	);
};

export default CountryCode;