import "jsdom-global/register";
import * as React from "react";
import Details from "./index";
import {shallow} from "enzyme";
import { ICountry } from "../../../../types/isummary.d";

import {formatDate} from "utility";

describe("Detail component :", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("Detail component with Non 0 value set:", () => {
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
        const component = shallow(<Details countryDetails={countryDetails} />);
        
        expect(component.find('[data-testid="Country"]').text()).toBe(String(countryDetails.Country));
        expect(component.find('[data-testid="CountryCode"]').text()).toBe(String(countryDetails.CountryCode));
        expect(component.find('[data-testid="Date"]').text()).toBe(String(formatDate(countryDetails.Date)));
        expect(component.find('[data-testid="TotalActive"]').text()).toBe(String(countryDetails.TotalActive));
        expect(component.find('[data-testid="TotalConfirmed"]').text()).toBe(String(countryDetails.TotalConfirmed));
        expect(component.find('[data-testid="NewConfirmed"]').text()).toBe(`+${countryDetails.NewConfirmed}`);
        expect(component.find('[data-testid="TotalRecovered"]').text()).toBe(String(countryDetails.TotalRecovered));
        expect(component.find('[data-testid="NewRecovered"]').text()).toBe(`+${countryDetails.NewRecovered}`);
        expect(component.find('[data-testid="TotalDeaths"]').text()).toBe(String(countryDetails.TotalDeaths));
        expect(component.find('[data-testid="NewDeaths"]').text()).toBe(`+${countryDetails.NewDeaths}`);
        
    });

    test("Detail component with 0 value set:", () => {
        const countryDetails:ICountry = {
            Country: "Afghanistan",
            CountryCode: "AF",
            Date: "2020-09-25T09:50:46Z",
            NewConfirmed: 0,
            NewDeaths: 0,
            NewRecovered: 0,
            TotalConfirmed: 39170,
            TotalDeaths: 1451,
            TotalRecovered: 32619,
            TotalActive: 5100
        };
        const component = shallow(<Details countryDetails={countryDetails} />);
        
        expect(component.find('[data-testid="Country"]').text()).toBe(String(countryDetails.Country));
        expect(component.find('[data-testid="CountryCode"]').text()).toBe(String(countryDetails.CountryCode));
        expect(component.find('[data-testid="Date"]').text()).toBe(String(formatDate(countryDetails.Date)));
        expect(component.find('[data-testid="TotalActive"]').text()).toBe(String(countryDetails.TotalActive));
        expect(component.find('[data-testid="TotalConfirmed"]').text()).toBe(String(countryDetails.TotalConfirmed));
        expect(component.find('[data-testid="NewConfirmed"]').text()).toBe(`${countryDetails.NewConfirmed}`);
        expect(component.find('[data-testid="TotalRecovered"]').text()).toBe(String(countryDetails.TotalRecovered));
        expect(component.find('[data-testid="NewRecovered"]').text()).toBe(`${countryDetails.NewRecovered}`);
        expect(component.find('[data-testid="TotalDeaths"]').text()).toBe(String(countryDetails.TotalDeaths));
        expect(component.find('[data-testid="NewDeaths"]').text()).toBe(`${countryDetails.NewDeaths}`);
        
    });

});