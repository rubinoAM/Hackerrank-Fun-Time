import math

def repeatedString(s,n):
    remainder = n % len(s)
    dividedNumber = math.floor(n/len(s))
    count = 0
    countRemainder = 0
    for char in s:
        if char == 'a':
            count += 1
    for i in range(0,remainder):
        if s[i] == 'a':
            countRemainder += 1
    totalCount = (count * dividedNumber) + countRemainder
    print(totalCount)

string = 'aba'
repeatedString(string,10)