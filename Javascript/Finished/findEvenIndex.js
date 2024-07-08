function findEvenIndex(arr)
{
    let leftTotal = 0
    let total;
    let lowest = Infinity
    if(arr.length >= 1){
        total = arr.reduce((a,b) => a+b);
    }else{return 0}
    console.log(total)
    for(num in arr){
        total -= arr[num]
        if(leftTotal == total && arr[num] < lowest)
        {
            lowest = Number(num)
        }
        leftTotal += arr[num]
    }
    return lowest == Infinity ? -1 : lowest
}

console.log
(
    findEvenIndex([1,2,3,4,3,2,1]), // 3
    findEvenIndex([4,6,8,1,10,9]), // -1
    findEvenIndex([10,20,40,60,70,81,0,10,20,40,60,70,81])
)