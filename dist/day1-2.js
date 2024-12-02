"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function getInput() {
    const data = fs_1.default.readFileSync('../inputs/day1.txt', 'utf8');
    const lines = data.split('\n');
    return lines;
}
function processInput(input) {
    const locations = [[], []];
    for (let line of input) {
        const lineLocations = line.split('   ').map(Number);
        locations[0].push(lineLocations[0]);
        locations[1].push(lineLocations[1]);
    }
    return locations;
}
function countLocations(locations) {
    const counts = {};
    for (let location of locations) {
        if (counts[location]) {
            counts[location]++;
        }
        else {
            counts[location] = 1;
        }
    }
    console.log(counts);
    return counts;
}
function calculateSimilarity(location1, location2) {
    let similarity = 0;
    for (let key in location1) {
        if (location2[key]) {
            similarity += Number(key) * location2[key];
        }
    }
    return similarity;
}
function main() {
    const input = getInput();
    const locations = processInput(input);
    const countsLocation1 = countLocations(locations[0]);
    const countsLocation2 = countLocations(locations[1]);
    const similarity = calculateSimilarity(countsLocation1, countsLocation2);
    console.log(similarity);
}
main();
