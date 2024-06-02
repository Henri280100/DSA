/**
 *
 * @param {number} num
 * @return {string}
 */
const IntToRoman = (num) => {
  const symbolMap = [
    { value: 1000, keys: "M" },
    { value: 900, keys: "CM" },
    { value: 500, keys: "D" },
    { value: 400, keys: "CD" },
    { value: 100, keys: "C" },
    { value: 90, keys: "XC" },
    { value: 50, keys: "L" },
    { value: 40, keys: "XL" },
    { value: 10, keys: "X" },
    { value: 9, keys: "IX" },
    { value: 5, keys: "V" },
    { value: 4, keys: "IV" },
    { value: 1, keys: "I" },
  ];
  let result = '';
  for (const {value, keys} of symbolMap) {
    const count = Math.floor(num / value);
    result += keys.repeat(count);
    num -= value * count;
  }
  return result;
};

console.log(IntToRoman(2440));
console.log(IntToRoman(1994));
console.log(IntToRoman(2000));
console.log(IntToRoman(1900));
console.log(IntToRoman(1205));

