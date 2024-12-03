def getInput():
    data = []
    with open("../inputs/day2.txt", "r") as file:
        for line in file:
            data.append([int(x) for x in line.strip("\n").split(" ")])

    return data

def isSafe(report):
    isIncreasing = True
    isDecreasing = True
    isJumpOk = True
    i = 1
    while i < len(report) and (isIncreasing or isDecreasing) and isJumpOk:
        if report[i-1] <= report[i]:
            isDecreasing = False
        if report[i-1] >= report[i]:
            isIncreasing = False
        if abs(report[i] - report[i-1]) > 3:
            isJumpOk = False
        i += 1

    return (isIncreasing or isDecreasing) and isJumpOk


def solutionA(data):
    sum = 0
    for report in data:
        if isSafe(report):
            sum += 1

    return sum

def solutionB(data):
    sum = 0

    for report in data:
        if isSafe(report):
            sum += 1
        else:
            for i in range(len(report)):
                modifiedReport = report[:i] + report[i + 1 :]
                if isSafe(modifiedReport):
                    sum += 1
                    break

    return sum

data = getInput()
print(solutionA(data))
print(solutionB(data))