Object.prototype.speak = () => {
    console.log('hi')
}
Object.speak = () => {
    console.log('not hi')
}
let newobj = {

};
newobj.speak()
console.log(newobj.__proto__)