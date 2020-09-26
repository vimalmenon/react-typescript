import "jsdom-global/register";
import * as React from "react";
import Main from "./index";
import {shallow, mount} from "enzyme";

import * as MainComponent from "./index";


import * as services from "./index.services";

import {ICountry, ISummary } from "../../../types/isummary.d";


describe("Main component :", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    test("Main component to have Search Component :", () => {

        let component = shallow(<Main />);
        
        expect(component.find("Search").length).toBe(1);
        
    });
    test("Main component to have Country Component :", () => {
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
        const data:ISummary = {
            Countries:SortedCountries,
            Date:"2020-09-25T09:50:46Z",
            Global:{
                NewConfirmed: 361339,
                NewDeaths: 6703,
                NewRecovered: 261205,
                TotalConfirmed: 32135733,
                TotalDeaths: 981743,
                TotalRecovered: 22147853
            },
            Message:""
        };
        const dispatch = jest.fn(() => 1);
        const search = "";
        jest.spyOn(React, "useState").mockImplementation(() => {
            return [SortedCountries, dispatch];
        });
        
        jest.spyOn(React, "useContext").mockImplementation(() => ({data}));
        jest.spyOn(services, "useSetSearch").mockImplementation(() => ({search, setSearch:dispatch}));
        let component = shallow(<Main />);
        expect(component.find("Country").length).toBe(3);
        
    });
    test("Main component to have Global data :", () => {
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
        const data:ISummary = {
            Countries:SortedCountries,
            Date:"2020-09-25T09:50:46Z",
            Global,
            Message:""
        };
        const dispatch = jest.fn(() => 1);
        jest.spyOn(React, "useState").mockImplementation(() => {
            return [SortedCountries, dispatch];
        });
        
        jest.spyOn(React, "useContext").mockImplementation(() => ({data}));
        
        
        
        let component = shallow(<Main />);
        expect(component.find('[data-testid="TotalConfirmed"]').text()).toBe(String(Global.TotalConfirmed));
        expect(component.find('[data-testid="TotalDeaths"]').text()).toBe(String(Global.TotalDeaths));
        expect(component.find('[data-testid="TotalRecovered"]').text()).toBe(String(Global.TotalRecovered));
        expect(component.find('[data-testid="TotalActive"]').text()).toBe(String(Global.TotalConfirmed-Global.TotalDeaths-Global.TotalRecovered));
        expect(component.find('[data-testid="NewConfirmed"]').text()).toBe(`+${Global.NewConfirmed}`);
        expect(component.find('[data-testid="NewDeaths"]').text()).toBe(`+${Global.NewDeaths}`);
        expect(component.find('[data-testid="NewRecovered"]').text()).toBe(`+${Global.NewRecovered}`);
        
    });

    test("Main component to have Search filter :", () => {
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
        const data:ISummary = {
            Countries:SortedCountries,
            Date:"2020-09-25T09:50:46Z",
            Global,
            Message:""
        };
        const dispatch = jest.fn(() => 1);
        const search = "tan";
        jest.spyOn(services, "useSetSearch").mockImplementation(() => ({search, setSearch:dispatch}));
        let component = shallow(<Main />);
        expect(component.find("Country").length).toBe(1);
        
         
    });

    test("Main component sortCountries to have been called :", () => {
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
        const data:ISummary = {
            Countries:SortedCountries,
            Date:"2020-09-25T09:50:46Z",
            Global,
            Message:""
        };
        
        const dispatch = jest.fn(() => "");
        jest.spyOn(React, "useState").mockImplementation(() => {
            return [SortedCountries, dispatch];
        });
        
        jest.spyOn(React, "useContext").mockImplementation(() => ({data}));
        
        const mock = jest.spyOn(services, "useSortCountries").mockImplementation(() => ({sortCountries:dispatch}));
        
        
        let component = shallow(<Main />);
        expect(mock).toBeCalledTimes(1);
        component.find('[data-testid="ClickTotalConfirmed"]').simulate('click');
        expect(dispatch).toBeCalledTimes(1);
        component.find('[data-testid="Country"]').simulate('click');
        expect(dispatch).toBeCalledTimes(2);
        component.find('[data-testid="ClickNewConfirmed"]').simulate('click');
        expect(dispatch).toBeCalledTimes(3);
        component.find('[data-testid="ClickTotalActive"]').simulate('click');
        expect(dispatch).toBeCalledTimes(4);
        component.find('[data-testid="ClickTotalDeaths"]').simulate('click');
        expect(dispatch).toBeCalledTimes(5);
        component.find('[data-testid="ClickNewDeaths"]').simulate('click');
        expect(dispatch).toBeCalledTimes(6);
        component.find('[data-testid="ClickTotalRecovered"]').simulate('click');
        expect(dispatch).toBeCalledTimes(7);
        component.find('[data-testid="ClickNewRecovered"]').simulate('click');
        expect(dispatch).toBeCalledTimes(8);
    });
});