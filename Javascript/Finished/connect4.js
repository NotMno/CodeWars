
let board1 = [['-','-','-','-','-','-','-'],
              ['-','-','-','-','-','-','-'],
              ['-','-','-','R','R','R','R'],
              ['-','-','-','Y','Y','R','Y'],
              ['-','-','-','Y','R','Y','Y'],
              ['-','-','Y','Y','R','R','R']];

function connectFour(board){
    let isInProgress = false;

    // horizontal check
    for(row of board){
        if(row.join('').indexOf('-') !== -1)isInProgress = true;
        if(row.join('').search(/R{4}/) !== -1){
            return 'R'
        }
        if(row.join('').search(/Y{4}/) !== -1){
            return 'Y'
        }
    }

    // vertical check
    for(let y=0; y<3; y++){
        for(let x=0; x<7; x++){
            if(board[y][x] == board[y+1][x] &&
                board[y][x] == board[y+2][x] &&
                board[y][x] == board[y+3][x] &&
                board[y][x] !== '-'
            ){
                return board[y][x];
            }
        }
    }

    // left diagonal check
    for(let y=0; y<3; y++){
        for(let x=3; x<7; x++){
            if(board[y][x] !== '-'){
                if(board[y][x] == board[y+1][x-1] &&
                    board[y][x] == board[y+2][x-2] &&
                    board[y][x] == board[y+3][x-3]
                 ){
                     return board[y][x];
                 }
            }
        }
    }

    // right diagonal check
    for(let y=0; y<3; y++){
        for(let x=0; x<4; x++){
            if(board[y][x] !== '-'){
                if(board[y][x] == board[y+1][x+1] &&
                    board[y][x] == board[y+2][x+2] &&
                    board[y][x] == board[y+3][x+3]
                 ){
                     return board[y][x];
                 }
            }
        }
    }

    return isInProgress ? "in progress" : "draw";
}

console.log(connectFour(board1));