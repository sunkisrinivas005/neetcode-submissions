class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
         let final_arr = [];
        let final_a = {};
        for(let num of nums){
              final_a[num] = final_a[num] ? final_a[num]+1 : 1
        }
        const res = Object.entries(final_a).sort((a, b) => b[1] - a[1])
        for(let i = 0; i< k ; i++){
          if(i < res.length){
            final_arr.push(parseInt(res[i][0]))
          }else {
            break;
          }
           
        } 
      return final_arr.sort()
    }
}
