import * as React from "react";

import {ISortProps} from "../../types/icomponent.d";

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