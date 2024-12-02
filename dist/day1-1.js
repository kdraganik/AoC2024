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
function sortLocations(locations) {
    locations[0].sort((a, b) => a - b);
    locations[1].sort((a, b) => a - b);
    return locations;
}
function calculateDifference(locations1, location2) {
    let total = 0;
    for (let i = 0; i < locations1.length; i++) {
        total += Math.abs(locations1[i] - location2[i]);
    }
    return total;
}
function main() {
    const input = getInput();
    const locations = processInput(input);
    const sortedLocations = sortLocations(locations);
    const difference = calculateDifference(sortedLocations[0], sortedLocations[1]);
    console.log(difference);
}
main();
