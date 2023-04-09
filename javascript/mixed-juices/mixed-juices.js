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
  switch (name) {
    case PURE_STRAWBERRY_JOY: {
      return 0.5;
    }
    case ENERGIZER:
    case GREEN_GARDEN: {
      return 1.5;
    }
    case TROPICAL_ISLAND: {
      return 3;
    }
    case ALL_OR_NOTHING: {
      return 5;
    }
    default:
      return 2.5;
  }
}

console.log(timeToMixJuice(GREEN_GARDEN));
/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const wedgesPerLime = { small: 6, medium: 8, large: 10 }; // Map of lime size to wedges per lime
  let wedgesCut = 0;
  let limesCut = 0;

  while (wedgesCut < wedgesNeeded && limesCut < limes.length) {
    const limeSize = limes[limesCut];
    wedgesCut += wedgesPerLime[limeSize] || 0;
    limesCut++;
  }

  return limesCut;
}

console.log(limesToCut(25, ["small", "small", "large", "medium", "small"]));

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft - The number of minutes left in Li Mei's shift.
 * @param {string[]} orders - An array of juices that have been ordered but not prepared yet.
 * @returns {string[]} - An array of remaining orders after the time is up.
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    console.log(timeLeft);
    orders.shift();
  }
  return orders;
}

console.log(
  remainingOrders(5, ["Energizer", "All or Nothing", "Green Garden"])
);
