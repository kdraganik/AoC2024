import fs from 'fs';

function getInput(): Array<string>{
    const data = fs.readFileSync('../inputs/day1.txt', 'utf8');
    const lines = data.split('\n')

    return lines;
}

function processInput(input: Array<string>): Array<Array<number>>{
    const locations:Array<Array<number>> = [[], []];
    for(let line of input){
        const lineLocations = line.split('   ').map(Number);
        locations[0].push(lineLocations[0]);
        locations[1].push(lineLocations[1]);
    }

    return locations;
}

function sortLocations(locations: Array<Array<number>>): Array<Array<number>>{
    locations[0].sort((a, b) => a - b);
    locations[1].sort((a, b) => a - b);

    return locations;
}

function calculateDifference(locations1: Array<number>, location2: Array<number>): number{
    let total = 0;
    for(let i=0; i<locations1.length; i++){
        total += Math.abs(locations1[i] - location2[i]);
    }

    return total;
}

function main(){
    const input = getInput();
    const locations = processInput(input);
    const sortedLocations = sortLocations(locations);
    const difference = calculateDifference(sortedLocations[0], sortedLocations[1]);

    console.log(difference);
}

main();