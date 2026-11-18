class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
   let i = 0;
   let pointer= 0;
   let res = [];
     while (i < nums.length && pointer < nums.length){
       const pr = nums.length
       let j = i;
       let p = 0;
       let count= 1;
       while (p < pr){
         if(p !==j){
          count = count*nums[p];
         }
         p++;
       }
       res.push(count);
       count = 1;
       i++;
       j++;
       pointer++;    
     }
  return res
    }
}
