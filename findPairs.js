/* Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k. */

const findPairs = (nums, k) => {
  if (k < 0) return 0;
  let set = new Set(),
    res = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i] + k)) res.add(nums[i] + k);
    if (set.has(nums[i] - k)) res.add(nums[i]);
    set.add(nums[i]);
  }
  return res.size;
};
