let arr = [5, 10, 3, 2, 50, 80]
let n = 78;
function findPair(arr, n){
    let i = 0;
    let j = 1;
    arr.sort();
    while(i<arr.length && j<arr.length){
        if(i != j && arr[j]-arr[i] == n){
            return 1;
        }else if(arr[j] - arr[i] < n){
            j++;
        }else{
            i++;
        }
    }
    return 0;
}
findPair(arr, n)
console.log(findPair(arr, n))

    

