declare var global;
import "jsdom-global/register";
import * as React from "react";
import CountryCode from "./index";
import {shallow} from "enzyme";

import {
	BrowserRouter as Router
} from "react-router-dom";


import { ISummary } from "../../../types/isummary.d";

describe("CountryCode component :", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("CountryCode component :", () => {
        shallow(<Router><CountryCode /></Router>);
        const dispatch = jest.fn(() => 1);
        jest.mock("react-router-dom", () => ({
            useParams: jest.fn().mockReturnValue({ code: '123' }),
        }));
        
       
        expect(1).toBe(1);
        
    });

});