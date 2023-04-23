/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
  if (Number(timer) === 0) {
    return "Lasagna is done.";
  }
  if (Number(timer) > 0) {
    return "Not done, please wait.";
  }

  if (!timer) {
    return "You forgot to set the timer.";
  }
}

console.log(cookingStatus());

export function preparationTime(layers, minutes = 2) {
  const length = layers.length;

  return length * minutes;
}

const layers = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];
console.log(preparationTime(layers, 3));
console.log(preparationTime(layers));

export function quantities(layers) {
  const GRAMS_PER_NOODLE_LAYER = 50;
  const LITERS_PER_SAUCE_LAYER = 0.2;
  const NOODLES = layers.filter((noodles) => {
    return noodles === "noodles";
  });
  const SAUCE = layers.filter((sauce) => {
    return sauce === "sauce";
  });

  return {
    noodles: NOODLES.length * GRAMS_PER_NOODLE_LAYER,
    sauce: SAUCE.length * LITERS_PER_SAUCE_LAYER,
  };
}

console.log(
  quantities(["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"])
);
export function addSecretIngredient(FRIEND_LIST, OWN_LIST) {
  const secret = FRIEND_LIST[FRIEND_LIST.length - 1];
  OWN_LIST.push(secret);
  console.log(OWN_LIST);
  return;
}

const friendsList = ["noodles", "sauce", "mozzarella", "kampot pepper"];
const myList = ["noodles", "meat", "sauce", "mozzarella"];

console.log(addSecretIngredient(friendsList, myList));

export function scaleRecipe(recipe, portion) {
  const scaledRecipe = {};
  for (const key in recipe) {
    scaledRecipe[key] = (recipe[key] * portion) / 2;
  }
  return scaledRecipe;
}
