G. Palindrome Array

num = input()
Line = list(map(int, input().split()))
 
f =list(reversed(Line))
 
if f==Line:
    print("YES")
else:
    print("NO")
    
___________________________________________________________________
J. Lucky Array

num = input()
A = (list(map(int,input().split())))
minn = min(A)
c=A.count(minn)
 
 
if c%2==0:
    print("Unlucky")
else:
    print("Lucky")
    
 ___________________________________________________________________
I. Smallest Pair
import sys
 
Lines = sys.stdin.read().splitlines()
 
 
 
for k in range(2, len(Lines),2):
    A = (list(map(int, Lines[k].split())))
 
    fin = []
    for i in A:
        for j in A[int(A.index(i) + 1)::]:
            sum = i + j + (A.index(j) + 1) - (A.index(i) + 1)
            fin.append(sum)
    print(min(fin))
 ___________________________________________________________________
 H. Sorting

num = input()
Line = list(map(int, input().split()))
 
f = sorted(Line)
print(' '.join(str(e) for e in (f)))

___________________________________________________________________
O. Fibonacci

n1, n2 = 0, 1
num = int(input())
count = 0
res = []
 
if num ==1:
    print(0)
else:
    while count < num:
       Nth = n1+n2
       res.append(n1)
       n1 = n2
       n2 = Nth
       count +=1
 
    print(res[num-2]+res[num-3])
    
 
