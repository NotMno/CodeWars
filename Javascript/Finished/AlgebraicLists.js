function Cons(head,tail){
    this.head = head;
    this.tail = tail;
}

function toArray(list) {
    if(list){
        var more = list.tail;
        return [list.head].concat(more? toArray(more) : []);
    }
    return [];
}

Cons.prototype.toArray = function(){ return toArray(this); };

Cons.fromArray = function(array){
    let current;
    for(i=array.length-1; i>=0; i--){
        if(i == array.length-1){
            current = new Cons(array[i], null)
        }else{
            current = new Cons(array[i], current)
        }
    }
    return current;
};
  
function filter(list, predicate){
    let result = []
    for(element of list.toArray()){
        if(predicate(element)){
            result.push(element)
        }
    }
    return Cons.fromArray(result);
}
  
function map(list, mapper){
    let result = []
    for(element of list.toArray()){
        result.push(mapper(element))
    }
    return Cons.fromArray(result);
}
Cons.prototype.filter = function(predicate){ return filter(this,predicate); };
Cons.prototype.map = function(mapper){ return map(this, mapper); };

console.log(
    Cons.fromArray([3,5,6,8,7,10]).filter(a => a%2).map(a => a**2)
)