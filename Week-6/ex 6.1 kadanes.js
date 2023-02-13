let numbers = [-2,-3,4,-1,-2,1,5,-3]
function kadanes(numbers){
    let currsum = 0;
    let maxsum = Number.length;
    for(let i=0; i<numbers.length; i++){
        currsum = currsum + numbers[i];
        if(currsum < 0){
            currsum = 0
        }
        maxsum = Math.max(currsum, maxsum);
    }
    console.log("max sum = "+ maxsum)
}
kadanes(numbers)