import * as React from "react";

import {
	useParams
} from "react-router-dom";

import {NoRoute} from "../../../dumb-components";

import context from "../index.context";

const CountryCode:React.FC = () => {
	const value = React.useContext(context);
	const { code } = useParams();
	const CountriesHash = value?.data?.CountriesHash;
	const countryDetails = CountriesHash?.[code];
	console.log(countryDetails);
	if (countryDetails) {
		return (
			<div>
				Id : {code}
			</div>
		);
	}
	return (
		<NoRoute />
	);
};

export default CountryCode;