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

function countLocations(locations: Array<number>): {[key: number]: number}{
    const counts: {[key: number]: number} = {};
    for(let location of locations){
        if(counts[location]){
            counts[location]++;
        }else{
            counts[location] = 1;
        }
    }

    console.log(counts);

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

function main(){
    const input = getInput();
    const locations = processInput(input);
    const countsLocation1 = countLocations(locations[0]);
    const countsLocation2 = countLocations(locations[1]);
    const similarity = calculateSimilarity(countsLocation1, countsLocation2);

    console.log(similarity);
}

main();