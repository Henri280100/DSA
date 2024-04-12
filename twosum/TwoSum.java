package twosum;
import java.util.Arrays;

/**
 * twoSum
 */


class TwoSum{

    static int[] twoSumMethod(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[] { i, j };
                }
            }
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        int[] nums = new int[] { 3, 6, 10, 14 };
        int[] result = TwoSum.twoSumMethod(nums, 9);
        System.out.println(Arrays.toString(result));
    }

}