a)
import sys
lines = sys.stdin.read().splitlines()
print(len(lines[0]),len(lines[1]))
print(lines[0],lines[1])
_________________________________
b)
a = input()
s = a.split("\\")
print(s[0])
__________________________________
c)
import sys
lines = sys.stdin.read().splitlines()
L = sorted(lines)
print(L[0])
___________________________________
d)
import sys
lines = sys.stdin.read().splitlines()
print(len(lines[0]),len(lines[1]))
print(lines[0]+lines[1])

a = list(lines[0])
s = list(lines[1])
a1 = a[0]
s1 = s[0]

a[0]=s1
s[0]=a1

print(''.join(a),''.join(s))
_______________________________________
e)
a = input()
s = list(map(int,a))
sum = 0
for i in range(0,len(s)):
 sum = sum+s[i]
print(sum)
__________________________________
f)
num = input()
import sys
Lines = sys.stdin.read().splitlines()
fin = []

for i in Lines:
  if len(i)<=10:
   fin.append(i)
  else:
   fin.append(str(i[0]) + str(len(i) - 2) + str(i[-1]))

for k in fin:
 print(k)
__________________________________________________
G)
