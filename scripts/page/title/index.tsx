import * as React from "react";
import styled from "styled-components";

const Header  = styled.header`
	display:flex;
	font-size:2.5rem;
	margin:1rem;
	padding:1rem;
	align-items:center;
	justify-content:center;
	border-bottom:1px solid gray;
`;

const Title = () => {
	return (
		<Header>
			COVID-19 React Tracking Application
		</Header>
	);
};


export default React.memo(Title);