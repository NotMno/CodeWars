function isIsogram(str){
    let newStr = new Set(str.toLowerCase())
    for(letter of str){
      if(newStr.has(letter.toLowerCase())){
        newStr.delete(letter.toLowerCase())
      }else{
        return false
      }
    }
    return true
}
console.log(isIsogram('Dermatoglyphics'))
console