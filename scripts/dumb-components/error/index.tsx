import * as React from "react";
import styled from "styled-components";

import {IError} from "../../types/idumbcomponents.d";

const ErrorWrapper  = styled.section`
	display:flex;
	padding: 5rem;
	justify-content:center;
	 >span {
		font-size:2rem;
	}
`;


const Error:React.FC<IError> = ({message}) => {
	return (
		<ErrorWrapper>
			<span>{message}</span>
		</ErrorWrapper>
	);
};

export default React.memo(Error);