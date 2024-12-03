import re

def get_input():
    with open('../inputs/day3.txt', 'r', encoding='utf8') as file:
        data = file.read()
    return data

def process_input_a(input):
    regex_matches = re.findall(r'mul\(\d{1,3},\d{1,3}\)', input)
    functions = [str(match) for match in regex_matches]
    return functions

def parse_multipliers_a(functions):
    multipliers = []
    for func in functions:
        a, b = map(int, re.findall(r'\d{1,3}', func))
        multipliers.append([a, b])
    return multipliers

def process_input_b(input):
    regex_matches = re.findall(r'mul\(\d{1,3},\d{1,3}\)|do\(\)|don\'t\(\)', input)
    functions = [str(match) for match in regex_matches]
    return functions

def parse_multipliers_b(functions):
    multipliers = []
    is_enabled = True
    for func in functions:
        if func == "do()":
            is_enabled = True
        elif func == "don't()":
            is_enabled = False
        elif "mul" in func and is_enabled:
            a, b = map(int, re.findall(r'\d{1,3}', func))
            multipliers.append([a, b])
    return multipliers

def solution(reports):
    return sum(a * b for a, b in reports)


input_data = get_input()
functions_a = process_input_a(input_data)
multipliers_a = parse_multipliers_a(functions_a)
print(solution(multipliers_a))
functions_b = process_input_b(input_data)
multipliers_b = parse_multipliers_b(functions_b)
print(solution(multipliers_b))