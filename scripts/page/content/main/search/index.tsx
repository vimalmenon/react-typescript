import { ISearch } from "../../../../types/icomponent.d";
import * as React from "react";
import styled from "styled-components";

import {formatDate} from "utility";
import context from "../../index.context";

const SearchWrapper  = styled.div`
	display:flex;
	margin: 1rem 0;
	.search {
		display:flex;
		flex: 3 3 70%;
		justify-content:center;
		align-content:center;
		span {
			line-height: 28px;
			font-size: 1rem;
			font-weight: bold;
			margin:0 1.3rem;
		}
		input {
			padding: 5px;
			width: 40%;
			font-size: 1rem;
		}
	}
	.last-updated {
		flex: 0 0 auto;
		span {
			margin: 0 1.3rem;
		}
	}
`;

const Search:React.FC<ISearch>  = ({search, setSearch}) => {
	const value = React.useContext(context);
	return (
		<SearchWrapper>
			<div className="search">
				<span>
					Search :
				</span> 
				<input
					data-testid="search" 
					value={search}
					onChange={(e) => setSearch(e.target.value)} />
			</div>
			<div className="last-updated">
				<span data-testid="date">
					Last Updated On: {formatDate(value?.data?.Date||"")}
				</span>
				<button onClick={value?.getData}>
					Refresh
				</button>
			</div>
		</SearchWrapper>
	);
};

export default Search;