import "jsdom-global/register";
import * as React from "react";
import * as renderer from "react-test-renderer";
import Title from "./index";
import {shallow} from "enzyme";


describe("Title component :", () => {

    test("Snapshot renders :", () => {
        const component = renderer.create(<Title />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    test("Title Text to match :", () => {
        const wrapper = shallow(<Title />);
        expect(wrapper.text()).toBe("COVID-19 React Tracking Application");
    });
    
});