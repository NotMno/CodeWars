/* 
    1. find all the prime factors for every element in I.
    2. for each p of prime factors, find every element in I that contains prime factor p and put them into array T in format [ p, ...elements ].
    3. add up all elements skipping the first one, and return the result in format [ p, sum of elements ].
*/

function factorize(num){
    let count = []
    num = Math.abs(num)
    for(i=1; i<num/2+1; i++){
        let times = 0
        for(j=1; j<=i; j++){
            if(i%j){

            }else{
                times += 1
            }
        }
        if(times == 2)count.push(i)
    }
    let factors = []
    while(!(num <= 1)){
        let hasFactor = false
        for(prime of count){
            if((num/prime) % 1){
                continue;
            }else {
                num /= prime
                factors.push(prime)
                hasFactor = true
            }
        }
        if(!hasFactor)return num
    }
    return factors
}

function sumOfDivided(list) {
    // get the absolute val for all elements in list
    let output = []
    let factors = []
    let result = []
    for(item of list){
        output.push(factorize(item))
    }
    for(item in output.flat()){
        if(factors.includes(output.flat()[item]))continue;
        factors.push(output.flat()[item])
    }
    for(factor of factors){
        let ans = [factor]
        let sum = 0
        for(number of list){
            if(!((number/factor) % 1))sum += number;
        }
        ans.push(sum)
        result.push(ans)
    }

    return result.sort((a,b) => a[0] - b[0]);
}

function randomNums(random = true, number, start, limit, run = false){
    let result = []
    for(i=0; i<number; i++){
        if(random){
            result.push(Math.floor(Math.random() * limit + start))
        }else{
            if(i == limit)break;
            result.push(i + start)
        }
    }
    if(run){
        let last = []
        for(item of result){
            console.log(item,` : `, run(item))
            last.push(item, run(item))
        }
        // return last
    }
    // return result
}

// tests
console.log(
    // sumOfDivided(randomNums(50, -5000, 9999)), // [ [2, 12], [3, 27], [5, 15] ]
    // sumOfDivided([10, 20, 30]), // [ 2,  ]
    // sumOfDivided([15,21,24,30,45]) // [ [2, 54], [3, 135], [5, 90], [7, 21] ]
)

// console.log(randomNums(true, 10, 0, 50000, factorize))
console.log(factorize(Math.pow(2, 8)))