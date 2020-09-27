import "jsdom-global/register";
import * as React from "react";
import Page from "./index";
import {shallow} from "enzyme";


describe("Page component :", () => {
    let component;
    beforeEach(() => {
        component = shallow(<Page/>);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("Page component to contain Content component :", () => {
        const contentComponent = component.find("Content");
        expect(contentComponent.length).toBe(1);
    });
    test("Page component to contain Memo(Title) component :", () => {
        const titleComponent = component.find("Memo(Title)");
        expect(titleComponent.length).toBe(1);
    });
    
});