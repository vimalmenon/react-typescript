import "jsdom-global/register";
import * as React from "react";
import Search from "./index";
import {shallow} from "enzyme";
import { ISummary } from "../../../../types/isummary.d";
import {formatDate} from "utility"

describe("Search component :", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("Search component check input search value :", () => {
        
        const search="Search";
        const setSearch = jest.fn();
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
        jest.spyOn(React, "useContext").mockImplementation(() => result);
        let component = shallow(<Search search={search} setSearch={setSearch} />);
        expect(component.find('[data-testid="search"]').prop("value")).toBe(search);
        
    });

    test("Search component check input search value :", () => {
        
        const search = "";
        const setSearch = jest.fn((e) => e);
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
        jest.spyOn(React, "useContext").mockImplementation(() => result);
        let component = shallow(<Search search={search} setSearch={setSearch} />);
        expect(component.find('[data-testid="date"]').text()).toBe(`Last Updated On: ${formatDate(data.Date)}`);
    });

    test("Search component with no date passed :", () => {
        const search = "";
        const setSearch = jest.fn((e) => e);
        const result = {loading: false, error:"", data:null};
        jest.spyOn(React, "useContext").mockImplementation(() => result);
        let component = shallow(<Search search={search} setSearch={setSearch} />);
        expect(component.find('[data-testid="date"]').text()).toBe(`Last Updated On: ${formatDate("")}`);
    });

    test("Search component check input search value :", () => {
        
        const search = "";
        const setSearch = jest.fn((e) => e);
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
        jest.spyOn(React, "useContext").mockImplementation(() => result);
        let component = shallow(<Search search={search} setSearch={setSearch} />);
        component.find('[data-testid="search"]').simulate('change', { target: { value: 'Hello' } });
        expect(setSearch).toBeCalledTimes(1);
        
    });
    
});