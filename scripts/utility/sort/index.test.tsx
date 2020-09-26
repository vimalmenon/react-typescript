import sortArray from "./index";


interface ITestNumber {
    id:number;
    value:string;
}
interface ITestString{
    id:string;
    value:string;
}
describe("sortArray utility :", () => {
    let numberSort:ITestNumber[] = [];
    let stringSort:ITestString[] = [];
    beforeEach(() => {
        numberSort = [
            {
                id:2,
                value: "Two",
            },
            {
                id:1,
                value: "One",
            },
            {
                id:4,
                value: "Four",
            },
            {
                id:4,
                value: "five",
            },
            {
                id:0,
                value: "Zero",
            },
            {
                id:3,
                value: "Three",
            }
        ];
        stringSort = [
            {
                id:"d",
                value: "Three",
            },
            {
                id:"a",
                value: "Zero",
            },
            {
                id:"b",
                value: "One",
            },
            {
                id:"c",
                value: "Two",
            }
        ];
    });


    test("Testing the descending sort with numbers :", () => {
        const results:ITestNumber[] = [
            {
                id:4,
                value: "five",
            },
            {
                id:4,
                value: "Four",
            },
            {
                id:3,
                value: "Three",
            },
            {
                id:2,
                value: "Two",
            },
            {
                id:1,
                value: "One",
            },
            {
                id:0,
                value: "Zero",
            }
        ];
        expect(sortArray<ITestNumber>(numberSort, "id", true)).toEqual(results);
    });

    test("Testing the ascending sort with numbers :", () => {
        const results:ITestNumber[] = [
            {
                id:0,
                value: "Zero",
            },
            {
                id:1,
                value: "One",
            },
            {
                id:2,
                value: "Two",
            },
            {
                id:3,
                value: "Three",
            },
            {
                id:4,
                value: "Four",
            },
            {
                id:4,
                value: "five",
            }
        ];
        expect(sortArray<ITestNumber>(numberSort, "id", false)).toEqual(results);
    });


    test("Testing the descending sort with string :", () => {
        const results:ITestString[] = [
            {
                id:"d",
                value: "Three",
            },
            {
                id:"c",
                value: "Two",
            },
            {
                id:"b",
                value: "One",
            },
            {
                id:"a",
                value: "Zero",
            }
        ];
        expect(sortArray<ITestString>(stringSort, "id", true)).toEqual(results);
    });

    test("Testing the ascending sort with String :", () => {
        const results:ITestString[] = [
            {
                id:"a",
                value: "Zero",
            },
            {
                id:"b",
                value: "One",
            },
            {
                id:"c",
                value: "Two",
            },
            {
                id:"d",
                value: "Three",
            },
        ];
        expect(sortArray<ITestString>(stringSort, "id", false)).toEqual(results);
    });

    test("Testing blank array :", () => {
        const results:ITestString[] = [
        ];
        expect(sortArray<ITestString>([], "id", false)).toEqual([]);
    });
});