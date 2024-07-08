
const map1 = 'S...XX..G'

/*
     0 1 2
 0   S . .
 1   . X X
 2   . . G
*/

const map2 = 'X......SXXX..XXGX...X..X...XX.'

/*
    X . . . . .
    . S X X X .
    . X X G X .
    . . X . . X
    . . . X X .
*/

const map3 = '....X.............X..X....X.X...X....X.S.XX...X..X...X..XX...XX..X..XGX....X..XX.X..........X...'

/*      0 1 2 3 4 5 6 7 8 9 10 11
    0   . . . . X . . . . . . .
    1   . . . . . . X . . X . .
    2   . . X . X . . . X . . .
    3   . X . S . X X . . . X .
    4   . X . P . X . . X X . .
    5   . X X . P X . . X G X .
    6   . . . X . P X X P X . .
    7   . . . . . . P P X . . .
*/

function BFS(map, width, height) {
    let newMap = [];
    for(let i=0; i<map.length/width; i++){
        newMap.push(map.substring(i*width, (i+1)*width))
    }
    map = newMap

    let startPos;
    for(let y=0; y<map.length; y++){
        for(let x=0; x<map[0].length; x++){
            if(map[y][x] == 'S'){
                startPos = [x, y];
                break;
            }
        }
    }

    let queue = [startPos]
    let path = []
    let visited = {}
    let connections = {}
    let neighbors = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];

    while (queue.length > 0){
        let current = queue.shift()
        if(visited[current] == true)continue;
        if(map[current[1]][current[0]] == "G"){
            let shortestPath = [current]
            let buffer = current
            while(map[buffer[1]][buffer[0]] !== 'S'){
                shortestPath.unshift(connections[buffer]);
                buffer = connections[buffer]
                if(buffer == startPos)break;
            }
            return [shortestPath, shortestPath.length-1];
        }
        visited[current] = true;

        path.push(current)
        neighbors.forEach((neighbor) => {
            let newPos = [current[0]+neighbor[0], current[1]+neighbor[1]];
            if(newPos[0] >= 0 && newPos[0] < width && newPos[1] >= 0 && newPos[1] < height){
                if(map[newPos[1]][newPos[0]] !== 'X'){
                    queue.push(newPos)
                    if(!visited[newPos]){
                        connections[newPos] ??= current
                    }
                }
            }
        })
    }
    return ['not found', path]
}

console.log(BFS(map3, 12, 8));