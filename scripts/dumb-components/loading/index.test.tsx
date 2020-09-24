import "jsdom-global/register";
import * as React from "react";
import * as renderer from "react-test-renderer";
import Loading from "./index";
import {shallow} from "enzyme";

describe("Loading component :", () => {

    test("Snapshot renders :", () => {
        const component = renderer.create(<Loading />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("Component contains test :", () => {
        const wrapper = shallow(<Loading />);
        expect(wrapper.contains(<div id="loader-wrapper"><div id="loader"></div></div>)).toBe(true);
    });
    
});