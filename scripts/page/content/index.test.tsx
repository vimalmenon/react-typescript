import "jsdom-global/register";
import * as React from "react";
import Content from "./index";
import {shallow, mount} from "enzyme";
import * as Service from "./index.service";
import {setActiveCasesAndHash} from "./index.service";

import {ICountry, ICountriesHash, ISummary} from "../../types/isummary.d";

describe("Content component :", () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("Content component to contain Loading component when loading is set true :", () => {
        const result = {loading: true, error:"", data: null, getData : () => {}};
        jest.spyOn(Service, "useInit").mockImplementation(() => result);
        let component = shallow(<Content/>);

        const loadingComponent = component.find("Memo(Loading)");
        expect(loadingComponent.length).toBe(1);
    });

    test("Content component useInit is called :", () => {
        
        const result = {loading: true, error:"", data: null, getData : () => {}};
        var mock = jest.spyOn(Service, "useInit").mockImplementation(() => result);
        shallow(<Content/>);
        expect(mock).toBeCalled();

    });

    test("Content component when there is error :", () => {
        
        const result = {loading: false, error:"Error message", data: null, getData : () => {}};
        jest.spyOn(Service, "useInit").mockImplementation(() => result);
        let component = mount(<Content/>);
        expect(component.find("Memo(Error)").text()).toBe(result.error);
    });

    test("Content component getData to have been called once :", () => {
        
        const getData = jest.fn();
        const result = {loading: false, error:"Error message", data: null, getData};
        jest.spyOn(Service, "useInit").mockImplementation(() => result);
        mount(<Content/>);
        expect(getData).toBeCalledTimes(1);
    });

    test("Content component expect Three three :", () => {
        const data:ISummary = {
            Countries:[],
            Date:"2020-09-25T09:50:46Z",
            Global:{
                NewConfirmed: 361339,
                NewDeaths: 6703,
                NewRecovered: 261205,
                TotalConfirmed: 32135733,
                TotalDeaths: 981743,
                TotalRecovered: 22147853
            },
            Message:"This is message from the server"
        }
        const result = {loading: false, error:"", data, getData: () =>{}};
        jest.spyOn(Service, "useInit").mockImplementation(() => result);
        let component = shallow(<Content/>);
        expect(component.find("Route").length).toBe(3);
    });
    
    
});


describe("Content Services :", () => {

    test("Content Services checks for setActiveCasesAndHash :", () => {
        const input:ICountry[] = [
            {
                Country: "Afghanistan",
                CountryCode: "AF",
                Date: "2020-09-25T09:50:46Z",
                NewConfirmed: 25,
                NewDeaths: 5,
                NewRecovered: 9,
                TotalConfirmed: 39170,
                TotalDeaths: 1451,
                TotalRecovered: 32619
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
                TotalRecovered: 7239
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
                TotalRecovered: 35544
            }
        ];
        const Countries:ICountry[] = [
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
        expect(setActiveCasesAndHash(input)).toEqual({Countries,CountriesHash});
    });
    
});