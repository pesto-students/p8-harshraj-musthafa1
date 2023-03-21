let numbers = [0, 2, 1, 2,0]
function sort(numbers){
    let lo = 0;
    let mid = 0;
    let hi = numbers.length-1;
    let temp;
    while(mid <= hi){
        switch(numbers[mid]){
            case 0: {
             temp = numbers[lo];
             numbers[lo] = numbers[mid];
             numbers[mid] = temp;
             lo++;
             mid++;
             break;   
            }
            case 1: {
                mid++;
                break;
            }
            case 2: {
                temp = numbers[mid];
                numbers[mid] = numbers[hi];
                numbers[hi] = temp;
                hi--;
                break;
            }
        }
    }
}
sort(numbers)
console.log("sorted array : " + numbers)