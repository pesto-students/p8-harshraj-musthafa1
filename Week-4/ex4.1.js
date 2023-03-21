const getNumber = () => {
    const num = Math.floor(Math.random()*100)
    console.log("the number is : ",  num)
    return num

}

const p = new Promise((resolve,reject) => {
    if(getNumber() %5 === 0){
        resolve("Divisible by 5")
    }else{
        reject("Not Divisible by 5")
    }
})

p.then(function(num){
    console.log("Promise Resolved : ", num)
})
.catch(function(err){
    console.log("Promise Rejected : " , err)
});