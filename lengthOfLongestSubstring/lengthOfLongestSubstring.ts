


const lengthOfLongestSubstringTS = (s: string): number => {
  let longestStr = 0;
  let set = new Set();

  let right = 0;
  let left = 0;
  while (right < s.length) {
    let letter = s[right];
    if (set.has(letter)) {
      set.delete(letter);
      left = Math.max(left, set.size);
    } else {
      set.add(letter);
      longestStr = Math.max(longestStr, set.size);
      right++;
    }
  }
  return longestStr;
};

console.log(lengthOfLongestSubstringTS("pwwkew"));