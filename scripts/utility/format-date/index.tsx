const formatDate = (value:string):string => {
	return new Intl.DateTimeFormat("en-GB", {
		hour:"2-digit",
		minute:"2-digit",
		second:"2-digit",
		year: "numeric",
		month: "long",
		day: "2-digit"
	}).format(new Date(value));
};

export default formatDate;