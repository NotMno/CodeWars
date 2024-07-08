let LASTOP = []
let UNDID = []
function undoRedo(object) {
	return {
		set: function(key, value) {
            UNDID = []
            LASTOP.push(['set', key, object[key]])
            object[key] = value;
        },
		get: function(key) {
            return object[key]
        },
		del: function(key) {
            UNDID = []
            LASTOP.push(['del', key, object[key]])
            delete object[key]
        },
		undo: function() {
            if(LASTOP.length < 1)return false;
            let current = LASTOP.pop()
            UNDID.push([current[0], current[1], object[current[1]]])
            if(current[0] == 'del'){
                object[current[1]] = current[2]
            }else{
                if(current[2] == undefined){
                    delete object[current[1]]
                }else{
                    object[current[1]] = current[2]
                }
            }
        },
		redo: function() {
            if(UNDID.length < 1)return false;
            let current = UNDID.pop()
            LASTOP.push([current[0], current[1], object[current[1]]])
            if(current[0] == 'del'){
                delete current[1]
            }else{
                object[current[1]] = current[2]
            }
        }
	};
}

var obj = {
    x: 1,
    y: 2
};

var unRe = undoRedo(obj);

unRe.set('y', 10);
unRe.set('y', 100);
unRe.set('x', 150);
unRe.set('x', 50);
unRe.undo()
unRe.redo()
console.log(LASTOP, UNDID, obj)
unRe.undo()
unRe.undo()
unRe.undo()
unRe.undo()
console.log(LASTOP, UNDID, obj)
unRe.redo()
unRe.redo()
unRe.redo()
console.log(LASTOP, UNDID, obj)