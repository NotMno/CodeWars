// create a dice
// roll it
// return outcome
function Dice(sides=6){
    this.sides = sides
    this.roll = (times) => {
        let results = []
        for(i=0; i<times; i++){
            results.push(Math.floor(Math.random()*this.sides)+1)
        }
        return results
    }
}
let diceA = new Dice(15)
console.table(diceA.roll(99))