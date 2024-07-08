function longestConsec(strArr, k) {
    let longest = '';
    if(k > strArr.length || strArr.length === 0 || k < 1)return '';
    for(ele in strArr){
        if(Number(ele) === strArr.length-(k-1))break;
        let cur = 0
        let conCat = [];
        for(i=0; i<k; i++){
            conCat.push(strArr[Number(ele)+cur])
            cur += 1
        }
        if(conCat.join('').length > longest.length){
            longest = conCat.join('')
        }
    }
    return longest;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)); // "abigailtheta"
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)); // "oocccffuucccjjjkkkjyyyeehh"
console.log(longestConsec(['arr', 'theta', 'idk', 'maybenot'],3)); // "maybenotthetaarr"
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)) // "wlwsasphmxxowiaxujylentrklctozmymu"
