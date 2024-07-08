// sucks ass

function factorize(number) {
    // global vars
    let factors = [];
    let queue = [number];

    while(queue.length > 0){
        let current = queue.pop();
        let isPrime = true;
        let checkedPrimes = []


        for(let i=2; i<(current/2+1); i++){
            let skip = false;
            if(checkedPrimes.length > 0){
                for(prime of checkedPrimes){
                    if(!(i % prime) && i > prime){
                        skip = true;
                    }
                }
            }
            if(skip)continue;
            checkedPrimes.push(i);

            if(!(current % i)){
                queue.push(i, current/i);
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            factors.push(current);
        }
    }

    return [number, factors.sort((a,b) => {
        return a-b;
    })];

}

function evalFunc(func, input){
    let start = Date.now();
    let result = func(input);
    return [result, `${Date.now() - start} ms`]
}

console.log(evalFunc(factorize, 10030037))