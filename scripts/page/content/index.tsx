import * as React from "react";
import styled from "styled-components";

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Main from "./main";
import CountryCode from "./country-code";

import context from "./index.context";

import {useInit} from "./index.service";

import {Error, Loading, NoRoute} from "../../dumb-components";

const ContentWrapper  = styled.section`
	display:flex;
	flex-direction: column;
	margin:1rem;
	padding:1rem;
`;


const Content:React.FC = () => {
	const {loading, error, getData, data} = useInit();
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
		<ContentWrapper>
			<context.Provider value={{data, getData}}>
				<Router>	
					<Switch>
						<Route exact path="/:code" component={CountryCode} />
						<Route exact path="/" component={Main} />
						<Route component={NoRoute} />
					</Switch>
				</Router>
			</context.Provider>
		</ContentWrapper>
	);
	
	
};


export default Content;