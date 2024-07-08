function findUniq(arr) {
    let otherArr = new Set(arr);
    let seen = {}
    for(ele of arr){
      if(seen[ele] === true){
        otherArr.delete(ele)
        for(element of otherArr.values()){
            return element;
        }
      }else{
        seen[ele] = true
      }
    }
}


console.log(findUniq([1,1,1,1,2,1,1,1,1]))