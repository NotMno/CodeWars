function properFractions(n){
    if (n==1) return 0; 
    let result = n;
    for (let i = 2; i * i <= n; ++i) {
        if (n % i == 0) {
            while (n % i == 0) n /= i; 
            result -= result / i; 
        } 
    }
    if (n > 1) result -= result / n; 
    return result;
}

console.log(properFractions(1532420)) // 608256
console.log(properFractions(10)) // 4
console.log(properFractions(12)) // 4
console.log(properFractions(123456789)) // 82260072
console.log(
    properFractions(1), // 0
    properFractions(2), // 1
    properFractions(5), // 4
    properFractions(6), //2
    properFractions(15), // 8
    properFractions(25) // 20
)