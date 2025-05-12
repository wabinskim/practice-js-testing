import randomNumber from "./app";

it("should return 1 if both params are equal to 1", () => {
  expect(randomNumber(1, 1)).toEqual(1);
});

it("should reject if first param is not given", () => {
  expect(() => randomNumber()).toThrow("First param must be given!");
});
