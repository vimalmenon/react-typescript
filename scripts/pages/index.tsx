import * as React from "react";
import styled from "styled-components";

import {ApiCaller} from "utility";
import {api} from "models";

import {ISummary, ICountry} from "../types/isummary.d";

import Title from "./title";
import Content from "./content";
import context from "./index.context";
import {setActiveCases} from "./index.service";
import {Loading} from "../dumb-components";

const {SummaryApi} = api;

const MainWrapper = styled.div`
	display:flex;
	flex-direction:column;
`;



const Main = () => {
	const [data, setData] = React.useState<ISummary|null>(null);
	const [loading, setLoading] = React.useState<boolean>(true);
	const getData = () => {
		setLoading(true);
		new ApiCaller<ISummary>(new SummaryApi())
			.success((value) => {
				const Countries = setActiveCases<ICountry>(value.Countries);
				setData(({...value, Countries}));
				setLoading(false);
			});
	};
	React.useEffect(() => {
		getData();
	}, []);
	return (
		<context.Provider value={{data, getData}}>
			{!loading ?
				<MainWrapper>
					<Title />
					<Content />
				</MainWrapper>
				: 
				<Loading />
			}
		</context.Provider>
	);
};


export default Main;