import {ICountry, ISummary, ICountriesHash, IInit} from "../../types/isummary.d";
import * as React from "react";
import { ApiCaller } from "utility";
import {api} from "models";
const {SummaryApi} = api;


export function setActiveCasesAndHash(array:ICountry[]=[]):{Countries:ICountry[], CountriesHash:ICountriesHash} {
	const CountriesHash = {};
	const Countries =  array.map((value) => {
		CountriesHash[value.CountryCode] = value;
		value.TotalActive = value.TotalConfirmed- value.TotalDeaths - value.TotalRecovered;
		return value;
	});
	return {Countries, CountriesHash};
}

export const useInit = ():IInit => {
	const [loading, setLoading] = React.useState<boolean>(true);
	const [error, setError] = React.useState<string>("");
	const [data, setData] = React.useState<ISummary|null>(null);

	const getData = async () => {
		setLoading(true);
		setError("");
		setLoading(true);
		try{
			const value = await new ApiCaller<ISummary>(new SummaryApi()).getPromise();
			
			if(value.Message) {
				setError(value.Message);
			} else {
				const {Countries, CountriesHash} = setActiveCasesAndHash(value.Countries);
				setData(({...value, Countries, CountriesHash}));
			}
		}catch {
			setLoading(false);
			setError("Error while making request");
		}
		setLoading(false);
	};
	return {loading, error, getData, data};
};