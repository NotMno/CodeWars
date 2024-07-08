function summation(num, total) {
    if(total === undefined)total = 0;
    if(num <= 0)return total;
    total += num
    return summation(Number(num-1),total)
}
console.log(summation(9)) // 1+2+3+4+5+6+7+8+9 = 45