/**
 * @param {string} s
 * @return {number}
 */
/**
 * Solution 1
 * let max = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = start; j < i; j++) {
            if (s[j] === s[i]) {
                start = j + 1;
                break;
            }
        }
        max = Math.max(max, i - start + 1);
    }
    return max;

    Solution 2: using Map
    const charIndexMap = new Map<string, number>(); // Map to store characters and their indices
    let longestStr = 0;
    let left = 0; // Left pointer of the sliding window

    for (let right = 0; right < s.length; right++) {
        const letter = s[right];
        if (charIndexMap.has(letter)) {
            // If the current character is already in the map, update the left pointer
            left = Math.max(left, charIndexMap.get(letter)! + 1); // Move left pointer to the next position after the last occurrence of the character
        }
        // Update the map with the current character and its index
        charIndexMap.set(letter, right);
        // Update the longestStr with the maximum length of the substring without repeating characters
        longestStr = Math.max(longestStr, right - left + 1);
    }
    return longestStr;


    
 */
   
const lengthOfLongestSubstring = (s) => {

    let longestStr = 0;
    let set = new Set();

    let left = 0;
    let right = 0;

    while (right < s.length) {
        let letter = s[right];
        if (!set.has(letter)) {
            set.add(letter);
            longestStr = Math.max(longestStr, set.size);
            right++;
        } else {
            set.delete(s[left]);
            left++;
           
        }
    }
    return longestStr;
}



console.log(lengthOfLongestSubstring("pwwkew"));

