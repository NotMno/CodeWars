function add(a, b) {
    let carry = 0
    let ans = []
    a = a.split('').reverse()
    b = b.split('').reverse()
    length = a.length
    if(b.length > a.length)length = b.length
    for(let i = 0; i<length+1; i++){
        if(a[i] == undefined) a[i] = 0
        if(b[i] == undefined) b[i] = 0
        if(i == length && carry == 0) continue;
        let first = Number(a[i])
        let second = Number(b[i])
        if((first + second + carry) >= 10){
            ans.push((first+second+carry)-10)
            carry = 1
        }else{
            ans.push(first+second+carry)
            carry = 0
        }
    }
    return ans.reverse().join('')
}

function hugeNum(size){
    let num = []
    for(i=0; i<size; i++){
        num.push(Math.floor(Math.random()*10))
    }
    return num.join('')
}

console.log(add(hugeNum(100), hugeNum(100)))