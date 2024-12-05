import fs from 'fs';

const X = 0;
const Y = 1;

function getInput():string{
    const data = fs.readFileSync('../../inputs/day4.txt', 'utf8');

    return data;
}

function processInput(input: string): Array<Array<string>>{
    const data = input.split('\n').map((line) => line.split(''));

    return data;
}

function isPositionValid(pos: [number, number], grid: Array<Array<string>>): boolean {
    const [x, y] = pos;

    return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}

function checkDirection(
    pos: [number, number], 
    vector: [number, number], 
    grid:Array<Array<string>>, 
    word:string
): boolean {

    for (let i = 0; i < word.length; i++) {
        const nxtX = pos[X] + i * vector[X];
        const nxtY = pos[Y] + i * vector[Y];

        if(!isPositionValid([nxtX, nxtY], grid)) {
            return false;
        }
        if(grid[nxtX][nxtY] !== word[i]) {
            return false;
        }
    }

    return true
}

function solutionA(grid: Array<Array<string>>, word: string): number {
    let sum = 0;
    const directions:Array<[number, number]> = [
        [0, 1],
        [1, 0],
        [1, 1],
        [1, -1],
        [0, -1],
        [-1, 0],
        [-1, -1],
        [-1, 1],
    ];

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            for (let k = 0; k < directions.length; k++) {
                if (checkDirection([i, j], directions[k], grid, word)) {
                    sum++;
                }
            }
        }
    }
    return sum;
}

function solutionB(grid: Array<Array<string>>): number {
    let sum = 0;
    for(let i = 1; i < grid.length - 1; i++) {
        for(let j = 1; j < grid[i].length - 1; j++) {
            if(grid[i][j]==="A")
                if((grid[i-1][j-1]==="M" && grid[i+1][j+1]==="S") || (grid[i-1][j-1]==="S" && grid[i+1][j+1]==="M"))
                    if((grid[i+1][j-1]==="M" && grid[i-1][j+1]==="S") || (grid[i+1][j-1]==="S" && grid[i-1][j+1]==="M"))
                        sum++;
        }
    }

    return sum;
}


function main(){
    const input = getInput();
    const data = processInput(input);
    console.log(solutionA(data, 'XMAS'));
    console.log(solutionB(data));
}

main();