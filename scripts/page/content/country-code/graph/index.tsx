import * as React from "react";
import { ICountryDetails } from "../../../../types/icomponent.d";

import styled from "styled-components";

const GraphWrapper  = styled.div`
	display:flex;
	flex:1 1 40%;
	flex-direction:column;
	.graph {
		display:flex;
		align-items: center;
		justify-content: center;
		margin: 0 2rem;
	}
	.color-code {
		display:flex;
		margin: 0 2rem;
		> div{
			flex: 1 1 100%;
			padding: 1rem;
		}
		& .new-confirm {
			background: yellow;
		}
		& .new-death {
			background: red;
			color:white;
		}
		& .new-recovery {
			background:green;
			color:white;
		}
	}
`;
const Graph:React.FC<ICountryDetails> = ({countryDetails}) => {
	const TotalConfirmed = countryDetails.TotalConfirmed||0;
	const TotalRecovered = countryDetails.TotalRecovered||0;
	const TotalDeaths = countryDetails.TotalDeaths||0;
	const TotalActive = countryDetails.TotalActive ||0;
	let TotalRecoveredPercent,TotalDeathsPercent,TotalActivePercent;
	if (TotalConfirmed === 0) {
		TotalRecoveredPercent = 100;
		TotalDeathsPercent = 0;
		TotalActivePercent = 0;
	} else {
		TotalRecoveredPercent = Math.ceil(TotalRecovered/TotalConfirmed*100);
		TotalDeathsPercent = Math.round(TotalDeaths/TotalConfirmed*100);
		TotalActivePercent = Math.round(TotalActive/TotalConfirmed*100);
	}
	return (
		<GraphWrapper>
			<div className="color-code">
				<div className="new-recovery">
					Total Recovery
				</div>
				<div className="new-confirm">
					Total Active
				</div>
				<div className="new-death">
					Total Death
				</div>
				
			</div>
			<div className="graph">
				<svg height="400" width="400" viewBox="-10 -10 20 20">
					<circle 
						r={8} 
						cx={0} 
						cy={0} 
						fill="floralwhite"
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
						transform={`rotate(${(TotalRecoveredPercent*3.6)+1}) translate(0 0)`} />
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
		</GraphWrapper>
	);
};

export default Graph;