import * as React from "react";

import {ISortProps} from "../../types/idumbcomponents.d";

const SortIcon:React.FC<ISortProps> = ({sortIndex, currentIndex}) => {
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