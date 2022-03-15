function main() {
    var amount = parseFloat(readLine(), 10);
    var rate = parseFloat(readLine(), 10);
    const convert = (a, r) => {return a*r};
    console.log(convert(amount, rate));
}