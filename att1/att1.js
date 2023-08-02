
var permute = function(nums) {
  const output = [];

  const dfs = (curr, rest) => {
    // base case. Found a permutation because there's nothing else to explore.
    if (rest.length === 0) {
      output.push(curr);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      dfs([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  }
  dfs([], nums);
  
  return output;
};
