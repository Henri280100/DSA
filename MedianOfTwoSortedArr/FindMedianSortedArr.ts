
// Runtime: 88ms
// Memory: 54,23 MB
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // Ensure the nums1 is the smaller array
  if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);
  // Using binary search to find the median of two sorted arrays
  let low = 0,
    high = nums1.length;
  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY =
      Math.floor((nums1.length + nums2.length + 1) / 2) - partitionX;

    const maxX =
      partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const minX =
      partitionX === nums1.length
        ? Number.POSITIVE_INFINITY
        : nums1[partitionX];

    const maxY =
      partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
    const minY =
      partitionY === nums2.length
        ? Number.POSITIVE_INFINITY
        : nums2[partitionY];

    if (maxX <= minY && maxY <= minX) {
      return (nums1.length + nums2.length) % 2 === 0
        ? (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2
        : Math.max(maxX, maxY);
    } else if (maxX > minY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
  return 0;
}

console.log(findMedianSortedArrays([1, 2], [3, 4]));
