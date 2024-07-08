/*
    this function takes in two inputs and counts the amount of ones in bit form of each number in between the two inputs including the two inputs.
    Example:
    countOnes 4 7 should return 8, because:
    4(dec) = 100(bin), which adds 1 to the result.
    5(dec) = 101(bin), which adds 2 to the result.
    6(dec) = 110(bin), which adds 2 to the result.
    7(dec) = 111(bin), which adds 3 to the result.
    So finally result equals 8.
*/

function countOnes(left, right) {
    return left.toString(2)
}

// notice how the 1 bit flips every (1) times, 2nd bit flips every (2) times, and 3 bit flips every
// (4) times.

console.log(
    countOnes(200000000000, 100),
    countOnes(1,200000000000000) // 8
)