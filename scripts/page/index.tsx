import * as React from "react";
import styled from "styled-components";

import Title from "./title";
import Content from "./content";

const MainWrapper = styled.div`
	display:flex;
	flex-direction:column;
`;


const Pages: React.FC = () => {
	return (
		<MainWrapper>
			<Title />
			<Content />
		</MainWrapper>	
	);
};


export default Pages;