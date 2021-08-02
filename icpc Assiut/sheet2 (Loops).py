b)
n = int(input())
i=1
while i <= n:
    if i%2==0:
        print(i)
    i=i+1
_______________________________
b)
n = int(input())
list =[]
for i in range (1,n+1):
    if i%2==0:
        list.append(i)

if len(list) ==0:
    print("-1")
else:
    for i in range (1,n+1):
        if i%2==0:
            print(i)
_______________________________
c)
num = int(input())
MAP = map(int,input().split())
Even=int(0)
Odd=int(0)
Positive=int(0)
Negative=int(0)

for j in MAP:
    if j % 2 == 0:
        Even = Even + 1

    if j % 2 != 0:
         Odd = Odd + 1

    if j > 0:
        Positive = Positive+1

    if j < 0:
        Negative = Negative+1


print("Even: "+str(Even))
print("Odd: "+str(Odd))
print("Positive: "+str(Positive))
print("Negative: "+str(Negative))
_______________________________________
D)
import sys
lines = sys.stdin.read().splitlines()

for i in lines:
    if i != "1999":
        print("Wrong")
    elif i == "1999":
        print("Correct")
        break
________________________________________
f)
num = int(input())
List = {1,2,3,4,5,6,7,8,9,10,11,12}
for i in List:
    print(str(num)+" * "+str(i)+" = "+str(num*i))

____________________________________________
G)
import sys
num = input()
rez = 1
lines = sys.stdin.read().splitlines()
for i in lines:
    for j in range(2,int(i)+1):
       rez = rez*j
    rez1=rez
    print(rez1)
    rez=1

____________________________________________
H)
num = int(input())
rez=[]
for i in range(2,num+1):
    if i!=num and num % int(i)==0:
        rez.append("NO")
if int(len(rez)) == 0:
    print("YES")
else:
    print("NO")

____________________________________________
i)
num = input()
numre = num[::-1]

if numre ==num:
    print(num)
    print("YES")

else:
    print(int(numre))
    print("NO")

____________________________________________
j)
num = int(input())
rez=[]
numbers=[]
out=[]
last=[]
for i in range(2,num+1):
    for j in range (2,i):
        if i!=j  and  int(i) % int(j)==0:
            rez.append(i)
            break
for k in range(2,num+1):
    numbers.append(k)


last=(list(set(numbers) - set(rez)))
last.sort()

for m in last:
    print(m,end=" ")


________________________________________________
k)
num = int(input())
for i in range(1,num+1):
    if num%i == 0:
        print(i)
    else:
        i=i+1
___________________________________________________
l)
num1, num2 = map(int, input().split())
num11 = []
num22 = []

for i in range(1, num1 + 1):
    if num1 % i == 0  and num2 % i == 0:
        num11.append(i)

    else:
        i = i + 1


print(max(num11))
____________________________________________________________________-
M)
a,s = map(int,input().split())
List = []
fin = []


for k in range(a,s+1):
    List.append(k)


for j in range(0,len(List)):
    rez = str(List[j])
    lenn = len(str(rez))
    for i in range(0, lenn):
        if rez[i] != "4" and rez[i] != "7":
            break
        else:
            if int(i) == int(lenn) - 1:
                fin.append(rez)
            else:
                i = i + 1

if int(len(fin)) == 0:
    print(-1)
else:
    print(" ".join(fin))



__________________________________________________
R)
import sys
lines = sys.stdin.read().splitlines()
numlist = []
sum = 0
for k in range(0,len(lines)):
  rez = str(lines[k])
  rez = rez.replace(" ",",")
  rez = rez.split(",")
  rezf =list( map(int,rez))
  rezs = sorted(rezf)

#loop to form numlist, the numbers between the two input numbers

  for i in range (int(rezs[0]),(int(rezs[-1])+1)):
   if i==0 or i<0:
    break
   else:
      numlist.append(i)

