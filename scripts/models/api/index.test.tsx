import {
    IApi,
    Methods
} from "../../types/iapi.d";

import {SummaryApi} from "./index";

import {BASE_URL} from "const";


describe("api utility :", () => {
    test("Testing of SummaryApi object :", () => {
        const result:IApi = {
            name:"getSummary",
	        method:Methods.GET,
	        url:`${BASE_URL}summary`
        }
        expect(new SummaryApi()).toEqual(result);
    });

});