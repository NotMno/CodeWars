function highAndLow(numbers){
    let arr = []
    for(n of numbers.split(' ')){
        arr.push(Number(n))
    }
    return [Math.max(...arr), Math.min(...arr)].join(' ')
}
console.log(highAndLow("1 2 4 6 -6 -39"))