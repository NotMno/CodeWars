class RomanNumerals {

    toRoman(num) {
        let result = ''
        let m = Math.floor(num / 1000)
        let c = Math.floor((num -= m*1000)/100)
        let x = Math.floor((num -= c*100)/10)
        let v = Math.floor((num -= x*10)/5)
        let i = Math.floor((num -= v*5))

        result += 'M'.repeat(m)
        result += 'C'.repeat(c)
        result += 'X'.repeat(x)
        result += 'V'.repeat(v)
        result += 'I'.repeat(i)
        result = result
                    .replace('CCCCC', 'D')
                    .replace('XXXXX', 'L')
                    .replace('DCCCC', 'CM')
                    .replace('IIII', 'IV')
                    .replace('XXXX', 'XL')
                    .replace('CCCC', 'CD')
                    .replace('VIV', 'IX')
                    .replace('LXL', 'XC')

        return result;
    }
  
    fromRoman(str) {

        const NUMERALS = {
        'I'  : 1,
        'IV' : 4,
        'V'  : 5,
        'IX' : 9,
        'X'  : 10,
        'L'  : 50,
        'C'  : 100,
        'D'  : 500,
        'M'  : 1000
        }

        str = str.split('')
        let prev = '0'
        let total = 0
        for(let i=0; i<str.length; i++){
            if(NUMERALS[str[i]] > prev){
                total += NUMERALS[str[i]] - prev*2
            }else {
                total += NUMERALS[str[i]]
            }
            prev = NUMERALS[str[i]]
        }
        return total;
    }
}

let r = new RomanNumerals()

console.log(r.toRoman(2562)) // V

console.log(r.fromRoman('MDCLXVI')) // 1666
console.log(r.fromRoman('MMVIII')) // 2008
console.log(r.fromRoman('XXI')) // 21

/*

Symbol	Value
I	1
IV	4
V	5
X	10
L	50
C	100
D	500
M	1000

*/