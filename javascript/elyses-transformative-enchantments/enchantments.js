// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((card) => card * 2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  const transformedDeck = deck.flatMap((card) =>
    card === 3 ? [3, 3, 3] : card
  );
  return transformedDeck;
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const middleIndex = Math.floor(deck.length / 2);
  const extractedCards = deck.slice(middleIndex - 1, middleIndex + 1);
  return extractedCards;
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const topCard = deck.shift();
  const bottomCard = deck.pop();

  const middleIndex = Math.floor(deck.length / 2);
  deck.splice(middleIndex, 0, bottomCard, topCard); // Insert the cards into the middle

  return deck;
}

// const deck = [1, 2, 3, 5, 6, 10];
// console.log(sandwichTrick(deck));

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter((card) => card === 2);
}

// const deck = [1, 2, 3, 4, 10, 2];
// console.log(twoIsSpecial(deck));
/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  deck.sort((a, b) => a - b);
  return deck;
}

// const deck = [10, 1, 5, 3, 2, 8, 7];
// console.log(perfectlyOrdered(deck));
/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  deck.reverse();
  return deck;
}

const deck = [10, 1, 5, 3, 2];
console.log(reorder(deck));
