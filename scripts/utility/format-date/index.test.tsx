import formatDate from "./index";

describe("sortArray utility :", () => {
    test("Checking for date format testing of Abort :", () => {
        const date = "2020-09-27T00:55:59Z";
        expect(formatDate(date)).toBe("September 27, 2020, 08:55:59 AM");
    });
});