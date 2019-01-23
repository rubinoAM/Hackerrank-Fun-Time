def countingValleys(n,s): #Again, the number is unnecessary
    sea_level = 0 #U = +1 D = -1
    valleyCount = 0
    array = list(s)
    for char in array:
        if char == 'U':
            sea_level += 1
            if sea_level == 0:
                valleyCount += 1
        elif char == 'D':
            sea_level -= 1
    print(valleyCount)

path = 'UDDDUDUU'
num = len(path)
countingValleys(num,path)