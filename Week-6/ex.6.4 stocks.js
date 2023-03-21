let prices = [7,1,5,3,6,4]
function stocks(){
    let buyprice = Number.MAX_VALUE;
let maxprofit = 0;
for(let i=0; i<prices.length; i++){
    if(buyprice < prices[i]){
        let profit = prices[i]-buyprice;
        maxprofit = Math.max(maxprofit,profit);
    }else {
        buyprice = prices[i];
    }
}
return maxprofit;
}
console.log("maxprofit = " +stocks(prices))
