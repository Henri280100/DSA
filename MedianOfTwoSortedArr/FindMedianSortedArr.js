/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// runtimes 100-108ms
// Memory 56.21MB
const FindMedianSortedArr = (nums1, nums2) => {
  const mergedArr = [...nums1, ...nums2];
  // Sort the merged array
  mergedArr.sort((a, b) => a - b);
  // Find the median
  const median =
    mergedArr.length % 2 === 0
      ? (mergedArr[mergedArr.length / 2] +
          mergedArr[mergedArr.length / 2 - 1]) /
        2
      : mergedArr[Math.floor(mergedArr.length / 2)];
  return median;
};

console.log(FindMedianSortedArr([18, 11, 15], [24, 31, 30]));
