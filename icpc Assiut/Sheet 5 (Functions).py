H. N Times

num = int(input())
lists = [input() for i in range(num)]
for i in lists:
    smallList = i.split()
    string = str(smallList[1]) * int(smallList[0])
    string2 = list(string)
    print(" ".join(string2))
 __________________________________________________________
J. Average

def average(num):
    List = list(map(float, input().split()))
    res = sum(List) / len(List)
    print(format(res,".7f"))
 
 
average(num=int(input()))
