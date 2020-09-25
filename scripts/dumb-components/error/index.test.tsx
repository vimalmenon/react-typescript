import "jsdom-global/register";
import * as React from "react";
import * as renderer from "react-test-renderer";
import Error from "./index";
import {shallow} from "enzyme";

describe("Error component :", () => {
    const message = "test";

    test("Snapshot renders :", () => {
        const component = renderer.create(<Error message={message}/>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    test("Renders the message passed as props :", () => {
        const wrapper = shallow(<Error message={message}/>);
        expect(wrapper.text()).toEqual(message);
        
    });

});
