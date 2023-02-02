//? What is memoization?
//! memoization or memoisation is an optimization technique used primarily 
//! to speed up computer programs by stouring the results of expensive function 
//! calls and returning the cached result when the same inputs occurs again.

function memoize(fn){
    const cache = new Map();
    return function(...args){
        const key = args.toString();
        console.log('fn called with ' + key);
        console.log(cache);
        if(cache.has(key)){
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    }
} 

function add(a,b){
    return a+b;
}

function time(fn){
    console.time();
    fn();
    console.timeEnd();
}
 
const sum = memoize(add);
 
time( () => sum(10,6));
time( () => sum(10,6));
time( () => sum(10,6));
time( () => sum(10,6));








