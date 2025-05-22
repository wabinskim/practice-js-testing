export default function randomNumber(min, max) {
  //   max = Number(max);
  if (min === undefined) {
    throw new Error("First param must be given!");
  }
  if (max === undefined) {
    throw new Error("Second param must be given!");
  }
  min = Number(min);
  if (typeof min !== "number" || !Number.isFinite(Number(min))) {
    throw new Error("First param must be a number!");
  }
  return Math.random() * (max - min) + min;
}
