import java.util.Arrays;

public class MaximumProduct {
    public static int maximumProduct(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length;
        return Math.max(nums[n - 1] * nums[n - 2] * nums[n - 3], nums[0] * nums[1] * nums[n - 1]);
    }

    public static void main(String[] args) {
        int[] nums = {-10, -10, 5, 2};
        System.out.println(maximumProduct(nums)); // Output: 500
    }
}
