function parseInt(string) {
    let ans = 0, toErase = [];
    const digits = {
        'zero'    : 0,'one'     : 1,
        'two'     : 2,'three'   : 3,
        'four'    : 4,'five'    : 5,
        'six'     : 6,'seven'   : 7,
        'eight'   : 8,'nine'    : 9,
        'ten'     : 10,'eleven'  : 11,
        'twelve'  : 12,'thirteen': 13,
        'fourteen': 14,'fifteen' : 15,
        'sixteen' : 16,'seventeen': 17,
        'eighteen': 18,'nineteen': 19,
        'twenty'  : 20,'thirty'  : 30,
        'forty'  : 40,'fifty'   : 50,
        'sixty'   : 60,'seventy' : 70,
        'eighty'  : 80,'ninety'  : 90,
        'hundred' : 100,'thousand': 1000,
        'million' : 1000000
    }
    let words = string.split(/[ -]/ig)
    for(word in words){
        if(words[word] == 'and')words.splice(word, 1);
        if((words[word] == 'ten' || words[word] == 'hundred') && words[Number(word)+1] == ('thousand' || 'million')){
            words[word] = digits[words[word]] * digits[words[Number(word)+1]]
            words.splice(Number(word)+1,1)
            word += 1
            continue;
        }
        words[word] = digits[words[word]]
        if(words[Number(word)-1] > 9 && words[Number(word)-1] < 100 && words[Number(word)-1] % 10 == 0){
            words[word] = words[word] + words[Number(word)-1]
            toErase.push(word-1)
        }
    };
    for(num in toErase){
        words.splice(toErase[num]-num, 1)
    }
    if(words.length > 1 && (Number(words[words.length-1]) + Number(words[words.length-2])) < 100){
        ans += (Number(words[words.length-1]) + Number(words[words.length-2]))
        words.splice(words.length-2, 2)
    }
    let curr = 0
    for(word in words){
        if(words[Number(word)+1] == undefined){
            ans += words[word]
            break;
        }
        curr = words[word] * words[Number(word)+1]
        if(words[Number(word)+2] + (words[Number(word) + 1] * words[Number(word)]) > 100 && words[Number(word)+2] + (words[Number(word) + 1] * words[Number(word)]) < 1000){
            if(words[Number(word)+2] + (words[Number(word) + 1] * words[Number(word)]) % 100 !== 0){
                curr += words[Number(word)+2]
                words[Number(word)+2] += (words[Number(word) + 1] * words[Number(word)])
                words.splice(0,1)
            }
        }
        if(words[Number(word)+2] > words[Number(word) + 1]){
            curr *= words[Number(word)+2]
            words.splice(0,2)
        }else{
            words.splice(0,1)
        }
        ans += curr
    }
    return ans
}

console.log(parseInt('eighty-seven thousand two hundred and forty-six'))
console.log(parseInt('six hundred sixty-six thousand'))
console.log(parseInt('five million seven hundred and seventy-eight thousand two hundred forty-six'))
console.log(parseInt('five hundred and sixty'))
console.log(parseInt('three thousand four hundred and twenty'))
console.log(parseInt('two million three hundred thousand two hundred and fifty-six'))
console.log(parseInt('five hundred million two hundred and forty-six'))

// much more efficient and faster version

/*
    var words = {
    "zero":0, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9, 
    "ten":10, "eleven":11, "twelve":12, "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16, 
    "seventeen":17, "eighteen":18, "nineteen":19, "twenty":20, "thirty":30, "forty":40, "fifty":50, 
    "sixty":60, "seventy":70, "eighty":80, "ninety":90
    };
    var mult = { "hundred":100, "thousand":1000, "million": 1000000 };
    function parseInt(str) {
    return str.split(/ |-/).reduce(function(value, word) {
        if (words[word]) value += words[word];
        if (mult[word]) value += mult[word] * (value % mult[word]) - (value % mult[word]);
        return value;
    },0);
    }
*/ 
