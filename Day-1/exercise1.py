'''
            Sorted Squared Array
            
You  are given an array of integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

Clarifying Questions:
1) Are all numbers positive? 
--> No, can be negative or zero as well

2) Are the Integers distinct?
--> Not necessarily

3) Can an empty array of integers be given as input?
--> Yes, return an empty array in this case

*********************************************************************************************************************************
'''

'''
        Formulating some test cases on my own :
        
Input -----------------> Output

[1,3,5]----------------> [1,9,25]
[0,5,6]----------------> [0,25,36]
[2,3,3]----------------> [4,9,9]
[-4,-2,0,1,3]----------> [0,1,4,9,16]
        
'''

## writing a python function to get sorted squared array using BRUTEFORCE METHOD##

def sorted_squared(array):
    new_array = [0]*len(array)
    for i in range(len(array)):
        new_array[i] = array[i] * array[i]
    new_array.sort()
    return new_array
# T -> O(n + n(logn)) -> O(n(logn))
# S -> O(n)  


## writing a python function to get sorted square array 

def sorted_squared(array):
    first = 0
    last = len(array)-1
    new_array = [0]*len(array)
    for i in range(last,-1,-1):
        if array[last] ** 2 > array[first] ** 2:
            new_array[i] = array[last] ** 2
            last -= 1
        else:
            new_array[i] = array[first] ** 2
            first += 1
    return new_array
# T -> O(n)
# S -> O(n)  


a = [1,3,5]
b = [0,5,6]
c = [2,3,3]
d = [-4,-2,0,1,3]
print(sorted_squared(a))
print(sorted_squared(b))
print(sorted_squared(c))
print(sorted_squared(d))
