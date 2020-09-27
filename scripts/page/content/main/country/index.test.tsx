import "jsdom-global/register";
import * as React from "react";
import Country from "./index";
import {mount} from "enzyme";
import { ICountry } from "../../../../types/isummary.d";

import {
	BrowserRouter as Router
} from "react-router-dom";

describe("Country component :", () => {

    test("Country component checking for data :", () => {
        const country:ICountry = {
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

        let component = mount(<Router><Country index={1} country={country}/></Router>);
        
        expect(component.find('[data-testid="index"]').text()).toBe("2");
        expect(component.find('[data-testid="country"]').find("Link").text()).toBe(country.Country);
        expect(component.find('[data-testid="total-confirmed"]').text()).toBe(String(country.TotalConfirmed));
        expect(component.find('[data-testid="new-confirmed"]').text()).toBe(`+${country.NewConfirmed}`);
        expect(component.find('[data-testid="total-active"]').text()).toBe(String(country.TotalActive));
        expect(component.find('[data-testid="total-deaths"]').text()).toBe(String(country.TotalDeaths));
        expect(component.find('[data-testid="new-deaths"]').text()).toBe(`+${country.NewDeaths}`);
        expect(component.find('[data-testid="total-recovered"]').text()).toBe(String(country.TotalRecovered));
        expect(component.find('[data-testid="new-recovered"]').text()).toBe(`+${country.NewRecovered}`);
    });
    
});