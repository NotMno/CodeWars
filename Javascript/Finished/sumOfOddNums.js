function rowSumOddNumbers(n) {
	let first = 1+((n-1)*n/2)*2
    return first*n + ((n-1)*n/2)*2
}
// function rowSumOddNumbers(n){
//     return Math.pow(n, 3);
// }
// a much more refined and theorized method of solving this.

console.log(rowSumOddNumbers(9284928))// the number inputted is the row to which we add up all sums.
//        1   =
//      3 + 5  =
//   7 +  9  + 11  =
//13 + 15 + 17 +  19  =
//
