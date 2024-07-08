function nextBigger(n){
    let found = false, number = [], lowest = Infinity, index, ans;
    for(let num of n.toString())number.push(num)
    for(let i = number.length-1; i>=0; i--){
        for(let j = number.length-1; j>i; j--){
            if(number[j] > number[i] && Number(number[j]) < lowest){
                found = true
                lowest = Number(number[j])
                index = j
            }
        }
        if(found){
            let swap = number.splice(index, 1)
            let rest = number.splice(i).sort((a,b)=> Number(a) - Number(b))
            console.log(rest, swap)
            ans = [...number, swap, ...rest].flat()
            return Number(ans.join(''))
        }
    }
    return -1
}

console.log(
    nextBigger(12), // 21
    nextBigger(111), // -1
    nextBigger(15254), // 15425
    nextBigger(227232),
    nextBigger(59884848459853) // 59884848483559
)