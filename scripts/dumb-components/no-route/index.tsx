import * as React from "react";
import styled from "styled-components";

const NoRouteWrapper  = styled.section`
	display:flex;
	padding: 5rem;
	justify-content:center;
	 >span {
		font-size:2rem;
	}
`;

import {
	Link
} from "react-router-dom";

const NoRoute:React.FC = () => {
	return (
		<NoRouteWrapper>
			<span>No Page Found.</span><span>Go back to <Link to={"/"}>Home</Link></span> 
		</NoRouteWrapper>
	);
};

export default React.memo(NoRoute);