import * as React from "react";
import styled from "styled-components";

import {
	Switch,
	Route
} from "react-router-dom";

import Main from "./main";
import CountryCode from "./country-code";

import context from "./index.context";

import {init} from "./index.service";

import {Error, Loading} from "../../dumb-components";

const ContentWrapper  = styled.section`
	display:flex;
	flex-direction: column;
	margin:1rem;
	padding:1rem;
`;

const Content:React.FC = () => {
	const {loading, error, getData, data} = init();
	console.log(error);
	React.useEffect(() => {
		getData();
	}, []);
	if (loading) {
		return (
			<Loading />
		);
	} else if (error) {
		return (
			<Error message={error} />
		);
	} 
	return (
		<context.Provider value={{data, getData}}>
			<ContentWrapper>
				<Switch>
					<Route path="/:code" component={CountryCode} />
					<Route path="/" component={Main} />
				</Switch>
			</ContentWrapper>
		</context.Provider>
	);
	
	
};


export default Content;