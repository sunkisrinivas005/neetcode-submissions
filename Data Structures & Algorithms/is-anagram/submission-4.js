class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let st ={}
        let ts = {}
      if(s.length != t.length){
        return false
      }
      for (let p = 0; p<s.length; p++){
         if(st[s[p]]){
            st[s[p]] += 1
         }else {
            st[s[p]] = 1;
         }
        if(ts[t[p]]){
          ts[t[p]] += 1
        }else{
          ts[t[p]] = 1;
        }
      }
  for(let k = 0; k<s.length;k++){
    if(st[s[k]] !== ts[s[k]]){
       return false;
    }
  }
  return true
}

}
