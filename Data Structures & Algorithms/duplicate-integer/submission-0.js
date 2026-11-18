class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let items = {};
        for(let num of nums){
            items[num] = (items[num] || 0) + 1;
           if(items[num] >= 2){
             break;
           }
        }
      return Object.values(items).length === nums.length ? false : true
    }
}
