// this function returns an integer for each value of the given array that represents how many integers to its right are smaller than itself.

function smaller(arr) {
    let orderedArr = arr.slice().sort((a,b) => b-a)
    let result = []
    let length = arr.length
    for(num in arr){
        let orderedIndex = orderedArr.findLastIndex((e) => e == arr[num])
        numsSmaller = length - orderedIndex - 1
        result.push(numsSmaller)
        orderedArr.splice(orderedIndex, 1)
        length--;
    }
    return result
}

function smaller2(arr) {
    
}

function createArr(num) {
    let arr = []
    for(let i = num; i > 0; i--){
        arr.push(i)
    }
    return arr
}

console.log(smaller([5,4,3,2,1])) // [4,3,2,1,0]
console.log(smaller2(createArr(1))) // [1, 1, 0]
console.log()