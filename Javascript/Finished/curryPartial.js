/*
    - This function takes in another function as its first parameter (A) and allows (A) to be either curried or partially applied or both.
    - The kata on codewars is called Currying vs Partial Application.

*/

function curryPartial(fn, ...args) {
    let argsNeeded = fn.length
    // console.log(`current Arg amnt. : ${args.length}`)
    if(args.length < argsNeeded){
        // console.log(`current Args : ${args}`)
        return (...moreArgs)=>{
            return curryPartial(fn, ...args, ...moreArgs)
        };
    }
    // console.log(`function run with args : ${fn(...args)}`)
    return fn(...args)
}

// tests

function add(a, b, c) {
    return a + b + c;
}
console.log(curryPartial(add)(1)()(2,3,4,5))

console.log(
    curryPartial(add)(1)(2)(3), //6
    curryPartial(add, 1)(2)(3), //6
    curryPartial(add, 1)(2, 3), //6
    curryPartial(add, 1, 2)(3), //6
    curryPartial(add, 1, 2, 3), //6
    curryPartial(add)(1, 2, 3), //6
    curryPartial(add)(1, 2)(3), //6
    curryPartial(add)()(1, 2, 3), //6
    curryPartial(add)()(1)()()(2)(3), //6
    curryPartial(add)()(1)()()(2)(3, 4, 5, 6), //6
    curryPartial(add, 1)(2, 3, 4, 5) //6
);