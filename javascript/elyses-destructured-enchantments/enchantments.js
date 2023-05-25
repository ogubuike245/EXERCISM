/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  // throw new Error('Implement the getFirstCard function');
  const [first] = deck;
  return first;
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  const [, second] = deck;
  return second;
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
  [deck[0], deck[1]] = [deck[1], deck[0]];
  return deck;
}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
  const [topCard, ...remainingCards] = deck;
  return [topCard, remainingCards];
}

/** @type Card[] **/
const FACE_CARDS = ["jack", "queen", "king"];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards([firstCard, ...deck]) {
  return [firstCard, ...FACE_CARDS, ...deck];
}

const deck = [5, 4, 7, 10];

console.log(insertFaceCards(deck));
