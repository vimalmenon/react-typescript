export function setActiveCases<T>(array:T[] = []){
	return array.map((value:T) => {
		value["TotalActive"] = value["TotalConfirmed"] -value["TotalDeaths"]-value["TotalRecovered"];
		return value;
	});
}