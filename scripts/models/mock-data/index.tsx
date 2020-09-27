import { ICountry, ISummary } from "../../types/isummary.d";

const SortedCountries:ICountry[] = [
	{
		Country: "Afghanistan",
		CountryCode: "AF",
		Date: "2020-09-25T09:50:46Z",
		NewConfirmed: 25,
		NewDeaths: 5,
		NewRecovered: 9,
		TotalConfirmed: 39170,
		TotalDeaths: 1451,
		TotalRecovered: 32619,
		TotalActive: 5100
	},
	{
		Country: "Albania",
		CountryCode: "AL",
		Date: "2020-09-25T09:50:46Z",
		NewConfirmed: 134,
		NewDeaths: 0,
		NewRecovered: 100,
		TotalConfirmed: 12921,
		TotalDeaths: 370,
		TotalRecovered: 7239,
		TotalActive: 5312
	},
	{
		Country: "Algeria",
		CountryCode: "DZ",
		Date: "2020-09-25T09:50:46Z",
		NewConfirmed: 179,
		NewDeaths: 5,
		NewRecovered: 116,
		TotalConfirmed: 50579,
		TotalDeaths: 1703,
		TotalRecovered: 35544,
		TotalActive: 13332
	},
	{
		Country: "India",
		CountryCode: "IN",
		Date: "2020-09-27T00:55:59Z",
		NewConfirmed: 86052,
		NewDeaths: 1141,
		NewRecovered: 81177,
		TotalConfirmed: 5818570,
		TotalDeaths: 92290,
		TotalRecovered: 4756164
	},
	{
		Country: "United States of America",
		CountryCode: "US",
		Date: "2020-09-27T00:55:59Z",
		NewConfirmed: 55054,
		NewDeaths: 952,
		NewRecovered: 17152,
		TotalConfirmed: 7032712,
		TotalDeaths: 203750,
		TotalRecovered: 2727335
	}
];
const Global = {
	NewConfirmed: 361339,
	NewDeaths: 6703,
	NewRecovered: 261205,
	TotalConfirmed: 32135733,
	TotalDeaths: 981743,
	TotalRecovered: 22147853
};
const mockData:ISummary = {
	Countries:SortedCountries,
	Date:"2020-09-25T09:50:46Z",
	Global,
	Message:""
};

export default mockData;