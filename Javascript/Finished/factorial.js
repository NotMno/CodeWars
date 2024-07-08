function findFactorial(num){
    let total = 1;
    for(i=num; i>0; i--){
        total *= i
    }
    return total
}
console.log(findFactorial(100))