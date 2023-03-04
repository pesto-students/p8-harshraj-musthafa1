function vaildParentheses(str){
    const pairs = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    };
    for(let i = 0; i<str.length; i++){
        let ch = str.charAt(i);
        if(ch == '('||ch == '{'||ch == '['){//opening
            stack.push(ch);
        }else if (pairs[ch]) {
            if(stack === 0 || stack.pop() !== pairs[ch]){
                return false;
            }

        }
        
      }
      return stack.length === 0;
        }
    
    

const stack = [];
let str = "{([])}";
let result = vaildParentheses(str);
console.log(result);