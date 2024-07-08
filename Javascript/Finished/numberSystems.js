function createNumSystem(base, symbols)
{
    // console.warn('Please ensure your symbols are ordered from least to greatest in order for the system to properly function.');
    if(base === Number(base)){
        let arr = []
        if(base > 10)return new Error('quick option "base" only supports bases up to 10.')
        for(i=0; i<base; i++){
            arr.push(i)
        }
        symbols = arr
    }

    this.sysBase = function()
    {
        return symbols.length;
    }

    this.maxNum = function(digits)
    {
        return (symbols.length ** digits)
    }

    this.toSys = function(number)
    {
        let digits = 0
        let arr = []
        for(let i=0; i<=number; i++){
            if(number == 0)digits = 1
            if(symbols.length ** i >= number){
                digits = i;
                break;
            }
        }
        for(digits; digits>=0; digits--){
            let max = (symbols.length**digits)
            if(number - max >= 0){
                arr.push(symbols[~~(number / max)])
                number -= (~~(number / max))*max;

            }else{arr.push(symbols[0])}
        }
        if(arr[0] == 0)arr.shift()
        return arr.join('')
    }

    this.fromSys = function(sysNum)
    {
        let total = 0
        sysNum = sysNum.toLowerCase().split('').reverse()
        for(digit in sysNum){
            if(sysNum[digit] == Number(sysNum[digit]))sysNum[digit] = Number(sysNum[digit])
            if(symbols.includes(sysNum[digit]) !== true)return new Error('not a valid number in this number system.')
            total += symbols.indexOf(sysNum[digit]) * (symbols.length ** digit)
        }
        return total;
    }
}
let base2 = new createNumSystem( 2, [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']);

let num = 365
console.log(`Output : ` + base2.maxNum(32));
console.log(`return : ${base2.fromSys(base2.toSys(num))}`);