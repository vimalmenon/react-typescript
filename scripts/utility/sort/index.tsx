function sortArray<T>(array:T[] = [], order:number|string, isAsc:boolean): T[] {
	return array.sort((value, nextValue) => {
		if (typeof nextValue[order] === "string"){
			return (isAsc) ? nextValue[order].localeCompare(value[order]):value[order].localeCompare(nextValue[order]);
		}
		return (isAsc)?(nextValue[order]>value[order])?1:-1:(nextValue[order]>value[order])?-1:1; 
	});
}

export default sortArray;