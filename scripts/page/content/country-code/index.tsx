import * as React from "react";

import {
	useParams
} from "react-router-dom";

import {NoRoute} from "../../../dumb-components";

import context from "../index.context";

const CountryCode:React.FC = () => {
	const value = React.useContext(context);
	const { code } = useParams();
	const CountriesHash = value?.data?.CountriesHash;
	const countryDetails = CountriesHash?.[code];
	const TotalConfirmed = countryDetails?.TotalConfirmed||0;
	const TotalRecovered = countryDetails?.TotalRecovered||0;
	const TotalDeaths = countryDetails?.TotalDeaths||0;
	const TotalActive = countryDetails?.TotalActive ||0;
	const TotalRecoveredPercent = Math.round(TotalRecovered/TotalConfirmed*100);
	const TotalDeathsPercent = Math.round(TotalDeaths/TotalConfirmed*100);
	const TotalActivePercent = Math.round(TotalActive/TotalConfirmed*100);
	const [translate, setTranslate] = React.useState(0);
	const [translateY, setTranslateY] = React.useState(1);
	if (countryDetails) {
		return (
			<div>
				<div>
					Id : {code}
				</div>
				<input value={translate} onChange={(e) =>(setTranslate(parseInt(e.target.value)||0))} />
				<input value={translateY} onChange={(e) =>console.log(e.target)}  />
				<div>
					<button onClick={() =>setTranslate(translate+1)}>
						Add
					</button>
					<button onClick={() =>setTranslate(translate-1)}>
						less
					</button>
				</div>
				<div>
					<button onClick={() =>setTranslateY(translateY+1)}>
						Add
					</button>
					<button onClick={() =>setTranslateY(translateY-1)}>
						less
					</button>
				</div>
				<div>	
					<svg height="400" width="400" viewBox="-10 -10 20 20">
						<circle 
							r={8} 
							cx={0} 
							cy={0} 
							fill="white"
							stroke="green"
							strokeWidth={2}
							strokeDasharray={`calc(${1.8*TotalRecoveredPercent}*(50.50/180)) 51`}
							transform={`rotate(0) translate(0 0)`} />
						<circle r={8} 
							cx={0} 
							cy={0} 
							fill="none"
							stroke="yellow"
							strokeWidth={2}
							strokeDasharray={`calc(${1.8*TotalActivePercent}*(50.50/180)) 51`}
							transform={`rotate(${(TotalRecoveredPercent*3.6)+translate+1}) translate(0 0)`} />
						<circle 
							r={8} 
							cx={0} 
							cy={0} 
							fill="none"
							stroke="red"
							strokeWidth={2}
							strokeDasharray={`calc(${1.8*TotalDeathsPercent}*50.50/180) 51`}
							transform={`rotate(${((TotalRecoveredPercent+TotalActivePercent)*3.6+1)}) translate(0 0)`} />
					</svg>
				</div>
			</div>
		);
	}
	return (
		<NoRoute />
	);
};

export default CountryCode;