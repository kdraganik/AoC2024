import fs from 'fs';

function getInput(): Array<string>{
    const data = fs.readFileSync('../../inputs/day1.txt', 'utf8');
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

function countLocations(locations: Array<number>): {[key: number]: number}{
    const counts: {[key: number]: number} = {};
    for(let location of locations){
        if(counts[location]){
            counts[location]++;
        }else{
            counts[location] = 1;
        }
    }

    return counts;
}

function calculateSimilarity(location1: {[key: number]: number}, location2: {[key: number]: number}): number{

    let similarity = 0;
    for(let key in location1){
        if(location2[key]){
            similarity += Number(key) * location2[key];
        }
    }

    return similarity;
}

function solutionA(input:Array<string>):void{
    const locations = processInput(input);
    const sortedLocations = sortLocations(locations);
    const difference = calculateDifference(sortedLocations[0], sortedLocations[1]);
    console.log(difference);
}

function solutionB(input:Array<string>):void{
    const locations = processInput(input);
    const countsLocation1 = countLocations(locations[0]);
    const countsLocation2 = countLocations(locations[1]);
    const similarity = calculateSimilarity(countsLocation1, countsLocation2);
    console.log(similarity);
}


function main(){
    const input = getInput();
    solutionA(input)
    solutionB(input)
}

main();