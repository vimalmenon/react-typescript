import "jsdom-global/register";
import * as React from "react";
import * as renderer from "react-test-renderer";
import NoRoute from "./index";
import {shallow} from "enzyme";

import {
    BrowserRouter as Router,
	Route
} from "react-router-dom";


describe("NoRoute component :", () => {

    test("Snapshot renders :", () => {
        const component = renderer.create(<Router><Route component={NoRoute}/></Router>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("Component test check:", () => {
        const wrapper = shallow(<NoRoute />);
        expect(wrapper.text()).toBe("No Page Found.Go back to Home");
    });
    
});