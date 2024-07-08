function runoff(voters){
    let trueVotes = voters
    while(trueVotes[0].length > 0){
        let seen = [], otherseen = [], first = [],lowest;
        for(i=0; i<trueVotes.length; i++){
            let choice = trueVotes[i][0]
            first.push(choice)
            if(!otherseen.includes(choice)){
                seen.push([choice, i]);
                otherseen.push(choice)
            }else{
                seen[otherseen.indexOf(choice)].push(i)
            }
        }
        for(candidate of trueVotes[0]){
            if(!otherseen.includes(candidate)){
                seen.push([candidate])
            }
        }
        seen.sort((a,b)=> a.length-b.length)
        if((seen[seen.length-1].length -1) > trueVotes.length/2)return seen[seen.length-1][0]
        lowest = seen[0].length
        for(vote in seen){
            if(seen[vote].length > lowest)break;
            for(i=0; i<trueVotes.length; i++){
                trueVotes[i] = trueVotes[i].filter(a => a !== seen[vote][0])
            }
        }
        seen = seen.filter(a => a.length !== lowest)
    }
    return undefined
}

function votes(candidateArr, numOfVoters, maxlength = false){
    let result = []
    for(i=0; i<numOfVoters; i++){
        let candidates = [...candidateArr]
        let vote = []
        let length = candidates.length
        if(maxlength)length=maxlength;
        for(j=0; j<length; j++){
            vote.push(candidates[Math.floor(Math.random()*candidates.length)])
            candidates.splice(candidates.indexOf(vote[vote.length-1]), 1)
        }
        result.push(vote)
    }
    return result
}

let candidates = ['Thomas Perker', 'Maximillian Moderno', 'Armega Daleyo']
console.log(runoff(votes(candidates, 5000000)))

// console.log
// (
//     runoff([
//         ["d", "a", "e", "b", "c"],
//         ["b", "e", "d", "c", "a"],
//         ["e", "a", "c", "b", "d"],
//         ["e", "d", "a", "b", "c"],
//         ["d", "b", "a", "e", "c"]
//     ]), // e
//     runoff([
//         ["a", "c", "b", "e", "d"],
//         ["c", "a", "e", "b", "d"],
//         ["e", "c", "b", "d", "a"],
//         ["a", "e", "c", "d", "b"],
//         ["d", "c", "e", "a", "b"]
//     ]), // a
//     runoff([
//         ["a", "c", "d", "e", "b"],
//         ["e", "b", "d", "c", "a"],
//         ["d", "e", "c", "a", "b"],
//         ["c", "e", "d", "b", "a"],
//         ["b", "e", "a", "c", "d"]
//     ]), // undefined
//     runoff([
//         ["a", "c", "b", "d", "e"],
//         ["d", "c", "a", "b", "e"],
//         ["e", "b", "d", "a", "c"],
//         ["e", "a", "b", "c", "d"],
//         ["b", "c", "e", "a", "d"]
//     ]) // e
// )