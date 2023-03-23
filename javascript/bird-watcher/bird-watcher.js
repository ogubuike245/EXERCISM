// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  // FIRST METHOD
  // return birdsPerDay.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   0
  // );

  // SECOND METHOD
  const days = birdsPerDay.length;
  let count = 0;
  for (let i = 0; i < days; i++) {
    count += birdsPerDay[i];
  }
  return count;
}
console.log(totalBirdCount([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]));
/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */

export function birdsInWeek(birdsPerDay, week) {
  // METHOD ONE : FOR LOOP
  // let totalBirds = 0;
  // for (let i = (week - 1) * 7; i < week * 7; i++) {
  //   totalBirds += birdsPerDay[i];
  // }
  // return totalBirds;

  //METHOD TWO : SLICE AND REDUCE
  let startIndex = (week - 1) * 7;
  let endIndex = startIndex + 7;
  let weekBirdCounts = birdsPerDay.slice(startIndex, endIndex);
  let totalBirds = weekBirdCounts.reduce((sum, count) => sum + count, 0);
  return totalBirds;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay;
}
