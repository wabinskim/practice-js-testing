export default function randomNumber(min, max) {
  if (min === undefined) {
    throw new Error("First param must be given!");
  }
  if (max === undefined) {
    throw new Error("Second param must be given!");
  }
  min = Number(min);
  max = Number(max);
  if (typeof min !== "number" || !Number.isFinite(Number(min))) {
    throw new Error("First param must be a number!");
  }
  if (typeof max !== "number" || !Number.isFinite(Number(max))) {
    throw new Error("Second param must be a number!");
  }
  if (min > max) {
    throw new Error("First param must be lower than second!");
  }
  return Math.random() * (max - min) + min;
}
