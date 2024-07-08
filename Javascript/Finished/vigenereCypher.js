function VigenèreCipher(key = 'password', abc = 'abcdefghijklmnopqrstuvwxyz') {

    this.encode = function (str) {
        let Arr = [];
        let y = key.repeat(str.length/key.length) + key.slice(0,(str.length/key.length)%1*key.length)
        for(i=0; i<str.length; i++){
            if(abc.includes(str[i]) == false){
                Arr.push(str[i])
                continue;
            }
            let x = abc.indexOf(str[i]) + abc.indexOf(y[i])
            if(x > abc.length - 1){
                x -= abc.length
            }
            Arr.push(abc[x])
        }
        return Arr.join('')
    };
    this.decode = function (str) {
        let Arr = [];
        let y = key.repeat(str.length/key.length) + key.slice(0,(str.length/key.length)%1*key.length)
        y
        for(i=0; i<str.length; i++){
            if(abc.includes(str[i]) == false){
                Arr.push(str[i])
                continue;
            }
            let x = abc.indexOf(str[i]) - abc.indexOf(y[i])
            if(x < 0){
                x += abc.length
            }
            Arr.push(abc[x])
        }
        return Arr.join('')
    };
}

const c = new VigenèreCipher('awref', 'a]bcdef[ghij-klm,{nopq}r.stuvw/xyz')
let x = `apple`
console.log(c.encode(x))
console.log(c.decode('amhoj'))


