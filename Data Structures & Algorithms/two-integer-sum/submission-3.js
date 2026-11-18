class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // for(let k = 0; k< nums.length; k++){
        //     for (let p = k+1; p< nums.length; p++){
        //       if(nums[k]+ nums[p] === target){
        //         return [k, p]
        //       }
        //     }
        // }
        // return false

        let hst = {};
        for(let k = 0; k < nums.length; k++){
          let diff = target - nums[k];
          if(hst[diff] || hst[diff] === 0){
            return [hst[diff], k]
          }else {
            hst[nums[k]] = k
          }
        }
      return false;
    }

    
}
