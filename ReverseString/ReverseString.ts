/**
 Do not return anything, modify s in-place instead.
 */
function ReverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Swap characters at left and right pointers
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
}
