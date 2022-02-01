/**
 * @param {number[]} nums
 * @return {boolean}
 */ 
for (var i= 0; i < nums.length; i++) {
  const num = nums[i];
  if(dict[num]) return true;
  dict[num] = true;
 }
 return false;
