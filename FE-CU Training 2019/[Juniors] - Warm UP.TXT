a)
n,k = map(int,input().split())
Line = list(map(int,input().split()))
sum = 0

for i in Line:
  if i>=Line[k-1] and i>0 :
   sum = sum+1
  else:
   i=i+1

print(sum)
______________________________

b)
n= int(input())
m = n-2
if m>0 and m%2==0:
  sum = "YES"
else:
  sum = "NO"
print(sum)

____________________________________

e)
fin = "3+2+1"

List = list(sorted(fin))

for i in List:
    if str(i)=="+":
      List.remove(i)
print(List)

__________________________
c)
a,s = map(int,input().split())
Lines = map(int,input().split())

mylist = list(dict.fromkeys(Lines))
print(mylist)

if len(mylist)==s:
    print("YES")
else:
    print("NO")
_____________________________________________
to print the index of all items in the list:
# areas list
areas = [11.25, 18.0, 20.0, 10.75, 9.50]

# Change for loop to use enumerate() and update print()
for index, area in enumerate(areas) :
 print("room " + str(index) + ": " + str(areas[index]))
    




