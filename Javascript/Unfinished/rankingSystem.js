class User{
    constructor(rank = -8, progress = 0){
        this.rank = rank + Math.floor(),
        this.progress = progress
    }
    incProgress(rank){
        let inc = Math.abs(this.rank - rank)
        this.progress += 10 * inc ** 2
        this.rank += Math.floor(this.progress / 100)
        this.progress -= Math.floor(this.progress / 100) * 100
    }
}

var user = new User()
console.log(user.rank, user.progress)
user.incProgress(1)
console.log(user.rank, user.progress)
// user.rank // => -8
// user.progress // => 0
// user.incProgress(-7) // input is the rank the quest completed is at.
// user.progress // => 10
// user.incProgress(-5) // will add 90 progress
// user.progress # => 0 // progress is now zero
// user.rank # => -7 // rank was upgraded to -7