declare var global;
import "jsdom-global/register";
import * as React from "react";
import CountryCode from "./index";
import {shallow, mount} from "enzyme";
import * as Service from "./index.services";


import { ICountriesHash, ICountry, ISummary } from "../../../types/isummary.d";

describe("CountryCode component :", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("CountryCode component on invalid route to route :", () => {
        jest.spyOn(Service, "getParamsCode").mockImplementation(() => {
            return ({
                code: 'US'
            });
        });
        const component = shallow(<CountryCode />);
        expect(component.find("Memo(NoRoute)").length).toBe(1);
        
    });

    test("CountryCode component to have Details and Graph component :", () => {
        const SortedCountries:ICountry[] = [
            {
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
            },
            {
                Country: "Albania",
                CountryCode: "AL",
                Date: "2020-09-25T09:50:46Z",
                NewConfirmed: 134,
                NewDeaths: 0,
                NewRecovered: 100,
                TotalConfirmed: 12921,
                TotalDeaths: 370,
                TotalRecovered: 7239,
                TotalActive: 5312
            },
            {
                Country: "Algeria",
                CountryCode: "DZ",
                Date: "2020-09-25T09:50:46Z",
                NewConfirmed: 179,
                NewDeaths: 5,
                NewRecovered: 116,
                TotalConfirmed: 50579,
                TotalDeaths: 1703,
                TotalRecovered: 35544,
                TotalActive: 13332
            }
        ];
        const Global = {
            NewConfirmed: 361339,
            NewDeaths: 6703,
            NewRecovered: 261205,
            TotalConfirmed: 32135733,
            TotalDeaths: 981743,
            TotalRecovered: 22147853
        };
        const CountriesHash:ICountriesHash = {
            AF: {
              Country: 'Afghanistan',
              CountryCode: 'AF',
              Date: '2020-09-25T09:50:46Z',
              NewConfirmed: 25,
              NewDeaths: 5,
              NewRecovered: 9,
              TotalConfirmed: 39170,
              TotalDeaths: 1451,
              TotalRecovered: 32619,
              TotalActive: 5100
            },
            AL: {
              Country: 'Albania',
              CountryCode: 'AL',
              Date: '2020-09-25T09:50:46Z',
              NewConfirmed: 134,
              NewDeaths: 0,
              NewRecovered: 100,
              TotalConfirmed: 12921,
              TotalDeaths: 370,
              TotalRecovered: 7239,
              TotalActive: 5312
            },
            DZ: {
              Country: 'Algeria',
              CountryCode: 'DZ',
              Date: '2020-09-25T09:50:46Z',
              NewConfirmed: 179,
              NewDeaths: 5,
              NewRecovered: 116,
              TotalConfirmed: 50579,
              TotalDeaths: 1703,
              TotalRecovered: 35544,
              TotalActive: 13332
            }
        };
        const data:ISummary = {
            Countries:SortedCountries,
            Date:"2020-09-25T09:50:46Z",
            Global,
            Message:"",
            CountriesHash
        };
        jest.spyOn(React, "useContext").mockImplementation(() => ({data}));
        jest.spyOn(Service, "getParamsCode").mockImplementation(() => {
            return ({
                code: 'AF'
            });
        });
        const component = shallow(<CountryCode />);
        //console.log(component.debug());
        expect(component.find("Details").length).toBe(1);
        expect(component.find("Graph").length).toBe(1);
        
    });

});