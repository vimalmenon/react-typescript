import * as React from "react";
import styled from "styled-components";

import {
	Switch,
	Route
} from "react-router-dom";

import Main from "./main";
import CountryCode from "./country-code";

const ContentWrapper  = styled.section`
	display:flex;
	flex-direction: column;
	margin:1rem;
	padding:1rem;
`;

const Content = () => {
	return (
		<ContentWrapper>
			<Switch>
				<Route path="/:code" component={CountryCode} />
				<Route path="/" component={Main} />
			</Switch>
		</ContentWrapper>
	);
};


export default Content;