#loop to sum the numbers between the two input list

  for j in numlist:
   sum=sum+j
  if sum==0:
   break
  else:
    print( ' '.join(str(e) for e in numlist)+" sum ="+ str(sum))
    sum = 0
    numlist = []
________________________________________
s)
num = input()
import sys

lines = sys.stdin.read().splitlines()
numlist = []
sum = 0
for k in range(0, len(lines)):
    rez = str(lines[k])
    rez = rez.replace(" ", ",")
    rez = rez.split(",")
    rezf = list(map(int, rez))
    rezs = sorted(rezf)

    # loop to form numlist, the numbers between the two input numbers

    for i in range(int(rezs[0])+1,int(rezs[-1])):
        numlist.append(i)



    # loop to sum the numbers between the two input list

    for j in numlist:

        if j % 2 != 0:
            sum = sum + j
    print(sum)
    sum = 0
    numlist = []
__________________________________________
u)
numlist,a,s = map(int,input().split())
num= []
for l in range(1,numlist+1):
   strnum = str(l)
   num.append(strnum)

fin = []
sum = 0
for i in num:
    for j in i:
        sum = sum + (int(j))
    if sum >=a and sum<=s:
        fin.append(i)
    sum = 0


sumfin = 0
fin = list(map(int,fin))
for k in fin:
    sumfin = sumfin+k
print(sumfin)


___________________________________________
N)
sy = input()
num = input()
MAP = map(int,input().split())
for i in MAP:
    print(sy**int(i))

_____________________________________________________
O)
num = int(input())
for i in range(1,num+1):
    print("*"*i)

_____________________________________________________
P)
num = int(input())
List = []
for i in range(1,num+1):
    List.append("*"*i)

reList = reversed(List)

for m in reList:
    print(m,sep="")

______________________________________________________
Q)
num = int(input())
List = []
for i in range(1,num+1):
    List.append(input())

for j in List:
    rei = reversed(j)
    stri =  ' '.join(str(e) for e in rei)
    print(stri)

______________________________________________________
v)
num = int(input())
num4 = num*4
fin = []

for i in range(1,num4+1):
    fin.append(i)

for k in range(0,len(fin)):
    if fin[k]%4==0:
      fin[k]="PUM"


size = len(fin)
idx_list = [idx + 1 for idx, val in
            enumerate(fin) if val == "PUM"]

res = [fin[i: j] for i, j in
        zip([0] + idx_list, idx_list +
        ([size] if idx_list[-1] != size else []))]


for j in res:
    print(' '.join(str(e) for e in j))

______________________________________________________
w)
num = int(input())
fin = []

j=1
k=1
for i in range(1, num+1):
    fin.append(' ' * (num - j) + '*' * k)
    k =k+2
    j = j + 1

refin = reversed(fin)

for l in fin:
    print(l)
for d in refin:
    print(d)
__________________________________________________________
x)
num = input()
import sys
Lines = sys.stdin.read().splitlines()

for k in Lines:
    pnum = bin(int(k))
    fin = []
    res = []

    for i in pnum:
        if i == "1":
           fin.append(i)

    j=0
    sum = 0
    for i in range(len(fin)):
        sum =sum + (1*(pow(2,j)))
        j=j+1
    print(sum)
__________________________________________________________
y)
num = int(input())
fin = []
n1 = 0
n2 = 1

if num == 1:
    print('0')
elif num == 2:
    print('0 1')
elif num == 3:
    print('0 1 1')
else:
    fin = [0, 1]
    for i in range(num - 2):
        fin.append(fin[i] + fin[i + 1])

    print(' '.join(str(e) for e in fin))

_________________________________________________________________
z)
import math
k,s = map(int,input().split())
mid = s/2
mid = math.ceil(mid)


List = []
for i in range(mid,s+1):
    List.append(i)


fin = []
for j in List:
    if j==s:
        fin.append(3*1)
    else:
        fin.append(3*2)

print(sum(fin))






















































