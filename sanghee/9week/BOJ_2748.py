# https://www.acmicpc.net/problem/2748
# feat: 피보나치 수 2 BOJ_2748.py

# 피보나치 수는 0과 1로 시작한다. 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1이다. 그 다음 2번째 부터는 바로 앞 두 피보나치 수의 합이 된다.

# 이를 식으로 써보면 Fn = Fn-1 + Fn-2 (n ≥ 2)가 된다.

# n=17일때 까지 피보나치 수를 써보면 다음과 같다.

# 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597

# n이 주어졌을 때, n번째 피보나치 수를 구하는 프로그램을 작성하시오.

# 입력
# 첫째 줄에 n이 주어진다. n은 90보다 작거나 같은 자연수이다.

# 출력
# 첫째 줄에 n번째 피보나치 수를 출력한다.

# A(1) = 0
# A(2) = 1
# A(n+2) = A(n) + A(n+1)

# 재귀는 오래 걸린다 -> 다른 방법이 가능한지 항상 검토해보기

n = int(input())
if (n == 1 or n == 2):
  print(1)

else:
  a, b = 1, 1
  for i in range(3, n + 1):
    a, b = b, a + b
  print(b)