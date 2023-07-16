# Enter your code here. Read input from STDIN. Print output to STDOUT
if __name__ == '__main__':
    n = int(input())
    strings = []
    for _ in range(n):
        s = input()
        strings.append(s)
    for s in strings:
        s_evens = ''
        s_odds = ''
        for i in range(len(s)):
            if i % 2 == 0:
                s_evens += s[i]
            else:
                s_odds += s[i]
        print(f"{s_evens} {s_odds}")
