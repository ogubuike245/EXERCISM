// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack - Array representing the deck of cards
 * @param {number} card - Type of card to count
 * @returns {number} - Number of cards of the specified type in the deck
 */
export function cardTypeCheck(stack, card) {
  let count = 0;
  stack.forEach((cardType) => {
    if (cardType === card) {
      count++;
    }
  });
  return count;
}

const cardType = 3;
console.log(cardTypeCheck([1, 2, 3, 4], cardType));

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack - Array representing the deck of cards
 * @param {boolean} type - The type of value to check for - odd or even
 * @returns {number} - Number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // this count array is just for testing purposes to see the code in action via console log
  let count = [];

  let countLength = 0;

  for (const iterator of stack) {
    if (type === true) {
      // Checking for even cards
      if (iterator % 2 === 0) {
        console.log(iterator);
        console.log(count.push(iterator));
        countLength++;
      }
    } else if (iterator % 2 !== 0) {
      // Checking for odd cards
      console.log(iterator);
      console.log(count.push(iterator));
      console.log(count.length);
      countLength++;
    }
  }
  return countLength;
}

console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], true));
// Output: 2

console.log(determineOddEvenCards([1, 2, 3, 1, 5, 6], false));
// Output: 4
