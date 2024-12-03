"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function getInput() {
    const data = fs_1.default.readFileSync('../../inputs/day3.txt', 'utf8');
    return data;
}
function processInputA(input) {
    var _a;
    const regexMatches = (_a = input.match(/mul\(\d{1,3},\d{1,3}\)/g)) === null || _a === void 0 ? void 0 : _a.map(String);
    let functions = [];
    if (regexMatches)
        functions = regexMatches.map(String);
    return functions;
}
function parseMultipliersA(functions) {
    var _a;
    let multipliers = [];
    for (let func of functions) {
        const [a, b] = (_a = func.match(/\d{1,3}/g)) === null || _a === void 0 ? void 0 : _a.map(Number);
        multipliers.push([a, b]);
    }
    return multipliers;
}
function processInputB(input) {
    var _a;
    const regexMatches = (_a = input.match(/mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g)) === null || _a === void 0 ? void 0 : _a.map(String);
    let functions = [];
    if (regexMatches)
        functions = regexMatches.map(String);
    return functions;
}
function parseMultipliersB(functions) {
    var _a;
    let multipliers = [];
    let isEnabled = true;
    for (let i = 0; i < functions.length; i++) {
        if (functions[i] === "do()") {
            isEnabled = true;
        }
        if (functions[i] === "don't()") {
            isEnabled = false;
        }
        if (functions[i].includes("mul")) {
            if (isEnabled) {
                const [a, b] = (_a = functions[i].match(/\d{1,3}/g)) === null || _a === void 0 ? void 0 : _a.map(Number);
                multipliers.push([a, b]);
            }
        }
    }
    return multipliers;
}
function solution(reports) {
    let sum = 0;
    for (let [a, b] of reports) {
        sum += a * b;
    }
    return sum;
}
function main() {
    const input = getInput();
    const functionsA = processInputA(input);
    const multipliersA = parseMultipliersA(functionsA);
    console.log(solution(multipliersA));
    const functionsB = processInputB(input);
    const multipliersB = parseMultipliersB(functionsB);
    console.log(solution(multipliersB));
}
main();
