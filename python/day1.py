
def getInput():
    data = []
    with open("../inputs/day1.txt", "r") as file:
        for line in file:
            data.append([int(x) for x in line.strip("\n").split("   ")])
    return data

def splitIntoArrays(data):
    arrL, arrR = [], []
    for pair in data:
        arrL.append(pair[0])
        arrR.append(pair[1])

    return [arrL, arrR]

def solutionA(data):
    arrL, arrR = splitIntoArrays(data)

    arrL.sort()
    arrR.sort()

    sum = 0
    for i in range(len(arrL)):
        sum += abs(arrL[i] - arrR[i])

    return sum

def countElements(arr):
    counter = dict()
    for ele in arr:
        if ele in counter:
            counter[ele] += 1
        else:
            counter[ele] = 1

    return counter

def solutionB(data):
    arrL, arrR = splitIntoArrays(data)

    counterL = countElements(arrL)
    counterR = countElements(arrR)

    sum = 0
    for key in counterL:
        if key in counterR:
            sum += counterR[key] * key

    return sum

data = getInput()
print(solutionA(data))
print(solutionB(data))