
/*
    This function sorts a binary tree created through a node class.

    ex. binary tree - 2
                 8        9
               1  3     4   5
    sorts into the array [2,8,9,1,3,4,5];
*/

class Node { 
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left  = left;
      this.right = right;
    }
}

function treeByLevels (rootNode) {
    if(rootNode == null)return [];
    function check(node, arr){
        if(node == null)return [];
        arr.push(node.value);
        let newarr = []
        if((node.left || node.right) == null){
            if((node.left && node.right) == null)return arr;
            node.left == null ? check(node.right, newarr) : check(node.left, newarr);
        }else {
            check(node.left, newarr);
            check(node.right, newarr);
        }
        arr.push(newarr)
        return arr
    }
    let result = check(rootNode, [])
    let done;
    while(true){
        result = result.flat().sort((a,b)=>{
            let newA, newB;
            typeof a == 'object' ? newA=2 : newA=1;
            typeof b == 'object' ? newB=2 : newB=1;
            return newA - newB
        })
        done = true
        for(element of result){
            if(typeof element == 'object')done = false;
        }
        if(done)return result;
    }
}

const treeTwo =
    new Node(1,
        new Node(8,
            null,
            new Node(3)
        ),
        new Node(4,
            null,
            new Node(5,
                null,
                new Node(7)
            )
        )
    );

console.log(
    treeByLevels(treeTwo) // [1,8,4,3,5,7]
);