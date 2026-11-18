class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
          let final_res = {};
    for (let str of strs) {
        const sortedStrKey = str.split('').sort().join('');
        if (final_res[sortedStrKey]) {
            final_res[sortedStrKey].push(str);
        } else {
            final_res[sortedStrKey] = [str];
        }
    }
    console.log("Intermediate hash map:", final_res);
    return Object.values(final_res);
    }
}
