import {ICountry, ISummary} from "../../types/isummary.d";
import * as React from "react";
import { ApiCaller } from "utility";
import {api} from "models";
const {SummaryApi} = api;

interface IInit {
	loading: boolean;
	error:string;
	data:ISummary|null;
	getData:()=>void
}
export function setActiveCases(array:ICountry[] = []):ICountry[] {
	return array.map((value) => {
		value.TotalActive = value.TotalConfirmed- value.TotalDeaths - value.TotalRecovered;
		return value;
	});
}

export const init = ():IInit => {
	const [loading, setLoading] = React.useState<boolean>(true);
	const [error, setError] = React.useState<string>("");
	const [data, setData] = React.useState<ISummary|null>(null);

	const getData = () => {
		setLoading(true);
		setError("");
		setLoading(true);
		new ApiCaller<ISummary>(new SummaryApi())
			.success((value) => {
				if(value.Message) {
					setError(value.Message);
				} else {
					const Countries = setActiveCases(value.Countries);
					setData(({...value, Countries}));
				}
				setLoading(false);
			})
			.failure(() => {
				setLoading(false);
				setError("Error while making request");
			});
	};
	return {loading, error, getData, data};
};