import os

X = 0
Y = 1

def get_input():
    with open('../inputs/day4.txt', 'r') as file:
        data = file.read()
    return data

def process_input(input):
    data = [list(line) for line in input.split('\n')]
    return data

def is_position_valid(pos, grid):
    x, y = pos
    return x >= 0 and x < len(grid) and y >= 0 and y < len(grid[0])

def check_direction(pos, vector, grid, word):
    for i in range(len(word)):
        nxt_x = pos[X] + i * vector[X]
        nxt_y = pos[Y] + i * vector[Y]

        if not is_position_valid((nxt_x, nxt_y), grid):
            return False
        if grid[nxt_x][nxt_y] != word[i]:
            return False
    return True

def solution_a(grid, word):
    sum = 0
    directions = [
        (0, 1),
        (1, 0),
        (1, 1),
        (1, -1),
        (0, -1),
        (-1, 0),
        (-1, -1),
        (-1, 1),
    ]

    for i in range(len(grid)):
        for j in range(len(grid[i])):
            for direction in directions:
                if check_direction((i, j), direction, grid, word):
                    sum += 1
    return sum

def solution_b(grid):
    sum = 0
    for i in range(1, len(grid) - 1):
        for j in range(1, len(grid[i]) - 1):
            if grid[i][j] == "A":
                if (grid[i-1][j-1] == "M" and grid[i+1][j+1] == "S") or (grid[i-1][j-1] == "S" and grid[i+1][j+1] == "M"):
                    if (grid[i+1][j-1] == "M" and grid[i-1][j+1] == "S") or (grid[i+1][j-1] == "S" and grid[i-1][j+1] == "M"):
                        sum += 1
    return sum


input = get_input()
data = process_input(input)
print(solution_a(data, 'XMAS'))
print(solution_b(data))