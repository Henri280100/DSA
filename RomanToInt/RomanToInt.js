/**
 *
 * @param {string} s
 * @return {number}
 */
const RomanToInt = (s) => {
  // Sol 1:
//   const map = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let result = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (map[s[i]] < map[s[i + 1]]) {
//       result -= map[s[i]];
//     } else {
//       result += map[s[i]];
//     }
//   }
//   return result;
  // Use new Set method
    const symbol = new Map([
      ["I", 1],
      ["V", 5],
      ["X", 10],
      ["L", 50],
      ["C", 100],
      ["D", 500],
      ["M", 1000],
    ]);

    let result = 0;
    let prevValue = 0;

    for (const char of s) {
        const currValue = symbol.get(char);
        if (currValue > prevValue) {
            result += currValue - 2 * prevValue;
        } else {
            result += currValue;
        }
        prevValue = currValue;
    }
    return result;
};

console.log(RomanToInt("XIV"));
