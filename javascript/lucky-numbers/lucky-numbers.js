// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const one = String(array1.join(""));
  const two = String(array2.join(""));

  return Number(one) + Number(two);
}

console.log(twoSum([1, 2, 3], [0, 7]));

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  // if (typeof value !== "number" || !Number.isInteger(value) || value <= 0) {
  //   throw new Error("Input must be a positive integer.");
  // }
  const temp = String(value);

  const trimmedAndLowercased = temp.trim().toLowerCase();

  const reversedString = trimmedAndLowercased.split("").reverse().join("");

  return reversedString === trimmedAndLowercased;
}

console.log(luckyNumber(1441));

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  switch (true) {
    case !input:
      return "Required field";

    case !Number(input) || Number(input) === 0:
      return "Must be a number besides 0";

    default:
      return "";
  }
}

console.log(errorMessage("abc"));
