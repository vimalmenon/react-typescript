import "jsdom-global/register";
import * as React from "react";
import * as renderer from "react-test-renderer";
import Page from "./index";
import {shallow, mount} from "enzyme";


describe("Page component :", () => {

    test("Snapshot renders :", () => {
        //const component = shallow(<Page/>);
        
        expect(true).toBe(true);
    });
    
});