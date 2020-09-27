import "jsdom-global/register";
import * as React from "react";
import Graph from "./index";
import {shallow} from "enzyme";
import { ICountry } from "../../../../types/isummary.d";


describe("Graph component :", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("Graph component to have three cicle :", () => {
        const countryDetails:ICountry = {
            Country: "Afghanistan",
            CountryCode: "AF",
            Date: "2020-09-25T09:50:46Z",
            NewConfirmed: 25,
            NewDeaths: 5,
            NewRecovered: 9,
            TotalConfirmed: 39170,
            TotalDeaths: 1451,
            TotalRecovered: 32619,
            TotalActive: 5100
        };
        const component = shallow(<Graph countryDetails={countryDetails} />);
        expect(component.find("circle").length).toBe(3);
        
    });
    test("Graph component with 0 value passed to have three cicle :", () => {
        const countryDetails:ICountry = {
            Country: "Afghanistan",
            CountryCode: "AF",
            Date: "2020-09-25T09:50:46Z",
            NewConfirmed: 0,
            NewDeaths: 0,
            NewRecovered: 9,
            TotalConfirmed: 0,
            TotalDeaths: 0,
            TotalRecovered: 0,
            TotalActive: 0
        };
        const component = shallow(<Graph countryDetails={countryDetails} />);
        expect(component.find("circle").length).toBe(3);
        
    });

});