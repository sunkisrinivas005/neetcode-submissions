class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const elements = {
            ']' : '[',
             ')' : "(",
             '}' : '{'
        }
        let stack = [];
        for(let item of s) {
            if(elements[item]){
             if(stack.length > 0 && stack[stack.length-1] === elements[item]){
                   stack.pop();
            }else {
               return false
            }
            }else {
                stack.push(item)
            }
           
        }
        return stack.length ? false : true
    }
}
