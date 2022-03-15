function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
    prices.forEach((e, i, a)=>{
        a[i]=e+increase;
    })
    console.log(prices)
}
