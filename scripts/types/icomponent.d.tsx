import { ICountry } from "./isummary.d";


export interface ICountryComponent {
	index:number;
	country:ICountry
}

export interface IError {
    message:string
}

export interface ISortProps {
	sortIndex:number;
	currentIndex:number;
}

export interface ISearch {
	search:string;
	setSearch:(e)=>void;
}