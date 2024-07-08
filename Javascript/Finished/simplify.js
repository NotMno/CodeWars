function simplify(poly){
    let answer = []
    let extra = {};
    let single = poly.replaceAll("-", " -").replaceAll("+", " +").split(' ')
    if(single[0] == '')single.shift();
    if(single[0][0] !== '+' && single[0][0] !== '-')single[0] = '+' + single[0]
    for(part in single){
        if(single[part].at(1) == Number(single[part].at(1))){}else{single[part] = single[part][0] + "1" + single[part].substring(1)}
        single[part] = single[part].split('').sort().join('')
        if(extra[single[part].substring(single[part].search(/[a-z]/i),single[part].length)]){extra[single[part].substring(single[part].search(/[a-z]/i),single[part].length)].push(single[part].substring(0,single[part].search(/[a-z]/i)))}else{extra[single[part].substring(single[part].search(/[a-z]/i),single[part].length)] = [single[part].substring(0,single[part].search(/[a-z]/i))]}
        
    }

    for(thing in extra){
        extra[thing] = extra[thing].reduce((a,b) => Number(a)+Number(b))
    }
    for(item in Object.entries(extra)){
        if(Object.entries(extra)[item][1] == 0){continue}
        answer.push(Object.entries(extra)[item].reverse().join(''))
    }
    answer = answer.sort().sort((a,b)=> a.length-b.length).join('').replaceAll('1', "")
    if(answer[0] == '+')answer = answer.substring(1,answer.length)
    return answer
}

//  tests

console.log(simplify("dc+dcba"))
console.log(simplify("2xy-yx"))
console.log(simplify("-a+5ab+3a-c-2a"))
console.log(simplify("2b+2b+4b-6b+2b"))
console.log(simplify("3x+2x-5x+1x"))
