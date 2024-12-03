import fs from 'fs';

function getInput(): Array<string>{
    const data = fs.readFileSync('../../inputs/day2.txt', 'utf8');
    const lines = data.split('\n')

    return lines;
}

function processInput(input: Array<string>): Array<Array<number>>{
    const reports:Array<Array<number>> = [];
    for(let line of input){
        const report = line.split(' ').map(Number);
        reports.push(report)
    }

    return reports;
}

function isSafe(report:Array<number>):boolean{
    let isIncreasing = true
    let isDecreasing = true
    let isJumpOk = true
    let i = 1
    while(i < report.length && (isIncreasing || isDecreasing) && isJumpOk){
        if(report[i-1] <= report[i])
            isDecreasing = false
        if(report[i-1] >= report[i])
            isIncreasing = false
        if(Math.abs(report[i] - report[i-1]) > 3)
            isJumpOk = false
        i++
    }

    return (isIncreasing || isDecreasing) && isJumpOk
}

function solutionA(reports:Array<Array<number>>):void{
    let sum = 0
    for(let report of reports){
        if(isSafe(report))
            sum++
    }

    console.log(sum)
}

function solutionB(reports:Array<Array<number>>):void{
    let sum = 0
    for(let report of reports){
        if(isSafe(report))
            sum++
        else{
            for(let i = 0; i < report.length; i++){
                let modifiedReport = [...report]
                modifiedReport.splice(i, 1)
                if(isSafe(modifiedReport)){
                    sum++
                    break
                }
            }
        }
    }

    console.log(sum)
}


function main(){
    const input = getInput();
    const reports = processInput(input)
    solutionA(reports)
    solutionB(reports)
}

main();