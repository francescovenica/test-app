import { getRandomNumber } from "../";

describe("Utils", () => {
  describe("getRandomNumber", () => {
    it("should not return a number if already used", () => {
      expect(getRandomNumber(2, [1])).toEqual(2);
    });
  });
});
