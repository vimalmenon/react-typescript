import * as React from "react";
import {sortArray} from "utility";

import {ICountry} from "../../../types/isummary.d";

export const useSortIndex = (initialSort:number):{sortIndex:number, setSortIndex:(number)=> void} => {
	const [sortIndex, setSortIndex] = React.useState<number>(initialSort);
	return {sortIndex, setSortIndex};
};

export const useSetSearch = (initialSort:string):{search:string, setSearch:(string)=> void}  => {
	const [search, setSearch] = React.useState<string>(initialSort);
	return {search, setSearch};
};

export const useSortCountries = (setCountries:(ICountry)=>void, setSortIndex:(ICountry)=>void):{sortCountries:(Countries:ICountry[], sortValue:string, updatedSortedIndex:number)=> void} => {
	const sortCountries = (Countries, sortValue, updatedSortedIndex) => {
		setCountries([...sortArray<ICountry>(Countries, sortValue, updatedSortedIndex>0)]);
		setSortIndex(updatedSortedIndex);
	};
	return {sortCountries};
};