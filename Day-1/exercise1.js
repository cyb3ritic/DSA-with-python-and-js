/*
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
*/

// writing a javascript function to get sorted squared array using BRUTEFORCE METHOD

function sorted_squared(array){
    new_array = new Array(array.length - 1).fill(0);
    for(let i = 0 ; i<array.length; i++){

        new_array[i] = array[i] * array[i]
    }
    new_array.sort((a,b)=> a-b )
    return new_array;

    // T -> O(n + n(logn)) -> O(n(logn))
    // S -> O(n)     
}

// writing a javascript function to get sorted squared array. Alternative method

function sorted_squared(array){
    new_array = new Array(array.length).fill(0)
    let first = 0;
    let last = array.length - 1;
    for (let i = last; i >= 0; i-- ){
        if(array[last] ** 2 > array[first] ** 2){
            new_array[i] = array[last] ** 2
            last--;
        }
        else{
            new_array[i] = array[first] ** 2
            first++

        }
    }
    return new_array;

    //T -> O(n)
    // S -> O(n)  
}



a = [1,3,5]
b = [0,5,6]
c = [2,3,3]
d = [-4,-2,0,1,3]
console.log(sorted_squared(a))
console.log(sorted_squared(b))
console.log(sorted_squared(c))
console.log(sorted_squared(d))
