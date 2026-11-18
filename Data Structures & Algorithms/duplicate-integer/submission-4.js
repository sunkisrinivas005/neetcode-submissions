class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
  hasDuplicate(nums) {
    //    var str = '';
    //    for (let i = 0; i <= nums.length; i++){
    //       if(str.includes(nums[i])){
    //          return true
    //       }else {
    //          str = str.concat(nums[i])
    //       }
    //    }
    //    return false
       var hst = {};
       for (let i = 0; i < nums.length; i++){
        if(hst[nums[i]]){
          return true
        }else{
          hst[nums[i]] = 1
        }
       }
       return false
 }
}
