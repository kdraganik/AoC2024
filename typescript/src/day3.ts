import fs from 'fs';

function getInput():string{
    const data = fs.readFileSync('../../inputs/day3.txt', 'utf8');

    return data;
}

function processInputA(input: string): Array<string>{
    const regexMatches = input.match(/mul\(\d{1,3},\d{1,3}\)/g)?.map(String)
    let functions:Array<string> = []
    if(regexMatches)
        functions = regexMatches.map(String)
    
    return functions
}

function parseMultipliersA(functions:Array<string>):Array<Array<number>>{
    let multipliers:Array<Array<number>> = []
    for(let func of functions){
        const [a, b] = func.match(/\d{1,3}/g)?.map(Number) as Array<number>
        multipliers.push([a, b])
    }

    return multipliers

}

function processInputB(input: string): Array<string>{
    const regexMatches = input.match(/mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\)/g)?.map(String)
    let functions:Array<string> = []
    if(regexMatches)
        functions = regexMatches.map(String)
    
    return functions
}

function parseMultipliersB(functions:Array<string>):Array<Array<number>>{
    let multipliers:Array<Array<number>> = []
    let isEnabled = true
    for(let i = 0; i < functions.length; i++){
       if(functions[i] === "do()"){
           isEnabled = true
       }
       if(functions[i] === "don't()"){
           isEnabled = false
       }
       if(functions[i].includes("mul")){
           if(isEnabled){
               const [a, b] = functions[i].match(/\d{1,3}/g)?.map(Number) as Array<number>
               multipliers.push([a, b])
           }
       }
    }

    return multipliers
}

function solution(reports:Array<Array<number>>):number{
    let sum = 0

    for(let [a, b] of reports){
        sum += a * b
    }
    return sum;
    
}


function main(){
    const input = getInput();
    const functionsA = processInputA(input)
    const multipliersA = parseMultipliersA(functionsA)
    console.log(solution(multipliersA))
    const functionsB = processInputB(input)
    const multipliersB = parseMultipliersB(functionsB)
    console.log(solution(multipliersB))
}

main();