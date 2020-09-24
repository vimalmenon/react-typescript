import * as React from "react";

import {
	useParams
} from "react-router-dom";

const CountryCode:React.FC = () => {
	const { code } = useParams();
	return (
		<div>
			Id : {code}
		</div>
	);
};

export default CountryCode;