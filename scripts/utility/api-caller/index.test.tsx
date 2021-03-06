declare var global;

import ApiCaller from "./index";
import {api} from "../../models";

const {SummaryApi} = api;

interface IResult {
    id:number,
    value:string
}

describe("ApiCaller utility :", () => {
    test("ApiCaller utility testing of resolve :", () => {
        const result:IResult = {
            id:1,
            value:"Test"
        };
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(result),
            })
        );
        global.AbortController = jest.fn(() => ({
            signal:null,
            abort: ()=>{}
        }));

        expect(new ApiCaller(new SummaryApi()).getPromise()).resolves.toBe(result);
    });
});