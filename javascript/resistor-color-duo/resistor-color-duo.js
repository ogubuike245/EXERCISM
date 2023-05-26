//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  const colorValues = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  const [color1, color2] = colors.slice(0, 2);
  const value1 = colorValues[color1];
  const value2 = colorValues[color2];

  const result = parseInt(`${value1}${value2}`);

  return result;
};
