import * as React from "react";

const SortIcon = ({sortIndex, currentIndex}) => {
	if(Math.abs(sortIndex) === currentIndex) {
		if (sortIndex >0) {
			return (<span>&darr;</span>);
		} else {
			return (<span>&uarr;</span>);
		}
	}
	return null;
};

export default SortIcon;