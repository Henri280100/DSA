const RomanToInt = (s: string): number => {
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
  let preValue = 0 as number;
  for (const char of s) {
    
    const currValue= symbol.get(char) as number;

    if (currValue > preValue) {
      result += currValue - 2 * preValue;
    } else {
      result += currValue;
    }
    preValue = currValue;
  }
  return result;
};

console.log(RomanToInt("XIV"));