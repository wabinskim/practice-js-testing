export default function randomNumber(min, max) {
  if (min === undefined) {
    throw new Error("First param must be given!");
  }
  return Math.random() * (max - min) + min;
}
