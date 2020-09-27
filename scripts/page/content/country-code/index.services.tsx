import {
	useParams,
} from "react-router-dom";

interface IuseParams {
	code:string
}
export const getParamsCode = ():IuseParams => {
	return useParams();
};