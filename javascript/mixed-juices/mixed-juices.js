// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */

const PURE_STRAWBERRY_JOY = "Pure Strawberry Joy";
const ENERGIZER = "Energizer";
const GREEN_GARDEN = "Green Garden";
const TROPICAL_ISLAND = "Tropical Island";
const ALL_OR_NOTHING = "All or Nothing";
export function timeToMixJuice(name) {
  if (name === PURE_STRAWBERRY_JOY) {
    return 0.5;
  } else if (name === ENERGIZER || name === GREEN_GARDEN) {
    return 1.5;
  } else if (name === TROPICAL_ISLAND) {
    return 3;
  } else if (name === ALL_OR_NOTHING) {
    return 5;
  } else {
    return 2.5;
  }
}
console.log(timeToMixJuice(ALL_OR_NOTHING));
/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  throw new Error("Please implement the remainingOrders function");
}
