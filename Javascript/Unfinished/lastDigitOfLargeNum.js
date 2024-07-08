

function lastDigit(base, power){
    if(power == 0)return 1;
    const CYCLES = {
        1 : [1],
        2: [2,4,8,6],
        3: [3,9,7, 1],
        4: [4,6],
        5: [5],
        6: [6],
        7: [7,9,3,1],
        8: [8,4,2,6],
        9: [9,1]
    }

    let baseLast = Number(base.toString()[base.toString().length-1])
    console.log(baseLast**power)
    return CYCLES[baseLast][(power % (CYCLES[baseLast].length + 1) - 1 + Math.floor(power/(CYCLES[baseLast].length + 1))) % CYCLES[baseLast].length];

}

function getCycle(num, iterations){
    let result = []
    for(let i = 1; i<iterations; i++){
        result.push(num**i);
    }
    return result
}

console.log('hi')
console.log(lastDigit(2**3, 22))