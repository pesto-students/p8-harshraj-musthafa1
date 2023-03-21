const arr = [6,8,0,1,3];
function nextGreater(arr){
  
    const stack = new Array(arr.length).fill(-1);
    for(let i = 0 ; i<arr.length; i++){
        let curr = arr[i];
        for(let j = i+1; j<arr.length; j++){
            if(curr < arr[j]){
                stack[i] = arr[j]
                break;
            }
        }
    }
    return stack;
}
const stacks = nextGreater(arr);
console.log(stacks);
