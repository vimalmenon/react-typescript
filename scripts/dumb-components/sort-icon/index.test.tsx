import "jsdom-global/register";
import * as React from "react";
import * as renderer from "react-test-renderer";
import SortIcon from "./index";
import {shallow} from "enzyme";


describe("SortIcon component :", () => {

    test("Snapshot renders :", () => {
        const component = renderer.create(<SortIcon sortIndex={1} currentIndex={1}/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test("SortIcon nothing to render :", () => {
        const wrapper = shallow(<SortIcon sortIndex={2} currentIndex={1}/>);
        expect(wrapper.isEmptyRender()).toBe(true);
    });

    test("SortIcon to render on ascending icon :", () => {
        const wrapper = shallow(<SortIcon sortIndex={2} currentIndex={2}/>);
        expect(wrapper.contains(<span>&darr;</span>)).toBe(true);
    });

    test("SortIcon to render on descending icon :", () => {
        const wrapper = shallow(<SortIcon sortIndex={-2} currentIndex={2}/>);
        expect(wrapper.contains(<span>&uarr;</span>)).toBe(true);
    });
    
});