function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const sortedArrayToBST = nums => {
  if (nums.length === 1) return new TreeNode(nums[0]);
  if (!nums.length) return null;

  let mid = Math.floor(nums.length / 2),
    left = nums.slice(0, mid),
    right = nums.slice(mid + 1);

  let node = new TreeNode(nums[mid]);
  let current = node;

  current.left = sortedArrayToBST(left);
  current.right = sortedArrayToBST(right);

  return node;
};
