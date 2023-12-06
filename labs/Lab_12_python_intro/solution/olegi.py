import bisect

def find_median_sum(n, sequence):
    sorted_sequence = []
    median_sum = 0
    for i in range(n):
        bisect.insort(sorted_sequence, sequence[i])
        median_sum += (sorted_sequence[i // 2] + sorted_sequence[(i + 1) // 2]) / (2 - i % 2)
    return median_sum
N = int(input())
X = list(map(int, input().split()))
result = find_median_sum(N, X)
print(result)
#Олег ♂крутой♂☺