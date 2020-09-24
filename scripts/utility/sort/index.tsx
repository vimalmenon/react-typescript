function sortArray<T>(array:T[], order:string, isDesc:boolean): T[] {
	return array.sort((value, nextValue) => {
		if (typeof nextValue[order] === "string"){
			return (isDesc) ? nextValue[order].localeCompare(value[order]):value[order].localeCompare(nextValue[order]);
		}
		return (isDesc)?(nextValue[order]>value[order])?1:-1:value[order]-nextValue[order];
	});
}

export default sortArray;